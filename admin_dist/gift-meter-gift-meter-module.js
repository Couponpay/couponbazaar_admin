(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gift-meter-gift-meter-module"],{

/***/ "./src/app/gift-meter/gift-meter-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/gift-meter/gift-meter-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: GiftMeterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftMeterRoutingModule", function() { return GiftMeterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _gift_meter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gift-meter.component */ "./src/app/gift-meter/gift-meter.component.ts");





var routes = [
    { path: '', component: _gift_meter_component__WEBPACK_IMPORTED_MODULE_4__["GiftMeterComponent"] }
];
var GiftMeterRoutingModule = /** @class */ (function () {
    function GiftMeterRoutingModule() {
    }
    GiftMeterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GiftMeterRoutingModule);
    return GiftMeterRoutingModule;
}());



/***/ }),

/***/ "./src/app/gift-meter/gift-meter.component.css":
/*!*****************************************************!*\
  !*** ./src/app/gift-meter/gift-meter.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".primary_button{\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    background: linear-gradient(90deg, #1976d2 20%, #00dbfe 100%);\r\n    border: coral;\r\n    color: #fff;\r\n    font-weight: 700;\r\n    font-size: 17px;\r\n  }\r\n  .primary_button1{\r\n    /* position: absolute;\r\n    top: 8px;\r\n    right: 219px; */\r\n    float: right;\r\n    background: linear-gradient(90deg, #1976d2 20%, #00dbfe 100%);\r\n    border: coral;\r\n    color: #fff;\r\n    font-weight: 700;\r\n    font-size: 17px;\r\n    margin-right: 20px;\r\n  }\r\n  .primary_button2{\r\n    /* position: absolute;\r\n    top: 8px;\r\n    right: 100px; */\r\n    float: right;\r\n    background: linear-gradient(90deg, #1976d2 20%, #00dbfe 100%);\r\n    border: coral;\r\n    color: #fff;\r\n    font-weight: 700;\r\n    font-size: 17px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2lmdC1tZXRlci9naWZ0LW1ldGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUiw2REFBNkQ7SUFDN0QsYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjtFQUNBO0lBQ0U7O21CQUVlO0lBQ2YsWUFBWTtJQUNaLDZEQUE2RDtJQUM3RCxhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRTs7bUJBRWU7SUFDZixZQUFZO0lBQ1osNkRBQTZEO0lBQzdELGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9naWZ0LW1ldGVyL2dpZnQtbWV0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmltYXJ5X2J1dHRvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTk3NmQyIDIwJSwgIzAwZGJmZSAxMDAlKTtcclxuICAgIGJvcmRlcjogY29yYWw7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgfVxyXG4gIC5wcmltYXJ5X2J1dHRvbjF7XHJcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDhweDtcclxuICAgIHJpZ2h0OiAyMTlweDsgKi9cclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzE5NzZkMiAyMCUsICMwMGRiZmUgMTAwJSk7XHJcbiAgICBib3JkZXI6IGNvcmFsO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICAucHJpbWFyeV9idXR0b24ye1xyXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgICByaWdodDogMTAwcHg7ICovXHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxOTc2ZDIgMjAlLCAjMDBkYmZlIDEwMCUpO1xyXG4gICAgYm9yZGVyOiBjb3JhbDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/gift-meter/gift-meter.component.html":
/*!******************************************************!*\
  !*** ./src/app/gift-meter/gift-meter.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row style=\"margin-top: 25px;\" *ngIf=\"!isAdding\">\r\n  <div nz-col nzSpan=\"24\">\r\n    <button nz-button nzType=\"primary\" (click)=\"open()\" class=\"primary_button\">Add</button>\r\n    <!-- <nz-drawer\r\n      [nzBodyStyle]=\"{ height: 'calc(100% - 55px)', overflow: 'auto', 'padding-bottom': '53px' }\"\r\n      [nzMaskClosable]=\"false\"\r\n      [nzWidth]=\"400\"\r\n      [nzVisible]=\"visible\"\r\n      [nzTitle]=\"title\"\r\n      (nzOnClose)=\"close()\"\r\n    >\r\n    <ng-template #title>\r\n      {{isEditing?'Update Target Referral':'Add Target Referral'}}\r\n    </ng-template>\r\n    <form nz-form [formGroup]=\"addForm\">\r\n        <div nz-row nzGutter=\"8\">\r\n          <div nz-col nzSpan=\"24\">\r\n            <nz-form-item>\r\n              <nz-form-label>S.No</nz-form-label>\r\n              <nz-form-control [nzValidateStatus]=\"ValidatingStatus\" nzHasFeedback>\r\n                <input nz-input formControlName=\"SNo\" placeholder=\"please enter Banner S.No\" />\r\n                  <nz-form-explain *ngIf=\"ValidatingStatus == 'error'\">S.No Already Exists\r\n                  </nz-form-explain>\r\n              </nz-form-control>\r\n            </nz-form-item>\r\n            <nz-form-item>\r\n              <nz-form-label>Target Referal</nz-form-label>\r\n              <nz-form-control>\r\n                <input nz-input formControlName=\"Target_Referal\" type=\"number\" placeholder=\"please enter Target Referal\" />\r\n                <nz-form-explain *ngIf=\"addForm.get('Target_Referal').dirty && addForm.get('Target_Referal').errors\">Please\r\n                    input your Target Referal!</nz-form-explain>\r\n              </nz-form-control>\r\n            </nz-form-item>\r\n            <nz-form-item>\r\n              <nz-form-label>Wallet Limit</nz-form-label>\r\n              <nz-form-control>\r\n                <input nz-input formControlName=\"Wallet_Limit\" type=\"number\" placeholder=\"please enter Wallet Limit\" />\r\n                <nz-form-explain *ngIf=\"addForm.get('Wallet_Limit').dirty && addForm.get('Wallet_Limit').errors\">Please\r\n                    input your Wallet Limit!</nz-form-explain>\r\n              </nz-form-control>\r\n            </nz-form-item>\r\n          </div>\r\n          </div>\r\n          <div class=\"footer\">\r\n              <button nz-button nzType=\"primary\" class=\"primary_button1 ant-btn ant-btn-primary\" [nzLoading]=\"isAddButton\"\r\n              (click)=\"onSubmit()\"><span>{{isEditing?'Update':'Add'}}</span></button>\r\n            </div>\r\n      </form>\r\n    </nz-drawer> -->\r\n  </div>\r\n  <div nz-row style=\"margin-top: 50px;\">\r\n    <div nz-col nzSpan=\"24\">\r\n      <nz-tabset style=\"margin-bottom: 16px;\">\r\n        <nz-tab (nzClick)=\"onChangeTab(1)\" nzTitle=\"Active List\">\r\n\r\n        </nz-tab>\r\n        <nz-tab (nzClick)=\"onChangeTab(2)\" nzTitle=\"Inactive List\">\r\n\r\n        </nz-tab>\r\n\r\n      </nz-tabset>\r\n      <nz-table #basicTable nzShowPagination=\"false\" [nzLoading]=\"isloading\" nzLoadingDelay=\"1\" [nzData]=\"tableData\"\r\n        style=\"background: #FFF;margin:30px 0px;\">\r\n        <thead>\r\n          <tr>\r\n            <th>S.No</th>\r\n            <th>Title</th>\r\n            <th>Value</th>\r\n            <th></th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <ng-container *ngFor=\"let data of tableData;let i=index\">\r\n            <tr>\r\n              <td>{{data.SNo}}</td>\r\n              <td>{{data.Title_Name}}</td>\r\n              <td>{{data.Value}}</td>\r\n              <td>\r\n                <span [ngSwitch]=\"data.Status\">\r\n                  <span *ngSwitchCase=true>\r\n                    <a nz-popconfirm (nzOnConfirm)=\"onAction(data)\"\r\n                      nzTitle=\"Are you sure you want to Inactive this?\">Make Inactive</a>\r\n                  </span>\r\n                  <span *ngSwitchCase=false>\r\n                    <a style=\"color: red;\" nz-popconfirm (nzOnConfirm)=\"onAction(data)\"\r\n                      nzTitle=\"Are you sure you want to Active this?\">Make Active</a>\r\n                  </span>\r\n                  <span *ngSwitchDefault>\r\n                    NA\r\n                  </span>\r\n                </span>\r\n              </td>\r\n              <td>\r\n                <i nz-icon type=\"edit\" theme=\"outline\" (click)=\"onEdit(data)\"></i>\r\n              </td>\r\n            </tr>\r\n          </ng-container>\r\n        </tbody>\r\n      </nz-table>\r\n      <nz-pagination (nzPageIndexChange)=\"onNextPage($event)\" [nzPageSize]=\"limit\" [nzPageIndex]=\"currentPage\"\r\n        [nzTotal]=\"totalItem\"></nz-pagination>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div nz-row style=\"margin-top: 25px;\" *ngIf=\"isAdding\">\r\n  <div nz-col nzSpan=\"12\">\r\n    <nz-card [nzTitle]='cardTitle'>\r\n      <ng-template #cardTitle>\r\n        <span>{{isEditing?'Update':'Create'}} Gift Meter</span>\r\n      </ng-template>\r\n      <form nz-form [formGroup]=\"addForm\">\r\n        <div nz-row nzGutter=\"8\">\r\n          <div nz-col nzSpan=\"24\">\r\n            <nz-form-item>\r\n              <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\">S.No</nz-form-label>\r\n              <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" [nzValidateStatus]=\"ValidatingStatus\" nzHasFeedback>\r\n                <input nz-input formControlName=\"SNo\" placeholder=\"please enter S.No\" />\r\n                <nz-form-explain *ngIf=\"ValidatingStatus == 'error'\">S.No Already Exists\r\n                </nz-form-explain>\r\n              </nz-form-control>\r\n            </nz-form-item>\r\n            <nz-form-item>\r\n              <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\">Title Name</nz-form-label>\r\n              <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n                <input nz-input formControlName=\"Title_Name\" type=\"text\"\r\n                  placeholder=\"please enter Title Name\" />\r\n                <nz-form-explain *ngIf=\"addForm.get('Title_Name').dirty && addForm.get('Title_Name').errors\">\r\n                  Please\r\n                  input your Title Name!</nz-form-explain>\r\n              </nz-form-control>\r\n            </nz-form-item>\r\n            <nz-form-item>\r\n              <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\">Value</nz-form-label>\r\n              <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n                <input nz-input formControlName=\"Value\" type=\"number\" placeholder=\"please enter Value\" />\r\n                <nz-form-explain *ngIf=\"addForm.get('Value').dirty && addForm.get('Value').errors\">Please\r\n                  input your Value!</nz-form-explain>\r\n              </nz-form-control>\r\n            </nz-form-item>\r\n            <nz-form-item>\r\n              <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\">Upload Image</nz-form-label>\r\n              <nz-form-control [nzSpan]=\"12\">\r\n                <button nz-button nzType=\"link\" (click)=\"onUploadProductImage()\">Click To Upload</button>\r\n\r\n              </nz-form-control>\r\n\r\n            </nz-form-item>\r\n            <nz-form-item *ngIf=\"ImageData.length>0\">\r\n              <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\">Image Preview</nz-form-label>\r\n              <nz-form-control [nzSpan]=\"12\"><a target=\"_blank\" [attr.href]=\"ImageData[0].ImageOriginal\">Click To view\r\n                  Image</a></nz-form-control>\r\n            </nz-form-item>\r\n            <nz-form-item nz-row class=\"register-area\">\r\n              <nz-form-control [nzSpan]=\"14\" [nzOffset]=\"2\">\r\n                <button nz-button nzType=\"primary\" class=\"primary_button2 ant-btn ant-btn-primary\"\r\n                  (click)=\"onSubmit()\"><span>{{isEditing?'Update':'Add'}}</span></button>\r\n                <button nz-button nzType=\"primary\" class=\"primary_button1 ant-btn ant-btn-primary\"\r\n                  (click)=\"close()\"><span>close</span></button>\r\n\r\n              </nz-form-control>\r\n            </nz-form-item>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </nz-card>\r\n  </div>\r\n</div>\r\n\r\n<nz-drawer [nzBodyStyle]=\"{ height: 'calc(100% - 55px)', overflow: 'auto', 'padding-bottom': '53px' }\"\r\n  [nzMaskClosable]=\"false\" [nzWidth]=\"500\" [nzVisible]=\"isImageUploading\" [nzTitle]=\"'Upload Image'\"\r\n  (nzOnClose)=\"onCloseImageDrawer()\">\r\n  <div nz-col nzSpan=\"12\" [nzOffset]=\"2\">\r\n\r\n      <div>\r\n        <input type=\"file\" accept=\"image/gif, image/jpeg, image/png\" #myInput (change)=\"fileChangeEvent($event)\" />\r\n        <image-cropper [imageChangedEvent]=\"imageChangedEvent\" [aspectRatio]=\"1/1\"\r\n           [cropperMinWidth]=\"'cropperMinWidth'\"\r\n          [cropperMinHeight]=\"cropperMinHeight\" [onlyScaleDown]=\"true\" [roundCropper]=\"false\" format=\"png\"\r\n          outputType=\"base64\" (imageCropped)=\"imageCropped($event)\" (imageLoaded)=\"imageLoaded()\"\r\n          (cropperReady)=\"cropperReady()\" (loadImageFailed)=\"loadImageFailed()\"\r\n          [style.display]=\"showCropper ? null : 'none'\" [alignImage]=\"'left'\">\r\n        </image-cropper>\r\n      </div>\r\n    <!-- <nz-card > -->\r\n      <div nz-row [nzGutter]=\"16\" *ngIf=\"croppedImage.length>0\">\r\n        <div nz-col nzSpan=\"12\">\r\n          <img [src]=\"croppedImage\" style=\"width: 100%;\" />\r\n        </div>\r\n        <div nz-col nzSpan=\"12\">\r\n          <div nz-row style=\"margin-top: 10px;\" *ngIf=\"croppedImage.length>0\">\r\n            <button type=\"button\" (click)=\"onCloseImageDrawer()\" class=\"ant-btn\"\r\n              style=\"margin-right: 10px;\"><span>Cancel</span></button>\r\n            <button type=\"button\" nz-button nzType=\"primary\" [nzLoading]=\"isUploadBtnLoading\"\r\n              class=\"ant-btn ant-btn-primary\" (click)=\"onSucessCroping()\"><span>Upload to Server</span></button>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    <!-- </nz-card> -->\r\n\r\n\r\n\r\n  </div>\r\n</nz-drawer>"

/***/ }),

