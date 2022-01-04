(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-app-settings-common-app-settings-module"],{

/***/ "./src/app/common-app-settings/common-app-settings-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/common-app-settings/common-app-settings-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: CommonAppSettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonAppSettingsRoutingModule", function() { return CommonAppSettingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _common_app_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common-app-settings.component */ "./src/app/common-app-settings/common-app-settings.component.ts");





var routes = [
    { path: '', component: _common_app_settings_component__WEBPACK_IMPORTED_MODULE_4__["CommonAppSettingsComponent"] }
];
var CommonAppSettingsRoutingModule = /** @class */ (function () {
    function CommonAppSettingsRoutingModule() {
    }
    CommonAppSettingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CommonAppSettingsRoutingModule);
    return CommonAppSettingsRoutingModule;
}());



/***/ }),

/***/ "./src/app/common-app-settings/common-app-settings.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/common-app-settings/common-app-settings.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi1hcHAtc2V0dGluZ3MvY29tbW9uLWFwcC1zZXR0aW5ncy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/common-app-settings/common-app-settings.component.html":
/*!************************************************************************!*\
  !*** ./src/app/common-app-settings/common-app-settings.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row style=\"margin-top: 50px;\" *ngIf=\"!isvisible\">\r\n  <div nz-col nzSpan=\"24\">\r\n    <nz-card [nzLoading]=\"isloading\" [nzExtra]=\"extraTemplate\" nzTitle=\"Common Settings\">\r\n      <ng-template #extraTemplate>\r\n        <a (click)=\"onUpdate(commonSettingData)\">Update</a>\r\n      </ng-template>\r\n      <div nz-row>\r\n        <div nz-col nzSpan=\"24\">\r\n          <div nz-row>\r\n            <div nz-col nzSpan=\"6\">\r\n              <nz-form-item>\r\n                <nz-form-label nzSpan=\"14\">Self Purchase</nz-form-label>\r\n                <nz-form-control nzSpan=\"8\">\r\n                 {{commonSettingData.Self_Purchase_ID}}\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n              <div nz-col nzSpan=\"6\">\r\n              <nz-form-item>\r\n                <nz-form-label nzSpan=\"14\">Direct Refer</nz-form-label>\r\n                <nz-form-control nzSpan=\"8\">\r\n                 {{commonSettingData.Direct_Refer_ID}}\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n              <div nz-col nzSpan=\"6\">\r\n              <nz-form-item>\r\n                <nz-form-label nzSpan=\"14\">Nine Levels</nz-form-label>\r\n                <nz-form-control nzSpan=\"8\">\r\n                 {{commonSettingData.Nine_Levels}}\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n              <div nz-col nzSpan=\"6\">\r\n              <nz-form-item>\r\n                <nz-form-label nzSpan=\"14\">Trimming</nz-form-label>\r\n                <nz-form-control nzSpan=\"8\">\r\n                 {{commonSettingData.Trimming_For_IDs}}\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n          </div>\r\n          <div nz-row>\r\n            <div nz-col nzSpan=\"6\">\r\n              <nz-form-item>\r\n                <nz-form-label nzSpan=\"14\">Box 1 Max</nz-form-label>\r\n                <nz-form-control nzSpan=\"8\">\r\n                 {{commonSettingData.Box_One_Max_Amount}}\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n            <div nz-col nzSpan=\"6\">\r\n              <nz-form-item>\r\n                <nz-form-label nzSpan=\"14\">Box 2 max</nz-form-label>\r\n                <nz-form-control nzSpan=\"8\">\r\n                 {{commonSettingData.Box_Two_Max_Amount}}\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n            <div nz-col nzSpan=\"6\">\r\n              <nz-form-item>\r\n                <nz-form-label nzSpan=\"14\">Box 3 Max</nz-form-label>\r\n                <nz-form-control nzSpan=\"8\">\r\n                 {{commonSettingData.Box_Three_Max_Amount}}\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n        <!-- <nz-divider ></nz-divider> -->\r\n        <div nz-col nzSpan=\"24\">\r\n          <div nz-row>\r\n            <div nz-col nzSpan=\"6\">\r\n              <nz-form-item>\r\n                <nz-form-label nzSpan=\"14\">Shop keeper</nz-form-label>\r\n                <nz-form-control nzSpan=\"8\">\r\n                 {{commonSettingData.Shop_Keepers_Trimming}}\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n              <div nz-col nzSpan=\"6\">\r\n              <nz-form-item>\r\n                <nz-form-label nzSpan=\"14\">Company</nz-form-label>\r\n                <nz-form-control nzSpan=\"8\">\r\n                 {{commonSettingData.Company}}\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n              <div nz-col nzSpan=\"6\">\r\n              <nz-form-item>\r\n                <nz-form-label nzSpan=\"14\">Service Store</nz-form-label>\r\n                <nz-form-control nzSpan=\"8\">\r\n                 {{commonSettingData.GST_Service_Store_etc_Amount}}\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n          <div nz-row>\r\n            <div nz-col nzSpan=\"6\">\r\n              <nz-form-item>\r\n                <nz-form-label nzSpan=\"14\">State Price</nz-form-label>\r\n                <nz-form-control nzSpan=\"8\">\r\n                 {{commonSettingData.State_Price}}\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n              <div nz-col nzSpan=\"6\">\r\n              <nz-form-item>\r\n                <nz-form-label nzSpan=\"14\">District Price</nz-form-label>\r\n                <nz-form-control nzSpan=\"8\">\r\n                 {{commonSettingData.District_Price}}\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n              <div nz-col nzSpan=\"6\">\r\n              <nz-form-item>\r\n                <nz-form-label nzSpan=\"14\">Pincode Price</nz-form-label>\r\n                <nz-form-control nzSpan=\"8\">\r\n                 {{commonSettingData.Pincode_Price}}\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n            \r\n          </div>\r\n\r\n\r\n          \r\n          <div nz-row>\r\n            <div nz-col nzSpan=\"6\">\r\n              <nz-form-item>\r\n                <nz-form-label nzSpan=\"14\">State Share</nz-form-label>\r\n                <nz-form-control nzSpan=\"8\">\r\n                 {{commonSettingData.State_Share}}\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n              <div nz-col nzSpan=\"6\">\r\n              <nz-form-item>\r\n                <nz-form-label nzSpan=\"14\">District Share</nz-form-label>\r\n                <nz-form-control nzSpan=\"8\">\r\n                 {{commonSettingData.District_Share}}\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n              <div nz-col nzSpan=\"6\">\r\n              <nz-form-item>\r\n                <nz-form-label nzSpan=\"14\">Pincode Share</nz-form-label>\r\n                <nz-form-control nzSpan=\"8\">\r\n                 {{commonSettingData.Pincode_Share}}\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n\r\n            <div nz-col nzSpan=\"6\">\r\n              <nz-form-item>\r\n                <nz-form-label nzSpan=\"14\">User Shop Price</nz-form-label>\r\n                <nz-form-control nzSpan=\"8\">\r\n                 {{commonSettingData.User_Shop_Price}}\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n            \r\n          </div>\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </nz-card>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div nz-row style=\"margin-top: 50px;\" *ngIf=\"isvisible\">\r\n  <div nz-col nzSpan=\"24\">\r\n    <nz-card [nzTitle]=\"title\">\r\n        <ng-template #title>\r\n          <span>Update Common Setting</span>\r\n        </ng-template>\r\n        <form nz-form [formGroup]=\"addCommonSettingForm\">\r\n          <div nz-row nzGutter=\"8\">\r\n            <div nz-col nzSpan=\"8\">\r\n              <nz-form-item>\r\n                <nz-form-label>Self Purchase ID</nz-form-label>\r\n                <nz-form-control>\r\n                  <input nz-input formControlName=\"Self_Purchase_ID\" placeholder=\"please enter Self Purchase ID\" />\r\n                  <nz-form-explain *ngIf=\"addCommonSettingForm.get('Self_Purchase_ID').dirty && addCommonSettingForm.get('Self_Purchase_ID').errors\">Please\r\n                      input your Self Purchase ID!</nz-form-explain>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n            <div nz-col nzSpan=\"8\">\r\n              <nz-form-item>\r\n                <nz-form-label>Direct Refer</nz-form-label>\r\n                <nz-form-control>\r\n                  <input nz-input formControlName=\"Direct_Refer_ID\" placeholder=\"please enter Direct Refer\" />\r\n                  <nz-form-explain *ngIf=\"addCommonSettingForm.get('Direct_Refer_ID').dirty && addCommonSettingForm.get('Direct_Refer_ID').errors\">Please\r\n                      input your Direct Refer!</nz-form-explain>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n            <div nz-col nzSpan=\"8\">\r\n               \r\n              <nz-form-item>\r\n                <nz-form-label>Nine Levels</nz-form-label>\r\n                <nz-form-control>\r\n                  <input nz-input formControlName=\"Nine_Levels\" placeholder=\"please enter Nine Levels\" />\r\n                  <nz-form-explain *ngIf=\"addCommonSettingForm.get('Nine_Levels').dirty && addCommonSettingForm.get('Nine_Levels').errors\">Please\r\n                      input your Nine Levels!</nz-form-explain>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n          </div>\r\n          <div nz-row [nzGutter]=\"16\">\r\n            <div nz-col nzSpan=\"8\">\r\n              <nz-form-item>\r\n                <nz-form-label>Trimming</nz-form-label>\r\n                <nz-form-control>\r\n                  <input nz-input formControlName=\"Trimming_For_IDs\" placeholder=\"please enter Trimming\" />\r\n                  <nz-form-explain *ngIf=\"addCommonSettingForm.get('Trimming_For_IDs').dirty && addCommonSettingForm.get('Trimming_For_IDs').errors\">Please\r\n                      input your Trimming!</nz-form-explain>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n              </div>\r\n            <div nz-col nzSpan=\"8\">\r\n              <nz-form-item>\r\n                <nz-form-label>Shop Keepers Trimming</nz-form-label>\r\n                <nz-form-control>\r\n                  <input nz-input formControlName=\"Shop_Keepers_Trimming\" placeholder=\"please enter Shop Keepers Trimming\" />\r\n                  <nz-form-explain *ngIf=\"addCommonSettingForm.get('Shop_Keepers_Trimming').dirty && addCommonSettingForm.get('Shop_Keepers_Trimming').errors\">Please\r\n                      input your Shop Keepers Trimming!</nz-form-explain>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n              </div>\r\n            <div nz-col nzSpan=\"8\">\r\n              <nz-form-item>\r\n                <nz-form-label>Company</nz-form-label>\r\n                <nz-form-control>\r\n                  <input nz-input formControlName=\"Company\" placeholder=\"please enter Company\" />\r\n                  <nz-form-explain *ngIf=\"addCommonSettingForm.get('Company').dirty && addCommonSettingForm.get('Company').errors\">Please\r\n                      input your Company!</nz-form-explain>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n              </div>\r\n          </div>\r\n          <div nz-row [nzGutter]=\"16\">\r\n            <div nz-col nzSpan=\"8\">\r\n              <nz-form-item>\r\n                <nz-form-label>GST Service Store</nz-form-label>\r\n                <nz-form-control>\r\n                  <input nz-input formControlName=\"GST_Service_Store_etc_Amount\" placeholder=\"please enter GST Service Store\" />\r\n                  <nz-form-explain *ngIf=\"addCommonSettingForm.get('GST_Service_Store_etc_Amount').dirty && addCommonSettingForm.get('GST_Service_Store_etc_Amount').errors\">Please\r\n                      input your GST Service Store!</nz-form-explain>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n              </div>\r\n            <div nz-col nzSpan=\"8\">\r\n              <nz-form-item>\r\n                <nz-form-label>Total</nz-form-label>\r\n                <nz-form-control>\r\n                  <button nz-button nzType=\"link\" style=\"    color: green;\r\n                  font-size: 18px;\r\n                  font-weight: 600;\">\r\n                    {{(+addCommonSettingForm.value.Self_Purchase_ID)+(+addCommonSettingForm.value.Direct_Refer_ID)+\r\n                      (+addCommonSettingForm.value.Nine_Levels)+(+addCommonSettingForm.value.Trimming_For_IDs)+\r\n                      (+addCommonSettingForm.value.Shop_Keepers_Trimming)+(+addCommonSettingForm.value.Company)+\r\n                      (+addCommonSettingForm.value.GST_Service_Store_etc_Amount)}}\r\n                  </button>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n              </div>\r\n          </div>\r\n          \r\n          <div nz-row [nzGutter]=\"16\">\r\n            <div nz-col nzSpan=\"8\">\r\n              <nz-form-item>\r\n                <nz-form-label>Box One Max Amount</nz-form-label>\r\n                <nz-form-control>\r\n                  <input nz-input formControlName=\"Box_One_Max_Amount\" placeholder=\"please enter Box One Max Amount\" />\r\n                  <nz-form-explain *ngIf=\"addCommonSettingForm.get('Box_One_Max_Amount').dirty && addCommonSettingForm.get('Box_One_Max_Amount').errors\">Please\r\n                      input your Box One Max Amount!</nz-form-explain>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n            <div nz-col nzSpan=\"8\">\r\n              <nz-form-item>\r\n                <nz-form-label>Box Two Max Amount</nz-form-label>\r\n                <nz-form-control>\r\n                  <input nz-input formControlName=\"Box_Two_Max_Amount\" placeholder=\"please enter Box Two Max Amount\" />\r\n                  <nz-form-explain *ngIf=\"addCommonSettingForm.get('Box_Two_Max_Amount').dirty && addCommonSettingForm.get('Box_Two_Max_Amount').errors\">Please\r\n                      input your Box Two Max Amount!</nz-form-explain>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n            <div nz-col nzSpan=\"8\">\r\n              <nz-form-item>\r\n                <nz-form-label>Box Three Max Amount</nz-form-label>\r\n                <nz-form-control>\r\n                  <input nz-input formControlName=\"Box_Three_Max_Amount\" placeholder=\"please enter Box Three Max Amount\" />\r\n                  <nz-form-explain *ngIf=\"addCommonSettingForm.get('Box_Three_Max_Amount').dirty && addCommonSettingForm.get('Box_Three_Max_Amount').errors\">Please\r\n                      input your Box Three Max Amount!</nz-form-explain>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n            </div>\r\n\r\n\r\n            <div nz-row [nzGutter]=\"16\">\r\n              <div nz-col nzSpan=\"8\">\r\n                <nz-form-item>\r\n                  <nz-form-label>State Price</nz-form-label>\r\n                  <nz-form-control>\r\n                    <input nz-input formControlName=\"State_Price\" placeholder=\"please enter State Price\" />\r\n                    <!-- <nz-form-explain *ngIf=\"addCommonSettingForm.get('State_Price').dirty && addCommonSettingForm.get('State_Price').errors\">Please\r\n                        input your Box One Max Amount!</nz-form-explain> -->\r\n                  </nz-form-control>\r\n                </nz-form-item>\r\n              </div>\r\n              <div nz-col nzSpan=\"8\">\r\n                <nz-form-item>\r\n                  <nz-form-label>District Price</nz-form-label>\r\n                  <nz-form-control>\r\n                    <input nz-input formControlName=\"District_Price\" placeholder=\"please enter District Price\" />\r\n                    <!-- <nz-form-explain *ngIf=\"addCommonSettingForm.get('Box_Two_Max_Amount').dirty && addCommonSettingForm.get('Box_Two_Max_Amount').errors\">Please\r\n                        input your Box Two Max Amount!</nz-form-explain> -->\r\n                  </nz-form-control>\r\n                </nz-form-item>\r\n              </div>\r\n              <div nz-col nzSpan=\"8\">\r\n                <nz-form-item>\r\n                  <nz-form-label>Pincode Price</nz-form-label>\r\n                  <nz-form-control>\r\n                    <input nz-input formControlName=\"Pincode_Price\" placeholder=\"please enter Pincode Price\" />\r\n                    <!-- <nz-form-explain *ngIf=\"addCommonSettingForm.get('Box_Three_Max_Amount').dirty && addCommonSettingForm.get('Box_Three_Max_Amount').errors\">Please\r\n                        input your Box Three Max Amount!</nz-form-explain> -->\r\n                  </nz-form-control>\r\n                </nz-form-item>\r\n              </div>\r\n              </div>\r\n\r\n\r\n\r\n              <div nz-row [nzGutter]=\"16\">\r\n                <div nz-col nzSpan=\"8\">\r\n                  <nz-form-item>\r\n                    <nz-form-label>State Share</nz-form-label>\r\n                    <nz-form-control>\r\n                      <input nz-input formControlName=\"State_Share\" placeholder=\"please enter State Share\" />\r\n                      <!-- <nz-form-explain *ngIf=\"addCommonSettingForm.get('State_Price').dirty && addCommonSettingForm.get('State_Price').errors\">Please\r\n                          input your Box One Max Amount!</nz-form-explain> -->\r\n                    </nz-form-control>\r\n                  </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"8\">\r\n                  <nz-form-item>\r\n                    <nz-form-label>District Share</nz-form-label>\r\n                    <nz-form-control>\r\n                      <input nz-input formControlName=\"District_Share\" placeholder=\"please enter District Share\" />\r\n                      <!-- <nz-form-explain *ngIf=\"addCommonSettingForm.get('Box_Two_Max_Amount').dirty && addCommonSettingForm.get('Box_Two_Max_Amount').errors\">Please\r\n                          input your Box Two Max Amount!</nz-form-explain> -->\r\n                    </nz-form-control>\r\n                  </nz-form-item>\r\n                </div>\r\n                <div nz-col nzSpan=\"8\">\r\n                  <nz-form-item>\r\n                    <nz-form-label>Pincode Share</nz-form-label>\r\n                    <nz-form-control>\r\n                      <input nz-input formControlName=\"Pincode_Share\" placeholder=\"please enter Pincode Share\" />\r\n                      <!-- <nz-form-explain *ngIf=\"addCommonSettingForm.get('Box_Three_Max_Amount').dirty && addCommonSettingForm.get('Box_Three_Max_Amount').errors\">Please\r\n                          input your Box Three Max Amount!</nz-form-explain> -->\r\n                    </nz-form-control>\r\n                  </nz-form-item>\r\n                </div>\r\n                </div>\r\n\r\n                <div nz-row [nzGutter]=\"16\">\r\n                  <div nz-col nzSpan=\"8\">\r\n                    <nz-form-item>\r\n                      <nz-form-label>User Shop Price</nz-form-label>\r\n                      <nz-form-control>\r\n                        <input nz-input formControlName=\"User_Shop_Price\" placeholder=\"please enter User Shop Price\" />\r\n                        <!-- <nz-form-explain *ngIf=\"addCommonSettingForm.get('State_Price').dirty && addCommonSettingForm.get('State_Price').errors\">Please\r\n                            input your Box One Max Amount!</nz-form-explain> -->\r\n                      </nz-form-control>\r\n                    </nz-form-item>\r\n                  </div>\r\n                  </div>\r\n\r\n\r\n\r\n            <div class=\"footer\">\r\n                <button nz-button nzType=\"primary\" class=\"primary_button1 ant-btn ant-btn-primary\" [nzLoading]=\"isAddButton\"\r\n                (click)=\"onAddCategory()\" style=\"margin-right: 10px;\"><span>Update</span></button>\r\n                <button nz-button nzType=\"danger\" class=\"primary_button1 ant-btn ant-btn-primary\"\r\n                (click)=\"onCancel()\"><span>Cancel</span></button>\r\n              </div>\r\n        </form>\r\n      </nz-card>\r\n   \r\n  </div>\r\n</div>\r\n\r\n<!-- <nz-drawer\r\n      [nzBodyStyle]=\"{ height: 'calc(100% - 55px)', overflow: 'auto', 'padding-bottom': '53px' }\"\r\n      [nzMaskClosable]=\"false\"\r\n      [nzWidth]=\"400\"\r\n      [nzVisible]=\"isvisible\"\r\n      [nzTitle]=\"title\"\r\n      (nzOnClose)=\"onCancel()\"\r\n    >\r\n    \r\n   \r\n    </nz-drawer> -->"

/***/ }),

