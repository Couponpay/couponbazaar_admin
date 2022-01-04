(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["NewsItems-NewsItems-module"],{

/***/ "./src/app/NewsItems/NewsItems.component.css":
/*!***************************************************!*\
  !*** ./src/app/NewsItems/NewsItems.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nz-table{\n    background: white;\n    margin-bottom: 10px;\n}\n.imagetd{\n    margin-bottom: 10px;\n}\n.editIcon{\n    cursor: pointer;\n}\n.row{\n    margin-block: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTmV3c0l0ZW1zL05ld3NJdGVtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9OZXdzSXRlbXMvTmV3c0l0ZW1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuei10YWJsZXtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmltYWdldGR7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5lZGl0SWNvbntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucm93e1xuICAgIG1hcmdpbi1ibG9jazogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/NewsItems/NewsItems.component.html":
/*!****************************************************!*\
  !*** ./src/app/NewsItems/NewsItems.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row class=\"row rowgap\">\n  <div nz-row nzGutter=\"8\" class=\"rowgap\">\n      <div nz-col nzSpan=\"20\">\n        <nz-tabset>\n          <nz-tab (nzClick)=\"onTabClick(1)\" nzTitle=\"News Items\">\n          </nz-tab>\n          <nz-tab (nzClick)=\"onTabClick(2)\" nzTitle=\"Inactivated News\">\n          </nz-tab>\n        </nz-tabset>\n      </div>\n      <div nz-col nzSpan=\"4\" style=\"text-align: right\">\n        <button nz-button nzType=\"primary\"  (click)=\"onAddNews()\">Add News</button>\n      </div>\n    </div>\n</div>\n<div nz-row>\n<nz-table [nzLoading]=\"isnewsItemsListLoading\" [nzLoadingDelay]=\"2\" nzShowPagination=\"false\" #basicTable\n  nzSize=\"small\" [nzData]=\"newsItemsList\">\n  <thead>\n    <tr>\n    \n      <th>SNO</th>\n      <th>Title</th>\n      <th>Description</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-container *ngFor=\"let data of newsItemsList;let i=index\">\n      <tr *ngIf=\"Status==1&&data.Status==true\">\n        <td>{{data.SNo}}</td>\n        <td>{{data.Title}}</td>\n        <td>{{data.Description}}</td>\n        <td>\n          <a (click)=\"onEdit(data)\">Edit</a>\n        </td>\n      </tr>\n     \n    </ng-container>\n  </tbody>\n</nz-table>\n<span class=\"totalItems\"><b>Total Items: </b>{{TotalItems}}</span>\n<nz-pagination nzHideOnSinglePage=\"true\" (nzPageIndexChange)=\"onNextPage($event)\" [nzPageSize]=\"limit\"\n  [nzPageIndex]=\"currentPage\" [nzTotal]=\"TotalItems\"></nz-pagination>\n</div>\n<nz-modal [nzOkLoading]=\"isUpdateLoading\" nzMaskClosable=\"false\" nzWrapClassName=\"vertical-center-modal\"\n[(nzVisible)]=\"isUpdateDetails\" nzTitle=\"Update Details\" (nzOnCancel)=\"handleCancelMiddle()\"\n(nzOnOk)=\"onupdateDetails()\">\n<form nz-form [formGroup]=\"updateDetailsForm\" class=\"login-form\">\n  <nz-form-item>\n    <nz-form-label [nzSpan]=\"7\">S.No\n    </nz-form-label>\n    <nz-form-control [nzSpan]=\"12\">\n      <input nz-input formControlName=\"SNo\" placeholder=\"SNo\" />\n      <nz-form-explain *ngIf=\"newItemAddingForm.get('SNo')?.dirty && newItemAddingForm.get('SNo')?.errors\">\n        Please input  SNo!</nz-form-explain>\n    </nz-form-control>\n\n  </nz-form-item>\n  <nz-form-item>\n    <nz-form-label [nzSpan]=\"7\">Title\n    </nz-form-label>\n    <nz-form-control [nzSpan]=\"12\">\n      <input nz-input formControlName=\"Title\" placeholder=\"Title\" />\n      <nz-form-explain *ngIf=\"updateDetailsForm.get('Title')?.dirty && updateDetailsForm.get('Title')?.errors\">\n        Please input your Title!</nz-form-explain>\n    </nz-form-control>\n\n  </nz-form-item>\n  <nz-form-item>\n    <nz-form-label [nzSpan]=\"7\">Description\n    </nz-form-label>\n    <nz-form-control [nzSpan]=\"12\">\n\n      <textarea nz-input placeholder=\"Descrption\" formControlName=\"Description\"\n        [nzAutosize]=\"{ minRows: 2, maxRows: 6 }\"></textarea>\n      <nz-form-explain\n        *ngIf=\"updateDetailsForm.get('Description')?.dirty && updateDetailsForm.get('Description')?.errors\">\n        Please input Description!\n      </nz-form-explain>\n    </nz-form-control>\n  </nz-form-item>\n</form>\n</nz-modal>\n<nz-modal [nzOkLoading]=\"isNewsAddingbtn\" nzMaskClosable=\"false\" nzWrapClassName=\"vertical-center-modal\"\n[(nzVisible)]=\"addNewsModal\" nzTitle=\"Add news\" (nzOnCancel)=\"handleCanceladdNewsModal()\"\n(nzOnOk)=\"onAddNewstoServer()\">\n<form nz-form [formGroup]=\"newItemAddingForm\" class=\"login-form\">\n  <nz-form-item>\n    <nz-form-label [nzSpan]=\"7\">S.No\n    </nz-form-label>\n    <nz-form-control [nzSpan]=\"12\">\n      <input nz-input formControlName=\"SNo\" placeholder=\"SNo\" />\n      <nz-form-explain *ngIf=\"newItemAddingForm.get('SNo')?.dirty && newItemAddingForm.get('SNo')?.errors\">\n        Please input  SNo!</nz-form-explain>\n    </nz-form-control>\n\n  </nz-form-item>\n  <nz-form-item>\n    <nz-form-label [nzSpan]=\"7\">Title\n    </nz-form-label>\n    <nz-form-control [nzSpan]=\"12\">\n      <input nz-input formControlName=\"Title\" placeholder=\"Title\" />\n      <nz-form-explain *ngIf=\"newItemAddingForm.get('Title')?.dirty && newItemAddingForm.get('Title')?.errors\">\n        Please input your Title!</nz-form-explain>\n    </nz-form-control>\n\n  </nz-form-item>\n  <nz-form-item>\n    <nz-form-label [nzSpan]=\"7\">Description\n    </nz-form-label>\n    <nz-form-control [nzSpan]=\"12\">\n\n      <textarea nz-input placeholder=\"Descrption\" formControlName=\"Description\"\n        [nzAutosize]=\"{ minRows: 2, maxRows: 6 }\"></textarea>\n      <nz-form-explain\n        *ngIf=\"newItemAddingForm.get('Description')?.dirty && newItemAddingForm.get('Description')?.errors\">\n        Please input Description!\n      </nz-form-explain>\n    </nz-form-control>\n  </nz-form-item>\n</form>\n</nz-modal>"

/***/ }),

