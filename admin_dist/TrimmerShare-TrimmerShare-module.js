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

module.exports = "<nz-form-item>\r\n  <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"email\">Select Date</nz-form-label>\r\n  <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n    <nz-date-picker [(ngModel)]=\"date\" (ngModelChange)=\"onChange($event)\"></nz-date-picker>\r\n\r\n  </nz-form-control>\r\n</nz-form-item>\r\n\r\n\r\n<nz-card style=\"margin-bottom: 10px;\" nzTitle=\"Amount Details\">\r\n  <div nz-row>\r\n    <div nz-col nzSpan=\"6\">\r\n      Available Amount:{{trimmerShareData.Available_Amount| number}}\r\n    </div>\r\n    <div nz-col nzSpan=\"6\">\r\n      Withdrawn Amount:{{trimmerShareData.Withdrawn_Amount| number}}\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"6\">\r\n      Total Amount:{{trimmerShareData.Total_Amount| number}}\r\n    </div>\r\n  </div>\r\n\r\n</nz-card>\r\n<nz-card>\r\n  <nz-list [nzDataSource]=\"trimmerData\" [nzLoading]=\"isLoadingLogs\" [nzRenderItem]=\"conar\"\r\n    [nzItemLayout]=\"'horizontal'\">\r\n    <ng-template #conar let-item>\r\n      <ng-container *ngIf=\"item.Type==1\">\r\n        <nz-list-item [nzContent]=\"desc\">\r\n          <nz-list-item-meta [nzTitle]=\"title\" nzAvatar=\" \" [nzDescription]=\"content\">\r\n          </nz-list-item-meta>\r\n          <ng-template #title>\r\n            <span style=\"    color: #00897b;\">Amount Credited For Shop's billings</span>\r\n          </ng-template>\r\n          <ng-template #desc>\r\n            <a style=\"margin-right: 30%\">{{item.Amount | number}} Inr (C)</a> {{item.Time | date:'medium'}}\r\n          </ng-template>\r\n          <ng-template #content>\r\n            {{item.Data.Buyer_Name}} purchased {{item.Data.ProductData.Product_Name}} -\r\n            {{item.Data.ProductData.Product_Quantity}} at {{item.Data.Shop_Name}}.Total bill is\r\n            {{item.Data.ProductData.Product_Sub_Total}} and bill number <b>{{item.Data.BillNumber}}</b>\r\n          </ng-template>\r\n        </nz-list-item>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"item.Type==2\">\r\n        <nz-list-item [nzContent]=\"desc\">\r\n          <nz-list-item-meta [nzTitle]=\"title\" nzAvatar=\" \" [nzDescription]=\"content\">\r\n          </nz-list-item-meta>\r\n          <ng-template #title>\r\n            <span style=\"color: #ff4500;\">Amount Debited at End of the Day for distribute to the buyers</span>\r\n          </ng-template>\r\n          <ng-template #desc>\r\n            <a style=\"margin-right: 30%\"><span style=\"color: #ff4500;\">{{item.Amount | number}} Inr (D)</span></a>\r\n            {{item.Time | date:'medium'}}\r\n          </ng-template>\r\n          <ng-template #content>\r\n            {{item.Amount | number}} Inr distributed to all <a>Buyers</a>\r\n          </ng-template>\r\n        </nz-list-item>\r\n      </ng-container>\r\n    </ng-template>\r\n  </nz-list>\r\n</nz-card>\r\n\r\n\r\n<!-- <div nz-row class=\"logtable\">\r\n  <div nz-col nzSpan=\"24\">\r\n    <nz-table class=\"logTable\" nzShowPagination=\"false\"\r\n     #basicTable [nzData]=\"trimmerData\">\r\n      <thead>\r\n        <tr>\r\n          <th>Shop Name</th>\r\n          <th>Shop Phone Number</th>\r\n          <th>Buyer Name</th>\r\n          <th>Buyer PhoneNumber</th>\r\n          <th>Product Name</th>\r\n          <th>Product Details  \r\n              <i class=\"fa fa-info-circle\" \r\n              nzTitle=\"PriceXQuantity=Total\" nzPlacement=\"topLeft\" \r\n              nz-tooltip nzTrigger=\"hover\" style=\"font-size:15px\"></i>\r\n          </th>\r\n          <th>Amount</th>\r\n          <th>Time</th>\r\n\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let data of trimmerData;let i = index\">\r\n          <td>{{data.Data.Shop_Name}}</td>\r\n          <td>{{data.Data.Shop_CountryCode}}{{data.Data.Shop_PhoneNumber}}</td>\r\n\r\n          <td>{{data.Data.Buyer_Name}}</td>\r\n          <td>{{data.Data.Buyer_PhoneNumber}}</td>\r\n          <td>{{data.Data.ProductData.Product_Name}}</td>\r\n          <td>{{data.Data.ProductData.Product_Price}}X{{data.Data.ProductData.Product_Quantity}}={{data.Data.ProductData.Product_Sub_Total}}</td>\r\n\r\n          <td>{{data.Amount| number}}({{data.Data.ProductData.Product_Price_Divisions.Trimer_Share}}%)</td>\r\n<td>{{data.Time | date:'shortTime' }}</td>\r\n        </tr>\r\n      </tbody>\r\n    </nz-table>\r\n\r\n  </div>\r\n</div> -->\r\n<nz-pagination (nzPageIndexChange)=\"onNextPage($event)\" [nzPageSize]=\"limit\" [nzPageIndex]=\"currentPage\"  [nzTotal]=\"totalItem\"></nz-pagination>"

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