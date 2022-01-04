(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-plots-view-plots-module"],{

/***/ "./src/app/plots/view-plots/view-plots.component.css":
/*!***********************************************************!*\
  !*** ./src/app/plots/view-plots/view-plots.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 400px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxvdHMvdmlldy1wbG90cy92aWV3LXBsb3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9wbG90cy92aWV3LXBsb3RzL3ZpZXctcGxvdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/plots/view-plots/view-plots.component.html":
/*!************************************************************!*\
  !*** ./src/app/plots/view-plots/view-plots.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row nzGutter=\"8\">\r\n  <div nz-col nzSpan=\"20\">\r\n    <nz-tabset>\r\n      <nz-tab (nzClick)=\"onTabClick(1)\" nzTitle=\"View Plots\">\r\n      </nz-tab>\r\n      <nz-tab (nzClick)=\"onTabClick(2)\" nzTitle=\"Inactivated Plots\">\r\n      </nz-tab>\r\n    </nz-tabset>\r\n  </div>\r\n</div>\r\n<div nz-row nzGutter=\"8\">\r\n  <div nz-col nzSpan=\"24\">\r\n    <nz-table #basicTable nzSize=\"small\" nzLoadingDelay=\"2\" [nzLoading]=\"isLoading\" nzShowPagination=\"false\"\r\n      [nzData]=\"plotsList\">\r\n      <thead>\r\n        <tr>\r\n          <th></th>\r\n          <th></th>\r\n          <th>S.No</th>\r\n          <th>Plot Name</th>\r\n          <th>Company Name</th>\r\n          <th>Description</th>\r\n          <th></th>\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <ng-container *ngFor=\"let data of plotsList;let i=index\">\r\n          <tr *ngIf=\"Status==1&&data.Status==true\">\r\n            <td>\r\n              <i (click)=\"onEditBasicInfo(data,1)\" style=\"cursor: pointer\" nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>\r\n            </td>\r\n            <td>\r\n              <a (click)=\"onDetail_View(data,i)\">\r\n                <i style=\"cursor: pointer;font-size: 18px\" nz-icon [type]=\"'caret-down'\" *ngIf=\"isDetailsView!=i\"\r\n                  theme=\"outline\"></i>\r\n                <i style=\"cursor: pointer;font-size: 18px\" nz-icon type=\"caret-up\" *ngIf=\"isDetailsView==i\"\r\n                  theme=\"outline\"></i>\r\n              </a>\r\n            </td>\r\n            <td>{{data.SNo}}</td>\r\n            <td>{{data.Plot_Name}}</td>\r\n            <td>{{data.Company_Name}}</td>\r\n            <td>{{data.Description}}</td>\r\n\r\n            <td>\r\n              <span [ngSwitch]=\"data.Status\">\r\n                <span *ngSwitchCase=true>\r\n                  <a nz-popconfirm (nzOnConfirm)=\"onAction(data)\" nzTitle=\"Are you sure you want to Inactive this?\"\r\n                    >Delete</a>\r\n                </span>\r\n                <span *ngSwitchCase=false>\r\n                  <a style=\"  color: red;\" nz-popconfirm (nzOnConfirm)=\"onAction(data)\"\r\n                    nzTitle=\"Are you sure you want to Active this?\" >Make Active</a>\r\n                </span>\r\n\r\n                <span *ngSwitchDefault>\r\n                  NA\r\n                </span>\r\n              </span>\r\n            </td>\r\n            <ng-template #iconTpl>\r\n              <i nz-icon nzType=\"question-circle\" nzTheme=\"outline\"></i>\r\n            </ng-template>\r\n            <td>{{data.created_at  | date: _appService.dateFormat}}\r\n          </tr>\r\n          <tr *ngIf=\"Status==2&&data.Status==false\">\r\n            <td>\r\n              <a (click)=\"onDetail_View(data,i)\">\r\n                <i style=\"cursor: pointer;font-size: 18px\" nz-icon [type]=\"'caret-down'\" *ngIf=\"isDetailsView!=i\"\r\n                  theme=\"outline\"></i>\r\n                <i style=\"cursor: pointer;font-size: 18px\" nz-icon type=\"caret-up\" *ngIf=\"isDetailsView==i\"\r\n                  theme=\"outline\"></i>\r\n              </a>\r\n            </td>\r\n            <td>{{data.SNo}}</td>\r\n            <td>{{data.Plot_Name}}</td>\r\n            <td>{{data.Company_Name}}</td>\r\n            <td>{{data.Description}}</td>\r\n\r\n            <td>\r\n              <span [ngSwitch]=\"data.Status\">\r\n                <span *ngSwitchCase=true>\r\n                  <a nz-popconfirm (nzOnConfirm)=\"onAction(data)\" nzTitle=\"Are you sure you want to Inactive this?\"\r\n                   >Delete</a>\r\n                </span>\r\n                <span *ngSwitchCase=false>\r\n                  <a style=\"  color: red;\" nz-popconfirm (nzOnConfirm)=\"onAction(data)\"\r\n                    nzTitle=\"Are you sure you want to Active this?\">Make Active</a>\r\n                </span>\r\n\r\n                <span *ngSwitchDefault>\r\n                  NA\r\n                </span>\r\n              </span>\r\n            </td>\r\n            <ng-template #iconTpl>\r\n              <i nz-icon nzType=\"question-circle\" nzTheme=\"outline\"></i>\r\n            </ng-template>\r\n            <td>{{data.created_at  | date: _appService.dateFormat}}\r\n          </tr>\r\n          <tr [nzExpand]=\"isDetailsView==i\">\r\n            <td nzWidth=\"50px\" style=\" background-color: #FF7F50;\"></td>\r\n            <td style=\"padding-top: 2em;padding-bottom: 2em\" [attr.colspan]=\"7\">\r\n              <nz-tabset>\r\n                <nz-tab nzTitle=\"Baic info\">\r\n                  <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"12\">\r\n                      <div nz-row class=\"individualRow\">\r\n                        <div nz-col nzSpan=\"24\">\r\n                          <span>\r\n                            <b>Company Image : </b> <a [attr.href]=\"data.Company_Image_Data.ImageOriginal\"\r\n                              target=\"_blank\">Click to View</a>&nbsp;<i (click)=\"onUpdate(3,data)\" nz-icon nzType=\"edit\"\r\n                              nzTheme=\"outline\"></i>\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                      <div nz-row class=\"individualRow\">\r\n                        <div nz-col nzSpan=\"24\">\r\n                          <span>\r\n                            <b>Plot File : </b> <a [attr.href]=\"data.FileData.File_Path\" target=\"_blank\">Click to\r\n                              View</a>&nbsp;<i nz-icon (click)=\"onUpdate(2,data)\" nzType=\"edit\" nzTheme=\"outline\"></i>\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n                </nz-tab>\r\n                <nz-tab nzTitle=\"Plot Images\">\r\n                  <div nz-row nzGutter=\"8\">\r\n                    <div nz-col nzSpan=\"24\">\r\n                        <button style=\"    float: right;\" nz-button nzType=\"primary\" (click)=\"onUpdate(4,data)\">Update Plot Images</button>\r\n                      <nz-upload [nzRemove]=\"onRemove\" [nzShowUploadList]=\"showUploadList\" nzListType=\"picture-card\"\r\n                        class=\"upload-list-inline\" nzDisabled=\"true\" nzShowButton=\"false\" [(nzFileList)]=\"plotImages\">\r\n                      </nz-upload>\r\n                    </div>\r\n                  </div>\r\n                </nz-tab>\r\n              </nz-tabset>\r\n            </td>\r\n          </tr>\r\n        </ng-container>\r\n      </tbody>\r\n    </nz-table>\r\n  </div>\r\n  <nz-pagination [nzShowTotal]=\"totalTemplate\" (nzPageIndexChange)=\"onNextPage($event)\" [nzPageSize]=\"limit\"\r\n    [nzPageIndex]=\"currentPage\" [nzTotal]=\"Count\"></nz-pagination>\r\n  <ng-template #totalTemplate let-total>Total {{ Count }} items</ng-template>\r\n</div>\r\n<nz-drawer [nzWidth]=\"850\" [nzVisible]=\"updateimageDrawer\" nzPlacement=\"right\" [nzTitle]=\"drawerTitle\"\r\n  (nzOnClose)=\"onCLoseDrawer()\">\r\n  <ng-template #drawerTitle>\r\n    <span *ngIf=\"selectedPlotData.length>0\">Plot Name is {{ selectedPlotData[0].Plot_Name}}</span>\r\n  </ng-template>\r\n  <div *ngIf=\"updatingImageType==1\">\r\n    <div nz-row>\r\n      <div nz-col nzSpan=\"16\">\r\n        <form nz-form [formGroup]=\"updateForm\">\r\n          <nz-form-item>\r\n            <nz-form-control [nzSpan]=\"12\" nzErrorTip=\"Please input Plot Name!\">\r\n              <input formControlName=\"Plot_Name\" placeholder=\"Plot Name\" type=\"text\" nz-input>\r\n              <nz-form-explain *ngIf=\"updateForm.get('Plot_Name')?.dirty && updateForm.get('Plot_Name')?.errors\">\r\n                Please input Plot Name!\r\n              </nz-form-explain>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-control [nzSpan]=\"12\" nzErrorTip=\"Please input Company Name!\">\r\n              <input formControlName=\"Company_Name\" placeholder=\"Company Name\" type=\"text\" nz-input>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-control [nzSpan]=\"12\" nzErrorTip=\"Please input Description!\">\r\n              <textarea rows=\"4\" formControlName=\"Description\" placeholder=\"Description\" nz-input></textarea>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-control [nzSpan]=\"12\">\r\n              <input id=\"pac-input\" formControlName=\"googleAddress\" [required]=\"lat_marker!=undefined\"\r\n                placeholder=\"Search Address\" type=\"text\" nz-input>\r\n            </nz-form-control>\r\n            <nz-form-explain *ngIf=\"updateForm.get('Address')?.dirty && updateForm.get('Address')?.errors\">\r\n              Please select Address from maps!</nz-form-explain>\r\n\r\n          </nz-form-item>\r\n          <!-- <nz-form-item>\r\n            <nz-form-control [nzSm]=\"16\">\r\n              <agm-map  [latitude]=\"lat_marker\" [longitude]=\"lng_market\" fullscreenControl=\"true\">\r\n                <agm-marker [markerDraggable]=true (dragEnd)=\"ondragEnd($event)\" [latitude]=\"lat_marker\"\r\n                  [longitude]=\"lng_market\">\r\n                </agm-marker>\r\n              </agm-map>\r\n            </nz-form-control>\r\n          </nz-form-item> -->\r\n          <nz-form-item>\r\n            <nz-form-control>\r\n              <button nz-button nzType=\"primary\" [nzLoading]=\"isUpdating\" (click)=\"onUpdateBasicInfo()\">Update</button>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"updatingImageType==2 || updatingImageType==3 || updatingImageType==4\">\r\n    <nz-form-control [nzSpan]=\"8\">\r\n      <div class=\"clearfix\">\r\n\r\n        <nz-upload [nzCustomRequest]=\"customReq\" class=\"upload-list-inline\" nzLimit=\"1\"\r\n          [(nzFileList)]=\"imageOrFileList\">\r\n          <button nz-button>\r\n            <span><i nz-icon nzType=\"upload\"></i> {{updatingImageType==2?'Selecte Plot Doc':updatingImageType==3?'Select Company Image':'Select Plot Images'}}</span>\r\n          </button>\r\n        </nz-upload>\r\n      </div>\r\n    </nz-form-control>\r\n    <nz-form-control [nzSpan]=\"8\">\r\n        <button nz-button nzType=\"primary\" [nzLoading]=\"isUpdating\" (click)=\"onUpdateCompanyImageORDoc()\">Update</button>\r\n\r\n      </nz-form-control>\r\n\r\n   \r\n  </div>\r\n\r\n\r\n</nz-drawer>"

/***/ }),

