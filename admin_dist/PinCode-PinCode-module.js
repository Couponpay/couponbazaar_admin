(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PinCode-PinCode-module"],{

/***/ "./src/app/PinCode/PinCode.component.css":
/*!***********************************************!*\
  !*** ./src/app/PinCode/PinCode.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BpbkNvZGUvUGluQ29kZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/PinCode/PinCode.component.html":
/*!************************************************!*\
  !*** ./src/app/PinCode/PinCode.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div nz-row *ngIf=\"viewForm==false\">\r\n  <div nz-col nzSpan=\"4\" [nzOffset]=\"20\">\r\n    <button nz-button nzType=\"primary\" style=\"float: right;width: 100%\" (click)=\"OnclickProductAdd()\">\r\n      Add Pincode\r\n      </button>\r\n  </div>\r\n \r\n  <div nz-col nzSpan=\"24\" style=\"padding: 20px 0px;\">\r\n    <nz-tabset>\r\n      <nz-tab (nzClick)=\"onTabClick(1)\" nzTitle=\"Active Pincode\">\r\n      </nz-tab>\r\n      <nz-tab (nzClick)=\"onTabClick(2)\" nzTitle=\"Inactivated Pincode\">\r\n      </nz-tab>\r\n    </nz-tabset>\r\n  \r\n  \r\n    <nz-table #basicTable [nzLoading]=\"isTableListLoadin\" nzShowPagination=\"false\" [nzData]=\"PincodeList\"\r\n    style=\"background: #FFF;\">\r\n    <thead>\r\n      <tr>\r\n        <th>S.No</th>\r\n        <!-- <th>State Name</th> -->\r\n        <th>District Name</th>\r\n        <th>Pincode </th>\r\n        <th>created at</th>\r\n        <th></th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let data of PincodeList\">\r\n        <td>{{data.SNo}}</td>\r\n        <!-- <td>{{data.StateData.State_Name}}</td> -->\r\n        <td>{{data.DistrictData.District_Name}}</td>\r\n        <td>{{data.Pincode}}</td>\r\n        <td>{{data.created_at | date:\"medium\"}}</td>\r\n\r\n                <td> <a (click)=\"onEdit(data)\">Edit</a></td>\r\n        <td>\r\n          <span [ngSwitch]=\"data.Status\">\r\n            <span *ngSwitchCase=true>\r\n              <a nz-popconfirm (nzOnConfirm)=\"onActionOnHelp(data)\"\r\n                nzTitle=\"Are you sure you want to Inactive this?\">Make Inactive</a>\r\n            </span>\r\n            <span *ngSwitchCase=false>\r\n              <a style=\"color: red;\" nz-popconfirm (nzOnConfirm)=\"onActionOnHelp(data)\"\r\n                nzTitle=\"Are you sure you want to Active this?\">Make Active</a>\r\n            </span>\r\n            <span *ngSwitchDefault>\r\n              NA\r\n            </span>\r\n          </span>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  \r\n  </nz-table>\r\n  </div>\r\n  <nz-pagination [nzShowTotal]=\"totalTemplate\" (nzPageIndexChange)=\"onNextPage($event)\" [nzPageSize]=\"limit\"\r\n  [nzPageIndex]=\"currentPage\" [nzTotal]=\"Count\"></nz-pagination>\r\n<ng-template #totalTemplate let-total>Total {{ Count }}</ng-template>\r\n</div>\r\n\r\n<div nz-row *ngIf=\"viewForm==true\">\r\n  <div nz-col nzSpan=\"24\" style=\"padding: 20px 0px;\">\r\n    <nz-card>\r\n    <form nz-form [formGroup]=\"addForm\" class=\"login-form\">\r\n\r\n      <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"12\">\r\n          <nz-form-item>\r\n            <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"S_NO\">S NO</nz-form-label>\r\n            <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n                <input type=\"number\" formControlName=\"SNo\" nz-input placeholder=\"Please enter S NO\" />\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </div>\r\n      </div>\r\n      <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"12\">\r\n          <nz-form-item>\r\n            <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired >State </nz-form-label>\r\n            <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n              <nz-select style=\"width: 100%;\" formControlName=\"State_Name\" nzShowSearch \r\n              nzPlaceHolder=\"Select State\">\r\n              <nz-option *ngFor=\"let item of StatesListArray; let i=index\" [nzValue]=\"item.StateID\"\r\n                [nzLabel]=\"item.State_Name\"></nz-option>\r\n            </nz-select>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </div>\r\n      </div> \r\n      <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"12\">\r\n          <nz-form-item>\r\n            <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired >District </nz-form-label>\r\n            <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n              <nz-select style=\"width: 100%;\" formControlName=\"District_Name\" nzShowSearch \r\n              nzPlaceHolder=\"Select District\">\r\n              <nz-option *ngFor=\"let item of DistrictListArray; let i=index\" [nzValue]=\"item.DistrictID\"\r\n                [nzLabel]=\"item.District_Name\"></nz-option>\r\n            </nz-select>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </div>\r\n      </div> \r\n      <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"12\">\r\n          <nz-form-item>\r\n            <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired >Pincode</nz-form-label>\r\n            <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n                <input type=\"text\"  formControlName=\"Pincode_id\" nz-input placeholder=\"Please enter Pincode\"\r\n                oninput=\"this.value =this.value.replace(/[^0-9.]/g, '')\" [maxlength]=\"6\"/>\r\n               \r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </div>\r\n      </div>\r\n   \r\n\r\n      <div nz-row style=\"margin-top: 30px;\">\r\n       \r\n        <div nz-col nzSpan=\"3\" [nzOffset]=\"3\">\r\n              <button nz-button nzType=\"primary\" (click)=\"onClickSubmitForm()\" style=\"width:100%\"><span>{{onEditOpen?\"Update Pincode\":\"Create Pincode\"}}</span></button> \r\n        </div>\r\n        <div nz-col nzSpan=\"2\" [nzOffset]=\"1\">\r\n          <button nz-button nzType=\"default\" (click)=\"close()\" style=\"width:100%\">close</button> \r\n    </div>\r\n      </div>\r\n    \r\n    </form>\r\n  </nz-card>\r\n  </div>\r\n</div> "

/***/ }),

