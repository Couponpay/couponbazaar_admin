(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-category-module"],{

/***/ "./src/app/category/category.component.css":
/*!*************************************************!*\
  !*** ./src/app/category/category.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".primary_button{\n    position: absolute;\n    top: 0;\n    right: 0;\n    background: linear-gradient(90deg, #1976d2 20%, #00dbfe 100%);\n    border: coral;\n    color: #fff;\n    font-weight: 700;\n    font-size: 17px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLDZEQUE2RDtJQUM3RCxhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmltYXJ5X2J1dHRvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzE5NzZkMiAyMCUsICMwMGRiZmUgMTAwJSk7XG4gICAgYm9yZGVyOiBjb3JhbDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/category/category.component.html":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row style=\"margin-top: 25px;\">\n  <div nz-col nzSpan=\"24\">\n      <button nz-button nzType=\"primary\" (click)=\"open()\" class=\"primary_button\">Add Category</button>\n      <nz-drawer\n      [nzBodyStyle]=\"{ height: 'calc(100% - 55px)', overflow: 'auto', 'padding-bottom': '53px' }\"\n      [nzMaskClosable]=\"false\"\n      [nzWidth]=\"400\"\n      [nzVisible]=\"visible\"\n      nzTitle=\"Add Category\"\n      (nzOnClose)=\"close()\"\n    >\n    <form nz-form [formGroup]=\"addCategory\">\n        <div nz-row nzGutter=\"8\">\n          <div nz-col nzSpan=\"24\">\n            <nz-form-item>\n              <nz-form-label>Category Name</nz-form-label>\n              <nz-form-control>\n                <input nz-input formControlName=\"Category_Name\" placeholder=\"please enter Category Name\" />\n                <nz-form-explain *ngIf=\"addCategory.get('Category_Name').dirty && addCategory.get('Category_Name').errors\">Please\n                    input your Category Name!</nz-form-explain>\n              </nz-form-control>\n            </nz-form-item>\n          </div>\n          </div>\n          <div class=\"footer\">\n              <button nz-button nzType=\"primary\" class=\"primary_button1 ant-btn ant-btn-primary\"\n              (click)=\"categoryForm()\"><span>Submit</span></button>\n            </div>\n      </form>\n    </nz-drawer>\n    </div>\n    <div nz-row style=\"margin-top: 50px;\">\n        <div nz-col nzSpan=\"24\">\n    <nz-table #basicTable nzShowPagination=\"false\" [nzLoading]=\"isloading\"\n     nzLoadingDelay=\"1\" [nzData]=\"ListAllcategoryData\"  style=\"background: #FFF;margin:30px 0px;\">\n      <thead>\n        <tr>\n          <th>S.No</th>\n          <th>Category Name</th>\n          <!-- <th>Created at</th>\n          <th>Status</th> -->\n          <!-- <th>Edit</th> -->\n        </tr>\n      </thead>\n      <tbody>\n        <ng-container *ngFor=\"let data of ListAllcategoryData;let i=index\">\n          <tr>\n            <td>{{i+1}}</td>\n            <td>{{data.Category_Name}}</td>\n            <!-- <td>{{data.created_at | date:'medium'}}</td>\n            <td *ngIf=\"data.Status==true\">Yes</td>\n            <td *ngIf=\"data.Status==false\">No</td> -->\n          </tr>\n        </ng-container>\n      </tbody>\n    </nz-table>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(fb, _appService, nzMessageService) {
        this.fb = fb;
        this._appService = _appService;
        this.nzMessageService = nzMessageService;
        this.currentPage = 1;
        this.ListAllcategoryData = [];
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.addCategory = this.fb.group({
            Category_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.categoryList();
    };
    CategoryComponent.prototype.categoryList = function () {
        var _this = this;
        this.isloading = true;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var userdata = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
        };
        try {
            this._appService.postMethod('List_All_Category', userdata)
                .subscribe(function (resp) {
                _this.isloading = false;
                if (resp.success) {
                    _this.ListAllcategoryData = resp.extras.Data;
                    console.log(_this.ListAllcategoryData);
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
    CategoryComponent.prototype.open = function () {
        this.visible = true;
        this.addCategory.reset();
    };
    CategoryComponent.prototype.close = function () {
        this.visible = false;
    };
    CategoryComponent.prototype.categoryForm = function () {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            Category_Name: this.addCategory.value.Category_Name,
        };
        try {
            this._appService.postMethod('Add_Category', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.addCategory.reset();
                    _this.visible = false;
                    _this.categoryList();
                    _this.nzMessageService.success('Category Added sucessfully');
                }
                else {
                    _this.nzMessageService.create('error', 'Category Exists');
                }
            }, function (error) {
            });
        }
        catch (e) {
        }
    };
    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/category/category.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/category/category.module.ts":
/*!*********************************************!*\
  !*** ./src/app/category/category.module.ts ***!
  \*********************************************/
/*! exports provided: CategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _category_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category.routing */ "./src/app/category/category.routing.ts");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var CategoryModule = /** @class */ (function () {
    function CategoryModule() {
    }
    CategoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _category_routing__WEBPACK_IMPORTED_MODULE_4__["CategoryRoutes"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            declarations: [_category_component__WEBPACK_IMPORTED_MODULE_3__["CategoryComponent"]]
        })
    ], CategoryModule);
    return CategoryModule;
}());



/***/ }),

/***/ "./src/app/category/category.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/category/category.routing.ts ***!
  \**********************************************/
/*! exports provided: CategoryRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryRoutes", function() { return CategoryRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.component */ "./src/app/category/category.component.ts");


var routes = [
    { path: '', component: _category_component__WEBPACK_IMPORTED_MODULE_1__["CategoryComponent"] },
];
var CategoryRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=category-category-module.js.map