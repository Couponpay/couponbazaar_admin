(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buyers-buyers-logs-buyers-logs-module"],{

/***/ "./src/app/buyers/buyers-logs/buyers-logs.component.css":
/*!**************************************************************!*\
  !*** ./src/app/buyers/buyers-logs/buyers-logs.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1eWVycy9idXllcnMtbG9ncy9idXllcnMtbG9ncy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/buyers/buyers-logs/buyers-logs.component.html":
/*!***************************************************************!*\
  !*** ./src/app/buyers/buyers-logs/buyers-logs.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row>\r\n  <div nz-col nzSpan=\"24\">\r\n    <a [routerLink]=\"[ '/dashboard','buyers']\">Back</a>\r\n  </div>\r\n</div>\r\n\r\n<div nz-row>\r\n  <div nz-col nzSpan=\"12\" nzOffset=\"6\">\r\n    <nz-card style=\"margin-bottom: 10px;\" nzTitle=\"Buyer Name : {{buyerName}}\">\r\n      <nz-table [nzNoResult]=\"NodatTxt\">\r\n\r\n        <tbody>\r\n          <tr>\r\n            <th>Available Amount:</th>\r\n            <td style=\"border-bottom: none;\">{{avilableAmout | number}}</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Withdrawn Amount</th>\r\n            <td style=\"border-bottom: none;\">{{withdrwanAmount| number}}</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Total Amount</th>\r\n            <td style=\"border-bottom: none;\">{{totalAmount| number}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </nz-table>\r\n\r\n\r\n\r\n\r\n    </nz-card>\r\n  </div>\r\n</div>\r\n\r\n<nz-card>\r\n    <nz-list [nzDataSource]=\"buyersLogs\" [nzLoading]=\"isLoadingLogs\" [nzRenderItem]=\"conar\"\r\n      [nzItemLayout]=\"'horizontal'\">\r\n      <ng-template #conar let-item>\r\n        <ng-container *ngIf=\"item.Type==1\">\r\n          <nz-list-item [nzContent]=\"desc\">\r\n            <nz-list-item-meta [nzTitle]=\"title\" nzAvatar=\" \" [nzDescription]=\"content\">\r\n            </nz-list-item-meta>\r\n            <ng-template #title>\r\n              <span style=\"    color: #00897b;\">Amount credited for purchasing in shop</span>\r\n            </ng-template>\r\n            <ng-template #desc>\r\n              <a style=\"margin-right: 30%\">{{item.Amount | number}} Inr (C)</a> {{item.Time | date:'medium'}}\r\n            </ng-template>\r\n            <ng-template #content>\r\n            {{item.Data.Buyer_Name}} got {{item.Amount | number}} to his wallet for purchasing {{item.Data.ProductData.Product_Name}} - {{item.Data.ProductData.Product_Quantity}}\r\n            at {{item.Data.Shop_Name}}.Total bill is {{item.Data.ProductData.Product_Sub_Total}} and Bill Number <b>{{item.Data.BillNumber}}</b>\r\n            </ng-template>\r\n          </nz-list-item>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"item.Type==2\">\r\n            <nz-list-item [nzContent]=\"desc\">\r\n              <nz-list-item-meta [nzTitle]=\"title\" nzAvatar=\" \" [nzDescription]=\"content\">\r\n              </nz-list-item-meta>\r\n              <ng-template #title>\r\n                <span style=\"    color: #00897b;\">Amount credited through Trimmer Share by EOD</span>\r\n              </ng-template>\r\n              <ng-template #desc>\r\n                <a style=\"margin-right: 30%\">{{item.Amount | number}} Inr (C)</a> {{item.Time | date:'medium'}}\r\n              </ng-template>\r\n              <ng-template #content>\r\n                  {{item.Amount | number}} Inr Credited through Trimmer Shares\r\n              </ng-template>\r\n            </nz-list-item>\r\n          </ng-container>\r\n        <ng-container *ngIf=\"item.Type==3\">\r\n          <nz-list-item [nzContent]=\"desc\">\r\n            <nz-list-item-meta [nzTitle]=\"title\" nzAvatar=\" \" [nzDescription]=\"content\">\r\n            </nz-list-item-meta>\r\n            <ng-template #title>\r\n              <span style=\"color: #ff4500;\">Amount Debited for Generating offer code</span>\r\n            </ng-template>\r\n            <ng-template #desc>\r\n              <a style=\"margin-right: 30%\"><span style=\"color: #ff4500;\">{{item.Amount | number}} Inr (D)</span></a>\r\n              {{item.Time | date:'medium'}}\r\n            </ng-template>\r\n            <ng-template #content>\r\n              {{buyerName}} got  the offer and worth is {{item.Amount | number}} .Offer code is {{item.Data.OfferCode}}\r\n            </ng-template>\r\n          </nz-list-item>\r\n        </ng-container>\r\n      </ng-template>\r\n    </nz-list>\r\n  </nz-card>\r\n\r\n<!-- <div nz-row class=\"logtable\">\r\n  <div nz-col nzSpan=\"24\">\r\n    <nz-table class=\"logTable\" nzShowPagination=\"false\" #basicTable [nzData]=\"intoroducerLogs\">\r\n      <thead>\r\n        <tr>\r\n          <th>Shop Name</th>\r\n          <th>Shop Phone Number</th>\r\n          <th>Buyer Name</th>\r\n          <th>Buyer PhoneNumber</th>\r\n          <th>Product Name</th>\r\n          <th>Product Details\r\n            <i class=\"fa fa-info-circle\" nzTitle=\"PriceXQuantity=Total\" nzPlacement=\"topLeft\" nz-tooltip\r\n              nzTrigger=\"hover\" style=\"font-size:15px\"></i>\r\n          </th>\r\n          <th>Amount (Inr)</th>\r\n          <th>Date & Time</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let data of intoroducerLogs;let i = index\">\r\n          <td>{{data.Data.Shop_Name}}</td>\r\n          <td>{{data.Data.Shop_CountryCode}}{{data.Data.Shop_PhoneNumber}}</td>\r\n          <td>{{data.Data.Buyer_Name}}</td>\r\n          <td>{{data.Data.Buyer_PhoneNumber}}</td>\r\n          <td>{{data.Data.ProductData.Product_Name}}</td>\r\n          <td>\r\n            {{data.Data.ProductData.Product_Price}}X{{data.Data.ProductData.Product_Quantity}}={{data.Data.ProductData.Product_Sub_Total}}\r\n          </td>\r\n          <td>{{data.Amount| number}}({{data.Data.ProductData.Product_Price_Divisions.Buyer_Share}}%)</td>\r\n          <td>{{data.Time | date:'short'}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </nz-table>\r\n\r\n  </div>\r\n</div> -->\r\n<nz-pagination (nzPageIndexChange)=\"onNextPage($event)\" [nzPageSize]=\"limit\" [nzPageIndex]=\"currentPage\"  [nzTotal]=\"totalItem\"></nz-pagination>"

/***/ }),

