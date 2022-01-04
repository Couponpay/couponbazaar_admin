(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["TrimmerShare-TrimmerShare-module"],{

/***/ "./src/app/TrimmerShare/TrimmerShare.component.css":
/*!*********************************************************!*\
  !*** ./src/app/TrimmerShare/TrimmerShare.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1RyaW1tZXJTaGFyZS9UcmltbWVyU2hhcmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/TrimmerShare/TrimmerShare.component.html":
/*!**********************************************************!*\
  !*** ./src/app/TrimmerShare/TrimmerShare.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-form-item>\n  <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"email\">Select Date</nz-form-label>\n  <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n    <nz-date-picker [(ngModel)]=\"date\" (ngModelChange)=\"onChange($event)\"></nz-date-picker>\n\n  </nz-form-control>\n</nz-form-item>\n\n\n<nz-card style=\"margin-bottom: 10px;\" nzTitle=\"Amount Details\">\n  <div nz-row>\n    <div nz-col nzSpan=\"6\">\n      Available Amount:{{trimmerShareData.Available_Amount| number}}\n    </div>\n    <div nz-col nzSpan=\"6\">\n      Withdrawn Amount:{{trimmerShareData.Withdrawn_Amount| number}}\n    </div>\n\n    <div nz-col nzSpan=\"6\">\n      Total Amount:{{trimmerShareData.Total_Amount| number}}\n    </div>\n  </div>\n\n</nz-card>\n<nz-card>\n  <nz-list [nzDataSource]=\"trimmerData\" [nzLoading]=\"isLoadingLogs\" [nzRenderItem]=\"conar\"\n    [nzItemLayout]=\"'horizontal'\">\n    <ng-template #conar let-item>\n      <ng-container *ngIf=\"item.Type==1\">\n        <nz-list-item [nzContent]=\"desc\">\n          <nz-list-item-meta [nzTitle]=\"title\" nzAvatar=\" \" [nzDescription]=\"content\">\n          </nz-list-item-meta>\n          <ng-template #title>\n            <span style=\"    color: #00897b;\">Amount Credited For Shop's billings</span>\n          </ng-template>\n          <ng-template #desc>\n            <a style=\"margin-right: 30%\">{{item.Amount | number}} Inr (C)</a> {{item.Time | date:'medium'}}\n          </ng-template>\n          <ng-template #content>\n            {{item.Data.Buyer_Name}} purchased {{item.Data.ProductData.Product_Name}} -\n            {{item.Data.ProductData.Product_Quantity}} at {{item.Data.Shop_Name}}.Total bill is\n            {{item.Data.ProductData.Product_Sub_Total}} and bill number <b>{{item.Data.BillNumber}}</b>\n          </ng-template>\n        </nz-list-item>\n      </ng-container>\n      <ng-container *ngIf=\"item.Type==2\">\n        <nz-list-item [nzContent]=\"desc\">\n          <nz-list-item-meta [nzTitle]=\"title\" nzAvatar=\" \" [nzDescription]=\"content\">\n          </nz-list-item-meta>\n          <ng-template #title>\n            <span style=\"color: #ff4500;\">Amount Debited at End of the Day for distribute to the buyers</span>\n          </ng-template>\n          <ng-template #desc>\n            <a style=\"margin-right: 30%\"><span style=\"color: #ff4500;\">{{item.Amount | number}} Inr (D)</span></a>\n            {{item.Time | date:'medium'}}\n          </ng-template>\n          <ng-template #content>\n            {{item.Amount | number}} Inr distributed to all <a>Buyers</a>\n          </ng-template>\n        </nz-list-item>\n      </ng-container>\n    </ng-template>\n  </nz-list>\n</nz-card>\n\n\n<!-- <div nz-row class=\"logtable\">\n  <div nz-col nzSpan=\"24\">\n    <nz-table class=\"logTable\" nzShowPagination=\"false\"\n     #basicTable [nzData]=\"trimmerData\">\n      <thead>\n        <tr>\n          <th>Shop Name</th>\n          <th>Shop Phone Number</th>\n          <th>Buyer Name</th>\n          <th>Buyer PhoneNumber</th>\n          <th>Product Name</th>\n          <th>Product Details  \n              <i class=\"fa fa-info-circle\" \n              nzTitle=\"PriceXQuantity=Total\" nzPlacement=\"topLeft\" \n              nz-tooltip nzTrigger=\"hover\" style=\"font-size:15px\"></i>\n          </th>\n          <th>Amount</th>\n          <th>Time</th>\n\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let data of trimmerData;let i = index\">\n          <td>{{data.Data.Shop_Name}}</td>\n          <td>{{data.Data.Shop_CountryCode}}{{data.Data.Shop_PhoneNumber}}</td>\n\n          <td>{{data.Data.Buyer_Name}}</td>\n          <td>{{data.Data.Buyer_PhoneNumber}}</td>\n          <td>{{data.Data.ProductData.Product_Name}}</td>\n          <td>{{data.Data.ProductData.Product_Price}}X{{data.Data.ProductData.Product_Quantity}}={{data.Data.ProductData.Product_Sub_Total}}</td>\n\n          <td>{{data.Amount| number}}({{data.Data.ProductData.Product_Price_Divisions.Trimer_Share}}%)</td>\n<td>{{data.Time | date:'shortTime' }}</td>\n        </tr>\n      </tbody>\n    </nz-table>\n\n  </div>\n</div> -->\n<nz-pagination (nzPageIndexChange)=\"onNextPage($event)\" [nzPageSize]=\"limit\" [nzPageIndex]=\"currentPage\"  [nzTotal]=\"totalItem\"></nz-pagination>"

/***/ }),

