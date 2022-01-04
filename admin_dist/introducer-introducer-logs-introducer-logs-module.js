(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["introducer-introducer-logs-introducer-logs-module"],{

/***/ "./src/app/introducer/introducer-logs/introducer-logs.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/introducer/introducer-logs/introducer-logs.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ant-row{\n    margin-bottom: 7px;\n}\n.logtable {\n    background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm9kdWNlci9pbnRyb2R1Y2VyLWxvZ3MvaW50cm9kdWNlci1sb2dzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2ludHJvZHVjZXIvaW50cm9kdWNlci1sb2dzL2ludHJvZHVjZXItbG9ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFudC1yb3d7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuLmxvZ3RhYmxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/introducer/introducer-logs/introducer-logs.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/introducer/introducer-logs/introducer-logs.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row>\n    <div nz-col nzSpan=\"24\">\n      <a [routerLink]=\"[ '/dashboard','introducer']\">Back</a>\n    </div>\n  </div>\n  <div nz-row>\n      <div nz-col nzSpan=\"12\" nzOffset=\"6\">\n        <nz-card style=\"margin-bottom: 10px;\" nzTitle=\"Introducer Name : {{introducerName}}\">\n            <nz-table nzNoResult=\"   \">\n               \n                <tbody>\n                  <tr>\n                    <th>Available Amount:</th>\n                    <td style=\"border-bottom: none;\">{{avilableAmout | number}}</td>\n                  </tr>\n                  <tr>\n                      <th>Withdrawn Amount</th>\n                      <td style=\"border-bottom: none;\">{{withdrwanAmount| number}}</td>\n                    </tr>\n                    <tr>\n                        <th>Total Amount</th>\n                        <td style=\"border-bottom: none;\">{{totalAmount| number}}</td>\n                      </tr>\n                </tbody>\n              </nz-table>\n          \n         \n          \n        \n        </nz-card>\n      </div>\n    </div>\n\n \n    <nz-card>\n      <nz-list [nzDataSource]=\"intoroducerLogs\" [nzLoading]=\"isLoadingLogs\"\n       [nzRenderItem]=\"conar\" [nzItemLayout]=\"'horizontal'\">\n        <ng-template #conar let-item>\n          <ng-container *ngIf=\"item.Type==1\">\n            <nz-list-item [nzContent]=\"desc\">\n              <nz-list-item-meta [nzTitle]=\"title\" nzAvatar=\" \" [nzDescription]=\"content\">\n              </nz-list-item-meta>\n              <ng-template #title>\n                <span style=\"    color: #00897b;\">Amount Credited For Shop billings</span>\n              </ng-template>\n              <ng-template #desc>\n                <a style=\"margin-right: 30%\">{{item.Amount | number}} Inr (C)</a> {{item.Time | date:'medium'}}\n              </ng-template>\n              <ng-template #content>\n                <b>{{introducerName}}</b>&nbsp; got {{item.Amount | number}} Inr for {{item.Data.Shop_Name}}'s Bill.\n                {{item.Data.Buyer_Name}} Purchased {{item.Data.ProductData.Product_Name}} -{{item.Data.ProductData.Product_Quantity}} and each {{item.Data.ProductData.Product_Name}} price is {{item.Data.ProductData.Product_Price}}.\n              </ng-template>\n            </nz-list-item>\n          </ng-container>\n          </ng-template>\n          </nz-list>\n          </nz-card>\n        \n\n\n\n \n    <nz-pagination (nzPageIndexChange)=\"onNextPage($event)\"  [nzPageSize]=\"limit\" [nzPageIndex]=\"currentPage\"  [nzTotal]=\"totalItem\"></nz-pagination>"

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