/***/ "./src/app/buyers/buyers-logs/buyers-logs.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/buyers/buyers-logs/buyers-logs.component.ts ***!
  \*************************************************************/
/*! exports provided: BuyersLogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyersLogsComponent", function() { return BuyersLogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var BuyersLogsComponent = /** @class */ (function () {
    function BuyersLogsComponent(route, _appService, nzMessageService) {
        this.route = route;
        this._appService = _appService;
        this.nzMessageService = nzMessageService;
        this.NodatTxt = "   ";
        this.buyersLogs = [];
        this.limit = this._appService.limit;
        this.currentPage = 1;
    }
    BuyersLogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            _this.buyerId = params.id;
            _this.buyerName = params.name;
            _this.avilableAmout = params.avilableAmount;
            _this.withdrwanAmount = params.withdrwanAmount;
            _this.totalAmount = params.totalAmount;
            _this.getLogsByBuyers(_this.buyerId, 0);
        });
    };
    BuyersLogsComponent.prototype.getLogsByBuyers = function (buyerId, skip) {
        var _this = this;
        this.isLoadingLogs = true;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            BuyerID: buyerId,
            skip: skip,
            limit: this._appService.limit
        };
        try {
            this._appService.postMethod('List_All_Buyers_Share_Logs', body)
                .subscribe(function (resp) {
                _this.isLoadingLogs = false;
                if (resp.success) {
                    _this.totalItem = resp.extras.Count;
                    if (skip == 0) {
                        _this.currentPage = 1;
                    }
                    _this.buyersLogs = resp.extras.Data;
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
    BuyersLogsComponent.prototype.onNextPage = function (event) {
        this.currentPage = this.currentPage;
        var skip = (event - 1) * this._appService.limit;
        this.getLogsByBuyers(this.buyerId, skip);
    };
    BuyersLogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buyers-logs',
            template: __webpack_require__(/*! ./buyers-logs.component.html */ "./src/app/buyers/buyers-logs/buyers-logs.component.html"),
            styles: [__webpack_require__(/*! ./buyers-logs.component.css */ "./src/app/buyers/buyers-logs/buyers-logs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], BuyersLogsComponent);
    return BuyersLogsComponent;
}());



/***/ }),

/***/ "./src/app/buyers/buyers-logs/buyers-logs.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/buyers/buyers-logs/buyers-logs.module.ts ***!
  \**********************************************************/
/*! exports provided: BuyersLogsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyersLogsModule", function() { return BuyersLogsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _buyers_logs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buyers-logs.component */ "./src/app/buyers/buyers-logs/buyers-logs.component.ts");
/* harmony import */ var _buyers_logs_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buyers-logs.routing */ "./src/app/buyers/buyers-logs/buyers-logs.routing.ts");







var BuyersLogsModule = /** @class */ (function () {
    function BuyersLogsModule() {
    }
    BuyersLogsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _buyers_logs_routing__WEBPACK_IMPORTED_MODULE_6__["BuyersLogsRoutes"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
            ],
            declarations: [_buyers_logs_component__WEBPACK_IMPORTED_MODULE_5__["BuyersLogsComponent"]]
        })
    ], BuyersLogsModule);
    return BuyersLogsModule;
}());



/***/ }),

/***/ "./src/app/buyers/buyers-logs/buyers-logs.routing.ts":
/*!***********************************************************!*\
  !*** ./src/app/buyers/buyers-logs/buyers-logs.routing.ts ***!
  \***********************************************************/
/*! exports provided: BuyersLogsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyersLogsRoutes", function() { return BuyersLogsRoutes; });
/* harmony import */ var _buyers_logs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buyers-logs.component */ "./src/app/buyers/buyers-logs/buyers-logs.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


var routes = [
    { path: '', component: _buyers_logs_component__WEBPACK_IMPORTED_MODULE_0__["BuyersLogsComponent"] },
];
var BuyersLogsRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=buyers-buyers-logs-buyers-logs-module.js.map