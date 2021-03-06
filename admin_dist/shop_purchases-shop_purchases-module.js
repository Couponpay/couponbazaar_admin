(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop_purchases-shop_purchases-module"],{

/***/ "./src/app/vendor/shop_purchases/shop_purchases.component.css":
/*!********************************************************************!*\
  !*** ./src/app/vendor/shop_purchases/shop_purchases.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9zaG9wX3B1cmNoYXNlcy9zaG9wX3B1cmNoYXNlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/vendor/shop_purchases/shop_purchases.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/vendor/shop_purchases/shop_purchases.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-table #basicTable \r\nnzShowPagination=\"false\"\r\n[nzScroll]=\"{ x:'1000px' }\"\r\n[nzData]=\"shopPurchasesList\">\r\n    <thead>\r\n      <tr>\r\n          <th>S.No</th>\r\n          <th>Purchase Number</th>\r\n          <th> Name</th>\r\n          <th> PhoneNumber</th>\r\n          <th> Amount</th>\r\n          <th>Date</th>\r\n          <th>Cart</th>\r\n          <th>Status</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let item of shopPurchasesList; let i=index\">\r\n          <td>{{i+1}}</td>\r\n          <td>{{item.PurchaseNumber}}</td>\r\n          <td>{{item.Shop_Name}}</td>\r\n          <td>{{item.Shop_PhoneNumber}}</td>\r\n          <td>{{item.Total_Amount}}</td>\r\n          <td>{{item.created_at | date:'medium'}}</td>\r\n          <td><a (click)=\"onViewCart(item)\">View Cart</a></td>\r\n          <td>\r\n            <span [ngSwitch]=\"item.PurchaseStatus\">\r\n            <p *ngSwitchCase=\"1\">\r\n                Order Placed\r\n            </p>\r\n            <p *ngSwitchCase=\"2\">\r\n                Order Accepted\r\n            </p>\r\n            <p *ngSwitchCase=\"3\">\r\n                Order Shipped \r\n            </p>\r\n            <p *ngSwitchCase=\"4\">\r\n                Shippment Notifications\r\n            </p>\r\n            <p *ngSwitchCase=\"5\">\r\n                Order Delivered\r\n            </p>\r\n           \r\n            <p *ngSwitchDefault>\r\n            No Status\r\n            </p>\r\n            </span>\r\n          </td>\r\n      </tr>\r\n    </tbody>\r\n  </nz-table>\r\n  <nz-pagination (nzPageIndexChange)=\"onNextPage_purchaseList($event)\" [nzPageSize]=\"limit\" [nzPageIndex]=\"currentPage\" [nzTotal]=\"purchaseListCount\"></nz-pagination>\r\n\r\n  <nz-modal \r\n  nzWidth=\"45%\"\r\n  [(nzVisible)]=\"isCartVisible\"\r\n   nzTitle=\"{{shopName}} shop cart details\" \r\n   (nzOnCancel)=\"handleCancel()\" \r\n   (nzOnOk)=\"handleOk()\">\r\n   \r\n    </nz-modal>"

/***/ }),

/***/ "./src/app/vendor/shop_purchases/shop_purchases.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/vendor/shop_purchases/shop_purchases.component.ts ***!
  \*******************************************************************/
/*! exports provided: Shop_purchasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shop_purchasesComponent", function() { return Shop_purchasesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var Shop_purchasesComponent = /** @class */ (function () {
    function Shop_purchasesComponent(_appService, router, nzMessageService) {
        this._appService = _appService;
        this.router = router;
        this.nzMessageService = nzMessageService;
        this.limit = this._appService.limit;
        this.currentPage = 1;
    }
    Shop_purchasesComponent.prototype.ngOnInit = function () {
        this.getShopPurchases(0);
    };
    Shop_purchasesComponent.prototype.getShopPurchases = function (skip) {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            skip: skip,
            limit: this._appService.limit
        };
        try {
            this._appService.postMethod('List_All_Shop_Purchases', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    if (skip == 0) {
                        _this.currentPage = 1;
                    }
                    _this.purchaseListCount = resp.extras.Count;
                    _this.shopPurchasesList = resp.extras.Data;
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
    Shop_purchasesComponent.prototype.onNextPage_purchaseList = function (event) {
        this.currentPage = event;
        var skip = (event - 1) * this._appService.limit;
        this.getShopPurchases(skip);
    };
    Shop_purchasesComponent.prototype.onViewCart = function (item) {
        this._appService.singleShopCartDetails = item;
        this.router.navigate(['/dashboard', 'vendor', 'cartdetails', item.Shop_Name], { skipLocationChange: true });
        // this.shopName=item.Shop_Name
        // this.cartInformation=item.Cart_Information
        // this.isCartVisible=true;
    };
    Shop_purchasesComponent.prototype.handleCancel = function () {
        this.isCartVisible = false;
    };
    Shop_purchasesComponent.prototype.handleOk = function () {
        this.isCartVisible = false;
    };
    Shop_purchasesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop_purchases',
            template: __webpack_require__(/*! ./shop_purchases.component.html */ "./src/app/vendor/shop_purchases/shop_purchases.component.html"),
            styles: [__webpack_require__(/*! ./shop_purchases.component.css */ "./src/app/vendor/shop_purchases/shop_purchases.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]])
    ], Shop_purchasesComponent);
    return Shop_purchasesComponent;
}());



/***/ }),

/***/ "./src/app/vendor/shop_purchases/shop_purchases.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/vendor/shop_purchases/shop_purchases.module.ts ***!
  \****************************************************************/
/*! exports provided: Shop_purchasesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shop_purchasesModule", function() { return Shop_purchasesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_modue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shop_purchases_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shop_purchases.component */ "./src/app/vendor/shop_purchases/shop_purchases.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shop_purchases_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop_purchases.routing */ "./src/app/vendor/shop_purchases/shop_purchases.routing.ts");







var Shop_purchasesModule = /** @class */ (function () {
    function Shop_purchasesModule() {
    }
    Shop_purchasesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                src_app_shared_modue__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _shop_purchases_routing__WEBPACK_IMPORTED_MODULE_6__["Shop_purchasesRoutes"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            declarations: [_shop_purchases_component__WEBPACK_IMPORTED_MODULE_4__["Shop_purchasesComponent"]]
        })
    ], Shop_purchasesModule);
    return Shop_purchasesModule;
}());



/***/ }),

/***/ "./src/app/vendor/shop_purchases/shop_purchases.routing.ts":
/*!*****************************************************************!*\
  !*** ./src/app/vendor/shop_purchases/shop_purchases.routing.ts ***!
  \*****************************************************************/
/*! exports provided: Shop_purchasesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shop_purchasesRoutes", function() { return Shop_purchasesRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shop_purchases_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop_purchases.component */ "./src/app/vendor/shop_purchases/shop_purchases.component.ts");


var routes = [
    { path: '', component: _shop_purchases_component__WEBPACK_IMPORTED_MODULE_1__["Shop_purchasesComponent"] },
];
var Shop_purchasesRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=shop_purchases-shop_purchases-module.js.map