import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
import { NzMessageService } from 'ng-zorro-antd';
import { ImageCropperComponent, ImageCroppedEvent } from 'ngx-image-cropper';
import { HttpResponse, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-coupon-products',
  templateUrl: './coupon-products.component.html',
  styleUrls: ['./coupon-products.component.css']
})
export class CouponProductsComponent implements OnInit {
  isloading: boolean;
  skip = 0
  limit = this._appService.limit
  currentPage = 1
  totalItem: any;
  couponProducts = [];
  selectedData: any;
  isAdding: boolean;
  isEditing: boolean;
  createCoupon: FormGroup

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
  selectedtab: any;
  isDrawer: boolean;
  couponShares = 0
  levels: number[] = [0, 0, 0]
  constructor(
    private fb: FormBuilder,
    private _appService: AppService,
    private nzMessageService: NzMessageService
  ) { }

  ngOnInit() {
    this.onChangeTab(1)
    this.createCoupon = this.fb.group({
      SNo: [null, [Validators.required]],
      C_Product_Name: [null, [Validators.required]],
      C_Product_Description: [null, [Validators.required]],
      C_Product_Price: [null, [Validators.required]],
      Cash_Coupons_Share: [null, [Validators.required]],
      Purchace_Coupons_Share: [null, [Validators.required]],
      Gift_Coupons_Share: [null, [Validators.required]],
      Update_Coupons_Share: [null, [Validators.required]],
      // ImageID: [null, [Validators.required]],

    });
    this.createCoupon.get('SNo').valueChanges.subscribe((data: any) => {
      if (this.createCoupon.get('SNo').valid) {
        this.checkSerialNumber(data)
      } else {
        this.ValidatingStatus = ''
      }

    })
  }
  onChangeTab(event) {
    this.selectedtab = event
    this.skip = 0
    this.getCouponProducts()
  }
  getCouponProducts() {
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

      this._appService.postMethod('List_Coupon_Products', userdata)
        .subscribe(resp => {
          this.isloading = false

          if (resp.success) {
            if (this.skip == 0) {
              this.currentPage = 1
            }
            this.totalItem = resp.extras.Count
            this.couponProducts = resp.extras.Data
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
    this.getCouponProducts()
  }
  onAdd() {
    this.isAdding = true;
    this.isEditing = false
  }
  onCancel() {
    this.isAdding = false;
    this.isEditing = false
    this.createCoupon.reset()
    this.ImageData = []
    this.levels = []
  }
  onEdit(data) {
    this.isAdding = true;
    this.isEditing = true
    this.selectedData = data
    this.createCoupon.patchValue(data)
    this.levels =[]
    this.levels = this.selectedData.Update_Coupons_Share
    this.ImageData = []
    this.ImageData.push(this.selectedData.C_Product_Image_Data)
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
  onAddCouponProduct() {
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {}
    let url = ''
    if (this.isEditing) {
      url = 'Update_Coupon_Products'
      body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        Coupons_ProductID: this.selectedData.Coupons_ProductID,
        C_Product_Description: this.createCoupon.value.C_Product_Description,
        C_Product_Name: this.createCoupon.value.C_Product_Name,
        SNo: this.createCoupon.value.SNo,
        C_Product_Price: this.createCoupon.value.C_Product_Price,
        Cash_Coupons_Share: this.createCoupon.value.Cash_Coupons_Share,
        Purchace_Coupons_Share: this.createCoupon.value.Purchace_Coupons_Share,
        Gift_Coupons_Share: this.createCoupon.value.Gift_Coupons_Share,
        Update_Coupons_Share: this.levels.map(Number),
        ImageID: this.ImageData.length > 0 ? this.ImageData[0].ImageID : '',
      }
    } else {
      url = 'Add_Coupon_Products'
      body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        C_Product_Description: this.createCoupon.value.C_Product_Description,
        C_Product_Name: this.createCoupon.value.C_Product_Name,
        SNo: this.createCoupon.value.SNo,
        C_Product_Price: this.createCoupon.value.C_Product_Price,
        Cash_Coupons_Share: this.createCoupon.value.Cash_Coupons_Share,
        Purchace_Coupons_Share: this.createCoupon.value.Purchace_Coupons_Share,
        Gift_Coupons_Share: this.createCoupon.value.Gift_Coupons_Share,
        Update_Coupons_Share: this.levels.map(Number),
        ImageID: this.ImageData.length > 0 ? this.ImageData[0].ImageID : '',
      }
    }



    try {

      this._appService.postMethod(url, body)
        .subscribe(resp => {
          if (resp.success) {
            this.onCancel()
            this.nzMessageService.success(resp.extras.status)
            this.getCouponProducts()

          }
          else {
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
        Coupons_ProductID: this.isEditing ? this.selectedData.Coupons_ProductID : ''
      }
      try {
        this._appService.postMethod('Check_For_Coupons_Product_SNo_Available', body)

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
  onClickDrawer() {
    this.isDrawer = true
  }
  OnCloseDrawer() {
    console.log(this.levels)
    this.couponShares = 0
    this.isDrawer = false
    this.levels.forEach((item) => {

      this.couponShares = (+item) + this.couponShares
    })
  }
}
