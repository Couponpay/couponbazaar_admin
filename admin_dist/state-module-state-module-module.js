(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["state-module-state-module-module"],{

/***/ "./src/app/state-module/state-module-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/state-module/state-module-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: StateModuleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateModuleRoutingModule", function() { return StateModuleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _state_module_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state-module.component */ "./src/app/state-module/state-module.component.ts");





var routes = [
    { path: '', component: _state_module_component__WEBPACK_IMPORTED_MODULE_4__["StateModuleComponent"] }
];
var StateModuleRoutingModule = /** @class */ (function () {
    function StateModuleRoutingModule() {
    }
    StateModuleRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StateModuleRoutingModule);
    return StateModuleRoutingModule;
}());



/***/ }),

/***/ "./src/app/state-module/state-module.component.css":
/*!*********************************************************!*\
  !*** ./src/app/state-module/state-module.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRlLW1vZHVsZS9zdGF0ZS1tb2R1bGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/state-module/state-module.component.html":
/*!**********************************************************!*\
  !*** ./src/app/state-module/state-module.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row *ngIf=\"viewForm==false\">\n  <div nz-col nzSpan=\"4\" [nzOffset]=\"20\">\n    <button nz-button nzType=\"primary\" style=\"float: right;width: 100%\" (click)=\"OnclickProductAdd()\">\n      Add State\n      </button>\n  </div>\n  <div nz-col nzSpan=\"24\" style=\"padding: 20px 0px;\">\n    <nz-tabset>\n      <nz-tab (nzClick)=\"onTabClick(1)\" nzTitle=\"Active States\">\n      </nz-tab>\n      <nz-tab (nzClick)=\"onTabClick(2)\" nzTitle=\"Inactivated States\">\n      </nz-tab>\n    </nz-tabset>\n    <nz-table #basicTable [nzLoading]=\"isTableListLoadin\" nzShowPagination=\"false\" [nzData]=\"StatesListArray\"\n      style=\"background: #FFF;\">\n      <thead>\n        <tr>\n          <th>S.No</th>\n          <th>State Name</th>\n          <th>created at</th>\n          <th></th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let data of StatesListArray\">\n          <td>{{data.SNo}}</td>\n          <td>{{data.State_Name}}</td>\n          <td>{{data.created_at | date:\"medium\"}}</td>\n          <td> <a (click)=\"onEdit(data)\">Edit</a></td>\n          <td>\n            <span [ngSwitch]=\"data.Status\">\n              <span *ngSwitchCase=true>\n                <a nz-popconfirm (nzOnConfirm)=\"onActionOnHelp(data)\"\n                  nzTitle=\"Are you sure you want to Inactive this?\">Make Inactive</a>\n              </span>\n              <span *ngSwitchCase=false>\n                <a style=\"color: red;\" nz-popconfirm (nzOnConfirm)=\"onActionOnHelp(data)\"\n                  nzTitle=\"Are you sure you want to Active this?\">Make Active</a>\n              </span>\n              <span *ngSwitchDefault>\n                NA\n              </span>\n            </span>\n          </td>\n        </tr>\n\n      </tbody>\n    </nz-table>\n  </div>\n  <nz-pagination [nzShowTotal]=\"totalTemplate\" (nzPageIndexChange)=\"onNextPage($event)\" [nzPageSize]=\"limit\"\n  [nzPageIndex]=\"currentPage\" [nzTotal]=\"Count\"></nz-pagination>\n<ng-template #totalTemplate let-total>Total {{ Count }}</ng-template>\n</div>\n\n<div nz-row *ngIf=\"viewForm==true\">\n  <div nz-col nzSpan=\"24\" style=\"padding: 20px 0px;\">\n    <nz-card>\n    <form nz-form [formGroup]=\"addForm\" class=\"login-form\">\n\n      <div nz-row nzGutter=\"8\">\n        <div nz-col nzSpan=\"12\">\n          <nz-form-item>\n            <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"S_NO\">S NO</nz-form-label>\n            <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n                <input type=\"number\" formControlName=\"SNo\" nz-input placeholder=\"Please enter S NO\" />\n            </nz-form-control>\n          </nz-form-item>\n        </div>\n      </div>\n      <div nz-row nzGutter=\"8\">\n        <div nz-col nzSpan=\"12\">\n          <nz-form-item>\n            <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired >State Name</nz-form-label>\n            <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n                <input type=\"text\" formControlName=\"State_Name\" nz-input placeholder=\"Please enter State Name\" />\n            </nz-form-control>\n          </nz-form-item>\n        </div>\n      </div>\n\n      <div nz-row style=\"margin-top: 30px;\">\n       \n        <div nz-col nzSpan=\"3\" [nzOffset]=\"3\">\n              <button nz-button nzType=\"primary\" (click)=\"onClickSubmitForm()\" style=\"width:100%\"><span>{{onEditOpen?\"Update State\":\"Create State\"}}</span></button> \n        </div>\n        <div nz-col nzSpan=\"2\" [nzOffset]=\"1\">\n          <button nz-button nzType=\"default\" (click)=\"close()\" style=\"width:100%\">close</button> \n    </div>\n      </div>\n    \n    </form>\n  </nz-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/state-module/state-module.component.ts":
/*!********************************************************!*\
  !*** ./src/app/state-module/state-module.component.ts ***!
  \********************************************************/
