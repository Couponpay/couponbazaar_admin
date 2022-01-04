(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-by-shop-products-by-shop-module"],{

/***/ "./src/app/vendor/products-by-shop/products-by-shop.component.css":
/*!************************************************************************!*\
  !*** ./src/app/vendor/products-by-shop/products-by-shop.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ant-row{\r\n    margin-bottom: 7px;\r\n}\r\n.editable-row-operations a {\r\n    margin-right: 8px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL3Byb2R1Y3RzLWJ5LXNob3AvcHJvZHVjdHMtYnktc2hvcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC92ZW5kb3IvcHJvZHVjdHMtYnktc2hvcC9wcm9kdWN0cy1ieS1zaG9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW50LXJvd3tcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxufVxyXG4uZWRpdGFibGUtcm93LW9wZXJhdGlvbnMgYSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/vendor/products-by-shop/products-by-shop.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/vendor/products-by-shop/products-by-shop.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row>\r\n  <div nz-col nzSpan=\"24\">\r\n    <a [routerLink]=\"[ '/dashboard','vendor', 'view-vednor']\">Back</a>\r\n  </div>\r\n</div>\r\n<div nz-row>\r\n  <div nz-col nzSpan=\"24\">\r\n    <span>Shope Name:<i><b> {{shopName}}</b></i> </span>\r\n  </div>\r\n</div>\r\n\r\n<div nz-row>\r\n  <div nz-col nzSpan=\"24\">\r\n    <button nz-button nzType=\"dashed\" (click)=\"onaddProduct()\">click to Add Stock</button>\r\n  </div>\r\n</div>\r\n<div nz-row>\r\n  <div nz-col nzSpan=\"24\">\r\n    <nz-table #shopProducts class=\"productsTable\" nzShowPagination=\"false\" [nzData]=\"productsOfshop\">\r\n      <thead>\r\n        <tr>\r\n          <th>Product Name</th>\r\n          <th>Product Price</th>\r\n          <th>Available Stock</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let data of productsOfshop\">\r\n\r\n          <td>{{data.Product_Name}}\r\n            <i class=\"fa fa-info-circle\" nz-popover nzPlacement=\"right\" nzTitle=\"Product Share\"\r\n              [nzContent]=\"contentTemplate\" nzTrigger=\"hover\" style=\"font-size:15px\"></i>\r\n          </td>\r\n          <td>{{data.Product_Price}}</td>\r\n          <td>{{data.Shop_Available_Stock}} </td>\r\n          <ng-template #contentTemplate>\r\n            <p>Introducer Share:{{data.Product_Price_Divisions.Introducer_Share}}%</p>\r\n            <p>Buyer Share:{{data.Product_Price_Divisions.Buyer_Share}}%</p>\r\n            <p>Trimer Share:{{data.Product_Price_Divisions.Trimer_Share}}%</p>\r\n            <p>Shop Share:{{data.Product_Price_Divisions.Shop_Share}}%</p>\r\n            <p>Company Share:{{data.Product_Price_Divisions.Company_Share}}%</p>\r\n          </ng-template>\r\n        </tr>\r\n      </tbody>\r\n    </nz-table>\r\n    <nz-pagination (nzPageIndexChange)=\"onNextPage_ProductsByShop($event)\" [nzPageSize]=\"limit\"\r\n      [nzPageIndex]=\"currentPage\" [nzTotal]=\"totalItem\">\r\n    </nz-pagination>\r\n  </div>\r\n</div>\r\n\r\n<nz-modal [(nzVisible)]=\"isProductModal\" nzTitle=\"Add Stock To {{shopName}}\" nzOkText=\"Add Product\" nzFooter=\" \"\r\n  (nzOnOk)=\"onlinkingProduct()\" (nzOnCancel)=\"handleCancel()\">\r\n  <nz-table #basicTable [nzData]=\"prodcutsList\">\r\n    <thead>\r\n      <tr>\r\n        <th>Product Name</th>\r\n        <th>Product Price</th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <ng-container *ngFor=\"let data of prodcutsList; let i=index\">\r\n\r\n        <tr>\r\n          <td>{{data.Product_Name}}</td>\r\n          <td>{{data.Product_Price}}</td>\r\n          <td><a (click)=\"onAddStack(data,i)\">Add Stock</a></td>\r\n        </tr>\r\n        <tr *ngIf=\"isaddStack==i\">\r\n          <td colspan=\"3\">\r\n            <table>\r\n              <tbody>\r\n                <td>\r\n                  <nz-form-item>\r\n                    <nz-form-control [nzSpan]=\"12\">\r\n                      <input id=\"stock\"  [(ngModel)]=\"stackPrice\"  type=\"number\"  \r\n                        placeholder=\"Stock Quantity\" nz-input>\r\n\r\n                    </nz-form-control>\r\n                  </nz-form-item>\r\n                  <nz-form-item>\r\n                    <nz-form-control [nzSpan]=\"12\">\r\n                      <div class=\"editable-row-operations\" *ngIf=\"isaddStack==i\">\r\n                        <a (click)=\"onSaveStock(data,stackPrice)\">Save</a>\r\n\r\n                        <a nz-popconfirm nzTitle=\"Are you sure you want to cancel?\" (nzOnConfirm)=\"confirm()\" (nzOnCancel)=\"cancel()\"\r\n                          nzPlacement=\"rightTop\">cancel</a>\r\n                      </div>\r\n                    </nz-form-control>\r\n                  </nz-form-item>\r\n\r\n                </td>\r\n\r\n              </tbody>\r\n            </table>\r\n\r\n          </td>\r\n        </tr>\r\n      </ng-container>\r\n\r\n\r\n    </tbody>\r\n  </nz-table>\r\n  <!-- <form nz-form #ProductLinking=\"ngForm\">\r\n        <nz-form-item>\r\n          <nz-form-control [nzSpan]=\"12\">\r\n              <nz-select id=\"CountryName\" \r\n              [(ngModel)]=\"selectedproduct\" name=\"product\" nzShowSearch nzAllowClear nzPlaceHolder=\"Select Product\">\r\n              <nz-option *ngFor=\"let item of prodcutsList; let i=index\" [nzValue]=\"item\"\r\n                [nzLabel]=\"item.Product_Name+ '&'+ item.Product_Price\"></nz-option>\r\n            </nz-select>\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n            <nz-form-control  [nzSpan]=\"12\">\r\n              <input id=\"OperationInput\" required  type=\"text\" placeholder=\"Quantity\"\r\n                 nz-input ngModel name=\"OperationInput\">\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </form> -->\r\n</nz-modal>"

/***/ }),

