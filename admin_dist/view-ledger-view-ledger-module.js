(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-ledger-view-ledger-module"],{

/***/ "./src/app/vendor/view-ledger/view-ledger.component.css":
/*!**************************************************************!*\
  !*** ./src/app/vendor/view-ledger/view-ledger.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ant-row{\r\n    margin-bottom: 7px;\r\n}\r\n.logTable {\r\n    background-color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL3ZpZXctbGVkZ2VyL3ZpZXctbGVkZ2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci92aWV3LWxlZGdlci92aWV3LWxlZGdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFudC1yb3d7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbn1cclxuLmxvZ1RhYmxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/vendor/view-ledger/view-ledger.component.html":
/*!***************************************************************!*\
  !*** ./src/app/vendor/view-ledger/view-ledger.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row>\r\n  <div nz-col nzSpan=\"24\">\r\n    <a [routerLink]=\"[ '/dashboard','vendor', 'view-vednor']\">Back</a>\r\n  </div>\r\n</div>\r\n\r\n<div nz-row>\r\n  <div nz-col nzSpan=\"12\" nzOffset=\"6\">\r\n    <nz-card style=\"margin-bottom: 10px;\" nzTitle=\"Shop Name: {{shopName}}\">\r\n      <nz-table nzNoResult=\"   \">\r\n\r\n        <tbody>\r\n          <tr>\r\n            <th>Shope PhoneNumber</th>\r\n            <td style=\"border-bottom: none;\">{{shopPhoneNumber}}</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Available Amount:</th>\r\n            <td style=\"border-bottom: none;\">{{avilableAmount | number}}</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Withdrawn Amount</th>\r\n            <td style=\"border-bottom: none;\">{{withdrwanAmount| number}}</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Total Amount</th>\r\n            <td style=\"border-bottom: none;\">{{Total_Amount| number}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </nz-table>\r\n    </nz-card>\r\n  </div>\r\n</div>\r\n<nz-card>\r\n  <nz-list [nzDataSource]=\"shopLogs\" [nzLoading]=\"isLoadingLogs\" [nzRenderItem]=\"conar\" [nzItemLayout]=\"'horizontal'\">\r\n    <ng-template #conar let-item>\r\n      <ng-container *ngIf=\"item.Type==1\">\r\n        <nz-list-item [nzContent]=\"desc\">\r\n          <nz-list-item-meta [nzTitle]=\"title\" nzAvatar=\" \" [nzDescription]=\"content\">\r\n          </nz-list-item-meta>\r\n          <ng-template #title>\r\n            <span style=\"    color: #00897b;\">Amount Credited For Shop billings</span>\r\n          </ng-template>\r\n          <ng-template #desc>\r\n            <a style=\"margin-right: 30%\">{{item.Amount | number}} Inr (C)</a> {{item.Time | date:'medium'}}\r\n          </ng-template>\r\n          <ng-template #content>\r\n            <b>\"{{item.Data.Shop_Name}}\"</b>&nbsp; Shop got Total {{item.Amount | number}} Rs For\r\n            {{item.Data.Buyer_Name}}'s bill.{{item.Data.Buyer_Name}} purchased {{item.Data.ProductData.Product_Name}} X\r\n            {{item.Data.ProductData.Product_Quantity}} at {{item.Data.Shop_Name}}.His total bill is\r\n            {{item.Data.ProductData.Product_Sub_Total}} Rs and Bill Number is <b>{{item.Data.BillNumber}}</b>\r\n          </ng-template>\r\n        </nz-list-item>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"item.Type==2\">\r\n        <nz-list-item [nzContent]=\"desc\">\r\n          <nz-list-item-meta [nzTitle]=\"title\" nzAvatar=\" \" [nzDescription]=\"content\">\r\n          </nz-list-item-meta>\r\n          <ng-template #title>\r\n            <span style=\"    color: #00897b;\">Amount Credited For redeem the offers of Buyers</span>\r\n          </ng-template>\r\n          <ng-template #desc>\r\n            <a style=\"margin-right: 30%\">{{item.Amount | number}} Inr (C)</a> {{item.Time | date:'medium'}}\r\n          </ng-template>\r\n          <ng-template #content>\r\n            <b>\"{{item.Data.redeem}}\"</b>&nbsp; Sucessfully redeemed his offer at \"{{item.Data.Applied_Shop_Details.Shop_Name}}\" and offer value is {{item.Data.Buyer_Deduction_Amount}} Rs.And offer Code is {{item.Data.OfferCode}} ,offer message is {{item.Data.Message}}.\r\n          </ng-template>\r\n        </nz-list-item>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"item.Type==3\">\r\n        <nz-list-item [nzContent]=\"desc\">\r\n          <nz-list-item-meta [nzTitle]=\"title\" nzAvatar=\" \" [nzDescription]=\"content\">\r\n          </nz-list-item-meta>\r\n          <ng-template #title>\r\n            <span style=\"    color: #00897b;\">Amount credited For Razorpay Transactions</span>\r\n          </ng-template>\r\n          <ng-template #desc>\r\n            <a style=\"margin-right: 30%\">{{item.Amount | number}} Inr (C)</a> {{item.Time | date:'medium'}}\r\n          </ng-template>\r\n          <ng-template #content>\r\n           {{item.Amount}}   {{item.Data.currency}} credited through {{item.Data.method}} and transaction id is {{item.Data.id}}.\r\n          </ng-template>\r\n        </nz-list-item>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"item.Type==4\">\r\n        <nz-list-item [nzContent]=\"desc\">\r\n          <nz-list-item-meta [nzTitle]=\"title\" nzAvatar=\" \" [nzDescription]=\"content\">\r\n          </nz-list-item-meta>\r\n          <ng-template #title>\r\n            <span style=\"color: #ff4500;\">Amount Debited for Stock Puchases</span>\r\n          </ng-template>\r\n          <ng-template #desc>\r\n            <a style=\"margin-right: 30%;\"> <span style=\"color: #ff4500;\">{{item.Amount | number}} Inr (D)</span></a> {{item.Time | date:'medium'}}\r\n          </ng-template>\r\n          <ng-template #content>\r\n           {{item.Amount}} Inr debited for <a (click)=OnshowStock(item)>stock</a> purchasing and purchase number is {{item.Data.PurchaseNumber}}.\r\n          </ng-template>\r\n        </nz-list-item>\r\n      </ng-container>\r\n    </ng-template>\r\n  </nz-list>\r\n</nz-card>\r\n<nz-pagination (nzPageIndexChange)=\"onNextPage($event)\" [nzPageSize]=\"limit\" [nzPageIndex]=\"currentPage\"  [nzTotal]=\"totalItem\"></nz-pagination>\r\n<nz-modal \r\n[(nzVisible)]=\"isVisibleshopCart\" \r\nnzTitle=\" \" \r\nnzFooter=\" \"\r\n(nzOnCancel)=\"handleCancel()\" (nzOnOk)=\"handleOk()\">\r\n  <nz-card [nzTitle]=\"shopName +'shop Cart Information'\">\r\n    \r\n    <ng-container *ngFor=\"let item of cartInformation; let i=index\">\r\n      <nz-card nzType=\"inner\" [nzTitle]=\"item.Product_Name\">\r\n        <div nz-row nzGutter=\"16\">\r\n          <div nz-col class=\"gutter-row\" nzSpan=\"6\">\r\n            <div class=\"gutter-box\">Price </div>\r\n          </div>\r\n          <div nz-col class=\"gutter-row\" nzSpan=\"6\">\r\n            <div class=\"gutter-box\">{{item.Product_Price}} Rs</div>\r\n          </div>\r\n        </div>\r\n        <div nz-row nzGutter=\"16\">\r\n          <div nz-col class=\"gutter-row\" nzSpan=\"6\">\r\n            <div class=\"gutter-box\">Quantity </div>\r\n          </div>\r\n          <div nz-col class=\"gutter-row\" nzSpan=\"6\">\r\n            <div class=\"gutter-box\">{{item.Product_Quantity}}</div>\r\n          </div>\r\n        </div>\r\n        <div nz-row nzGutter=\"16\">\r\n          <div nz-col class=\"gutter-row\" nzSpan=\"6\">\r\n            <div class=\"gutter-box\">Total </div>\r\n          </div>\r\n          <div nz-col class=\"gutter-row\" nzSpan=\"6\">\r\n            <div class=\"gutter-box\">{{item.Product_Sub_Total}} Rs</div>\r\n          </div>\r\n        </div>\r\n      </nz-card>\r\n    </ng-container>\r\n    \r\n    \r\n  \r\n  </nz-card>\r\n</nz-modal>"

/***/ }),

