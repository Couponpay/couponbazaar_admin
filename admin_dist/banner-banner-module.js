(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["banner-banner-module"],{

/***/ "./src/app/banner/Banner.routing.ts":
/*!******************************************!*\
  !*** ./src/app/banner/Banner.routing.ts ***!
  \******************************************/
/*! exports provided: BannerRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerRoutes", function() { return BannerRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner.component */ "./src/app/banner/banner.component.ts");


var routes = [
    { path: '', component: _banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"] },
];
var BannerRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/banner/banner.component.css":
/*!*********************************************!*\
  !*** ./src/app/banner/banner.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n    position: absolute;\n    bottom: 0px;\n    width: 100%;\n    padding: 25px 16px;\n    text-align: right;\n    left: 0px;\n    /* background: #fff; */\n    top: 120px;\n  }\n  .primary_button{\n    position: absolute;\n    top: 0;\n    right: 0;\n    background: linear-gradient(90deg, #1976d2 20%, #00dbfe 100%);\n    border: coral;\n    color: #fff;\n    font-weight: 700;\n    font-size: 17px;\n  }\n  .primary_button1{\n    /* position: absolute;\n    top: 8px;\n    right: 219px; */\n    float: right;\n    background: linear-gradient(90deg, #1976d2 20%, #00dbfe 100%);\n    border: coral;\n    color: #fff;\n    font-weight: 700;\n    font-size: 17px;\n    margin-right: 20px;\n  }\n  .primary_button2{\n    /* position: absolute;\n    top: 8px;\n    right: 100px; */\n    float: right;\n    background: linear-gradient(90deg, #1976d2 20%, #00dbfe 100%);\n    border: coral;\n    color: #fff;\n    font-weight: 700;\n    font-size: 17px;\n  }\n  .formBorder{\n      border: 1px solid #ccc;\n  }\n  nz-form-label{\n      text-align: left;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLFVBQVU7RUFDWjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsNkRBQTZEO0lBQzdELGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7RUFDQTtJQUNFOzttQkFFZTtJQUNmLFlBQVk7SUFDWiw2REFBNkQ7SUFDN0QsYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0U7O21CQUVlO0lBQ2YsWUFBWTtJQUNaLDZEQUE2RDtJQUM3RCxhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCO0VBQ0E7TUFDSSxzQkFBc0I7RUFDMUI7RUFDQTtNQUNJLGdCQUFnQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyNXB4IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbGVmdDogMHB4O1xuICAgIC8qIGJhY2tncm91bmQ6ICNmZmY7ICovXG4gICAgdG9wOiAxMjBweDtcbiAgfVxuICAucHJpbWFyeV9idXR0b257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxOTc2ZDIgMjAlLCAjMDBkYmZlIDEwMCUpO1xuICAgIGJvcmRlcjogY29yYWw7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gIH1cbiAgLnByaW1hcnlfYnV0dG9uMXtcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA4cHg7XG4gICAgcmlnaHQ6IDIxOXB4OyAqL1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxOTc2ZDIgMjAlLCAjMDBkYmZlIDEwMCUpO1xuICAgIGJvcmRlcjogY29yYWw7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG4gIC5wcmltYXJ5X2J1dHRvbjJ7XG4gICAgLyogcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOHB4O1xuICAgIHJpZ2h0OiAxMDBweDsgKi9cbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTk3NmQyIDIwJSwgIzAwZGJmZSAxMDAlKTtcbiAgICBib3JkZXI6IGNvcmFsO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICB9XG4gIC5mb3JtQm9yZGVye1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgfVxuICBuei1mb3JtLWxhYmVse1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/banner/banner.component.html":
/*!**********************************************!*\
  !*** ./src/app/banner/banner.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row [nzGutter]=\"16\" style=\"margin-top: 25px;\">\n\n  <button nz-button nzType=\"primary\" (click)=\"open()\" class=\"primary_button\">Add Banner data</button>\n\n\n</div>\n<div nz-row [nzGutter]=\"16\" style=\"margin-top: 55px;\" *ngIf=\"visible==true\">\n  <div nz-col nzSpan=\"10\">\n\n\n    <nz-card [nzTitle]='cardTitle'>\n      <ng-template #cardTitle>\n        <span>{{onEditOpen?'Update Banner':'Create Banner'}}</span>\n      </ng-template>\n\n      <form nz-form [formGroup]=\"createBanner\">\n        <nz-form-item>\n          <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\">S.No</nz-form-label>\n          <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n            <input nz-input formControlName=\"SNo\" placeholder=\"please enter Banner S.No\" />\n            <nz-form-explain *ngIf=\"createBanner.get('SNo').dirty && createBanner.get('SNo').errors\">Please\n              input your SNo!</nz-form-explain>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\">Banner Name</nz-form-label>\n          <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n            <input nz-input formControlName=\"Banner_Name\" placeholder=\"please enter Banner Name\" />\n            <nz-form-explain *ngIf=\"createBanner.get('Banner_Name').dirty && createBanner.get('Banner_Name').errors\">\n              Please\n              input your Language!</nz-form-explain>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\">Upload Web Banner Image <br> (1680 X 280)</nz-form-label>\n          <nz-form-control [nzSpan]=\"12\">\n            <button nz-button nzType=\"link\" (click)=\"onUploadProductImage(1)\">Click To Upload</button>\n\n          </nz-form-control>  \n\n        </nz-form-item>\n        <nz-form-item *ngIf=\"webBannerImageData.length>0\">\n          <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\">Preview Web Image</nz-form-label>\n          <nz-form-control [nzSpan]=\"12\"><a target=\"_blank\" [attr.href]=\"webBannerImageData[0].ImageOriginal\">Click To view\n              Image</a></nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\">Upload Mobile Banner Image <br> (350 X 150)</nz-form-label>\n          <nz-form-control [nzSpan]=\"12\">\n            <button nz-button nzType=\"link\" (click)=\"onUploadProductImage(2)\">Click To Upload</button>\n\n          </nz-form-control>\n\n        </nz-form-item>\n        <nz-form-item *ngIf=\"BannerImageData.length>0\">\n          <nz-form-label [nzSm]=\"8\" [nzXs]=\"24\">Preview Mobile Image</nz-form-label>\n          <nz-form-control [nzSpan]=\"12\"><a target=\"_blank\" [attr.href]=\"BannerImageData[0].ImageOriginal\">Click To view\n              Image</a></nz-form-control>\n        </nz-form-item>\n        <nz-form-item nz-row class=\"register-area\">\n          <nz-form-control [nzSpan]=\"14\" [nzOffset]=\"2\">\n            <button nz-button nzType=\"primary\" class=\"primary_button2 ant-btn ant-btn-primary\"\n              (click)=\"BannerForm()\"><span>Submit</span></button>\n            <button nz-button nzType=\"primary\" class=\"primary_button1 ant-btn ant-btn-primary\"\n              (click)=\"close()\"><span>close</span></button>\n\n          </nz-form-control>\n        </nz-form-item>\n      </form>\n    </nz-card>\n  </div>\n  <div *ngIf=\"isImageUploading\">\n\n    <div nz-col nzSpan=\"12\" [nzOffset]=\"2\">\n      <nz-card>\n\n        <div> \n          <input type=\"file\" accept=\"image/gif, image/jpeg, image/png\" #myInput (change)=\"fileChangeEvent($event)\" />\n          <image-cropper [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"false\"  \n          [resizeToWidth]=\"resizeToWidth\" [resizeToHeight]=\"resizeToHeight\"\n            [cropperMinWidth]=\"cropperMinWidth\" [cropperMinHeight]=\"cropperMinHeight\" [onlyScaleDown]=\"true\" [roundCropper]=\"false\" format=\"png\" outputType=\"base64\"\n            (imageCropped)=\"imageCropped($event)\" (imageLoaded)=\"imageLoaded()\" (cropperReady)=\"cropperReady()\"\n            (loadImageFailed)=\"loadImageFailed()\" [style.display]=\"showCropper ? null : 'none'\" [alignImage]=\"'left'\">\n          </image-cropper>\n        </div>\n      </nz-card>\n      <nz-card *ngIf=\"croppedImage.length>0\">\n        <div nz-row [nzGutter]=\"16\">\n          <div nz-col nzSpan=\"12\">\n            <img [src]=\"croppedImage\" style=\"width: 100%;\" />\n          </div>\n          <div nz-col nzSpan=\"12\">\n            <div nz-row style=\"margin-top: 10px;\" *ngIf=\"croppedImage.length>0\">\n              <button type=\"button\" (click)=\"onCloseImageDrawer()\" class=\"ant-btn\"\n                style=\"margin-right: 8px;\"><span>Cancel</span></button>\n              <button type=\"button\" nz-button nzType=\"primary\" [nzLoading]=\"isUploadBtnLoading\"\n                class=\"ant-btn ant-btn-primary\" (click)=\"onSucessCroping()\"><span>Upload to Server</span></button>\n            </div>\n          </div>\n\n        </div>\n      </nz-card>\n\n\n\n    </div>\n\n\n  </div>\n</div>\n<div nz-row style=\"margin-top: 50px;\" *ngIf=\"visible==false\">\n  <nz-card>\n    <div nz-col nzSpan=\"24\">\n      <nz-table #basicTable nzShowPagination=\"false\" [nzLoading]=\"isloading\" nzLoadingDelay=\"1\"\n        [nzData]=\"ListBannerData\" style=\"background: #FFF;margin:30px 0px;\">\n        <thead>\n          <tr>\n            <th>Post</th>\n            <th>view</th>\n            <th>Banner S.No</th>\n            <th>Banner Name</th>\n            <th>Created at</th>\n            <th>Status</th>\n            <th></th>\n            <!-- <th>Edit</th> -->\n\n            <th>Edit</th>\n          </tr>\n        </thead>\n        <tbody>\n          <ng-container *ngFor=\"let data of ListBannerData;let i=index\">\n            <tr>\n              <td>\n                <img alt=\"example\" [src]=\"data.Image_Data.Image250\" style=\"width: 50px;\" />\n              </td>\n              <td>\n                <a target=\"_blank\" [attr.href]=\"data.Image_Data.ImageOriginal\">Click to view</a></td>\n              <td>{{data.SNo}}</td>\n              <td>{{data.Banner_Name}}</td>\n              <td>{{data.created_at | date:'medium'}}</td>\n              <td *ngIf=\"data.Status==true\">Yes</td>\n              <td *ngIf=\"data.Status==false\">No</td>\n              <td>\n                <span [ngSwitch]=\"data.Status\">\n                  <span *ngSwitchCase=true>\n                    <a nz-popconfirm (nzOnConfirm)=\"onActionOnBanner(data,i)\"\n                      nzTitle=\"Are you sure you want to Inactive this?\">Make Inactive</a>\n                  </span>\n                  <span *ngSwitchCase=false>\n                    <a style=\"color: red;\" nz-popconfirm (nzOnConfirm)=\"onActionOnBanner(data,i)\"\n                      nzTitle=\"Are you sure you want to Active this?\">Make Active</a>\n                  </span>\n                  <span *ngSwitchDefault>\n                    NA\n                  </span>\n                </span>\n              </td>\n              <td style=\"color: #096dd9;\" (click)=\"onEdit(data,i)\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n              </td>\n            </tr>\n          </ng-container>\n        </tbody>\n      </nz-table>\n    </div>\n  </nz-card>\n\n\n  <nz-pagination (nzPageIndexChange)=\"onNextPage($event)\" [nzPageSize]=\"limit\" [nzPageIndex]=\"currentPage\"\n    [nzTotal]=\"TotalItems\"></nz-pagination>\n</div>"

/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var BannerComponent = /** @class */ (function () {
    function BannerComponent(fb, _appService, nzMessageService) {
        this.fb = fb;
        this._appService = _appService;
        this.nzMessageService = nzMessageService;
        this.cropperMinWidth = 1680;
        this.cropperMinHeight = 280;
        this.resizeToWidth = 1680;
        this.resizeToHeight = 280;
        this.showCropper = false;
        this.croppedImage = '';
        this.BannerImageData = [];
        this.imageChangedEvent = '';
        this.visible = false;
        this.currentPage = 1;
        this.skip = 0;
        this.limit = this._appService.limit;
        this.ListBannerData = [];
        this.onEditOpen = false;
        this.uploadingBannerType = 1;
        this.webBannerImageData = [];
    }
    BannerComponent.prototype.ngOnInit = function () {
        this.createBanner = this.fb.group({
            SNo: [null],
            Banner_Name: [null],
        });
        this.ListAllBanner();
    };
    BannerComponent.prototype.ListAllBanner = function () {
        var _this = this;
        this.isloading = true;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var userdata = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            skip: this.skip,
            limit: this._appService.limit,
        };
        try {
            this._appService.postMethod('List_All_Banner', userdata)
                .subscribe(function (resp) {
                _this.isloading = false;
                if (resp.success) {
                    _this.TotalItems = resp.extras.Count;
                    if (_this.skip == 0) {
                        _this.currentPage = 1;
                    }
                    _this.ListBannerData = resp.extras.Data;
                    console.log(_this.ListBannerData);
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
    BannerComponent.prototype.onActionOnBanner = function (data, i) {
        var _this = this;
        this.BannerID = data.BannerID;
        this.ind = i;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            BannerID: this.BannerID
        };
        try {
            this._appService.postMethod('Active_Inactive_Banner', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    var msg = void 0;
                    if (data.Status) {
                        msg = 'Inactivated Successfully';
                    }
                    else {
                        msg = 'Activated Successfully';
                    }
                    _this.ListAllBanner();
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
    BannerComponent.prototype.onNextPage = function (event) {
        this.currentPage = event;
        this.skip = (event - 1) * this._appService.limit;
        this.ListAllBanner();
    };
    BannerComponent.prototype.open = function () {
        this.BannerImageData = [];
        this.visible = true;
        this.onEditOpen = false;
        this.createBanner.reset();
        this.imageChangedEvent = null;
        this.isImageUploading = false;
        this.isUploadBtnLoading = false;
        this.croppedImage = '';
        this.SNo = null;
    };
    BannerComponent.prototype.close = function () {
        this.visible = false;
    };
    BannerComponent.prototype.BannerForm = function () {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {};
        var url = '';
        if (this.onEditOpen == true) {
            url = 'Edit_Banner';
            console.log("text");
            body = {
                AdminID: adminData.AdminID,
                SessionID: adminData.SessionID,
                Banner_Name: this.createBanner.value.Banner_Name,
                ImageID: this.BannerImageData[0].ImageID,
                Web_ImageID: this.webBannerImageData[0].ImageID,
                BannerID: this.BannerID,
                SNo: this.createBanner.value.SNo
            };
        }
        else {
            url = 'Create_Banner';
            console.log("text1");
            body = {
                AdminID: adminData.AdminID,
                SessionID: adminData.SessionID,
                Banner_Name: this.createBanner.value.Banner_Name,
                ImageID: this.BannerImageData[0].ImageID,
                Web_ImageID: this.webBannerImageData[0].ImageID,
                SNo: this.createBanner.value.SNo
            };
            console.log(body);
        }
        try {
            this._appService.postMethod(url, body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.createBanner.reset();
                    if (_this.onEditOpen == true) {
                        _this.visible = false;
                        _this.nzMessageService.success('Updated');
                        _this.ListAllBanner();
                    }
                    else {
                        _this.visible = false;
                        _this.nzMessageService.success('Banner Created Sucessfully');
                        _this.ListAllBanner();
                    }
                }
                else {
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                }
            }, function (error) {
            });
        }
        catch (e) { }
    };
    BannerComponent.prototype.onEdit = function (data, i) {
        this.visible = true;
        this.BannerID = data.BannerID;
        this.createBanner.patchValue({
            SNo: data.SNo,
            Banner_Name: data.Banner_Name,
        });
        this.BannerImageData = [];
        this.BannerImageData.push(data.Image_Data);
        this.webBannerImageData = [];
        this.webBannerImageData.push(data.WebImageData);
        this.onEditOpen = true;
    };
    BannerComponent.prototype.onSucessCroping = function () {
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
    BannerComponent.prototype.dataURItoBlob = function (dataURI) {
        var byteString = window.atob(dataURI);
        var arrayBuffer = new ArrayBuffer(byteString.length);
        var int8Array = new Uint8Array(arrayBuffer);
        for (var i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        var blob = new Blob([int8Array], { type: 'image/jpeg' });
        return blob;
    };
    BannerComponent.prototype.onUploadBannerImage = function (type) {
        this.isImageUploading = true;
    };
    BannerComponent.prototype.fileChangeEvent = function (event) {
        this.imageChangedEvent = event;
    };
    BannerComponent.prototype.onCloseImageDrawer = function () {
        this.imageChangedEvent = null;
        this.myInputVariable.nativeElement.value = "";
        this.isImageUploading = false;
        this.isUploadBtnLoading = false;
        this.croppedImage = '';
        this.SNo = null;
    };
    BannerComponent.prototype.imageCropped = function (event) {
        console.log(event);
        this.croppedImage = event.base64;
    };
    BannerComponent.prototype.cropperReady = function () {
        console.log('Cropper ready');
    };
    BannerComponent.prototype.loadImageFailed = function () {
        console.log('Load failed');
    };
    BannerComponent.prototype.imageLoaded = function () {
        this.showCropper = true;
        console.log('Image loaded');
    };
    BannerComponent.prototype.send = function (imageFile) {
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
                if (_this.uploadingBannerType == 1) {
                    _this.webBannerImageData = [];
                    _this.webBannerImageData.push({
                        ImageID: event.body.extras.ImageID,
                        ImageOriginal: event.body.extras.ImageOriginal
                    });
                }
                else if (_this.uploadingBannerType == 2) {
                    _this.BannerImageData = [];
                    _this.BannerImageData.push({
                        ImageID: event.body.extras.ImageID,
                        ImageOriginal: event.body.extras.ImageOriginal
                    });
                }
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
    BannerComponent.prototype.onUploadProductImage = function (type) {
        this.croppedImage = '';
        if (this.myInputVariable != undefined) {
            this.myInputVariable.nativeElement.value = "";
        }
        this.uploadingBannerType = type;
        if (type == 1) {
            this.resizeToHeight = 280;
            this.resizeToWidth = 1680;
            this.cropperMinHeight = 280;
            this.cropperMinWidth = 1680;
        }
        else if (type == 2) {
            this.resizeToHeight = 150;
            this.resizeToWidth = 350;
            this.cropperMinHeight = 150;
            this.cropperMinWidth = 350;
        }
        this.isImageUploading = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BannerComponent.prototype, "myInputVariable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__["ImageCropperComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__["ImageCropperComponent"])
    ], BannerComponent.prototype, "imageCropper", void 0);
    BannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/banner/banner.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/banner/banner.module.ts":
/*!*****************************************!*\
  !*** ./src/app/banner/banner.module.ts ***!
  \*****************************************/
/*! exports provided: BannerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerModule", function() { return BannerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banner.component */ "./src/app/banner/banner.component.ts");
/* harmony import */ var _Banner_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Banner.routing */ "./src/app/banner/Banner.routing.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");









var BannerModule = /** @class */ (function () {
    function BannerModule() {
    }
    BannerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _Banner_routing__WEBPACK_IMPORTED_MODULE_4__["BannerRoutes"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_8__["ImageCropperModule"]
            ],
            declarations: [_banner_component__WEBPACK_IMPORTED_MODULE_3__["BannerComponent"]]
        })
    ], BannerModule);
    return BannerModule;
}());



/***/ })

}]);
//# sourceMappingURL=banner-banner-module.js.map