(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-products-view-products-module"],{

/***/ "./src/app/products/view-products/view-products.component.css":
/*!********************************************************************!*\
  !*** ./src/app/products/view-products/view-products.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3ZpZXctcHJvZHVjdHMvdmlldy1wcm9kdWN0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/products/view-products/view-products.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/products/view-products/view-products.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-card *ngIf=\"!isEditProduct\">\n\n  <nz-table #basicTable nzShowPagination=\"false\" [nzData]=\"prodcutsList\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Product Weight(In kg)</th>\n        <th>Product Price</th>\n        <th>Introducer Comission</th>\n        <th>Buyer Comissions</th>\n        <th>Shop Comission</th>\n        <th>Company Profit</th>\n        <th>Available Quantity</th>\n        <th>Product Tredning</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of prodcutsList;let i =index\">\n        <td>{{data.Product_Name}}</td>\n        <td>{{data.Product_Weight}}</td>\n        <td>{{data.Product_Price}}</td>\n        <td>{{data.Product_Price_Data.Introducer_Price}}</td>\n      \n        <td>\n\n          <ng-template #buyerLevelPrice>\n            <div nz-row class=\"logtable\"\n              *ngFor=\"let levelPrice of data.Product_Price_Data.Buyer_Price_Array; let i=index\">\n              <code>Level {{i+1}}: {{levelPrice}}\n                    </code>\n            </div>\n\n          </ng-template>\n\n          <span [nzTitle]=\"buyerLevelPrice\" nzPlacement=\"right\" nz-tooltip nzTrigger=\"hover\">\n            {{data.Product_Price_Data.Buyer_Price}}</span>\n        </td>\n        <td>{{data.Product_Price_Data.Shop_Price}}</td>\n        <td>{{data.Product_Price_Data.Company_Price}}</td>\n        <td>\n          <div nz-row>\n            <div nz-col [nzSpan]=\"16\">\n          {{data.Product_Quantity}}\n        </div>\n        <div nz-col [nzSpan]=\"6\">\n          <i nz-icon type=\"edit\" style=\"color: blue;cursor: pointer;\" theme=\"outline\" (click)=\"onClickQuantityEdit(data)\"></i>\n        </div>\n      </div>\n        </td>\n        <td>\n          <a (click)=\"onAdd_RemoveTredning(data,1)\" *ngIf=\"data.Trending_Available==undefined else notUndefined\">\n            Make a Trending Product\n          </a>\n          <ng-template #notUndefined>\n            <a (click)=\"onAdd_RemoveTredning(data,1)\" *ngIf=\"!data.Trending_Available\">   Make a Trending Product</a>\n            <a (click)=\"onAdd_RemoveTredning(data,-1)\"*ngIf=\"data.Trending_Available\">   Remove form Trending Product</a>\n          </ng-template>\n          \n        </td>\n        <td>\n          <a (click)=\"onEdit(data)\">Action 一 Edit</a>\n          <nz-divider nzType=\"vertical\"></nz-divider>\n          <a nz-popconfirm nzTitle=\"Are you sure delete this ?\" (nzOnConfirm)=\"OndeleteProduct(data,i)\"\n            nzPlacement=\"topRight\">Delete</a>\n        </td>\n\n      </tr>\n    </tbody>\n  </nz-table>\n</nz-card>\n<nz-drawer [nzBodyStyle]=\"{ height: 'calc(100% - 55px)', overflow: 'auto', 'padding-bottom': '53px' }\" [nzWidth]=\"520\"\n  [nzVisible]=\"isQuantityUploading\" nzTitle=\" Add Quantity\" (nzOnClose)=\"onCloseQuantityDrawer()\">\n  <form nz-form [formGroup]=\"QuantityForm\">\n    <div nz-row nzGutter=\"6\" >\n      <div nz-col nzSpan=\"8\">\n  <nz-form-item >\n    <nz-form-label >Existing Quantity</nz-form-label>\n    <nz-form-control >\n      <!-- <input type=\"text\" formControlName=\"Product_Quantity\" nz-input [disabled]=\"true\" style=\"color: green;\"> -->\n      <button nz-button nzType=\"link\" style=\" color: green;\n        font-size: 18px;\n        font-weight: 600; width: 120px;\">\n          {{(QuantityForm.value.Product_Quantity)}}\n        </button>\n    </nz-form-control>\n  </nz-form-item>\n</div>\n<div nz-col nzSpan=\"2\">\n  <nz-form-item>\n    <nz-form-control style=\"margin-top: 38px;\n          margin-right: 10px;\">\n      <span style=\"font-weight: 500;\n            font-size: 30px; text-align: center;\">+</span>\n    </nz-form-control>\n  </nz-form-item>\n</div>\n<div nz-col nzSpan=\"8\">\n    <nz-form-item >\n      <nz-form-label >Add Quantity</nz-form-label>\n      <nz-form-control nzErrorTip=\"please enter Quantity\">\n        <input required type=\"text\" ZeronumbersOnly  placeholder=\"Quantity\" formControlName=\"Quantity\" nz-input >\n      </nz-form-control>\n    </nz-form-item>\n</div>\n</div>\n<div nz-row nzGutter=\"8\">\n<nz-form-item >\n  <nz-form-label [nzSpan]=\"6\">Total Quantity</nz-form-label>\n  <nz-form-control [nzSpan]=\"10\">\n    <button nz-button nzType=\"link\" style=\"    color: green;\n        font-size: 18px;\n        font-weight: 600;\" >\n          {{(+QuantityForm.value.Product_Quantity)+(+QuantityForm.value.Quantity)}}\n        </button>\n  </nz-form-control>\n</nz-form-item>\n</div>\n  <div nz-row nzGutter=\"8\">\n    <div nz-col nzSpan=\"8\">\n      <button type=\"button\" nz-button nzType=\"primary\" class=\"ant-btn ant-btn-primary\"\n        (click)=\"UpdateQuantity()\"><span>Update</span></button>\n    </div>\n    <div nz-col nzSpan=\"8\">\n      <button type=\"button\" nz-button nzType=\"primary\" class=\"ant-btn ant-btn-primary\"\n        (click)=\"cancel()\"><span>Cancel</span></button>\n    </div>\n  </div>\n</form>\n</nz-drawer>\n<nz-card *ngIf=\"isEditProduct\" style=\"width:600px;\">\n  <form nz-form [formGroup]=\"productUpdateForm\">\n    <nz-form-item>\n      <nz-form-label [nzSpan]=\"10\" nzRequired>Select Category</nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <nz-select   placeholder=\"Select Category\" formControlName=\"select_category\">\n          <nz-option *ngFor=\"let item of categoryList; let i=index\" [nzValue]=\"item\"\n            [nzLabel]=\"item.Category_Name\"></nz-option>\n        </nz-select>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSpan]=\"10\" nzRequired>Product Name</nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <input nz-input formControlName=\"Product_Name\" placeholder=\"Product Name\">\n        <nz-form-explain>\n          <ng-container *ngIf=\"productUpdateForm.get('Product_Name').hasError('required')\">\n            Please input Product Name!\n          </ng-container>\n        </nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSpan]=\"10\" nzRequired>Product Weight</nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <input nz-input formControlName=\"Product_Weight\" placeholder=\"Product Weight\">\n        <nz-form-explain>\n          <ng-container *ngIf=\"productUpdateForm.get('Product_Weight').hasError('required')\">\n            Please input Product Weight!\n          </ng-container>\n        </nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSpan]=\"10\" nzRequired>Product Description</nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <input nz-input formControlName=\"Product_Description\" placeholder=\"Product Description\">\n        <nz-form-explain>\n          <ng-container *ngIf=\"productUpdateForm.get('Product_Description').hasError('required')\">\n            Please input Product Description!\n          </ng-container>\n        </nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSpan]=\"10\" nzRequired>Introducer Price </nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <input nz-input ZeronumbersOnly formControlName=\"Introducer_Share\" placeholder=\"Introducer Price\">\n        <nz-form-explain>\n          <ng-container *ngIf=\"productUpdateForm.get('Introducer_Share').hasError('required')\">\n            Please input your Introducer Price!\n          </ng-container>\n        </nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item style=\"    margin-bottom: 0px;\">\n      <nz-form-label [nzSpan]=\"10\" nzRequired>Buyer Price </nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <a (click)=\"onClickLevelsDrawer()\">Click to add Buyer Level Price</a>\n      </nz-form-control>\n\n    </nz-form-item>\n    <nz-form-item style=\"  margin-top: 0px;\">\n      <nz-form-label [nzSpan]=\"10\" nzRequired>Buyer Level Price </nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <code *ngFor=\"let item of levels; let i=index\">{{item}},</code>\n      </nz-form-control>\n    </nz-form-item>  \n    <nz-form-item>\n\n      <nz-form-label [nzSpan]=\"10\" nzRequired>Shop Price </nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <input nz-input ZeronumbersOnly formControlName=\"Shop_Share\" placeholder=\"Introducer Price\">\n        <nz-form-explain>\n          <ng-container *ngIf=\"productUpdateForm.get('Shop_Share').hasError('required')\">\n            Please input your Shop Price!\n          </ng-container>\n        </nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSpan]=\"10\" nzRequired>Company Price </nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <input nz-input ZeronumbersOnly formControlName=\"Company_Share\" placeholder=\"Introducer Price\">\n        <nz-form-explain>\n          <ng-container *ngIf=\"productUpdateForm.get('Company_Share').hasError('required')\">\n            Please input your Company Price!\n          </ng-container>\n        </nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"10\" [nzXs]=\"24\" nzRequired nzFor=\"email\">Product Price</nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <button nz-button nzType=\"link\" style=\"    color: green;\n        font-size: 18px;\n        font-weight: 600;\">\n          {{totalProductPrice}}\n        </button>\n\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSpan]=\"10\" nzRequired>HSN</nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <input nz-input  formControlName=\"Product_HST\" placeholder=\"HSN\"\n        oninput=\"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');\">\n        <nz-form-explain>\n          <ng-container *ngIf=\"productUpdateForm.get('Product_HST').hasError('required')\">\n            Please input your HST\n          </ng-container>\n        </nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSpan]=\"10\" nzRequired>GST </nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <input nz-input  formControlName=\"Product_GST\" placeholder=\"GST\"\n        oninput=\"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');\">\n        <nz-form-explain>\n          <ng-container *ngIf=\"productUpdateForm.get('Product_GST').hasError('required')\">\n            Please input your GST\n          </ng-container>\n        </nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSpan]=\"10\" nzRequired>Existing Quantity </nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <button nz-button nzType=\"link\" style=\" color: green;\n        font-size: 18px;\n        font-weight: 600; width: 120px;\">\n          {{quantity}}\n        </button>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSpan]=\"10\" >Add Quantity </nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <input required type=\"text\" ZeronumbersOnly  placeholder=\"Quantity\" formControlName=\"Quantity\" nz-input >\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSpan]=\"10\" nzRequired>Product Image</nz-form-label>\n      <nz-form-control [nzSpan]=\"8\">\n        <a *ngIf=\"ProductImageData.length>0\" target=\"_blank\" [attr.href]=\"ProductImageData[0].ImageOriginal\">Click To\n          view</a>\n\n      </nz-form-control>\n      <nz-form-control [nzSpan]=\"4\">\n        <button nz-button nzType=\"primary\" (click)=\"onUploadProductImage(1)\">Update</button>\n      </nz-form-control>\n    </nz-form-item>\n\n    <nz-form-item>\n      <nz-form-label [nzSpan]=\"10\" nzRequired>Gallery Images</nz-form-label>\n      <nz-form-control [nzSpan]=\"8\">\n        <span *ngIf=\"productGallryData.length>0\">\n          <code>\n            <nz-tag  *ngFor=\"let item of productGallryData; let i=index\" nzMode=\"closeable\" (nzOnClose)=\"onRemove(item,i)\">  \n              <a target=\"_blank\" [attr.href]=\"item.ImageOriginal\">\n               image {{item.SNo}}</a>\n              </nz-tag>\n        </code>\n        </span>\n      </nz-form-control>\n\n\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-control [nzOffset]=\"10\" [nzSpan]=\"12\">\n        <button nz-button nzType=\"link\" (click)=\"onUploadProductImage(2)\" (click)=\"isImageUploading=true\">Upload\n          Gallery Image</button>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-control [nzOffset]=\"10\" [nzSpan]=\"10\">\n        <button nz-button nzType=\"primary\" style=\"margin-right: 10px;\" (click)=\"submitupdateProductForm()\"\n          [disabled]=\"!productUpdateForm.valid\">Update</button>\n        <button nz-button nzType=\"primary\" (click)=\"isEditProduct=false\">Cancel</button>\n      </nz-form-control>\n    </nz-form-item>\n  </form>\n</nz-card>\n<nz-pagination (nzPageIndexChange)=\"onNextPage($event)\" [nzPageSize]=\"limit\" [nzPageIndex]=\"currentPage\"\n  [nzTotal]=\"totalItem\"></nz-pagination>\n\n<nz-drawer [nzBodyStyle]=\"{ height: 'calc(100% - 55px)', overflow: 'auto', 'padding-bottom': '53px' }\" [nzWidth]=\"720\"\n  [nzVisible]=\"isImageUploading\" nzTitle=\"Upload\" (nzOnClose)=\"onCloseImageDrawer()\">\n  <nz-form-item *ngIf=\"uploadingType==2\">\n    <nz-form-control [nzSpan]=\"12\">\n      <input required type=\"text\" numbersOnly placeholder=\"S.No\" nz-input [(ngModel)]=\"SNo\">\n\n    </nz-form-control>\n  </nz-form-item>\n  <div>\n    <input type=\"file\" accept=\"image/gif, image/jpeg, image/png\" #myInput (change)=\"fileChangeEvent($event)\" />\n    <image-cropper [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"true\" [aspectRatio]=\"3 / 3\"\n      [resizeToWidth]=\"128\" [cropperMinWidth]=\"128\" [onlyScaleDown]=\"true\" [roundCropper]=\"false\" format=\"png\"\n      outputType=\"base64\" (imageCropped)=\"imageCropped($event)\" (imageLoaded)=\"imageLoaded()\"\n      (cropperReady)=\"cropperReady()\" (loadImageFailed)=\"loadImageFailed()\"\n      [style.display]=\"showCropper ? null : 'none'\" [alignImage]=\"'left'\"></image-cropper>\n  </div>\n  <img [src]=\"croppedImage\" />\n  <div class=\"footer\" style=\"margin-top: 10px;\" *ngIf=\"croppedImage.length>0\">\n    <button type=\"button\" (click)=\"onCloseImageDrawer()\" class=\"ant-btn\"\n      style=\"margin-right: 8px;\"><span>Cancel</span></button>\n    <button type=\"button\" nz-button nzType=\"primary\" [nzLoading]=\"isUploadBtnLoading\" class=\"ant-btn ant-btn-primary\"\n      (click)=\"onSucessCroping()\"><span>Upload to Server</span></button>\n  </div>\n</nz-drawer>\n<nz-drawer [nzBodyStyle]=\"{ height: 'calc(100% - 55px)', overflow: 'auto', 'padding-bottom': '53px' }\"\n  [nzMaskClosable]=\"false\" [nzWidth]=\"720\" [nzVisible]=\"isLevelsDrawer\" nzTitle=\" \"\n  (nzOnClose)=\"OnClosebyerLeveDrawer()\">\n  <div>\n\n    <div nz-row nzGutter=\"8\">\n      <div nz-col nzSpan=\"8\">\n        <nz-form-item>\n          <nz-form-label>Level 1</nz-form-label>\n          <nz-form-control>\n            <input nz-input [(ngModel)]=\"levels[0]\" placeholder=\"\" />\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n      <div nz-col nzSpan=\"8\">\n        <nz-form-item>\n          <nz-form-label>Level 2</nz-form-label>\n          <nz-form-control>\n            <input nz-input [(ngModel)]=\"levels[1]\" placeholder=\"\" />\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n      <div nz-col nzSpan=\"8\">\n        <nz-form-item>\n          <nz-form-label>Level 3</nz-form-label>\n          <nz-form-control>\n            <input nz-input [(ngModel)]=\"levels[2]\" placeholder=\"\" />\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n    </div>\n    <div nz-row nzGutter=\"8\">\n      <div nz-col nzSpan=\"8\">\n        <nz-form-item>\n          <nz-form-label>Level 4</nz-form-label>\n          <nz-form-control>\n            <input nz-input [(ngModel)]=\"levels[3]\" placeholder=\"\" />\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n      <div nz-col nzSpan=\"8\">\n        <nz-form-item>\n          <nz-form-label>Level 5</nz-form-label>\n          <nz-form-control>\n            <input nz-input [(ngModel)]=\"levels[4]\" placeholder=\"\" />\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n      <div nz-col nzSpan=\"8\">\n        <nz-form-item>\n          <nz-form-label>Level 6</nz-form-label>\n          <nz-form-control>\n            <input nz-input [(ngModel)]=\"levels[5]\" placeholder=\"\" />\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n    </div>\n    <div nz-row nzGutter=\"8\">\n      <div nz-col nzSpan=\"8\">\n        <nz-form-item>\n          <nz-form-label>Level 7</nz-form-label>\n          <nz-form-control>\n            <input nz-input [(ngModel)]=\"levels[6]\" placeholder=\"\" />\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n      <div nz-col nzSpan=\"8\">\n        <nz-form-item>\n          <nz-form-label>Level 8</nz-form-label>\n          <nz-form-control>\n            <input nz-input [(ngModel)]=\"levels[7]\" placeholder=\"\" />\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n      <div nz-col nzSpan=\"8\">\n        <nz-form-item>\n          <nz-form-label>Level 9</nz-form-label>\n          <nz-form-control>\n            <input nz-input [(ngModel)]=\"levels[8]\" placeholder=\"\" />\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n\n    </div>\n    <div nz-row nzGutter=\"8\">\n      <div nz-col nzSpan=\"8\">\n        <button type=\"button\" nz-button nzType=\"primary\" class=\"ant-btn ant-btn-primary\"\n          (click)=\"OnClosebyerLeveDrawer()\"><span>Update</span></button>\n      </div>\n    </div>\n  </div>\n</nz-drawer>"

/***/ }),

