(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coupon-products-coupon-products-module"],{

/***/ "./src/app/coupon-products/coupon-products-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/coupon-products/coupon-products-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CouponProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponProductsRoutingModule", function() { return CouponProductsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _coupon_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coupon-products.component */ "./src/app/coupon-products/coupon-products.component.ts");





var routes = [
    { path: '', component: _coupon_products_component__WEBPACK_IMPORTED_MODULE_4__["CouponProductsComponent"] }
];
var CouponProductsRoutingModule = /** @class */ (function () {
    function CouponProductsRoutingModule() {
    }
    CouponProductsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CouponProductsRoutingModule);
    return CouponProductsRoutingModule;
}());



/***/ }),

/***/ "./src/app/coupon-products/coupon-products.component.css":
/*!***************************************************************!*\
  !*** ./src/app/coupon-products/coupon-products.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".primary_button{\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    background: linear-gradient(90deg, #1976d2 20%, #00dbfe 100%);\r\n    border: coral;\r\n    color: #fff;\r\n    font-weight: 700;\r\n    font-size: 17px;\r\n  }\r\n  .primary_button1{\r\n    /* position: absolute;\r\n    top: 8px;\r\n    right: 219px; */\r\n    float: right;\r\n    background: linear-gradient(90deg, #1976d2 20%, #00dbfe 100%);\r\n    border: coral;\r\n    color: #fff;\r\n    font-weight: 700;\r\n    font-size: 17px;\r\n    margin-right: 20px;\r\n  }\r\n  .primary_button2{\r\n    /* position: absolute;\r\n    top: 8px;\r\n    right: 100px; */\r\n    float: right;\r\n    background: linear-gradient(90deg, #1976d2 20%, #00dbfe 100%);\r\n    border: coral;\r\n    color: #fff;\r\n    font-weight: 700;\r\n    font-size: 17px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cG9uLXByb2R1Y3RzL2NvdXBvbi1wcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsNkRBQTZEO0lBQzdELGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7RUFDQTtJQUNFOzttQkFFZTtJQUNmLFlBQVk7SUFDWiw2REFBNkQ7SUFDN0QsYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0U7O21CQUVlO0lBQ2YsWUFBWTtJQUNaLDZEQUE2RDtJQUM3RCxhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY291cG9uLXByb2R1Y3RzL2NvdXBvbi1wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW1hcnlfYnV0dG9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxOTc2ZDIgMjAlLCAjMDBkYmZlIDEwMCUpO1xyXG4gICAgYm9yZGVyOiBjb3JhbDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcbiAgLnByaW1hcnlfYnV0dG9uMXtcclxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgcmlnaHQ6IDIxOXB4OyAqL1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTk3NmQyIDIwJSwgIzAwZGJmZSAxMDAlKTtcclxuICAgIGJvcmRlcjogY29yYWw7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5wcmltYXJ5X2J1dHRvbjJ7XHJcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDhweDtcclxuICAgIHJpZ2h0OiAxMDBweDsgKi9cclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzE5NzZkMiAyMCUsICMwMGRiZmUgMTAwJSk7XHJcbiAgICBib3JkZXI6IGNvcmFsO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/coupon-products/coupon-products.component.html":
/*!****************************************************************!*\
  !*** ./src/app/coupon-products/coupon-products.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row style=\"margin-top: 25px;\" *ngIf=\"!isAdding\">\r\n  <div nz-col nzSpan=\"24\">\r\n    <button nz-button nzType=\"primary\" class=\"primary_button\" (click)=\"onAdd()\">Add Coupon Product</button>\r\n  </div>\r\n  <div nz-row style=\"margin-top: 50px;\">\r\n    <div nz-col nzSpan=\"24\">\r\n      <nz-tabset style=\"margin-bottom: 16px;\">\r\n        <nz-tab (nzClick)=\"onChangeTab(1)\" nzTitle=\"Active List\">\r\n  \r\n        </nz-tab>\r\n        <nz-tab (nzClick)=\"onChangeTab(2)\" nzTitle=\"Inactive List\">\r\n  \r\n        </nz-tab>\r\n  \r\n      </nz-tabset>\r\n      <nz-table #basicTable nzShowPagination=\"false\" [nzLoading]=\"isloading\" nzLoadingDelay=\"1\"\r\n        [nzData]=\"couponProducts\" style=\"background: #FFF;margin:30px 0px;\">\r\n        <thead>\r\n          <tr>\r\n            <th>S.No</th>\r\n            <th>Product Name</th>\r\n            <th>Description</th>\r\n            <th>Weight</th>\r\n            <th>Price</th>\r\n            <th>Quantity</th>\r\n            <th>Cash Coupon Share</th>\r\n            <th>Purchase Coupon Share</th>\r\n            <th>Gift Coupon Share</th>\r\n            <!-- <th></th> -->\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <ng-container *ngFor=\"let data of couponProducts;let i=index\">\r\n            <tr>\r\n              <td>{{data.SNo}}</td>\r\n              <td>{{data.C_Product_Name}}</td>\r\n              <td>{{data.C_Product_Description}}</td>\r\n              <td>{{data.C_Product_Weight}}</td>\r\n              <td>{{data.C_Product_Price}}</td>\r\n              <td>{{data.C_Product_Quantity}}</td>\r\n              <td>{{data.Cash_Coupons_Share}}</td>\r\n              <td>{{data.Purchace_Coupons_Share}}</td>\r\n              <td>{{data.Gift_Coupons_Share}}</td>\r\n              <!-- <td>\r\n              <span [ngSwitch]=\"data.Status\">\r\n                <span *ngSwitchCase=true>\r\n                  <a nz-popconfirm (nzOnConfirm)=\"onAction(data)\"\r\n                    nzTitle=\"Are you sure you want to Inactive this?\">Make Inactive</a>\r\n                </span>\r\n                <span *ngSwitchCase=false>\r\n                  <a style=\"color: red;\" nz-popconfirm (nzOnConfirm)=\"onAction(data)\"\r\n                    nzTitle=\"Are you sure you want to Active this?\">Make Active</a>\r\n                </span>\r\n                <span *ngSwitchDefault>\r\n                  NA\r\n                </span>\r\n              </span>\r\n            </td> -->\r\n              <td>\r\n                <!-- <i class=\"fa fa-pencil\" style=\"color: #096dd9;\" aria-hidden=\"true\" (click)=\"onEdit(data)\"></i> -->\r\n                <i nz-icon type=\"edit\" theme=\"outline\" (click)=\"onEdit(data)\"></i>\r\n              </td>\r\n            </tr>\r\n          </ng-container>\r\n        </tbody>\r\n      </nz-table>\r\n      <nz-pagination (nzPageIndexChange)=\"onNextPage($event)\" [nzPageSize]=\"limit\" [nzPageIndex]=\"currentPage\"\r\n        [nzTotal]=\"totalItem\"></nz-pagination>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div nz-row style=\"margin-top: 25px;\" *ngIf=\"isAdding\">\r\n  <div nz-col nzSpan=\"12\">\r\n    <nz-card [nzTitle]='cardTitle'>\r\n      <ng-template #cardTitle>\r\n        <span>{{isEditing?'Update':'Create'}} Coupon Product</span>\r\n      </ng-template>\r\n\r\n      <form nz-form [formGroup]=\"createCoupon\">\r\n        <nz-form-item>\r\n          <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\">S.No</nz-form-label>\r\n          <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" [nzValidateStatus]=\"ValidatingStatus\" nzHasFeedback>\r\n            <input nz-input formControlName=\"SNo\" placeholder=\"please enter Banner S.No\" />\r\n            <!-- <nz-form-explain *ngIf=\"createCoupon.get('SNo').dirty && createCoupon.get('SNo').errors\">Please\r\n              input your SNo!</nz-form-explain> -->\r\n              <nz-form-explain *ngIf=\"ValidatingStatus == 'error'\">S.No Already Exists\r\n              </nz-form-explain>\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n          <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\">Product Name</nz-form-label>\r\n          <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n            <input nz-input formControlName=\"C_Product_Name\" placeholder=\"please enter Product Name\" />\r\n            <nz-form-explain\r\n              *ngIf=\"createCoupon.get('C_Product_Name').dirty && createCoupon.get('C_Product_Name').errors\">\r\n              Please\r\n              input your Product Name!</nz-form-explain>\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n          <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\">Product Description</nz-form-label>\r\n          <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n            <input nz-input formControlName=\"C_Product_Description\" placeholder=\"please enter Product Description\" />\r\n            <nz-form-explain\r\n              *ngIf=\"createCoupon.get('C_Product_Description').dirty && createCoupon.get('C_Product_Description').errors\">\r\n              Please\r\n              input your Product Descrption!</nz-form-explain>\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n          <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\">Product Price</nz-form-label>\r\n          <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n            <input nz-input formControlName=\"C_Product_Price\" placeholder=\"please enter Product Price\" />\r\n            <nz-form-explain\r\n              *ngIf=\"createCoupon.get('C_Product_Price').dirty && createCoupon.get('C_Product_Price').errors\">\r\n              Please\r\n              input your Product Price!</nz-form-explain>\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n          <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\">Cash Coupons Share</nz-form-label>\r\n          <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n            <input nz-input formControlName=\"Cash_Coupons_Share\" placeholder=\"please enter Cash Coupons Share\" />\r\n            <nz-form-explain\r\n              *ngIf=\"createCoupon.get('Cash_Coupons_Share').dirty && createCoupon.get('Cash_Coupons_Share').errors\">\r\n              Please\r\n              input your Cash Coupons Share!</nz-form-explain>\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n          <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\">Purchase Coupons Share</nz-form-label>\r\n          <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n            <input nz-input formControlName=\"Purchace_Coupons_Share\"\r\n              placeholder=\"please enter Purchase Coupons Share\" />\r\n            <nz-form-explain\r\n              *ngIf=\"createCoupon.get('Purchace_Coupons_Share').dirty && createCoupon.get('Purchace_Coupons_Share').errors\">\r\n              Please\r\n              input your Purchase Coupons Share!</nz-form-explain>\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n          <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\">Gift Coupons Share</nz-form-label>\r\n          <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n            <input nz-input formControlName=\"Gift_Coupons_Share\" placeholder=\"please enter Gift Coupons Share\" />\r\n            <nz-form-explain\r\n              *ngIf=\"createCoupon.get('Gift_Coupons_Share').dirty && createCoupon.get('Gift_Coupons_Share').errors\">\r\n              Please\r\n              input your Gift Coupons Share!</nz-form-explain>\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n          <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\">Update Coupons Share</nz-form-label>\r\n          <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n            <a (click)=\"onClickDrawer()\">Click to add Coupon Share</a>\r\n            <!-- <input nz-input formControlName=\"Update_Coupons_Share\" placeholder=\"please enter Update Coupons Share\" /> -->\r\n            <!-- <nz-form-explain\r\n              *ngIf=\"createCoupon.get('Update_Coupons_Share').dirty && createCoupon.get('Update_Coupons_Share').errors\">\r\n              Please\r\n              input your Update Coupons Share!</nz-form-explain> -->\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item >\r\n          <nz-form-label [nzSpan]=\"8\" nzRequired>Coupons Shares</nz-form-label>\r\n          <nz-form-control [nzSpan]=\"12\">\r\n            <code *ngFor=\"let item of levels; let i=index; let isLast=last\">{{item}}\r\n              <span *ngIf=\"!isLast\"></span>,</code>\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n          <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\">Upload Product Image</nz-form-label>\r\n          <nz-form-control [nzSpan]=\"12\">\r\n            <button nz-button nzType=\"link\" (click)=\"onUploadProductImage()\">Click To Upload</button>\r\n\r\n          </nz-form-control>\r\n\r\n        </nz-form-item>\r\n        <nz-form-item *ngIf=\"ImageData.length>0\">\r\n          <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\">Preview Product Image</nz-form-label>\r\n          <nz-form-control [nzSpan]=\"12\"><a target=\"_blank\" [attr.href]=\"ImageData[0].ImageOriginal\">Click To view\r\n              Image</a></nz-form-control>\r\n        </nz-form-item>\r\n\r\n        <nz-form-item nz-row class=\"register-area\">\r\n          <nz-form-control [nzSpan]=\"14\" [nzOffset]=\"2\">\r\n            <button nz-button nzType=\"primary\" class=\"primary_button2 ant-btn ant-btn-primary\"\r\n              (click)=\"onAddCouponProduct()\"><span>{{isEditing?'Update':'Add'}}</span></button>\r\n            <button nz-button nzType=\"primary\" class=\"primary_button1 ant-btn ant-btn-primary\"\r\n              (click)=\"onCancel()\"><span>close</span></button>\r\n\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n      </form>\r\n    </nz-card>\r\n  </div>\r\n</div>\r\n\r\n<nz-drawer [nzBodyStyle]=\"{ height: 'calc(100% - 55px)', overflow: 'auto', 'padding-bottom': '53px' }\"\r\n  [nzMaskClosable]=\"false\" [nzWidth]=\"500\" [nzVisible]=\"isImageUploading\" [nzTitle]=\"'Upload Image'\"\r\n  (nzOnClose)=\"onCloseImageDrawer()\">\r\n  <div nz-col nzSpan=\"12\" [nzOffset]=\"2\">\r\n\r\n      <div>\r\n        <input type=\"file\" accept=\"image/gif, image/jpeg, image/png\" #myInput (change)=\"fileChangeEvent($event)\" />\r\n        <image-cropper [imageChangedEvent]=\"imageChangedEvent\" [aspectRatio]=\"1/1\"\r\n           [cropperMinWidth]=\"'cropperMinWidth'\"\r\n          [cropperMinHeight]=\"cropperMinHeight\" [onlyScaleDown]=\"true\" [roundCropper]=\"false\" format=\"png\"\r\n          outputType=\"base64\" (imageCropped)=\"imageCropped($event)\" (imageLoaded)=\"imageLoaded()\"\r\n          (cropperReady)=\"cropperReady()\" (loadImageFailed)=\"loadImageFailed()\"\r\n          [style.display]=\"showCropper ? null : 'none'\" [alignImage]=\"'left'\">\r\n        </image-cropper>\r\n      </div>\r\n    <!-- <nz-card > -->\r\n      <div nz-row [nzGutter]=\"16\" *ngIf=\"croppedImage.length>0\">\r\n        <div nz-col nzSpan=\"12\">\r\n          <img [src]=\"croppedImage\" style=\"width: 100%;\" />\r\n        </div>\r\n        <div nz-col nzSpan=\"12\">\r\n          <div nz-row style=\"margin-top: 10px;\" *ngIf=\"croppedImage.length>0\">\r\n            <button type=\"button\" (click)=\"onCloseImageDrawer()\" class=\"ant-btn\"\r\n              style=\"margin-right: 10px;\"><span>Cancel</span></button>\r\n            <button type=\"button\" nz-button nzType=\"primary\" [nzLoading]=\"isUploadBtnLoading\"\r\n              class=\"ant-btn ant-btn-primary\" (click)=\"onSucessCroping()\"><span>Upload to Server</span></button>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    <!-- </nz-card> -->\r\n\r\n\r\n\r\n  </div>\r\n</nz-drawer>\r\n<nz-drawer [nzBodyStyle]=\"{ height: 'calc(100% - 55px)', overflow: 'auto', 'padding-bottom': '53px' }\"\r\n  [nzMaskClosable]=\"false\" [nzWidth]=\"720\" [nzVisible]=\"isDrawer\" nzTitle=\" \"\r\n  (nzOnClose)=\"OnCloseDrawer()\">\r\n  <div>\r\n\r\n    <div nz-row nzGutter=\"8\">\r\n      <div nz-col nzSpan=\"8\">\r\n        <nz-form-item>\r\n          <nz-form-label>Level 1</nz-form-label>\r\n          <nz-form-control>\r\n            <input nz-input [(ngModel)]=\"levels[0]\" placeholder=\"\" />\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n      </div>\r\n      <div nz-col nzSpan=\"8\">\r\n        <nz-form-item>\r\n          <nz-form-label>Level 2</nz-form-label>\r\n          <nz-form-control>\r\n            <input nz-input [(ngModel)]=\"levels[1]\" placeholder=\"\" />\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n      </div>\r\n      <div nz-col nzSpan=\"8\">\r\n        <nz-form-item>\r\n          <nz-form-label>Level 3</nz-form-label>\r\n          <nz-form-control>\r\n            <input nz-input [(ngModel)]=\"levels[2]\" placeholder=\"\" />\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n      </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n      <div nz-col nzSpan=\"8\">\r\n        <button type=\"button\" nz-button nzType=\"primary\" class=\"ant-btn ant-btn-primary\"\r\n          (click)=\"OnCloseDrawer()\"><span>Update</span></button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</nz-drawer>\r\n\r\n<!-- <nz-drawer\r\n      [nzBodyStyle]=\"{ height: 'calc(100% - 55px)', overflow: 'auto', 'padding-bottom': '53px' }\"\r\n      [nzMaskClosable]=\"false\"\r\n      [nzWidth]=\"400\"\r\n      [nzVisible]=\"isvisible\"\r\n      [nzTitle]=\"title\"\r\n      (nzOnClose)=\"onCancel()\"\r\n    >\r\n    <ng-template #title>\r\n      <span>{{isEditing?'Update':'Add'}} Coupon Category</span>\r\n    </ng-template>\r\n    <form nz-form [formGroup]=\"addCategoryForm\">\r\n        <div nz-row nzGutter=\"8\">\r\n          <div nz-col nzSpan=\"24\">\r\n            <nz-form-item>\r\n              <nz-form-label>SNo</nz-form-label>\r\n              <nz-form-control [nzValidateStatus]=\"ValidatingStatus\" nzHasFeedback>\r\n                <input nz-input formControlName=\"SNo\" placeholder=\"please enter SNo\" />\r\n                <nz-form-explain *ngIf=\"addCategoryForm.get('SNo').dirty && addCategoryForm.get('SNo').errors\">Please\r\n                    input your SNo!</nz-form-explain>\r\n                <nz-form-explain *ngIf=\"ValidatingStatus == 'error'\">S.No Already Exists\r\n                    </nz-form-explain>\r\n              </nz-form-control>\r\n            </nz-form-item>\r\n            <nz-form-item>\r\n              <nz-form-label>Category Name</nz-form-label>\r\n              <nz-form-control>\r\n                <input nz-input formControlName=\"Coupons_Category_Name\" placeholder=\"please enter Coupon Category Name\" />\r\n                <nz-form-explain *ngIf=\"addCategoryForm.get('Coupons_Category_Name').dirty && addCategoryForm.get('Coupons_Category_Name').errors\">Please\r\n                    input your Coupon Category Name!</nz-form-explain>\r\n              </nz-form-control>\r\n            </nz-form-item>\r\n            <nz-form-item>\r\n              <nz-form-label>Admin Share (%)</nz-form-label>\r\n              <nz-form-control>\r\n                <input nz-input formControlName=\"CC_Admin_Share_Percent\" placeholder=\"please enter Admin Share Percent\" />\r\n                <nz-form-explain *ngIf=\"addCategoryForm.get('CC_Admin_Share_Percent').dirty && addCategoryForm.get('CC_Admin_Share_Percent').errors\">Please\r\n                    input your Admin Share Percent!</nz-form-explain>\r\n              </nz-form-control>\r\n            </nz-form-item>\r\n          </div>\r\n          </div>\r\n          <div class=\"footer\">\r\n              <button nz-button nzType=\"primary\" class=\"primary_button1 ant-btn ant-btn-primary\" [nzLoading]=\"isAddButton\"\r\n              (click)=\"onAddCategory()\"><span>{{isEditing?'Update':'Add'}}</span></button>\r\n            </div>\r\n      </form>\r\n    </nz-drawer> -->"

/***/ }),