/***/ "./src/app/PinCode/PinCode.component.ts":
/*!**********************************************!*\
  !*** ./src/app/PinCode/PinCode.component.ts ***!
  \**********************************************/
/*! exports provided: PinCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinCodeComponent", function() { return PinCodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");





var PinCodeComponent = /** @class */ (function () {
    // DistrictID = new FormControl(null)
    // StateID= new FormControl(null)
    function PinCodeComponent(_appService, nzMessageService, fb) {
        this._appService = _appService;
        this.nzMessageService = nzMessageService;
        this.fb = fb;
        this.PincodeList = [];
        this.skip = 0;
        this.limit = 10;
        this.isTableListLoadin = false;
        this.currentPage = 1;
        this.onEditOpen = false;
        this.viewForm = false;
        this.StatesListArray = [];
        this.DistrictListArray = [];
        this.DistrictList = [];
    }
    PinCodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.getDistrictListArray()
        this.getTableList();
        // this.StateID.valueChanges.subscribe((data)=>{
        //   this.getDistrictList()
        // })
        // this.DistrictID.valueChanges.subscribe((data)=>{
        //   this.skip=0;
        //   this.getPincodeList()
        // })
        this.onTabClick(1);
        this.addForm = this.fb.group({
            District_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            State_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            SNo: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Pincode_id: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.addForm.get('State_Name').valueChanges.subscribe(function (data) {
            if (data != null) {
                _this.addForm.get('District_Name').reset();
                _this.getDistrictListArray();
            }
            else {
                _this.addForm.get('District_Name').reset();
            }
        });
        this.addForm.get('Pincode_id').valueChanges.subscribe(function (data) {
            if (data != null) {
                _this.checkPincode(data);
            }
            else {
            }
        });
    };
    PinCodeComponent.prototype.OnclickProductAdd = function () {
        this.viewForm = true;
        this.onEditOpen = false;
    };
    PinCodeComponent.prototype.onTabClick = function (tabNumber) {
        this.Status = tabNumber;
        this.getPincodeList();
    };
    PinCodeComponent.prototype.getPincodeList = function () {
        var _this = this;
        this.isTableListLoadin = true;
        var adminData = JSON.parse(localStorage.getItem('adminData'));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            skip: this.skip,
            limit: this.limit,
            Status: this.Status,
        };
        try {
            this._appService.postMethod('List_Pincodes', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.isTableListLoadin = false;
                    if (_this.skip == 0) {
                        _this.currentPage = 1;
                        _this.Count = resp.extras.Count;
                    }
                    _this.PincodeList = resp.extras.Data;
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
    PinCodeComponent.prototype.onEdit = function (data) {
        this.viewForm = true;
        this.selectedData = data,
            this.onEditOpen = true;
        this.addForm.patchValue({
            District_Name: data.District_Name,
            SNo: data.SNo,
            Pincode_id: data.PincodeID
        });
    };
    PinCodeComponent.prototype.onActionOnHelp = function (data) {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            PincodeID: data.PincodeID,
        };
        try {
            this._appService.postMethod('Activate_Inactivate_Pincode', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    var msg = void 0;
                    if (data.Status) {
                        msg = 'Inactivated Successfully';
                    }
                    else {
                        msg = 'Activated Successfully';
                    }
                    _this.getPincodeList();
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
    PinCodeComponent.prototype.onClickSubmitForm = function () {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem('adminData'));
        var body = {};
        var url = '';
        if (this.onEditOpen == true) {
            url = 'Edit_Pincode';
            body = {
                AdminID: adminData.AdminID,
                SessionID: adminData.SessionID,
                Pincode: this.addForm.value.Pincode_id,
                SNo: this.addForm.value.SNo,
                DistrictID: this.addForm.value.District_Name,
                StateID: this.addForm.value.State_Name,
                PincodeID: this.selectedData.PincodeID
            };
        }
        else {
            url = 'Add_Pincode';
            body = {
                AdminID: adminData.AdminID,
                SessionID: adminData.SessionID,
                Pincode: this.addForm.value.Pincode_id,
                SNo: this.addForm.value.SNo,
                DistrictID: this.addForm.value.District_Name,
                StateID: this.addForm.value.State_Name,
            };
        }
        try {
            this._appService.postMethod(url, body)
                .subscribe(function (resp) {
                if (resp.success) {
                    if (_this.onEditOpen == true) {
                        _this.nzMessageService.success('Pincode Updated Sucessfully');
                    }
                    else {
                        _this.nzMessageService.success('Pincode Created Sucessfully');
                    }
                    _this.close();
                    _this.getPincodeList();
                }
                else {
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                }
            }, function (error) {
            });
        }
        catch (e) { }
    };
    PinCodeComponent.prototype.close = function () {
        this.viewForm = false;
        this.onEditOpen = false;
        this.addForm.reset();
    };
    PinCodeComponent.prototype.getTableList = function () {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem('adminData'));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            skip: 0,
            limit: 100000,
            Status: true
        };
        try {
            this._appService.postMethod('List_States', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.StatesListArray = resp.extras.Data;
                }
                else {
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                }
            }, function (error) {
            });
        }
        catch (e) { }
    };
    PinCodeComponent.prototype.getDistrictListArray = function () {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem('adminData'));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            skip: 0,
            limit: 100000,
            Status: true,
            StateID: this.addForm.get('State_Name').value
        };
        try {
            this._appService.postMethod('List_Districts', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.DistrictListArray = resp.extras.Data;
                    // if(this.DistrictListArray.length>0){
                    //   this.DistrictID.patchValue(this.DistrictListArray[0].DistrictID)
                    //   this.onTabClick(1)
                    // }
                }
                else {
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                }
            }, function (error) {
            });
        }
        catch (e) { }
    };
    // getDistrictList(){
    //   let adminData: any = JSON.parse(localStorage.getItem('adminData'))
    //   let body = {
    //     AdminID: adminData.AdminID,
    //     SessionID: adminData.SessionID,
    //     skip:0,
    //     limit: 100000,
    //     Status:true,
    //     StateID:this.StateID.value
    //   }
    //   try {
    //     this._appService.postMethod('List_Districts', body)
    //       .subscribe(resp => {
    //         if (resp.success) {
    //           this.DistrictListArray = resp.extras.Data
    //           if(this.DistrictListArray.length>0){
    //             this.DistrictID.patchValue(this.DistrictListArray[0].DistrictID)
    //           }
    //         } else {
    //           this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);
    //         }
    //       },
    //         error => {
    //         })
    //   } catch (e) { }
    // }
    PinCodeComponent.prototype.checkPincode = function (data) {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem('adminData'));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            Pincode: +data,
            PincodeID: this.onEditOpen ? this.selectedData.PincodeID : ""
        };
        try {
            this._appService.postMethod('Pincode', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    console.log(resp);
                }
                else {
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                }
            }, function (error) {
            });
        }
        catch (e) { }
    };
    PinCodeComponent.prototype.onNextPage = function (event) {
        this.currentPage = event;
        this.skip = (event - 1) * this.limit;
        this.getPincodeList();
    };
    PinCodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-PinCode',
            template: __webpack_require__(/*! ./PinCode.component.html */ "./src/app/PinCode/PinCode.component.html"),
            styles: [__webpack_require__(/*! ./PinCode.component.css */ "./src/app/PinCode/PinCode.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], PinCodeComponent);
    return PinCodeComponent;
}());



