import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { NzMessageService } from 'ng-zorro-antd';
import { ImageCropperComponent, ImageCroppedEvent } from 'ngx-image-cropper';
import { HttpRequest, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  showCropper = false;
  buyerLeveShares = 0
  @ViewChild('myInput') myInputVariable: ElementRef;
  @ViewChild(ImageCropperComponent) imageCropper: ImageCropperComponent;
  isImageUploading: boolean;
  isUploadBtnLoading: boolean;
  productImageUrl: string;
  uploadingType: number;
  ProductImageData = [];
  productGallryData = [];
  SNo: number;
  Category:any
  levels: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  isLevelsDrawer: boolean;
  categoryList: any;
  constructor(private _appService: AppService,
    private nzMessageService: NzMessageService) { }
  ngOnInit() {
    this.getCategoryList()
  }
  onSubmitProduct(productForm: NgForm) {
    console.log(productForm)
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))

    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      Product_Name: productForm.value.Product_Name,
      Product_Weight: productForm.value.Product_Weight,
      Product_Description: productForm.value.Product_Description,
      CategoryID:productForm.value.Select_Category.CategoryID,

      Introducer_Price: productForm.value.Introducer_Share,
      Buyer_Price_Array: this.levels.map(Number),
      Shop_Price: productForm.value.Shop_Share,
      Company_Price: productForm.value.Company_Share,

      ImageID: this.ProductImageData[0].ImageID,
      All_ImageID_Array: this.productGallryData,
      Product_HST: productForm.value.Product_HST,
      Product_GST: productForm.value.Product_GST,
      Product_Quantity: productForm.value.Product_Quantity
    }
    console.log("byy"+JSON.stringify(body))
    try {

      this._appService.postMethod('Add_Product', body)
        .subscribe(resp => {
          if (resp.success) {
            productForm.resetForm()
            this.productGallryData = []
            this.SNo = null
            this.levels=[]
            this.ProductImageData = []
            this.onCloseImageDrawer()
            this.nzMessageService.success('Product Added sucessfully')

          } else {
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


          }
        },
          error => {

          })
    } catch (e) {

    }
  }
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    // console.log(event);
  }
  imageLoaded() {
    this.showCropper = true;
    console.log('Image loaded')
  }
  cropperReady() {
    console.log('Cropper ready')
  }
  loadImageFailed() {
    console.log('Load failed');
  }
  onUploadProductImage(type: number) {
    this.uploadingType = type
    this.isImageUploading = true
    if (type == 1) {

    } else if (type == 2) {

    }


  }
  onCloseImageDrawer() {
    this.imageChangedEvent = null
    this.myInputVariable.nativeElement.value = "";
    this.isImageUploading = false
    this.isUploadBtnLoading = false
    this.croppedImage = ''
    this.SNo = null
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

          if (this.uploadingType == 1) {
            this.ProductImageData = []
            this.ProductImageData.push(event.body.extras)
            this.onCloseImageDrawer()
            console.log(this.ProductImageData)
          }
          else if (this.uploadingType == 2) {
            let SNoIndex = this.productGallryData.findIndex((item) => item.SNo == this.SNo)
            if (SNoIndex == -1) {
              this.productGallryData.push({
                SNo: this.SNo,
                ImageID: event.body.extras.ImageID,
                ImageOriginal: event.body.extras.ImageOriginal
              })
              this.onCloseImageDrawer()

            } else {
              this.nzMessageService.warning('Serial Number already Existed')
            }


            console.log(this.productGallryData, 'productGallryData')
          }
          // this.imageId = event.body.extras.ImageID
          // this.addImagetoServer()

        } else if (event instanceof HttpResponse) {

        }
      },
      err => {
        //item.onError!(err, item.file!);
      }
    );
  }
  onRemove(data, index) {
    let SNoIndex = this.productGallryData.findIndex((item) => item.SNo == data.SNo)
    this.productGallryData.splice(SNoIndex, 1)
  }
  onClickLevelsDrawer() {
    this.isLevelsDrawer = true
  }
  OnClosebyerLeveDrawer() {
    console.log(this.levels)
    this.buyerLeveShares = 0
    this.isLevelsDrawer = false
    this.levels.forEach((item) => {

      this.buyerLeveShares = (+item) + this.buyerLeveShares
    })
  }
  getCategoryList() {
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      Whether_Status_Filter: true,
      Status: true,
      skip: 0,
      limit: 10000
    }
    try {
      this._appService.postMethod('List_All_Category', body)
        .subscribe(resp => {
          if (resp.success) {
            this.categoryList = resp.extras.Data
          } else {
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);
          }
        },
          error => {

          })
    } catch (e) {

    }
  }

}

