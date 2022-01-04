(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-vendor-add-vendor-module"],{

/***/ "./src/app/vendor/add-vendor/add-vendor.component.css":
/*!************************************************************!*\
  !*** ./src/app/vendor/add-vendor/add-vendor.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map{\n    height: 300px;\n  }\n  .avatar {\n    width: 128px;\n    height: 128px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL2FkZC12ZW5kb3IvYWRkLXZlbmRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtFQUNmO0VBQ0E7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvdmVuZG9yL2FkZC12ZW5kb3IvYWRkLXZlbmRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG4gIC5hdmF0YXIge1xuICAgIHdpZHRoOiAxMjhweDtcbiAgICBoZWlnaHQ6IDEyOHB4O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/vendor/add-vendor/add-vendor.component.html":
/*!*************************************************************!*\
  !*** ./src/app/vendor/add-vendor/add-vendor.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-card style=\"width:800px;\" nzTitle=\"Add Shop\">\n  <form nz-form #vendorRegistrationForm=\"ngForm\">\n    <div>\n      <b>Introducer Details</b>\n    </div>\n    <div nz-row nzGutter=\"8\" style=\"margin-top: 25px;\">\n      <div nz-col nzSpan=\"10\">\n        <nz-form-item>\n          <nz-form-control>\n            <input id=\"Introducer_Name\" required type=\"text\" placeholder=\"Introducer Name\" nz-input ngModel\n              name=\"Introducer_Name\">\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n      <div nz-col nzSpan=\"10\" [nzOffset]=\"2\">\n        <nz-form-item>\n          <nz-form-control>\n            <input id=\"Introducer_PhoneNumber\" ZeronumbersOnly maxlength=\"10\" required type=\"text\"\n              placeholder=\"Introducer Phone Number\" nz-input ngModel name=\"Introducer_PhoneNumber\">\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n    </div>\n    <div nz-row nzGutter=\"8\">\n      <div nz-col nzSpan=\"10\">\n        <nz-form-item>\n          <nz-form-control>\n            <input id=\"Introducer_PAN\" required type=\"text\"  placeholder=\"Introducer Pancard Number\" nz-input ngModel\n              name=\"Introducer_PAN\" \n              oninput=\"this.value=this.value.replace(/[^a-z0-9\\s]/gi, '').replace(/[_\\s]/g, '').toUpperCase()\">\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n      <div nz-col nzSpan=\"10\" [nzOffset]=\"2\">\n        <div nz-row nzGutter=\"8\">\n          <div nz-col nzSpan=\"12\">\n            <nz-upload class=\"avatar-uploader\" nzAction=\"https://api.dogemo.com/upload/\" nzName=\"avatar\"\n              nzListType=\"picture-card\" [nzShowUploadList]=\"false\" [nzBeforeUpload]=\"beforeUpload\">\n              <ng-container *ngIf=\"fileList.length==0\">\n                <i class=\"upload-icon\" nz-icon></i>\n                <div class=\"ant-upload-text\">Upload PANCARD Image</div>\n              </ng-container>\n              <img *ngIf=\"fileList.length>0\" [src]=\"fileList[0].url\" class=\"avatar\" />\n            </nz-upload>\n          </div>\n          <div nz-col style=\"text-align: center;\" nzSpan=\"12\" *ngIf=\"fileList.length>0\" >\n            <a target=\"_blank\" [attr.href]=\"fileList[0].ImageOriginal\">Click To view Pancard</a>\n          </div>\n        </div>\n      </div>\n    </div>\n      <div>\n        <b>Shop Details</b>\n      </div>\n    <div nz-row nzGutter=\"8\" style=\"margin-top: 25px;\">\n      <div nz-col nzSpan=\"10\">\n        <nz-form-item>\n          <nz-form-control>\n            <input id=\"Shop_Name\" required type=\"text\" placeholder=\"Shop Name\" nz-input ngModel name=\"Shop_Name\">\n\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n      <div nz-col nzSpan=\"10\" [nzOffset]=\"2\">\n        <nz-form-item>\n          <nz-form-control>\n            <input id=\"Shop_PhoneNumber\" ZeronumbersOnly maxlength=\"10\" required type=\"text\"\n              placeholder=\"Shop Phone Number \" nz-input ngModel name=\"Shop_PhoneNumber\">\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n    </div>\n    <div nz-row nzGutter=\"8\">\n      <div nz-col nzSpan=\"10\">\n        <nz-form-item>\n          <nz-form-control>\n            <input id=\"GST_Number\" required type=\"text\"  placeholder=\"Shop GST Number\" nz-input ngModel\n              name=\"GST_Number\" \n              oninput=\"this.value=this.value.replace(/[^a-z0-9\\s]/gi, '').replace(/[_\\s]/g, '').toUpperCase()\"\n             maxlength=\"15\">\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n      </div>\n    <nz-form-item>\n      <nz-form-control [nzSpan]=\"10\">\n        <input id=\"pac-input\" [required]=\"Latitude!=undefined\" placeholder=\"Search Shop Address\" type=\"text\" nz-input\n          [(ngModel)]=\"Address\" name=\"Address\">\n\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-control [nzSpan]=\"24\">\n        <div id=\"map\"></div>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-control>\n        <button nz-button nzType=\"primary\" [nzLoading]=\"isAdding\" [disabled]=\"!vendorRegistrationForm.valid\"\n          (click)=\"onSubmitVendor(vendorRegistrationForm)\">Submit</button>\n      </nz-form-control>\n    </nz-form-item>\n  </form>\n\n</nz-card>"

/***/ }),

