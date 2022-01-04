(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buyers-buyer-bills-buyer-bills-module"],{

/***/ "./src/app/buyers/buyer-bills/buyer-bills.component.css":
/*!**************************************************************!*\
  !*** ./src/app/buyers/buyer-bills/buyer-bills.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1eWVycy9idXllci1iaWxscy9idXllci1iaWxscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/buyers/buyer-bills/buyer-bills.component.html":
/*!***************************************************************!*\
  !*** ./src/app/buyers/buyer-bills/buyer-bills.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row>\r\n    <div nz-col nzSpan=\"24\">\r\n      <a [routerLink]=\"[ '/dashboard','buyers']\">Back</a>\r\n    </div>\r\n  </div>\r\n  \r\n<div nz-row class=\"logtable\">\r\n  <div nz-col nzSpan=\"24\">\r\n    <nz-table class=\"logTable\" nzShowPagination=\"false\" #basicTable [nzData]=\"buyerBills\">\r\n      <thead>\r\n        <tr>\r\n          <th>Bill Number</th>\r\n          <th>Shop Name</th>\r\n          <th>Shop Phone Number</th>\r\n          <th>Total Amount (INR)</th>\r\n          <th>Date</th>\r\n          <th></th>\r\n\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <ng-container *ngFor=\"let data of buyerBills;let i = index\">\r\n          <tr>\r\n            <td>{{data.BillNumber}}</td>\r\n            <td>{{data.Shop_Name}}</td>\r\n\r\n            <td>{{data.Shop_PhoneNumber}}</td>\r\n            <td>{{data.Total_Amount}}</td>\r\n            <td>{{data.created_at | date:'short'}}</td>\r\n            <td><a (click)=\"onViewCart(data,i)\">Cart Details</a></td>\r\n          </tr>\r\n          <tr *ngIf=\"isdetailsview==i\">\r\n            <td colspan=\"6\">\r\n                <nz-card style=\"width:100%;\" [nzTitle]=\"buyerName +' Cart Details'\" >\r\n                    <nz-list [nzDataSource]=\"cartDetails\" [nzRenderItem]=\"item\" [nzItemLayout]=\"'horizontal'\">\r\n                        <ng-template #item let-item>\r\n                            <nz-list-item>\r\n                              <nz-list-item-meta\r\n                                [nzTitle]=\"title\"\r\n                                [nzDescription]=\"content\">\r\n                               \r\n                              </nz-list-item-meta>\r\n                              <ng-template #content>\r\n\r\n                                  He purchased {{item.Product_Name}} - {{item.Product_Quantity}} and each {{item.Product_Name}} Price is {{item.Product_Price}}.\r\n                                \r\n                              </ng-template>\r\n                              <ng-template #title>\r\n\r\n                                {{buyerName}} Total Bill is {{item.Product_Sub_Total}} Rs\r\n                                \r\n                                \r\n                              </ng-template>\r\n                            </nz-list-item>\r\n                          </ng-template>\r\n                    </nz-list>\r\n                  </nz-card>\r\n             \r\n\r\n            </td>\r\n          </tr>\r\n        </ng-container>\r\n\r\n\r\n      </tbody>\r\n    </nz-table>\r\n\r\n  </div>\r\n</div>\r\n<nz-pagination (nzPageIndexChange)=\"onNextPage($event)\" [nzPageSize]=\"limit\" [nzPageIndex]=\"currentPage\" [nzTotal]=\"totalItem\"></nz-pagination>\r\n\r\n<!-- <nz-modal \r\nnzFooter=\" \"\r\n[(nzVisible)]=\"iscartModal\"\r\n nzTitle=\"{{buyerName}} Cart Details\"\r\n  (nzOnCancel)=\"handleCancel()\" \r\n(nzOnOk)=\"handleOk()\">\r\n<nz-table class=\"logTable\" nzShowPagination=\"false\" #basicTable [nzData]=\"buyerBills\">\r\n    <thead>\r\n      <tr>\r\n        <th>Bill Number</th>\r\n        <th>Shop Name</th>\r\n        <th>Shop Phone Number</th>\r\n        <th>Total Amount (INR)</th>\r\n        <th>Date</th>\r\n        <th></th>\r\n\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let data of buyerBills.Cart_Information;let i = index\">\r\n        <td>{{data.BillNumber}}</td>\r\n        <td>{{data.Shop_Name}}</td>\r\n        <td>{{data.Data.Buyer_Name}}</td>\r\n        <td>{{data.Shop_PhoneNumber}}</td>\r\n        <td>{{data.Total_Amount}}</td>\r\n        <td>{{data.created_at | date:'short'}}</td>\r\n        <td><a (click)=\"onViewCart(data,i)\">Cart Details</a></td>\r\n      </tr>\r\n    </tbody>\r\n  </nz-table>\r\n  </nz-modal> -->"

/***/ }),

