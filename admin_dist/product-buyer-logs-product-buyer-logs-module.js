(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-buyer-logs-product-buyer-logs-module"],{

/***/ "./src/app/product-buyer-logs/product-buyer-logs-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/product-buyer-logs/product-buyer-logs-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ProductBuyerLogsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductBuyerLogsRoutingModule", function() { return ProductBuyerLogsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _product_buyer_logs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-buyer-logs.component */ "./src/app/product-buyer-logs/product-buyer-logs.component.ts");





var routes = [
    { path: '', component: _product_buyer_logs_component__WEBPACK_IMPORTED_MODULE_4__["ProductBuyerLogsComponent"] }
];
var ProductBuyerLogsRoutingModule = /** @class */ (function () {
    function ProductBuyerLogsRoutingModule() {
    }
    ProductBuyerLogsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProductBuyerLogsRoutingModule);
    return ProductBuyerLogsRoutingModule;
}());



/***/ }),

/***/ "./src/app/product-buyer-logs/product-buyer-logs.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/product-buyer-logs/product-buyer-logs.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtYnV5ZXItbG9ncy9wcm9kdWN0LWJ1eWVyLWxvZ3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/product-buyer-logs/product-buyer-logs.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/product-buyer-logs/product-buyer-logs.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row style=\"margin-top: 25px;\">\r\n  <div nz-row style=\"margin-top: 50px;\">\r\n    <div nz-col nzSpan=\"24\">\r\n      <nz-table #basicTable nzShowPagination=\"false\" [nzLoading]=\"isloading\" nzLoadingDelay=\"1\"\r\n        [nzData]=\"totalLogs\" style=\"background: #FFF;margin:30px 0px;\">\r\n        <thead>\r\n          <tr>\r\n            <th>S.No</th>\r\n            <th>Product Name</th>\r\n            <th>Total Amount Paid</th>\r\n            <th>Date & Time</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <ng-container *ngFor=\"let data of totalLogs;let i=index\">\r\n            <tr>\r\n              <td>{{skip+i+1}}</td>\r\n              <td>{{data.Cart_Information.C_Product_Name}}</td>\r\n              <td>{{data.Cart_Final_Price}}</td>\r\n              <td>{{data.created_at | date:'medium'}}</td>\r\n            </tr>\r\n          </ng-container>\r\n        </tbody>\r\n      </nz-table>\r\n      <nz-pagination (nzPageIndexChange)=\"onNextPage($event)\" [nzPageSize]=\"limit\" [nzPageIndex]=\"currentPage\"\r\n        [nzTotal]=\"totalItem\"></nz-pagination>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/product-buyer-logs/product-buyer-logs.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/product-buyer-logs/product-buyer-logs.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductBuyerLogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductBuyerLogsComponent", function() { return ProductBuyerLogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");




var ProductBuyerLogsComponent = /** @class */ (function () {
    function ProductBuyerLogsComponent(_appService, nzMessageService) {
        this._appService = _appService;
        this.nzMessageService = nzMessageService;
        this.skip = 0;
        this.limit = this._appService.limit;
        this.currentPage = 1;
        this.totalLogs = [];
    }
    ProductBuyerLogsComponent.prototype.ngOnInit = function () {
        this.getBuyerLogs();
    };
    ProductBuyerLogsComponent.prototype.getBuyerLogs = function () {
        var _this = this;
        this.isloading = true;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var userdata = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            skip: this.skip,
            limit: this.limit
        };
        try {
            this._appService.postMethod('Buyer_Purchase_Logs', userdata)
                .subscribe(function (resp) {
                _this.isloading = false;
                if (resp.success) {
                    if (_this.skip == 0) {
                        _this.currentPage = 1;
                    }
                    _this.totalItem = resp.extras.Count;
                    _this.totalLogs = resp.extras.Data;
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
    ProductBuyerLogsComponent.prototype.onNextPage = function (event) {
        this.currentPage = this.currentPage;
        this.skip = (event - 1) * this.limit;
        this.getBuyerLogs();
    };
    ProductBuyerLogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-buyer-logs',
            template: __webpack_require__(/*! ./product-buyer-logs.component.html */ "./src/app/product-buyer-logs/product-buyer-logs.component.html"),
            styles: [__webpack_require__(/*! ./product-buyer-logs.component.css */ "./src/app/product-buyer-logs/product-buyer-logs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]])
    ], ProductBuyerLogsComponent);
    return ProductBuyerLogsComponent;
}());



/***/ }),

/***/ "./src/app/product-buyer-logs/product-buyer-logs.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/product-buyer-logs/product-buyer-logs.module.ts ***!
  \*****************************************************************/
/*! exports provided: ProductBuyerLogsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductBuyerLogsModule", function() { return ProductBuyerLogsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _product_buyer_logs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-buyer-logs.component */ "./src/app/product-buyer-logs/product-buyer-logs.component.ts");
/* harmony import */ var _product_buyer_logs_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-buyer-logs-routing.module */ "./src/app/product-buyer-logs/product-buyer-logs-routing.module.ts");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var ProductBuyerLogsModule = /** @class */ (function () {
    function ProductBuyerLogsModule() {
    }
    ProductBuyerLogsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _product_buyer_logs_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProductBuyerLogsRoutingModule"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            declarations: [_product_buyer_logs_component__WEBPACK_IMPORTED_MODULE_3__["ProductBuyerLogsComponent"]]
        })
    ], ProductBuyerLogsModule);
    return ProductBuyerLogsModule;
}());



/***/ })

}]);
//# sourceMappingURL=product-buyer-logs-product-buyer-logs-module.js.map