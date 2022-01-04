(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["introducer-introducer-module"],{

/***/ "./src/app/introducer/introducer.component.css":
/*!*****************************************************!*\
  !*** ./src/app/introducer/introducer.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludHJvZHVjZXIvaW50cm9kdWNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/introducer/introducer.component.html":
/*!******************************************************!*\
  !*** ./src/app/introducer/introducer.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row>\r\n  <div nz-col nzSpan=\"24\" >\r\n      <nz-table #basicTable \r\n      nzShowPagination=\"false\"\r\n      [nzData]=\"IntoducersList\">\r\n          <thead>\r\n            <tr>\r\n              <th>Introducer Name</th>\r\n              <th>Introducer PhoneNumber</th>\r\n              <th>Available Amount</th>\r\n              <th>Withdrawn Amount</th>\r\n              <th>Total Amount</th>\r\n              <th>created Date</th>\r\n              <th></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let data of IntoducersList\">\r\n              <td>{{data.Introducer_Name}}</td>\r\n              <td>{{data.Introducer_CountryCode}}{{data.Introducer_PhoneNumber}}</td>\r\n              <td>{{data.Available_Amount| number}}</td>\r\n              <td>{{data.Withdrawn_Amount| number}}</td>\r\n              <td>{{data.Total_Amount| number}}</td>\r\n              <td>{{data.created_at | date }}</td>\r\n              <td><a skipLocationChange \r\n                [routerLink]=\"['/dashboard','introducerlogs',\r\n                data.IntroducerID,\r\n                data.Introducer_Name,\r\n                data.Available_Amount,\r\n                data.Withdrawn_Amount,\r\n                data.Total_Amount]\" \r\n                routerLinkActive=\"router-link-active\" >Logs</a></td>\r\n            </tr>\r\n          </tbody>\r\n        </nz-table>\r\n  </div>\r\n</div>\r\n<nz-pagination (nzPageIndexChange)=\"onNextPage($event)\" [nzPageSize]=\"limit\" [nzPageIndex]=\"currentPage\" [nzTotal]=\"totalItem\"></nz-pagination>\r\n"

/***/ }),

/***/ "./src/app/introducer/introducer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/introducer/introducer.component.ts ***!
  \****************************************************/
/*! exports provided: IntroducerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroducerComponent", function() { return IntroducerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var IntroducerComponent = /** @class */ (function () {
    function IntroducerComponent(_appService, router, nzMessageService) {
        this._appService = _appService;
        this.router = router;
        this.nzMessageService = nzMessageService;
        this.IntoducersList = [];
        this.limit = this._appService.limit;
        this.currentPage = 1;
    }
    IntroducerComponent.prototype.ngOnInit = function () {
        this.ViewIntroducers(0);
    };
    IntroducerComponent.prototype.ViewIntroducers = function (skip) {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            skip: skip,
            limit: this._appService.limit
        };
        try {
            this._appService.postMethod('List_All_Introducers', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.totalItem = resp.extras.Count;
                    if (skip == 0) {
                        _this.currentPage = 1;
                    }
                    _this.IntoducersList = resp.extras.Data;
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
    IntroducerComponent.prototype.onNextPage = function (event) {
        this.currentPage = event;
        var skip = (event - 1) * this._appService.limit;
        this.ViewIntroducers(skip);
    };
    IntroducerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-introducer',
            template: __webpack_require__(/*! ./introducer.component.html */ "./src/app/introducer/introducer.component.html"),
            styles: [__webpack_require__(/*! ./introducer.component.css */ "./src/app/introducer/introducer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], IntroducerComponent);
    return IntroducerComponent;
}());



/***/ }),

/***/ "./src/app/introducer/introducer.module.ts":
/*!*************************************************!*\
  !*** ./src/app/introducer/introducer.module.ts ***!
  \*************************************************/
/*! exports provided: IntroducerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroducerModule", function() { return IntroducerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _introducer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./introducer.component */ "./src/app/introducer/introducer.component.ts");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _introducer_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./introducer.routing */ "./src/app/introducer/introducer.routing.ts");






var IntroducerModule = /** @class */ (function () {
    function IntroducerModule() {
    }
    IntroducerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _introducer_routing__WEBPACK_IMPORTED_MODULE_5__["IntroducerRoutes"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_introducer_component__WEBPACK_IMPORTED_MODULE_3__["IntroducerComponent"]]
        })
    ], IntroducerModule);
    return IntroducerModule;
}());



/***/ }),

/***/ "./src/app/introducer/introducer.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/introducer/introducer.routing.ts ***!
  \**************************************************/
/*! exports provided: IntroducerRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroducerRoutes", function() { return IntroducerRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _introducer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./introducer.component */ "./src/app/introducer/introducer.component.ts");


var routes = [
    { path: '', component: _introducer_component__WEBPACK_IMPORTED_MODULE_1__["IntroducerComponent"] },
];
var IntroducerRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=introducer-introducer-module.js.map