/***/ "./src/app/vendor/view-ledger/view-ledger.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/vendor/view-ledger/view-ledger.component.ts ***!
  \*************************************************************/
/*! exports provided: ViewLedgerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewLedgerComponent", function() { return ViewLedgerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var ViewLedgerComponent = /** @class */ (function () {
    function ViewLedgerComponent(route, _appService, nzMessageService) {
        this.route = route;
        this._appService = _appService;
        this.nzMessageService = nzMessageService;
        this.cartInformation = [];
        this.limit = this._appService.limit;
        this.currentPage = 1;
    }
    ViewLedgerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            _this.shopId = params.id;
            _this.shopName = params.name;
            _this.Total_Amount = params.totalAmount;
            _this.withdrwanAmount = params.withdrwanAmount;
            _this.avilableAmount = params.avilableAmount;
            _this.shopPhoneNumber = params.phone;
            _this.getLogsByshop(_this.shopId, 0);
        });
    };
    ViewLedgerComponent.prototype.getLogsByshop = function (shopid, skip) {
        var _this = this;
        this.isLoadingLogs = true;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            ShopID: shopid,
            skip: skip,
            limit: this._appService.limit
        };
        try {
            this._appService.postMethod('List_All_Shop_Share_Logs', body)
                .subscribe(function (resp) {
                _this.isLoadingLogs = false;
                if (skip == 0) {
                    _this.currentPage = 1;
                }
                if (resp.success) {
                    _this.totalItem = resp.extras.Count;
                    _this.shopLogs = resp.extras.Data;
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
    ViewLedgerComponent.prototype.onNextPage = function (event) {
        this.currentPage = event;
        var skip = (event - 1) * this._appService.limit;
        this.getLogsByshop(this.shopId, skip);
    };
    ViewLedgerComponent.prototype.percentage = function (partialValue, totalValue) {
        return (100 * partialValue) / totalValue;
    };
    ViewLedgerComponent.prototype.OnshowStock = function (item) {
        this.cartInformation = item.Data.Cart_Information;
        this.isVisibleshopCart = true;
    };
    ViewLedgerComponent.prototype.handleCancel = function () {
        this.isVisibleshopCart = false;
    };
    ViewLedgerComponent.prototype.handleOk = function () {
        this.isVisibleshopCart = false;
    };
    ViewLedgerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-ledger',
            template: __webpack_require__(/*! ./view-ledger.component.html */ "./src/app/vendor/view-ledger/view-ledger.component.html"),
            styles: [__webpack_require__(/*! ./view-ledger.component.css */ "./src/app/vendor/view-ledger/view-ledger.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], ViewLedgerComponent);
    return ViewLedgerComponent;
}());



/***/ }),

/***/ "./src/app/vendor/view-ledger/view-ledger.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/vendor/view-ledger/view-ledger.module.ts ***!
  \**********************************************************/
/*! exports provided: ViewLedgerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewLedgerModule", function() { return ViewLedgerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _view_ledger_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-ledger.component */ "./src/app/vendor/view-ledger/view-ledger.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _view_ledger_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-ledger.routing */ "./src/app/vendor/view-ledger/view-ledger.routing.ts");







var ViewLedgerModule = /** @class */ (function () {
    function ViewLedgerModule() {
    }
    ViewLedgerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _view_ledger_routing__WEBPACK_IMPORTED_MODULE_6__["ViewLedgerRoutes"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            declarations: [_view_ledger_component__WEBPACK_IMPORTED_MODULE_4__["ViewLedgerComponent"]]
        })
    ], ViewLedgerModule);
    return ViewLedgerModule;
}());



/***/ }),

/***/ "./src/app/vendor/view-ledger/view-ledger.routing.ts":
/*!***********************************************************!*\
  !*** ./src/app/vendor/view-ledger/view-ledger.routing.ts ***!
  \***********************************************************/
/*! exports provided: ViewLedgerRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewLedgerRoutes", function() { return ViewLedgerRoutes; });
/* harmony import */ var _view_ledger_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-ledger.component */ "./src/app/vendor/view-ledger/view-ledger.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


var routes = [
    { path: '', component: _view_ledger_component__WEBPACK_IMPORTED_MODULE_0__["ViewLedgerComponent"] },
];
var ViewLedgerRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=view-ledger-view-ledger-module.js.map