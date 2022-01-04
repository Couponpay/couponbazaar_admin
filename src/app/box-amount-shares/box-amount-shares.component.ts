import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
import { NzMessageService } from 'ng-zorro-antd';
import { ImageCropperComponent, ImageCroppedEvent } from 'ngx-image-cropper';
import { HttpResponse, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-box-amount-shares',
  templateUrl: './box-amount-shares.component.html',
  styleUrls: ['./box-amount-shares.component.css']
})
export class BoxAmountSharesComponent implements OnInit {
  isloading: boolean;
  boxShares = [];
  selectedRecord: any;
  isvisible: boolean;
  addboxSharesForm: FormGroup
  isAddButton: boolean;

  cropperMinWidth = 1680
  cropperMinHeight = 280
  resizeToWidth = 1680
  resizeToHeight = 280
  showCropper = false;
  SNo: number;
  croppedImage: any = '';
  isUploadBtnLoading: boolean;
  @ViewChild('myInput') myInputVariable: ElementRef;
  @ViewChild(ImageCropperComponent) imageCropper: ImageCropperComponent;
  imageChangedEvent: any = '';
  isImageUploading: boolean;
  ValidatingStatus: string;

  ImageData = []

  constructor(
    private fb: FormBuilder,
    private _appService: AppService,
    private nzMessageService: NzMessageService
  ) { }

  ngOnInit() {
    this.getboxShares()
    this.addboxSharesForm = this.fb.group({
      Product_Name: [null, [Validators.required]],
      Description: [null, [Validators.required]],
      Price: [null, [Validators.required]],
      Cash_Percent1: [null, [Validators.required]],
      Purchace_Percent1: [null, [Validators.required]],
      Gift_Percent1: [null, [Validators.required]],
      Upgrade_Coupon_Percent1: [null, [Validators.required]],
      Nine_Level_Percent1: [null, [Validators.required]],
      Cash_Percent2: [null, [Validators.required]],
      Purchace_Percent2: [null, [Validators.required]],
      Gift_Percent2: [null, [Validators.required]],
      Upgrade_Coupon_Percent2: [null, [Validators.required]],
      Nine_Level_Percent2: [null, [Validators.required]],
      Cash_Percent3: [null, [Validators.required]],
      Purchace_Percent3: [null, [Validators.required]],
      Gift_Percent3: [null, [Validators.required]],
      Upgrade_Coupon_Percent3: [null, [Validators.required]],
      Nine_Level_Percent3: [null, [Validators.required]],
    });
  }
  getboxShares() {
    this.isloading = true
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))

    let userdata = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
    }
    try {

      this._appService.postMethod('List_Box_Amount_Shares', userdata)
        .subscribe(resp => {
          this.isloading = false

          if (resp.success) {
            this.boxShares = resp.extras.Data
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
  onUpdate(data){
    this.selectedRecord = data
    this.isvisible = true;
    this.addboxSharesForm.patchValue({
      Price: this.selectedRecord.Price,
      Description: this.selectedRecord.Description,
      Product_Name: this.selectedRecord.Product_Name,
      Cash_Percent1: this.selectedRecord.Box_One.Cash_Percent,
      Purchace_Percent1: this.selectedRecord.Box_One.Purchace_Percent,
      Gift_Percent1: this.selectedRecord.Box_One.Gift_Percent,
      Upgrade_Coupon_Percent1: this.selectedRecord.Box_One.Upgrade_Coupon_Percent,
      Nine_Level_Percent1: this.selectedRecord.Box_One.Nine_Level_Percent,

      Cash_Percent2: this.selectedRecord.Box_Two.Cash_Percent,
      Purchace_Percent2: this.selectedRecord.Box_Two.Purchace_Percent,
      Gift_Percent2: this.selectedRecord.Box_Two.Gift_Percent,
      Upgrade_Coupon_Percent2: this.selectedRecord.Box_Two.Upgrade_Coupon_Percent,
      Nine_Level_Percent2: this.selectedRecord.Box_Two.Nine_Level_Percent,

      Cash_Percent3: this.selectedRecord.Box_Three.Cash_Percent,
      Purchace_Percent3: this.selectedRecord.Box_Three.Purchace_Percent,
      Gift_Percent3: this.selectedRecord.Box_Three.Gift_Percent,
      Upgrade_Coupon_Percent3: this.selectedRecord.Box_Three.Upgrade_Coupon_Percent,
      Nine_Level_Percent3: this.selectedRecord.Box_Three.Nine_Level_Percent,
    })
    this.ImageData =[]
    this.ImageData.push(this.selectedRecord.Image_Data)
  }
  onCancel(){
    this.isvisible = false;
    this.addboxSharesForm.reset()
    this.ImageData = []
  }
  onAddCategory() {
    this.isAddButton = true
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {}
    let url = ''
      body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        Product_Name: this.addboxSharesForm.value.Product_Name,
        Description: this.addboxSharesForm.value.Description,
        Price: this.addboxSharesForm.value.Price,
        Image_Available: this.ImageData.length>0?true : false,
        ImageID: this.ImageData.length>0?this.ImageData[0].ImageID:'',
        Box_One:{
          Cash_Percent: this.addboxSharesForm.value.Cash_Percent1,
          Purchace_Percent: this.addboxSharesForm.value.Purchace_Percent1,
          Gift_Percent: this.addboxSharesForm.value.Gift_Percent1,
          Upgrade_Coupon_Percent: this.addboxSharesForm.value.Upgrade_Coupon_Percent1,
          Nine_Level_Percent: this.addboxSharesForm.value.Nine_Level_Percent1
        },
        Box_Two:{
          Cash_Percent: this.addboxSharesForm.value.Cash_Percent2,
          Purchace_Percent: this.addboxSharesForm.value.Purchace_Percent2,
          Gift_Percent: this.addboxSharesForm.value.Gift_Percent2,
          Upgrade_Coupon_Percent: this.addboxSharesForm.value.Upgrade_Coupon_Percent2,
          Nine_Level_Percent: this.addboxSharesForm.value.Nine_Level_Percent2
        },
        Box_Three:{
          Cash_Percent: this.addboxSharesForm.value.Cash_Percent3,
          Purchace_Percent: this.addboxSharesForm.value.Purchace_Percent3,
          Gift_Percent: this.addboxSharesForm.value.Gift_Percent3,
          Upgrade_Coupon_Percent: this.addboxSharesForm.value.Upgrade_Coupon_Percent3,
          Nine_Level_Percent: this.addboxSharesForm.value.Nine_Level_Percent3
        }
      }
      url='Add_Update_Box_Amount_Shares'
    
    try {
      this._appService.postMethod(url, body)
        .subscribe(resp => {
          if (resp.success) {
            this.isAddButton = false
            this.onCancel()
             this.getboxShares()
            this.nzMessageService.success(resp.extras.Status)
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
