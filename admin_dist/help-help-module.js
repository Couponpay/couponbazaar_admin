(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["help-help-module"],{

/***/ "./src/app/help/help.component.css":
/*!*****************************************!*\
  !*** ./src/app/help/help.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    position: absolute;\r\n    bottom: 0px;\r\n    width: 100%;\r\n    border-top: 1px solid rgb(232, 232, 232);\r\n    padding: 10px 16px;\r\n    text-align: right;\r\n    left: 0px;\r\n    background: #fff;\r\n  }\r\n  .primary_button{\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    background: linear-gradient(90deg, #1976d2 20%, #00dbfe 100%);\r\n    border: coral;\r\n    color: #fff;\r\n    font-weight: 700;\r\n    font-size: 17px;\r\n  }\r\n  .primary_button1{\r\n    background: linear-gradient(90deg, #1976d2 20%, #00dbfe 100%);\r\n    border: coral;\r\n    color: #fff;\r\n    font-weight: 700;\r\n    font-size: 17px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscC9oZWxwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCx3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUiw2REFBNkQ7SUFDN0QsYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsNkRBQTZEO0lBQzdELGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9oZWxwL2hlbHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjMyLCAyMzIsIDIzMik7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgfVxyXG4gIC5wcmltYXJ5X2J1dHRvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTk3NmQyIDIwJSwgIzAwZGJmZSAxMDAlKTtcclxuICAgIGJvcmRlcjogY29yYWw7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgfVxyXG4gIC5wcmltYXJ5X2J1dHRvbjF7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxOTc2ZDIgMjAlLCAjMDBkYmZlIDEwMCUpO1xyXG4gICAgYm9yZGVyOiBjb3JhbDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/help/help.component.html":
/*!******************************************!*\
  !*** ./src/app/help/help.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row style=\"margin-top: 25px;\">\r\n  <div nz-col nzSpan=\"24\">\r\n      <button nz-button nzType=\"primary\" (click)=\"open()\" class=\"primary_button\">Add Help Data</button>\r\n      <nz-drawer\r\n      [nzBodyStyle]=\"{ height: 'calc(100% - 55px)', overflow: 'auto', 'padding-bottom': '53px' }\"\r\n      [nzMaskClosable]=\"false\"\r\n      [nzWidth]=\"400\"\r\n      [nzVisible]=\"visible\"\r\n      nzTitle=\"Create Help\"\r\n      (nzOnClose)=\"close()\"\r\n    >\r\n    <form nz-form [formGroup]=\"createHelp\" (ngSubmit)=\"HelpForm()\">\r\n        <div nz-row nzGutter=\"8\">\r\n          <div nz-col nzSpan=\"24\">\r\n            <nz-form-item>\r\n              <nz-form-label>Title</nz-form-label>\r\n              <nz-form-control>\r\n                <input nz-input formControlName=\"Title\" placeholder=\"please enter Help Title\" />\r\n                <nz-form-explain *ngIf=\"createHelp.get('Title').dirty && createHelp.get('Title').errors\">Please\r\n                    input your Language!</nz-form-explain>\r\n              </nz-form-control>\r\n            </nz-form-item>\r\n            <nz-form-item>\r\n                <nz-form-label nzRequired>Description</nz-form-label>\r\n                <nz-form-control style=\"width:300px\">\r\n                  <textarea formControlName=\"Description\" nz-input rows=\"2\" placeholder=\"write any thing\"></textarea>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n          </div>\r\n          </div>\r\n          <div class=\"footer\">\r\n              <button nz-button nzType=\"primary\" class=\"primary_button1 ant-btn ant-btn-primary\"><span>Submit</span></button>\r\n            </div>\r\n      </form>\r\n    </nz-drawer>\r\n    </div>\r\n    <div nz-row style=\"margin-top: 50px;\">\r\n        <div nz-col nzSpan=\"24\">\r\n    <nz-table #basicTable nzShowPagination=\"false\" [nzLoading]=\"isloading\"\r\n     nzLoadingDelay=\"1\" [nzData]=\"ListAllHellData\"  style=\"background: #FFF;margin:30px 0px;\">\r\n      <thead>\r\n        <tr>\r\n          <th>S.No</th>\r\n          <th>Title</th>\r\n          <th>Created at</th>\r\n          <th>Description</th>\r\n          <th>Status</th>\r\n          <th>Operations</th>\r\n          <th>Edit</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <ng-container *ngFor=\"let data of ListAllHellData;let i=index\">\r\n          <tr>\r\n            <td>{{skip+i+1}}</td>\r\n            <td>{{data.Title}}</td>\r\n            <td>{{data.created_at | date:'medium'}}</td>\r\n            <td>{{data.Description}}</td>\r\n            <td *ngIf=\"data.Status==true\">Yes</td>\r\n            <td *ngIf=\"data.Status==false\">No</td>\r\n            <td>\r\n                <span [ngSwitch]=\"data.Status\">\r\n                  <span *ngSwitchCase=true>\r\n                    <a nz-popconfirm (nzOnConfirm)=\"onActionOnHelp(data,i)\"\r\n                      nzTitle=\"Are you sure you want to Inactive this?\">Make Inactive</a>\r\n                  </span>\r\n                  <span *ngSwitchCase=false>\r\n                    <a style=\"color: red;\" nz-popconfirm (nzOnConfirm)=\"onActionOnHelp(data,i)\"\r\n                      nzTitle=\"Are you sure you want to Active this?\">Make Active</a>\r\n                  </span>\r\n                  <span *ngSwitchDefault>\r\n                    NA\r\n                  </span>\r\n                </span>\r\n              </td>\r\n              <td style=\"color: #096dd9;\" (click)=\"onEdit(data,i)\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></td>\r\n          </tr>\r\n        </ng-container>\r\n      </tbody>\r\n    </nz-table>\r\n  </div>\r\n  <nz-pagination (nzPageIndexChange)=\"onNextPage($event)\" [nzPageSize]=\"limit\" [nzPageIndex]=\"currentPage\"\r\n  [nzTotal]=\"TotalItems\"></nz-pagination>\r\n</div>"

/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var HelpComponent = /** @class */ (function () {
    function HelpComponent(fb, _appService, nzMessageService) {
        this.fb = fb;
        this._appService = _appService;
        this.nzMessageService = nzMessageService;
        this.currentPage = 1;
        this.skip = 0;
        this.limit = this._appService.limit;
        this.ListAllHellData = [];
        this.onEditOpen = false;
        this.visible = false;
    }
    HelpComponent.prototype.ngOnInit = function () {
        this.createHelp = this.fb.group({
            Title: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Description: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.OnHelpDataList();
    };
    HelpComponent.prototype.OnHelpDataList = function () {
        var _this = this;
        this.isloading = true;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var userdata = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            skip: this.skip,
            limit: this._appService.limit,
        };
        try {
            this._appService.postMethod('List_All_Help_Data', userdata)
                .subscribe(function (resp) {
                _this.isloading = false;
                if (resp.success) {
                    _this.TotalItems = resp.extras.Count;
                    if (_this.skip == 0) {
                        _this.currentPage = 1;
                    }
                    _this.ListAllHellData = resp.extras.Data;
                    console.log(_this.ListAllHellData);
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
    HelpComponent.prototype.onNextPage = function (event) {
        this.currentPage = event;
        this.skip = (event - 1) * this._appService.limit;
        this.OnHelpDataList();
    };
    HelpComponent.prototype.onActionOnHelp = function (data, i) {
        var _this = this;
        this.HelpDataID = data.HelpDataID;
        this.ind = i;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            HelpDataID: this.HelpDataID
        };
        try {
            this._appService.postMethod('Active_Inactive_Help', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    var msg = void 0;
                    if (data.Status) {
                        msg = 'Inactivated Successfully';
                    }
                    else {
                        msg = 'Activated Successfully';
                    }
                    _this.OnHelpDataList();
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
    HelpComponent.prototype.open = function () {
        this.visible = true;
        this.onEditOpen = false;
        this.createHelp.reset();
    };
    HelpComponent.prototype.close = function () {
        this.visible = false;
    };
    HelpComponent.prototype.HelpForm = function () {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {};
        var url = '';
        if (this.onEditOpen == true) {
            url = 'Edit_Help';
            console.log("text");
            body = {
                AdminID: adminData.AdminID,
                SessionID: adminData.SessionID,
                Title: this.createHelp.value.Title,
                Description: this.createHelp.value.Description,
                HelpDataID: this.HelpDataID
            };
        }
        else {
            url = 'Create_Help';
            console.log("text1");
            body = {
                AdminID: adminData.AdminID,
                SessionID: adminData.SessionID,
                Title: this.createHelp.value.Title,
                Description: this.createHelp.value.Description
            };
            console.log(body);
        }
        try {
            this._appService.postMethod(url, body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.createHelp.reset();
                    if (_this.onEditOpen == true) {
                        _this.visible = false;
                        _this.nzMessageService.success('');
                        _this.OnHelpDataList();
                    }
                    else {
                        _this.visible = false;
                        _this.nzMessageService.success('Help Created Sucessfully');
                        _this.OnHelpDataList();
                    }
                }
                else {
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                }
            }, function (error) {
            });
        }
        catch (e) { }
    };
    HelpComponent.prototype.onEdit = function (data, i) {
        this.HelpDataID = data.HelpDataID;
        this.visible = true;
        this.createHelp.patchValue({
            Title: data.Title,
            Description: data.Description,
            HelpDataID: this.HelpDataID
        });
        this.HelpDataID = this.HelpDataID;
        this.onEditOpen = true;
    };
    HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.css */ "./src/app/help/help.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/help/help.module.ts":
/*!*************************************!*\
  !*** ./src/app/help/help.module.ts ***!
  \*************************************/
/*! exports provided: HelpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpModule", function() { return HelpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _help_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _help_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./help.routing */ "./src/app/help/help.routing.ts");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");








var HelpModule = /** @class */ (function () {
    function HelpModule() {
    }
    HelpModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _help_routing__WEBPACK_IMPORTED_MODULE_4__["HelpRoutes"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"]
            ],
            declarations: [_help_component__WEBPACK_IMPORTED_MODULE_3__["HelpComponent"]]
        })
    ], HelpModule);
    return HelpModule;
}());



/***/ }),

/***/ "./src/app/help/help.routing.ts":
/*!**************************************!*\
  !*** ./src/app/help/help.routing.ts ***!
  \**************************************/
/*! exports provided: HelpRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpRoutes", function() { return HelpRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _help_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help.component */ "./src/app/help/help.component.ts");


var routes = [
    { path: '', component: _help_component__WEBPACK_IMPORTED_MODULE_1__["HelpComponent"] },
];
var HelpRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=help-help-module.js.map