/***/ "./src/app/common-app-settings/common-app-settings.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/common-app-settings/common-app-settings.component.ts ***!
  \**********************************************************************/
/*! exports provided: CommonAppSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonAppSettingsComponent", function() { return CommonAppSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var CommonAppSettingsComponent = /** @class */ (function () {
    function CommonAppSettingsComponent(fb, _appService, nzMessageService) {
        this.fb = fb;
        this._appService = _appService;
        this.nzMessageService = nzMessageService;
        this.commonSettingData = {};
    }
    CommonAppSettingsComponent.prototype.ngOnInit = function () {
        this.getCommonSetting();
        this.addCommonSettingForm = this.fb.group({
            Self_Purchase_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Direct_Refer_ID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Nine_Levels: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Trimming_For_IDs: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Shop_Keepers_Trimming: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Company: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            GST_Service_Store_etc_Amount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Box_One_Max_Amount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Box_Two_Max_Amount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Box_Three_Max_Amount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            District_Price: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            State_Price: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Pincode_Price: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            District_Share: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            State_Share: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Pincode_Share: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            User_Shop_Price: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    };
    CommonAppSettingsComponent.prototype.getCommonSetting = function () {
        var _this = this;
        this.isloading = true;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var userdata = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
        };
        try {
            this._appService.postMethod('List_Common_App_Setting', userdata)
                .subscribe(function (resp) {
                _this.isloading = false;
                if (resp.success) {
                    _this.commonSettingData = resp.extras.Data;
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
    CommonAppSettingsComponent.prototype.onUpdate = function (data) {
        this.selectedRecord = data;
        this.isvisible = true;
        this.addCommonSettingForm.patchValue(data);
    };
    CommonAppSettingsComponent.prototype.onCancel = function () {
        this.isvisible = false;
        this.addCommonSettingForm.reset();
    };
    CommonAppSettingsComponent.prototype.onAddCategory = function () {
        var _this = this;
        this.isAddButton = true;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {};
        var url = '';
        body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            Common_App_SettingsID: this.selectedRecord.Common_App_SettingsID,
            Self_Purchase_ID: this.addCommonSettingForm.value.Self_Purchase_ID,
            Direct_Refer_ID: this.addCommonSettingForm.value.Direct_Refer_ID,
            Nine_Levels: this.addCommonSettingForm.value.Nine_Levels,
            Trimming_For_IDs: this.addCommonSettingForm.value.Trimming_For_IDs,
            Shop_Keepers_Trimming: this.addCommonSettingForm.value.Shop_Keepers_Trimming,
            Company: this.addCommonSettingForm.value.Company,
            GST_Service_Store_etc_Amount: this.addCommonSettingForm.value.GST_Service_Store_etc_Amount,
            Box_One_Max_Amount: this.addCommonSettingForm.value.Box_One_Max_Amount,
            Box_Two_Max_Amount: this.addCommonSettingForm.value.Box_Two_Max_Amount,
            Box_Three_Max_Amount: this.addCommonSettingForm.value.Box_Three_Max_Amount,
            State_Price: this.addCommonSettingForm.value.State_Price,
            District_Price: this.addCommonSettingForm.value.District_Price,
            Pincode_Price: this.addCommonSettingForm.value.Pincode_Price,
            State_Share: this.addCommonSettingForm.value.State_Share,
            District_Share: this.addCommonSettingForm.value.District_Share,
            Pincode_Share: this.addCommonSettingForm.value.Pincode_Share,
            User_Shop_Price: this.addCommonSettingForm.value.User_Shop_Price,
        };
        url = 'Update_Common_App_Setting';
        try {
            this._appService.postMethod(url, body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.isAddButton = false;
                    _this.onCancel();
                    _this.getCommonSetting();
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
    CommonAppSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-common-app-settings',
            template: __webpack_require__(/*! ./common-app-settings.component.html */ "./src/app/common-app-settings/common-app-settings.component.html"),
            styles: [__webpack_require__(/*! ./common-app-settings.component.css */ "./src/app/common-app-settings/common-app-settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], CommonAppSettingsComponent);
    return CommonAppSettingsComponent;
}());



/***/ }),

/***/ "./src/app/common-app-settings/common-app-settings.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/common-app-settings/common-app-settings.module.ts ***!
  \*******************************************************************/
/*! exports provided: CommonAppSettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonAppSettingsModule", function() { return CommonAppSettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _common_app_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common-app-settings.component */ "./src/app/common-app-settings/common-app-settings.component.ts");
/* harmony import */ var _common_app_settings_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common-app-settings-routing.module */ "./src/app/common-app-settings/common-app-settings-routing.module.ts");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var CommonAppSettingsModule = /** @class */ (function () {
    function CommonAppSettingsModule() {
    }
    CommonAppSettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _common_app_settings_routing_module__WEBPACK_IMPORTED_MODULE_4__["CommonAppSettingsRoutingModule"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            declarations: [_common_app_settings_component__WEBPACK_IMPORTED_MODULE_3__["CommonAppSettingsComponent"]]
        })
    ], CommonAppSettingsModule);
    return CommonAppSettingsModule;
}());



/***/ })

}]);
//# sourceMappingURL=common-app-settings-common-app-settings-module.js.map