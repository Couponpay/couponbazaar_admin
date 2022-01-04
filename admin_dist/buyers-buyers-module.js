(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buyers-buyers-module"],{

/***/ "./src/app/buyers/buyers.component.css":
/*!*********************************************!*\
  !*** ./src/app/buyers/buyers.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1eWVycy9idXllcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/buyers/buyers.component.html":
/*!**********************************************!*\
  !*** ./src/app/buyers/buyers.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div nz-row>\n    <div nz-col nzSpan=\"24\" >\n        <nz-table #basicTable \n        nzShowPagination=\"false\"\n        [nzData]=\"buyersList\">\n            <thead>\n              <tr>\n                <th>Buyer Name</th>\n                <th>Buyer Phone Number</th>\n                <th>Available Amount</th>\n                <th>Withdrawn Amount</th>\n                <th>Total Amount</th>\n                <th>Created Date</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let data of buyersList\">\n                <td>{{data.Buyer_Name}}</td>\n                <td>{{data.Buyer_CountryCode}}{{data.Buyer_PhoneNumber}}</td>\n                <td>{{data.Available_Amount| number}}</td>\n                <td>{{data.Withdrawn_Amount| number}}</td>\n                <td>{{data.Total_Amount| number}}</td>\n                <td>{{data.created_at | date }}</td>\n                <td>\n                    <nz-dropdown>\n                        <button nz-button nz-dropdown><span>Actions</span> <i nz-icon type=\"down\"></i></button>\n                        <ul nz-menu>\n                          <li nz-menu-item>\n                              <a skipLocationChange \n                              [routerLink]=\"['/dashboard','buyersLogs',\n                              data.BuyerID,\n                              data.Buyer_Name,\n                              data.Available_Amount,\n                              data.Withdrawn_Amount,\n                              data.Total_Amount]\" \n                              routerLinkActive=\"router-link-active\" >Logs</a>\n                          </li>\n                          <li nz-menu-item>\n                            <a skipLocationChange \n                            [routerLink]=\"[ '/dashboard','buyersbills',\n                            data.BuyerID,data.Buyer_Name]\"  \n                            >View Bills</a>\n                          </li>\n                        </ul>\n                      </nz-dropdown>\n                  \n                  \n                 </td>\n              </tr>\n            </tbody>\n          </nz-table>\n    </div>\n  </div>\n  <nz-pagination (nzPageIndexChange)=\"onNextPage($event)\" [nzPageSize]=\"limit\" [nzPageIndex]=\"currentPage\"  [nzTotal]=\"totalItem\"></nz-pagination>\n  "

/***/ }),

/***/ "./src/app/buyers/buyers.component.ts":
/*!********************************************!*\
  !*** ./src/app/buyers/buyers.component.ts ***!
  \********************************************/
/*! exports provided: BuyersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyersComponent", function() { return BuyersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var BuyersComponent = /** @class */ (function () {
    function BuyersComponent(_appService, router, nzMessageService) {
        this._appService = _appService;
        this.router = router;
        this.nzMessageService = nzMessageService;
        this.buyersList = [];
        this.limit = this._appService.limit;
        this.currentPage = 1;
    }
    BuyersComponent.prototype.ngOnInit = function () {
        this.ViewBuyersList(0);
    };
    BuyersComponent.prototype.ViewBuyersList = function (skip) {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            skip: skip,
            limit: this._appService.limit
        };
        try {
            this._appService.postMethod('List_All_Buyers', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.totalItem = resp.extras.Count;
                    if (skip == 0) {
                        _this.currentPage = 1;
                    }
                    _this.buyersList = resp.extras.Data;
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
    BuyersComponent.prototype.onNextPage = function (event) {
        this.currentPage = this.currentPage;
        var skip = (event - 1) * this._appService.limit;
        this.ViewBuyersList(skip);
    };
    BuyersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buyers',
            template: __webpack_require__(/*! ./buyers.component.html */ "./src/app/buyers/buyers.component.html"),
            styles: [__webpack_require__(/*! ./buyers.component.css */ "./src/app/buyers/buyers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], BuyersComponent);
    return BuyersComponent;
}());



/***/ }),

/***/ "./src/app/buyers/buyers.module.ts":
/*!*****************************************!*\
  !*** ./src/app/buyers/buyers.module.ts ***!
  \*****************************************/
/*! exports provided: BuyersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyersModule", function() { return BuyersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _buyers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buyers.component */ "./src/app/buyers/buyers.component.ts");
/* harmony import */ var _buyers_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buyers.routing */ "./src/app/buyers/buyers.routing.ts");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared.modue */ "./src/app/shared.modue.ts");







var BuyersModule = /** @class */ (function () {
    function BuyersModule() {
    }
    BuyersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _buyers_routing__WEBPACK_IMPORTED_MODULE_5__["BuyersRoutes"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
            ],
            declarations: [_buyers_component__WEBPACK_IMPORTED_MODULE_4__["BuyersComponent"]]
        })
    ], BuyersModule);
    return BuyersModule;
}());



/***/ }),

/***/ "./src/app/buyers/buyers.routing.ts":
/*!******************************************!*\
  !*** ./src/app/buyers/buyers.routing.ts ***!
  \******************************************/
/*! exports provided: BuyersRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyersRoutes", function() { return BuyersRoutes; });
/* harmony import */ var _buyers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buyers.component */ "./src/app/buyers/buyers.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


var routes = [
    { path: '', component: _buyers_component__WEBPACK_IMPORTED_MODULE_0__["BuyersComponent"] },
];
var BuyersRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=buyers-buyers-module.js.map