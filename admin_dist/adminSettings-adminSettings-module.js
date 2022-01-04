(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adminSettings-adminSettings-module"],{

/***/ "./src/app/adminSettings/adminSettings.component.css":
/*!***********************************************************!*\
  !*** ./src/app/adminSettings/adminSettings.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form {\n    max-width: 30%;\n   \n    padding: 15px;\n    margin-left: 25px;\n    width: 100%;\n  }\n\n  .login-form-forgot {\n    float: right;\n  }\n\n  .login-form-button {\n    width: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5TZXR0aW5ncy9hZG1pblNldHRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjOztJQUVkLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5TZXR0aW5ncy9hZG1pblNldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tZm9ybSB7XG4gICAgbWF4LXdpZHRoOiAzMCU7XG4gICBcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmxvZ2luLWZvcm0tZm9yZ290IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cblxuICAubG9naW4tZm9ybS1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/adminSettings/adminSettings.component.html":
/*!************************************************************!*\
  !*** ./src/app/adminSettings/adminSettings.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-tabset>\n    <nz-tab (nzClick)=\"oncreateAdmin_Tab()\" nzTitle=\"Create Admin\">\n        <form nz-form [formGroup]=\"validateForm\" class=\"login-form\" (ngSubmit)=\"submitForm()\">\n            <nz-form-item>\n                <nz-form-control>\n                  <nz-input-group [nzPrefix]=\"prefixUser\">\n                    <input type=\"text\" nz-input formControlName=\"userName\" placeholder=\"User Name\">\n                  </nz-input-group>\n                  <nz-form-explain *ngIf=\"validateForm.get('userName').dirty && validateForm.get('userName').errors\">Please input your username!</nz-form-explain>\n                </nz-form-control>\n              </nz-form-item>\n\n            <nz-form-item>\n              <nz-form-control>\n                <nz-input-group >\n                  <input type=\"text\" nz-input formControlName=\"userEmail\" placeholder=\"User Email\">\n                </nz-input-group>\n                <nz-form-explain *ngIf=\"validateForm.get('userEmail').dirty && validateForm.get('userEmail').errors\">Please input Email!</nz-form-explain>\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n              <nz-form-control>\n                <nz-input-group [nzPrefix]=\"prefixLock\">\n                  <input type=\"password\" nz-input formControlName=\"password\" placeholder=\"Password\">\n                </nz-input-group>\n                <nz-form-explain *ngIf=\"validateForm.get('password').dirty && validateForm.get('password').errors\">Please input your Password!</nz-form-explain>\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n                <nz-form-control>\n                  <nz-input-group >\n                      <nz-form-label [nzSpan]=\"8\" nzFor=\"email\">Admin permissions</nz-form-label>\n                      <nz-form-control [nzSpan]=\"14\">\n                          <nz-switch [(ngModel)]=\"switchValue\" formControlName=\"AdminPermistion\"></nz-switch>                    \n                            </nz-form-control>\n                      \n                  </nz-input-group>\n                </nz-form-control>\n              </nz-form-item>\n            <nz-form-item>\n              <nz-form-control>\n               \n                <button nz-button class=\"login-form-button\" [nzType]=\"'primary'\">Create </button>\n                \n              </nz-form-control>\n            </nz-form-item>\n          </form>\n          <ng-template #prefixUser><i nz-icon type=\"user\"></i></ng-template>\n          <ng-template #prefixLock><i nz-icon type=\"lock\"></i></ng-template>\n    </nz-tab>\n    <nz-tab (nzClick)=\"onViewAdmins_Tab()\" nzTitle=\"View Admin\">\n        <div nz-row class=\"logtable\">\n            <div nz-col nzSpan=\"24\">\n              <nz-table class=\"logTable\" nzShowPagination=\"false\" #basicTable [nzData]=\"adminUsers\">\n                <thead>\n                  <tr>\n                    <th> Name</th>\n                    <th>EmailID</th>\n                    <th>Admin Section Permision</th>\n                    \n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let data of adminUsers;let i = index\">\n                    <td>{{data.Name}}</td>\n                    <td>{{data.EmailID}}</td>\n                    <td>{{data.Admin_Section_Permision}}</td>\n                    \n                  </tr>\n                </tbody>\n              </nz-table>\n          \n            </div>\n          </div>\n          <nz-pagination (nzPageIndexChange)=\"onNextPage($event)\"  [nzPageSize]=\"limit\" [nzPageIndex]=\"currentPage\" [nzTotal]=\"totalItem\"></nz-pagination>\n    </nz-tab>\n   \n    </nz-tabset>"

/***/ }),

