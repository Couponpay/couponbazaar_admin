(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.ant-layout{\n    height: 100vh;\n  }\n  .content{\n    padding: 10px 20px;\n  }\n  .BrandName{\n    color: white;\n    font-size: 18px;\n  \n  }\n  .trigger {\n    font-size: 18px;\n    line-height: 64px;\n    padding: 0 24px;\n    color: white;\n    cursor: pointer;\n    transition: color .3s;\n  }\n  .trigger:hover {\n    color: #1890ff;\n  \n  }\n  .showSide{\n    display: none;\n  }\n  .usericon{\n    float: right;\n    margin-right: 40px;\n    cursor: pointer;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7RUFDZjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osZUFBZTs7RUFFakI7RUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2YscUJBQXFCO0VBQ3ZCO0VBRUE7SUFDRSxjQUFjOztFQUVoQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5hbnQtbGF5b3V0e1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbiAgLmNvbnRlbnR7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICB9XG4gIC5CcmFuZE5hbWV7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgXG4gIH1cblxuICAudHJpZ2dlciB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4zcztcbiAgfVxuXG4gIC50cmlnZ2VyOmhvdmVyIHtcbiAgICBjb2xvcjogIzE4OTBmZjtcbiAgXG4gIH1cbiAgLnNob3dTaWRle1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnVzZXJpY29ue1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\n\n  <div>\n    <nz-header style=\"  background: #1976d2; padding:0px;   box-shadow: 0 2px 5px 0 rgba(0,0,0,.3); padding:0;\">\n      <i class=\"trigger\" nz-icon [type]=\"isCollapsed?'menu-unfold':'menu-fold'\" (click)=\"isCollapsed=!isCollapsed\"></i>\n      <span style=\"font-size: 18px;\n        color: white;\">Coupon Shop!</span>\n      <nz-dropdown [nzPlacement]=\"'bottomLeft'\" class=\"usericon\">\n        <a nz-dropdown>\n          <span>\n            <nz-avatar [nzText]=\"userName\" nzSize=\"large\" style=\"vertical-align: middle;\"></nz-avatar>\n          </span>\n        </a>\n        <ul nz-menu nzSelectable>\n          <li nz-menu-item>\n            <a (click)=\"onSignout()\">Logout</a>\n          </li>\n\n        </ul>\n      </nz-dropdown>\n\n    </nz-header>\n  </div>\n\n  <div nz-row>\n    <nz-layout>\n      <nz-sider [class.showSide]=\"isCollapsed\" nz-col nzSpan=\"4\" nzCollapsible [(nzCollapsed)]=\"isCollapsed\"\n        [nzTrigger]=\"triggerTemplate\">\n        <ul nz-menu [nzTheme]=\"'light'\" [nzMode]=\"'inline'\" style=\"height:100%\" [nzInlineCollapsed]=\"isCollapsed\">\n          <li nz-submenu [nzOpen]=\"true\">\n            <span title><i nz-icon type=\"setting\"></i> App settings</span>\n            <ul>\n              <li nz-menu-item [routerLink]=\"['vendor']\" routerLinkActive=\"ant-menu-item-selected\">Shop Settings</li>\n              <li nz-menu-item [routerLink]=\"['product']\" routerLinkActive=\"ant-menu-item-selected\">Products Settings\n              </li>\n              <li nz-menu-item [routerLink]=\"['introducer']\" routerLinkActive=\"ant-menu-item-selected\">Introducer</li>\n              <li nz-menu-item [routerLink]=\"['category']\" routerLinkActive=\"ant-menu-item-selected\">Category</li>\n              <li nz-menu-item [routerLink]=\"['NewsItems']\" routerLinkActive=\"ant-menu-item-selected\"> NewsItems</li>\n              <li nz-menu-item [routerLink]=\"['marketing']\" routerLinkActive=\"ant-menu-item-selected\">Marketing</li>\n\n              <li nz-menu-item [routerLink]=\"['companyLogs']\" routerLinkActive=\"ant-menu-item-selected\">Company Logs\n              </li>\n\n              <li nz-submenu>\n                <span title>Buyer</span>\n                <ul>\n                  <li nz-menu-item [routerLink]=\"['buyers']\" routerLinkActive=\"ant-menu-item-selected\">Buyers Logs</li>\n                  <li nz-menu-item [routerLink]=\"['buyersNetwork']\" routerLinkActive=\"ant-menu-item-selected\">Buyers\n                    Network</li>\n                  <!-- <li nz-menu-item [routerLink]=\"['trendingBuyers']\" routerLinkActive=\"ant-menu-item-selected\">Trending\n                    Buyers</li> -->\n                    <li nz-menu-item [routerLink]=\"['BuyersOrders']\" routerLinkActive=\"ant-menu-item-selected\">Buyers Orders</li>\n                </ul>\n              </li>\n              <li nz-menu-item [routerLink]=\"['Banner']\" routerLinkActive=\"ant-menu-item-selected\">Banner</li>\n              <li nz-menu-item [routerLink]=\"['Deliverytype']\" routerLinkActive=\"ant-menu-item-selected\">Delivery type</li>\n\n              \n              <li nz-menu-item [routerLink]=\"['Help']\" routerLinkActive=\"ant-menu-item-selected\">Help</li>\n             \n              <!-- <li nz-menu-item [routerLink]=\"['offers']\" routerLinkActive=\"ant-menu-item-selected\">Offers</li> -->\n              <li nz-menu-item [routerLink]=\"['bonanza']\" routerLinkActive=\"ant-menu-item-selected\">Bonanza</li>\n              <li nz-menu-item [routerLink]=\"['plots']\" routerLinkActive=\"ant-menu-item-selected\">Plots</li>\n              <li nz-menu-item [routerLink]=\"['couponCat']\" routerLinkActive=\"ant-menu-item-selected\">Coupon Category</li>\n              <li nz-menu-item [routerLink]=\"['appSetting']\" routerLinkActive=\"ant-menu-item-selected\">App Setting</li>\n              <li nz-menu-item [routerLink]=\"['userShops']\" routerLinkActive=\"ant-menu-item-selected\">User Shops</li>\n              <li nz-menu-item [routerLink]=\"['couponProducts']\" routerLinkActive=\"ant-menu-item-selected\">Coupon Products</li>\n              <li nz-menu-item [routerLink]=\"['targetReferral']\" routerLinkActive=\"ant-menu-item-selected\">Target Referrals</li>\n              <li nz-menu-item [routerLink]=\"['giftMeter']\" routerLinkActive=\"ant-menu-item-selected\">Gift Meter</li>\n              <li nz-menu-item [routerLink]=\"['WithdrawRequests']\" routerLinkActive=\"ant-menu-item-selected\">Withdraw Gift Requests</li>\n              <li nz-menu-item [routerLink]=\"['productLogs']\" routerLinkActive=\"ant-menu-item-selected\">Product Buyer Logs</li>\n              <li nz-menu-item [routerLink]=\"['boxAmountShares']\" routerLinkActive=\"ant-menu-item-selected\">Box Amount Shares</li>\n              <li nz-menu-item [routerLink]=\"['states']\" routerLinkActive=\"ant-menu-item-selected\">States</li>\n              <li nz-menu-item [routerLink]=\"['District']\" routerLinkActive=\"ant-menu-item-selected\">District</li>\n              \n              <li nz-menu-item [routerLink]=\"['PinCode']\" routerLinkActive=\"ant-menu-item-selected\">PinCode</li>\n\n              <li nz-menu-item [routerLink]=\"['admin']\" *ngIf=\"Admin_Section_Permision\"\n                routerLinkActive=\"ant-menu-item-selected\">Admin Settings</li>\n            </ul>\n          </li>\n        </ul>\n\n      </nz-sider>\n      <nz-content nz-col nzSpan=\"20\">\n        <div class=\"content\">\n          <router-outlet></router-outlet>\n        </div>\n\n      </nz-content>\n    </nz-layout>\n\n  </div>\n\n</nz-layout>\n<ng-template #trigger>\n  <i nz-icon type=\"up\"></i>\n</ng-template>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router) {
        this.router = router;
        this.isCollapsed = false;
        this.triggerTemplate = null;
        this.Admin_Section_Permision = false;
        var data = JSON.parse(localStorage.getItem("adminData"));
        this.userName = data.Name;
        this.Admin_Section_Permision = data.Admin_Section_Permision;
    }
    DashboardComponent.prototype.changeTrigger = function () {
        this.triggerTemplate = this.customTrigger;
    };
    DashboardComponent.prototype.onSignout = function () {
        localStorage.clear();
        this.router.navigate(['login']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('trigger'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])
    ], DashboardComponent.prototype, "customTrigger", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.routing */ "./src/app/dashboard/dashboard.routing.ts");






