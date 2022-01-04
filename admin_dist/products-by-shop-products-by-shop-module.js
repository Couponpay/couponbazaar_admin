(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-by-shop-products-by-shop-module"],{

/***/ "./src/app/vendor/products-by-shop/products-by-shop.component.css":
/*!************************************************************************!*\
  !*** ./src/app/vendor/products-by-shop/products-by-shop.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ant-row{\n    margin-bottom: 7px;\n}\n.editable-row-operations a {\n    margin-right: 8px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL3Byb2R1Y3RzLWJ5LXNob3AvcHJvZHVjdHMtYnktc2hvcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC92ZW5kb3IvcHJvZHVjdHMtYnktc2hvcC9wcm9kdWN0cy1ieS1zaG9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW50LXJvd3tcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG4uZWRpdGFibGUtcm93LW9wZXJhdGlvbnMgYSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/vendor/products-by-shop/products-by-shop.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/vendor/products-by-shop/products-by-shop.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row>\n  <div nz-col nzSpan=\"24\">\n    <a [routerLink]=\"[ '/dashboard','vendor', 'view-vednor']\">Back</a>\n  </div>\n</div>\n<div nz-row>\n  <div nz-col nzSpan=\"24\">\n    <span>Shope Name:<i><b> {{shopName}}</b></i> </span>\n  </div>\n</div>\n\n<div nz-row>\n  <div nz-col nzSpan=\"24\">\n    <button nz-button nzType=\"dashed\" (click)=\"onaddProduct()\">click to Add Stock</button>\n  </div>\n</div>\n<div nz-row>\n  <div nz-col nzSpan=\"24\">\n    <nz-table #shopProducts class=\"productsTable\" nzShowPagination=\"false\" [nzData]=\"productsOfshop\">\n      <thead>\n        <tr>\n          <th>Product Name</th>\n          <th>Product Price</th>\n          <th>Available Stock</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let data of productsOfshop\">\n\n          <td>{{data.Product_Name}}\n            <i class=\"fa fa-info-circle\" nz-popover nzPlacement=\"right\" nzTitle=\"Product Share\"\n              [nzContent]=\"contentTemplate\" nzTrigger=\"hover\" style=\"font-size:15px\"></i>\n          </td>\n          <td>{{data.Product_Price}}</td>\n          <td>{{data.Shop_Available_Stock}} </td>\n          <ng-template #contentTemplate>\n            <p>Introducer Share:{{data.Product_Price_Divisions.Introducer_Share}}%</p>\n            <p>Buyer Share:{{data.Product_Price_Divisions.Buyer_Share}}%</p>\n            <p>Trimer Share:{{data.Product_Price_Divisions.Trimer_Share}}%</p>\n            <p>Shop Share:{{data.Product_Price_Divisions.Shop_Share}}%</p>\n            <p>Company Share:{{data.Product_Price_Divisions.Company_Share}}%</p>\n          </ng-template>\n        </tr>\n      </tbody>\n    </nz-table>\n    <nz-pagination (nzPageIndexChange)=\"onNextPage_ProductsByShop($event)\" [nzPageSize]=\"limit\"\n      [nzPageIndex]=\"currentPage\" [nzTotal]=\"totalItem\">\n    </nz-pagination>\n  </div>\n</div>\n\n<nz-modal [(nzVisible)]=\"isProductModal\" nzTitle=\"Add Stock To {{shopName}}\" nzOkText=\"Add Product\" nzFooter=\" \"\n  (nzOnOk)=\"onlinkingProduct()\" (nzOnCancel)=\"handleCancel()\">\n  <nz-table #basicTable [nzData]=\"prodcutsList\">\n    <thead>\n      <tr>\n        <th>Product Name</th>\n        <th>Product Price</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <ng-container *ngFor=\"let data of prodcutsList; let i=index\">\n\n        <tr>\n          <td>{{data.Product_Name}}</td>\n          <td>{{data.Product_Price}}</td>\n          <td><a (click)=\"onAddStack(data,i)\">Add Stock</a></td>\n        </tr>\n        <tr *ngIf=\"isaddStack==i\">\n          <td colspan=\"3\">\n            <table>\n              <tbody>\n                <td>\n                  <nz-form-item>\n                    <nz-form-control [nzSpan]=\"12\">\n                      <input id=\"stock\"  [(ngModel)]=\"stackPrice\"  type=\"number\"  \n                        placeholder=\"Stock Quantity\" nz-input>\n\n                    </nz-form-control>\n                  </nz-form-item>\n                  <nz-form-item>\n                    <nz-form-control [nzSpan]=\"12\">\n                      <div class=\"editable-row-operations\" *ngIf=\"isaddStack==i\">\n                        <a (click)=\"onSaveStock(data,stackPrice)\">Save</a>\n\n                        <a nz-popconfirm nzTitle=\"Are you sure you want to cancel?\" (nzOnConfirm)=\"confirm()\" (nzOnCancel)=\"cancel()\"\n                          nzPlacement=\"rightTop\">cancel</a>\n                      </div>\n                    </nz-form-control>\n                  </nz-form-item>\n\n                </td>\n\n              </tbody>\n            </table>\n\n          </td>\n        </tr>\n      </ng-container>\n\n\n    </tbody>\n  </nz-table>\n  <!-- <form nz-form #ProductLinking=\"ngForm\">\n        <nz-form-item>\n          <nz-form-control [nzSpan]=\"12\">\n              <nz-select id=\"CountryName\" \n              [(ngModel)]=\"selectedproduct\" name=\"product\" nzShowSearch nzAllowClear nzPlaceHolder=\"Select Product\">\n              <nz-option *ngFor=\"let item of prodcutsList; let i=index\" [nzValue]=\"item\"\n                [nzLabel]=\"item.Product_Name+ '&'+ item.Product_Price\"></nz-option>\n            </nz-select>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n            <nz-form-control  [nzSpan]=\"12\">\n              <input id=\"OperationInput\" required  type=\"text\" placeholder=\"Quantity\"\n                 nz-input ngModel name=\"OperationInput\">\n            </nz-form-control>\n          </nz-form-item>\n        </form> -->\n</nz-modal>"

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