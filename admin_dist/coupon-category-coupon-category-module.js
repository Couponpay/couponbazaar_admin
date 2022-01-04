(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coupon-category-coupon-category-module"],{

/***/ "./src/app/coupon-category/coupon-category-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/coupon-category/coupon-category-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CouponCategoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponCategoryRoutingModule", function() { return CouponCategoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _coupon_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coupon-category.component */ "./src/app/coupon-category/coupon-category.component.ts");





var routes = [
    { path: '', component: _coupon_category_component__WEBPACK_IMPORTED_MODULE_4__["CouponCategoryComponent"] }
];
var CouponCategoryRoutingModule = /** @class */ (function () {
    function CouponCategoryRoutingModule() {
    }
    CouponCategoryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CouponCategoryRoutingModule);
    return CouponCategoryRoutingModule;
}());



/***/ }),

/***/ "./src/app/coupon-category/coupon-category.component.css":
/*!***************************************************************!*\
  !*** ./src/app/coupon-category/coupon-category.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".primary_button{\n    position: absolute;\n    top: 0;\n    right: 0;\n    background: linear-gradient(90deg, #1976d2 20%, #00dbfe 100%);\n    border: coral;\n    color: #fff;\n    font-weight: 700;\n    font-size: 17px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cG9uLWNhdGVnb3J5L2NvdXBvbi1jYXRlZ29yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsNkRBQTZEO0lBQzdELGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb3Vwb24tY2F0ZWdvcnkvY291cG9uLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbWFyeV9idXR0b257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxOTc2ZDIgMjAlLCAjMDBkYmZlIDEwMCUpO1xuICAgIGJvcmRlcjogY29yYWw7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/coupon-category/coupon-category.component.html":
/*!****************************************************************!*\
  !*** ./src/app/coupon-category/coupon-category.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row style=\"margin-top: 25px;\">\n  <div nz-col nzSpan=\"24\">\n      <button nz-button nzType=\"primary\" class=\"primary_button\" (click)=\"onAdd()\">Add Coupon Category</button>\n    </div>\n    <div nz-row style=\"margin-top: 50px;\">\n        <div nz-col nzSpan=\"24\">\n          <nz-tabset style=\"margin-bottom: 16px;\">\n            <nz-tab (nzClick)=\"onChangeTab(1)\" nzTitle=\"Active List\">\n      \n            </nz-tab>\n            <nz-tab (nzClick)=\"onChangeTab(2)\" nzTitle=\"Inactive List\">\n      \n            </nz-tab>\n      \n          </nz-tabset>\n    <nz-table #basicTable nzShowPagination=\"false\" [nzLoading]=\"isloading\"\n     nzLoadingDelay=\"1\" [nzData]=\"CategoryData\"  style=\"background: #FFF;margin:30px 0px;\">\n      <thead>\n        <tr>\n          <th>S.No</th>\n          <th>Name</th>\n          <th>Admin Share(%)</th>\n          <th></th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <ng-container *ngFor=\"let data of CategoryData;let i=index\">\n          <tr>\n            <td>{{data.SNo}}</td>\n            <td>{{data.Coupons_Category_Name}}</td>\n            <td>{{data.CC_Admin_Share_Percent}}</td>\n            <td>\n              <span [ngSwitch]=\"data.Status\">\n                <span *ngSwitchCase=true>\n                  <a nz-popconfirm (nzOnConfirm)=\"onAction(data)\"\n                    nzTitle=\"Are you sure you want to Inactive this?\">Make Inactive</a>\n                </span>\n                <span *ngSwitchCase=false>\n                  <a style=\"color: red;\" nz-popconfirm (nzOnConfirm)=\"onAction(data)\"\n                    nzTitle=\"Are you sure you want to Active this?\">Make Active</a>\n                </span>\n                <span *ngSwitchDefault>\n                  NA\n                </span>\n              </span>\n            </td>\n            <td>\n              <!-- <i class=\"fa fa-pencil\" style=\"color: #096dd9;\" aria-hidden=\"true\" (click)=\"onEdit(data)\"></i> -->\n              <i nz-icon type=\"edit\" theme=\"outline\" (click)=\"onEdit(data)\"></i>\n            </td>\n          </tr>\n        </ng-container>\n      </tbody>\n    </nz-table>\n    <nz-pagination (nzPageIndexChange)=\"onNextPage($event)\"  [nzPageSize]=\"limit\" [nzPageIndex]=\"currentPage\" [nzTotal]=\"totalItem\"></nz-pagination>\n  </div>\n</div>\n</div>\n<nz-drawer\n      [nzBodyStyle]=\"{ height: 'calc(100% - 55px)', overflow: 'auto', 'padding-bottom': '53px' }\"\n      [nzMaskClosable]=\"false\"\n      [nzWidth]=\"400\"\n      [nzVisible]=\"isvisible\"\n      [nzTitle]=\"title\"\n      (nzOnClose)=\"onCancel()\"\n    >\n    <ng-template #title>\n      <span>{{isEditing?'Update':'Add'}} Coupon Category</span>\n    </ng-template>\n    <form nz-form [formGroup]=\"addCategoryForm\">\n        <div nz-row nzGutter=\"8\">\n          <div nz-col nzSpan=\"24\">\n            <nz-form-item>\n              <nz-form-label>SNo</nz-form-label>\n              <nz-form-control [nzValidateStatus]=\"ValidatingStatus\" nzHasFeedback>\n                <input nz-input formControlName=\"SNo\" placeholder=\"please enter SNo\" />\n                <!-- <nz-form-explain *ngIf=\"addCategoryForm.get('SNo').dirty && addCategoryForm.get('SNo').errors\">Please\n                    input your SNo!</nz-form-explain> -->\n                <nz-form-explain *ngIf=\"ValidatingStatus == 'error'\">S.No Already Exists\n                    </nz-form-explain>\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n              <nz-form-label>Category Name</nz-form-label>\n              <nz-form-control>\n                <input nz-input formControlName=\"Coupons_Category_Name\" placeholder=\"please enter Coupon Category Name\" />\n                <nz-form-explain *ngIf=\"addCategoryForm.get('Coupons_Category_Name').dirty && addCategoryForm.get('Coupons_Category_Name').errors\">Please\n                    input your Coupon Category Name!</nz-form-explain>\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n              <nz-form-label>Admin Share (%)</nz-form-label>\n              <nz-form-control>\n                <input nz-input formControlName=\"CC_Admin_Share_Percent\" placeholder=\"please enter Admin Share Percent\" />\n                <nz-form-explain *ngIf=\"addCategoryForm.get('CC_Admin_Share_Percent').dirty && addCategoryForm.get('CC_Admin_Share_Percent').errors\">Please\n                    input your Admin Share Percent!</nz-form-explain>\n              </nz-form-control>\n            </nz-form-item>\n          </div>\n          </div>\n          <div class=\"footer\">\n              <button nz-button nzType=\"primary\" class=\"primary_button1 ant-btn ant-btn-primary\" [nzLoading]=\"isAddButton\"\n              (click)=\"onAddCategory()\"><span>{{isEditing?'Update':'Add'}}</span></button>\n            </div>\n      </form>\n    </nz-drawer>"

/***/ }),

