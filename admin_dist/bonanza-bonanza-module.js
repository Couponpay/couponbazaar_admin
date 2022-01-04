(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bonanza-bonanza-module"],{

/***/ "./src/app/bonanza/Bonanza.routing.ts":
/*!********************************************!*\
  !*** ./src/app/bonanza/Bonanza.routing.ts ***!
  \********************************************/
/*! exports provided: BonanzaRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonanzaRoutes", function() { return BonanzaRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bonanza_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bonanza.component */ "./src/app/bonanza/bonanza.component.ts");


var routes = [
    { path: '', component: _bonanza_component__WEBPACK_IMPORTED_MODULE_1__["BonanzaComponent"] },
];
var BonanzaRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/bonanza/bonanza.component.css":
/*!***********************************************!*\
  !*** ./src/app/bonanza/bonanza.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".removeButton{\r\n    margin-top: 32px;\r\n    margin-left: 20px;\r\n    border-radius: 50px;\r\n    width: 30px;\r\n    height: 30px;\r\n    padding: 4px 12px 10px 8px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9uYW56YS9ib25hbnphLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2JvbmFuemEvYm9uYW56YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlbW92ZUJ1dHRvbntcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBhZGRpbmc6IDRweCAxMnB4IDEwcHggOHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/bonanza/bonanza.component.html":
/*!************************************************!*\
  !*** ./src/app/bonanza/bonanza.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row style=\"margin-top: 25px;\" *ngIf=\"!visible\">\r\n  <div nz-col nzSpan=\"24\" style=\"text-align: right;\">\r\n    <button nz-button nzType=\"primary\" (click)=\"open()\" class=\"primary_button\">Add Bonanza</button>\r\n  </div>\r\n</div>\r\n<div nz-row style=\"margin-top: 25px;\" *ngIf=\"visible\">\r\n  <div nz-col nzSpan=\"18\">\r\n    <form nz-form [formGroup]=\"addBonanzaForm\">\r\n      <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"12\">\r\n          <nz-form-item>\r\n            <nz-form-label>Bonanza Name</nz-form-label>\r\n            <nz-form-control nzSpan=\"24\" nzRequired >\r\n              <input type=\"text\" nz-input formControlName=\"Name\" placeholder=\"please enter Bonanza Name\" />\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </div>\r\n        <div nz-col nzSpan=\"12\">\r\n          <nz-form-item>\r\n            <nz-form-label>Bonanza Type</nz-form-label>\r\n            <nz-form-control nzSpan=\"24\" nzRequired>\r\n              <nz-input-group>\r\n                <nz-select style=\"width: 100%;\" formControlName=\"Bonanza_Type\" nzShowSearch nzAllowClear\r\n                  nzPlaceHolder=\"Select Bonanza Type\">\r\n                  <nz-option *ngFor=\"let item of BonanzaType; let i=index\" [nzValue]=\"item.ind\" [nzLabel]=\"item.type\">\r\n                  </nz-option>\r\n                </nz-select>\r\n              </nz-input-group>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </div>\r\n      </div>\r\n      <div nz-row nzGutter=\"8\" *ngIf=\"addBonanzaForm.get('Bonanza_Type').value == 1 || addBonanzaForm.get('Bonanza_Type').value == 3\">\r\n        <div nz-col nzSpan=\"12\">\r\n          <nz-form-item>\r\n            <nz-form-label>Bonanza Amount</nz-form-label>\r\n            <nz-form-control nzRequired>\r\n              <input nz-input formControlName=\"Amount\" placeholder=\"please enter Bonanza Amount\" />\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </div>\r\n\r\n        <div nz-col nzSpan=\"12\">\r\n          <nz-form-item>\r\n            <nz-form-label>Bonanza Points</nz-form-label>\r\n            <nz-form-control nzRequired>\r\n              <input nz-input formControlName=\"Points\" placeholder=\"please enter Bonanza Points\" />\r\n\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </div>\r\n      </div>\r\n      <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"12\">\r\n          <div nz-row nzGutter=\"8\">\r\n            <div nz-col nzSpan=\"12\">\r\n              <nz-form-item>\r\n                <nz-form-label>From Date</nz-form-label>\r\n                <nz-form-control nzRequired>\r\n                  <nz-date-picker nzPlaceHolder=\"From Date\" formControlName=\"Start_Date\"></nz-date-picker>\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n            <div nz-col nzSpan=\"12\">\r\n              <nz-form-item>\r\n                <nz-form-label>End Date</nz-form-label>\r\n                <nz-form-control nzRequired>\r\n                  <nz-date-picker formControlName=\"End_Date\"></nz-date-picker>\r\n\r\n                </nz-form-control>\r\n              </nz-form-item>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        \r\n\r\n        <div nz-col nzSpan=\"12\">\r\n          <nz-form-item>\r\n            <nz-form-label>Bonanza Description</nz-form-label>\r\n            <nz-form-control nzRequired>\r\n              <textarea nz-input style=\"height: 120px;\" formControlName=\"Description\" placeholder=\"please enter Bonanza Description\" ></textarea>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n        <div nz-row [nzGutter]=\"16\" *ngIf=\"addBonanzaForm.get('Bonanza_Type').value == 1 || addBonanzaForm.get('Bonanza_Type').value == 3\">\r\n          <div nz-col nzSpan=\"12\">\r\n            <nz-form-item>\r\n              <nz-form-label nzFor=\"Cluster\" nzRequired>Points Level Data</nz-form-label>\r\n              <nz-form-control>\r\n                <div style=\"margin-bottom: 10px;\">\r\n                  <button nz-button nz-tooltip nzTitle=\"Add Points Level Data\" (click)=\"addPointsLevelControls()\"><i\r\n                      class=\"fa fa-plus\" aria-hidden=\"true\"></i> Add Points Level Data</button>\r\n                </div>\r\n              </nz-form-control>\r\n            </nz-form-item>\r\n          </div>\r\n        </div>\r\n\r\n        <div nz-row [nzGutter]=\"16\">\r\n          <div nz-col nzSpan=\"24\">\r\n            <nz-form-item formArrayName=\"Bonanza_Points_Data\">\r\n              <ng-container *ngFor=\"let authCotrols of arrayControls.controls; let j=index\">\r\n                <div [formGroupName]=\"j\">\r\n                  <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"5\">\r\n                      <nz-form-item>\r\n                        <nz-form-label nzSpan=\"24\">Points Levels</nz-form-label>\r\n                        <nz-form-control nzSpan=\"24\" nzRequired>\r\n                          <input formControlName=\"Levels\" nz-input placeholder=\"please enter Points Levels\" />\r\n                        </nz-form-control>\r\n                      </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"5\">\r\n                      <nz-form-item>\r\n                        <nz-form-label nzSpan=\"24\">Min Points</nz-form-label>\r\n                        <nz-form-control nzSpan=\"24\">\r\n                          <input formControlName=\"Min_Points\" nz-input placeholder=\"please enter Min Points\" />\r\n                        </nz-form-control>\r\n                      </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"5\">\r\n                      <nz-form-item>\r\n                        <nz-form-label nzSpan=\"24\">Max Points</nz-form-label>\r\n                        <nz-form-control nzSpan=\"24\">\r\n                          <input formControlName=\"Max_Points\" nz-input placeholder=\"please enter Max Points\" />\r\n                        </nz-form-control>\r\n                      </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"5\">\r\n                      <nz-form-item>\r\n                        <nz-form-label nzSpan=\"24\">Winning</nz-form-label>\r\n                        <nz-form-control nzSpan=\"24\">\r\n                          <input formControlName=\"Winning\" nz-input placeholder=\"please enter Winning\" />\r\n                        </nz-form-control>\r\n                      </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"2\">\r\n                      <nz-form-item>\r\n                        <nz-form-control>\r\n                          <button nz-button nzType=\"link\" nz-tooltip nzTitle=\"Remove Points Level Data\"\r\n                            [disabled]=\"addBonanzaForm.get('Bonanza_Points_Data').value.length==1\"\r\n                            (click)=\"onRemovePointsLevelDataControls(j)\" class=\"removeButton\"><i class=\"fa fa-minus\"\r\n                              aria-hidden=\"true\"></i></button>\r\n                        </nz-form-control>\r\n                      </nz-form-item>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ng-container>\r\n            </nz-form-item>\r\n          </div>\r\n        </div>\r\n\r\n        <div nz-row [nzGutter]=\"16\" *ngIf=\"addBonanzaForm.get('Bonanza_Type').value == 2 || addBonanzaForm.get('Bonanza_Type').value == 3\">\r\n          <div nz-col nzSpan=\"12\">\r\n            <nz-form-item>\r\n              <nz-form-label nzFor=\"Cluster\" nzRequired>Matrix Levels Data</nz-form-label>\r\n              <nz-form-control>\r\n                <div style=\"margin-bottom: 10px;\">\r\n                  <button nz-button nz-tooltip nzTitle=\"Add Matrix Levels Data\" (click)=\"addMatrixLevelsControls()\"><i\r\n                      class=\"fa fa-plus\" aria-hidden=\"true\"></i> Add Matrix Levels Data</button>\r\n                </div>\r\n              </nz-form-control>\r\n            </nz-form-item>\r\n          </div>\r\n        </div>\r\n\r\n        <div nz-row [nzGutter]=\"16\">\r\n          <div nz-col nzSpan=\"24\">\r\n            <nz-form-item formArrayName=\"Bonanza_Matrix_Data\">\r\n              <ng-container *ngFor=\"let authCotrols of MatrixLevelsControls.controls; let i=index\">\r\n                <div [formGroupName]=\"i\">\r\n                  <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"5\">\r\n                      <nz-form-item>\r\n                        <nz-form-label nzSpan=\"24\">Matrix Levels</nz-form-label>\r\n                        <nz-form-control nzSpan=\"24\">\r\n                          <input formControlName=\"Levels\" nz-input placeholder=\"please enter Matrix Levels\" />\r\n                        </nz-form-control>\r\n                      </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"5\">\r\n                      <nz-form-item>\r\n                        <nz-form-label nzSpan=\"24\">Matrix</nz-form-label>\r\n                        <nz-form-control nzSpan=\"24\">\r\n                          <input formControlName=\"Matrix\" nz-input placeholder=\"please enter Matrix\" />\r\n                        </nz-form-control>\r\n                      </nz-form-item>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"5\">\r\n                      <nz-form-item>\r\n                        <nz-form-label nzSpan=\"24\">Winning</nz-form-label>\r\n                        <nz-form-control nzSpan=\"24\">\r\n                          <input formControlName=\"Winning\" nz-input placeholder=\"please enter Winning\" />\r\n                        </nz-form-control>\r\n                      </nz-form-item>\r\n                    </div>\r\n\r\n                    <div nz-col nzSpan=\"2\">\r\n                      <nz-form-item>\r\n                        <nz-form-control>\r\n                          <button nz-button nzType=\"link\" nz-tooltip nzTitle=\"Remove Matrix Levels Data\"\r\n                            [disabled]=\"addBonanzaForm.get('Bonanza_Matrix_Data').value.length==1\"\r\n                            (click)=\"onRemoveMatrixLevelsDataControls(i)\" class=\"removeButton\"><i class=\"fa fa-minus\"\r\n                              aria-hidden=\"true\"></i></button>\r\n                        </nz-form-control>\r\n                      </nz-form-item>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ng-container>\r\n            </nz-form-item>\r\n          </div>\r\n        </div>\r\n      <div class=\"footer\">\r\n        <div nz-row [nzGutter]=\"16\">\r\n          <div nz-col nzSpan=\"3\">\r\n            <button nz-button nzType=\"default\" class=\"primary_button1 ant-btn ant-btn-defalt\"\r\n              (click)=\"BonanzaClose()\"><span>Cancel</span></button>\r\n          </div>\r\n              <div nz-col nzSpan=\"3\">\r\n            <button nz-button nzType=\"primary\" [nzLoading]=\"isAddBtnLoading\" class=\"primary_button1 ant-btn ant-btn-primary\"\r\n              (click)=\"SubmitBonanzaForm()\"><span>{{!isBonanzaEditing ?'Create Bonanza':'Update Bonanza'}}</span></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- {{addBonanzaForm.value| json}} -->\r\n    </form>\r\n    <!-- </nz-drawer> -->\r\n  </div>\r\n</div>\r\n\r\n\r\n<div nz-row *ngIf=\"!visible\">\r\n  <div nz-col nzSpan=\"24\">\r\n    <form nz-form [nzLayout]=\"'inline'\" [formGroup]=\"selectBonanzaStatusForm\">\r\n      <div nz-row>\r\n        <div nz-col nzSpan=\"10\">\r\n          <nz-form-item>\r\n            <nz-form-label>Selected Date</nz-form-label>\r\n            <nz-form-control>\r\n              <nz-range-picker [nzFormat]=\"'dd-MM-yyyy'\" formControlName=\"daterange\"></nz-range-picker>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </div>\r\n\r\n        <div nz-col nzSpan=\"8\">\r\n          <div nz-col nzSpan=\"24\">\r\n            <nz-form-item>\r\n              <nz-form-label nzFor=\"CountryName\" nzRequired>Bonanza Status</nz-form-label>\r\n              <nz-form-control class=\"countryListDropdown\">\r\n                <nz-select style=\"width: 180px;\" formControlName=\"Bonanza_Status\" nzShowSearch\r\n                  nzPlaceHolder=\"Select Bonanza Status\">\r\n                  <nz-option *ngFor=\"let item of BonanzaStatusData; let i=index\" [nzValue]=\"item.ind\"\r\n                    [nzLabel]=\"item.Bonanza_Status\"></nz-option>\r\n                </nz-select>\r\n              </nz-form-control>\r\n            </nz-form-item>\r\n          </div>\r\n        </div>\r\n      </div>\r\n     \r\n    </form>\r\n  </div>\r\n\r\n  <div nz-col nzSpan=\"24\" style=\"margin-top: 20px;\">\r\n    <nz-table #basicTable nzShowPagination=\"false\" [nzLoading]=\"isloading\" nzLoadingDelay=\"1\"\r\n      [nzData]=\"ListAllBonanzaData\" style=\"background: #FFF;margin:30px 0px;\">\r\n      <thead>\r\n        <tr>\r\n          <th></th>\r\n          <th>Bonanza Code</th>\r\n          <th>Bonanza Name</th>\r\n          <th>Bonanza Type</th>\r\n          <th>Description</th>\r\n          <th>Amount</th>\r\n          <th>Start & End Date</th>\r\n          <th *ngIf=\"selectBonanzaStatusForm.get('Bonanza_Status').value == 5\">Status</th>\r\n          <th>Edit</th>\r\n          <th>Actions</th>\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <ng-container *ngFor=\"let data of ListAllBonanzaData;let i=index\">\r\n          <tr>\r\n            <td>\r\n              <a (click)=\"onDetail_View(data,i)\">\r\n                <i class=\"fa fa-caret-down\" style=\"cursor: pointer;font-size: 18px\" *ngIf=\"isDetailsView!=i\"\r\n                  aria-hidden=\"true\"></i>\r\n                <i class=\"fa fa-caret-up\" style=\"cursor: pointer;font-size: 18px\" *ngIf=\"isDetailsView==i\"\r\n                  aria-hidden=\"true\"></i>\r\n              </a>\r\n            </td>\r\n            <td>{{data.Bonanza_Code}}</td>\r\n            <td>{{data.Name}}</td>\r\n            <td *ngIf=\"data.Bonanza_Type==1\">Points</td>\r\n            <td *ngIf=\"data.Bonanza_Type==2\">Matrix</td>\r\n            <td *ngIf=\"data.Bonanza_Type==3\">both</td>\r\n            <td>{{data.Description}}</td>\r\n            <td>{{data.Points_Calculation_Data.Amount}}</td>\r\n            <td>{{data.Start_Date | date:'medium'}} To<br/> {{data.End_Date | date:'medium'}}</td>\r\n            <td *ngIf=\"selectBonanzaStatusForm.get('Bonanza_Status').value == 5\">\r\n              <span *ngIf=\"data.Bonanza_Status == 1\">Live</span>\r\n              <span *ngIf=\"data.Bonanza_Status == 2\">Completed</span>\r\n              <span *ngIf=\"data.Bonanza_Status == 3\">Cancelled</span>\r\n              <span *ngIf=\"data.Bonanza_Status == 4\">Upcoming</span>\r\n            </td>\r\n            <td><span (click)=\"onEditBonanza(data)\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></span></td>\r\n           \r\n              <td>\r\n                <span [ngSwitch]=\"data.Bonanza_Status\">\r\n                  <span *ngSwitchCase=1>\r\n                    <a nz-popconfirm (nzOnConfirm)=\"onAction(data)\"\r\n                      nzTitle=\"Are you sure you want to Inactive this?\">Make Inactive</a>\r\n                  </span>\r\n                  <span *ngSwitchCase=3>\r\n                    <a style=\"color: red;\" nz-popconfirm (nzOnConfirm)=\"onAction(data)\"\r\n                      nzTitle=\"Are you sure you want to Active this?\">Make Active</a>\r\n                  </span> \r\n  \r\n                  <span *ngSwitchDefault>\r\n                    NA\r\n                  </span>\r\n                </span>\r\n              </td>\r\n              <td><i class=\"fa fa-trash\" aria-hidden=\"true\" style=\"color: red;\" \r\n                nz-popconfirm nzTitle=\"Are you sure delete this ?\" (nzOnConfirm)=\"onDeletedBonanza(data,i)\"></i></td>\r\n          </tr>\r\n          <tr [nzExpand]=\"isDetailsView==i\">\r\n            <td></td>\r\n            <td colspan=\"9\">\r\n              <nz-tabset>\r\n                <nz-tab nzTitle=\"Bonanza Points Data\">\r\n                  <nz-table #basicTable nzShowPagination=\"false\"\r\n                    [nzData]=\"data.Bonanza_Points_Data\" style=\"background: #FFF;margin:30px 0px;\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>Levels</th>\r\n                        <th>Max Points</th>\r\n                        <th>Min Points</th>\r\n                        <th>Winning</th>\r\n                      </tr>\r\n                    </thead>\r\n\r\n      <tbody>\r\n        <tr *ngFor=\"let item of data.Bonanza_Points_Data;let i=index\">\r\n          <td>{{item.Levels}}</td>\r\n          <td>{{item.Max_Points}}</td>\r\n          <td>{{item.Min_Points}}</td>\r\n          <td>{{item.Winning}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </nz-table>\r\n    </nz-tab>\r\n    <nz-tab nzTitle=\"Bonanza Matrix Data\">\r\n      <nz-table #basicTable nzShowPagination=\"false\"\r\n        [nzData]=\"data.Bonanza_Matrix_Data\" style=\"background: #FFF;margin:30px 0px;\">\r\n        <thead>\r\n          <tr>\r\n            <th>Levels</th>\r\n            <th>Matrix</th>\r\n            <th>Winning</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr *ngFor=\"let item of data.Bonanza_Matrix_Data;let i=index\">\r\n            <td>{{item.Levels}}</td>\r\n            <td>{{item.Matrix}}</td>\r\n            <td>{{item.Winning}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </nz-table>\r\n    </nz-tab>\r\n    </nz-tabset>\r\n    </td>\r\n    </tr>\r\n    </ng-container>\r\n    </tbody>\r\n    </nz-table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/bonanza/bonanza.component.ts":
/*!**********************************************!*\
  !*** ./src/app/bonanza/bonanza.component.ts ***!
  \**********************************************/
