(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendor-vendor-module"],{

/***/ "./src/app/vendor/vendor.component.css":
/*!*********************************************!*\
  !*** ./src/app/vendor/vendor.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n  .navigationMenu{\n    background-color: transparent;\n  }\n  .maincontent{\n      margin-top: 10px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL3ZlbmRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7RUFJRTtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO01BQ0ksZ0JBQWdCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdmVuZG9yL3ZlbmRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG4gIC5uYXZpZ2F0aW9uTWVudXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICAubWFpbmNvbnRlbnR7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/vendor/vendor.component.html":
/*!**********************************************!*\
  !*** ./src/app/vendor/vendor.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ul nz-menu class=\"navigationMenu\" [nzMode]=\"'horizontal'\">\n  <li nz-menu-item [routerLink]=\"['add-vendor']\" routerLinkActive=\"ant-menu-item-selected\">\n   Create Shop\n   </li>\n  <li nz-menu-item  [routerLink]=\"['view-vednor']\" routerLinkActive=\"ant-menu-item-selected\">\n    View Shops\n    \n  </li>\n  <li nz-menu-item  [routerLink]=\"['shoptPurchases']\" routerLinkActive=\"ant-menu-item-selected\">\n      Shop Purchases\n      \n    </li>\n</ul>\n<div class=\"maincontent\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/vendor/vendor.component.ts":
/*!********************************************!*\
  !*** ./src/app/vendor/vendor.component.ts ***!
  \********************************************/
/*! exports provided: VendorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorComponent", function() { return VendorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VendorComponent = /** @class */ (function () {
    function VendorComponent() {
    }
    VendorComponent.prototype.ngOnInit = function () {
    };
    VendorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendor',
            template: __webpack_require__(/*! ./vendor.component.html */ "./src/app/vendor/vendor.component.html"),
            styles: [__webpack_require__(/*! ./vendor.component.css */ "./src/app/vendor/vendor.component.css")]
        })
    ], VendorComponent);
    return VendorComponent;
}());



/***/ }),

/***/ "./src/app/vendor/vendor.module.ts":
/*!*****************************************!*\
  !*** ./src/app/vendor/vendor.module.ts ***!
  \*****************************************/
/*! exports provided: VendorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorModule", function() { return VendorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _vendor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor.component */ "./src/app/vendor/vendor.component.ts");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _vendor_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vendor.routing */ "./src/app/vendor/vendor.routing.ts");






var VendorModule = /** @class */ (function () {
    function VendorModule() {
    }
    VendorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _vendor_routing__WEBPACK_IMPORTED_MODULE_5__["VendorRoutingModule"]
            ],
            declarations: [_vendor_component__WEBPACK_IMPORTED_MODULE_3__["VendorComponent"]]
        })
    ], VendorModule);
    return VendorModule;
}());



/***/ }),

/***/ "./src/app/vendor/vendor.routing.ts":
/*!******************************************!*\
  !*** ./src/app/vendor/vendor.routing.ts ***!
  \******************************************/
/*! exports provided: VendorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorRoutingModule", function() { return VendorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _vendor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor.component */ "./src/app/vendor/vendor.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var routes = [
    {
        path: '', component: _vendor_component__WEBPACK_IMPORTED_MODULE_1__["VendorComponent"], children: [
            { path: 'add-vendor', loadChildren: './add-vendor/add-vendor.module#AddVendorModule' },
            { path: 'view-vednor', loadChildren: './view-vendor/view-vendor.module#ViewVendorModule' },
            { path: 'shoptPurchases', loadChildren: './shop_purchases/shop_purchases.module#Shop_purchasesModule' },
            { path: 'cartdetails/:id', loadChildren: './shop-cart-details/shop-cart-details.module#ShopCartDetailsModule' },
            { path: 'productsbyshop/:id/:Shop_Name', loadChildren: './products-by-shop/products-by-shop.module#ProductsByShopModule' },
            { path: 'viewLledger/:id/:name/:phone/:avilableAmount/:withdrwanAmount/:totalAmount', loadChildren: './view-ledger/view-ledger.module#ViewLedgerModule' },
            { path: '', redirectTo: 'add-vendor', pathMatch: 'prefix' }
        ]
    }
];
var VendorRoutingModule = /** @class */ (function () {
    function VendorRoutingModule() {
    }
    VendorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], VendorRoutingModule);
    return VendorRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=vendor-vendor-module.js.map