/***/ "./src/app/coupon-category/coupon-category.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/coupon-category/coupon-category.component.ts ***!
  \**************************************************************/
/*! exports provided: CouponCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponCategoryComponent", function() { return CouponCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var CouponCategoryComponent = /** @class */ (function () {
    function CouponCategoryComponent(fb, _appService, nzMessageService) {
        this.fb = fb;
        this._appService = _appService;
        this.nzMessageService = nzMessageService;
        this.skip = 0;
        this.limit = this._appService.limit;
        this.currentPage = 1;
        this.CategoryData = [];
    }
    CouponCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onChangeTab(1);
        this.addCategoryForm = this.fb.group({
            SNo: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Coupons_Category_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            CC_Admin_Share_Percent: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.addCategoryForm.get('SNo').valueChanges.subscribe(function (data) {
            console.log(data);
            if (_this.addCategoryForm.get('SNo').valid) {
                _this.checkSerialNumber(data);
            }
            else {
                _this.ValidatingStatus = '';
            }
        });
    };
    CouponCategoryComponent.prototype.onChangeTab = function (event) {
        this.selectedtab = event;
        this.skip = 0;
        this.getCouponCategoryList();
    };
    CouponCategoryComponent.prototype.getCouponCategoryList = function () {
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
            this._appService.postMethod('List_Coupons_Category', userdata)
                .subscribe(function (resp) {
                _this.isloading = false;
                if (resp.success) {
                    if (_this.skip == 0) {
                        _this.currentPage = 1;
                    }
                    _this.totalItem = resp.extras.Count;
                    _this.CategoryData = resp.extras.Data;
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
    CouponCategoryComponent.prototype.onNextPage = function (event) {
        this.currentPage = this.currentPage;
        this.skip = (event - 1) * this.limit;
        this.getCouponCategoryList();
    };
    CouponCategoryComponent.prototype.onAction = function (data) {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            Coupons_CategoryID: data.Coupons_CategoryID
        };
        try {
            this._appService.postMethod('Activate_Inactivate_Coupons_Category', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    var msg = void 0;
                    if (data.Status) {
                        msg = 'Inactivated Successfully';
                    }
                    else {
                        msg = 'Activated Successfully';
                    }
                    _this.getCouponCategoryList();
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
    CouponCategoryComponent.prototype.onAdd = function () {
        this.isvisible = true;
        this.isEditing = false;
    };
    CouponCategoryComponent.prototype.onCancel = function () {
        this.isvisible = false;
        this.isEditing = false;
        this.addCategoryForm.reset();
    };
    CouponCategoryComponent.prototype.onEdit = function (data) {
        this.isvisible = true;
        this.isEditing = true;
        this.selectedRecord = data;
        this.addCategoryForm.patchValue(data);
    };
    CouponCategoryComponent.prototype.onAddCategory = function () {
        var _this = this;
        this.isAddButton = true;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {};
        var url = '';
        if (this.isEditing) {
            body = {
                AdminID: adminData.AdminID,
                SessionID: adminData.SessionID,
                Coupons_CategoryID: this.selectedRecord.Coupons_CategoryID,
                SNo: this.addCategoryForm.value.SNo,
                Coupons_Category_Name: this.addCategoryForm.value.Coupons_Category_Name,
                CC_Admin_Share_Percent: this.addCategoryForm.value.CC_Admin_Share_Percent,
            };
            url = 'Update_Coupons_Category';
        }
        else {
            body = {
                AdminID: adminData.AdminID,
                SessionID: adminData.SessionID,
                SNo: this.addCategoryForm.value.SNo,
                Coupons_Category_Name: this.addCategoryForm.value.Coupons_Category_Name,
                CC_Admin_Share_Percent: this.addCategoryForm.value.CC_Admin_Share_Percent,
            };
            url = 'Add_Coupons_Category';
        }
        try {
            this._appService.postMethod(url, body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.isAddButton = false;
                    _this.onCancel();
                    _this.getCouponCategoryList();
                    _this.nzMessageService.success(resp.extras.Status);
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
    CouponCategoryComponent.prototype.checkSerialNumber = function (serialNumber) {
        var _this = this;
        if (serialNumber.length > 0) {
            this.ValidatingStatus = "validating";
            var adminData = JSON.parse(localStorage.getItem("adminData"));
            var body = {
                AdminID: adminData.AdminID,
                SessionID: adminData.SessionID,
                SNo: serialNumber,
                Coupons_CategoryID: this.isEditing ? this.selectedRecord.Coupons_CategoryID : ''
            };
            try {
                this._appService.postMethod('Check_For_Coupons_Category_SNo_Available', body)
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
    CouponCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coupon-category',
            template: __webpack_require__(/*! ./coupon-category.component.html */ "./src/app/coupon-category/coupon-category.component.html"),
            styles: [__webpack_require__(/*! ./coupon-category.component.css */ "./src/app/coupon-category/coupon-category.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], CouponCategoryComponent);
    return CouponCategoryComponent;
}());



/***/ }),

/***/ "./src/app/coupon-category/coupon-category.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/coupon-category/coupon-category.module.ts ***!
  \***********************************************************/
/*! exports provided: CouponCategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponCategoryModule", function() { return CouponCategoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _coupon_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coupon-category.component */ "./src/app/coupon-category/coupon-category.component.ts");
/* harmony import */ var _coupon_category_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coupon-category-routing.module */ "./src/app/coupon-category/coupon-category-routing.module.ts");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var CouponCategoryModule = /** @class */ (function () {
    function CouponCategoryModule() {
    }
    CouponCategoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _coupon_category_routing_module__WEBPACK_IMPORTED_MODULE_4__["CouponCategoryRoutingModule"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            declarations: [_coupon_category_component__WEBPACK_IMPORTED_MODULE_3__["CouponCategoryComponent"]]
        })
    ], CouponCategoryModule);
    return CouponCategoryModule;
}());



/***/ })

}]);
//# sourceMappingURL=coupon-category-coupon-category-module.js.map