/*! exports provided: BonanzaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonanzaComponent", function() { return BonanzaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var BonanzaComponent = /** @class */ (function () {
    function BonanzaComponent(fb, _appService, nzMessageService) {
        this.fb = fb;
        this._appService = _appService;
        this.nzMessageService = nzMessageService;
        this.isAddBtnLoading = false;
        this.isBonanzaEditing = false;
        this.IsVisible_data = 1;
        this.BonanzaType = [
            {
                ind: 1,
                type: "Points",
            },
            {
                ind: 2,
                type: "Matrix",
            },
            {
                ind: 3,
                type: "Points & Matrix",
            },
        ];
        this.BonanzaStatusData = [
            {
                ind: 1,
                Bonanza_Status: "Live",
            },
            {
                ind: 2,
                Bonanza_Status: "Completed",
            },
            {
                ind: 3,
                Bonanza_Status: "Cancelled",
            },
            {
                ind: 4,
                Bonanza_Status: "Upcoming",
            },
            {
                ind: 5,
                Bonanza_Status: "All",
            },
        ];
        this.limit = 10;
        this.skip = 0;
        this.currentPage = 1;
        this.ListAllBonanzaData = [];
        this.Bonanza_Points_Data = [];
        this.Bonanza_Matrix_Data = [];
    }
    BonanzaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectBonanzaStatusForm = this.fb.group({
            Bonanza_Status: [5, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            daterange: [[]],
        });
        var StartDate = this.selectBonanzaStatusForm.value.daterange[0];
        var EndDate = this.selectBonanzaStatusForm.value.daterange[1];
        this.selectBonanzaStatusForm.get('daterange').valueChanges.subscribe(function (data) {
            if (_this.selectBonanzaStatusForm.get('daterange').valid) {
                console.log(data);
                _this.skip = 0;
                _this.BonanzaList();
            }
        });
        this.selectBonanzaStatusForm.get('Bonanza_Status').valueChanges.subscribe(function (data) {
            if (_this.selectBonanzaStatusForm.get('Bonanza_Status').valid) {
                _this.skip = 0;
                _this.BonanzaList();
            }
        });
        this.addBonanzaForm = this.fb.group({
            Bonanza_Type: [this.BonanzaType[0].ind, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Description: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Start_Date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            End_Date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Amount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Points: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Bonanza_Points_Data: this.fb.array([]),
            Bonanza_Matrix_Data: this.fb.array([])
        });
        this.addBonanzaForm.get('Bonanza_Type').valueChanges.subscribe(function (data) {
            if (_this.addBonanzaForm.get('Bonanza_Type').valid) {
                var arr = _this.addBonanzaForm.controls.Bonanza_Points_Data;
                arr.controls = [];
                var arr1 = _this.addBonanzaForm.controls.Bonanza_Matrix_Data;
                arr1.controls = [];
            }
        });
        this.BonanzaList();
    };
    BonanzaComponent.prototype.BonanzaList = function () {
        var _this = this;
        this.isloading = true;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var StartDate = this.selectBonanzaStatusForm.get('daterange').value[0];
        var EndDate = this.selectBonanzaStatusForm.get('daterange').value[1];
        var userdata = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            Bonanza_Status: this.selectBonanzaStatusForm.get('Bonanza_Status').value,
            Whether_Date_Filter: this.selectBonanzaStatusForm.get('daterange').value.length > 0 ? true : false,
            Start_Date: this.selectBonanzaStatusForm.get('daterange').value.length > 0 ? StartDate : '',
            End_Date: this.selectBonanzaStatusForm.get('daterange').value.length > 0 ? EndDate : '',
            skip: this.skip,
            limit: this.limit
        };
        try {
            this._appService.postMethod('List_All_Bonanza', userdata)
                .subscribe(function (resp) {
                _this.isloading = false;
                if (resp.success) {
                    _this.ListAllBonanzaData = resp.extras.Data;
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
    BonanzaComponent.prototype.onDetail_View = function (data, i) {
        var index = i;
        if (this.isDetailsView == index) {
            this.isDetailsView = -1;
        }
        else {
            this.isDetailsView = index;
            // this.BonanzaList()
        }
    };
    BonanzaComponent.prototype.onClickpoints = function (data, type) {
        if (type == 1) {
            this.Bonanza_Points_Data = data.Bonanza_Points_Data;
            console.log(this.Bonanza_Points_Data);
        }
        else if (type == 2) {
            this.Bonanza_Matrix_Data = data.Bonanza_Matrix_Data;
        }
    };
    BonanzaComponent.prototype.SubmitBonanzaForm = function () {
        var _this = this;
        // for (const i in this.addBonanzaForm.controls) {
        //   this.addBonanzaForm.controls[i].markAsDirty();
        //   this.addBonanzaForm.controls[i].updateValueAndValidity();
        // }
        // if(this.addBonanzaForm.invalid){
        //   this.nzMessageService.warning('Enter All tags')
        //   return false
        // }
        this.isAddBtnLoading = true;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {};
        var url = '';
        if (this.isBonanzaEditing == true) {
            body = {
                AdminID: adminData.AdminID,
                SessionID: adminData.SessionID,
                Bonanza_Type: this.addBonanzaForm.value.Bonanza_Type,
                Name: this.addBonanzaForm.value.Name,
                Description: this.addBonanzaForm.value.Description,
                Start_Date: this.addBonanzaForm.value.Start_Date,
                End_Date: this.addBonanzaForm.value.End_Date,
                Amount: this.addBonanzaForm.value.Amount,
                Points: this.addBonanzaForm.value.Points,
                Bonanza_Points_Data: this.addBonanzaForm.value.Bonanza_Points_Data,
                Bonanza_Matrix_Data: this.addBonanzaForm.value.Bonanza_Matrix_Data,
                BonanzaID: this.BonanzaID
            };
            url = 'Edit_Bonanza';
        }
        else {
            body = {
                AdminID: adminData.AdminID,
                SessionID: adminData.SessionID,
                Bonanza_Type: this.addBonanzaForm.value.Bonanza_Type,
                Name: this.addBonanzaForm.value.Name,
                Description: this.addBonanzaForm.value.Description,
                Start_Date: this.addBonanzaForm.value.Start_Date,
                End_Date: this.addBonanzaForm.value.End_Date,
                Amount: this.addBonanzaForm.value.Amount,
                Points: this.addBonanzaForm.value.Points,
                Bonanza_Points_Data: this.addBonanzaForm.value.Bonanza_Points_Data,
                Bonanza_Matrix_Data: this.addBonanzaForm.value.Bonanza_Matrix_Data,
            };
            url = 'Create_Bonanza';
        }
        try {
            this._appService.postMethod(url, body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.isAddBtnLoading = false;
                    _this.visible = false;
                    _this.BonanzaList();
                    if (_this.isBonanzaEditing) {
                        _this.nzMessageService.success('Bonanza Update Sucessfully');
                    }
                    else {
                        _this.nzMessageService.success('Bonanza Added Sucessfully');
                    }
                    _this.BonanzaClose();
                }
                else {
                    _this.isAddBtnLoading = false;
                    // this.visible = false;
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                }
            }, function (error) {
            });
        }
        catch (e) {
        }
    };
    BonanzaComponent.prototype.open = function () {
        this.visible = true;
        this.isBonanzaEditing = false;
        this.addBonanzaForm.reset({
            Bonanza_Type: 1
        });
    };
    BonanzaComponent.prototype.BonanzaClose = function () {
        this.visible = false;
        this.isAddBtnLoading = false;
        this.addBonanzaForm.reset({
            Bonanza_Type: 1
        });
        // const control = this.addBonanzaForm.controls.Bonanza_Points_Data as FormArray;
        // console.log(control.length)
        // for (let i = 0; i < control.length; i++){
        //   control.removeAt(i);
        // }
        var arr = this.addBonanzaForm.controls.Bonanza_Points_Data;
        arr.controls = [];
        var arr1 = this.addBonanzaForm.controls.Bonanza_Matrix_Data;
        arr1.controls = [];
    };
    BonanzaComponent.prototype.addPointsLevelControls = function () {
        var control = this.addBonanzaForm.controls.Bonanza_Points_Data;
        control.push(this.onPushArrayControls());
    };
    BonanzaComponent.prototype.onRemovePointsLevelDataControls = function (j) {
        var control = this.addBonanzaForm.controls['Bonanza_Points_Data'];
        control.removeAt(j);
    };
    BonanzaComponent.prototype.addMatrixLevelsControls = function () {
        var control = this.addBonanzaForm.controls['Bonanza_Matrix_Data'];
        control.push(this.onPushMatrixLevelsControls());
    };
    BonanzaComponent.prototype.onRemoveMatrixLevelsDataControls = function (i) {
        var control = this.addBonanzaForm.controls['Bonanza_Matrix_Data'];
        control.removeAt(i);
    };
    BonanzaComponent.prototype.onEditBonanza = function (type) {
        this.visible = true;
        this.BonanzaID = type.BonanzaID;
        if (type.Bonanza_Type == 1 || type.Bonanza_Type == 3) {
            var Bonanza_Points_Data = [];
            Bonanza_Points_Data = type.Bonanza_Points_Data;
            for (var i = 0; i < Bonanza_Points_Data.length; i++) {
                this.addPointsLevelControls();
            }
        }
        if (type.Bonanza_Type == 2 || type.Bonanza_Type == 3) {
            var Bonanza_Matrix_Data = [];
            Bonanza_Matrix_Data = type.Bonanza_Matrix_Data;
            for (var i = 0; i < Bonanza_Matrix_Data.length; i++) {
                this.addMatrixLevelsControls();
            }
        }
        this.addBonanzaForm.patchValue({
            Bonanza_Type: type.Bonanza_Type,
            Name: type.Name,
            Description: type.Description,
            Start_Date: type.Start_Date,
            End_Date: type.End_Date,
            Amount: type.Points_Calculation_Data.Amount,
            Points: type.Points_Calculation_Data.Points,
            Bonanza_Points_Data: type.Bonanza_Points_Data,
            Bonanza_Matrix_Data: type.Bonanza_Matrix_Data,
        }, { emitEvent: false });
        this.isBonanzaEditing = true;
    };
    BonanzaComponent.prototype.onPushArrayControls = function () {
        return this.fb.group({
            Levels: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Min_Points: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Max_Points: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Winning: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    };
    BonanzaComponent.prototype.onPushMatrixLevelsControls = function () {
        return this.fb.group({
            Levels: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Matrix: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Winning: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    };
    Object.defineProperty(BonanzaComponent.prototype, "arrayControls", {
        get: function () {
            return this.addBonanzaForm.get('Bonanza_Points_Data');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BonanzaComponent.prototype, "MatrixLevelsControls", {
        get: function () {
            return this.addBonanzaForm.get('Bonanza_Matrix_Data');
        },
        enumerable: true,
        configurable: true
    });
    BonanzaComponent.prototype.onDeletedBonanza = function (data, index) {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            BonanzaID: data.BonanzaID
        };
        try {
            this._appService.postMethod('Delete_Bonanza', body)
                .subscribe(function (resp) {
                _this.isloading = false;
                if (resp.success) {
                    _this.nzMessageService.success('Bonanza Deleted Sucessfully');
                    _this.BonanzaList();
                }
                else {
                    _this.isloading = false;
                    _this.nzMessageService.error(resp.extras.msg);
                }
            }, function (error) {
            });
        }
        catch (e) {
        }
    };
    BonanzaComponent.prototype.onAction = function (data) {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            BonanzaID: data.BonanzaID
        };
        try {
            this._appService.postMethod('Activate_Inactivate_Bonanza', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    var msg = void 0;
                    if (data.Status) {
                        msg = 'Inactivated Successfully';
                    }
                    else {
                        msg = 'Activated Successfully';
                    }
                    _this.BonanzaList();
                    _this.nzMessageService.success(msg);
                }
                else {
                    _this.nzMessageService.error(resp.extras.msg);
                }
            }, function (error) {
            });
        }
        catch (e) { }
    };
    BonanzaComponent.prototype.closePreferncesBonanza = function () {
        this.addBonanzaForm.reset({
            Bonanza_Type: 1
        });
        this.isAddBtnLoading = false;
        var arr = this.addBonanzaForm.controls.Bonanza_Points_Data;
        arr.controls = [];
        var arr1 = this.addBonanzaForm.controls.Bonanza_Matrix_Data;
        arr1.controls = [];
        // const control = this.addBonanzaForm.controls.Bonanza_Points_Data as FormArray;
        // control.clear()
        // const bonanzapoints = <FormArray>this.addBonanzaForm.controls['Bonanza_Points_Data'];
        // bonanzapoints.cle;
        // const BonanzaMatrix = <FormArray>this.addBonanzaForm.controls['Bonanza_Matrix_Data'];
        // BonanzaMatrix.clear();
    };
    BonanzaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bonanza',
            template: __webpack_require__(/*! ./bonanza.component.html */ "./src/app/bonanza/bonanza.component.html"),
            styles: [__webpack_require__(/*! ./bonanza.component.css */ "./src/app/bonanza/bonanza.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], BonanzaComponent);
    return BonanzaComponent;
}());



/***/ }),

/***/ "./src/app/bonanza/bonanza.module.ts":
/*!*******************************************!*\
  !*** ./src/app/bonanza/bonanza.module.ts ***!
  \*******************************************/
/*! exports provided: BonanzaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonanzaModule", function() { return BonanzaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bonanza_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bonanza.component */ "./src/app/bonanza/bonanza.component.ts");
/* harmony import */ var _Bonanza_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Bonanza.routing */ "./src/app/bonanza/Bonanza.routing.ts");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var BonanzaModule = /** @class */ (function () {
    function BonanzaModule() {
    }
    BonanzaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _Bonanza_routing__WEBPACK_IMPORTED_MODULE_4__["BonanzaRoutes"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            ],
            declarations: [_bonanza_component__WEBPACK_IMPORTED_MODULE_3__["BonanzaComponent"]]
        })
    ], BonanzaModule);
    return BonanzaModule;
}());



/***/ })

}]);
//# sourceMappingURL=bonanza-bonanza-module.js.map