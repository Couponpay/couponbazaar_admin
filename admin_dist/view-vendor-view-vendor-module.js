(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-vendor-view-vendor-module"],{

/***/ "./src/app/vendor/view-vendor/view-vendor.component.css":
/*!**************************************************************!*\
  !*** ./src/app/vendor/view-vendor/view-vendor.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map{\r\n  height: 300px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL3ZpZXctdmVuZG9yL3ZpZXctdmVuZG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC92ZW5kb3Ivdmlldy12ZW5kb3Ivdmlldy12ZW5kb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXB7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/vendor/view-vendor/view-vendor.component.html":
/*!***************************************************************!*\
  !*** ./src/app/vendor/view-vendor/view-vendor.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-table #basicTable nzShowPagination=\"false\" [nzScroll]=\"{x:'1000px'}\" [nzData]=\"VendorList\">\r\n  <thead>\r\n    <tr>\r\n\r\n      <th>Shop Name</th>\r\n      <th>Shop Phone Number</th>\r\n      <th>Shop Password</th>\r\n      <th>Shop GST Number</th>\r\n      <th>Introducer Name</th>\r\n      <th>Address</th>\r\n      <th>Introducer Phone Number</th>\r\n      <!-- <th>Introducer Password</th> -->\r\n      <th>Available Amount</th>\r\n      <th>Withdrawn Amount</th>\r\n      <th>Total Amount</th>\r\n      <th>Action</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <ng-container *ngFor=\"let data of VendorList; let i=index\">\r\n      <tr>\r\n\r\n        <td>\r\n\r\n          <a (dblclick)=\"onShopNameChage(data,i)\" *ngIf=\"isEditIndex!=i\">{{data.Shop_Name}}</a>\r\n          <div *ngIf=\"isEditIndex==i\">\r\n\r\n            <nz-input-group [nzSuffix]=\"suffixIconSearch\">\r\n              <input type=\"text\" style=\"width: 200px;\" nz-input nzSize=\"small\" #input placeholder=\"Shop Name\">\r\n\r\n            </nz-input-group>\r\n            <ng-template #suffixIconSearch>\r\n              <i nz-icon style=\"    color: #1890ff; \r\n                padding: 7px;cursor: pointer;\" type=\"check\" theme=\"outline\" (click)=\"onUpdate(input.value)\"></i>\r\n              <i nz-icon type=\"close\" style=\"    color: red;cursor: pointer;\" theme=\"outline\" (click)=\"onCancel()\"></i>\r\n\r\n            </ng-template>\r\n          </div>\r\n\r\n        </td>\r\n\r\n        <td>{{data.Shop_CountryCode}}{{data.Shop_PhoneNumber}}</td>\r\n        <td>{{data.Shop_Password}}</td>\r\n        <td>\r\n\r\n          <a (dblclick)=\"onShopGstChage(data,i)\" *ngIf=\"isEditGst!=i\">{{data.GST_Number}}</a>\r\n          <div *ngIf=\"isEditGst==i\">\r\n\r\n            <nz-input-group [nzSuffix]=\"suffixIconSearch\">\r\n              <!-- <input type=\"text\" style=\"width: 200px;\" nz-input nzSize=\"small\" #input placeholder=\"GST Number\"> -->\r\n              <input type=\"text\" style=\"width: 200px;\"  placeholder=\"GST Number\" nz-input  #input\r\n              oninput=\"this.value=this.value.replace(/[^a-z0-9\\s]/gi, '').replace(/[_\\s]/g, '').toUpperCase()\"\r\n              minlength=\"15\" maxlength=\"15\">\r\n\r\n            </nz-input-group>\r\n            <ng-template #suffixIconSearch>\r\n              <i nz-icon style=\"    color: #1890ff; \r\n                padding: 7px;cursor: pointer;\" type=\"check\" theme=\"outline\" (click)=\"onUpdateGst(input.value)\"></i>\r\n              <i nz-icon type=\"close\" style=\"    color: red;cursor: pointer;\" theme=\"outline\" (click)=\"onCancelGst()\"></i>\r\n\r\n            </ng-template>\r\n          </div>\r\n\r\n        </td>\r\n        <td>{{data.Introducer_Name}}</td>\r\n        <td>{{data.Address}}\r\n            <i nz-icon type=\"edit\" style=\"    color: blue;cursor: pointer;\" theme=\"outline\" (click)=\"onClickAddresDrawer(data)\"></i>\r\n        </td>\r\n        <td>{{data.Introducer_CountryCode}}{{data.Introducer_PhoneNumber}}</td>\r\n        <!-- <td>{{data.Introducer_Password}}</td> -->\r\n        <td>{{data.Available_Amount}}</td>\r\n        <td>{{data.Withdrawn_Amount}}</td>\r\n        <td>{{data.Total_Amount}}</td>\r\n        <td>\r\n          <nz-dropdown>\r\n            <button nz-button nz-dropdown><span>Actions</span> <i nz-icon type=\"down\"></i></button>\r\n            <ul nz-menu>\r\n              <li nz-menu-item>\r\n                <a skipLocationChange [routerLink]=\"[ '/dashboard','vendor', 'productsbyshop',data.ShopID,data.Shop_Name ]\">View\r\n                  Products</a>\r\n              </li>\r\n              <li nz-menu-item>\r\n                <a skipLocationChange [routerLink]=\"[ '/dashboard','vendor', 'viewLledger',\r\n                    data.ShopID,data.Shop_Name,data.Shop_PhoneNumber,\r\n                    data.Available_Amount,\r\n                    data.Withdrawn_Amount,\r\n                    data.Total_Amount ]\">View Ledger</a>\r\n              </li>\r\n            </ul>\r\n          </nz-dropdown>\r\n\r\n        </td>\r\n      </tr>\r\n\r\n    </ng-container>\r\n\r\n  </tbody>\r\n</nz-table>\r\n<nz-pagination (nzPageIndexChange)=\"onNextPage($event)\" [nzPageSize]=\"limit\" [nzPageIndex]=\"currentPage\"  [nzTotal]=\"totalItem\"></nz-pagination>\r\n\r\n<nz-drawer [nzBodyStyle]=\"{ height: 'calc(100% - 55px)', overflow: 'auto', 'padding-bottom': '53px' }\"\r\n  [nzMaskClosable]=\"false\" [nzWidth]=\"720\" [nzVisible]=\"isLevelsDrawer\" nzTitle=\" \"\r\n  (nzOnClose)=\"OnCloseAddressDrawer()\">\r\n  <div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <form nz-form  [formGroup]=\"editAddress\">\r\n        <nz-form-item>\r\n            <nz-form-control [nzSpan]=\"10\">\r\n              <input id=\"addressEdit\" placeholder=\"Search Address\" type=\"text\" nz-input (ngModelChange)=\"addresChange()\"\r\n                name=\"Address\" formControlName=\"Address\">\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-control [nzSpan]=\"24\">\r\n              <div id=\"map\"></div>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-control>\r\n              <button nz-button nzType=\"primary\" \r\n                (click)=\"submitupdateAddress()\">Submit</button>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </form>\r\n    </div>\r\n    </div>\r\n</nz-drawer>"

/***/ }),

