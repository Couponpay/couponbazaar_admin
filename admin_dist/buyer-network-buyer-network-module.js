(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buyer-network-buyer-network-module"],{

/***/ "./src/app/buyer-network/buyer-network.component.css":
/*!***********************************************************!*\
  !*** ./src/app/buyer-network/buyer-network.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dot {\r\n    height: 70px;\r\n    width: 70px;\r\n    background-color: #bbb;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    padding: 10px;\r\n  }\r\n  .gutter-box {\r\n    background: #00A0E9;\r\n    padding: 2px 0;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV5ZXItbmV0d29yay9idXllci1uZXR3b3JrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGFBQWE7RUFDZjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLGNBQWM7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9idXllci1uZXR3b3JrL2J1eWVyLW5ldHdvcmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb3Qge1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgLmd1dHRlci1ib3gge1xyXG4gICAgYmFja2dyb3VuZDogIzAwQTBFOTtcclxuICAgIHBhZGRpbmc6IDJweCAwO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/buyer-network/buyer-network.component.html":
/*!************************************************************!*\
  !*** ./src/app/buyer-network/buyer-network.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div nz-row>\r\n    <div nz-col  nzSpan=\"12\">\r\n<a (click)=\"onBack()\">Back</a>\r\n    </div>\r\n</div>\r\n<div nz-row style=\"margin-bottom: 10px;\">\r\n    <div nz-col nzSpan=\"8\" nzOffset=\"8\">\r\n       \r\n        <nz-card style=\"width:400px;\"  [nzTitle]=\"NetworkData.Buyer_Name + '-'+NetworkData.No_of_Child_Network\"  >\r\n            <div nz-row>\r\n                <p>phone Number:{{NetworkData.Buyer_PhoneNumber}}</p>\r\n  \r\n            </div>\r\n            <div nz-row>\r\n                <p>Available Amount:{{NetworkData.Available_Amount | number}}</p>\r\n  \r\n              </div>\r\n              <div nz-row>\r\n                  <p>Withdrawn Amount:{{NetworkData.Withdrawn_Amount | number}}</p>\r\n  \r\n                </div>\r\n                <div nz-row>\r\n                    <p>Total Amount:{{NetworkData.Total_Amount | number}}</p>\r\n  \r\n                  </div>\r\n                  \r\n        </nz-card>\r\n      </div>\r\n</div>\r\n<div>\r\n    <div nz-row [nzGutter]=\"24\">\r\n      <div nz-col [nzSpan]=\"3\"   *ngFor=\"let item of childrenData; let i=index\">\r\n        <nz-card style=\"cursor:pointer\" (click)=\"onclickNetwork(item)\"  [nzTitle]=\"item.Buyer_Name +'-'+item.No_of_Child_Network\" nzDescription=\"This is the description\" nzAvatar=\"user\">\r\n\r\n                <span>{{item.Buyer_PhoneNumber}}</span>\r\n  \r\n            \r\n           \r\n                <p>Available Amount:{{item.Available_Amount | number}} </p>\r\n  \r\n          \r\n             \r\n                  <p>Withdrawn Amount:{{item.Withdrawn_Amount | number}}</p>\r\n  \r\n             \r\n               \r\n                    <p>Total Amount:{{item.Total_Amount | number}}</p>\r\n  \r\n                \r\n  \r\n  \r\n          \r\n  \r\n          </nz-card>\r\n      </div>\r\n     \r\n    </div>\r\n  </div>\r\n<!-- <div nz-row>\r\n    <div nz-row  [nzGutter]=\"{ xs: 8, sm: 8, md: 8, lg: 8, xl: 8, xxl: 8 }\">\r\n        <div nz-col class=\"gutter-row\" nzSpan=\"3\"  *ngFor=\"let item of childrenData; let i=index\">\r\n            <nz-card style=\"cursor:pointer\" (click)=\"onclickNetwork(item)\"  [nzTitle]=\"item.Buyer_Name\" nzDescription=\"This is the description\" nzAvatar=\"user\">\r\n                <nz-badge [nzCount]=\"item.No_of_Child_Network\" style=\"margin-right: 24px;\">\r\n                    <nz-avatar [nzText]=\"item.Buyer_Name\" \r\n                    [nzSize]=\"64\" \r\n                   style=\"vertical-align: middle;background-color: #7265e6\">\r\n                  </nz-avatar>\r\n                </nz-badge>\r\n                \r\n                    <span>{{item.Buyer_PhoneNumber}}</span>\r\n      \r\n                \r\n               \r\n                    <p>Available Amount:{{item.Available_Amount | number}}</p>\r\n      \r\n              \r\n                 \r\n                      <p>Withdrawn Amount:{{item.Withdrawn_Amount | number}}</p>\r\n      \r\n                 \r\n                   \r\n                        <p>Total Amount:{{item.Total_Amount | number}}</p>\r\n      \r\n                    \r\n      \r\n      \r\n              \r\n      \r\n              </nz-card>\r\n        </div>\r\n        \r\n      </div>\r\n</div>\r\n<div nz-row style=\"margin-top: 20px;\">\r\n    <div nz-col style=\"height: 450px;text-align: center;margin-top: 20%;\" nzSpan=\"12\">\r\n<div nz-row>\r\n    <div  nz-col nzSpan=\"12\">\r\n        <nz-card style=\"width:300px;\"  [nzTitle]=\"NetworkData.Buyer_Name\" nzDescription=\"This is the description\" nzAvatar=\"user\">\r\n           \r\n          <div nz-row>\r\n              <p>phone Number:{{NetworkData.Buyer_PhoneNumber}}</p>\r\n\r\n          </div>\r\n          <div nz-row>\r\n              <p>Available Amount:{{NetworkData.Available_Amount | number}}</p>\r\n\r\n            </div>\r\n            <div nz-row>\r\n                <p>Withdrawn Amount:{{NetworkData.Withdrawn_Amount | number}}</p>\r\n\r\n              </div>\r\n              <div nz-row>\r\n                  <p>Total Amount:{{NetworkData.Total_Amount | number}}</p>\r\n\r\n                </div>\r\n                <div nz-row>\r\n                    <p>childs:{{NetworkData.No_of_Child_Network}}</p>\r\n  \r\n                  </div>\r\n\r\n            <p>childs:{{NetworkData.No_of_Child_Network}}</p>\r\n\r\n        </nz-card>\r\n      </div>\r\n     \r\n    \r\n</div>\r\n    \r\n    </div>\r\n    <div  nz-col style=\"padding: 10px;overflow-y:auto;height:500px;\" nz-col nzSpan=\"12\">\r\n      <div nz-row style=\"width:100%;margin-bottom: 10px;\" *ngFor=\"let item of childrenData; let i=index\" >\r\n          <nz-card style=\"width:300px;cursor:pointer\" (click)=\"onclickNetwork(item)\"  [nzTitle]=\"item.Buyer_Name\" nzDescription=\"This is the description\" nzAvatar=\"user\">\r\n              <nz-badge [nzCount]=\"item.No_of_Child_Network\" style=\"margin-right: 24px;\">\r\n                  <nz-avatar [nzText]=\"item.Buyer_Name\" \r\n                  [nzSize]=\"64\" \r\n                 style=\"vertical-align: middle;background-color: #7265e6\">\r\n                </nz-avatar>\r\n              </nz-badge>\r\n              <div nz-row>\r\n                  <p>phone Number:{{item.Buyer_PhoneNumber}}</p>\r\n    \r\n              </div>\r\n             \r\n                  <p>Available Amount:{{item.Available_Amount | number}}</p>\r\n    \r\n            \r\n                <div nz-row>\r\n                    <p>Withdrawn Amount:{{item.Withdrawn_Amount | number}}</p>\r\n    \r\n                  </div>\r\n                  <div nz-row>\r\n                      <p>Total Amount:{{item.Total_Amount | number}}</p>\r\n    \r\n                    </div>\r\n    \r\n    \r\n                <p>childs:{{NetworkData.No_of_Child_Network}}</p>\r\n    \r\n            </nz-card>\r\n        \r\n        \r\n        <span  (click)=\"onclickNetwork(item)\">\r\n             \r\n            </span>\r\n      </div>\r\n       \r\n    </div>\r\n  </div> -->\r\n\r\n"

/***/ }),