/***/ "./src/app/gift-meter/gift-meter.component.ts":
/*!****************************************************!*\
  !*** ./src/app/gift-meter/gift-meter.component.ts ***!
  \****************************************************/
/*! exports provided: GiftMeterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftMeterComponent", function() { return GiftMeterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var GiftMeterComponent = /** @class */ (function () {
    function GiftMeterComponent(fb, _appService, nzMessageService) {
        this.fb = fb;
        this._appService = _appService;
        this.nzMessageService = nzMessageService;
        this.skip = 0;
        this.limit = this._appService.limit;
        this.currentPage = 1;
        this.tableData = [];
        this.cropperMinWidth = 1680;
        this.cropperMinHeight = 280;
        this.resizeToWidth = 1680;
        this.resizeToHeight = 280;
        this.showCropper = false;
        this.croppedImage = '';
        this.imageChangedEvent = '';
        this.ImageData = [];
    }
    GiftMeterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onChangeTab(1);
        this.addForm = this.fb.group({
            SNo: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Title_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Value: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.addForm.get('SNo').valueChanges.subscribe(function (data) {
            if (_this.addForm.get('SNo').valid) {
                _this.checkSerialNumber(data);
            }
            else {
                _this.ValidatingStatus = '';
            }
        });
    };
    GiftMeterComponent.prototype.onChangeTab = function (event) {
        this.selectedtab = event;
        this.skip = 0;
        this.getGiftMeter();
    };
    GiftMeterComponent.prototype.getGiftMeter = function () {
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
            this._appService.postMethod('List_Gift_Meter', userdata)
                .subscribe(function (resp) {
                _this.isloading = false;
                if (resp.success) {
                    if (_this.skip == 0) {
                        _this.currentPage = 1;
                    }
                    _this.totalItem = resp.extras.Count;
                    _this.tableData = resp.extras.Data;
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
    GiftMeterComponent.prototype.onNextPage = function (event) {
        this.currentPage = this.currentPage;
        this.skip = (event - 1) * this.limit;
        this.getGiftMeter();
    };
    GiftMeterComponent.prototype.onAction = function (data) {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            Gift_MeterID: data.Gift_MeterID
        };
        try {
            this._appService.postMethod('Activate_Inactivate_Gift_Meter', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    var msg = void 0;
                    if (data.Status) {
                        msg = 'Inactivated Successfully';
                    }
                    else {
                        msg = 'Activated Successfully';
                    }
                    _this.getGiftMeter();
                    _this.nzMessageService.success(msg);
                }
                else {
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                }
            }, function (error) {
            });
        }
        catch (e) { }
    };
    GiftMeterComponent.prototype.checkSerialNumber = function (serialNumber) {
        var _this = this;
        if (serialNumber.length > 0) {
            this.ValidatingStatus = "validating";
            var adminData = JSON.parse(localStorage.getItem("adminData"));
            var body = {
                AdminID: adminData.AdminID,
                SessionID: adminData.SessionID,
                SNo: serialNumber,
                Gift_MeterID: this.isEditing ? this.selectedData.Gift_MeterID : ''
            };
            try {
                this._appService.postMethod('Check_For_Gift_Meter_SNo_Available', body)
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
    GiftMeterComponent.prototype.open = function () {
        this.isAdding = true;
        this.isEditing = false;
    };
    GiftMeterComponent.prototype.close = function () {
        this.isAdding = false;
        this.isEditing = false;
        this.addForm.reset();
        this.ImageData = [];
    };
    GiftMeterComponent.prototype.onEdit = function (data) {
        this.isAdding = true;
        this.isEditing = true;
        this.selectedData = data;
        this.addForm.patchValue(data);
        this.ImageData = [];
        this.ImageData.push(this.selectedData.Image_Data);
    };
    GiftMeterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isAddButton = true;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {};
        var url = '';
        if (this.isEditing) {
            body = {
                AdminID: adminData.AdminID,
                SessionID: adminData.SessionID,
                Gift_MeterID: this.selectedData.Gift_MeterID,
                SNo: this.addForm.value.SNo,
                Title_Name: this.addForm.value.Title_Name,
                Value: this.addForm.value.Value,
                Image_Available: this.ImageData.length > 0 ? true : false,
                ImageID: this.ImageData.length > 0 ? this.ImageData[0].ImageID : ''
            };
            url = 'Update_Gift_Meter';
        }
        else {
            body = {
                AdminID: adminData.AdminID,
                SessionID: adminData.SessionID,
                SNo: this.addForm.value.SNo,
                Title_Name: this.addForm.value.Title_Name,
                Value: this.addForm.value.Value,
                Image_Available: this.ImageData.length > 0 ? true : false,
                ImageID: this.ImageData.length > 0 ? this.ImageData[0].ImageID : ''
            };
            url = 'Add_Gift_Meter';
        }
        try {
            this._appService.postMethod(url, body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.isAddButton = false;
                    _this.close();
                    _this.getGiftMeter();
                    _this.nzMessageService.success(resp.extras.status);
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
    GiftMeterComponent.prototype.onUploadProductImage = function () {
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
    GiftMeterComponent.prototype.onSucessCroping = function () {
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
    GiftMeterComponent.prototype.dataURItoBlob = function (dataURI) {
        var byteString = window.atob(dataURI);
        var arrayBuffer = new ArrayBuffer(byteString.length);
        var int8Array = new Uint8Array(arrayBuffer);
        for (var i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        var blob = new Blob([int8Array], { type: 'image/jpeg' });
        return blob;
    };
    GiftMeterComponent.prototype.fileChangeEvent = function (event) {
        this.imageChangedEvent = event;
    };
    GiftMeterComponent.prototype.onCloseImageDrawer = function () {
        this.imageChangedEvent = null;
        this.myInputVariable.nativeElement.value = "";
        this.isImageUploading = false;
        this.isUploadBtnLoading = false;
        this.croppedImage = '';
    };
    GiftMeterComponent.prototype.imageCropped = function (event) {
        console.log(event);
        this.croppedImage = event.base64;
    };
    GiftMeterComponent.prototype.cropperReady = function () {
        console.log('Cropper ready');
    };
    GiftMeterComponent.prototype.loadImageFailed = function () {
        console.log('Load failed');
    };
    GiftMeterComponent.prototype.imageLoaded = function () {
        this.showCropper = true;
        console.log('Image loaded');
    };
    GiftMeterComponent.prototype.send = function (imageFile) {
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
    ], GiftMeterComponent.prototype, "myInputVariable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__["ImageCropperComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__["ImageCropperComponent"])
    ], GiftMeterComponent.prototype, "imageCropper", void 0);
    GiftMeterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gift-meter',
            template: __webpack_require__(/*! ./gift-meter.component.html */ "./src/app/gift-meter/gift-meter.component.html"),
            styles: [__webpack_require__(/*! ./gift-meter.component.css */ "./src/app/gift-meter/gift-meter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], GiftMeterComponent);
    return GiftMeterComponent;
}());



/***/ }),

/***/ "./src/app/gift-meter/gift-meter.module.ts":
/*!*************************************************!*\
  !*** ./src/app/gift-meter/gift-meter.module.ts ***!
  \*************************************************/
/*! exports provided: GiftMeterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftMeterModule", function() { return GiftMeterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _gift_meter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gift-meter.component */ "./src/app/gift-meter/gift-meter.component.ts");
/* harmony import */ var _gift_meter_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gift-meter-routing.module */ "./src/app/gift-meter/gift-meter-routing.module.ts");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");








var GiftMeterModule = /** @class */ (function () {
    function GiftMeterModule() {
    }
    GiftMeterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _gift_meter_routing_module__WEBPACK_IMPORTED_MODULE_4__["GiftMeterRoutingModule"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__["ImageCropperModule"]
            ],
            declarations: [_gift_meter_component__WEBPACK_IMPORTED_MODULE_3__["GiftMeterComponent"]]
        })
    ], GiftMeterModule);
    return GiftMeterModule;
}());



/***/ })

}]);
//# sourceMappingURL=gift-meter-gift-meter-module.js.map