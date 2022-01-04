(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-product-add-product-module"],{

/***/ "./src/app/products/add-product/add-product.component.css":
/*!****************************************************************!*\
  !*** ./src/app/products/add-product/add-product.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/products/add-product/add-product.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/products/add-product/add-product.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-card style=\"width:600px;\" nzTitle=\"Add Product\">\n  <form nz-form #ProductRegistrationForm=\"ngForm\">\n    <nz-form-item>\n      \n      <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\" nzRequired nzFor=\"selectCategory\">Select Category</nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <nz-select  nzAllowClear nzPlaceHolder=\"Select Category\"  [(ngModel)]=\"Category\" name=\"Select_Category\">\n          <nz-option *ngFor=\"let item of categoryList; let i=index\" [nzValue]=\"item\"\n            [nzLabel]=\"item.Category_Name\"></nz-option>\n        </nz-select>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\" nzRequired nzFor=\"email\">Product Name</nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <input id=\"Product_Name\" required type=\"text\" placeholder=\"Product Name\" nz-input ngModel name=\"Product_Name\">\n\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\" nzRequired nzFor=\"email\">Product Weight(In Kg)</nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <input id=\"Product_Weight\" required type=\"text\" placeholder=\"Product Weight\" nz-input ngModel name=\"Product_Weight\">\n\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\" nzRequired nzFor=\"email\">Product Description</nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <input required type=\"text\" placeholder=\"Product Description\" nz-input ngModel name=\"Product_Description\">\n\n      </nz-form-control>\n    </nz-form-item>\n\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\" nzRequired nzFor=\"email\">Introducer Price</nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <input id=\"Introducer_Share\" required type=\"text\" placeholder=\"Introducer  Price\" nz-input ngModel\n          ZeronumbersOnly name=\"Introducer_Share\">\n\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item style=\"  margin-bottom: 0px;\">\n      <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\" nzRequired nzFor=\"email\">Buyer Price</nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <a (click)=\"onClickLevelsDrawer()\">Click to add Buyer Level Price</a>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item style=\"  margin-top: 0px;\">\n      <nz-form-label [nzSpan]=\"8\" nzRequired>Buyer Level Price </nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <code *ngFor=\"let item of levels; let i=index\">{{item}},</code>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\" nzRequired nzFor=\"email\">Shop Price</nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <input id=\"Shop_Share\" required type=\"text\" ZeronumbersOnly placeholder=\"Shop  Price \" nz-input ngModel\n          name=\"Shop_Share\">\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\" nzRequired nzFor=\"email\">Company Price</nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <input id=\"Company_Share\" required type=\"text\" ZeronumbersOnly placeholder=\"Company  Price\" nz-input ngModel\n          name=\"Company_Share\">\n\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\" nzRequired nzFor=\"email\">Product Price</nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <button nz-button nzType=\"link\" style=\"    color: green;\n        font-size: 18px;\n        font-weight: 600;\">\n          {{(+ProductRegistrationForm.value.Introducer_Share)+(+ProductRegistrationForm.value.Shop_Share)+(+ProductRegistrationForm.value.Company_Share) + (+buyerLeveShares)}}\n        </button>\n\n        <!-- <input   {{getsum(ProductRegistrationForm.value)}}  id=\"Company_Share\" readonly required type=\"text\" ZeronumbersOnly placeholder=\"Company  Price\" nz-input ngModel\n          name=\"Company_Share\"> -->\n\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\" nzRequired nzFor=\"Product_HST\">HSN Code</nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <input id=\"Product_HST\" required type=\"text\" placeholder=\"Enter HSN Code\" nz-input ngModel\n          name=\"Product_HST\"\n          oninput=\"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');\">\n\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\" nzRequired nzFor=\"Product_GST\">GST Percentage</nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <input id=\"Product_GST\" required type=\"text\" placeholder=\"Enter GST Percentage\" nz-input ngModel\n          name=\"Product_GST\"\n          oninput=\"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');\">\n\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\" nzRequired nzFor=\"Product_Quantity\">Quantity</nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <input id=\"Product_Quantity\" required type=\"text\"  placeholder=\"Enter Quantity\" nz-input ngModel\n          name=\"Product_Quantity\" ZeronumbersOnly>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\" nzRequired nzFor=\"email\"> Product Image</nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <button nz-button nzType=\"link\" (click)=\"onUploadProductImage(1)\">Upload Product Image</button>\n      </nz-form-control>\n\n    </nz-form-item>\n    <nz-form-item>\n\n      <nz-form-control nzOffset=\"8\" [nzSpan]=\"12\" *ngIf=\"ProductImageData.length>0\"><a target=\"_blank\"\n          [attr.href]=\"ProductImageData[0].ImageOriginal\">Click To view Image</a></nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-control nzOffset=\"8\" [nzSpan]=\"12\">\n        <button nz-button nzType=\"link\" (click)=\"onUploadProductImage(2)\" (click)=\"isImageUploading=true\">Upload\n          Product Image Gallery</button>\n\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item *ngFor=\"let item of productGallryData; let i=index\">\n      <ng-container *ngIf=\"productGallryData.length>0\">\n        <nz-form-control nzOffset=\"8\" [nzSpan]=\"12\">\n          <div nz-row [nzGutter]=\"16\">\n            <div nz-col nzSpan=\"18\">\n              <span><a target=\"_blank\" [attr.href]=\"item.ImageOriginal\">\n                  Click to watch gallery image {{item.SNo}}</a></span>\n            </div>\n            <div nz-col nzSpan=\"4\">\n              <span style=\"cursor: pointer;\" (click)=\"onRemove(item,i)\"> Remove <i nz-icon nzType=\"close\"></i></span>\n            </div>\n          </div>\n        </nz-form-control>\n      </ng-container>\n    </nz-form-item>\n    <nz-form-item style=\"    text-align: center;\">\n      <nz-form-control>\n        <button nz-button nzType=\"primary\" [disabled]=\"!ProductRegistrationForm.valid\"\n          (click)=\"onSubmitProduct(ProductRegistrationForm)\">Submit</button>\n      </nz-form-control>\n    </nz-form-item>\n  </form>\n</nz-card>\n<nz-drawer [nzBodyStyle]=\"{ height: 'calc(100% - 55px)', overflow: 'auto', 'padding-bottom': '53px' }\" [nzWidth]=\"720\"\n  [nzVisible]=\"isImageUploading\" nzTitle=\"Upload\" (nzOnClose)=\"onCloseImageDrawer()\">\n  <nz-form-item *ngIf=\"uploadingType==2\">\n    <nz-form-control [nzSpan]=\"12\">\n      <input required type=\"text\" placeholder=\"S.No\" numbersOnly nz-input [(ngModel)]=\"SNo\">\n    </nz-form-control>\n  </nz-form-item>\n  <div>\n    <input type=\"file\" accept=\"image/gif, image/jpeg, image/png\" #myInput (change)=\"fileChangeEvent($event)\" />\n    <image-cropper [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"true\" [aspectRatio]=\"3 / 3\"\n      [resizeToWidth]=\"128\" [cropperMinWidth]=\"128\" [onlyScaleDown]=\"true\" [roundCropper]=\"false\" format=\"png\"\n      outputType=\"base64\" (imageCropped)=\"imageCropped($event)\" (imageLoaded)=\"imageLoaded()\"\n      (cropperReady)=\"cropperReady()\" (loadImageFailed)=\"loadImageFailed()\"\n      [style.display]=\"showCropper ? null : 'none'\" [alignImage]=\"'left'\"></image-cropper>\n  </div>\n  <img [src]=\"croppedImage\" />\n  <div class=\"footer\" style=\"margin-top: 10px;\" *ngIf=\"croppedImage.length>0\">\n    <button type=\"button\" (click)=\"onCloseImageDrawer()\" class=\"ant-btn\"\n      style=\"margin-right: 8px;\"><span>Cancel</span></button>\n    <button type=\"button\" nz-button nzType=\"primary\" [nzLoading]=\"isUploadBtnLoading\" class=\"ant-btn ant-btn-primary\"\n      (click)=\"onSucessCroping()\"><span>Upload to Server</span></button>\n  </div>\n</nz-drawer>\n<nz-drawer [nzBodyStyle]=\"{ height: 'calc(100% - 55px)', overflow: 'auto', 'padding-bottom': '53px' }\"\n  [nzMaskClosable]=\"false\" [nzWidth]=\"720\" [nzVisible]=\"isLevelsDrawer\" nzTitle=\" \"\n  (nzOnClose)=\"OnClosebyerLeveDrawer()\">\n  <div>\n\n    <div nz-row nzGutter=\"8\">\n      <div nz-col nzSpan=\"8\">\n        <nz-form-item>\n          <nz-form-label>Level 1</nz-form-label>\n          <nz-form-control>\n            <input nz-input [(ngModel)]=\"levels[0]\" placeholder=\"\" />\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n      <div nz-col nzSpan=\"8\">\n        <nz-form-item>\n          <nz-form-label>Level 2</nz-form-label>\n          <nz-form-control>\n            <input nz-input [(ngModel)]=\"levels[1]\" placeholder=\"\" />\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n      <div nz-col nzSpan=\"8\">\n        <nz-form-item>\n          <nz-form-label>Level 3</nz-form-label>\n          <nz-form-control>\n            <input nz-input [(ngModel)]=\"levels[2]\" placeholder=\"\" />\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n    </div>\n    <div nz-row nzGutter=\"8\">\n      <div nz-col nzSpan=\"8\">\n        <nz-form-item>\n          <nz-form-label>Level 4</nz-form-label>\n          <nz-form-control>\n            <input nz-input [(ngModel)]=\"levels[3]\" placeholder=\"\" />\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n      <div nz-col nzSpan=\"8\">\n        <nz-form-item>\n          <nz-form-label>Level 5</nz-form-label>\n          <nz-form-control>\n            <input nz-input [(ngModel)]=\"levels[4]\" placeholder=\"\" />\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n      <div nz-col nzSpan=\"8\">\n        <nz-form-item>\n          <nz-form-label>Level 6</nz-form-label>\n          <nz-form-control>\n            <input nz-input [(ngModel)]=\"levels[5]\" placeholder=\"\" />\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n    </div>\n    <div nz-row nzGutter=\"8\">\n      <div nz-col nzSpan=\"8\">\n        <nz-form-item>\n          <nz-form-label>Level 7</nz-form-label>\n          <nz-form-control>\n            <input nz-input [(ngModel)]=\"levels[6]\" placeholder=\"\" />\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n      <div nz-col nzSpan=\"8\">\n        <nz-form-item>\n          <nz-form-label>Level 8</nz-form-label>\n          <nz-form-control>\n            <input nz-input [(ngModel)]=\"levels[7]\" placeholder=\"\" />\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n      <div nz-col nzSpan=\"8\">\n        <nz-form-item>\n          <nz-form-label>Level 9</nz-form-label>\n          <nz-form-control>\n            <input nz-input [(ngModel)]=\"levels[8]\" placeholder=\"\" />\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n    </div>\n    <div nz-row nzGutter=\"8\">\n      <div nz-col nzSpan=\"8\">\n        <button type=\"button\" nz-button nzType=\"primary\" class=\"ant-btn ant-btn-primary\"\n          (click)=\"OnClosebyerLeveDrawer()\"><span>Update</span></button>\n      </div>\n    </div>\n\n  </div>\n</nz-drawer>"

/***/ }),

