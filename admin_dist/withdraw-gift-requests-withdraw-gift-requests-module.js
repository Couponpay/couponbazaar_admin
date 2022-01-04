(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["withdraw-gift-requests-withdraw-gift-requests-module"],{

/***/ "./src/app/withdraw-gift-requests/withdraw-gift-requests-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/withdraw-gift-requests/withdraw-gift-requests-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: WithdrawGiftRequestsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawGiftRequestsRoutingModule", function() { return WithdrawGiftRequestsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _withdraw_gift_requests_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./withdraw-gift-requests.component */ "./src/app/withdraw-gift-requests/withdraw-gift-requests.component.ts");





var routes = [
    { path: '', component: _withdraw_gift_requests_component__WEBPACK_IMPORTED_MODULE_4__["WithdrawGiftRequestsComponent"] }
];
var WithdrawGiftRequestsRoutingModule = /** @class */ (function () {
    function WithdrawGiftRequestsRoutingModule() {
    }
    WithdrawGiftRequestsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], WithdrawGiftRequestsRoutingModule);
    return WithdrawGiftRequestsRoutingModule;
}());



/***/ }),

/***/ "./src/app/withdraw-gift-requests/withdraw-gift-requests.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/withdraw-gift-requests/withdraw-gift-requests.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpdGhkcmF3LWdpZnQtcmVxdWVzdHMvd2l0aGRyYXctZ2lmdC1yZXF1ZXN0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/withdraw-gift-requests/withdraw-gift-requests.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/withdraw-gift-requests/withdraw-gift-requests.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row style=\"margin-top: 25px;\">\r\n  <div nz-row style=\"margin-top: 50px;\">\r\n    <div nz-col nzSpan=\"24\">\r\n      <nz-table #basicTable nzShowPagination=\"false\" [nzLoading]=\"isloading\" nzLoadingDelay=\"1\"\r\n        [nzData]=\"totalLogs\" style=\"background: #FFF;margin:30px 0px;\">\r\n        <thead>\r\n          <tr>\r\n            <th>S.No</th>\r\n            <th>Title</th>\r\n            <th>Amount</th>\r\n            <th>Date & Time</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <ng-container *ngFor=\"let data of totalLogs;let i=index\">\r\n            <tr>\r\n              <td>{{skip+i+1}}</td>\r\n              <td>{{data.Data.GiftMeterData.Title_Name}}</td>\r\n              <td>{{data.Amount}}</td>\r\n              <td>{{data.Time | date:'medium'}}</td>\r\n            </tr>\r\n          </ng-container>\r\n        </tbody>\r\n      </nz-table>\r\n      <nz-pagination (nzPageIndexChange)=\"onNextPage($event)\" [nzPageSize]=\"limit\" [nzPageIndex]=\"currentPage\"\r\n        [nzTotal]=\"totalItem\"></nz-pagination>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/withdraw-gift-requests/withdraw-gift-requests.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/withdraw-gift-requests/withdraw-gift-requests.component.ts ***!
  \****************************************************************************/
/*! exports provided: WithdrawGiftRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawGiftRequestsComponent", function() { return WithdrawGiftRequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");




var WithdrawGiftRequestsComponent = /** @class */ (function () {
    function WithdrawGiftRequestsComponent(_appService, nzMessageService) {
        this._appService = _appService;
        this.nzMessageService = nzMessageService;
        this.skip = 0;
        this.limit = this._appService.limit;
        this.currentPage = 1;
        this.totalLogs = [];
    }
    WithdrawGiftRequestsComponent.prototype.ngOnInit = function () {
        this.getTotalRequests();
    };
    WithdrawGiftRequestsComponent.prototype.getTotalRequests = function () {
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
            this._appService.postMethod('List_With_Draw_Gift_Amount_Requests', userdata)
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
    WithdrawGiftRequestsComponent.prototype.onNextPage = function (event) {
        this.currentPage = this.currentPage;
        this.skip = (event - 1) * this.limit;
        this.getTotalRequests();
    };
    WithdrawGiftRequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-withdraw-gift-requests',
            template: __webpack_require__(/*! ./withdraw-gift-requests.component.html */ "./src/app/withdraw-gift-requests/withdraw-gift-requests.component.html"),
            styles: [__webpack_require__(/*! ./withdraw-gift-requests.component.css */ "./src/app/withdraw-gift-requests/withdraw-gift-requests.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]])
    ], WithdrawGiftRequestsComponent);
    return WithdrawGiftRequestsComponent;
}());



/***/ }),

/***/ "./src/app/withdraw-gift-requests/withdraw-gift-requests.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/withdraw-gift-requests/withdraw-gift-requests.module.ts ***!
  \*************************************************************************/
/*! exports provided: WithdrawGiftRequestsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawGiftRequestsModule", function() { return WithdrawGiftRequestsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _withdraw_gift_requests_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withdraw-gift-requests.component */ "./src/app/withdraw-gift-requests/withdraw-gift-requests.component.ts");
/* harmony import */ var _withdraw_gift_requests_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./withdraw-gift-requests-routing.module */ "./src/app/withdraw-gift-requests/withdraw-gift-requests-routing.module.ts");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var WithdrawGiftRequestsModule = /** @class */ (function () {
    function WithdrawGiftRequestsModule() {
    }
    WithdrawGiftRequestsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _withdraw_gift_requests_routing_module__WEBPACK_IMPORTED_MODULE_4__["WithdrawGiftRequestsRoutingModule"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            declarations: [_withdraw_gift_requests_component__WEBPACK_IMPORTED_MODULE_3__["WithdrawGiftRequestsComponent"]]
        })
    ], WithdrawGiftRequestsModule);
    return WithdrawGiftRequestsModule;
}());



/***/ })

}]);
//# sourceMappingURL=withdraw-gift-requests-withdraw-gift-requests-module.js.map