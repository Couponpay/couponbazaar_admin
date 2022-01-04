import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
import { NzMessageService } from 'ng-zorro-antd';
import { ImageCropperComponent, ImageCroppedEvent } from 'ngx-image-cropper';
import { HttpResponse, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  cropperMinWidth = 1680
  cropperMinHeight = 280
  resizeToWidth = 1680
  resizeToHeight = 280
  showCropper = false;
  SNo: number;
  croppedImage: any = '';
  isUploadBtnLoading: boolean;
  BannerImageData = [];
  @ViewChild('myInput') myInputVariable: ElementRef;
  @ViewChild(ImageCropperComponent) imageCropper: ImageCropperComponent;
  imageChangedEvent: any = '';
  isImageUploading: boolean;
  visible = false;
  createBanner: FormGroup;
  ind: any;
  currentPage = 1
  TotalItems: any;
  isloading: boolean;
  skip = 0;
  limit = this._appService.limit
  ListBannerData: any = []
  BannerID: any;
  onEditOpen = false
  uploadingBannerType: number = 1;
  webBannerImageData = [];
  constructor(private fb: FormBuilder,
    private _appService: AppService,

    private nzMessageService: NzMessageService
  ) {

  }


  ngOnInit() {
    this.createBanner = this.fb.group({
      SNo: [null],
      Banner_Name: [null],
      // ImageID: [null, [Validators.required]],

    });

    this.ListAllBanner()
  }

  ListAllBanner() {
    this.isloading = true
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))

    let userdata = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      skip: this.skip,
      limit: this._appService.limit,
    }
    try {

      this._appService.postMethod('List_All_Banner', userdata)
        .subscribe(resp => {
          this.isloading = false

          if (resp.success) {
            this.TotalItems = resp.extras.Count
            if (this.skip == 0) {
              this.currentPage = 1

            }
            this.ListBannerData = resp.extras.Data
            console.log(this.ListBannerData)
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

  onActionOnBanner(data, i) {
    this.BannerID = data.BannerID
    this.ind = i
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      BannerID: this.BannerID
    }
    try {

      this._appService.postMethod('Active_Inactive_Banner', body)
        .subscribe(resp => {
          if (resp.success) {
            let msg;
            if (data.Status) {
              msg = 'Inactivated Successfully'
            } else {
              msg = 'Activated Successfully'
            }
            this.ListAllBanner()
            this.nzMessageService.success(msg)

          } else {
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);

          }
        },
          error => {

          })
    } catch (e) { }
  }

  onNextPage(event: number) {

    this.currentPage = event
    this.skip = (event - 1) * this._appService.limit
    this.ListAllBanner()
  }

  open(): void {
    this.BannerImageData = []
    this.visible = true;
    this.onEditOpen = false
    this.createBanner.reset()
    this.imageChangedEvent = null
    this.isImageUploading = false
    this.isUploadBtnLoading = false
    this.croppedImage = ''
    this.SNo = null
  }

  close(): void {
    this.visible = false;
  }

  BannerForm() {
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {}
    let url = ''
    if (this.onEditOpen == true) {
      url = 'Edit_Banner'
      console.log("text")
      body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        Banner_Name: this.createBanner.value.Banner_Name,
        ImageID: this.BannerImageData[0].ImageID,
        Web_ImageID: this.webBannerImageData[0].ImageID,
        BannerID: this.BannerID,
        SNo: this.createBanner.value.SNo
      }
    } else {
      url = 'Create_Banner'
      console.log("text1")
      body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        Banner_Name: this.createBanner.value.Banner_Name,
        ImageID: this.BannerImageData[0].ImageID,
        Web_ImageID: this.webBannerImageData[0].ImageID,

        SNo: this.createBanner.value.SNo
      }
      console.log(body)
    }



    try {

      this._appService.postMethod(url, body)
        .subscribe(resp => {
          if (resp.success) {
            this.createBanner.reset()
            if (this.onEditOpen == true) {
              this.visible = false;
              this.nzMessageService.success('Updated')
              this.ListAllBanner()


            } else {
              this.visible = false;
              this.nzMessageService.success('Banner Created Sucessfully')
              this.ListAllBanner()
            }

          }
          else {
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


          }
        },
          error => {

          })
    } catch (e) { }
  }

  onEdit(data, i) {
    this.visible = true;
    this.BannerID = data.BannerID
    this.createBanner.patchValue({
      SNo: data.SNo,
      Banner_Name: data.Banner_Name,

    })
    this.BannerImageData = []
    this.BannerImageData.push(data.Image_Data)
    this.webBannerImageData=[]
    this.webBannerImageData.push(data.WebImageData)
    this.onEditOpen = true

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
  onUploadBannerImage(type: number) {

    this.isImageUploading = true

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
    this.SNo = null
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
       
         
          if(this.uploadingBannerType==1){
            this.webBannerImageData = []
            this.webBannerImageData.push({

              ImageID: event.body.extras.ImageID,
              ImageOriginal: event.body.extras.ImageOriginal
            })
          }
          else if(this.uploadingBannerType==2){
            this.BannerImageData = []
            this.BannerImageData.push({

              ImageID: event.body.extras.ImageID,
              ImageOriginal: event.body.extras.ImageOriginal
            })
          }
         
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
  onUploadProductImage(type: number) {
    this.croppedImage=''
if(this.myInputVariable!=undefined){
  this.myInputVariable.nativeElement.value = "";
 
}
    this.uploadingBannerType = type
    if (type == 1) {
      this.resizeToHeight = 280
      this.resizeToWidth = 1680

      this.cropperMinHeight = 280
      this.cropperMinWidth = 1680
    }
    else if (type == 2) {
      this.resizeToHeight = 150
      this.resizeToWidth = 350

      this.cropperMinHeight = 150
      this.cropperMinWidth = 350
    }
    this.isImageUploading = true
  }
}