/***/ "./src/app/vendor/view-vendor/view-vendor.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/vendor/view-vendor/view-vendor.component.ts ***!
  \*************************************************************/
/*! exports provided: ViewVendorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewVendorComponent", function() { return ViewVendorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





// import { FormGroup } from '@angular/forms';

var ViewVendorComponent = /** @class */ (function () {
    function ViewVendorComponent(_appService, router, nzMessageService, ngZone, fb) {
        this._appService = _appService;
        this.router = router;
        this.nzMessageService = nzMessageService;
        this.ngZone = ngZone;
        this.fb = fb;
        this.VendorList = [];
        this.limit = this._appService.limit;
        this.currentPage = 1;
        this.isEditShopName = false;
        this.isEditGstNumber = false;
    }
    ViewVendorComponent.prototype.ngOnInit = function () {
        this.ViewVendors(0);
        this.editAddress = this.fb.group({
            Address: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        });
    };
    ViewVendorComponent.prototype.ViewVendors = function (skip) {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            skip: skip,
            limit: this._appService.limit
        };
        try {
            this._appService.postMethod('List_All_Shops', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.totalItem = resp.extras.Count;
                    if (skip == 0) {
                        _this.currentPage = 1;
                    }
                    _this.VendorList = resp.extras.Data;
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
    ViewVendorComponent.prototype.onNextPage = function (event) {
        this.currentPage = event;
        var skip = (event - 1) * this._appService.limit;
        this.ViewVendors(skip);
    };
    ViewVendorComponent.prototype.onShopNameChage = function (data, i) {
        this.isEditShopName = true;
        this.isEditIndex = i;
        this.shopNameEdit = data.Shop_Name;
        this.visible = true;
        this.ShopID = data.ShopID;
    };
    ViewVendorComponent.prototype.onCancel = function () {
        this.isEditIndex = -1;
    };
    ViewVendorComponent.prototype.onUpdate = function (shopname) {
        var _this = this;
        console.log(shopname);
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            ShopID: this.ShopID,
            Shop_Name: shopname
        };
        try {
            this._appService.postMethod('Edit_Shop_Name', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.isEditIndex = -1;
                    _this.nzMessageService.success('Shop Name updated Sucessfully');
                    _this.ViewVendors(0);
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
    ViewVendorComponent.prototype.onClickAddresDrawer = function (data) {
        this.isLevelsDrawer = true;
        this.shopId = data.ShopID;
        console.log("id" + JSON.stringify(this.shopId));
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 17.4471, lng: 78.454 },
            zoom: 14,
            fullscreenControl: true
        });
        this.addresChange();
        this.editAddress.patchValue({
            Address: data.Address,
        });
    };
    ViewVendorComponent.prototype.OnCloseAddressDrawer = function () {
        this.isLevelsDrawer = false;
        // this.editAddress.reset()
    };
    ViewVendorComponent.prototype.addresChange = function () {
        var _this = this;
        console.log('enter to ');
        var autocomplete;
        var options = { componentRestrictions: { country: "IN" } };
        var updateBranchAddress = document.getElementById('addressEdit');
        autocomplete = new google.maps.places.Autocomplete(updateBranchAddress, options);
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            _this.ngZone.run(function () {
                _this.zoom = 17;
                var place = autocomplete.getPlace();
                console.log(place);
                if (place.geometry === undefined || place.geometry === null) {
                    return;
                }
                _this.updateBranchAddress = place.formatted_address;
                _this.latitude = place.geometry.location.lat();
                _this.longitude = place.geometry.location.lng();
                console.log("lat" + JSON.stringify(_this.latitude));
                console.log("lon" + JSON.stringify(_this.longitude));
            });
        });
    };
    ViewVendorComponent.prototype.submitupdateAddress = function () {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            ShopID: this.shopId,
            Latitude: this.latitude,
            Longitude: this.longitude,
            Address: this.updateBranchAddress,
        };
        try {
            this._appService.postMethod('Edit_Shop', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.nzMessageService.success('product Details Updated Sucessfully');
                    _this.isLevelsDrawer = false;
                    _this.ViewVendors(0);
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
    ViewVendorComponent.prototype.onShopGstChage = function (data, i) {
        this.isEditGstNumber = true;
        this.isEditGst = i;
        this.shopGstEdit = data.GST_Number;
        this.GstVisible = true;
        this.ShopID = data.ShopID;
    };
    ViewVendorComponent.prototype.onCancelGst = function () {
        this.isEditGst = -1;
    };
    ViewVendorComponent.prototype.onUpdateGst = function (gstnumber) {
        var _this = this;
        console.log(gstnumber);
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            ShopID: this.ShopID,
            GST_Number: gstnumber
        };
        try {
            this._appService.postMethod('Edit_Shop_GST', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.isEditGst = -1;
                    _this.nzMessageService.success('Gst Number updated Sucessfully');
                    _this.ViewVendors(0);
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
    ViewVendorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-vendor',
            template: __webpack_require__(/*! ./view-vendor.component.html */ "./src/app/vendor/view-vendor/view-vendor.component.html"),
            styles: [__webpack_require__(/*! ./view-vendor.component.css */ "./src/app/vendor/view-vendor/view-vendor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], ViewVendorComponent);
    return ViewVendorComponent;
}());



/***/ }),

/***/ "./src/app/vendor/view-vendor/view-vendor.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/vendor/view-vendor/view-vendor.module.ts ***!
  \**********************************************************/
/*! exports provided: ViewVendorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewVendorModule", function() { return ViewVendorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _view_vendor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-vendor.component */ "./src/app/vendor/view-vendor/view-vendor.component.ts");
/* harmony import */ var src_app_shared_modue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _view_vendor_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-vendor.routing */ "./src/app/vendor/view-vendor/view-vendor.routing.ts");







var ViewVendorModule = /** @class */ (function () {
    function ViewVendorModule() {
    }
    ViewVendorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _view_vendor_routing__WEBPACK_IMPORTED_MODULE_6__["ViewVendorRoutingModule"],
                src_app_shared_modue__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
            ],
            declarations: [_view_vendor_component__WEBPACK_IMPORTED_MODULE_4__["ViewVendorComponent"]]
        })
    ], ViewVendorModule);
    return ViewVendorModule;
}());



/***/ }),

/***/ "./src/app/vendor/view-vendor/view-vendor.routing.ts":
/*!***********************************************************!*\
  !*** ./src/app/vendor/view-vendor/view-vendor.routing.ts ***!
  \***********************************************************/
/*! exports provided: ViewVendorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewVendorRoutingModule", function() { return ViewVendorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _view_vendor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-vendor.component */ "./src/app/vendor/view-vendor/view-vendor.component.ts");





var routes = [
    { path: '', component: _view_vendor_component__WEBPACK_IMPORTED_MODULE_4__["ViewVendorComponent"] }
];
var ViewVendorRoutingModule = /** @class */ (function () {
    function ViewVendorRoutingModule() {
    }
    ViewVendorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ViewVendorRoutingModule);
    return ViewVendorRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=view-vendor-view-vendor-module.js.map