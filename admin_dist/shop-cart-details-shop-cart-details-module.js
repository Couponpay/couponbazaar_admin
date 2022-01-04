(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop-cart-details-shop-cart-details-module"],{

/***/ "./src/app/vendor/shop-cart-details/shop-cart-details.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/vendor/shop-cart-details/shop-cart-details.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9zaG9wLWNhcnQtZGV0YWlscy9zaG9wLWNhcnQtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/vendor/shop-cart-details/shop-cart-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/vendor/shop-cart-details/shop-cart-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-button-group>\n  <button nz-button [routerLink]=\"['/dashboard','vendor','shoptPurchases']\" nzType=\"dashed\"><i nz-icon type=\"left\"></i>\n    Go back</button>\n</nz-button-group>\n\n<p>{{shopName}} shop cart details</p>\n<div nz-row>\n  <div nz-col nzSpan=\"12\">\n    <div style=\"background: white\">\n      <nz-table #basicTable nzShowPagination=\"false\" [nzScroll]=\"{y: '240px' }\" [nzData]=\"cartDetails\">\n        <thead>\n          <tr>\n            <th>Product Name</th>\n            <th>Product Details\n              <i class=\"fa fa-info-circle\" nzTitle=\"PriceXQuantity=Total\" nzPlacement=\"topLeft\" nz-tooltip\n                nzTrigger=\"hover\" style=\"font-size:15px\"></i>\n            </th>\n            <th nzWidth=\"100px\" nzRight=\"0px\"></th>\n\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let data of cartDetails\">\n            <td>{{data.Product_Name}}</td>\n            <td>{{data.Product_Price}}X{{data.Product_Quantity}}={{data.Product_Sub_Total}}</td>\n            <td nzRight=\"0px\"><a nz-popover nzTitle=\"Shares\" [nzContent]=\"contentTemplate\" nzPlacement=\"left\">shares</a>\n            </td>\n            <ng-template #contentTemplate>\n              <div>\n                <p>Introducer Share: {{data.Product_Price_Divisions.Introducer_Share}}%</p>\n                <p>Buyer Share : {{data.Product_Price_Divisions.Buyer_Share}}%</p>\n                <p>Trimer Share : {{data.Product_Price_Divisions.Trimer_Share}}%</p>\n\n                <p> Shop Share : {{data.Product_Price_Divisions.Shop_Share}}%</p>\n                <p>Company Share : {{data.Product_Price_Divisions.Company_Share}}%</p>\n\n              </div>\n            </ng-template>\n          </tr>\n        \n                \n\n        </tbody>\n      </nz-table>\n    </div>\n\n    <nz-card style=\"margin-top: 20px;\" nzTitle=\"change status\" *ngIf=\"singleShopDetails.PurchaseStatus<5\">\n      <form nz-form [formGroup]=\"validateForm\" class=\"login-form\" (ngSubmit)=\"submitForm()\">\n        <nz-form-item>\n          <nz-form-label [nzSpan]=\"7\" nzRequired>Change Status</nz-form-label>\n          <nz-form-control [nzSpan]=\"12\">\n            <nz-select style=\"width: 100%;\" formControlName=\"changestatus\" nzAllowClear nzPlaceHolder=\"Change Status\">\n              <nz-option [nzValue]=\"changestatus\" [nzLabel]=\"changestatus\"></nz-option>\n            </nz-select>\n            <nz-form-explain\n              *ngIf=\"validateForm.get('changestatus').dirty&&validateForm.get('changestatus').hasError('required')\">\n              Please Select Status!</nz-form-explain>\n\n          </nz-form-control>\n        </nz-form-item>\n\n\n        <nz-form-item>\n          <nz-form-label [nzSpan]=\"7\" nzRequired>Description</nz-form-label>\n          <nz-form-control [nzSpan]=\"12\">\n            <textarea formControlName=\"comment\" nz-input rows=\"2\" placeholder=\"write Desc thing\"></textarea>\n            <nz-form-explain\n              *ngIf=\"validateForm.get('comment').dirty&&validateForm.get('comment').hasError('required')\">Please write\n              something here!</nz-form-explain>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-control style=\"    text-align: center;\" [nzSpan]=\"24\">\n\n            <button nz-button [nzType]=\"'primary'\">Update</button>\n\n          </nz-form-control>\n        </nz-form-item>\n      </form>\n\n    </nz-card>\n  </div>\n  <div nz-col nzSpan=\"4\">\n\n  </div>\n  <div nz-col nzSpan=\"8\">\n    <nz-card nzTitle=\"{{shopName}} Purchase Logs\">\n     \n      <nz-timeline>\n        <nz-timeline-item *ngFor=\"let item of PurchaseLogs.reverse() ; let i=index\">\n          <span [ngSwitch]=\"item.PurchaseStatus\">\n            <p *ngSwitchCase=\"1\">\n              Order Placed\n            </p>\n            <p *ngSwitchCase=\"2\">\n              Order Accepted\n            </p>\n            <p *ngSwitchCase=\"3\">\n              Order Shipped\n            </p>\n            <p *ngSwitchCase=\"4\">\n              Shippment Notifications\n            </p>\n            <p *ngSwitchCase=\"5\">\n              Order Delivered\n            </p>\n\n            <p *ngSwitchDefault>\n              No Status\n            </p> {{item.Time | date:'medium'}}\n            <p>{{item.Description}}</p>\n          </span>\n        </nz-timeline-item>\n\n      </nz-timeline>\n    </nz-card>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/vendor/shop-cart-details/shop-cart-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/vendor/shop-cart-details/shop-cart-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: ShopCartDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopCartDetailsComponent", function() { return ShopCartDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ShopCartDetailsComponent = /** @class */ (function () {
    function ShopCartDetailsComponent(_appService, fb, nzMessageService) {
        this._appService = _appService;
        this.fb = fb;
        this.nzMessageService = nzMessageService;
        this.singleShopDetails = [];
        this.PurchaseLogs = [];
    }
    ShopCartDetailsComponent.prototype.ngOnInit = function () {
        var singleOrdertails = this._appService.singleShopCartDetails;
        this.shopName = singleOrdertails.Shop_Name;
        this.PurchaseID = singleOrdertails.PurchaseID;
        this.getPurchasedetails();
        this.validateForm = this.fb.group({
            changestatus: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            comment: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    };
    ShopCartDetailsComponent.prototype.getPurchasedetails = function () {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            PurchaseID: this.PurchaseID
        };
        try {
            this._appService.postMethod('Get_Purchase_Details', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.singleShopDetails = resp.extras.Data;
                    _this.cartDetails = _this.singleShopDetails.Cart_Information;
                    _this.PurchaseLogs = _this.singleShopDetails.PurchaseLogs;
                    switch (_this.singleShopDetails.PurchaseStatus) {
                        case 1:
                            _this.chagnelogUrl = 'Accept_Shop_Purchase';
                            _this.changestatus = 'Order Accepted';
                            break;
                        case 2:
                            _this.chagnelogUrl = 'Shipping_Shop_Purchase';
                            _this.changestatus = 'Order Shipped';
                            break;
                        case 3:
                            _this.chagnelogUrl = 'Shipping_Notification_Shop_Purchase';
                            _this.changestatus = 'Shippment Notifications ';
                            break;
                        case 4:
                            _this.chagnelogUrl = 'Shipping_Notification_Shop_Purchase';
                            _this.changestatus = 'Shippment Notifications ';
                            break;
                        default:
                            break;
                    }
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
    ShopCartDetailsComponent.prototype.submitForm = function () {
        var _this = this;
        for (var i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        if (this.validateForm.valid) {
            var adminData = JSON.parse(localStorage.getItem("adminData"));
            var body = {
                AdminID: adminData.AdminID,
                SessionID: adminData.SessionID,
                PurchaseID: this.singleShopDetails.PurchaseID,
                Description: this.validateForm.value.comment
            };
            try {
                this._appService.postMethod(this.chagnelogUrl, body)
                    .subscribe(function (resp) {
                    if (resp.success) {
                        _this.validateForm.reset();
                        _this.nzMessageService.success('update sucessfully');
                        _this.getPurchasedetails();
                    }
                    else {
                        _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                    }
                }, function (error) {
                });
            }
            catch (e) {
            }
        }
    };
    ShopCartDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop-cart-details',
            template: __webpack_require__(/*! ./shop-cart-details.component.html */ "./src/app/vendor/shop-cart-details/shop-cart-details.component.html"),
            styles: [__webpack_require__(/*! ./shop-cart-details.component.css */ "./src/app/vendor/shop-cart-details/shop-cart-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]])
    ], ShopCartDetailsComponent);
    return ShopCartDetailsComponent;
}());



/***/ }),

/***/ "./src/app/vendor/shop-cart-details/shop-cart-details.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/vendor/shop-cart-details/shop-cart-details.module.ts ***!
  \**********************************************************************/
/*! exports provided: ShopCartDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopCartDetailsModule", function() { return ShopCartDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shop_cart_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shop-cart-details.component */ "./src/app/vendor/shop-cart-details/shop-cart-details.component.ts");
/* harmony import */ var src_app_shared_modue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _shop_cart_details_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop-cart-details.routing */ "./src/app/vendor/shop-cart-details/shop-cart-details.routing.ts");







var ShopCartDetailsModule = /** @class */ (function () {
    function ShopCartDetailsModule() {
    }
    ShopCartDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _shop_cart_details_routing__WEBPACK_IMPORTED_MODULE_6__["ShopCartDetailsRoutes"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                src_app_shared_modue__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_shop_cart_details_component__WEBPACK_IMPORTED_MODULE_4__["ShopCartDetailsComponent"]]
        })
    ], ShopCartDetailsModule);
    return ShopCartDetailsModule;
}());



/***/ }),

/***/ "./src/app/vendor/shop-cart-details/shop-cart-details.routing.ts":
/*!***********************************************************************!*\
  !*** ./src/app/vendor/shop-cart-details/shop-cart-details.routing.ts ***!
  \***********************************************************************/
/*! exports provided: ShopCartDetailsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopCartDetailsRoutes", function() { return ShopCartDetailsRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shop_cart_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop-cart-details.component */ "./src/app/vendor/shop-cart-details/shop-cart-details.component.ts");


var routes = [
    { path: '', component: _shop_cart_details_component__WEBPACK_IMPORTED_MODULE_1__["ShopCartDetailsComponent"] },
];
var ShopCartDetailsRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=shop-cart-details-shop-cart-details-module.js.map