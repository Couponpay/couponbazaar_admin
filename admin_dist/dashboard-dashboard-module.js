(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.ant-layout{\r\n    height: 100vh;\r\n  }\r\n  .content{\r\n    padding: 10px 20px;\r\n  }\r\n  .BrandName{\r\n    color: white;\r\n    font-size: 18px;\r\n  \r\n  }\r\n  .trigger {\r\n    font-size: 18px;\r\n    line-height: 64px;\r\n    padding: 0 24px;\r\n    color: white;\r\n    cursor: pointer;\r\n    transition: color .3s;\r\n  }\r\n  .trigger:hover {\r\n    color: #1890ff;\r\n  \r\n  }\r\n  .showSide{\r\n    display: none;\r\n  }\r\n  .usericon{\r\n    float: right;\r\n    margin-right: 40px;\r\n    cursor: pointer;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7RUFDZjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osZUFBZTs7RUFFakI7RUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2YscUJBQXFCO0VBQ3ZCO0VBRUE7SUFDRSxjQUFjOztFQUVoQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmFudC1sYXlvdXR7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuICAuY29udGVudHtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICB9XHJcbiAgLkJyYW5kTmFtZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICBcclxuICB9XHJcblxyXG4gIC50cmlnZ2VyIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2NHB4O1xyXG4gICAgcGFkZGluZzogMCAyNHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjNzO1xyXG4gIH1cclxuXHJcbiAgLnRyaWdnZXI6aG92ZXIge1xyXG4gICAgY29sb3I6ICMxODkwZmY7XHJcbiAgXHJcbiAgfVxyXG4gIC5zaG93U2lkZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC51c2VyaWNvbntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\r\n\r\n  <div>\r\n    <nz-header style=\"  background: #1976d2; padding:0px;   box-shadow: 0 2px 5px 0 rgba(0,0,0,.3); padding:0;\">\r\n      <i class=\"trigger\" nz-icon [type]=\"isCollapsed?'menu-unfold':'menu-fold'\" (click)=\"isCollapsed=!isCollapsed\"></i>\r\n      <span style=\"font-size: 18px;\r\n        color: white;\">Buy Pay!</span>\r\n      <nz-dropdown [nzPlacement]=\"'bottomLeft'\" class=\"usericon\">\r\n        <a nz-dropdown>\r\n          <span>\r\n            <nz-avatar [nzText]=\"userName\" nzSize=\"large\" style=\"vertical-align: middle;\"></nz-avatar>\r\n          </span>\r\n        </a>\r\n        <ul nz-menu nzSelectable>\r\n          <li nz-menu-item>\r\n            <a (click)=\"onSignout()\">Logout</a>\r\n          </li>\r\n\r\n        </ul>\r\n      </nz-dropdown>\r\n\r\n    </nz-header>\r\n  </div>\r\n\r\n  <div nz-row>\r\n    <nz-layout>\r\n      <nz-sider [class.showSide]=\"isCollapsed\" nz-col nzSpan=\"4\" nzCollapsible [(nzCollapsed)]=\"isCollapsed\"\r\n        [nzTrigger]=\"triggerTemplate\">\r\n        <ul nz-menu [nzTheme]=\"'light'\" [nzMode]=\"'inline'\" style=\"height:100%\" [nzInlineCollapsed]=\"isCollapsed\">\r\n          <li nz-submenu [nzOpen]=\"true\">\r\n            <span title><i nz-icon type=\"setting\"></i> App settings</span>\r\n            <ul>\r\n              <li nz-menu-item [routerLink]=\"['vendor']\" routerLinkActive=\"ant-menu-item-selected\">Shop Settings</li>\r\n              <li nz-menu-item [routerLink]=\"['product']\" routerLinkActive=\"ant-menu-item-selected\">Products Settings\r\n              </li>\r\n              <li nz-menu-item [routerLink]=\"['introducer']\" routerLinkActive=\"ant-menu-item-selected\">Introducer</li>\r\n              <li nz-menu-item [routerLink]=\"['category']\" routerLinkActive=\"ant-menu-item-selected\">Category</li>\r\n              <li nz-menu-item [routerLink]=\"['NewsItems']\" routerLinkActive=\"ant-menu-item-selected\"> NewsItems</li>\r\n              <li nz-menu-item [routerLink]=\"['marketing']\" routerLinkActive=\"ant-menu-item-selected\">Marketing</li>\r\n\r\n              <li nz-menu-item [routerLink]=\"['companyLogs']\" routerLinkActive=\"ant-menu-item-selected\">Company Logs\r\n              </li>\r\n\r\n              <li nz-submenu>\r\n                <span title>Buyer</span>\r\n                <ul>\r\n                  <li nz-menu-item [routerLink]=\"['buyers']\" routerLinkActive=\"ant-menu-item-selected\">Buyers Logs</li>\r\n                  <li nz-menu-item [routerLink]=\"['buyersNetwork']\" routerLinkActive=\"ant-menu-item-selected\">Buyers\r\n                    Network</li>\r\n                  <!-- <li nz-menu-item [routerLink]=\"['trendingBuyers']\" routerLinkActive=\"ant-menu-item-selected\">Trending\r\n                    Buyers</li> -->\r\n                    <li nz-menu-item [routerLink]=\"['BuyersOrders']\" routerLinkActive=\"ant-menu-item-selected\">Buyers Orders</li>\r\n                </ul>\r\n              </li>\r\n              <li nz-menu-item [routerLink]=\"['Banner']\" routerLinkActive=\"ant-menu-item-selected\">Banner</li>\r\n              <li nz-menu-item [routerLink]=\"['Deliverytype']\" routerLinkActive=\"ant-menu-item-selected\">Delivery type</li>\r\n\r\n              \r\n              <li nz-menu-item [routerLink]=\"['Help']\" routerLinkActive=\"ant-menu-item-selected\">Help</li>\r\n             \r\n              <!-- <li nz-menu-item [routerLink]=\"['offers']\" routerLinkActive=\"ant-menu-item-selected\">Offers</li> -->\r\n              <li nz-menu-item [routerLink]=\"['bonanza']\" routerLinkActive=\"ant-menu-item-selected\">Bonanza</li>\r\n              <li nz-menu-item [routerLink]=\"['plots']\" routerLinkActive=\"ant-menu-item-selected\">Plots</li>\r\n              <li nz-menu-item [routerLink]=\"['couponCat']\" routerLinkActive=\"ant-menu-item-selected\">Coupon Category</li>\r\n              <li nz-menu-item [routerLink]=\"['appSetting']\" routerLinkActive=\"ant-menu-item-selected\">App Setting</li>\r\n              <li nz-menu-item [routerLink]=\"['userShops']\" routerLinkActive=\"ant-menu-item-selected\">User Shops</li>\r\n              <li nz-menu-item [routerLink]=\"['couponProducts']\" routerLinkActive=\"ant-menu-item-selected\">Coupon Products</li>\r\n              <li nz-menu-item [routerLink]=\"['targetReferral']\" routerLinkActive=\"ant-menu-item-selected\">Target Referrals</li>\r\n              <li nz-menu-item [routerLink]=\"['giftMeter']\" routerLinkActive=\"ant-menu-item-selected\">Gift Meter</li>\r\n              <li nz-menu-item [routerLink]=\"['WithdrawRequests']\" routerLinkActive=\"ant-menu-item-selected\">Withdraw Gift Requests</li>\r\n              <li nz-menu-item [routerLink]=\"['productLogs']\" routerLinkActive=\"ant-menu-item-selected\">Product Buyer Logs</li>\r\n              <li nz-menu-item [routerLink]=\"['boxAmountShares']\" routerLinkActive=\"ant-menu-item-selected\">Box Amount Shares</li>\r\n              <li nz-menu-item [routerLink]=\"['states']\" routerLinkActive=\"ant-menu-item-selected\">States</li>\r\n              <li nz-menu-item [routerLink]=\"['District']\" routerLinkActive=\"ant-menu-item-selected\">District</li>\r\n              \r\n              <li nz-menu-item [routerLink]=\"['PinCode']\" routerLinkActive=\"ant-menu-item-selected\">PinCode</li>\r\n\r\n              <li nz-menu-item [routerLink]=\"['admin']\" *ngIf=\"Admin_Section_Permision\"\r\n                routerLinkActive=\"ant-menu-item-selected\">Admin Settings</li>\r\n            </ul>\r\n          </li>\r\n        </ul>\r\n\r\n      </nz-sider>\r\n      <nz-content nz-col nzSpan=\"20\">\r\n        <div class=\"content\">\r\n          <router-outlet></router-outlet>\r\n        </div>\r\n\r\n      </nz-content>\r\n    </nz-layout>\r\n\r\n  </div>\r\n\r\n</nz-layout>\r\n<ng-template #trigger>\r\n  <i nz-icon type=\"up\"></i>\r\n</ng-template>"

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