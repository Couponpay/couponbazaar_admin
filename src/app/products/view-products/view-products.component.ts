import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { NzMessageService } from 'ng-zorro-antd';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { ImageCropperComponent, ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  productUpdateForm: FormGroup;
  prodcutsList: any = [];
  totalItem: number;
  singleProductDetails: any = [];
  isEditProduct: boolean;
  ProductID: any;
  disabled:true
  limit = this._appService.limit
  currentPage = 1
  ProductImageData = [];
  isUploadBtnLoading: boolean;
  uploadingType: number;
  productGallryData = [];
  SNo: any;
  croppedImage: string = '';
  isImageUploading: boolean;
  imageChangedEvent: any = '';
  QuantityForm:FormGroup
  @ViewChild('myInput') myInputVariable: ElementRef;
  @ViewChild(ImageCropperComponent) imageCropper: ImageCropperComponent;
  showCropper: boolean;
  isLevelsDrawer: boolean;
  buyerLeveShares: number = 0;
  levels = [];
  totalProductPrice = 0
  productData: any;
  isQuantityUploading: boolean
  quantity: any;
  categoryList: any;
  id: any;
  skip: number=0;
  constructor(private _appService: AppService,
    private fb: FormBuilder,
    private nzMessageService: NzMessageService) { }
  ngOnInit() {
    this.getCategoryList()
    this.viewProducts(0)
    this.productUpdateForm = this.fb.group({
      Product_Name: [null, [Validators.required]],
      Product_Weight: [null, [Validators.required]],
      Product_Description: [null, [Validators.required]],
      select_category: [null, [Validators.required]],
      Introducer_Share: [null, [Validators.required]],
      Shop_Share: [null, [Validators.required]],
      Company_Share: [null, [Validators.required]],
      Product_HST: [null, [Validators.required]],
      Product_GST: [null, [Validators.required]],
      Quantity: [0, [Validators.required]]
    });
    this.productUpdateForm.valueChanges.subscribe((data: any) => {
      if (data.Introducer_Share ||
        data.Shop_Share ||
        data.Company_Share) {
        this.totalProductPrice = 0
        this.totalProductPrice = (+this.productUpdateForm.value.Introducer_Share) + (+this.productUpdateForm.value.Shop_Share) + (+this.productUpdateForm.value.Company_Share) + (+this.buyerLeveShares)

      }
    })
    this.QuantityForm = this.fb.group({
      Quantity: [null, [Validators.required]],
      Product_Quantity: [null, [Validators.required]],
      // Product_Quantity: [{value:'',disabled:true}, [Validators.required]]
    });
  }
  viewProducts(skip) {
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      skip: skip,
      limit: this._appService.limit
    }
    try {

      this._appService.postMethod('List_All_Products', body)
        .subscribe(resp => {

          if (resp.success) {
            this.totalItem = resp.extras.Count




            if (skip == 0) {
              this.currentPage = 1
            }
            this.prodcutsList = resp.extras.Data


          } else {
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


          }
        },
          error => {

          })
    } catch (e) {

    }
  }
  onNextPage(event: number) {
    this.currentPage = event
    let skip = (event - 1) * this._appService.limit
    this.skip=skip
    this.viewProducts(skip)
  }
  percentage(partialValue, totalValue) {
    return (partialValue * totalValue) / 100;
  }
  onEdit(data) {
    this.quantity=data.Product_Quantity
    this.productGallryData = []
    this.totalProductPrice = data.Product_Price
    this.singleProductDetails = data
    this.ProductID = data.ProductID
    let selectedIndex = this.categoryList.findIndex(item => item.CategoryID == data.Product_Category.CategoryID)
    this.levels = data.Product_Price_Data.Buyer_Price_Array
    this.levels.forEach((item) => {
      this.buyerLeveShares = this.buyerLeveShares + (+item)
    })
    this.productUpdateForm.patchValue({
      Product_Name: data.Product_Name,
      Product_Weight: data.Product_Weight,
      Product_Price: data.Product_Price,
      Product_Description: data.Product_Description,
      select_category: this.categoryList[selectedIndex],
      Introducer_Share: data.Product_Price_Data.Introducer_Price,
      Shop_Share: data.Product_Price_Data.Shop_Price,
      Company_Share: data.Product_Price_Data.Company_Price,
      Product_HST: data.Product_HST,
      Product_GST: data.Product_GST,
      Product_Quantity: data.Product_Quantity,
    }, { emitEvent: false })
    let galerry = []
    galerry = data.Product_Image_Data
    galerry.forEach((item) => {
      this.productGallryData.push({
        SNo: item.SNo,
        ImageOriginal: item.ImageOriginal,
        ImageID: item.ImageID
      })
    })
    this.ProductImageData = []
    this.ProductImageData.push(data.Image_Data)
    console.log(this.productGallryData)
    this.isEditProduct = true

  }
  handleCancel() {
    this.isEditProduct = false
  }
  handleOk() {
    this.isEditProduct = false

  }
  onClickLevelsDrawer() {
    this.isLevelsDrawer = true
  }
  OnClosebyerLeveDrawer() {
    this.buyerLeveShares = 0
    this.totalProductPrice = 0
    this.isLevelsDrawer = false
    this.levels.forEach((item) => {
      // if (item == "") {
      //   item = 0
      // }
      this.buyerLeveShares = (+item) + this.buyerLeveShares
    })
    this.totalProductPrice = (+this.productUpdateForm.value.Introducer_Share) + (+this.productUpdateForm.value.Shop_Share) + (+this.productUpdateForm.value.Company_Share) + (+this.buyerLeveShares)
  }
  submitupdateProductForm() {
    // console.log(` this.levels.map(Number)`, this.levels.map(Number))
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      ProductID: this.ProductID,
      CategoryID: this.productUpdateForm.value.select_category.CategoryID,
      Product_Name: this.productUpdateForm.value.Product_Name,
      Product_Weight: this.productUpdateForm.value.Product_Weight,
      Product_Description: this.productUpdateForm.value.Product_Description,

      Introducer_Price: this.productUpdateForm.value.Introducer_Share,
      Buyer_Price_Array: this.levels.map(Number),
      Shop_Price: this.productUpdateForm.value.Shop_Share,
      Company_Price: this.productUpdateForm.value.Company_Share,
      Product_HST: this.productUpdateForm.value.Product_HST,
      Product_GST: this.productUpdateForm.value.Product_GST,
      Product_Quantity: this.productUpdateForm.value.Quantity,

      ImageID: this.ProductImageData[0].ImageID,
      All_ImageID_Array: this.productGallryData
    }
    try {

      this._appService.postMethod('Edit_Product', body)
        .subscribe(resp => {

          if (resp.success) {
            this.nzMessageService.success('product Details Updated Sucessfully')
            this.isEditProduct = false;
            this.isEditProduct = false
            this.viewProducts(0)
            this.productUpdateForm.controls['Quantity'].reset()

          } else {
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


          }
        },
          error => {

          })
    } catch (e) {

    }
  }
  OndeleteProduct(data, index) {
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      ProductID: data.ProductID,

    }
    try {

      this._appService.postMethod('Inactivate_Product', body)
        .subscribe(resp => {

          if (resp.success) {
            this.nzMessageService.success('product Deleted Sucessfully')
            this.viewProducts(0)

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
  onClickQuantityEdit(data){
    this.productData=data.ProductID
    this.isQuantityUploading =true
   this.QuantityForm.patchValue({
     Product_Quantity: data.Product_Quantity
   })
  }
  onCloseQuantityDrawer(){
    this.isQuantityUploading = false
  }
  cancel(){
    this.isQuantityUploading = false
    this.QuantityForm.reset()
  }
  UpdateQuantity(){
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      ProductID: this.productData,
      Quantity: this.QuantityForm.value.Quantity,
    }
    try {

      this._appService.postMethod('Update_Product_Quantity', body)
        .subscribe(resp => {

          if (resp.success) {
            this.nzMessageService.success('product Details Updated Sucessfully')
            this.isQuantityUploading = false
            this.viewProducts(0)
            this.QuantityForm.reset()

          } else {
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);
          }
        },
          error => {

          })
    } catch (e) {

    }

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
  onAdd_RemoveTredning(data,type){
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      ProductID_Arr: [data.ProductID],
      Add_Remove: type,
    }
    try {

      this._appService.postMethod('Add_Remove_Trending_Products', body)
        .subscribe(resp => {

          if (resp.success) {
            this.nzMessageService.success('product  Updated Sucessfully')
            
            this.viewProducts(this.skip)
          

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