/***/ "./src/app/plots/view-plots/view-plots.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/plots/view-plots/view-plots.component.ts ***!
  \**********************************************************/
/*! exports provided: ViewPlotsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPlotsComponent", function() { return ViewPlotsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var ViewPlotsComponent = /** @class */ (function () {
    function ViewPlotsComponent(fb, http, nzMessageService, _appService) {
        var _this = this;
        this.fb = fb;
        this.http = http;
        this.nzMessageService = nzMessageService;
        this._appService = _appService;
        this.limit = this._appService.limit;
        this.plotsList = [];
        this.skip = 0;
        this.currentPage = 1;
        this.plotImages = [];
        this.imageOrFileList = [];
        this.showUploadList = {
            showPreviewIcon: true,
            showRemoveIcon: true,
            hidePreviewIconInNonImage: true
        };
        this.updatingImageType = 1;
        this.selectedPlotData = [];
        this.plotImages_FilesArray = [];
        this.onRemove = function (item) {
            console.log(item);
            var adminData = JSON.parse(localStorage.getItem('adminData'));
            var body = {
                AdminID: adminData.AdminID,
                SessionID: adminData.SessionID,
                ImageID: item.ImageID,
                PlotID: _this.selectedPlotData[0].PlotID
            };
            try {
                _this._appService.postMethod('Remove_Plot_Image', body)
                    .subscribe(function (resp) {
                    if (resp.success) {
                        _this.getAllPlots(_this.skip);
                        _this.isDetailsView = -1;
                    }
                    else {
                        _this.isUpdating = false;
                        _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                    }
                }, function (error) {
                });
            }
            catch (e) { }
        };
        this.customReq = function (item) {
            var formData = new FormData();
            var url = '';
            if (_this.updatingImageType == 3 || _this.updatingImageType == 4) {
                console.log('enter to image');
                url = _this._appService.imageurl;
                formData.append('image', item.file);
            }
            else if (_this.updatingImageType == 2) {
                url = _this._appService.fileUrl;
                console.log('enter to file');
                formData.append('file', item.file);
            }
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpRequest"]('POST', url, formData, {
                reportProgress: true,
                withCredentials: false
            });
            return _this.http.request(req).subscribe(function (event) {
                var plotImages_Files = [];
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].UploadProgress) {
                    if (event.total > 0) {
                        event.percent = (event.loaded / event.total) * 100;
                    }
                    item.onProgress(event, item.file);
                }
                else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpResponse"]) {
                    item.onSuccess(event.body, item.file, event);
                    _this.nzMessageService.success('upload successfully');
                    if (_this.updatingImageType == 4) {
                        var url = event.body.extras.Image550;
                        console.log(event.body.extras.ImageOriginal);
                        _this.plotImages_FilesArray.push({
                            uid: item.file.uid,
                            name: item.file.name,
                            status: 'done',
                            url: url,
                            thumbUrl: url,
                            ID: event.body.extras.ImageID
                        });
                        var imagesarray_1 = [];
                        _this.plotImages_FilesArray.forEach(function (item) {
                            imagesarray_1.push(item.ID);
                        });
                        var defaultImages = [];
                        defaultImages = _this.selectedPlotData[0].Plot_Image_Data;
                        defaultImages.push({
                            uid: item.file.uid,
                            name: item.file.name,
                            status: 'done',
                            url: url,
                            thumbUrl: url,
                            ImageID: event.body.extras.ImageID
                        });
                        _this.selectedPlotData[0].Plot_Image_Data = defaultImages;
                        _this.imageOrFileList = _this.plotImages_FilesArray;
                    }
                    else if (_this.updatingImageType == 3) {
                        var url = event.body.extras.Image550;
                        console.log(event.body.extras.ImageOriginal);
                        plotImages_Files.push({
                            uid: item.file.uid,
                            name: item.file.name,
                            status: 'done',
                            url: url,
                            thumbUrl: url,
                            ID: event.body.extras.ImageID
                        });
                        _this.selectedPlotData[0].Company_Image_Data.ImageID = event.body.extras.ImageID;
                        _this.imageOrFileList = plotImages_Files;
                    }
                    else if (_this.updatingImageType == 2) {
                        var url = event.body.extras.File_Path;
                        console.log(event.body.extras.ImageOriginal);
                        plotImages_Files.push({
                            uid: item.file.uid,
                            name: 'Plot Doc',
                            status: 'done',
                            url: url,
                            thumbUrl: url,
                            ID: event.body.extras.FileID
                        });
                        _this.selectedPlotData[0].FileData.FileID = event.body.extras.FileID;
                        _this.imageOrFileList = plotImages_Files;
                    }
                    // else if (this.uploadingType == 3) {
                    //   var url = event.body.extras.Image550
                    //   console.log(event.body.extras.ImageOriginal)
                    //   this.companyImagesList.push({
                    //     uid: item.file.uid,
                    //     name: item.file.name,
                    //     status: 'done',
                    //     url: url,
                    //     thumbUrl: url,
                    //     ImageID: event.body.extras.ImageID
                    //   })
                    //   this.comapnyListForNz = [...this.companyImagesList];
                    // }
                }
            }, function (err) {
                item.onError(err, item.file);
            });
        };
    }
    ViewPlotsComponent.prototype.ngOnInit = function () {
        this.onTabClick(1);
        this.updateForm = this.fb.group({
            Company_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Plot_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Description: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            googleAddress: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    };
    ViewPlotsComponent.prototype.onTabClick = function (tabNumber) {
        this.Status = tabNumber;
        this.getAllPlots(0);
        this.isDetailsView = -1;
    };
    ViewPlotsComponent.prototype.getAllPlots = function (skip) {
        var _this = this;
        this.isLoading = true;
        var adminData = JSON.parse(localStorage.getItem('adminData'));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            skip: skip,
            limit: this.limit
        };
        try {
            this._appService.postMethod('List_All_Plots', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.skip = skip;
                    _this.plotsList = resp.extras.Data;
                    _this.Count = resp.extras.Count;
                    _this.isLoading = false;
                }
                else {
                    _this.isLoading = false;
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                }
            }, function (error) {
            });
        }
        catch (e) { }
    };
    ViewPlotsComponent.prototype.onNextPage = function (event) {
        this.currentPage = event;
        var skip = (event - 1) * this._appService.limit;
        this.skip = skip;
        this.getAllPlots(this.skip);
    };
    ViewPlotsComponent.prototype.onDetail_View = function (data, i) {
        this.plotImages = [];
        var tmpplotImages = [];
        var finallist = [];
        tmpplotImages = data.Plot_Image_Data;
        tmpplotImages.forEach(function (item) {
            finallist.push({
                uid: '1',
                name: 'guideLines',
                status: 'done',
                url: item.ImageOriginal,
                thumbUrl: item.ImageOriginal,
                ImageID: item.ImageID
            });
        });
        this.plotImages = finallist;
        var index = i;
        if (this.isDetailsView == index) {
            this.isDetailsView = -1;
        }
        else {
            this.isDetailsView = index;
        }
    };
    ViewPlotsComponent.prototype.onAction = function (data) {
        var _this = this;
        //this.reasonData = data
        var url;
        if (data.Status) {
            url = 'Activate_Inactivate_Plot'; //"Inactivated_Customer_Cancellation_Reason"
        }
        else {
            url = "Activate_Inactivate_Plot";
        }
        try {
            var adminData = JSON.parse(localStorage.getItem('adminData'));
            var body = {
                AdminID: adminData.AdminID,
                SessionID: adminData.SessionID,
                PlotID: data.PlotID,
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
                    _this.getAllPlots(_this.skip);
                }
                else {
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                }
            }, function (error) {
            });
        }
        catch (e) { }
    };
    ViewPlotsComponent.prototype.onUpdate = function (type, plotdata) {
        this.selectedPlotData = [];
        this.selectedPlotData.push(plotdata);
        this.updatingImageType = type;
        this.updateimageDrawer = true;
        this.imageOrFileList = [];
        this.plotImages_FilesArray = [];
    };
    ViewPlotsComponent.prototype.onEditBasicInfo = function (plotdata, updatType) {
        var _this = this;
        this.selectedPlotData = plotdata;
        this.updatingImageType = updatType;
        this.updateimageDrawer = true;
        this.lat_marker = plotdata.Latitude;
        this.lng_market = plotdata.Longitude;
        this.updateForm.patchValue({
            Company_Name: plotdata.Company_Name,
            Plot_Name: plotdata.Plot_Name,
            Description: plotdata.Description,
            googleAddress: plotdata.Address
        });
        setTimeout(function () {
            _this.onMapIntilized();
        }, 100);
    };
    ViewPlotsComponent.prototype.onUpdateBasicInfo = function () {
        var adminData = JSON.parse(localStorage.getItem('adminData'));
        var imgesArray = [];
        var finalImagesArray = [];
        imgesArray = this.selectedPlotData[0].Plot_Image_Data;
        imgesArray.forEach(function (item) {
            finalImagesArray.push(item.ImageID);
        });
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            PlotID: this.selectedPlotData[0].PlotID,
            "FileID": this.selectedPlotData[0].FileData.FileID,
            "Plot_Name": this.updateForm.value.Plot_Name,
            "Company_Name": this.updateForm.value.Company_Name,
            "Description": this.updateForm.value.Description,
            "Latitude": this.lat_marker,
            "Longitude": this.lng_market,
            "Address": this.plotAddress,
            "All_ImageID_Array": finalImagesArray,
            "ImageID": this.selectedPlotData[0].Company_Image_Data.ImageID,
        };
        this.onPlotUpdateToServer(body);
    };
    ViewPlotsComponent.prototype.onPlotUpdateToServer = function (body) {
        var _this = this;
        this.isUpdating = true;
        try {
            this._appService.postMethod('Edit_Plot', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.onCLoseDrawer();
                    _this.getAllPlots(_this.skip);
                    _this.isDetailsView = -1;
                }
                else {
                    _this.isUpdating = false;
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                }
            }, function (error) {
            });
        }
        catch (e) { }
    };
    ViewPlotsComponent.prototype.onUpdateCompanyImageORDoc = function () {
        var adminData = JSON.parse(localStorage.getItem('adminData'));
        var imgesArray = [];
        var finalImagesArray = [];
        imgesArray = this.selectedPlotData[0].Plot_Image_Data;
        imgesArray.forEach(function (item) {
            finalImagesArray.push(item.ImageID);
        });
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            PlotID: this.selectedPlotData[0].PlotID,
            "FileID": this.selectedPlotData[0].FileData.FileID,
            "Plot_Name": this.selectedPlotData[0].Plot_Name,
            "Company_Name": this.selectedPlotData[0].Company_Name,
            "Description": this.selectedPlotData[0].Description,
            "Latitude": this.selectedPlotData[0].Latitude,
            "Longitude": this.selectedPlotData[0].Longitude,
            "Address": this.selectedPlotData[0].Address,
            "All_ImageID_Array": finalImagesArray,
            "ImageID": this.selectedPlotData[0].Company_Image_Data.ImageID,
        };
        this.onPlotUpdateToServer(body);
    };
    ViewPlotsComponent.prototype.onCLoseDrawer = function () {
        this.updateimageDrawer = false;
        this.isUpdating = false;
        this.updateForm.reset();
    };
    ViewPlotsComponent.prototype.ondragEnd = function (event) {
        console.log(event.coords.lat);
        this.lat_marker = event.coords.lat;
        this.lng_market = event.coords.lng;
        console.log("" + this.lat_marker);
    };
    ViewPlotsComponent.prototype.onMapIntilized = function () {
        var _this = this;
        var input = document.getElementById('pac-input');
        //this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);
        var autocomplete = new google.maps.places.Autocomplete(input);
        // autocomplete.bindTo('bounds', this.map);
        // Set the data fields to return when the user selects a place.
        autocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);
        var infowindow = new google.maps.InfoWindow();
        var infowindowContent = document.getElementById('infowindow-content');
        infowindow.setContent(infowindowContent);
        // var marker = new google.maps.Marker({
        //   map: this.map,
        //   draggable: true,
        //   anchorPoint: new google.maps.Point(0, -29)
        // });
        autocomplete.addListener('place_changed', function () {
            infowindow.close();
            // marker.setVisible(true);
            var place = autocomplete.getPlace();
            if (!place.geometry) {
                // User entered the name of a Place that was not suggested and
                // pressed the Enter key, or the Place Details request failed.
                window.alert("No details available for input: '" + place.name + "'");
                return;
            }
            else {
                _this.lat_marker = place.geometry.location.lat();
                _this.lng_market = place.geometry.location.lng();
            }
            // If the place has a geometry, then present it on a map.
            //marker.setPosition(place.geometry.location);
            //marker.setVisible(true);
            var address = '';
            if (place.address_components) {
                address = [
                    (place.address_components[0] && place.address_components[0].short_name || ''),
                    (place.address_components[1] && place.address_components[1].short_name || ''),
                    (place.address_components[2] && place.address_components[2].short_name || '')
                ].join(' ');
                _this.plotAddress = address;
            }
        });
        // google.maps.event.addListener( marker,'dragend', (event) => {
        //   this.geocodePosition(marker.getPosition());
        // });
    };
    ViewPlotsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-plots',
            template: __webpack_require__(/*! ./view-plots.component.html */ "./src/app/plots/view-plots/view-plots.component.html"),
            styles: [__webpack_require__(/*! ./view-plots.component.css */ "./src/app/plots/view-plots/view-plots.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]])
    ], ViewPlotsComponent);
    return ViewPlotsComponent;
}());