/***/ "./src/app/coupon-products/coupon-products.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/coupon-products/coupon-products.component.ts ***!
  \**************************************************************/
/*! exports provided: CouponProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponProductsComponent", function() { return CouponProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var CouponProductsComponent = /** @class */ (function () {
    function CouponProductsComponent(fb, _appService, nzMessageService) {
        this.fb = fb;
        this._appService = _appService;
        this.nzMessageService = nzMessageService;
        this.skip = 0;
        this.limit = this._appService.limit;
        this.currentPage = 1;
        this.couponProducts = [];
        this.cropperMinWidth = 1680;
        this.cropperMinHeight = 280;
        this.resizeToWidth = 1680;
        this.resizeToHeight = 280;
        this.showCropper = false;
        this.croppedImage = '';
        this.imageChangedEvent = '';
        this.ImageData = [];
        this.couponShares = 0;
        this.levels = [0, 0, 0];
    }
    CouponProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onChangeTab(1);
        this.createCoupon = this.fb.group({
            SNo: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            C_Product_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            C_Product_Description: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            C_Product_Price: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Cash_Coupons_Share: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Purchace_Coupons_Share: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Gift_Coupons_Share: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Update_Coupons_Share: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.createCoupon.get('SNo').valueChanges.subscribe(function (data) {
            if (_this.createCoupon.get('SNo').valid) {
                _this.checkSerialNumber(data);
            }
            else {
                _this.ValidatingStatus = '';
            }
        });
    };
    CouponProductsComponent.prototype.onChangeTab = function (event) {
        this.selectedtab = event;
        this.skip = 0;
        this.getCouponProducts();
    };
    CouponProductsComponent.prototype.getCouponProducts = function () {
        var _this = this;
        this.isloading = true;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var userdata = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            Active_Inactive_Status: this.selectedtab == 1 ? true : false,
            skip: this.skip,
            limit: this.limit
        };
        try {
            this._appService.postMethod('List_Coupon_Products', userdata)
                .subscribe(function (resp) {
                _this.isloading = false;
                if (resp.success) {
                    if (_this.skip == 0) {
                        _this.currentPage = 1;
                    }
                    _this.totalItem = resp.extras.Count;
                    _this.couponProducts = resp.extras.Data;
                }
                else {
                    _this.isloading = false;
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                }
            }, function (error) {
            });
        }
        catch (e) {
        }
    };
    CouponProductsComponent.prototype.onNextPage = function (event) {
        this.currentPage = this.currentPage;
        this.skip = (event - 1) * this.limit;
        this.getCouponProducts();
    };
    CouponProductsComponent.prototype.onAdd = function () {
        this.isAdding = true;
        this.isEditing = false;
    };
    CouponProductsComponent.prototype.onCancel = function () {
        this.isAdding = false;
        this.isEditing = false;
        this.createCoupon.reset();
        this.ImageData = [];
        this.levels = [];
    };
    CouponProductsComponent.prototype.onEdit = function (data) {
        this.isAdding = true;
        this.isEditing = true;
        this.selectedData = data;
        this.createCoupon.patchValue(data);
        this.levels = [];
        this.levels = this.selectedData.Update_Coupons_Share;
        this.ImageData = [];
        this.ImageData.push(this.selectedData.C_Product_Image_Data);
    };
    CouponProductsComponent.prototype.onUploadProductImage = function () {
        this.croppedImage = '';
        if (this.myInputVariable != undefined) {
            this.myInputVariable.nativeElement.value = "";
        }
        this.resizeToHeight = 280;
        this.resizeToWidth = 1680;
        this.cropperMinHeight = 280;
        this.cropperMinWidth = 1680;
        this.isImageUploading = true;
    };
    CouponProductsComponent.prototype.onSucessCroping = function () {
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
    CouponProductsComponent.prototype.dataURItoBlob = function (dataURI) {
        var byteString = window.atob(dataURI);
        var arrayBuffer = new ArrayBuffer(byteString.length);
        var int8Array = new Uint8Array(arrayBuffer);
        for (var i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        var blob = new Blob([int8Array], { type: 'image/jpeg' });
        return blob;
    };
    CouponProductsComponent.prototype.fileChangeEvent = function (event) {
        this.imageChangedEvent = event;
    };
    CouponProductsComponent.prototype.onCloseImageDrawer = function () {
        this.imageChangedEvent = null;
        this.myInputVariable.nativeElement.value = "";
        this.isImageUploading = false;
        this.isUploadBtnLoading = false;
        this.croppedImage = '';
        this.SNo = null;
    };
    CouponProductsComponent.prototype.imageCropped = function (event) {
        console.log(event);
        this.croppedImage = event.base64;
    };
    CouponProductsComponent.prototype.cropperReady = function () {
        console.log('Cropper ready');
    };
    CouponProductsComponent.prototype.loadImageFailed = function () {
        console.log('Load failed');
    };
    CouponProductsComponent.prototype.imageLoaded = function () {
        this.showCropper = true;
        console.log('Image loaded');
    };
    CouponProductsComponent.prototype.send = function (imageFile) {
        var _this = this;
        var formData = new FormData();
        formData.append('image', imageFile);
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpRequest"]('POST', this._appService.ImageUpload_Url + 'Upload_Image', formData, {
            reportProgress: true,
            withCredentials: false
        });
        this._appService.onImageUpload(req).subscribe(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpResponse"]) {
                _this.isUploadBtnLoading = false;
                _this.ImageData = [];
                _this.ImageData.push({
                    ImageID: event.body.extras.ImageID,
                    ImageOriginal: event.body.extras.ImageOriginal
                });
                _this.onCloseImageDrawer();
                // this.imageId = event.body.extras.ImageID
                //this.BannerForm()
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpResponse"]) {
            }
        }, function (err) {
            //item.onError!(err, item.file!);
        });
    };
    CouponProductsComponent.prototype.onAddCouponProduct = function () {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {};
        var url = '';
        if (this.isEditing) {
            url = 'Update_Coupon_Products';
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
            };
        }
        else {
            url = 'Add_Coupon_Products';
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
            };
        }
        try {
            this._appService.postMethod(url, body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.onCancel();
                    _this.nzMessageService.success(resp.extras.status);
                    _this.getCouponProducts();
                }
                else {
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                }
            }, function (error) {
            });
        }
        catch (e) { }
    };
    CouponProductsComponent.prototype.checkSerialNumber = function (serialNumber) {
        var _this = this;
        if (serialNumber.length > 0) {
            this.ValidatingStatus = "validating";
            var adminData = JSON.parse(localStorage.getItem("adminData"));
            var body = {
                AdminID: adminData.AdminID,
                SessionID: adminData.SessionID,
                SNo: serialNumber,
                Coupons_ProductID: this.isEditing ? this.selectedData.Coupons_ProductID : ''
            };
            try {
                this._appService.postMethod('Check_For_Coupons_Product_SNo_Available', body)
                    .subscribe(function (resp) {
                    if (resp.success) {
                        _this.ValidatingStatus = 'success';
                    }
                    else {
                        _this.ValidatingStatus = 'error';
                    }
                }, function (error) {
                    _this.ValidatingStatus = 'error';
                });
            }
            catch (e) { }
        }
        else {
            // this.ValidatingStatus = 'null'
        }
    };
    CouponProductsComponent.prototype.onClickDrawer = function () {
        this.isDrawer = true;
    };
    CouponProductsComponent.prototype.OnCloseDrawer = function () {
        var _this = this;
        console.log(this.levels);
        this.couponShares = 0;
        this.isDrawer = false;
        this.levels.forEach(function (item) {
            _this.couponShares = (+item) + _this.couponShares;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CouponProductsComponent.prototype, "myInputVariable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__["ImageCropperComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__["ImageCropperComponent"])
    ], CouponProductsComponent.prototype, "imageCropper", void 0);
    CouponProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coupon-products',
            template: __webpack_require__(/*! ./coupon-products.component.html */ "./src/app/coupon-products/coupon-products.component.html"),
            styles: [__webpack_require__(/*! ./coupon-products.component.css */ "./src/app/coupon-products/coupon-products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], CouponProductsComponent);
    return CouponProductsComponent;
}());



/***/ }),

/***/ "./src/app/coupon-products/coupon-products.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/coupon-products/coupon-products.module.ts ***!
  \***********************************************************/
/*! exports provided: CouponProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponProductsModule", function() { return CouponProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _coupon_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coupon-products.component */ "./src/app/coupon-products/coupon-products.component.ts");
/* harmony import */ var _coupon_products_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coupon-products-routing.module */ "./src/app/coupon-products/coupon-products-routing.module.ts");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");








var CouponProductsModule = /** @class */ (function () {
    function CouponProductsModule() {
    }
    CouponProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _coupon_products_routing_module__WEBPACK_IMPORTED_MODULE_4__["CouponProductsRoutingModule"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__["ImageCropperModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            declarations: [_coupon_products_component__WEBPACK_IMPORTED_MODULE_3__["CouponProductsComponent"]]
        })
    ], CouponProductsModule);
    return CouponProductsModule;
}());



/***/ })

}]);
//# sourceMappingURL=coupon-products-coupon-products-module.js.map