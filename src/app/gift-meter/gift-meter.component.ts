import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
import { NzMessageService } from 'ng-zorro-antd';
import { ImageCropperComponent, ImageCroppedEvent } from 'ngx-image-cropper';
import { HttpResponse, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-gift-meter',
  templateUrl: './gift-meter.component.html',
  styleUrls: ['./gift-meter.component.css']
})
export class GiftMeterComponent implements OnInit {
  isloading: boolean;
  skip = 0
  limit = this._appService.limit
  currentPage = 1
  totalItem: any;
  selectedtab: any;
  tableData = [];
  isAdding: boolean;
  isEditing: boolean;
  selectedData: any;
  addForm: FormGroup
  ValidatingStatus: string;
  isAddButton: boolean;

  cropperMinWidth = 1680
  cropperMinHeight = 280
  resizeToWidth = 1680
  resizeToHeight = 280
  showCropper = false;
  croppedImage: any = '';
  isUploadBtnLoading: boolean;
  @ViewChild('myInput') myInputVariable: ElementRef;
  @ViewChild(ImageCropperComponent) imageCropper: ImageCropperComponent;
  imageChangedEvent: any = '';
  isImageUploading: boolean;
  ImageData = [];
  constructor(
    private fb: FormBuilder,
    private _appService: AppService,
    private nzMessageService: NzMessageService
  ) { }