/***/ "./src/app/NewsItems/NewsItems.component.ts":
/*!**************************************************!*\
  !*** ./src/app/NewsItems/NewsItems.component.ts ***!
  \**************************************************/
/*! exports provided: NewsItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItemsComponent", function() { return NewsItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




// import { CookieService } from 'ngx-cookie-service';


var NewsItemsComponent = /** @class */ (function () {
    function NewsItemsComponent(_appService, http, fb, 
    // private cks: CookieService,
    nzMessageService) {
        this._appService = _appService;
        this.http = http;
        this.fb = fb;
        this.nzMessageService = nzMessageService;
        this.newsItemsList = [];
        this.currentPage = 1;
        this.limit = this._appService.limit;
        this.skip = 0;
        this.Status = 1;
    }
    NewsItemsComponent.prototype.ngOnInit = function () {
        this.onTabClick(1);
        this.newItemAddingForm = this.fb.group({
            Description: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            Title: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            SNo: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.updateDetailsForm = this.fb.group({
            Title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Description: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            SNo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    NewsItemsComponent.prototype.onTabClick = function (tabNumber) {
        this.Status = tabNumber;
        this.getNewsItems(0);
    };
    NewsItemsComponent.prototype.onAddNews = function () {
        this.addNewsModal = true;
    };
    NewsItemsComponent.prototype.handleCanceladdNewsModal = function () {
        this.addNewsModal = false;
    };
    NewsItemsComponent.prototype.onAddNewstoServer = function () {
        var _this = this;
        for (var i in this.newItemAddingForm.controls) {
            this.newItemAddingForm.controls[i].markAsDirty();
            this.newItemAddingForm.controls[i].updateValueAndValidity();
        }
        if (this.newItemAddingForm.valid) {
            this.isNewsAddingbtn = true;
            var adminData = JSON.parse(localStorage.getItem('adminData'));
            var body = {
                AdminID: adminData.AdminID,
                SessionID: adminData.SessionID,
                Title: this.newItemAddingForm.value.Title,
                Description: this.newItemAddingForm.value.Description,
                SNo: this.newItemAddingForm.value.SNo,
            };
            try {
                this._appService.postMethod('Add_News', body)
                    .subscribe(function (resp) {
                    _this.isNewsAddingbtn = false;
                    if (resp.success) {
                        _this.addNewsModal = false;
                        _this.getNewsItems(0);
                        _this.newItemAddingForm.reset();
                        _this.nzMessageService.success('News  Added');
                    }
                    else {
                        _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                    }
                }, function (error) {
                });
            }
            catch (e) { }
        }
    };
    NewsItemsComponent.prototype.getNewsItems = function (skip) {
        var _this = this;
        this.isnewsItemsListLoading = true;
        var adminData = JSON.parse(localStorage.getItem('adminData'));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            skip: this.skip,
            limit: this._appService.limit,
        };
        try {
            this._appService.postMethod('List_All_News', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.newsItemsList = resp.extras.Data;
                    if (skip == 0) {
                        _this.currentPage = 1;
                        _this.TotalItems = resp.extras.Count;
                    }
                    else {
                        _this.TotalItems = _this.TotalItems;
                    }
                    if (_this.TotalItems == 0) {
                    }
                    _this.isnewsItemsListLoading = false;
                    // console.log(this.guidelineslist[0].All_Images_Data.length)
                }
                else {
                    _this.isnewsItemsListLoading = false;
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                }
            }, function (error) {
            });
        }
        catch (e) { }
    };
    NewsItemsComponent.prototype.onNextPage = function (event) {
        this.currentPage = event;
        var skip = (event - 1) * this._appService.limit;
        this.skip = skip;
        this.getNewsItems(skip);
    };
    NewsItemsComponent.prototype.onEdit = function (data) {
        this.NewsID = data.NewsID;
        this.updateDetailsForm.patchValue({ Title: data.Title, Description: data.Description, SNo: data.SNo });
        this.isUpdateDetails = true;
    };
    NewsItemsComponent.prototype.handleCancelMiddle = function () {
        this.isUpdateDetails = false;
    };
    NewsItemsComponent.prototype.onupdateDetails = function () {
        var _this = this;
        for (var i in this.updateDetailsForm.controls) {
            this.updateDetailsForm.controls[i].markAsDirty();
            this.updateDetailsForm.controls[i].updateValueAndValidity();
        }
        if (this.updateDetailsForm.valid) {
            console.log(this.updateDetailsForm.value);
            this.isUpdateLoading = true;
            var adminData = JSON.parse(localStorage.getItem('adminData'));
            var body = {
                AdminID: adminData.AdminID,
                SessionID: adminData.SessionID,
                NewsID: this.NewsID,
                Title: this.updateDetailsForm.value.Title,
                Description: this.updateDetailsForm.value.Description,
                SNo: this.updateDetailsForm.value.SNo
            };
            try {
                this._appService.postMethod("Update_News", body)
                    .subscribe(function (resp) {
                    if (resp.success) {
                        _this.isUpdateDetails = false;
                        _this.isUpdateLoading = false;
                        // this.getAdminList(this.skip)
                        _this.getNewsItems(_this.skip);
                    }
                    else {
                        _this.isUpdateLoading = false;
                        _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                    }
                }, function (error) {
                });
            }
            catch (e) { }
        }
    };
    NewsItemsComponent.prototype.onAction = function (data) {
        var _this = this;
        //this.reasonData = data
        var url;
        if (data.Status) {
            url = 'Activate_Inactivate_News'; //"Inactivated_Customer_Cancellation_Reason"
        }
        else {
            url = "Activate_Inactivate_News";
        }
        try {
            var adminData = JSON.parse(localStorage.getItem('adminData'));
            var body = {
                AdminID: adminData.AdminID,
                SessionID: adminData.SessionID,
                NewsID: data.NewsID,
            };
            this._appService.postMethod(url, body)
                .subscribe(function (resp) {
                if (resp.success) {
                    var msg = void 0;
                    if (data.Status) {
                        msg = 'Inactivated Successfully';
                    }
                    else {
                        msg = 'Activated Successfully';
                    }
                    _this.nzMessageService.success(msg);
                    _this.getNewsItems(_this.skip);
                }
                else {
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                }
            }, function (error) {
            });
        }
        catch (e) { }
    };
    NewsItemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-NewsItems',
            template: __webpack_require__(/*! ./NewsItems.component.html */ "./src/app/NewsItems/NewsItems.component.html"),
            styles: [__webpack_require__(/*! ./NewsItems.component.css */ "./src/app/NewsItems/NewsItems.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], NewsItemsComponent);
    return NewsItemsComponent;
}());



/***/ }),

/***/ "./src/app/NewsItems/NewsItems.module.ts":
/*!***********************************************!*\
  !*** ./src/app/NewsItems/NewsItems.module.ts ***!
  \***********************************************/
/*! exports provided: NewsItemsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItemsModule", function() { return NewsItemsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _NewsItems_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewsItems.component */ "./src/app/NewsItems/NewsItems.component.ts");
/* harmony import */ var _NewsItems_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NewsItems.routing */ "./src/app/NewsItems/NewsItems.routing.ts");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var NewsItemsModule = /** @class */ (function () {
    function NewsItemsModule() {
    }
    NewsItemsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _NewsItems_routing__WEBPACK_IMPORTED_MODULE_4__["NewsItemsRoutes"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            declarations: [_NewsItems_component__WEBPACK_IMPORTED_MODULE_3__["NewsItemsComponent"]]
        })
    ], NewsItemsModule);
    return NewsItemsModule;
}());



/***/ }),

/***/ "./src/app/NewsItems/NewsItems.routing.ts":
/*!************************************************!*\
  !*** ./src/app/NewsItems/NewsItems.routing.ts ***!
  \************************************************/
/*! exports provided: NewsItemsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItemsRoutes", function() { return NewsItemsRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _NewsItems_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsItems.component */ "./src/app/NewsItems/NewsItems.component.ts");


var routes = [
    { path: "", component: _NewsItems_component__WEBPACK_IMPORTED_MODULE_1__["NewsItemsComponent"] },
];
var NewsItemsRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=NewsItems-NewsItems-module.js.map