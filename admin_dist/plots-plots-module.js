(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["plots-plots-module"],{

/***/ "./src/app/plots/plots.component.css":
/*!*******************************************!*\
  !*** ./src/app/plots/plots.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bsb3RzL3Bsb3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/plots/plots.component.html":
/*!********************************************!*\
  !*** ./src/app/plots/plots.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul nz-menu nzMode=\"horizontal\">\n  <li nz-menu-item [routerLink]=\"['add']\" routerLinkActive=\"ant-menu-item-selected\">\n    Add Plots\n  </li>\n  <li nz-menu-item [routerLink]=\"['view']\" routerLinkActive=\"ant-menu-item-selected\">\n    View Plots\n  </li>\n  <div class=\"maincontent\">\n    <router-outlet></router-outlet>\n  </div>"

/***/ }),

/***/ "./src/app/plots/plots.component.ts":
/*!******************************************!*\
  !*** ./src/app/plots/plots.component.ts ***!
  \******************************************/
/*! exports provided: PlotsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotsComponent", function() { return PlotsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlotsComponent = /** @class */ (function () {
    function PlotsComponent() {
    }
    PlotsComponent.prototype.ngOnInit = function () {
    };
    PlotsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plots',
            template: __webpack_require__(/*! ./plots.component.html */ "./src/app/plots/plots.component.html"),
            styles: [__webpack_require__(/*! ./plots.component.css */ "./src/app/plots/plots.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlotsComponent);
    return PlotsComponent;
}());



/***/ }),

/***/ "./src/app/plots/plots.module.ts":
/*!***************************************!*\
  !*** ./src/app/plots/plots.module.ts ***!
  \***************************************/
/*! exports provided: PlotsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotsModule", function() { return PlotsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _plots_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plots.component */ "./src/app/plots/plots.component.ts");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _plots_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plots.routing */ "./src/app/plots/plots.routing.ts");






var PlotsModule = /** @class */ (function () {
    function PlotsModule() {
    }
    PlotsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _plots_routing__WEBPACK_IMPORTED_MODULE_5__["PlotsRoutingModule"]
            ],
            declarations: [_plots_component__WEBPACK_IMPORTED_MODULE_3__["PlotsComponent"]]
        })
    ], PlotsModule);
    return PlotsModule;
}());



/***/ }),

/***/ "./src/app/plots/plots.routing.ts":
/*!****************************************!*\
  !*** ./src/app/plots/plots.routing.ts ***!
  \****************************************/
/*! exports provided: PlotsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotsRoutingModule", function() { return PlotsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _plots_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plots.component */ "./src/app/plots/plots.component.ts");





var routes = [
    {
        path: '', component: _plots_component__WEBPACK_IMPORTED_MODULE_4__["PlotsComponent"],
        children: [
            {
                path: 'add',
                loadChildren: './add-plots/add-plots.module#AddPlotsModule'
            },
            {
                path: 'view',
                loadChildren: './view-plots/view-plots.module#ViewPlotsModule'
            },
            {
                path: '', redirectTo: 'view', pathMatch: 'prefix'
            }
        ]
    }
];
var PlotsRoutingModule = /** @class */ (function () {
    function PlotsRoutingModule() {
    }
    PlotsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PlotsRoutingModule);
    return PlotsRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=plots-plots-module.js.map