/***/ "./src/app/TrimmerShare/TrimmerShare.component.ts":
/*!********************************************************!*\
  !*** ./src/app/TrimmerShare/TrimmerShare.component.ts ***!
  \********************************************************/
/*! exports provided: TrimmerShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimmerShareComponent", function() { return TrimmerShareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var TrimmerShareComponent = /** @class */ (function () {
    function TrimmerShareComponent(route, _appService, nzMessageService) {
        this.route = route;
        this._appService = _appService;
        this.nzMessageService = nzMessageService;
        this.date = new Date();
        this.trimmerData = [];
        this.trimmerShareData = [];
        this.limit = this._appService.limit;
        this.currentPage = 1;
    }
    TrimmerShareComponent.prototype.ngOnInit = function () {
        this.getrimmershare(0, this.date);
    };
    TrimmerShareComponent.prototype.getrimmershare = function (skip, date) {
        var _this = this;
        this.isLoadingLogs = true;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            Date: date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear(),
            skip: skip,
            limit: this._appService.limit
        };
        try {
            this._appService.postMethod('Trimmer_Share_Information_and_Logs_By_Date', body)
                .subscribe(function (resp) {
                _this.isLoadingLogs = false;
                if (resp.success) {
                    if (skip == 0) {
                        _this.currentPage = 1;
                    }
                    _this.totalItem = resp.extras.Count;
                    _this.trimmerData = resp.extras.Data;
                    _this.trimmerShareData = resp.extras.Trimmer_Share_Data;
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
    TrimmerShareComponent.prototype.onNextPage = function (event) {
        this.currentPage = event;
        var skip = (event - 1) * this._appService.limit;
        this.getrimmershare(skip, this.date);
    };
    TrimmerShareComponent.prototype.onChange = function (date) {
        if (date != undefined) {
            this.getrimmershare(0, date);
        }
        else {
            this.nzMessageService.warning('please select Date');
        }
    };
    TrimmerShareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-TrimmerShare',
            template: __webpack_require__(/*! ./TrimmerShare.component.html */ "./src/app/TrimmerShare/TrimmerShare.component.html"),
            styles: [__webpack_require__(/*! ./TrimmerShare.component.css */ "./src/app/TrimmerShare/TrimmerShare.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], TrimmerShareComponent);
    return TrimmerShareComponent;
}());



/***/ }),

/***/ "./src/app/TrimmerShare/TrimmerShare.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/TrimmerShare/TrimmerShare.module.ts ***!
  \*****************************************************/
/*! exports provided: TrimmerShareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimmerShareModule", function() { return TrimmerShareModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _TrimmerShare_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TrimmerShare.component */ "./src/app/TrimmerShare/TrimmerShare.component.ts");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _TrimmerShare_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TrimmerShare.routing */ "./src/app/TrimmerShare/TrimmerShare.routing.ts");







var TrimmerShareModule = /** @class */ (function () {
    function TrimmerShareModule() {
    }
    TrimmerShareModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _TrimmerShare_routing__WEBPACK_IMPORTED_MODULE_6__["TrimmerShareRoutes"]
            ],
            declarations: [_TrimmerShare_component__WEBPACK_IMPORTED_MODULE_3__["TrimmerShareComponent"]]
        })
    ], TrimmerShareModule);
    return TrimmerShareModule;
}());



/***/ }),

/***/ "./src/app/TrimmerShare/TrimmerShare.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/TrimmerShare/TrimmerShare.routing.ts ***!
  \******************************************************/
/*! exports provided: TrimmerShareRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimmerShareRoutes", function() { return TrimmerShareRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _TrimmerShare_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TrimmerShare.component */ "./src/app/TrimmerShare/TrimmerShare.component.ts");


var routes = [
    { path: '', component: _TrimmerShare_component__WEBPACK_IMPORTED_MODULE_1__["TrimmerShareComponent"] },
];
var TrimmerShareRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=TrimmerShare-TrimmerShare-module.js.map