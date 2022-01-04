(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-plots-add-plots-module"],{

/***/ "./src/app/plots/add-plots/add-plots.component.css":
/*!*********************************************************!*\
  !*** ./src/app/plots/add-plots/add-plots.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 400px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxvdHMvYWRkLXBsb3RzL2FkZC1wbG90cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvcGxvdHMvYWRkLXBsb3RzL2FkZC1wbG90cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/plots/add-plots/add-plots.component.html":
/*!**********************************************************!*\
  !*** ./src/app/plots/add-plots/add-plots.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row>\r\n  <div nz-col nzSpan=\"16\">\r\n    <nz-card >\r\n      <form nz-form [formGroup]=\"plotCreationForm\">\r\n        <nz-form-item>\r\n          <nz-form-control [nzSpan]=\"12\" nzErrorTip=\"Please input Plot Name!\">\r\n            <input formControlName=\"Plot_Name\" placeholder=\"Plot Name\" type=\"text\" nz-input>\r\n            <nz-form-explain\r\n              *ngIf=\"plotCreationForm.get('Plot_Name')?.dirty && plotCreationForm.get('Plot_Name')?.errors\">\r\n              Please input Plot Name!\r\n            </nz-form-explain>\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n          <nz-form-control [nzSpan]=\"12\" nzErrorTip=\"Please input Company Name!\">\r\n            <input formControlName=\"Company_Name\" placeholder=\"Company Name\" type=\"text\" nz-input>\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n          <nz-form-control [nzSpan]=\"12\" nzErrorTip=\"Please input Description!\">\r\n            <textarea rows=\"4\" formControlName=\"Description\" placeholder=\"Description\" nz-input></textarea>\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n          <nz-form-control [nzSpan]=\"12\">\r\n            <input id=\"pac-input\" formControlName=\"googleAddress\" [required]=\"lat_marker!=undefined\"\r\n              placeholder=\"Search Address\" type=\"text\" nz-input>\r\n\r\n          </nz-form-control>\r\n          <nz-form-explain *ngIf=\"plotCreationForm.get('Address')?.dirty && plotCreationForm.get('Address')?.errors\">\r\n            Please select Address from maps!</nz-form-explain>\r\n\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n          <nz-form-control [nzSm]=\"16\">\r\n            <!-- <agm-map #gm [latitude]=\"lat_marker\" [longitude]=\"lng_market\" fullscreenControl=\"true\">\r\n              <agm-marker [markerDraggable]=true (dragEnd)=\"ondragEnd($event)\" [latitude]=\"lat_marker\"\r\n                [longitude]=\"lng_market\">\r\n              </agm-marker>\r\n            </agm-map> -->\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n\r\n        <nz-form-item>\r\n          <nz-form-control [nzSpan]=\"8\">\r\n            <div class=\"clearfix\">\r\n              <nz-upload [nzCustomRequest]=\"customReq\" class=\"upload-list-inline\" [(nzFileList)]=\"plotImagesListForNZ\">\r\n                <button nz-button (click)=\"onCustRequ(1)\">\r\n                  <span><i nz-icon nzType=\"upload\"></i> Plot Images</span>\r\n                </button>\r\n              </nz-upload>\r\n            </div>\r\n          </nz-form-control>\r\n          <nz-form-control [nzSpan]=\"8\">\r\n            <div class=\"clearfix\">\r\n              <!-- [nzRemove]=\"onRemove\" -->\r\n              <nz-upload [nzCustomRequest]=\"customReq\" class=\"upload-list-inline\" nzLimit=\"1\"\r\n                [(nzFileList)]=\"plotDocListForNZ\">\r\n                <button nz-button (click)=\"onCustRequ(2)\">\r\n                  <span><i nz-icon nzType=\"upload\"></i> Plot File</span>\r\n                </button>\r\n              </nz-upload> \r\n            </div>\r\n          </nz-form-control>\r\n          <nz-form-control [nzSpan]=\"8\">\r\n            <div class=\"clearfix\">\r\n              <nz-upload [nzCustomRequest]=\"customReq\" class=\"upload-list-inline\" nzLimit=\"1\"\r\n                [(nzFileList)]=\"comapnyListForNz\">\r\n                <button nz-button (click)=\"onCustRequ(3)\">\r\n                  <span><i nz-icon nzType=\"upload\"></i> Company Image</span>\r\n                </button>\r\n              </nz-upload>\r\n            </div>\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n          <nz-form-control>\r\n            <button nz-button nzType=\"primary\" (click)=\"onSubmitPlot()\">Submit</button>\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n      </form>\r\n    </nz-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/plots/add-plots/add-plots.component.ts":
/*!********************************************************!*\
  !*** ./src/app/plots/add-plots/add-plots.component.ts ***!
  \********************************************************/
/*! exports provided: AddPlotsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPlotsComponent", function() { return AddPlotsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var AddPlotsComponent = /** @class */ (function () {
    function AddPlotsComponent(fb, http, nzMessageService, _appService) {
        var _this = this;
        this.fb = fb;
        this.http = http;
        this.nzMessageService = nzMessageService;
        this._appService = _appService;
        // map: any;
        this.lat_marker = 17.7837;
        this.lng_market = 78.736;
        this.plotImagesList = [];
        this.plotFileList = [];
        this.companyImagesList = [];
        this.plotImagesListForNZ = [];
        this.uploadLimit = 0;
        this.onRemove = function (item) {
            var index = _this.plotImagesList.findIndex(function (data) { return data.uid == item.uid; });
            _this.plotImagesList.splice(index, 1);
            _this.plotImagesListForNZ = _this.plotImagesList;
            console.log(_this.plotImagesList);
        };
        this.customReq = function (item) {
            console.log('updlaosdaf', _this.uploadingType);
            var formData = new FormData();
            var url = '';
            if (_this.uploadingType == 1 || _this.uploadingType == 3) {
                console.log('enter to image');
                url = _this._appService.imageurl;
                formData.append('image', item.file);
            }
            else if (_this.uploadingType == 2) {
                url = _this._appService.fileUrl;
                console.log('enter to file');
                formData.append('file', item.file);
            }
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpRequest"]('POST', url, formData, {
                reportProgress: true,
                withCredentials: false
            });
            return _this.http.request(req).subscribe(function (event) {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].UploadProgress) {
                    if (event.total > 0) {
                        event.percent = (event.loaded / event.total) * 100;
                    }
                    item.onProgress(event, item.file);
                }
                else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpResponse"]) {
                    item.onSuccess(event.body, item.file, event);
                    _this.nzMessageService.success('upload successfully.');
                    if (_this.uploadingType == 1) {
                        var url = event.body.extras.Image550;
                        console.log(event.body.extras.ImageOriginal);
                        _this.plotImagesList.push({
                            uid: item.file.uid,
                            name: item.file.name,
                            status: 'done',
                            url: url,
                            thumbUrl: url,
                            ImageID: event.body.extras.ImageID
                        });
                        console.log('before ', _this.plotImagesList);
                        _this.plotImagesListForNZ = _this.plotImagesList;
                        console.log('after ', _this.plotImagesList);
                    }
                    else if (_this.uploadingType == 2) {
                        var url = event.body.extras.File_Path;
                        console.log(event.body.extras.ImageOriginal);
                        _this.plotFileList.push({
                            uid: item.file.uid,
                            name: 'Plot Doc',
                            status: 'done',
                            url: url,
                            thumbUrl: url,
                            FileID: event.body.extras.FileID
                        });
                        _this.plotDocListForNZ = _this.plotFileList;
                    }
                    else if (_this.uploadingType == 3) {
                        var url = event.body.extras.Image550;
                        console.log(event.body.extras.ImageOriginal);
                        _this.companyImagesList.push({
                            uid: item.file.uid,
                            name: item.file.name,
                            status: 'done',
                            url: url,
                            thumbUrl: url,
                            ImageID: event.body.extras.ImageID
                        });
                        _this.comapnyListForNz = _this.companyImagesList;
                    }
                }
            }, function (err) {
                item.onError(err, item.file);
            });
        };
    }
    AddPlotsComponent.prototype.ngOnInit = function () {
        this.plotCreationForm = this.fb.group({
            Company_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Plot_Name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Description: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            googleAddress: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    };
    AddPlotsComponent.prototype.ngAfterViewInit = function () {
        this.onMapIntilized();
    };
    AddPlotsComponent.prototype.onSubmitPlot = function () {
        var _this = this;
        var imagesarray = [];
        console.log(this.plotImagesList);
        console.log("this.companyImagesList[0].ImageID", this.companyImagesList[0].ImageID);
        console.log("this.plotFileList[0].FileID", this.plotFileList[0].FileID);
        this.plotImagesList.forEach(function (item) {
            imagesarray.push(item.ImageID);
        });
        var adminData = JSON.parse(localStorage.getItem('adminData'));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            Plot_Name: this.plotCreationForm.value.Plot_Name,
            Company_Name: this.plotCreationForm.value.Company_Name,
            Description: this.plotCreationForm.value.Description,
            Latitude: this.lat_marker,
            Longitude: this.lng_market,
            Address: this.plotAddress,
            All_ImageID_Array: imagesarray,
            ImageID: this.companyImagesList[0].ImageID,
            FileID: this.plotFileList[0].FileID
        };
        try {
            this._appService.postMethod('Create_Plot', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.nzMessageService.success('plot created');
                    _this.plotCreationForm.reset();
                    _this.companyImagesList = [];
                    _this.plotImagesList = [];
                    _this.plotFileList = [];
                    _this.plotImagesListForNZ = [];
                    _this.plotDocListForNZ = [];
                    _this.comapnyListForNz = [];
                    _this.plotAddress = '';
                }
                _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
            }, function (error) {
            });
        }
        catch (e) { }
    };
    AddPlotsComponent.prototype.onMapIntilized = function () {
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
    AddPlotsComponent.prototype.ondragEnd = function (event) {
        console.log(event.coords.lat);
        this.lat_marker = event.coords.lat;
        this.lng_market = event.coords.lng;
        console.log("" + this.lat_marker);
    };
    AddPlotsComponent.prototype.onCustRequ = function (type) {
        this.uploadingType = type;
        if (this.uploadingType == 1) {
            this.uploadLimit = 0;
        }
        else if (type == 2 || type == 3) {
            this.uploadLimit = 1;
        }
    };
    AddPlotsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-plots',
            template: __webpack_require__(/*! ./add-plots.component.html */ "./src/app/plots/add-plots/add-plots.component.html"),
            styles: [__webpack_require__(/*! ./add-plots.component.css */ "./src/app/plots/add-plots/add-plots.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]])
    ], AddPlotsComponent);
    return AddPlotsComponent;
}());