/***/ }),

/***/ "./src/app/plots/view-plots/view-plots.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/plots/view-plots/view-plots.module.ts ***!
  \*******************************************************/
/*! exports provided: ViewPlotsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPlotsModule", function() { return ViewPlotsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _view_plots_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-plots.component */ "./src/app/plots/view-plots/view-plots.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _view_plots_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-plots.routing */ "./src/app/plots/view-plots/view-plots.routing.ts");
/* harmony import */ var src_app_shared_modue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared.modue */ "./src/app/shared.modue.ts");







// import { AgmCoreModule } from '@agm/core';
var ViewPlotsModule = /** @class */ (function () {
    function ViewPlotsModule() {
    }
    ViewPlotsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _view_plots_routing__WEBPACK_IMPORTED_MODULE_5__["ViewPlotsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                src_app_shared_modue__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            ],
            declarations: [_view_plots_component__WEBPACK_IMPORTED_MODULE_3__["ViewPlotsComponent"]]
        })
    ], ViewPlotsModule);
    return ViewPlotsModule;
}());



/***/ }),

/***/ "./src/app/plots/view-plots/view-plots.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/plots/view-plots/view-plots.routing.ts ***!
  \********************************************************/
/*! exports provided: ViewPlotsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPlotsRoutingModule", function() { return ViewPlotsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _view_plots_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-plots.component */ "./src/app/plots/view-plots/view-plots.component.ts");





var routes = [
    { path: '', component: _view_plots_component__WEBPACK_IMPORTED_MODULE_4__["ViewPlotsComponent"] }
];
var ViewPlotsRoutingModule = /** @class */ (function () {
    function ViewPlotsRoutingModule() {
    }
    ViewPlotsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ViewPlotsRoutingModule);
    return ViewPlotsRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=view-plots-view-plots-module.js.map