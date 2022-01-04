(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["introducer-introducer-logs-introducer-logs-module"],{

/***/ "./src/app/introducer/introducer-logs/introducer-logs.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/introducer/introducer-logs/introducer-logs.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ant-row{\r\n    margin-bottom: 7px;\r\n}\r\n.logtable {\r\n    background-color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm9kdWNlci9pbnRyb2R1Y2VyLWxvZ3MvaW50cm9kdWNlci1sb2dzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2ludHJvZHVjZXIvaW50cm9kdWNlci1sb2dzL2ludHJvZHVjZXItbG9ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFudC1yb3d7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbn1cclxuLmxvZ3RhYmxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/introducer/introducer-logs/introducer-logs.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/introducer/introducer-logs/introducer-logs.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row>\r\n    <div nz-col nzSpan=\"24\">\r\n      <a [routerLink]=\"[ '/dashboard','introducer']\">Back</a>\r\n    </div>\r\n  </div>\r\n  <div nz-row>\r\n      <div nz-col nzSpan=\"12\" nzOffset=\"6\">\r\n        <nz-card style=\"margin-bottom: 10px;\" nzTitle=\"Introducer Name : {{introducerName}}\">\r\n            <nz-table nzNoResult=\"   \">\r\n               \r\n                <tbody>\r\n                  <tr>\r\n                    <th>Available Amount:</th>\r\n                    <td style=\"border-bottom: none;\">{{avilableAmout | number}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                      <th>Withdrawn Amount</th>\r\n                      <td style=\"border-bottom: none;\">{{withdrwanAmount| number}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th>Total Amount</th>\r\n                        <td style=\"border-bottom: none;\">{{totalAmount| number}}</td>\r\n                      </tr>\r\n                </tbody>\r\n              </nz-table>\r\n          \r\n         \r\n          \r\n        \r\n        </nz-card>\r\n      </div>\r\n    </div>\r\n\r\n \r\n    <nz-card>\r\n      <nz-list [nzDataSource]=\"intoroducerLogs\" [nzLoading]=\"isLoadingLogs\"\r\n       [nzRenderItem]=\"conar\" [nzItemLayout]=\"'horizontal'\">\r\n        <ng-template #conar let-item>\r\n          <ng-container *ngIf=\"item.Type==1\">\r\n            <nz-list-item [nzContent]=\"desc\">\r\n              <nz-list-item-meta [nzTitle]=\"title\" nzAvatar=\" \" [nzDescription]=\"content\">\r\n              </nz-list-item-meta>\r\n              <ng-template #title>\r\n                <span style=\"    color: #00897b;\">Amount Credited For Shop billings</span>\r\n              </ng-template>\r\n              <ng-template #desc>\r\n                <a style=\"margin-right: 30%\">{{item.Amount | number}} Inr (C)</a> {{item.Time | date:'medium'}}\r\n              </ng-template>\r\n              <ng-template #content>\r\n                <b>{{introducerName}}</b>&nbsp; got {{item.Amount | number}} Inr for {{item.Data.Shop_Name}}'s Bill.\r\n                {{item.Data.Buyer_Name}} Purchased {{item.Data.ProductData.Product_Name}} -{{item.Data.ProductData.Product_Quantity}} and each {{item.Data.ProductData.Product_Name}} price is {{item.Data.ProductData.Product_Price}}.\r\n              </ng-template>\r\n            </nz-list-item>\r\n          </ng-container>\r\n          </ng-template>\r\n          </nz-list>\r\n          </nz-card>\r\n        \r\n\r\n\r\n\r\n \r\n    <nz-pagination (nzPageIndexChange)=\"onNextPage($event)\"  [nzPageSize]=\"limit\" [nzPageIndex]=\"currentPage\"  [nzTotal]=\"totalItem\"></nz-pagination>"

/***/ }),

/***/ "./src/app/introducer/introducer-logs/introducer-logs.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/introducer/introducer-logs/introducer-logs.component.ts ***!
  \*************************************************************************/
