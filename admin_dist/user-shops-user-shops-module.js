(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-shops-user-shops-module"],{

/***/ "./src/app/user-shops/user-shops-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/user-shops/user-shops-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: UserShopsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserShopsRoutingModule", function() { return UserShopsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_shops_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-shops.component */ "./src/app/user-shops/user-shops.component.ts");





var routes = [
    { path: '', component: _user_shops_component__WEBPACK_IMPORTED_MODULE_4__["UserShopsComponent"] }
];
var UserShopsRoutingModule = /** @class */ (function () {
    function UserShopsRoutingModule() {
    }
    UserShopsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UserShopsRoutingModule);
    return UserShopsRoutingModule;
}());



/***/ }),

/***/ "./src/app/user-shops/user-shops.component.css":
/*!*****************************************************!*\
  !*** ./src/app/user-shops/user-shops.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItc2hvcHMvdXNlci1zaG9wcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user-shops/user-shops.component.html":
/*!******************************************************!*\
  !*** ./src/app/user-shops/user-shops.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row style=\"margin-top: 50px;\">\r\n  <div nz-col nzSpan=\"24\">\r\n    <nz-tabset style=\"margin-bottom: -16px;\">\r\n      <nz-tab (nzClick)=\"onChangeTab(1)\" nzTitle=\"Pending\">\r\n\r\n      </nz-tab>\r\n      <nz-tab (nzClick)=\"onChangeTab(2)\" nzTitle=\"Cancelled\">\r\n\r\n      </nz-tab>\r\n      <nz-tab (nzClick)=\"onChangeTab(3)\" nzTitle=\"Approved\">\r\n\r\n      </nz-tab>\r\n\r\n    </nz-tabset>\r\n    <div nz-row style=\"margin-top: 10px;\">\r\n      <nz-table #basicTable nzShowPagination=\"false\" [nzLoading]=\"isloading\"\r\n      nzLoadingDelay=\"1\" [nzData]=\"shopsData\"  style=\"background: #FFF;margin:30px 0px;\">\r\n       <thead>\r\n         <tr>\r\n           <th>S.No</th>\r\n           <th>Shop Name</th>\r\n           <th>Shop Number</th>\r\n           <th>Address</th>\r\n           <th>Total Price</th>\r\n           <th>Tax</th>\r\n           <th>Discount</th>\r\n           <th></th>\r\n         </tr>\r\n       </thead>\r\n       <tbody>\r\n         <ng-container *ngFor=\"let data of shopsData;let i=index\">\r\n           <tr>\r\n             <td>{{skip+i+1}}</td>\r\n             <td>{{data.Users_Shop_Name}}</td>\r\n             <td>{{data.Users_Shop_PhoneNumber}}</td>\r\n             <td>{{data.Address}}</td>\r\n             <td>{{data.Total_Price}}</td>\r\n             <td>{{data.Tax}}</td>\r\n             <td>{{data.Discount}}</td>\r\n             <td>\r\n               <span *ngIf=\"data.User_Shop_Status == 1\">\r\n                 <nz-dropdown>\r\n                   <a nz-dropdown>\r\n                     Change Status <i nz-icon type=\"down\"></i>\r\n                   </a>\r\n                   <ul nz-menu nzSelectable>\r\n                     <li (click)=\"onActionOn(data ,1)\" nz-menu-item>Approve</li>\r\n                       <li (click)=\"onActionOn(data ,2)\" nz-menu-item>Cancel</li>\r\n                   </ul>\r\n                 </nz-dropdown>\r\n                 <!-- <nz-dropdown>\r\n                   <i nz-icon type=\"down\" theme=\"outline\"></i>\r\n                   <ul nz-menu>\r\n                     <li (click)=\"onActionOn(data ,3)\" nz-menu-item>Approve</li>\r\n                       <li (click)=\"onActionOn(data ,2)\" nz-menu-item>Cancel</li>\r\n                   </ul>\r\n                 </nz-dropdown> -->\r\n               </span>\r\n               <span *ngIf=\"data.User_Shop_Status == 2\">Cancelled</span>\r\n               <span *ngIf=\"data.User_Shop_Status == 3\">Approved</span>\r\n             </td>\r\n           </tr>\r\n         </ng-container>\r\n       </tbody>\r\n     </nz-table>\r\n     <nz-pagination (nzPageIndexChange)=\"onNextPage($event)\"  [nzPageSize]=\"limit\" [nzPageIndex]=\"currentPage\" [nzTotal]=\"totalItem\"></nz-pagination>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user-shops/user-shops.component.ts":
/*!****************************************************!*\
  !*** ./src/app/user-shops/user-shops.component.ts ***!
  \****************************************************/
/*! exports provided: UserShopsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserShopsComponent", function() { return UserShopsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var UserShopsComponent = /** @class */ (function () {
    function UserShopsComponent(fb, _appService, nzMessageService) {
        this.fb = fb;
        this._appService = _appService;
        this.nzMessageService = nzMessageService;
        this.skip = 0;
        this.limit = this._appService.limit;
        this.currentPage = 1;
        this.shopsData = [];
    }
    UserShopsComponent.prototype.ngOnInit = function () {
        this.onChangeTab(1);
    };
    UserShopsComponent.prototype.onChangeTab = function (event) {
        this.selectedtab = event;
        this.skip = 0;
        this.getUserShops();
    };
    UserShopsComponent.prototype.getUserShops = function () {
        var _this = this;
        this.isloading = true;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var userdata = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            Status: this.selectedtab,
            skip: this.skip,
            limit: this.limit
        };
        try {
            this._appService.postMethod('List_All_User_Shops', userdata)
                .subscribe(function (resp) {
                _this.isloading = false;
                if (resp.success) {
                    if (_this.skip == 0) {
                        _this.currentPage = 1;
                    }
                    _this.totalItem = resp.extras.Count;
                    _this.shopsData = resp.extras.Data;
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
    UserShopsComponent.prototype.onNextPage = function (event) {
        this.currentPage = this.currentPage;
        this.skip = (event - 1) * this.limit;
        this.getUserShops();
    };
    UserShopsComponent.prototype.onActionOn = function (data, type) {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var userdata = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            Users_ShopsID: data.Users_ShopsID,
            Approve_Reject: type
        };
        try {
            this._appService.postMethod('Accept_Reject_User_Shop', userdata)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.nzMessageService.success(resp.extras.Status);
                    _this.getUserShops();
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
    UserShopsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-shops',
            template: __webpack_require__(/*! ./user-shops.component.html */ "./src/app/user-shops/user-shops.component.html"),
            styles: [__webpack_require__(/*! ./user-shops.component.css */ "./src/app/user-shops/user-shops.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], UserShopsComponent);
    return UserShopsComponent;
}());



/***/ }),

/***/ "./src/app/user-shops/user-shops.module.ts":
/*!*************************************************!*\
  !*** ./src/app/user-shops/user-shops.module.ts ***!
  \*************************************************/
/*! exports provided: UserShopsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserShopsModule", function() { return UserShopsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_shops_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-shops.component */ "./src/app/user-shops/user-shops.component.ts");
/* harmony import */ var _user_shops_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-shops-routing.module */ "./src/app/user-shops/user-shops-routing.module.ts");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var UserShopsModule = /** @class */ (function () {
    function UserShopsModule() {
    }
    UserShopsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _user_shops_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserShopsRoutingModule"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            declarations: [_user_shops_component__WEBPACK_IMPORTED_MODULE_3__["UserShopsComponent"]]
        })
    ], UserShopsModule);
    return UserShopsModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-shops-user-shops-module.js.map