/***/ "./src/app/vendor/products-by-shop/products-by-shop.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/vendor/products-by-shop/products-by-shop.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProductsByShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsByShopComponent", function() { return ProductsByShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var ProductsByShopComponent = /** @class */ (function () {
    function ProductsByShopComponent(route, _appService, nzMessageService) {
        this.route = route;
        this._appService = _appService;
        this.nzMessageService = nzMessageService;
        this.prodcutsList = [];
        this.productsOfshop = [];
        this.limit = this._appService.limit;
        this.currentPage = 1;
    }
    ProductsByShopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            _this.shopid = params.id;
            _this.getProductsByShop(params.id, 0);
            _this.shopName = params['Shop_Name'];
            // In a real app: dispatch action to load the details here.
        });
    };
    ProductsByShopComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProductsByShopComponent.prototype.onNextPage_ProductsByShop = function (event) {
        this.currentPage = event;
        var skip = (event - 1) * this._appService.limit;
        this.getProductsByShop(this.shopid, skip);
    };
    ProductsByShopComponent.prototype.getProductsByShop = function (shopid, skip) {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            ShopID: shopid,
            skip: skip,
            limit: this._appService.limit
        };
        try {
            this._appService.postMethod('List_All_Shop_Product_Stocks', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    if (skip == 0) {
                        _this.currentPage = 1;
                    }
                    _this.totalItem = resp.extras.Count;
                    _this.productsOfshop = resp.extras.Data;
                    if (_this.productsOfshop.length == 0) {
                        _this.nzMessageService.warning('No Products');
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
    ProductsByShopComponent.prototype.onaddProduct = function () {
        this.isProductModal = true;
        this.isaddStack = -1;
        this.viewProducts();
    };
    ProductsByShopComponent.prototype.handleCancel = function () {
        this.isProductModal = false;
    };
    ProductsByShopComponent.prototype.viewProducts = function () {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            skip: 0,
            limit: 1000
        };
        try {
            this._appService.postMethod('List_All_Products', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.prodcutsList = resp.extras.Data;
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
    ProductsByShopComponent.prototype.onlinkingProduct = function () {
    };
    ProductsByShopComponent.prototype.onAddStack = function (data, i) {
        this.stackPrice = null;
        this.isaddStack = i;
    };
    ProductsByShopComponent.prototype.onSaveStock = function (data, stockPrice) {
        var _this = this;
        if (stockPrice > 0) {
            var adminData = JSON.parse(localStorage.getItem("adminData"));
            var body = {
                AdminID: adminData.AdminID,
                SessionID: adminData.SessionID,
                ShopID: this.shopid,
                ProductID: data.ProductID,
                OperationInput: stockPrice,
                OperationType: 1
            };
            try {
                this._appService.postMethod('Update_Shop_Product_Stock', body)
                    .subscribe(function (resp) {
                    if (resp.success) {
                        _this.isProductModal = false;
                        _this.getProductsByShop(_this.shopid, 0);
                        _this.nzMessageService.success('product added to shop Sucessfully');
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
        else {
            this.nzMessageService.warning('Invalid Stock');
        }
    };
    ProductsByShopComponent.prototype.confirm = function () {
        this.stackPrice = null;
        this.isaddStack = -1;
    };
    ProductsByShopComponent.prototype.cancel = function () {
    };
    ProductsByShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products-by-shop',
            template: __webpack_require__(/*! ./products-by-shop.component.html */ "./src/app/vendor/products-by-shop/products-by-shop.component.html"),
            styles: [__webpack_require__(/*! ./products-by-shop.component.css */ "./src/app/vendor/products-by-shop/products-by-shop.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], ProductsByShopComponent);
    return ProductsByShopComponent;
}());



/***/ }),

/***/ "./src/app/vendor/products-by-shop/products-by-shop.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/vendor/products-by-shop/products-by-shop.module.ts ***!
  \********************************************************************/
/*! exports provided: ProductsByShopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsByShopModule", function() { return ProductsByShopModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _products_by_shop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products-by-shop.component */ "./src/app/vendor/products-by-shop/products-by-shop.component.ts");
/* harmony import */ var _products_by_shop_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products-by-shop.routing */ "./src/app/vendor/products-by-shop/products-by-shop.routing.ts");







var ProductsByShopModule = /** @class */ (function () {
    function ProductsByShopModule() {
    }
    ProductsByShopModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _products_by_shop_routing__WEBPACK_IMPORTED_MODULE_6__["ProductsByShopRoutes"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
            ],
            declarations: [_products_by_shop_component__WEBPACK_IMPORTED_MODULE_5__["ProductsByShopComponent"]]
        })
    ], ProductsByShopModule);
    return ProductsByShopModule;
}());



/***/ }),

/***/ "./src/app/vendor/products-by-shop/products-by-shop.routing.ts":
/*!*********************************************************************!*\
  !*** ./src/app/vendor/products-by-shop/products-by-shop.routing.ts ***!
  \*********************************************************************/
/*! exports provided: ProductsByShopRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsByShopRoutes", function() { return ProductsByShopRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_by_shop_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-by-shop.component */ "./src/app/vendor/products-by-shop/products-by-shop.component.ts");


var routes = [
    { path: '', component: _products_by_shop_component__WEBPACK_IMPORTED_MODULE_1__["ProductsByShopComponent"] },
];
var ProductsByShopRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=products-by-shop-products-by-shop-module.js.map