/***/ "./src/app/vendor/add-vendor/add-vendor.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/vendor/add-vendor/add-vendor.component.ts ***!
  \***********************************************************/
/*! exports provided: AddVendorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVendorComponent", function() { return AddVendorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var AddVendorComponent = /** @class */ (function () {
    function AddVendorComponent(_appService, nzMessageService) {
        var _this = this;
        this._appService = _appService;
        this.nzMessageService = nzMessageService;
        this.markers = [];
        this.fileList = [];
        this.previewVisible = false;
        this.previewImage = '';
        this.loading = false;
        this.handlePreview = function (file) {
            _this.previewImage = file.url || file.thumbUrl;
            _this.previewVisible = true;
        };
        this.beforeUpload = function (file) {
            if (!(file.type == 'image/jpeg' || file.type == 'image/png')) {
                _this.nzMessageService.error('You can only upload JPG And PNG file!');
                return;
            }
            _this.fileList = _this.fileList.concat(file);
            _this.loading = true;
            _this.Imageupload(file);
            return false;
        };
    }
    AddVendorComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.onMapIntilized();
        }, 1000);
    };
    AddVendorComponent.prototype.Imageupload = function (file) {
        var _this = this;
        var formData = new FormData();
        formData.append('image', file);
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpRequest"]('POST', this._appService.ImageUpload_Url + 'Upload_Image', formData, {});
        this._appService.onImageUpload(req).subscribe(function (resp) {
            if (resp instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
                console.log(resp);
                _this.ImageID = resp.body.extras.ImageID;
                _this.loading = false;
                _this.fileList = [];
                _this.fileList.push({
                    uid: -1,
                    name: 'pancard.png',
                    status: 'done',
                    url: resp.body.extras.Image50,
                    ImageOriginal: resp.body.extras.ImageOriginal
                });
            }
            else {
            }
        });
    };
    AddVendorComponent.prototype.onSubmitVendor = function (vendorForm) {
        var _this = this;
        this.isAdding = true;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            Introducer_Name: vendorForm.value.Introducer_Name,
            Introducer_CountryCode: '+91',
            Introducer_PhoneNumber: vendorForm.value.Introducer_PhoneNumber,
            Shop_Name: vendorForm.value.Shop_Name,
            Shop_CountryCode: '+91',
            Shop_PhoneNumber: vendorForm.value.Shop_PhoneNumber,
            Latitude: this.Latitude,
            Longitude: this.Longitude,
            Address: this.Address,
            GST_Number: vendorForm.value.GST_Number,
            Introducer_PAN: vendorForm.value.Introducer_PAN,
            ImageID: this.ImageID
        };
        try {
            this._appService.postMethod('Create_Shop', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.isAdding = false;
                    _this.fileList = [];
                    _this.clearMarkers();
                    vendorForm.reset();
                    _this.nzMessageService.success('Vendor Added sucessfully');
                }
                else {
                    _this.isAdding = false;
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                }
            }, function (error) {
            });
        }
        catch (e) {
        }
    };
    AddVendorComponent.prototype.onMapIntilized = function () {
        var _this = this;
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 17.4471, lng: 78.454 },
            zoom: 14,
            fullscreenControl: true
        });
        var card = document.getElementById('pac-card');
        var input = document.getElementById('pac-input');
        var types = document.getElementById('type-selector');
        this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);
        var autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.bindTo('bounds', this.map);
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
                _this.Latitude = place.geometry.location.lat();
                _this.Longitude = place.geometry.location.lng();
            }
            _this.clearMarkers();
            var location = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() };
            _this.addMarker(location);
            _this.setMapOnAll(_this.map);
            // If the place has a geometry, then present it on a map.
            if (place.geometry.viewport) {
                //this.map.fitBounds(place.geometry.viewport);
            }
            else {
                _this.map.setCenter(place.geometry.location);
                _this.map.setZoom(17); // Why 17? Because it looks good.
            }
            //marker.setPosition(place.geometry.location);
            //marker.setVisible(true);
            var address = '';
            if (place.address_components) {
                address = [
                    (place.address_components[0] && place.address_components[0].short_name || ''),
                    (place.address_components[1] && place.address_components[1].short_name || ''),
                    (place.address_components[2] && place.address_components[2].short_name || '')
                ].join(' ');
                _this.Address = address;
            }
        });
        // google.maps.event.addListener( marker,'dragend', (event) => {
        //   this.geocodePosition(marker.getPosition());
        // });
    };
    AddVendorComponent.prototype.addMarker = function (location) {
        var marker = new google.maps.Marker({
            position: location,
            map: this.map,
            draggable: true,
        });
        this.markers.push(marker);
    };
    AddVendorComponent.prototype.setMapOnAll = function (map) {
        var _this = this;
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
            google.maps.event.addListener(this.markers[i], 'dragend', function (event) {
                // console.log(event.latLng.lat()); // this will give correct index
                var location = { lat: event.latLng.lat(), lng: event.latLng.lng() };
                _this.geocodePosition(location);
            });
        }
    };
    AddVendorComponent.prototype.clearMarkers = function () {
        this.setMapOnAll(null);
        this.markers = [];
    };
    AddVendorComponent.prototype.geocodePosition = function (pos) {
        var _this = this;
        // console.log(pos.lat)
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'location': pos }, function (results, status) {
            // console.log(status)
            // console.log(results)
            if (status === 'OK') {
                _this.Latitude = pos.lat;
                _this.Longitude = pos.lng;
                _this.Address = results[0].formatted_address;
                //  console.log(this.driverAddress)
            }
        });
        // geocoder.geocode({
        //   latLng: pos
        // }, (responses) => {
        //   if (responses && responses.length > 0) {
        //     this.zoneLat = pos.lat()
        //     this.zoneLng = pos.lng()
        //     this.driverAddress = responses[0].formatted_address
        //     this.driverRegistrationForm.patchValue({ Address: responses[0].formatted_address })
        //   } else {
        //   }
        // });
    };
    AddVendorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-vendor',
            template: __webpack_require__(/*! ./add-vendor.component.html */ "./src/app/vendor/add-vendor/add-vendor.component.html"),
            styles: [__webpack_require__(/*! ./add-vendor.component.css */ "./src/app/vendor/add-vendor/add-vendor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]])
    ], AddVendorComponent);
    return AddVendorComponent;
}());



