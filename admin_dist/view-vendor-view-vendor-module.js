(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-vendor-view-vendor-module"],{

/***/ "./src/app/vendor/view-vendor/view-vendor.component.css":
/*!**************************************************************!*\
  !*** ./src/app/vendor/view-vendor/view-vendor.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map{\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL3ZpZXctdmVuZG9yL3ZpZXctdmVuZG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC92ZW5kb3Ivdmlldy12ZW5kb3Ivdmlldy12ZW5kb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXB7XG4gIGhlaWdodDogMzAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/vendor/view-vendor/view-vendor.component.html":
/*!***************************************************************!*\
  !*** ./src/app/vendor/view-vendor/view-vendor.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-table #basicTable nzShowPagination=\"false\" [nzScroll]=\"{x:'1000px'}\" [nzData]=\"VendorList\">\n  <thead>\n    <tr>\n\n      <th>Shop Name</th>\n      <th>Shop Phone Number</th>\n      <th>Shop Password</th>\n      <th>Shop GST Number</th>\n      <th>Introducer Name</th>\n      <th>Address</th>\n      <th>Introducer Phone Number</th>\n      <!-- <th>Introducer Password</th> -->\n      <th>Available Amount</th>\n      <th>Withdrawn Amount</th>\n      <th>Total Amount</th>\n      <th>Action</th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-container *ngFor=\"let data of VendorList; let i=index\">\n      <tr>\n\n        <td>\n\n          <a (dblclick)=\"onShopNameChage(data,i)\" *ngIf=\"isEditIndex!=i\">{{data.Shop_Name}}</a>\n          <div *ngIf=\"isEditIndex==i\">\n\n            <nz-input-group [nzSuffix]=\"suffixIconSearch\">\n              <input type=\"text\" style=\"width: 200px;\" nz-input nzSize=\"small\" #input placeholder=\"Shop Name\">\n\n            </nz-input-group>\n            <ng-template #suffixIconSearch>\n              <i nz-icon style=\"    color: #1890ff; \n                padding: 7px;cursor: pointer;\" type=\"check\" theme=\"outline\" (click)=\"onUpdate(input.value)\"></i>\n              <i nz-icon type=\"close\" style=\"    color: red;cursor: pointer;\" theme=\"outline\" (click)=\"onCancel()\"></i>\n\n            </ng-template>\n          </div>\n\n        </td>\n\n        <td>{{data.Shop_CountryCode}}{{data.Shop_PhoneNumber}}</td>\n        <td>{{data.Shop_Password}}</td>\n        <td>\n\n          <a (dblclick)=\"onShopGstChage(data,i)\" *ngIf=\"isEditGst!=i\">{{data.GST_Number}}</a>\n          <div *ngIf=\"isEditGst==i\">\n\n            <nz-input-group [nzSuffix]=\"suffixIconSearch\">\n              <!-- <input type=\"text\" style=\"width: 200px;\" nz-input nzSize=\"small\" #input placeholder=\"GST Number\"> -->\n              <input type=\"text\" style=\"width: 200px;\"  placeholder=\"GST Number\" nz-input  #input\n              oninput=\"this.value=this.value.replace(/[^a-z0-9\\s]/gi, '').replace(/[_\\s]/g, '').toUpperCase()\"\n              minlength=\"15\" maxlength=\"15\">\n\n            </nz-input-group>\n            <ng-template #suffixIconSearch>\n              <i nz-icon style=\"    color: #1890ff; \n                padding: 7px;cursor: pointer;\" type=\"check\" theme=\"outline\" (click)=\"onUpdateGst(input.value)\"></i>\n              <i nz-icon type=\"close\" style=\"    color: red;cursor: pointer;\" theme=\"outline\" (click)=\"onCancelGst()\"></i>\n\n            </ng-template>\n          </div>\n\n        </td>\n        <td>{{data.Introducer_Name}}</td>\n        <td>{{data.Address}}\n            <i nz-icon type=\"edit\" style=\"    color: blue;cursor: pointer;\" theme=\"outline\" (click)=\"onClickAddresDrawer(data)\"></i>\n        </td>\n        <td>{{data.Introducer_CountryCode}}{{data.Introducer_PhoneNumber}}</td>\n        <!-- <td>{{data.Introducer_Password}}</td> -->\n        <td>{{data.Available_Amount}}</td>\n        <td>{{data.Withdrawn_Amount}}</td>\n        <td>{{data.Total_Amount}}</td>\n        <td>\n          <nz-dropdown>\n            <button nz-button nz-dropdown><span>Actions</span> <i nz-icon type=\"down\"></i></button>\n            <ul nz-menu>\n              <li nz-menu-item>\n                <a skipLocationChange [routerLink]=\"[ '/dashboard','vendor', 'productsbyshop',data.ShopID,data.Shop_Name ]\">View\n                  Products</a>\n              </li>\n              <li nz-menu-item>\n                <a skipLocationChange [routerLink]=\"[ '/dashboard','vendor', 'viewLledger',\n                    data.ShopID,data.Shop_Name,data.Shop_PhoneNumber,\n                    data.Available_Amount,\n                    data.Withdrawn_Amount,\n                    data.Total_Amount ]\">View Ledger</a>\n              </li>\n            </ul>\n          </nz-dropdown>\n\n        </td>\n      </tr>\n\n    </ng-container>\n\n  </tbody>\n</nz-table>\n<nz-pagination (nzPageIndexChange)=\"onNextPage($event)\" [nzPageSize]=\"limit\" [nzPageIndex]=\"currentPage\"  [nzTotal]=\"totalItem\"></nz-pagination>\n\n<nz-drawer [nzBodyStyle]=\"{ height: 'calc(100% - 55px)', overflow: 'auto', 'padding-bottom': '53px' }\"\n  [nzMaskClosable]=\"false\" [nzWidth]=\"720\" [nzVisible]=\"isLevelsDrawer\" nzTitle=\" \"\n  (nzOnClose)=\"OnCloseAddressDrawer()\">\n  <div>\n    <div nz-row nzGutter=\"8\">\n        <form nz-form  [formGroup]=\"editAddress\">\n        <nz-form-item>\n            <nz-form-control [nzSpan]=\"10\">\n              <input id=\"addressEdit\" placeholder=\"Search Address\" type=\"text\" nz-input (ngModelChange)=\"addresChange()\"\n                name=\"Address\" formControlName=\"Address\">\n            </nz-form-control>\n          </nz-form-item>\n          <nz-form-item>\n            <nz-form-control [nzSpan]=\"24\">\n              <div id=\"map\"></div>\n            </nz-form-control>\n          </nz-form-item>\n          <nz-form-item>\n            <nz-form-control>\n              <button nz-button nzType=\"primary\" \n                (click)=\"submitupdateAddress()\">Submit</button>\n            </nz-form-control>\n          </nz-form-item>\n        </form>\n    </div>\n    </div>\n</nz-drawer>"

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