/***/ "./src/app/buyers/buyer-bills/buyer-bills.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/buyers/buyer-bills/buyer-bills.component.ts ***!
  \*************************************************************/
/*! exports provided: BuyerBillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerBillsComponent", function() { return BuyerBillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var BuyerBillsComponent = /** @class */ (function () {
    function BuyerBillsComponent(route, _appService, nzMessageService) {
        this.route = route;
        this._appService = _appService;
        this.nzMessageService = nzMessageService;
        this.limit = this._appService.limit;
        this.currentPage = 1;
    }
    BuyerBillsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.buyerId = params.id;
            _this.buyerName = params.name;
            _this.getbuyerBills(0);
        });
    };
    BuyerBillsComponent.prototype.getbuyerBills = function (skip) {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            BuyerID: this.buyerId,
            skip: skip,
            limit: this._appService.limit
        };
        try {
            this._appService.postMethod('Buyer_List_All_Shop_Bills', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.totalItem = resp.extras.Count;
                    if (skip == 0) {
                        _this.currentPage = 1;
                    }
                    _this.buyerBills = resp.extras.Data;
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
    BuyerBillsComponent.prototype.onNextPage = function (event) {
        this.currentPage = this.currentPage;
        var skip = (event - 1) * this._appService.limit;
        this.getbuyerBills(skip);
    };
    BuyerBillsComponent.prototype.onViewCart = function (data, i) {
        this.cartDetails = data.Cart_Information;
        console.log(this.cartDetails);
        this.isdetailsview = i;
    };
    BuyerBillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buyer-bills',
            template: __webpack_require__(/*! ./buyer-bills.component.html */ "./src/app/buyers/buyer-bills/buyer-bills.component.html"),
            styles: [__webpack_require__(/*! ./buyer-bills.component.css */ "./src/app/buyers/buyer-bills/buyer-bills.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], BuyerBillsComponent);
    return BuyerBillsComponent;
}());



/***/ }),

/***/ "./src/app/buyers/buyer-bills/buyer-bills.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/buyers/buyer-bills/buyer-bills.module.ts ***!
  \**********************************************************/
/*! exports provided: BuyerBillsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerBillsModule", function() { return BuyerBillsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _buyer_bills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buyer-bills.component */ "./src/app/buyers/buyer-bills/buyer-bills.component.ts");
/* harmony import */ var src_app_shared_modue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _buyer_bills_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buyer-bills.routing */ "./src/app/buyers/buyer-bills/buyer-bills.routing.ts");






var BuyerBillsModule = /** @class */ (function () {
    function BuyerBillsModule() {
    }
    BuyerBillsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _buyer_bills_routing__WEBPACK_IMPORTED_MODULE_5__["BuyerBillsRoutes"],
                src_app_shared_modue__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_buyer_bills_component__WEBPACK_IMPORTED_MODULE_3__["BuyerBillsComponent"]]
        })
    ], BuyerBillsModule);
    return BuyerBillsModule;
}());



/***/ }),

/***/ "./src/app/buyers/buyer-bills/buyer-bills.routing.ts":
/*!***********************************************************!*\
  !*** ./src/app/buyers/buyer-bills/buyer-bills.routing.ts ***!
  \***********************************************************/
/*! exports provided: BuyerBillsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerBillsRoutes", function() { return BuyerBillsRoutes; });
/* harmony import */ var _buyer_bills_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buyer-bills.component */ "./src/app/buyers/buyer-bills/buyer-bills.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


var routes = [
    { path: '', component: _buyer_bills_component__WEBPACK_IMPORTED_MODULE_0__["BuyerBillsComponent"] },
];
var BuyerBillsRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=buyers-buyer-bills-buyer-bills-module.js.map