(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["box-amount-shares-box-amount-shares-module"],{

/***/ "./src/app/box-amount-shares/box-amount-shares-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/box-amount-shares/box-amount-shares-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: BoxAmountSharesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxAmountSharesRoutingModule", function() { return BoxAmountSharesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _box_amount_shares_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./box-amount-shares.component */ "./src/app/box-amount-shares/box-amount-shares.component.ts");





var routes = [
    { path: '', component: _box_amount_shares_component__WEBPACK_IMPORTED_MODULE_4__["BoxAmountSharesComponent"] }
];
var BoxAmountSharesRoutingModule = /** @class */ (function () {
    function BoxAmountSharesRoutingModule() {
    }
    BoxAmountSharesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BoxAmountSharesRoutingModule);
    return BoxAmountSharesRoutingModule;
}());



/***/ }),

/***/ "./src/app/box-amount-shares/box-amount-shares.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/box-amount-shares/box-amount-shares.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JveC1hbW91bnQtc2hhcmVzL2JveC1hbW91bnQtc2hhcmVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/box-amount-shares/box-amount-shares.component.html":
/*!********************************************************************!*\
  !*** ./src/app/box-amount-shares/box-amount-shares.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row style=\"margin-top: 50px;\" *ngIf=\"!isvisible\">\r\n  <div nz-col nzSpan=\"24\">\r\n    <nz-card [nzLoading]=\"isloading\" [nzExtra]=\"extraTemplate\" nzTitle=\"Box Shares\" *ngIf=\"boxShares.length >0\">\r\n      <ng-template #extraTemplate>\r\n        <a (click)=\"onUpdate(boxShares[0])\">Update</a>\r\n      </ng-template>\r\n      <div nz-row>\r\n        <div nz-col nzSpan=\"24\">\r\n          <div nz-row>\r\n            <div nz-col nzSpan=\"6\">\r\n              <nz-form-item>\r\n                <nz-form-label nzSpan=\"8\">Product Name</nz-form-label>\r\n                <nz-form-control nzSpan=\"14\">\r\n                 {{boxShares[0].Product_Name}}\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n            <div nz-col nzSpan=\"6\">\r\n              <nz-form-item>\r\n                <nz-form-label nzSpan=\"8\">Description</nz-form-label>\r\n                <nz-form-control nzSpan=\"14\">\r\n                 {{boxShares[0].Description}}\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n              <div nz-col nzSpan=\"6\">\r\n              <nz-form-item>\r\n                <nz-form-label nzSpan=\"8\">Price</nz-form-label>\r\n                <nz-form-control nzSpan=\"14\">\r\n                 {{boxShares[0].Price}}\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n              <div nz-col nzSpan=\"6\">\r\n              <nz-form-item>\r\n                <nz-form-label nzSpan=\"8\">Image</nz-form-label>\r\n                <nz-form-control nzSpan=\"14\">\r\n                  <span *ngIf=\"boxShares[0].Image_Available\">\r\n                    <a target=\"_blank\" [attr.href]=\"boxShares[0].Image_Data.ImageOriginal\">Click to View</a>\r\n                  </span>\r\n                \r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n          </div>\r\n          <div nz-row>\r\n            <div nz-col nzSpan=\"24\">\r\n              <h3><b>Box One</b></h3>\r\n              <div nz-row>\r\n                <div nz-col nzSpan=\"4\">\r\n                  <nz-form-item>\r\n                    <nz-form-label nzSpan=\"14\">Cash Percent</nz-form-label>\r\n                    <nz-form-control nzSpan=\"8\">\r\n                     {{boxShares[0].Box_One.Cash_Percent}}\r\n                    </nz-form-control>\r\n                  </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"4\">\r\n                  <nz-form-item>\r\n                    <nz-form-label nzSpan=\"14\">Purchase Percent</nz-form-label>\r\n                    <nz-form-control nzSpan=\"8\">\r\n                     {{boxShares[0].Box_One.Purchace_Percent}}\r\n                    </nz-form-control>\r\n                  </nz-form-item>\r\n                </div>\r\n                  <div nz-col nzSpan=\"4\">\r\n                    <nz-form-item>\r\n                      <nz-form-label nzSpan=\"14\">Gift Percent</nz-form-label>\r\n                      <nz-form-control nzSpan=\"8\">\r\n                       {{boxShares[0].Box_One.Gift_Percent}}\r\n                      </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                  <div nz-col nzSpan=\"4\">\r\n                    <nz-form-item>\r\n                      <nz-form-label nzSpan=\"14\">Coupon Percent</nz-form-label>\r\n                      <nz-form-control nzSpan=\"8\">\r\n                       {{boxShares[0].Box_One.Upgrade_Coupon_Percent}}\r\n                      </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                  <div nz-col nzSpan=\"4\">\r\n                    <nz-form-item>\r\n                      <nz-form-label nzSpan=\"14\">Nine Level Percent</nz-form-label>\r\n                      <nz-form-control nzSpan=\"8\">\r\n                       {{boxShares[0].Box_One.Nine_Level_Percent}}\r\n                      </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div nz-row>\r\n            <div nz-col nzSpan=\"24\">\r\n              <h3><b>Box Two</b></h3>\r\n              <div nz-row>\r\n                <div nz-col nzSpan=\"4\">\r\n                  <nz-form-item>\r\n                    <nz-form-label nzSpan=\"14\">Cash Percent</nz-form-label>\r\n                    <nz-form-control nzSpan=\"8\">\r\n                     {{boxShares[0].Box_Two.Cash_Percent}}\r\n                    </nz-form-control>\r\n                  </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"4\">\r\n                  <nz-form-item>\r\n                    <nz-form-label nzSpan=\"14\">Purchase Percent</nz-form-label>\r\n                    <nz-form-control nzSpan=\"8\">\r\n                     {{boxShares[0].Box_Two.Purchace_Percent}}\r\n                    </nz-form-control>\r\n                  </nz-form-item>\r\n                </div>\r\n                  <div nz-col nzSpan=\"4\">\r\n                    <nz-form-item>\r\n                      <nz-form-label nzSpan=\"14\">Gift Percent</nz-form-label>\r\n                      <nz-form-control nzSpan=\"8\">\r\n                       {{boxShares[0].Box_Two.Gift_Percent}}\r\n                      </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                  <div nz-col nzSpan=\"4\">\r\n                    <nz-form-item>\r\n                      <nz-form-label nzSpan=\"14\">Coupon Percent</nz-form-label>\r\n                      <nz-form-control nzSpan=\"8\">\r\n                       {{boxShares[0].Box_Two.Upgrade_Coupon_Percent}}\r\n                      </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                  <div nz-col nzSpan=\"4\">\r\n                    <nz-form-item>\r\n                      <nz-form-label nzSpan=\"14\">Nine Level Percent</nz-form-label>\r\n                      <nz-form-control nzSpan=\"8\">\r\n                       {{boxShares[0].Box_Two.Nine_Level_Percent}}\r\n                      </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div nz-row>\r\n            <div nz-col nzSpan=\"24\">\r\n              <h3><b>Box Three</b></h3>\r\n              <div nz-row>\r\n                <div nz-col nzSpan=\"4\">\r\n                  <nz-form-item>\r\n                    <nz-form-label nzSpan=\"14\">Cash Percent</nz-form-label>\r\n                    <nz-form-control nzSpan=\"8\">\r\n                     {{boxShares[0].Box_Three.Cash_Percent}}\r\n                    </nz-form-control>\r\n                  </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"4\">\r\n                  <nz-form-item>\r\n                    <nz-form-label nzSpan=\"14\">Purchase Percent</nz-form-label>\r\n                    <nz-form-control nzSpan=\"8\">\r\n                     {{boxShares[0].Box_Three.Purchace_Percent}}\r\n                    </nz-form-control>\r\n                  </nz-form-item>\r\n                </div>\r\n                  <div nz-col nzSpan=\"4\">\r\n                    <nz-form-item>\r\n                      <nz-form-label nzSpan=\"14\">Gift Percent</nz-form-label>\r\n                      <nz-form-control nzSpan=\"8\">\r\n                       {{boxShares[0].Box_Three.Gift_Percent}}\r\n                      </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                  <div nz-col nzSpan=\"4\">\r\n                    <nz-form-item>\r\n                      <nz-form-label nzSpan=\"14\">Coupon Percent</nz-form-label>\r\n                      <nz-form-control nzSpan=\"8\">\r\n                       {{boxShares[0].Box_Three.Upgrade_Coupon_Percent}}\r\n                      </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n                  <div nz-col nzSpan=\"4\">\r\n                    <nz-form-item>\r\n                      <nz-form-label nzSpan=\"14\">Nine Level Percent</nz-form-label>\r\n                      <nz-form-control nzSpan=\"8\">\r\n                       {{boxShares[0].Box_Three.Nine_Level_Percent}}\r\n                      </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </nz-card>\r\n  </div>\r\n</div>\r\n<div nz-row style=\"margin-top: 50px;\" *ngIf=\"isvisible\">\r\n  <div nz-col nzSpan=\"24\">\r\n    <nz-card [nzTitle]=\"title\">\r\n        <ng-template #title>\r\n          <span>Update Box Shares</span>\r\n        </ng-template>\r\n        <form nz-form [formGroup]=\"addboxSharesForm\">\r\n          <div nz-row nzGutter=\"8\">\r\n            <div nz-col nzSpan=\"6\">\r\n              <nz-form-item>\r\n                <nz-form-label>Product Name</nz-form-label>\r\n                <nz-form-control>\r\n                  <input nz-input formControlName=\"Product_Name\" placeholder=\"please enter Product Name\" />\r\n                  <nz-form-explain *ngIf=\"addboxSharesForm.get('Product_Name').dirty && addboxSharesForm.get('Product_Name').errors\">Please\r\n                      input your Product Name!</nz-form-explain>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n            <div nz-col nzSpan=\"6\">\r\n              <nz-form-item>\r\n                <nz-form-label>Description</nz-form-label>\r\n                <nz-form-control>\r\n                  <input nz-input formControlName=\"Description\" placeholder=\"please enter Description\" />\r\n                  <nz-form-explain *ngIf=\"addboxSharesForm.get('Description').dirty && addboxSharesForm.get('Description').errors\">Please\r\n                      input your Description!</nz-form-explain>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n            <div nz-col nzSpan=\"6\">\r\n               \r\n              <nz-form-item>\r\n                <nz-form-label>Price</nz-form-label>\r\n                <nz-form-control>\r\n                  <input nz-input formControlName=\"Price\" placeholder=\"please enter Price\" />\r\n                  <nz-form-explain *ngIf=\"addboxSharesForm.get('Price').dirty && addboxSharesForm.get('Price').errors\">Please\r\n                      input your Price!</nz-form-explain>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n            <div nz-col nzSpan=\"6\">\r\n               \r\n              <nz-form-item>\r\n                <nz-form-label>Image</nz-form-label>\r\n                <nz-form-control>\r\n                  <button nz-button nzType=\"link\" (click)=\"onUploadProductImage()\">Click To Upload</button>\r\n                </nz-form-control>\r\n                <nz-form-control *ngIf=\"ImageData.length>0\">\r\n                  <a target=\"_blank\" [attr.href]=\"ImageData[0].ImageOriginal\">Click To view\r\n                    Image</a>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n          </div>\r\n          <div nz-row [nzGutter]=\"16\">\r\n            <h3><b>Box One</b></h3>\r\n            <div nz-col nzSpan=\"4\">\r\n              <nz-form-item>\r\n                <nz-form-label>Cash Percent</nz-form-label>\r\n                <nz-form-control>\r\n                  <input nz-input formControlName=\"Cash_Percent1\" placeholder=\"please enter Cash Percent\" />\r\n                  <nz-form-explain *ngIf=\"addboxSharesForm.get('Cash_Percent1').dirty && addboxSharesForm.get('Cash_Percent1').errors\">Please\r\n                      input your Cash Percent!</nz-form-explain>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n              </div>\r\n            <div nz-col nzSpan=\"4\">\r\n              <nz-form-item>\r\n                <nz-form-label>Purchace Percent</nz-form-label>\r\n                <nz-form-control>\r\n                  <input nz-input formControlName=\"Purchace_Percent1\" placeholder=\"please enter Purchace Percent\" />\r\n                  <nz-form-explain *ngIf=\"addboxSharesForm.get('Purchace_Percent1').dirty && addboxSharesForm.get('Purchace_Percent1').errors\">Please\r\n                      input your Purchace Percent!</nz-form-explain>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n              </div>\r\n            <div nz-col nzSpan=\"4\">\r\n              <nz-form-item>\r\n                <nz-form-label>Gift Percent</nz-form-label>\r\n                <nz-form-control>\r\n                  <input nz-input formControlName=\"Gift_Percent1\" placeholder=\"please enter Gift Percent\" />\r\n                  <nz-form-explain *ngIf=\"addboxSharesForm.get('Gift_Percent1').dirty && addboxSharesForm.get('Gift_Percent1').errors\">Please\r\n                      input your Gift Percent!</nz-form-explain>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n              </div>\r\n            <div nz-col nzSpan=\"4\">\r\n              <nz-form-item>\r\n                <nz-form-label>Coupon Percent</nz-form-label>\r\n                <nz-form-control>\r\n                  <input nz-input formControlName=\"Upgrade_Coupon_Percent1\" placeholder=\"please enter Coupon Percent\" />\r\n                  <nz-form-explain *ngIf=\"addboxSharesForm.get('Upgrade_Coupon_Percent1').dirty && addboxSharesForm.get('Upgrade_Coupon_Percent1').errors\">Please\r\n                      input your Coupon Percent!</nz-form-explain>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n              </div>\r\n            <div nz-col nzSpan=\"4\">\r\n              <nz-form-item>\r\n                <nz-form-label>Nine Level Percent</nz-form-label>\r\n                <nz-form-control>\r\n                  <input nz-input formControlName=\"Nine_Level_Percent1\" placeholder=\"please enter Nine Level Percent\" />\r\n                  <nz-form-explain *ngIf=\"addboxSharesForm.get('Nine_Level_Percent1').dirty && addboxSharesForm.get('Nine_Level_Percent1').errors\">Please\r\n                      input your Nine Level Percent!</nz-form-explain>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n              </div>\r\n              <div nz-col nzSpan=\"4\">\r\n                <nz-form-item>\r\n                  <nz-form-label>Total</nz-form-label>\r\n                  <nz-form-control>\r\n                    <button nz-button nzType=\"link\" style=\"    color: green;\r\n                    font-size: 18px;\r\n                    font-weight: 600;\">\r\n                      {{(+addboxSharesForm.value.Cash_Percent1)+(+addboxSharesForm.value.Purchace_Percent1)+\r\n                        (+addboxSharesForm.value.Gift_Percent1)+(+addboxSharesForm.value.Upgrade_Coupon_Percent1)+\r\n                        (+addboxSharesForm.value.Nine_Level_Percent1)}}\r\n                    </button>\r\n                  </nz-form-control>\r\n                </nz-form-item>\r\n                </div>\r\n          </div>\r\n          <div nz-row [nzGutter]=\"16\">\r\n            <h3><b>Box Two</b></h3>\r\n            <div nz-col nzSpan=\"4\">\r\n              <nz-form-item>\r\n                <nz-form-label>Cash Percent</nz-form-label>\r\n                <nz-form-control>\r\n                  <input nz-input formControlName=\"Cash_Percent2\" placeholder=\"please enter Cash Percent\" />\r\n                  <nz-form-explain *ngIf=\"addboxSharesForm.get('Cash_Percent2').dirty && addboxSharesForm.get('Cash_Percent2').errors\">Please\r\n                      input your Cash Percent!</nz-form-explain>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n              </div>\r\n            <div nz-col nzSpan=\"4\">\r\n              <nz-form-item>\r\n                <nz-form-label>Purchace Percent</nz-form-label>\r\n                <nz-form-control>\r\n                  <input nz-input formControlName=\"Purchace_Percent2\" placeholder=\"please enter Purchace Percent\" />\r\n                  <nz-form-explain *ngIf=\"addboxSharesForm.get('Purchace_Percent2').dirty && addboxSharesForm.get('Purchace_Percent2').errors\">Please\r\n                      input your Purchace Percent!</nz-form-explain>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n              </div>\r\n            <div nz-col nzSpan=\"4\">\r\n              <nz-form-item>\r\n                <nz-form-label>Gift Percent</nz-form-label>\r\n                <nz-form-control>\r\n                  <input nz-input formControlName=\"Gift_Percent2\" placeholder=\"please enter Gift Percent\" />\r\n                  <nz-form-explain *ngIf=\"addboxSharesForm.get('Gift_Percent2').dirty && addboxSharesForm.get('Gift_Percent2').errors\">Please\r\n                      input your Gift Percent!</nz-form-explain>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n              </div>\r\n            <div nz-col nzSpan=\"4\">\r\n              <nz-form-item>\r\n                <nz-form-label>Coupon Percent</nz-form-label>\r\n                <nz-form-control>\r\n                  <input nz-input formControlName=\"Upgrade_Coupon_Percent2\" placeholder=\"please enter Coupon Percent\" />\r\n                  <nz-form-explain *ngIf=\"addboxSharesForm.get('Upgrade_Coupon_Percent2').dirty && addboxSharesForm.get('Upgrade_Coupon_Percent2').errors\">Please\r\n                      input your Coupon Percent!</nz-form-explain>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n              </div>\r\n            <div nz-col nzSpan=\"4\">\r\n              <nz-form-item>\r\n                <nz-form-label>Nine Level Percent</nz-form-label>\r\n                <nz-form-control>\r\n                  <input nz-input formControlName=\"Nine_Level_Percent2\" placeholder=\"please enter Nine Level Percent\" />\r\n                  <nz-form-explain *ngIf=\"addboxSharesForm.get('Nine_Level_Percent2').dirty && addboxSharesForm.get('Nine_Level_Percent2').errors\">Please\r\n                      input your Nine Level Percent!</nz-form-explain>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n              </div>\r\n              <div nz-col nzSpan=\"4\">\r\n                <nz-form-item>\r\n                  <nz-form-label>Total</nz-form-label>\r\n                  <nz-form-control>\r\n                    <button nz-button nzType=\"link\" style=\"    color: green;\r\n                    font-size: 18px;\r\n                    font-weight: 600;\">\r\n                      {{(+addboxSharesForm.value.Cash_Percent2)+(+addboxSharesForm.value.Purchace_Percent2)+\r\n                        (+addboxSharesForm.value.Gift_Percent2)+(+addboxSharesForm.value.Upgrade_Coupon_Percent2)+\r\n                        (+addboxSharesForm.value.Nine_Level_Percent2)}}\r\n                    </button>\r\n                  </nz-form-control>\r\n                </nz-form-item>\r\n                </div>\r\n          </div>\r\n          <div nz-row [nzGutter]=\"16\">\r\n            <h3><b>Box Three</b></h3>\r\n            <div nz-col nzSpan=\"4\">\r\n              <nz-form-item>\r\n                <nz-form-label>Cash Percent</nz-form-label>\r\n                <nz-form-control>\r\n                  <input nz-input formControlName=\"Cash_Percent3\" placeholder=\"please enter Cash Percent\" />\r\n                  <nz-form-explain *ngIf=\"addboxSharesForm.get('Cash_Percent3').dirty && addboxSharesForm.get('Cash_Percent3').errors\">Please\r\n                      input your Cash Percent!</nz-form-explain>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n              </div>\r\n            <div nz-col nzSpan=\"4\">\r\n              <nz-form-item>\r\n                <nz-form-label>Purchace Percent</nz-form-label>\r\n                <nz-form-control>\r\n                  <input nz-input formControlName=\"Purchace_Percent3\" placeholder=\"please enter Purchace Percent\" />\r\n                  <nz-form-explain *ngIf=\"addboxSharesForm.get('Purchace_Percent3').dirty && addboxSharesForm.get('Purchace_Percent3').errors\">Please\r\n                      input your Purchace Percent!</nz-form-explain>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n              </div>\r\n            <div nz-col nzSpan=\"4\">\r\n              <nz-form-item>\r\n                <nz-form-label>Gift Percent</nz-form-label>\r\n                <nz-form-control>\r\n                  <input nz-input formControlName=\"Gift_Percent3\" placeholder=\"please enter Gift Percent\" />\r\n                  <nz-form-explain *ngIf=\"addboxSharesForm.get('Gift_Percent3').dirty && addboxSharesForm.get('Gift_Percent3').errors\">Please\r\n                      input your Gift Percent!</nz-form-explain>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n              </div>\r\n            <div nz-col nzSpan=\"4\">\r\n              <nz-form-item>\r\n                <nz-form-label>Coupon Percent</nz-form-label>\r\n                <nz-form-control>\r\n                  <input nz-input formControlName=\"Upgrade_Coupon_Percent3\" placeholder=\"please enter Coupon Percent\" />\r\n                  <nz-form-explain *ngIf=\"addboxSharesForm.get('Upgrade_Coupon_Percent3').dirty && addboxSharesForm.get('Upgrade_Coupon_Percent3').errors\">Please\r\n                      input your Coupon Percent!</nz-form-explain>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n              </div>\r\n            <div nz-col nzSpan=\"4\">\r\n              <nz-form-item>\r\n                <nz-form-label>Nine Level Percent</nz-form-label>\r\n                <nz-form-control>\r\n                  <input nz-input formControlName=\"Nine_Level_Percent3\" placeholder=\"please enter Nine Level Percent\" />\r\n                  <nz-form-explain *ngIf=\"addboxSharesForm.get('Nine_Level_Percent3').dirty && addboxSharesForm.get('Nine_Level_Percent3').errors\">Please\r\n                      input your Nine Level Percent!</nz-form-explain>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n              </div>\r\n              <div nz-col nzSpan=\"4\">\r\n                <nz-form-item>\r\n                  <nz-form-label>Total</nz-form-label>\r\n                  <nz-form-control>\r\n                    <button nz-button nzType=\"link\" style=\"    color: green;\r\n                    font-size: 18px;\r\n                    font-weight: 600;\">\r\n                      {{(+addboxSharesForm.value.Cash_Percent3)+(+addboxSharesForm.value.Purchace_Percent3)+\r\n                        (+addboxSharesForm.value.Gift_Percent3)+(+addboxSharesForm.value.Upgrade_Coupon_Percent3)+\r\n                        (+addboxSharesForm.value.Nine_Level_Percent3)}}\r\n                    </button>\r\n                  </nz-form-control>\r\n                </nz-form-item>\r\n                </div>\r\n          </div>\r\n      \r\n\r\n            <div class=\"footer\">\r\n                <button nz-button nzType=\"primary\" class=\"primary_button1 ant-btn ant-btn-primary\" [nzLoading]=\"isAddButton\"\r\n                (click)=\"onAddCategory()\" style=\"margin-right: 10px;\"><span>Update</span></button>\r\n                <button nz-button nzType=\"danger\" class=\"primary_button1 ant-btn ant-btn-primary\"\r\n                (click)=\"onCancel()\"><span>Cancel</span></button>\r\n              </div>\r\n        </form>\r\n      </nz-card>\r\n   \r\n  </div>\r\n</div>\r\n\r\n<nz-drawer [nzBodyStyle]=\"{ height: 'calc(100% - 55px)', overflow: 'auto', 'padding-bottom': '53px' }\"\r\n  [nzMaskClosable]=\"false\" [nzWidth]=\"500\" [nzVisible]=\"isImageUploading\" [nzTitle]=\"'Upload Image'\"\r\n  (nzOnClose)=\"onCloseImageDrawer()\">\r\n  <div nz-col nzSpan=\"12\" [nzOffset]=\"2\">\r\n\r\n      <div>\r\n        <input type=\"file\" accept=\"image/gif, image/jpeg, image/png\" #myInput (change)=\"fileChangeEvent($event)\" />\r\n        <image-cropper [imageChangedEvent]=\"imageChangedEvent\" [aspectRatio]=\"1/1\"\r\n           [cropperMinWidth]=\"'cropperMinWidth'\"\r\n          [cropperMinHeight]=\"cropperMinHeight\" [onlyScaleDown]=\"true\" [roundCropper]=\"false\" format=\"png\"\r\n          outputType=\"base64\" (imageCropped)=\"imageCropped($event)\" (imageLoaded)=\"imageLoaded()\"\r\n          (cropperReady)=\"cropperReady()\" (loadImageFailed)=\"loadImageFailed()\"\r\n          [style.display]=\"showCropper ? null : 'none'\" [alignImage]=\"'left'\">\r\n        </image-cropper>\r\n      </div>\r\n    <!-- <nz-card > -->\r\n      <div nz-row [nzGutter]=\"16\" *ngIf=\"croppedImage.length>0\">\r\n        <div nz-col nzSpan=\"12\">\r\n          <img [src]=\"croppedImage\" style=\"width: 100%;\" />\r\n        </div>\r\n        <div nz-col nzSpan=\"12\">\r\n          <div nz-row style=\"margin-top: 10px;\" *ngIf=\"croppedImage.length>0\">\r\n            <button type=\"button\" (click)=\"onCloseImageDrawer()\" class=\"ant-btn\"\r\n              style=\"margin-right: 10px;\"><span>Cancel</span></button>\r\n            <button type=\"button\" nz-button nzType=\"primary\" [nzLoading]=\"isUploadBtnLoading\"\r\n              class=\"ant-btn ant-btn-primary\" (click)=\"onSucessCroping()\"><span>Upload to Server</span></button>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    <!-- </nz-card> -->\r\n\r\n\r\n\r\n  </div>\r\n</nz-drawer>"

/***/ }),