/***/ }),

/***/ "./src/app/PinCode/PinCode.module.ts":
/*!*******************************************!*\
  !*** ./src/app/PinCode/PinCode.module.ts ***!
  \*******************************************/
/*! exports provided: PinCodeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinCodeModule", function() { return PinCodeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _PinCode_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PinCode.component */ "./src/app/PinCode/PinCode.component.ts");
/* harmony import */ var _PinCode_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PinCode.routing */ "./src/app/PinCode/PinCode.routing.ts");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var PinCodeModule = /** @class */ (function () {
    function PinCodeModule() {
    }
    PinCodeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _PinCode_routing__WEBPACK_IMPORTED_MODULE_4__["PinCodeRoutes"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ],
            declarations: [_PinCode_component__WEBPACK_IMPORTED_MODULE_3__["PinCodeComponent"]]
        })
    ], PinCodeModule);
    return PinCodeModule;
}());



/***/ }),

/***/ "./src/app/PinCode/PinCode.routing.ts":
/*!********************************************!*\
  !*** ./src/app/PinCode/PinCode.routing.ts ***!
  \********************************************/
/*! exports provided: PinCodeRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinCodeRoutes", function() { return PinCodeRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _PinCode_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PinCode.component */ "./src/app/PinCode/PinCode.component.ts");


var routes = [
    { path: '', component: _PinCode_component__WEBPACK_IMPORTED_MODULE_1__["PinCodeComponent"] },
];
var PinCodeRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=PinCode-PinCode-module.js.map