  ngOnInit() {
    this.onChangeTab(1)
    this.addForm = this.fb.group({
      SNo: [null, [Validators.required]],
      Title_Name: [null, [Validators.required]],
      Value: [null, [Validators.required]],
    });
    this.addForm.get('SNo').valueChanges.subscribe((data: any) => {
      if (this.addForm.get('SNo').valid) {
        this.checkSerialNumber(data)
      } else {
        this.ValidatingStatus = ''
      }

    })
  }
  onChangeTab(event) {
    this.selectedtab = event
    this.skip = 0
    this.getGiftMeter()
  }
  getGiftMeter() {
    this.isloading = true
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))

    let userdata = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      Active_Inactive_Status: this.selectedtab == 1 ? true : false,
      skip: this.skip,
      limit: this.limit
    }
    try {

      this._appService.postMethod('List_Gift_Meter', userdata)
        .subscribe(resp => {
          this.isloading = false

          if (resp.success) {
            if (this.skip == 0) {
              this.currentPage = 1
            }
            this.totalItem = resp.extras.Count
            this.tableData = resp.extras.Data
          } else {
            this.isloading = false
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


          }
        },
          error => {

          })
    } catch (e) {

    }

  }
  onNextPage(event: number) {
    this.currentPage = this.currentPage
    this.skip = (event - 1) * this.limit
    this.getGiftMeter()
  }
  onAction(data) {
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      Gift_MeterID: data.Gift_MeterID
    }
    try {

      this._appService.postMethod('Activate_Inactivate_Gift_Meter', body)
        .subscribe(resp => {
          if (resp.success) {
            let msg;
            if (data.Status) {
              msg = 'Inactivated Successfully'
            } else {
              msg = 'Activated Successfully'
            }
            this.getGiftMeter()
            this.nzMessageService.success(msg)

          } else {
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);

          }
        },
          error => {

          })
    } catch (e) { }
  }
  checkSerialNumber(serialNumber: string) {
    if (serialNumber.length > 0) {
      this.ValidatingStatus = "validating"
      let adminData: any = JSON.parse(localStorage.getItem("adminData"))
      let body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        SNo: serialNumber,
        Gift_MeterID: this.isEditing ? this.selectedData.Gift_MeterID : ''
      }
      try {
        this._appService.postMethod('Check_For_Gift_Meter_SNo_Available', body)

          .subscribe(resp => {
            if (resp.success) {
              this.ValidatingStatus = 'success'
            } else {
              this.ValidatingStatus = 'error'
            }
          },
            error => {
              this.ValidatingStatus = 'error'
            })
      } catch (e) { }
    } else {
      // this.ValidatingStatus = 'null'
    }


  }
  open() {
    this.isAdding = true;
    this.isEditing = false
  }
  close() {
    this.isAdding = false;
    this.isEditing = false
    this.addForm.reset()
    this.ImageData = []
  }
  onEdit(data) {
    this.isAdding = true;
    this.isEditing = true
    this.selectedData = data
    this.addForm.patchValue(data)
    this.ImageData = []
    this.ImageData.push(this.selectedData.Image_Data)
  }
  onSubmit() {
    this.isAddButton = true
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {}
    let url = ''
    if (this.isEditing) {
      body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        Gift_MeterID: this.selectedData.Gift_MeterID,
        SNo: this.addForm.value.SNo,
        Title_Name: this.addForm.value.Title_Name,
        Value: this.addForm.value.Value,
        Image_Available: this.ImageData.length >0 ? true : false,
        ImageID: this.ImageData.length > 0? this.ImageData[0].ImageID:''
      }
      url = 'Update_Gift_Meter'
    } else {
      body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        SNo: this.addForm.value.SNo,
        Title_Name: this.addForm.value.Title_Name,
        Value: this.addForm.value.Value,
        Image_Available: this.ImageData.length >0 ? true : false,
        ImageID: this.ImageData.length > 0? this.ImageData[0].ImageID:''
      }
      url = 'Add_Gift_Meter'
    }

    try {
      this._appService.postMethod(url, body)
        .subscribe(resp => {
          if (resp.success) {
            this.isAddButton = false
            this.close()
            this.getGiftMeter()
            this.nzMessageService.success(resp.extras.status)
          } else {
            this.isAddButton = false
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);
          }
        },
          error => {

          })
    } catch (e) {
    }
  }

  onUploadProductImage() {
    this.croppedImage = ''
    if (this.myInputVariable != undefined) {
      this.myInputVariable.nativeElement.value = "";

    }
    this.resizeToHeight = 280
    this.resizeToWidth = 1680

    this.cropperMinHeight = 280
    this.cropperMinWidth = 1680
    this.isImageUploading = true
  }
  onSucessCroping() {
    this.isUploadBtnLoading = true
    let imag;
    let str: string = this.croppedImage
    let st4;
    if (str.indexOf('data:image/jpeg;base64,') != -1) {
      st4 = str.replace('data:image/jpeg;base64,', '')
    } else {
      st4 = str.replace('data:image/png;base64,', '')
    }

    const imageBlob = this.dataURItoBlob(st4);
    const imageFile = new File([imageBlob], 'imageName.jpeg', { type: 'image/jpeg' });
    this.send(imageFile)
  }
  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/jpeg' });
    return blob;
  }
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  onCloseImageDrawer() {
    this.imageChangedEvent = null
    this.myInputVariable.nativeElement.value = "";
    this.isImageUploading = false
    this.isUploadBtnLoading = false
    this.croppedImage = ''
  }
  imageCropped(event: ImageCroppedEvent) {
    console.log(event)
    this.croppedImage = event.base64;
  }
  cropperReady() {
    console.log('Cropper ready')
  }
  loadImageFailed() {
    console.log('Load failed');
  }
  imageLoaded() {
    this.showCropper = true;
    console.log('Image loaded')
  }
  send(imageFile) {
    const formData = new FormData();
    formData.append('image', imageFile);
    const req = new HttpRequest('POST', this._appService.ImageUpload_Url + 'Upload_Image', formData, {
      reportProgress: true,
      withCredentials: false
    });
    this._appService.onImageUpload(req).subscribe(
      (event: any) => {
        if (event instanceof HttpResponse) {
          this.isUploadBtnLoading = false

          this.ImageData = []
          this.ImageData.push({

            ImageID: event.body.extras.ImageID,
            ImageOriginal: event.body.extras.ImageOriginal
          })

          this.onCloseImageDrawer()
          // this.imageId = event.body.extras.ImageID
          //this.BannerForm()

        } else if (event instanceof HttpResponse) {

        }
      },
      err => {
        //item.onError!(err, item.file!);
      }
    );
  }
}
