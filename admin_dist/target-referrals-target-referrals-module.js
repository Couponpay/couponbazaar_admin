(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["target-referrals-target-referrals-module"],{

/***/ "./src/app/target-referrals/target-referrals-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/target-referrals/target-referrals-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: TargetReferralsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetReferralsRoutingModule", function() { return TargetReferralsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _target_referrals_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./target-referrals.component */ "./src/app/target-referrals/target-referrals.component.ts");





var routes = [
    { path: '', component: _target_referrals_component__WEBPACK_IMPORTED_MODULE_4__["TargetReferralsComponent"] }
];
var TargetReferralsRoutingModule = /** @class */ (function () {
    function TargetReferralsRoutingModule() {
    }
    TargetReferralsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TargetReferralsRoutingModule);
    return TargetReferralsRoutingModule;
}());



/***/ }),

/***/ "./src/app/target-referrals/target-referrals.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/target-referrals/target-referrals.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".primary_button{\n    position: absolute;\n    top: 0;\n    right: 0;\n    background: linear-gradient(90deg, #1976d2 20%, #00dbfe 100%);\n    border: coral;\n    color: #fff;\n    font-weight: 700;\n    font-size: 17px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFyZ2V0LXJlZmVycmFscy90YXJnZXQtcmVmZXJyYWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUiw2REFBNkQ7SUFDN0QsYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3RhcmdldC1yZWZlcnJhbHMvdGFyZ2V0LXJlZmVycmFscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW1hcnlfYnV0dG9ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTk3NmQyIDIwJSwgIzAwZGJmZSAxMDAlKTtcbiAgICBib3JkZXI6IGNvcmFsO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/target-referrals/target-referrals.component.html":
/*!******************************************************************!*\
  !*** ./src/app/target-referrals/target-referrals.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row style=\"margin-top: 25px;\">\n  <div nz-col nzSpan=\"24\">\n      <button nz-button nzType=\"primary\" (click)=\"open()\" class=\"primary_button\">Add</button>\n      <nz-drawer\n      [nzBodyStyle]=\"{ height: 'calc(100% - 55px)', overflow: 'auto', 'padding-bottom': '53px' }\"\n      [nzMaskClosable]=\"false\"\n      [nzWidth]=\"400\"\n      [nzVisible]=\"visible\"\n      [nzTitle]=\"title\"\n      (nzOnClose)=\"close()\"\n    >\n    <ng-template #title>\n      {{isEditing?'Update Target Referral':'Add Target Referral'}}\n    </ng-template>\n    <form nz-form [formGroup]=\"addForm\">\n        <div nz-row nzGutter=\"8\">\n          <div nz-col nzSpan=\"24\">\n            <nz-form-item>\n              <nz-form-label>S.No</nz-form-label>\n              <nz-form-control [nzValidateStatus]=\"ValidatingStatus\" nzHasFeedback>\n                <input nz-input formControlName=\"SNo\" placeholder=\"please enter Banner S.No\" />\n                <!-- <nz-form-explain *ngIf=\"createCoupon.get('SNo').dirty && createCoupon.get('SNo').errors\">Please\n                  input your SNo!</nz-form-explain> -->\n                  <nz-form-explain *ngIf=\"ValidatingStatus == 'error'\">S.No Already Exists\n                  </nz-form-explain>\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n              <nz-form-label>Target Referal</nz-form-label>\n              <nz-form-control>\n                <input nz-input formControlName=\"Target_Referal\" type=\"number\" placeholder=\"please enter Target Referal\" />\n                <nz-form-explain *ngIf=\"addForm.get('Target_Referal').dirty && addForm.get('Target_Referal').errors\">Please\n                    input your Target Referal!</nz-form-explain>\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n              <nz-form-label>Wallet Limit</nz-form-label>\n              <nz-form-control>\n                <input nz-input formControlName=\"Wallet_Limit\" type=\"number\" placeholder=\"please enter Wallet Limit\" />\n                <nz-form-explain *ngIf=\"addForm.get('Wallet_Limit').dirty && addForm.get('Wallet_Limit').errors\">Please\n                    input your Wallet Limit!</nz-form-explain>\n              </nz-form-control>\n            </nz-form-item>\n          </div>\n          </div>\n          <div class=\"footer\">\n              <button nz-button nzType=\"primary\" class=\"primary_button1 ant-btn ant-btn-primary\" [nzLoading]=\"isAddButton\"\n              (click)=\"onSubmit()\"><span>{{isEditing?'Update':'Add'}}</span></button>\n            </div>\n      </form>\n    </nz-drawer>\n    </div>\n    <div nz-row style=\"margin-top: 50px;\">\n        <div nz-col nzSpan=\"24\">\n          <nz-tabset style=\"margin-bottom: 16px;\">\n            <nz-tab (nzClick)=\"onChangeTab(1)\" nzTitle=\"Active List\">\n      \n            </nz-tab>\n            <nz-tab (nzClick)=\"onChangeTab(2)\" nzTitle=\"Inactive List\">\n      \n            </nz-tab>\n      \n          </nz-tabset>\n    <nz-table #basicTable nzShowPagination=\"false\" [nzLoading]=\"isloading\"\n     nzLoadingDelay=\"1\" [nzData]=\"targetReferrals\"  style=\"background: #FFF;margin:30px 0px;\">\n      <thead>\n        <tr>\n          <th>S.No</th>\n          <th>Target Referral</th>\n          <th>Wallet Limit</th>\n          <th></th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <ng-container *ngFor=\"let data of targetReferrals;let i=index\">\n          <tr>\n            <td>{{data.SNo}}</td>\n            <td>{{data.Target_Referal}}</td>\n            <td>{{data.Wallet_Limit}}</td>\n            <td>\n              <span [ngSwitch]=\"data.Status\">\n                <span *ngSwitchCase=true>\n                  <a nz-popconfirm (nzOnConfirm)=\"onAction(data)\"\n                    nzTitle=\"Are you sure you want to Inactive this?\">Make Inactive</a>\n                </span>\n                <span *ngSwitchCase=false>\n                  <a style=\"color: red;\" nz-popconfirm (nzOnConfirm)=\"onAction(data)\"\n                    nzTitle=\"Are you sure you want to Active this?\">Make Active</a>\n                </span>\n                <span *ngSwitchDefault>\n                  NA\n                </span>\n              </span>\n            </td>\n            <td>\n              <i nz-icon type=\"edit\" theme=\"outline\" (click)=\"onEdit(data)\"></i>\n            </td>\n          </tr>\n        </ng-container>\n      </tbody>\n    </nz-table>\n    <nz-pagination (nzPageIndexChange)=\"onNextPage($event)\" [nzPageSize]=\"limit\" [nzPageIndex]=\"currentPage\"\n        [nzTotal]=\"totalItem\"></nz-pagination>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/target-referrals/target-referrals.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/target-referrals/target-referrals.component.ts ***!
  \****************************************************************/
/*! exports provided: TargetReferralsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetReferralsComponent", function() { return TargetReferralsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var TargetReferralsComponent = /** @class */ (function () {
    function TargetReferralsComponent(fb, _appService, nzMessageService) {
        this.fb = fb;
        this._appService = _appService;
        this.nzMessageService = nzMessageService;
        this.targetReferrals = [];
        this.skip = 0;
        this.limit = this._appService.limit;
        this.currentPage = 1;
    }
    TargetReferralsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onChangeTab(1);
        this.addForm = this.fb.group({
            SNo: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Target_Referal: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Wallet_Limit: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.addForm.get('SNo').valueChanges.subscribe(function (data) {
            if (_this.addForm.get('SNo').valid) {
                _this.checkSerialNumber(data);
            }
            else {
                _this.ValidatingStatus = '';
            }
        });
    };
    TargetReferralsComponent.prototype.onChangeTab = function (event) {
        this.selectedtab = event;
        this.skip = 0;
        this.getTargetReferrals();
    };
    TargetReferralsComponent.prototype.getTargetReferrals = function () {
        var _this = this;
        this.isloading = true;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var userdata = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            Active_Inactive_Status: this.selectedtab == 1 ? true : false,
            skip: this.skip,
            limit: this.limit
        };
        try {
            this._appService.postMethod('List_Target_Referals', userdata)
                .subscribe(function (resp) {
                _this.isloading = false;
                if (resp.success) {
                    if (_this.skip == 0) {
                        _this.currentPage = 1;
                    }
                    _this.totalItem = resp.extras.Count;
                    _this.targetReferrals = resp.extras.Data;
                }
                else {
                    _this.isloading = false;
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                }
            }, function (error) {
            });
        }
        catch (e) {
        }
    };
    TargetReferralsComponent.prototype.onNextPage = function (event) {
        this.currentPage = this.currentPage;
        this.skip = (event - 1) * this.limit;
        this.getTargetReferrals();
    };
    TargetReferralsComponent.prototype.checkSerialNumber = function (serialNumber) {
        var _this = this;
        if (serialNumber.length > 0) {
            this.ValidatingStatus = "validating";
            var adminData = JSON.parse(localStorage.getItem("adminData"));
            var body = {
                AdminID: adminData.AdminID,
                SessionID: adminData.SessionID,
                SNo: serialNumber,
                Target_ReferalID: this.isEditing ? this.selectedData.Target_ReferalID : ''
            };
            try {
                this._appService.postMethod('Check_For_Target_Referal_SNo_Available', body)
                    .subscribe(function (resp) {
                    if (resp.success) {
                        _this.ValidatingStatus = 'success';
                    }
                    else {
                        _this.ValidatingStatus = 'error';
                    }
                }, function (error) {
                    _this.ValidatingStatus = 'error';
                });
            }
            catch (e) { }
        }
        else {
            // this.ValidatingStatus = 'null'
        }
    };
    TargetReferralsComponent.prototype.onAction = function (data) {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            Target_ReferalID: data.Target_ReferalID
        };
        try {
            this._appService.postMethod('Activate_Inactivate_Target_Referal', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    var msg = void 0;
                    if (data.Status) {
                        msg = 'Inactivated Successfully';
                    }
                    else {
                        msg = 'Activated Successfully';
                    }
                    _this.getTargetReferrals();
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
    TargetReferralsComponent.prototype.open = function () {
        this.visible = true;
        this.isEditing = false;
    };
    TargetReferralsComponent.prototype.close = function () {
        this.visible = false;
        this.isEditing = false;
        this.addForm.reset();
    };
    TargetReferralsComponent.prototype.onEdit = function (data) {
        this.visible = true;
        this.isEditing = true;
        this.selectedData = data;
        this.addForm.patchValue(data);
    };
    TargetReferralsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isAddButton = true;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {};
        var url = '';
        if (this.isEditing) {
            body = {
                AdminID: adminData.AdminID,
                SessionID: adminData.SessionID,
                Target_ReferalID: this.selectedData.Target_ReferalID,
                SNo: this.addForm.value.SNo,
                Target_Referal: this.addForm.value.Target_Referal,
                Wallet_Limit: this.addForm.value.Wallet_Limit,
            };
            url = 'Update_Target_Referal';
        }
        else {
            body = {
                AdminID: adminData.AdminID,
                SessionID: adminData.SessionID,
                SNo: this.addForm.value.SNo,
                Target_Referal: this.addForm.value.Target_Referal,
                Wallet_Limit: this.addForm.value.Wallet_Limit,
            };
            url = 'Add_Target_Referal';
        }
        try {
            this._appService.postMethod(url, body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.isAddButton = false;
                    _this.close();
                    _this.getTargetReferrals();
                    _this.nzMessageService.success(resp.extras.status);
                }
                else {
                    _this.isAddButton = false;
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                }
            }, function (error) {
            });
        }
        catch (e) {
        }
    };
    TargetReferralsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-target-referrals',
            template: __webpack_require__(/*! ./target-referrals.component.html */ "./src/app/target-referrals/target-referrals.component.html"),
            styles: [__webpack_require__(/*! ./target-referrals.component.css */ "./src/app/target-referrals/target-referrals.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], TargetReferralsComponent);
    return TargetReferralsComponent;
}());



/***/ }),

/***/ "./src/app/target-referrals/target-referrals.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/target-referrals/target-referrals.module.ts ***!
  \*************************************************************/
/*! exports provided: TargetReferralsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetReferralsModule", function() { return TargetReferralsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _target_referrals_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./target-referrals.component */ "./src/app/target-referrals/target-referrals.component.ts");
/* harmony import */ var _target_referrals_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./target-referrals-routing.module */ "./src/app/target-referrals/target-referrals-routing.module.ts");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var TargetReferralsModule = /** @class */ (function () {
    function TargetReferralsModule() {
    }
    TargetReferralsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _target_referrals_routing_module__WEBPACK_IMPORTED_MODULE_4__["TargetReferralsRoutingModule"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            declarations: [_target_referrals_component__WEBPACK_IMPORTED_MODULE_3__["TargetReferralsComponent"]]
        })
    ], TargetReferralsModule);
    return TargetReferralsModule;
}());



/***/ })

}]);
//# sourceMappingURL=target-referrals-target-referrals-module.js.map