/***/ }),

/***/ "./src/app/vendor/add-vendor/add-vendor.module.ts":
/*!********************************************************!*\
  !*** ./src/app/vendor/add-vendor/add-vendor.module.ts ***!
  \********************************************************/
/*! exports provided: AddVendorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVendorModule", function() { return AddVendorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_vendor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-vendor.component */ "./src/app/vendor/add-vendor/add-vendor.component.ts");
/* harmony import */ var src_app_shared_modue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _add_vendor_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-vendor.routing */ "./src/app/vendor/add-vendor/add-vendor.routing.ts");







var AddVendorModule = /** @class */ (function () {
    function AddVendorModule() {
    }
    AddVendorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _add_vendor_routing__WEBPACK_IMPORTED_MODULE_6__["AddVendorRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                src_app_shared_modue__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
            ],
            declarations: [_add_vendor_component__WEBPACK_IMPORTED_MODULE_4__["AddVendorComponent"]]
        })
    ], AddVendorModule);
    return AddVendorModule;
}());



/***/ }),

/***/ "./src/app/vendor/add-vendor/add-vendor.routing.ts":
/*!*********************************************************!*\
  !*** ./src/app/vendor/add-vendor/add-vendor.routing.ts ***!
  \*********************************************************/
/*! exports provided: AddVendorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVendorRoutingModule", function() { return AddVendorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _add_vendor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-vendor.component */ "./src/app/vendor/add-vendor/add-vendor.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var routes = [
    { path: '', component: _add_vendor_component__WEBPACK_IMPORTED_MODULE_1__["AddVendorComponent"] }
];
var AddVendorRoutingModule = /** @class */ (function () {
    function AddVendorRoutingModule() {
    }
    AddVendorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AddVendorRoutingModule);
    return AddVendorRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=add-vendor-add-vendor-module.js.map