/*! exports provided: StateModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateModuleComponent", function() { return StateModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");





var StateModuleComponent = /** @class */ (function () {
    function StateModuleComponent(fb, nzMessageService, _appService) {
        this.fb = fb;
        this.nzMessageService = nzMessageService;
        this._appService = _appService;
        this.skip = 0;
        this.limit = 10;
        this.onEditOpen = false;
        this.currentPage = 1;
        this.lablewidth = 8;
        this.controlwidth = 10;
        this.viewForm = false;
        this.isTableListLoadin = false;
        this.StatesListArray = [];
    }
    StateModuleComponent.prototype.ngOnInit = function () {
        this.addForm = this.fb.group({
            State_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            SNo: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.onTabClick(1);
    };
    StateModuleComponent.prototype.onTabClick = function (tabNumber) {
        this.Status = tabNumber;
        this.getTableList();
    };
    StateModuleComponent.prototype.getTableList = function () {
        var _this = this;
        this.isTableListLoadin = true;
        var adminData = JSON.parse(localStorage.getItem('adminData'));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            skip: this.skip,
            limit: this.limit,
            Status: this.Status
        };
        try {
            this._appService.postMethod('List_States', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.isTableListLoadin = false;
                    if (_this.skip == 0) {
                        _this.currentPage = 1;
                        _this.Count = resp.extras.Count;
                    }
                    _this.StatesListArray = resp.extras.Data;
                    _this.Count = resp.extras.Count;
                }
                else {
                    _this.isTableListLoadin = false;
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                }
            }, function (error) {
            });
        }
        catch (e) { }
    };
    StateModuleComponent.prototype.onNextPage = function (event) {
        this.currentPage = event;
        this.skip = (event - 1) * this.limit;
        this.getTableList();
    };
    StateModuleComponent.prototype.OnclickProductAdd = function () {
        this.viewForm = true;
        this.onEditOpen = false;
    };
    StateModuleComponent.prototype.onClickSubmitForm = function () {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem('adminData'));
        var body = {};
        var url = '';
        if (this.onEditOpen == true) {
            url = 'Edit_State';
            body = {
                AdminID: adminData.AdminID,
                SessionID: adminData.SessionID,
                State_Name: this.addForm.value.State_Name,
                SNo: this.addForm.value.SNo,
                StateID: this.selectedData.StateID
            };
        }
        else {
            url = 'Add_State';
            body = {
                AdminID: adminData.AdminID,
                SessionID: adminData.SessionID,
                State_Name: this.addForm.value.State_Name,
                SNo: this.addForm.value.SNo,
            };
        }
        try {
            this._appService.postMethod(url, body)
                .subscribe(function (resp) {
                if (resp.success) {
                    if (_this.onEditOpen == true) {
                        _this.nzMessageService.success('State Updated Sucessfully');
                    }
                    else {
                        _this.nzMessageService.success('State Created Sucessfully');
                    }
                    _this.close();
                    _this.getTableList();
                }
                else {
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                }
            }, function (error) {
            });
        }
        catch (e) { }
    };
    StateModuleComponent.prototype.close = function () {
        this.viewForm = false;
        this.onEditOpen = false;
        this.addForm.reset();
    };
    StateModuleComponent.prototype.onEdit = function (data) {
        this.viewForm = true;
        this.selectedData = data,
            this.onEditOpen = true;
        this.addForm.patchValue({
            State_Name: data.State_Name,
            SNo: data.SNo,
        });
    };
    StateModuleComponent.prototype.onActionOnHelp = function (data) {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            StateID: data.StateID
        };
        try {
            this._appService.postMethod('Activate_Inactivate_State', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    var msg = void 0;
                    if (data.Status) {
                        msg = 'Inactivated Successfully';
                    }
                    else {
                        msg = 'Activated Successfully';
                    }
                    _this.getTableList();
                    _this.nzMessageService.success(msg);
                }
                else {
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                }
            }, function (error) {
            });
        }
        catch (e) { }
    };
    StateModuleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-state-module',
            template: __webpack_require__(/*! ./state-module.component.html */ "./src/app/state-module/state-module.component.html"),
            styles: [__webpack_require__(/*! ./state-module.component.css */ "./src/app/state-module/state-module.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]])
    ], StateModuleComponent);
    return StateModuleComponent;
}());



/***/ }),

/***/ "./src/app/state-module/state-module.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/state-module/state-module.module.ts ***!
  \*****************************************************/
/*! exports provided: StateModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateModuleModule", function() { return StateModuleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _state_module_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state-module.component */ "./src/app/state-module/state-module.component.ts");
/* harmony import */ var _state_module_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state-module-routing.module */ "./src/app/state-module/state-module-routing.module.ts");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var StateModuleModule = /** @class */ (function () {
    function StateModuleModule() {
    }
    StateModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _state_module_routing_module__WEBPACK_IMPORTED_MODULE_4__["StateModuleRoutingModule"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ],
            declarations: [_state_module_component__WEBPACK_IMPORTED_MODULE_3__["StateModuleComponent"]]
        })
    ], StateModuleModule);
    return StateModuleModule;
}());



/***/ })

}]);
//# sourceMappingURL=state-module-state-module-module.js.map