/***/ }),

/***/ "./src/app/plots/add-plots/add-plots.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/plots/add-plots/add-plots.module.ts ***!
  \*****************************************************/
/*! exports provided: AddPlotsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPlotsModule", function() { return AddPlotsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_plots_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-plots.component */ "./src/app/plots/add-plots/add-plots.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_plots_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-plots.routing */ "./src/app/plots/add-plots/add-plots.routing.ts");
/* harmony import */ var src_app_shared_modue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared.modue */ "./src/app/shared.modue.ts");






// import { AgmCoreModule } from '@agm/core';

var AddPlotsModule = /** @class */ (function () {
    function AddPlotsModule() {
    }
    AddPlotsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _add_plots_routing__WEBPACK_IMPORTED_MODULE_5__["AddPlotsRoutingModule"],
                src_app_shared_modue__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ],
            declarations: [_add_plots_component__WEBPACK_IMPORTED_MODULE_3__["AddPlotsComponent"]]
        })
    ], AddPlotsModule);
    return AddPlotsModule;
}());



/***/ }),

/***/ "./src/app/plots/add-plots/add-plots.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/plots/add-plots/add-plots.routing.ts ***!
  \******************************************************/
/*! exports provided: AddPlotsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPlotsRoutingModule", function() { return AddPlotsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_plots_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-plots.component */ "./src/app/plots/add-plots/add-plots.component.ts");





var routes = [
    { path: '', component: _add_plots_component__WEBPACK_IMPORTED_MODULE_4__["AddPlotsComponent"] }
];
var AddPlotsRoutingModule = /** @class */ (function () {
    function AddPlotsRoutingModule() {
    }
    AddPlotsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AddPlotsRoutingModule);
    return AddPlotsRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=add-plots-add-plots-module.js.map