/*! exports provided: IntroducerLogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroducerLogsComponent", function() { return IntroducerLogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var IntroducerLogsComponent = /** @class */ (function () {
    function IntroducerLogsComponent(route, _appService, nzMessageService) {
        this.route = route;
        this._appService = _appService;
        this.nzMessageService = nzMessageService;
        this.intoroducerLogs = [];
        this.limit = this._appService.limit;
        this.currentPage = 1;
    }
    IntroducerLogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            _this.introducerId = params.id;
            _this.introducerName = params.name;
            _this.avilableAmout = params.avilableAmount;
            _this.withdrwanAmount = params.withdrwanAmount;
            _this.totalAmount = params.totalAmount;
            _this.getLogsByintroducer(_this.introducerId, 0);
        });
    };
    IntroducerLogsComponent.prototype.getLogsByintroducer = function (IntroducerID, skip) {
        var _this = this;
        this.isLoadingLogs = true;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            IntroducerID: IntroducerID,
            skip: skip,
            limit: this._appService.limit
        };
        try {
            this._appService.postMethod('List_All_Introducer_Share_Logs', body)
                .subscribe(function (resp) {
                _this.isLoadingLogs = false;
                if (resp.success) {
                    _this.totalItem = resp.extras.Count;
                    if (skip == 0) {
                        _this.currentPage = 1;
                    }
                    _this.intoroducerLogs = resp.extras.Data;
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
    IntroducerLogsComponent.prototype.onNextPage = function (event) {
        this.currentPage = this.currentPage;
        var skip = (event - 1) * this._appService.limit;
        this.getLogsByintroducer(this.introducerId, skip);
    };
    IntroducerLogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-introducer-logs',
            template: __webpack_require__(/*! ./introducer-logs.component.html */ "./src/app/introducer/introducer-logs/introducer-logs.component.html"),
            styles: [__webpack_require__(/*! ./introducer-logs.component.css */ "./src/app/introducer/introducer-logs/introducer-logs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], IntroducerLogsComponent);
    return IntroducerLogsComponent;
}());



/***/ }),

/***/ "./src/app/introducer/introducer-logs/introducer-logs.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/introducer/introducer-logs/introducer-logs.module.ts ***!
  \**********************************************************************/
/*! exports provided: IntroducerLogsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroducerLogsModule", function() { return IntroducerLogsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _introducer_logs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./introducer-logs.component */ "./src/app/introducer/introducer-logs/introducer-logs.component.ts");
/* harmony import */ var _introducer_logs_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./introducer-logs.routing */ "./src/app/introducer/introducer-logs/introducer-logs.routing.ts");







var IntroducerLogsModule = /** @class */ (function () {
    function IntroducerLogsModule() {
    }
    IntroducerLogsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _introducer_logs_routing__WEBPACK_IMPORTED_MODULE_6__["IntroducerLogsRoutes"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
            ],
            declarations: [_introducer_logs_component__WEBPACK_IMPORTED_MODULE_5__["IntroducerLogsComponent"]]
        })
    ], IntroducerLogsModule);
    return IntroducerLogsModule;
}());



/***/ }),

/***/ "./src/app/introducer/introducer-logs/introducer-logs.routing.ts":
/*!***********************************************************************!*\
  !*** ./src/app/introducer/introducer-logs/introducer-logs.routing.ts ***!
  \***********************************************************************/
/*! exports provided: IntroducerLogsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroducerLogsRoutes", function() { return IntroducerLogsRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _introducer_logs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./introducer-logs.component */ "./src/app/introducer/introducer-logs/introducer-logs.component.ts");


var routes = [
    { path: '', component: _introducer_logs_component__WEBPACK_IMPORTED_MODULE_1__["IntroducerLogsComponent"] },
];
var IntroducerLogsRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=introducer-introducer-logs-introducer-logs-module.js.map