/***/ "./src/app/adminSettings/adminSettings.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/adminSettings/adminSettings.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSettingsComponent", function() { return AdminSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var AdminSettingsComponent = /** @class */ (function () {
    function AdminSettingsComponent(fb, _appService, nzMessageService) {
        this.fb = fb;
        this._appService = _appService;
        this.nzMessageService = nzMessageService;
        this.limit = this._appService.limit;
        this.currentPage = 1;
        this.switchValue = false;
    }
    AdminSettingsComponent.prototype.ngOnInit = function () {
        this.validateForm = this.fb.group({
            userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            userEmail: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            AdminPermistion: [false],
        });
    };
    AdminSettingsComponent.prototype.oncreateAdmin_Tab = function () {
        this.validateForm.reset();
    };
    AdminSettingsComponent.prototype.onViewAdmins_Tab = function () {
        this.viewAdmins(0);
    };
    AdminSettingsComponent.prototype.submitForm = function () {
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
                Name: this.validateForm.value.userName,
                Password: this.validateForm.value.password,
                Admin_Section_Permision: this.validateForm.value.AdminPermistion,
                EmailID: this.validateForm.value.userEmail
            };
            try {
                this._appService.postMethod('Create_Admin_User', body)
                    .subscribe(function (resp) {
                    if (resp.success) {
                        _this.nzMessageService.success('admin Added Sucessfully');
                        _this.validateForm.reset();
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
    AdminSettingsComponent.prototype.viewAdmins = function (skip) {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            skip: skip,
            limit: this._appService.limit
        };
        try {
            this._appService.postMethod('List_All_Admin_User', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    if (skip == 0) {
                        _this.currentPage = 1;
                    }
                    _this.totalItem = resp.extras.Count;
                    _this.adminUsers = resp.extras.Data;
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
    AdminSettingsComponent.prototype.onNextPage = function (event) {
        this.currentPage = this.currentPage;
        var skip = (event - 1) * this._appService.limit;
        this.viewAdmins(skip);
    };
    AdminSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adminSettings',
            template: __webpack_require__(/*! ./adminSettings.component.html */ "./src/app/adminSettings/adminSettings.component.html"),
            styles: [__webpack_require__(/*! ./adminSettings.component.css */ "./src/app/adminSettings/adminSettings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], AdminSettingsComponent);
    return AdminSettingsComponent;
}());



/***/ }),

/***/ "./src/app/adminSettings/adminSettings.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/adminSettings/adminSettings.module.ts ***!
  \*******************************************************/
/*! exports provided: AdminSettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSettingsModule", function() { return AdminSettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _adminSettings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adminSettings.component */ "./src/app/adminSettings/adminSettings.component.ts");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _adminSettings_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adminSettings.routing */ "./src/app/adminSettings/adminSettings.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var AdminSettingsModule = /** @class */ (function () {
    function AdminSettingsModule() {
    }
    AdminSettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _adminSettings_routing__WEBPACK_IMPORTED_MODULE_5__["AdminSettingsRoutes"]
            ],
            declarations: [_adminSettings_component__WEBPACK_IMPORTED_MODULE_3__["AdminSettingsComponent"]]
        })
    ], AdminSettingsModule);
    return AdminSettingsModule;
}());



/***/ }),

/***/ "./src/app/adminSettings/adminSettings.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/adminSettings/adminSettings.routing.ts ***!
  \********************************************************/
/*! exports provided: AdminSettingsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSettingsRoutes", function() { return AdminSettingsRoutes; });
/* harmony import */ var _adminSettings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminSettings.component */ "./src/app/adminSettings/adminSettings.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


var routes = [
    { path: '', component: _adminSettings_component__WEBPACK_IMPORTED_MODULE_0__["AdminSettingsComponent"] },
];
var AdminSettingsRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=adminSettings-adminSettings-module.js.map