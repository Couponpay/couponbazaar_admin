(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["companyLogs-companyLogs-module"],{

/***/ "./src/app/companyLogs/companyLogs.component.css":
/*!*******************************************************!*\
  !*** ./src/app/companyLogs/companyLogs.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ant-row{\n    margin-bottom: 7px;\n}\n.logtable {\n    background-color: white;\n}\na{\n    color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFueUxvZ3MvY29tcGFueUxvZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcGFueUxvZ3MvY29tcGFueUxvZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbnQtcm93e1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbn1cbi5sb2d0YWJsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5he1xuICAgIGNvbG9yOiBncmVlbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/companyLogs/companyLogs.component.html":
/*!********************************************************!*\
  !*** ./src/app/companyLogs/companyLogs.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nz-card style=\"margin-bottom: 10px;\" nzTitle=\"Amount Details\">\n    <div nz-row>\n      <div nz-col nzSpan=\"6\">\n          Available Amount:{{companyShareData.Available_Amount| number}}\n      </div>\n      <div nz-col nzSpan=\"6\">\n          Withdrawn Amount:{{companyShareData.Withdrawn_Amount| number}}\n      </div>\n      \n      <div nz-col nzSpan=\"6\">\n        Total Amount:{{companyShareData.Total_Amount| number}}\n      </div>\n    </div>\n  \n  </nz-card>\n\n\n<nz-card>\n    <nz-list [nzDataSource]=\"companyLogs\"\n    [nzLoading]=\"isLoadingLogs\"\n     [nzRenderItem]=\"conar\" [nzItemLayout]=\"'horizontal'\" >\n        <ng-template #conar let-item >\n          <ng-container *ngIf=\"item.Type==1\">\n              <nz-list-item \n              [nzContent]=\"desc\">\n              \n                  <nz-list-item-meta \n                    [nzTitle]=\"title\" \n                    nzAvatar=\" \"\n                    \n                    [nzDescription]=\"content\"\n                    >\n                  </nz-list-item-meta>\n                  <ng-template #title>\n                      <span style=\"    color: #00897b;\">Amount Credited For Shop's Bill</span>\n                    </ng-template>\n                  <ng-template #desc>\n                      <a style=\"margin-right: 30%\">{{item.Amount | number}} Inr (C)</a> {{item.Time | date:'medium'}}\n                    </ng-template>\n                    \n                  \n                    <ng-template #content style=\"color:orangered\">\n                     <b>{{item.Data.Buyer_Name}}</b>&nbsp;purchased {{item.Data.ProductData.Product_Name}} X {{item.Data.ProductData.Product_Quantity}} at <b>{{item.Data.Shop_Name}}</b> .Bill Amount is {{item.Data.ProductData.Product_Sub_Total | number}} Rs.\n                      </ng-template>\n                </nz-list-item>\n          </ng-container>\n          <ng-container *ngIf=\"item.Type==3\">\n              <nz-list-item \n              [nzContent]=\"desc\"\n              >\n              <nz-list-item-meta \n                    [nzTitle]=\"title\"\n                    nzAvatar=\" \"\n                    \n                    [nzDescription]=\"content\"\n                    >\n                  </nz-list-item-meta>\n                  <ng-template #title>\n                    <span     style=\"color: #00897b;\">Amount Credited For Buyer's Offer Expired</span>\n                  </ng-template>\n                  \n                  <ng-template #desc>\n                    \n                      <a style=\"margin-right: 30%\">{{item.Amount | number}} Inr (C)</a> {{item.Time | date:'medium'}}\n                    </ng-template>\n                    \n                  \n                    <ng-template #content>\n                     <b>{{item.Buyer_Name}}</b>&nbsp;missed the Offer and offer worth is {{item.Buyer_Deduction_Amount}}\n                      </ng-template>\n                </nz-list-item>\n          </ng-container>\n          <ng-container *ngIf=\"item.Type==2\">\n              <nz-list-item \n              [nzContent]=\"desc\"\n              >\n              \n                  <nz-list-item-meta \n                    [nzTitle]=\"title\"\n                    nzAvatar=\" \"\n                    \n                    [nzDescription]=\"content\"\n                    >\n                  </nz-list-item-meta>\n                  <ng-template #title>\n                      <span  style=\"color: #00897b;\"   >Amount Credited For No Buyer's Hierarchy</span>\n                    </ng-template>\n                  <ng-template #desc>\n                      <a style=\"margin-right: 30%\">{{item.Amount| number}} Inr (C)</a> {{item.Time | date:'medium'}}\n                    </ng-template>\n                    \n                  \n                    <ng-template #content>\n                     <b>{{item.Data.Buyer_Name}}</b>&nbsp;Purchased {{item.Data.ProductData.Product_Name}} X {{item.Data.ProductData.Product_Quantity}} and Bill is {{item.Data.ProductData.Product_Sub_Total}}.Due to no Hierarchy {{item.Amount| number}} Rs Credited\n                      </ng-template>\n                </nz-list-item>\n          </ng-container>\n          \n        </ng-template>\n      \n      </nz-list>\n</nz-card>\n\n<nz-pagination (nzPageIndexChange)=\"onNextPage($event)\" [nzPageSize]=\"limit\" [nzPageIndex]=\"currentPage\" [nzTotal]=\"totalItem\"></nz-pagination>"

/***/ }),