/***/ "./src/app/buyer-network/buyer-network.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/buyer-network/buyer-network.component.ts ***!
  \**********************************************************/
/*! exports provided: BuyerNetworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerNetworkComponent", function() { return BuyerNetworkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");




var BuyerNetworkComponent = /** @class */ (function () {
    function BuyerNetworkComponent(_appService, nzMessageService) {
        this._appService = _appService;
        this.nzMessageService = nzMessageService;
        this.NetworkData = [];
    }
    BuyerNetworkComponent.prototype.ngOnInit = function () {
        this.ViewBuyersList("");
    };
    BuyerNetworkComponent.prototype.ViewBuyersList = function (BuyerID) {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            BuyerID: BuyerID,
        };
        try {
            this._appService.postMethod('Buyer_Network_Heirarchy', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    // this.totalItem=resp.extras.Count
                    _this.NetworkData = resp.extras.ParentData;
                    _this.childrenData = resp.extras.ChildData;
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
    BuyerNetworkComponent.prototype.onclickNetwork = function (data) {
        this.ViewBuyersList(data.BuyerID);
    };
    BuyerNetworkComponent.prototype.onBack = function () {
        this.ViewBuyersList("");
    };
    BuyerNetworkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buyer-network',
            template: __webpack_require__(/*! ./buyer-network.component.html */ "./src/app/buyer-network/buyer-network.component.html"),
            styles: [__webpack_require__(/*! ./buyer-network.component.css */ "./src/app/buyer-network/buyer-network.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]])
    ], BuyerNetworkComponent);
    return BuyerNetworkComponent;
}());



/***/ }),

/***/ "./src/app/buyer-network/buyer-network.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/buyer-network/buyer-network.module.ts ***!
  \*******************************************************/
/*! exports provided: BuyerNetworkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerNetworkModule", function() { return BuyerNetworkModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _buyer_network_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buyer-network.component */ "./src/app/buyer-network/buyer-network.component.ts");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _buyer_network_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buyer-network.routing */ "./src/app/buyer-network/buyer-network.routing.ts");







var BuyerNetworkModule = /** @class */ (function () {
    function BuyerNetworkModule() {
    }
    BuyerNetworkModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _buyer_network_routing__WEBPACK_IMPORTED_MODULE_6__["BuyerNetworkRoutes"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
            ],
            declarations: [_buyer_network_component__WEBPACK_IMPORTED_MODULE_4__["BuyerNetworkComponent"]]
        })
    ], BuyerNetworkModule);
    return BuyerNetworkModule;
}());



/***/ }),

/***/ "./src/app/buyer-network/buyer-network.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/buyer-network/buyer-network.routing.ts ***!
  \********************************************************/
/*! exports provided: BuyerNetworkRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerNetworkRoutes", function() { return BuyerNetworkRoutes; });
/* harmony import */ var _buyer_network_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buyer-network.component */ "./src/app/buyer-network/buyer-network.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


var routes = [
    { path: '', component: _buyer_network_component__WEBPACK_IMPORTED_MODULE_0__["BuyerNetworkComponent"] },
];
var BuyerNetworkRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=buyer-network-buyer-network-module.js.map