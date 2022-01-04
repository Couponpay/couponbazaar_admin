(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form {\r\n    max-width: 60%;\r\n    margin-top: 5%;\r\n    padding: 15px;\r\n    margin-left: 25px;\r\n    width: 100%;\r\n  }\r\n\r\n  .login-form-forgot {\r\n    float: right;\r\n  }\r\n\r\n  .login-form-button {\r\n    width: 100%;\r\n    height: 50px;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n  }\r\n\r\n  .bg { \r\n  \r\n    /* Full height */\r\n    height: 300px; \r\n  \r\n    /* Center and scale the image nicely */\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7O0lBRUUsZ0JBQWdCO0lBQ2hCLGFBQWE7O0lBRWIsc0NBQXNDO0lBQ3RDLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1mb3JtIHtcclxuICAgIG1heC13aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1mb3JtLWZvcmdvdCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAubG9naW4tZm9ybS1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuXHJcbiAgLmJnIHsgXHJcbiAgXHJcbiAgICAvKiBGdWxsIGhlaWdodCAqL1xyXG4gICAgaGVpZ2h0OiAzMDBweDsgXHJcbiAgXHJcbiAgICAvKiBDZW50ZXIgYW5kIHNjYWxlIHRoZSBpbWFnZSBuaWNlbHkgKi9cclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row>\r\n  <!-- <div nz-col nzSpan=\"14\">\r\n  </div> -->\r\n  <div nz-col nzSpan=\"16\" [nzOffset]=\"8\">\r\n    <div nz-row>\r\n      <div nz-col nzSpan=\"18\"  [nzOffset]=\"1\" style=\"margin-top: 200px;\">\r\n        <!-- <img src=\"/assets/login_page.png\" /> -->\r\n        <h3 style=\"color: chocolate;font-size: 55px;font-weight: 50px;\">Buy Pay</h3>\r\n      </div>\r\n    </div>\r\n    <div nz-row>\r\n        <div nz-col nzSpan=\"16\">\r\n      <form nz-form [formGroup]=\"validateForm\" class=\"login-form\" (ngSubmit)=\"submitForm()\">\r\n        <nz-form-item>\r\n          <nz-form-control>\r\n            <nz-input-group [nzPrefix]=\"prefixUser\">\r\n              <input type=\"text\" nz-input formControlName=\"userName\" placeholder=\"User Email\">\r\n            </nz-input-group>\r\n            <nz-form-explain *ngIf=\"validateForm.get('userName').dirty && validateForm.get('userName').errors\">Please\r\n              input your username!</nz-form-explain>\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n          <nz-form-control>\r\n            <nz-input-group [nzPrefix]=\"prefixLock\">\r\n              <input type=\"password\" nz-input formControlName=\"password\" placeholder=\"Password\">\r\n            </nz-input-group>\r\n            <nz-form-explain *ngIf=\"validateForm.get('password').dirty && validateForm.get('password').errors\">Please\r\n              input your Password!</nz-form-explain>\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n          <nz-form-control>\r\n            <button nz-button [nzLoading]=\"isLoadingOne\" class=\"login-form-button\" [nzType]=\"'primary'\">Log in</button>\r\n\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n      </form>\r\n    </div>\r\n    </div>\r\n    <ng-template #prefixUser><i nz-icon type=\"user\"></i></ng-template>\r\n    <ng-template #prefixLock><i nz-icon type=\"lock\"></i></ng-template>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, _appService, nzMessageService, router) {
        this.fb = fb;
        this._appService = _appService;
        this.nzMessageService = nzMessageService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.isLoadingOne = false;
        this.validateForm = this.fb.group({
            userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            remember: [true]
        });
    };
    LoginComponent.prototype.submitForm = function () {
        var _this = this;
        for (var i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        if (this.validateForm.valid) {
            this.isLoadingOne = true;
            var userdata = {
                EmailID: this.validateForm.value.userName,
                Password: this.validateForm.value.password
            };
            try {
                this._appService.postMethod('Login', userdata)
                    .subscribe(function (resp) {
                    if (resp.success) {
                        _this.router.navigate(['/dashboard']);
                        localStorage.setItem('adminData', JSON.stringify(resp.extras.AdminData));
                        //this.isLoadingOne=false
                    }
                    else {
                        // if(parseInt(this._appService.apiMessages[resp.extras.msg])==6){
                        //   this.router.navigate(['/login'])
                        // }
                        _this.isLoadingOne = false;
                        _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                    }
                }, function (error) {
                });
            }
            catch (e) {
            }
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _login_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.routing */ "./src/app/login/login.routing.ts");







var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _login_routing__WEBPACK_IMPORTED_MODULE_6__["LoginRoutes"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/login.routing.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.routing.ts ***!
  \****************************************/
/*! exports provided: LoginRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutes", function() { return LoginRoutes; });
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


var routes = [
    { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
];
var LoginRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map