/***/ "./src/app/products/view-products/view-products.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/products/view-products/view-products.component.ts ***!
  \*******************************************************************/
/*! exports provided: ViewProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductsComponent", function() { return ViewProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");







var ViewProductsComponent = /** @class */ (function () {
    function ViewProductsComponent(_appService, fb, nzMessageService) {
        this._appService = _appService;
        this.fb = fb;
        this.nzMessageService = nzMessageService;
        this.prodcutsList = [];
        this.singleProductDetails = [];
        this.limit = this._appService.limit;
        this.currentPage = 1;
        this.ProductImageData = [];
        this.productGallryData = [];
        this.croppedImage = '';
        this.imageChangedEvent = '';
        this.buyerLeveShares = 0;
        this.levels = [];
        this.totalProductPrice = 0;
        this.skip = 0;
    }
    ViewProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCategoryList();
        this.viewProducts(0);
        this.productUpdateForm = this.fb.group({
            Product_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Product_Weight: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Product_Description: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            select_category: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Introducer_Share: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Shop_Share: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Company_Share: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Product_HST: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Product_GST: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Quantity: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
        this.productUpdateForm.valueChanges.subscribe(function (data) {
            if (data.Introducer_Share ||
                data.Shop_Share ||
                data.Company_Share) {
                _this.totalProductPrice = 0;
                _this.totalProductPrice = (+_this.productUpdateForm.value.Introducer_Share) + (+_this.productUpdateForm.value.Shop_Share) + (+_this.productUpdateForm.value.Company_Share) + (+_this.buyerLeveShares);
            }
        });
        this.QuantityForm = this.fb.group({
            Quantity: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Product_Quantity: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    };
    ViewProductsComponent.prototype.viewProducts = function (skip) {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            skip: skip,
            limit: this._appService.limit
        };
        try {
            this._appService.postMethod('List_All_Products', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.totalItem = resp.extras.Count;
                    if (skip == 0) {
                        _this.currentPage = 1;
                    }
                    _this.prodcutsList = resp.extras.Data;
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
    ViewProductsComponent.prototype.onNextPage = function (event) {
        this.currentPage = event;
        var skip = (event - 1) * this._appService.limit;
        this.skip = skip;
        this.viewProducts(skip);
    };
    ViewProductsComponent.prototype.percentage = function (partialValue, totalValue) {
        return (partialValue * totalValue) / 100;
    };
    ViewProductsComponent.prototype.onEdit = function (data) {
        var _this = this;
        this.quantity = data.Product_Quantity;
        this.productGallryData = [];
        this.totalProductPrice = data.Product_Price;
        this.singleProductDetails = data;
        this.ProductID = data.ProductID;
        var selectedIndex = this.categoryList.findIndex(function (item) { return item.CategoryID == data.Product_Category.CategoryID; });
        this.levels = data.Product_Price_Data.Buyer_Price_Array;
        this.levels.forEach(function (item) {
            _this.buyerLeveShares = _this.buyerLeveShares + (+item);
        });
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
        }, { emitEvent: false });
        var galerry = [];
        galerry = data.Product_Image_Data;
        galerry.forEach(function (item) {
            _this.productGallryData.push({
                SNo: item.SNo,
                ImageOriginal: item.ImageOriginal,
                ImageID: item.ImageID
            });
        });
        this.ProductImageData = [];
        this.ProductImageData.push(data.Image_Data);
        console.log(this.productGallryData);
        this.isEditProduct = true;
    };
    ViewProductsComponent.prototype.handleCancel = function () {
        this.isEditProduct = false;
    };
    ViewProductsComponent.prototype.handleOk = function () {
        this.isEditProduct = false;
    };
    ViewProductsComponent.prototype.onClickLevelsDrawer = function () {
        this.isLevelsDrawer = true;
    };
    ViewProductsComponent.prototype.OnClosebyerLeveDrawer = function () {
        var _this = this;
        this.buyerLeveShares = 0;
        this.totalProductPrice = 0;
        this.isLevelsDrawer = false;
        this.levels.forEach(function (item) {
            // if (item == "") {
            //   item = 0
            // }
            _this.buyerLeveShares = (+item) + _this.buyerLeveShares;
        });
        this.totalProductPrice = (+this.productUpdateForm.value.Introducer_Share) + (+this.productUpdateForm.value.Shop_Share) + (+this.productUpdateForm.value.Company_Share) + (+this.buyerLeveShares);
    };
    ViewProductsComponent.prototype.submitupdateProductForm = function () {
        var _this = this;
        // console.log(` this.levels.map(Number)`, this.levels.map(Number))
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
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
        };
        try {
            this._appService.postMethod('Edit_Product', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.nzMessageService.success('product Details Updated Sucessfully');
                    _this.isEditProduct = false;
                    _this.isEditProduct = false;
                    _this.viewProducts(0);
                    _this.productUpdateForm.controls['Quantity'].reset();
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
    ViewProductsComponent.prototype.OndeleteProduct = function (data, index) {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            ProductID: data.ProductID,
        };
        try {
            this._appService.postMethod('Inactivate_Product', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.nzMessageService.success('product Deleted Sucessfully');
                    _this.viewProducts(0);
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
    ViewProductsComponent.prototype.fileChangeEvent = function (event) {
        this.imageChangedEvent = event;
    };
    ViewProductsComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.base64;
        // console.log(event);
    };
    ViewProductsComponent.prototype.imageLoaded = function () {
        this.showCropper = true;
        console.log('Image loaded');
    };
    ViewProductsComponent.prototype.cropperReady = function () {
        console.log('Cropper ready');
    };
    ViewProductsComponent.prototype.loadImageFailed = function () {
        console.log('Load failed');
    };
    ViewProductsComponent.prototype.onUploadProductImage = function (type) {
        this.uploadingType = type;
        this.isImageUploading = true;
        if (type == 1) {
        }
        else if (type == 2) {
        }
    };
    ViewProductsComponent.prototype.onCloseImageDrawer = function () {
        this.imageChangedEvent = null;
        this.myInputVariable.nativeElement.value = "";
        this.isImageUploading = false;
        this.isUploadBtnLoading = false;
        this.croppedImage = '';
        this.SNo = null;
    };
    ViewProductsComponent.prototype.onSucessCroping = function () {
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
    ViewProductsComponent.prototype.dataURItoBlob = function (dataURI) {
        var byteString = window.atob(dataURI);
        var arrayBuffer = new ArrayBuffer(byteString.length);
        var int8Array = new Uint8Array(arrayBuffer);
        for (var i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        var blob = new Blob([int8Array], { type: 'image/jpeg' });
        return blob;
    };
    ViewProductsComponent.prototype.send = function (imageFile) {
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
    ViewProductsComponent.prototype.onRemove = function (data, index) {
        var SNoIndex = this.productGallryData.findIndex(function (item) { return item.SNo == data.SNo; });
        this.productGallryData.splice(SNoIndex, 1);
    };
    ViewProductsComponent.prototype.onClickQuantityEdit = function (data) {
        this.productData = data.ProductID;
        this.isQuantityUploading = true;
        this.QuantityForm.patchValue({
            Product_Quantity: data.Product_Quantity
        });
    };
    ViewProductsComponent.prototype.onCloseQuantityDrawer = function () {
        this.isQuantityUploading = false;
    };
    ViewProductsComponent.prototype.cancel = function () {
        this.isQuantityUploading = false;
        this.QuantityForm.reset();
    };
    ViewProductsComponent.prototype.UpdateQuantity = function () {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            ProductID: this.productData,
            Quantity: this.QuantityForm.value.Quantity,
        };
        try {
            this._appService.postMethod('Update_Product_Quantity', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.nzMessageService.success('product Details Updated Sucessfully');
                    _this.isQuantityUploading = false;
                    _this.viewProducts(0);
                    _this.QuantityForm.reset();
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
    ViewProductsComponent.prototype.getCategoryList = function () {
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
    ViewProductsComponent.prototype.onAdd_RemoveTredning = function (data, type) {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            ProductID_Arr: [data.ProductID],
            Add_Remove: type,
        };
        try {
            this._appService.postMethod('Add_Remove_Trending_Products', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.nzMessageService.success('product  Updated Sucessfully');
                    _this.viewProducts(_this.skip);
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
    ], ViewProductsComponent.prototype, "myInputVariable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__["ImageCropperComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__["ImageCropperComponent"])
    ], ViewProductsComponent.prototype, "imageCropper", void 0);
    ViewProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-products',
            template: __webpack_require__(/*! ./view-products.component.html */ "./src/app/products/view-products/view-products.component.html"),
            styles: [__webpack_require__(/*! ./view-products.component.css */ "./src/app/products/view-products/view-products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]])
    ], ViewProductsComponent);
    return ViewProductsComponent;
}());



/***/ }),

/***/ "./src/app/products/view-products/view-products.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/products/view-products/view-products.module.ts ***!
  \****************************************************************/
/*! exports provided: ViewProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductsModule", function() { return ViewProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _view_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-products.component */ "./src/app/products/view-products/view-products.component.ts");
/* harmony import */ var src_app_shared_modue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _view_products_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-products.routing */ "./src/app/products/view-products/view-products.routing.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");








var ViewProductsModule = /** @class */ (function () {
    function ViewProductsModule() {
    }
    ViewProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                src_app_shared_modue__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _view_products_routing__WEBPACK_IMPORTED_MODULE_6__["ViewProductsRoutes"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__["ImageCropperModule"]
            ],
            declarations: [_view_products_component__WEBPACK_IMPORTED_MODULE_4__["ViewProductsComponent"]]
        })
    ], ViewProductsModule);
    return ViewProductsModule;
}());



/***/ }),

/***/ "./src/app/products/view-products/view-products.routing.ts":
/*!*****************************************************************!*\
  !*** ./src/app/products/view-products/view-products.routing.ts ***!
  \*****************************************************************/
/*! exports provided: ViewProductsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductsRoutes", function() { return ViewProductsRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-products.component */ "./src/app/products/view-products/view-products.component.ts");


var routes = [
    { path: '', component: _view_products_component__WEBPACK_IMPORTED_MODULE_1__["ViewProductsComponent"] },
];
var ViewProductsRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=view-products-view-products-module.js.map