var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _dashboard_routing__WEBPACK_IMPORTED_MODULE_5__["DashboardRoutes"]
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.routing.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.routing.ts ***!
  \************************************************/
/*! exports provided: DashboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutes", function() { return DashboardRoutes; });
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


var routes = [
    {
        path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"],
        children: [
            { path: 'vendor', loadChildren: './../vendor/vendor.module#VendorModule' },
            { path: 'plots', loadChildren: './../plots/plots.module#PlotsModule' },
            { path: 'admin', loadChildren: './../adminSettings/adminSettings.module#AdminSettingsModule' },
            { path: 'product', loadChildren: './../products/products.module#ProductsModule' },
            { path: 'companyLogs', loadChildren: './../companyLogs/companyLogs.module#CompanyLogsModule' },
            { path: 'buyers', loadChildren: './../buyers/buyers.module#BuyersModule' },
            { path: 'Help', loadChildren: './../help/help.module#HelpModule' },
            { path: 'Banner', loadChildren: './../banner/banner.module#BannerModule' },
            { path: 'Deliverytype', loadChildren: './../delivery_type/delivery_type.module#Delivery_typeModule' },
            { path: 'category', loadChildren: './../category/category.module#CategoryModule' },
            { path: 'NewsItems',
                loadChildren: './../NewsItems/NewsItems.module#NewsItemsModule' },
            { path: 'marketing',
                loadChildren: './../marketing/marketing.module#MarketingModule' },
            { path: 'BuyersOrders', loadChildren: './../buyers/buyers-orders/buyers-orders.module#BuyersOrdersModule' },
            {
                path: 'buyersLogs/:id/:name/:avilableAmount/:withdrwanAmount/:totalAmount',
                loadChildren: './../buyers/buyers-logs/buyers-logs.module#BuyersLogsModule'
            },
            // {path:'trendingBuyers',loadChildren:'./../buyers/trending-buyers/trending-buyers.module#TrendingBuyersModule'},
            { path: 'buyersNetwork', loadChildren: './../buyer-network/buyer-network.module#BuyerNetworkModule' },
            { path: 'buyersbills/:id/:name', loadChildren: './../buyers/buyer-bills/buyer-bills.module#BuyerBillsModule' },
            { path: 'trimmeshare', loadChildren: './../TrimmerShare/TrimmerShare.module#TrimmerShareModule' },
            { path: 'introducer', loadChildren: './../introducer/introducer.module#IntroducerModule' },
            { path: 'bonanza', loadChildren: './../bonanza/bonanza.module#BonanzaModule' },
            { path: 'couponCat', loadChildren: './../coupon-category/coupon-category.module#CouponCategoryModule' },
            { path: 'appSetting', loadChildren: './../common-app-settings/common-app-settings.module#CommonAppSettingsModule' },
            { path: 'userShops', loadChildren: './../user-shops/user-shops.module#UserShopsModule' },
            { path: 'couponProducts', loadChildren: './../coupon-products/coupon-products.module#CouponProductsModule' },
            { path: 'targetReferral', loadChildren: './../target-referrals/target-referrals.module#TargetReferralsModule' },
            { path: 'giftMeter', loadChildren: './../gift-meter/gift-meter.module#GiftMeterModule' },
            { path: 'WithdrawRequests', loadChildren: './../withdraw-gift-requests/withdraw-gift-requests.module#WithdrawGiftRequestsModule' },
            { path: 'productLogs', loadChildren: './../product-buyer-logs/product-buyer-logs.module#ProductBuyerLogsModule' },
            { path: 'boxAmountShares', loadChildren: './../box-amount-shares/box-amount-shares.module#BoxAmountSharesModule' },
            { path: 'states', loadChildren: './../state-module/state-module.module#StateModuleModule' },
            // { path: 'states', loadChildren: './../state-module/state-module.module#StateModuleModule' },
            { path: 'District', loadChildren: './../District/District.module#DistrictModule' },
            { path: 'PinCode', loadChildren: './../PinCode/PinCode.module#PinCodeModule' },
            {
                path: 'introducerlogs/:id/:name/:avilableAmount/:withdrwanAmount/:totalAmount',
                loadChildren: './../introducer/introducer-logs/introducer-logs.module#IntroducerLogsModule'
            },
            // {path:'offers',loadChildren:'./../offers/offers.module#OffersModule'},
            { path: '', redirectTo: 'vendor', pathMatch: 'full' }
        ],
    },
];
var DashboardRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map