/***/ "./src/app/companyLogs/companyLogs.component.ts":
/*!******************************************************!*\
  !*** ./src/app/companyLogs/companyLogs.component.ts ***!
  \******************************************************/
/*! exports provided: CompanyLogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyLogsComponent", function() { return CompanyLogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var CompanyLogsComponent = /** @class */ (function () {
    function CompanyLogsComponent(route, _appService, nzMessageService) {
        this.route = route;
        this._appService = _appService;
        this.nzMessageService = nzMessageService;
        this.companyShareData = [];
        this.limit = this._appService.limit;
        this.currentPage = 1;
    }
    CompanyLogsComponent.prototype.ngOnInit = function () {
        this.getLogsBycompany(0);
    };
    CompanyLogsComponent.prototype.getLogsBycompany = function (skip) {
        var _this = this;
        this.isLoadingLogs = true;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            skip: skip,
            limit: this._appService.limit
        };
        try {
            this._appService.postMethod('Company_Share_Information_and_Logs', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.isLoadingLogs = false;
                    _this.totalItem = resp.extras.Count;
                    _this.companyLogs = resp.extras.Data;
                    if (skip == 0) {
                        _this.currentPage = 1;
                    }
                    _this.companyShareData = resp.extras.Company_Share_Data;
                    // this.shopName = this.productsOfshop[0].Shop_Name
                }
                else {
                    _this.isLoadingLogs = false;
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                }
            }, function (error) {
            });
        }
        catch (e) {
        }
    };
    CompanyLogsComponent.prototype.onNextPage = function (event) {
        this.currentPage = this.currentPage;
        var skip = (event - 1) * this._appService.limit;
        this.getLogsBycompany(skip);
    };
    CompanyLogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-companyLogs',
            template: __webpack_require__(/*! ./companyLogs.component.html */ "./src/app/companyLogs/companyLogs.component.html"),
            styles: [__webpack_require__(/*! ./companyLogs.component.css */ "./src/app/companyLogs/companyLogs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], CompanyLogsComponent);
    return CompanyLogsComponent;
}());



/***/ }),

/***/ "./src/app/companyLogs/companyLogs.module.ts":
/*!***************************************************!*\
  !*** ./src/app/companyLogs/companyLogs.module.ts ***!
  \***************************************************/
/*! exports provided: CompanyLogsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyLogsModule", function() { return CompanyLogsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _companyLogs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./companyLogs.component */ "./src/app/companyLogs/companyLogs.component.ts");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _companyLogs_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./companyLogs.routing */ "./src/app/companyLogs/companyLogs.routing.ts");







var CompanyLogsModule = /** @class */ (function () {
    function CompanyLogsModule() {
    }
    CompanyLogsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _companyLogs_routing__WEBPACK_IMPORTED_MODULE_6__["CompanyLogsRoutes"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
            ],
            declarations: [_companyLogs_component__WEBPACK_IMPORTED_MODULE_4__["CompanyLogsComponent"]]
        })
    ], CompanyLogsModule);
    return CompanyLogsModule;
}());



/***/ }),

/***/ "./src/app/companyLogs/companyLogs.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/companyLogs/companyLogs.routing.ts ***!
  \****************************************************/
/*! exports provided: CompanyLogsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyLogsRoutes", function() { return CompanyLogsRoutes; });
/* harmony import */ var _companyLogs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./companyLogs.component */ "./src/app/companyLogs/companyLogs.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


var routes = [
    { path: '', component: _companyLogs_component__WEBPACK_IMPORTED_MODULE_0__["CompanyLogsComponent"] },
];
var CompanyLogsRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=companyLogs-companyLogs-module.js.map