/***/ "./src/app/products/add-product/add-product.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/products/add-product/add-product.component.ts ***!
  \***************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(_appService, nzMessageService) {
        this._appService = _appService;
        this.nzMessageService = nzMessageService;
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.showCropper = false;
        this.buyerLeveShares = 0;
        this.ProductImageData = [];
        this.productGallryData = [];
        this.levels = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    AddProductComponent.prototype.ngOnInit = function () {
        this.getCategoryList();
    };
    AddProductComponent.prototype.onSubmitProduct = function (productForm) {
        var _this = this;
        console.log(productForm);
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            Product_Name: productForm.value.Product_Name,
            Product_Weight: productForm.value.Product_Weight,
            Product_Description: productForm.value.Product_Description,
            CategoryID: productForm.value.Select_Category.CategoryID,
            Introducer_Price: productForm.value.Introducer_Share,
            Buyer_Price_Array: this.levels.map(Number),
            Shop_Price: productForm.value.Shop_Share,
            Company_Price: productForm.value.Company_Share,
            ImageID: this.ProductImageData[0].ImageID,
            All_ImageID_Array: this.productGallryData,
            Product_HST: productForm.value.Product_HST,
            Product_GST: productForm.value.Product_GST,
            Product_Quantity: productForm.value.Product_Quantity
        };
        console.log("byy" + JSON.stringify(body));
        try {
            this._appService.postMethod('Add_Product', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    productForm.resetForm();
                    _this.productGallryData = [];
                    _this.SNo = null;
                    _this.levels = [];
                    _this.ProductImageData = [];
                    _this.onCloseImageDrawer();
                    _this.nzMessageService.success('Product Added sucessfully');
                }
                else {
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                }
            }, function (error) {
            });
        }
        catch (e) {
        }
    };
    AddProductComponent.prototype.fileChangeEvent = function (event) {
        this.imageChangedEvent = event;
    };
    AddProductComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.base64;
        // console.log(event);
    };
    AddProductComponent.prototype.imageLoaded = function () {
        this.showCropper = true;
        console.log('Image loaded');
    };
    AddProductComponent.prototype.cropperReady = function () {
        console.log('Cropper ready');
    };
    AddProductComponent.prototype.loadImageFailed = function () {
        console.log('Load failed');
    };
    AddProductComponent.prototype.onUploadProductImage = function (type) {
        this.uploadingType = type;
        this.isImageUploading = true;
        if (type == 1) {
        }
        else if (type == 2) {
        }
    };
    AddProductComponent.prototype.onCloseImageDrawer = function () {
        this.imageChangedEvent = null;
        this.myInputVariable.nativeElement.value = "";
        this.isImageUploading = false;
        this.isUploadBtnLoading = false;
        this.croppedImage = '';
        this.SNo = null;
    };
    AddProductComponent.prototype.onSucessCroping = function () {
        this.isUploadBtnLoading = true;
        var imag;
        var str = this.croppedImage;
        var st4;
        if (str.indexOf('data:image/jpeg;base64,') != -1) {
            st4 = str.replace('data:image/jpeg;base64,', '');
        }
        else {
            st4 = str.replace('data:image/png;base64,', '');
        }
        var imageBlob = this.dataURItoBlob(st4);
        var imageFile = new File([imageBlob], 'imageName.jpeg', { type: 'image/jpeg' });
        this.send(imageFile);
    };
    AddProductComponent.prototype.dataURItoBlob = function (dataURI) {
        var byteString = window.atob(dataURI);
        var arrayBuffer = new ArrayBuffer(byteString.length);
        var int8Array = new Uint8Array(arrayBuffer);
        for (var i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        var blob = new Blob([int8Array], { type: 'image/jpeg' });
        return blob;
    };
    AddProductComponent.prototype.send = function (imageFile) {
        var _this = this;
        var formData = new FormData();
        formData.append('image', imageFile);
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpRequest"]('POST', this._appService.ImageUpload_Url + 'Upload_Image', formData, {
            reportProgress: true,
            withCredentials: false
        });
        this._appService.onImageUpload(req).subscribe(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpResponse"]) {
                _this.isUploadBtnLoading = false;
                if (_this.uploadingType == 1) {
                    _this.ProductImageData = [];
                    _this.ProductImageData.push(event.body.extras);
                    _this.onCloseImageDrawer();
                    console.log(_this.ProductImageData);
                }
                else if (_this.uploadingType == 2) {
                    var SNoIndex = _this.productGallryData.findIndex(function (item) { return item.SNo == _this.SNo; });
                    if (SNoIndex == -1) {
                        _this.productGallryData.push({
                            SNo: _this.SNo,
                            ImageID: event.body.extras.ImageID,
                            ImageOriginal: event.body.extras.ImageOriginal
                        });
                        _this.onCloseImageDrawer();
                    }
                    else {
                        _this.nzMessageService.warning('Serial Number already Existed');
                    }
                    console.log(_this.productGallryData, 'productGallryData');
                }
                // this.imageId = event.body.extras.ImageID
                // this.addImagetoServer()
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpResponse"]) {
            }
        }, function (err) {
            //item.onError!(err, item.file!);
        });
    };
    AddProductComponent.prototype.onRemove = function (data, index) {
        var SNoIndex = this.productGallryData.findIndex(function (item) { return item.SNo == data.SNo; });
        this.productGallryData.splice(SNoIndex, 1);
    };
    AddProductComponent.prototype.onClickLevelsDrawer = function () {
        this.isLevelsDrawer = true;
    };
    AddProductComponent.prototype.OnClosebyerLeveDrawer = function () {
        var _this = this;
        console.log(this.levels);
        this.buyerLeveShares = 0;
        this.isLevelsDrawer = false;
        this.levels.forEach(function (item) {
            _this.buyerLeveShares = (+item) + _this.buyerLeveShares;
        });
    };
    AddProductComponent.prototype.getCategoryList = function () {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            Whether_Status_Filter: true,
            Status: true,
            skip: 0,
            limit: 10000
        };
        try {
            this._appService.postMethod('List_All_Category', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.categoryList = resp.extras.Data;
                }
                else {
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                }
            }, function (error) {
            });
        }
        catch (e) {
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AddProductComponent.prototype, "myInputVariable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_image_cropper__WEBPACK_IMPORTED_MODULE_4__["ImageCropperComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_image_cropper__WEBPACK_IMPORTED_MODULE_4__["ImageCropperComponent"])
    ], AddProductComponent.prototype, "imageCropper", void 0);
    AddProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-product',
            template: __webpack_require__(/*! ./add-product.component.html */ "./src/app/products/add-product/add-product.component.html"),
            styles: [__webpack_require__(/*! ./add-product.component.css */ "./src/app/products/add-product/add-product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "./src/app/products/add-product/add-product.module.ts":
/*!************************************************************!*\
  !*** ./src/app/products/add-product/add-product.module.ts ***!
  \************************************************************/
/*! exports provided: AddProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductModule", function() { return AddProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-product.component */ "./src/app/products/add-product/add-product.component.ts");
/* harmony import */ var _add_product_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-product.routing */ "./src/app/products/add-product/add-product.routing.ts");
/* harmony import */ var src_app_shared_modue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");








var AddProductModule = /** @class */ (function () {
    function AddProductModule() {
    }
    AddProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _add_product_routing__WEBPACK_IMPORTED_MODULE_4__["AddProductRoutes"],
                src_app_shared_modue__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__["ImageCropperModule"]
            ],
            declarations: [_add_product_component__WEBPACK_IMPORTED_MODULE_3__["AddProductComponent"]]
        })
    ], AddProductModule);
    return AddProductModule;
}());



/***/ }),

/***/ "./src/app/products/add-product/add-product.routing.ts":
/*!*************************************************************!*\
  !*** ./src/app/products/add-product/add-product.routing.ts ***!
  \*************************************************************/
/*! exports provided: AddProductRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductRoutes", function() { return AddProductRoutes; });
/* harmony import */ var _add_product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-product.component */ "./src/app/products/add-product/add-product.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


var routes = [
    { path: '', component: _add_product_component__WEBPACK_IMPORTED_MODULE_0__["AddProductComponent"] },
];
var AddProductRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=add-product-add-product-module.js.map