/***/ "./src/app/box-amount-shares/box-amount-shares.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/box-amount-shares/box-amount-shares.component.ts ***!
  \******************************************************************/
/*! exports provided: BoxAmountSharesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxAmountSharesComponent", function() { return BoxAmountSharesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var BoxAmountSharesComponent = /** @class */ (function () {
    function BoxAmountSharesComponent(fb, _appService, nzMessageService) {
        this.fb = fb;
        this._appService = _appService;
        this.nzMessageService = nzMessageService;
        this.boxShares = [];
        this.cropperMinWidth = 1680;
        this.cropperMinHeight = 280;
        this.resizeToWidth = 1680;
        this.resizeToHeight = 280;
        this.showCropper = false;
        this.croppedImage = '';
        this.imageChangedEvent = '';
        this.ImageData = [];
    }
    BoxAmountSharesComponent.prototype.ngOnInit = function () {
        this.getboxShares();
        this.addboxSharesForm = this.fb.group({
            Product_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Description: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Price: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Cash_Percent1: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Purchace_Percent1: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Gift_Percent1: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Upgrade_Coupon_Percent1: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Nine_Level_Percent1: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Cash_Percent2: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Purchace_Percent2: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Gift_Percent2: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Upgrade_Coupon_Percent2: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Nine_Level_Percent2: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Cash_Percent3: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Purchace_Percent3: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Gift_Percent3: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Upgrade_Coupon_Percent3: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Nine_Level_Percent3: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    };
    BoxAmountSharesComponent.prototype.getboxShares = function () {
        var _this = this;
        this.isloading = true;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var userdata = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
        };
        try {
            this._appService.postMethod('List_Box_Amount_Shares', userdata)
                .subscribe(function (resp) {
                _this.isloading = false;
                if (resp.success) {
                    _this.boxShares = resp.extras.Data;
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
    BoxAmountSharesComponent.prototype.onUpdate = function (data) {
        this.selectedRecord = data;
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
        });
        this.ImageData = [];
        this.ImageData.push(this.selectedRecord.Image_Data);
    };
    BoxAmountSharesComponent.prototype.onCancel = function () {
        this.isvisible = false;
        this.addboxSharesForm.reset();
        this.ImageData = [];
    };
    BoxAmountSharesComponent.prototype.onAddCategory = function () {
        var _this = this;
        this.isAddButton = true;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {};
        var url = '';
        body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            Product_Name: this.addboxSharesForm.value.Product_Name,
            Description: this.addboxSharesForm.value.Description,
            Price: this.addboxSharesForm.value.Price,
            Image_Available: this.ImageData.length > 0 ? true : false,
            ImageID: this.ImageData.length > 0 ? this.ImageData[0].ImageID : '',
            Box_One: {
                Cash_Percent: this.addboxSharesForm.value.Cash_Percent1,
                Purchace_Percent: this.addboxSharesForm.value.Purchace_Percent1,
                Gift_Percent: this.addboxSharesForm.value.Gift_Percent1,
                Upgrade_Coupon_Percent: this.addboxSharesForm.value.Upgrade_Coupon_Percent1,
                Nine_Level_Percent: this.addboxSharesForm.value.Nine_Level_Percent1
            },
            Box_Two: {
                Cash_Percent: this.addboxSharesForm.value.Cash_Percent2,
                Purchace_Percent: this.addboxSharesForm.value.Purchace_Percent2,
                Gift_Percent: this.addboxSharesForm.value.Gift_Percent2,
                Upgrade_Coupon_Percent: this.addboxSharesForm.value.Upgrade_Coupon_Percent2,
                Nine_Level_Percent: this.addboxSharesForm.value.Nine_Level_Percent2
            },
            Box_Three: {
                Cash_Percent: this.addboxSharesForm.value.Cash_Percent3,
                Purchace_Percent: this.addboxSharesForm.value.Purchace_Percent3,
                Gift_Percent: this.addboxSharesForm.value.Gift_Percent3,
                Upgrade_Coupon_Percent: this.addboxSharesForm.value.Upgrade_Coupon_Percent3,
                Nine_Level_Percent: this.addboxSharesForm.value.Nine_Level_Percent3
            }
        };
        url = 'Add_Update_Box_Amount_Shares';
        try {
            this._appService.postMethod(url, body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.isAddButton = false;
                    _this.onCancel();
                    _this.getboxShares();
                    _this.nzMessageService.success(resp.extras.Status);
                }
                else {
                    _this.isAddButton = false;
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                }
            }, function (error) {
            });
        }
        catch (e) {
        }
    };
    BoxAmountSharesComponent.prototype.onUploadProductImage = function () {
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
    BoxAmountSharesComponent.prototype.onSucessCroping = function () {
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
    BoxAmountSharesComponent.prototype.dataURItoBlob = function (dataURI) {
        var byteString = window.atob(dataURI);
        var arrayBuffer = new ArrayBuffer(byteString.length);
        var int8Array = new Uint8Array(arrayBuffer);
        for (var i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        var blob = new Blob([int8Array], { type: 'image/jpeg' });
        return blob;
    };
    BoxAmountSharesComponent.prototype.fileChangeEvent = function (event) {
        this.imageChangedEvent = event;
    };
    BoxAmountSharesComponent.prototype.onCloseImageDrawer = function () {
        this.imageChangedEvent = null;
        this.myInputVariable.nativeElement.value = "";
        this.isImageUploading = false;
        this.isUploadBtnLoading = false;
        this.croppedImage = '';
        this.SNo = null;
    };
    BoxAmountSharesComponent.prototype.imageCropped = function (event) {
        console.log(event);
        this.croppedImage = event.base64;
    };
    BoxAmountSharesComponent.prototype.cropperReady = function () {
        console.log('Cropper ready');
    };
    BoxAmountSharesComponent.prototype.loadImageFailed = function () {
        console.log('Load failed');
    };
    BoxAmountSharesComponent.prototype.imageLoaded = function () {
        this.showCropper = true;
        console.log('Image loaded');
    };
    BoxAmountSharesComponent.prototype.send = function (imageFile) {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BoxAmountSharesComponent.prototype, "myInputVariable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__["ImageCropperComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__["ImageCropperComponent"])
    ], BoxAmountSharesComponent.prototype, "imageCropper", void 0);
    BoxAmountSharesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-box-amount-shares',
            template: __webpack_require__(/*! ./box-amount-shares.component.html */ "./src/app/box-amount-shares/box-amount-shares.component.html"),
            styles: [__webpack_require__(/*! ./box-amount-shares.component.css */ "./src/app/box-amount-shares/box-amount-shares.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], BoxAmountSharesComponent);
    return BoxAmountSharesComponent;
}());



/***/ }),

/***/ "./src/app/box-amount-shares/box-amount-shares.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/box-amount-shares/box-amount-shares.module.ts ***!
  \***************************************************************/
/*! exports provided: BoxAmountSharesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxAmountSharesModule", function() { return BoxAmountSharesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _box_amount_shares_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./box-amount-shares.component */ "./src/app/box-amount-shares/box-amount-shares.component.ts");
/* harmony import */ var _box_amount_shares_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./box-amount-shares-routing.module */ "./src/app/box-amount-shares/box-amount-shares-routing.module.ts");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");








var BoxAmountSharesModule = /** @class */ (function () {
    function BoxAmountSharesModule() {
    }
    BoxAmountSharesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _box_amount_shares_routing_module__WEBPACK_IMPORTED_MODULE_4__["BoxAmountSharesRoutingModule"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__["ImageCropperModule"]
            ],
            declarations: [_box_amount_shares_component__WEBPACK_IMPORTED_MODULE_3__["BoxAmountSharesComponent"]]
        })
    ], BoxAmountSharesModule);
    return BoxAmountSharesModule;
}());



/***/ })

}]);
//# sourceMappingURL=box-amount-shares-box-amount-shares-module.js.map