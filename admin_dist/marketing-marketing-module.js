(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["marketing-marketing-module"],{

/***/ "./node_modules/ng2-img-cropper/index.js":
/*!***********************************************!*\
  !*** ./node_modules/ng2-img-cropper/index.js ***!
  \***********************************************/
/*! exports provided: ImageCropperModule, ImageCropperComponent, ImageCropper, CropperSettings, CropperDrawSettings, Bounds, CropPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_imageCropperModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/imageCropperModule */ "./node_modules/ng2-img-cropper/src/imageCropperModule.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageCropperModule", function() { return _src_imageCropperModule__WEBPACK_IMPORTED_MODULE_0__["ImageCropperModule"]; });

/* harmony import */ var _src_imageCropperComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/imageCropperComponent */ "./node_modules/ng2-img-cropper/src/imageCropperComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageCropperComponent", function() { return _src_imageCropperComponent__WEBPACK_IMPORTED_MODULE_1__["ImageCropperComponent"]; });

/* harmony import */ var _src_imageCropper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/imageCropper */ "./node_modules/ng2-img-cropper/src/imageCropper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageCropper", function() { return _src_imageCropper__WEBPACK_IMPORTED_MODULE_2__["ImageCropper"]; });

/* harmony import */ var _src_cropperSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/cropperSettings */ "./node_modules/ng2-img-cropper/src/cropperSettings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CropperSettings", function() { return _src_cropperSettings__WEBPACK_IMPORTED_MODULE_3__["CropperSettings"]; });

/* harmony import */ var _src_cropperDrawSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/cropperDrawSettings */ "./node_modules/ng2-img-cropper/src/cropperDrawSettings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CropperDrawSettings", function() { return _src_cropperDrawSettings__WEBPACK_IMPORTED_MODULE_4__["CropperDrawSettings"]; });

/* harmony import */ var _src_model_bounds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/model/bounds */ "./node_modules/ng2-img-cropper/src/model/bounds.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bounds", function() { return _src_model_bounds__WEBPACK_IMPORTED_MODULE_5__["Bounds"]; });

/* harmony import */ var _src_model_cropPosition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/model/cropPosition */ "./node_modules/ng2-img-cropper/src/model/cropPosition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CropPosition", function() { return _src_model_cropPosition__WEBPACK_IMPORTED_MODULE_6__["CropPosition"]; });

// core


// extra classes



// models


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/cropperDrawSettings.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/cropperDrawSettings.js ***!
  \*****************************************************************/
/*! exports provided: CropperDrawSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropperDrawSettings", function() { return CropperDrawSettings; });
var CropperDrawSettings = (function () {
    function CropperDrawSettings() {
        this.strokeWidth = 1;
        this.strokeColor = 'rgba(255,255,255,1)';
        this.dragIconStrokeWidth = 1;
        this.dragIconStrokeColor = 'rgba(0,0,0,1)';
        this.dragIconFillColor = 'rgba(255,255,255,1)';
    }
    return CropperDrawSettings;
}());

//# sourceMappingURL=cropperDrawSettings.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/cropperSettings.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/cropperSettings.js ***!
  \*************************************************************/
/*! exports provided: CropperSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropperSettings", function() { return CropperSettings; });
/* harmony import */ var _cropperDrawSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cropperDrawSettings */ "./node_modules/ng2-img-cropper/src/cropperDrawSettings.js");

var CropperSettings = (function () {
    function CropperSettings() {
        this.canvasWidth = 300;
        this.canvasHeight = 300;
        this.dynamicSizing = false;
        this.width = 200;
        this.height = 200;
        this.minWidth = 50;
        this.minHeight = 50;
        this.minWithRelativeToResolution = true;
        this.croppedWidth = 100;
        this.croppedHeight = 100;
        this.cropperDrawSettings = new _cropperDrawSettings__WEBPACK_IMPORTED_MODULE_0__["CropperDrawSettings"]();
        this.touchRadius = 20;
        this.noFileInput = false;
        this.allowedFilesRegex = /\.(jpe?g|png|gif)$/i;
        this.cropOnResize = true;
        this.preserveSize = false;
        this.compressRatio = 1.0;
        this._rounded = false;
        this._keepAspect = true;
        // init
    }
    Object.defineProperty(CropperSettings.prototype, "rounded", {
        get: function () {
            return this._rounded;
        },
        set: function (val) {
            this._rounded = val;
            if (val) {
                this._keepAspect = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CropperSettings.prototype, "keepAspect", {
        get: function () {
            return this._keepAspect;
        },
        set: function (val) {
            if (val === false && this._rounded) {
                throw new Error('Cannot set keep aspect to false on rounded cropper. Ellipsis not supported');
            }
            this._keepAspect = val;
        },
        enumerable: true,
        configurable: true
    });
    return CropperSettings;
}());

//# sourceMappingURL=cropperSettings.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/exif.js":
/*!**************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/exif.js ***!
  \**************************************************/
/*! exports provided: Fraction, Debug, Exif */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fraction", function() { return Fraction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Debug", function() { return Debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exif", function() { return Exif; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Fraction = (function (_super) {
    __extends(Fraction, _super);
    function Fraction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Fraction;
}(Number));

// Console debug wrapper that makes code looks a little bit cleaner
var Debug = (function () {
    function Debug() {
    }
    Debug.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (Exif.debug) {
            console.log(args);
        }
    };
    return Debug;
}());

var Exif = (function () {
    function Exif() {
    }
    Exif.addEvent = function (element, event, handler) {
        if (element.addEventListener) {
            element.addEventListener(event, handler, false);
        }
        else {
            // Hello, IE!
            if (element.attachEvent) {
                element.attachEvent('on' + event, handler);
            }
        }
    };
    Exif.imageHasData = function (img) {
        return !!(img.exifdata);
    };
    Exif.base64ToArrayBuffer = function (base64) {
        base64 = base64.replace(/^data:([^;]+);base64,/gmi, '');
        var binary = atob(base64);
        var len = binary.length;
        var buffer = new ArrayBuffer(len);
        var view = new Uint8Array(buffer);
        for (var i = 0; i < len; i++) {
            view[i] = binary.charCodeAt(i);
        }
        return buffer;
    };
    Exif.objectURLToBlob = function (url, callback) {
        var http = new XMLHttpRequest();
        http.open('GET', url, true);
        http.responseType = 'blob';
        http.onload = function () {
            if (http.status === 200 || http.status === 0) {
                callback(http.response);
            }
        };
        http.send();
    };
    Exif.getImageData = function (img, callback) {
        function handleBinaryFile(binFile) {
            var data = Exif.findEXIFinJPEG(binFile);
            var iptcdata = Exif.findIPTCinJPEG(binFile);
            img.exifdata = data || {};
            img.iptcdata = iptcdata || {};
            if (callback) {
                callback.call(img);
            }
        }
        if ('src' in img && img.src) {
            if (/^data:/i.test(img.src)) {
                var arrayBuffer = Exif.base64ToArrayBuffer(img.src);
                handleBinaryFile(arrayBuffer);
            }
            else {
                if (/^blob:/i.test(img.src)) {
                    var fileReader_1 = new FileReader();
                    fileReader_1.onload = function (e) {
                        handleBinaryFile(e.target.result);
                    };
                    Exif.objectURLToBlob(img.src, function (blob) {
                        fileReader_1.readAsArrayBuffer(blob);
                    });
                }
                else {
                    var http_1 = new XMLHttpRequest();
                    http_1.onload = function () {
                        if (http_1.status === 200 || http_1.status === 0) {
                            handleBinaryFile(http_1.response);
                        }
                        else {
                            throw 'Could not load image';
                        }
                    };
                    http_1.open('GET', img.src, true);
                    http_1.responseType = 'arraybuffer';
                    http_1.send(null);
                }
            }
        }
        else {
            if (FileReader && (img instanceof Blob || img instanceof File)) {
                var fileReader = new FileReader();
                fileReader.onload = function (e) {
                    Debug.log('Got file of length ' + e.target.result.byteLength);
                    handleBinaryFile(e.target.result);
                };
                fileReader.readAsArrayBuffer(img);
            }
        }
    };
    Exif.findEXIFinJPEG = function (file) {
        var dataView = new DataView(file);
        Debug.log('Got file of length ' + file.byteLength);
        if ((dataView.getUint8(0) !== 0xFF) || (dataView.getUint8(1) !== 0xD8)) {
            Debug.log('Not a valid JPEG');
            return false; // not a valid jpeg
        }
        var offset = 2;
        var length = file.byteLength;
        var marker;
        while (offset < length) {
            if (dataView.getUint8(offset) !== 0xFF) {
                Debug.log('Not a valid marker at offset ' + offset + ', found: ' + dataView.getUint8(offset));
                return false; // not a valid marker, something is wrong
            }
            marker = dataView.getUint8(offset + 1);
            Debug.log(marker);
            // we could implement handling for other markers here,
            // but we're only looking for 0xFFE1 for EXIF data
            if (marker === 225) {
                Debug.log('Found 0xFFE1 marker');
                return Exif.readEXIFData(dataView, offset + 4); // , dataView.getUint16(offset + 2) - 2);
                // offset += 2 + file.getShortAt(offset+2, true);
            }
            else {
                offset += 2 + dataView.getUint16(offset + 2);
            }
        }
    };
    Exif.findIPTCinJPEG = function (file) {
        var dataView = new DataView(file);
        Debug.log('Got file of length ' + file.byteLength);
        if ((dataView.getUint8(0) !== 0xFF) || (dataView.getUint8(1) !== 0xD8)) {
            Debug.log('Not a valid JPEG');
            return false; // not a valid jpeg
        }
        var offset = 2;
        var length = file.byteLength;
        var isFieldSegmentStart = function (_dataView, _offset) {
            return (_dataView.getUint8(_offset) === 0x38 && _dataView.getUint8(_offset + 1) === 0x42 && _dataView.getUint8(_offset + 2) === 0x49 && _dataView.getUint8(_offset + 3) === 0x4D && _dataView.getUint8(_offset + 4) === 0x04 && _dataView.getUint8(_offset + 5) === 0x04);
        };
        while (offset < length) {
            if (isFieldSegmentStart(dataView, offset)) {
                // Get the length of the name header (which is padded to an even number of bytes)
                var nameHeaderLength = dataView.getUint8(offset + 7);
                if (nameHeaderLength % 2 !== 0) {
                    nameHeaderLength += 1;
                }
                // Check for pre photoshop 6 format
                if (nameHeaderLength === 0) {
                    // Always 4
                    nameHeaderLength = 4;
                }
                var startOffset = offset + 8 + nameHeaderLength;
                var sectionLength = dataView.getUint16(offset + 6 + nameHeaderLength);
                return Exif.readIPTCData(file, startOffset, sectionLength);
            }
            // Not the marker, continue searching
            offset++;
        }
    };
    Exif.readIPTCData = function (file, startOffset, sectionLength) {
        var dataView = new DataView(file);
        var data = {};
        var fieldValue, fieldName, dataSize, segmentType, segmentSize;
        var segmentStartPos = startOffset;
        while (segmentStartPos < startOffset + sectionLength) {
            if (dataView.getUint8(segmentStartPos) === 0x1C && dataView.getUint8(segmentStartPos + 1) === 0x02) {
                segmentType = dataView.getUint8(segmentStartPos + 2);
                if (segmentType in Exif.IptcFieldMap) {
                    dataSize = dataView.getInt16(segmentStartPos + 3);
                    segmentSize = dataSize + 5;
                    fieldName = Exif.IptcFieldMap[segmentType];
                    fieldValue = Exif.getStringFromDB(dataView, segmentStartPos + 5, dataSize);
                    // Check if we already stored a value with this name
                    if (data.hasOwnProperty(fieldName)) {
                        // Value already stored with this name, create multivalue field
                        if (data[fieldName] instanceof Array) {
                            data[fieldName].push(fieldValue);
                        }
                        else {
                            data[fieldName] = [data[fieldName], fieldValue];
                        }
                    }
                    else {
                        data[fieldName] = fieldValue;
                    }
                }
            }
            segmentStartPos++;
        }
        return data;
    };
    Exif.readTags = function (file, tiffStart, dirStart, strings, bigEnd) {
        var entries = file.getUint16(dirStart, !bigEnd);
        var tags = {};
        var entryOffset;
        var tag;
        for (var i = 0; i < entries; i++) {
            entryOffset = dirStart + i * 12 + 2;
            tag = strings[file.getUint16(entryOffset, !bigEnd)];
            if (!tag) {
                Debug.log('Unknown tag: ' + file.getUint16(entryOffset, !bigEnd));
            }
            tags[tag] = Exif.readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
        }
        return tags;
    };
    Exif.readTagValue = function (file, entryOffset, tiffStart, dirStart, bigEnd) {
        var type = file.getUint16(entryOffset + 2, !bigEnd);
        var numValues = file.getUint32(entryOffset + 4, !bigEnd);
        var valueOffset = file.getUint32(entryOffset + 8, !bigEnd) + tiffStart;
        var offset;
        var vals, val, n;
        var numerator;
        var denominator;
        switch (type) {
            case 1: // byte, 8-bit unsigned int
            case 7:// undefined, 8-bit byte, value depending on field
                if (numValues === 1) {
                    return file.getUint8(entryOffset + 8, !bigEnd);
                }
                else {
                    offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getUint8(offset + n);
                    }
                    return vals;
                }
            case 2:// ascii, 8-bit byte
                offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                return Exif.getStringFromDB(file, offset, numValues - 1);
            case 3:// short, 16 bit int
                if (numValues === 1) {
                    return file.getUint16(entryOffset + 8, !bigEnd);
                }
                else {
                    offset = numValues > 2 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getUint16(offset + 2 * n, !bigEnd);
                    }
                    return vals;
                }
            case 4:// long, 32 bit int
                if (numValues === 1) {
                    return file.getUint32(entryOffset + 8, !bigEnd);
                }
                else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getUint32(valueOffset + 4 * n, !bigEnd);
                    }
                    return vals;
                }
            case 5:// rational = two long values, first is numerator, second is denominator
                if (numValues === 1) {
                    numerator = file.getUint32(valueOffset, !bigEnd);
                    denominator = file.getUint32(valueOffset + 4, !bigEnd);
                    val = new Fraction(numerator / denominator);
                    val.numerator = numerator;
                    val.denominator = denominator;
                    return val;
                }
                else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        numerator = file.getUint32(valueOffset + 8 * n, !bigEnd);
                        denominator = file.getUint32(valueOffset + 4 + 8 * n, !bigEnd);
                        vals[n] = new Fraction(numerator / denominator);
                        vals[n].numerator = numerator;
                        vals[n].denominator = denominator;
                    }
                    return vals;
                }
            case 9:// slong, 32 bit signed int
                if (numValues === 1) {
                    return file.getInt32(entryOffset + 8, !bigEnd);
                }
                else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getInt32(valueOffset + 4 * n, !bigEnd);
                    }
                    return vals;
                }
            case 10:// signed rational, two slongs, first is numerator, second is denominator
                if (numValues === 1) {
                    return file.getInt32(valueOffset, !bigEnd) / file.getInt32(valueOffset + 4, !bigEnd);
                }
                else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getInt32(valueOffset + 8 * n, !bigEnd) / file.getInt32(valueOffset + 4 + 8 * n, !bigEnd);
                    }
                    return vals;
                }
            default:
                break;
        }
    };
    Exif.getStringFromDB = function (buffer, start, length) {
        var outstr = '';
        for (var n = start; n < start + length; n++) {
            outstr += String.fromCharCode(buffer.getUint8(n));
        }
        return outstr;
    };
    Exif.readEXIFData = function (file, start) {
        if (Exif.getStringFromDB(file, start, 4) !== 'Exif') {
            Debug.log('Not valid EXIF data! ' + Exif.getStringFromDB(file, start, 4));
            return false;
        }
        var bigEnd, tags, tag, exifData, gpsData, tiffOffset = start + 6;
        // test for TIFF validity and endianness
        if (file.getUint16(tiffOffset) === 0x4949) {
            bigEnd = false;
        }
        else {
            if (file.getUint16(tiffOffset) === 0x4D4D) {
                bigEnd = true;
            }
            else {
                Debug.log('Not valid TIFF data! (no 0x4949 or 0x4D4D)');
                return false;
            }
        }
        if (file.getUint16(tiffOffset + 2, !bigEnd) !== 0x002A) {
            Debug.log('Not valid TIFF data! (no 0x002A)');
            return false;
        }
        var firstIFDOffset = file.getUint32(tiffOffset + 4, !bigEnd);
        if (firstIFDOffset < 0x00000008) {
            Debug.log('Not valid TIFF data! (First offset less than 8)', file.getUint32(tiffOffset + 4, !bigEnd));
            return false;
        }
        tags = Exif.readTags(file, tiffOffset, tiffOffset + firstIFDOffset, Exif.TiffTags, bigEnd);
        if (tags.ExifIFDPointer) {
            exifData = Exif.readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, Exif.Tags, bigEnd);
            for (tag in exifData) {
                if ({}.hasOwnProperty.call(exifData, tag)) {
                    switch (tag) {
                        case 'LightSource':
                        case 'Flash':
                        case 'MeteringMode':
                        case 'ExposureProgram':
                        case 'SensingMethod':
                        case 'SceneCaptureType':
                        case 'SceneType':
                        case 'CustomRendered':
                        case 'WhiteBalance':
                        case 'GainControl':
                        case 'Contrast':
                        case 'Saturation':
                        case 'Sharpness':
                        case 'SubjectDistanceRange':
                        case 'FileSource':
                            exifData[tag] = Exif.StringValues[tag][exifData[tag]];
                            break;
                        case 'ExifVersion':
                        case 'FlashpixVersion':
                            exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
                            break;
                        case 'ComponentsConfiguration':
                            var compopents = 'Components';
                            exifData[tag] = Exif.StringValues[compopents][exifData[tag][0]] + Exif.StringValues[compopents][exifData[tag][1]] + Exif.StringValues[compopents][exifData[tag][2]] + Exif.StringValues[compopents][exifData[tag][3]];
                            break;
                        default:
                            break;
                    }
                    tags[tag] = exifData[tag];
                }
            }
        }
        if (tags.GPSInfoIFDPointer) {
            gpsData = Exif.readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, Exif.GPSTags, bigEnd);
            for (tag in gpsData) {
                if ({}.hasOwnProperty.call(gpsData, tag)) {
                    switch (tag) {
                        case 'GPSVersionID':
                            gpsData[tag] = gpsData[tag][0] + '.' + gpsData[tag][1] + '.' + gpsData[tag][2] + '.' + gpsData[tag][3];
                            break;
                        default:
                            break;
                    }
                    tags[tag] = gpsData[tag];
                }
            }
        }
        return tags;
    };
    Exif.getData = function (img, callback) {
        if ((img instanceof Image || img instanceof HTMLImageElement) && !img.complete) {
            return false;
        }
        if (!Exif.imageHasData(img)) {
            Exif.getImageData(img, callback);
        }
        else {
            if (callback) {
                callback.call(img);
            }
        }
        return true;
    };
    Exif.getTag = function (img, tag) {
        if (!Exif.imageHasData(img)) {
            return;
        }
        return img.exifdata[tag];
    };
    ;
    Exif.getAllTags = function (img) {
        if (!Exif.imageHasData(img)) {
            return {};
        }
        var a, data = img.exifdata, tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    };
    ;
    Exif.pretty = function (img) {
        if (!Exif.imageHasData(img)) {
            return '';
        }
        var a, data = img.exifdata, strPretty = '';
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                if (typeof data[a] === 'object') {
                    if (data[a] instanceof Number) {
                        strPretty += a + " : " + data[a] + " [" + data[a].numerator + "/" + data[a].denominator + "]\r\n";
                    }
                    else {
                        strPretty += a + " : [" + data[a].length + " values]\r\n";
                    }
                }
                else {
                    strPretty += a + " : " + data[a] + "\r\n";
                }
            }
        }
        return strPretty;
    };
    Exif.readFromBinaryFile = function (file) {
        return Exif.findEXIFinJPEG(file);
    };
    Exif.debug = false;
    Exif.IptcFieldMap = {
        0x78: 'caption',
        0x6E: 'credit',
        0x19: 'keywords',
        0x37: 'dateCreated',
        0x50: 'byline',
        0x55: 'bylineTitle',
        0x7A: 'captionWriter',
        0x69: 'headline',
        0x74: 'copyright',
        0x0F: 'category'
    };
    Exif.Tags = {
        // version tags
        0x9000: 'ExifVersion',
        0xA000: 'FlashpixVersion',
        // colorspace tags
        0xA001: 'ColorSpace',
        // image configuration
        0xA002: 'PixelXDimension',
        0xA003: 'PixelYDimension',
        0x9101: 'ComponentsConfiguration',
        0x9102: 'CompressedBitsPerPixel',
        // user information
        0x927C: 'MakerNote',
        0x9286: 'UserComment',
        // related file
        0xA004: 'RelatedSoundFile',
        // date and time
        0x9003: 'DateTimeOriginal',
        0x9004: 'DateTimeDigitized',
        0x9290: 'SubsecTime',
        0x9291: 'SubsecTimeOriginal',
        0x9292: 'SubsecTimeDigitized',
        // picture-taking conditions
        0x829A: 'ExposureTime',
        0x829D: 'FNumber',
        0x8822: 'ExposureProgram',
        0x8824: 'SpectralSensitivity',
        0x8827: 'ISOSpeedRatings',
        0x8828: 'OECF',
        0x9201: 'ShutterSpeedValue',
        0x9202: 'ApertureValue',
        0x9203: 'BrightnessValue',
        0x9204: 'ExposureBias',
        0x9205: 'MaxApertureValue',
        0x9206: 'SubjectDistance',
        0x9207: 'MeteringMode',
        0x9208: 'LightSource',
        0x9209: 'Flash',
        0x9214: 'SubjectArea',
        0x920A: 'FocalLength',
        0xA20B: 'FlashEnergy',
        0xA20C: 'SpatialFrequencyResponse',
        0xA20E: 'FocalPlaneXResolution',
        0xA20F: 'FocalPlaneYResolution',
        0xA210: 'FocalPlaneResolutionUnit',
        0xA214: 'SubjectLocation',
        0xA215: 'ExposureIndex',
        0xA217: 'SensingMethod',
        0xA300: 'FileSource',
        0xA301: 'SceneType',
        0xA302: 'CFAPattern',
        0xA401: 'CustomRendered',
        0xA402: 'ExposureMode',
        0xA403: 'WhiteBalance',
        0xA404: 'DigitalZoomRation',
        0xA405: 'FocalLengthIn35mmFilm',
        0xA406: 'SceneCaptureType',
        0xA407: 'GainControl',
        0xA408: 'Contrast',
        0xA409: 'Saturation',
        0xA40A: 'Sharpness',
        0xA40B: 'DeviceSettingDescription',
        0xA40C: 'SubjectDistanceRange',
        // other tags
        0xA005: 'InteroperabilityIFDPointer', 0xA420: 'ImageUniqueID' // Identifier assigned uniquely to each image
    };
    Exif.TiffTags = {
        0x0100: 'ImageWidth',
        0x0101: 'ImageHeight',
        0x8769: 'ExifIFDPointer',
        0x8825: 'GPSInfoIFDPointer',
        0xA005: 'InteroperabilityIFDPointer',
        0x0102: 'BitsPerSample',
        0x0103: 'Compression',
        0x0106: 'PhotometricInterpretation',
        0x0112: 'Orientation',
        0x0115: 'SamplesPerPixel',
        0x011C: 'PlanarConfiguration',
        0x0212: 'YCbCrSubSampling',
        0x0213: 'YCbCrPositioning',
        0x011A: 'XResolution',
        0x011B: 'YResolution',
        0x0128: 'ResolutionUnit',
        0x0111: 'StripOffsets',
        0x0116: 'RowsPerStrip',
        0x0117: 'StripByteCounts',
        0x0201: 'JPEGInterchangeFormat',
        0x0202: 'JPEGInterchangeFormatLength',
        0x012D: 'TransferFunction',
        0x013E: 'WhitePoint',
        0x013F: 'PrimaryChromaticities',
        0x0211: 'YCbCrCoefficients',
        0x0214: 'ReferenceBlackWhite',
        0x0132: 'DateTime',
        0x010E: 'ImageDescription',
        0x010F: 'Make',
        0x0110: 'Model',
        0x0131: 'Software',
        0x013B: 'Artist',
        0x8298: 'Copyright'
    };
    Exif.GPSTags = {
        0x0000: 'GPSVersionID',
        0x0001: 'GPSLatitudeRef',
        0x0002: 'GPSLatitude',
        0x0003: 'GPSLongitudeRef',
        0x0004: 'GPSLongitude',
        0x0005: 'GPSAltitudeRef',
        0x0006: 'GPSAltitude',
        0x0007: 'GPSTimeStamp',
        0x0008: 'GPSSatellites',
        0x0009: 'GPSStatus',
        0x000A: 'GPSMeasureMode',
        0x000B: 'GPSDOP',
        0x000C: 'GPSSpeedRef',
        0x000D: 'GPSSpeed',
        0x000E: 'GPSTrackRef',
        0x000F: 'GPSTrack',
        0x0010: 'GPSImgDirectionRef',
        0x0011: 'GPSImgDirection',
        0x0012: 'GPSMapDatum',
        0x0013: 'GPSDestLatitudeRef',
        0x0014: 'GPSDestLatitude',
        0x0015: 'GPSDestLongitudeRef',
        0x0016: 'GPSDestLongitude',
        0x0017: 'GPSDestBearingRef',
        0x0018: 'GPSDestBearing',
        0x0019: 'GPSDestDistanceRef',
        0x001A: 'GPSDestDistance',
        0x001B: 'GPSProcessingMethod',
        0x001C: 'GPSAreaInformation',
        0x001D: 'GPSDateStamp',
        0x001E: 'GPSDifferential'
    };
    Exif.StringValues = {
        ExposureProgram: {
            0: 'Not defined',
            1: 'Manual',
            2: 'Normal program',
            3: 'Aperture priority',
            4: 'Shutter priority',
            5: 'Creative program',
            6: 'Action program',
            7: 'Portrait mode',
            8: 'Landscape mode'
        }, MeteringMode: {
            0: 'Unknown',
            1: 'Average',
            2: 'CenterWeightedAverage',
            3: 'Spot',
            4: 'MultiSpot',
            5: 'Pattern',
            6: 'Partial',
            255: 'Other'
        }, LightSource: {
            0: 'Unknown',
            1: 'Daylight',
            2: 'Fluorescent',
            3: 'Tungsten (incandescent light)',
            4: 'Flash',
            9: 'Fine weather',
            10: 'Cloudy weather',
            11: 'Shade',
            12: 'Daylight fluorescent (D 5700 - 7100K)',
            13: 'Day white fluorescent (N 4600 - 5400K)',
            14: 'Cool white fluorescent (W 3900 - 4500K)',
            15: 'White fluorescent (WW 3200 - 3700K)',
            17: 'Standard light A',
            18: 'Standard light B',
            19: 'Standard light C',
            20: 'D55',
            21: 'D65',
            22: 'D75',
            23: 'D50',
            24: 'ISO studio tungsten',
            255: 'Other'
        }, Flash: {
            0x0000: 'Flash did not fire',
            0x0001: 'Flash fired',
            0x0005: 'Strobe return light not detected',
            0x0007: 'Strobe return light detected',
            0x0009: 'Flash fired, compulsory flash mode',
            0x000D: 'Flash fired, compulsory flash mode, return light not detected',
            0x000F: 'Flash fired, compulsory flash mode, return light detected',
            0x0010: 'Flash did not fire, compulsory flash mode',
            0x0018: 'Flash did not fire, auto mode',
            0x0019: 'Flash fired, auto mode',
            0x001D: 'Flash fired, auto mode, return light not detected',
            0x001F: 'Flash fired, auto mode, return light detected',
            0x0020: 'No flash function',
            0x0041: 'Flash fired, red-eye reduction mode',
            0x0045: 'Flash fired, red-eye reduction mode, return light not detected',
            0x0047: 'Flash fired, red-eye reduction mode, return light detected',
            0x0049: 'Flash fired, compulsory flash mode, red-eye reduction mode',
            0x004D: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected',
            0x004F: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light detected',
            0x0059: 'Flash fired, auto mode, red-eye reduction mode',
            0x005D: 'Flash fired, auto mode, return light not detected, red-eye reduction mode',
            0x005F: 'Flash fired, auto mode, return light detected, red-eye reduction mode'
        }, SensingMethod: {
            1: 'Not defined',
            2: 'One-chip color area sensor',
            3: 'Two-chip color area sensor',
            4: 'Three-chip color area sensor',
            5: 'Color sequential area sensor',
            7: 'Trilinear sensor',
            8: 'Color sequential linear sensor'
        }, SceneCaptureType: {
            0: 'Standard', 1: 'Landscape', 2: 'Portrait', 3: 'Night scene'
        }, SceneType: {
            1: 'Directly photographed'
        }, CustomRendered: {
            0: 'Normal process', 1: 'Custom process'
        }, WhiteBalance: {
            0: 'Auto white balance', 1: 'Manual white balance'
        }, GainControl: {
            0: 'None', 1: 'Low gain up', 2: 'High gain up', 3: 'Low gain down', 4: 'High gain down'
        }, Contrast: {
            0: 'Normal', 1: 'Soft', 2: 'Hard'
        }, Saturation: {
            0: 'Normal', 1: 'Low saturation', 2: 'High saturation'
        }, Sharpness: {
            0: 'Normal', 1: 'Soft', 2: 'Hard'
        }, SubjectDistanceRange: {
            0: 'Unknown', 1: 'Macro', 2: 'Close view', 3: 'Distant view'
        }, FileSource: {
            3: 'DSC'
        },
        Components: {
            0: '', 1: 'Y', 2: 'Cb', 3: 'Cr', 4: 'R', 5: 'G', 6: 'B'
        }
    };
    return Exif;
}());

//# sourceMappingURL=exif.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/imageCropper.js":
/*!**********************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/imageCropper.js ***!
  \**********************************************************/
/*! exports provided: ImageCropper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropper", function() { return ImageCropper; });
/* harmony import */ var _model_bounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/bounds */ "./node_modules/ng2-img-cropper/src/model/bounds.js");
/* harmony import */ var _model_cornerMarker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/cornerMarker */ "./node_modules/ng2-img-cropper/src/model/cornerMarker.js");
/* harmony import */ var _model_cropTouch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/cropTouch */ "./node_modules/ng2-img-cropper/src/model/cropTouch.js");
/* harmony import */ var _model_dragMarker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/dragMarker */ "./node_modules/ng2-img-cropper/src/model/dragMarker.js");
/* harmony import */ var _model_imageCropperModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/imageCropperModel */ "./node_modules/ng2-img-cropper/src/model/imageCropperModel.js");
/* harmony import */ var _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imageCropperDataShare */ "./node_modules/ng2-img-cropper/src/imageCropperDataShare.js");
/* harmony import */ var _model_pointPool__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/pointPool */ "./node_modules/ng2-img-cropper/src/model/pointPool.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var ImageCropper = (function (_super) {
    __extends(ImageCropper, _super);
    function ImageCropper(cropperSettings) {
        var _this = _super.call(this) || this;
        var x = 0;
        var y = 0;
        var width = cropperSettings.width;
        var height = cropperSettings.height;
        var keepAspect = cropperSettings.keepAspect;
        var touchRadius = cropperSettings.touchRadius;
        var minWidth = cropperSettings.minWidth;
        var minHeight = cropperSettings.minHeight;
        var croppedWidth = cropperSettings.croppedWidth;
        var croppedHeight = cropperSettings.croppedHeight;
        _this.cropperSettings = cropperSettings;
        _this.crop = _this;
        _this.x = x;
        _this.y = y;
        if (width === void 0) {
            _this.width = 100;
        }
        if (height === void 0) {
            _this.height = 50;
        }
        if (keepAspect === void 0) {
            _this.keepAspect = true;
        }
        if (touchRadius === void 0) {
            _this.touchRadius = 20;
        }
        _this.minWidth = minWidth;
        _this.minHeight = minHeight;
        _this.keepAspect = false;
        _this.aspectRatio = 0;
        _this.currentDragTouches = [];
        _this.isMouseDown = false;
        _this.ratioW = 1;
        _this.ratioH = 1;
        _this.fileType = cropperSettings.fileType;
        _this.imageSet = false;
        _this.pointPool = new _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"](200);
        _this.tl = new _model_cornerMarker__WEBPACK_IMPORTED_MODULE_1__["CornerMarker"](x, y, touchRadius, _this.cropperSettings);
        _this.tr = new _model_cornerMarker__WEBPACK_IMPORTED_MODULE_1__["CornerMarker"](x + width, y, touchRadius, _this.cropperSettings);
        _this.bl = new _model_cornerMarker__WEBPACK_IMPORTED_MODULE_1__["CornerMarker"](x, y + height, touchRadius, _this.cropperSettings);
        _this.br = new _model_cornerMarker__WEBPACK_IMPORTED_MODULE_1__["CornerMarker"](x + width, y + height, touchRadius, _this.cropperSettings);
        _this.tl.addHorizontalNeighbour(_this.tr);
        _this.tl.addVerticalNeighbour(_this.bl);
        _this.tr.addHorizontalNeighbour(_this.tl);
        _this.tr.addVerticalNeighbour(_this.br);
        _this.bl.addHorizontalNeighbour(_this.br);
        _this.bl.addVerticalNeighbour(_this.tl);
        _this.br.addHorizontalNeighbour(_this.bl);
        _this.br.addVerticalNeighbour(_this.tr);
        _this.markers = [_this.tl, _this.tr, _this.bl, _this.br];
        _this.center = new _model_dragMarker__WEBPACK_IMPORTED_MODULE_3__["DragMarker"](x + (width / 2), y + (height / 2), touchRadius, _this.cropperSettings);
        _this.keepAspect = keepAspect;
        _this.aspectRatio = height / width;
        _this.croppedImage = new Image();
        _this.currentlyInteracting = false;
        _this.cropWidth = croppedWidth;
        _this.cropHeight = croppedHeight;
        return _this;
    }
    ImageCropper.sign = function (x) {
        if (+x === x) {
            return (x === 0) ? x : (x > 0) ? 1 : -1;
        }
        return NaN;
    };
    ImageCropper.getMousePos = function (canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(evt.clientX - rect.left, evt.clientY - rect.top);
    };
    ImageCropper.getTouchPos = function (canvas, touch) {
        var rect = canvas.getBoundingClientRect();
        return _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(touch.clientX - rect.left, touch.clientY - rect.top);
    };
    ImageCropper.detectVerticalSquash = function (img) {
        var ih = img.height;
        var canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = ih;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        var imageData = ctx.getImageData(0, 0, 1, ih);
        if (imageData) {
            var data = imageData.data;
            // search image edge pixel position in case it is squashed vertically.
            var sy = 0;
            var ey = ih;
            var py = ih;
            while (py > sy) {
                var alpha = data[(py - 1) * 4 + 3];
                if (alpha === 0) {
                    ey = py;
                }
                else {
                    sy = py;
                }
                py = (ey + sy) >> 1;
            }
            var ratio = (py / ih);
            return (ratio === 0) ? 1 : ratio;
        }
        else {
            return 1;
        }
    };
    ImageCropper.prototype.getDataUriMimeType = function (dataUri) {
        // Get a substring because the regex does not perform well on very large strings. Cater for optional charset. Length 50 shoould be enough.
        var dataUriSubstring = dataUri.substring(0, 50);
        var mimeType = 'image/png';
        // data-uri scheme
        // data:[<media type>][;charset=<character set>][;base64],<data>
        var regEx = RegExp(/^(data:)([\w\/\+]+);(charset=[\w-]+|base64).*,(.*)/gi);
        var matches = regEx.exec(dataUriSubstring);
        if (matches && matches[2]) {
            mimeType = matches[2];
            if (mimeType == 'image/jpg') {
                mimeType = 'image/jpeg';
            }
        }
        return mimeType;
    };
    ImageCropper.prototype.prepare = function (canvas) {
        this.buffer = document.createElement('canvas');
        this.cropCanvas = document.createElement('canvas');
        // todo get more reliable parent width value.
        var responsiveWidth = canvas.parentElement ? canvas.parentElement.clientWidth : 0;
        if (responsiveWidth > 0 && this.cropperSettings.dynamicSizing) {
            this.cropCanvas.width = responsiveWidth;
            this.buffer.width = responsiveWidth;
            canvas.width = responsiveWidth;
        }
        else {
            this.cropCanvas.width = this.cropWidth;
            this.buffer.width = canvas.width;
        }
        this.cropCanvas.height = this.cropHeight;
        this.buffer.height = canvas.height;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.draw(this.ctx);
    };
    ImageCropper.prototype.resizeCanvas = function (width, height, setImage) {
        if (setImage === void 0) { setImage = false; }
        this.canvas.width = this.cropCanvas.width = this.width = this.canvasWidth = this.buffer.width = width;
        this.canvas.height = this.cropCanvas.height = this.height = this.canvasHeight = this.buffer.height = height;
        if (setImage) {
            this.setImage(this.srcImage);
        }
    };
    ImageCropper.prototype.reset = function () {
        this.setImage(undefined);
    };
    ImageCropper.prototype.draw = function (ctx) {
        var bounds = this.getBounds();
        if (this.srcImage) {
            ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            var sourceAspect = this.srcImage.height / this.srcImage.width;
            var canvasAspect = this.canvasHeight / this.canvasWidth;
            var w = this.canvasWidth;
            var h = this.canvasHeight;
            if (canvasAspect > sourceAspect) {
                w = this.canvasWidth;
                h = this.canvasWidth * sourceAspect;
            }
            else {
                h = this.canvasHeight;
                w = this.canvasHeight / sourceAspect;
            }
            this.ratioW = w / this.srcImage.width;
            this.ratioH = h / this.srcImage.height;
            if (canvasAspect < sourceAspect) {
                this.drawImageIOSFix(ctx, this.srcImage, 0, 0, this.srcImage.width, this.srcImage.height, this.buffer.width / 2 - w / 2, 0, w, h);
            }
            else {
                this.drawImageIOSFix(ctx, this.srcImage, 0, 0, this.srcImage.width, this.srcImage.height, 0, this.buffer.height / 2 - h / 2, w, h);
            }
            this.buffer.getContext('2d')
                .drawImage(this.canvas, 0, 0, this.canvasWidth, this.canvasHeight);
            ctx.lineWidth = this.cropperSettings.cropperDrawSettings.strokeWidth;
            ctx.strokeStyle = this.cropperSettings.cropperDrawSettings.strokeColor; // 'rgba(255,228,0,1)';
            if (!this.cropperSettings.rounded) {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
                ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
                ctx.drawImage(this.buffer, bounds.left, bounds.top, Math.max(bounds.width, 1), Math.max(bounds.height, 1), bounds.left, bounds.top, bounds.width, bounds.height);
                ctx.strokeRect(bounds.left, bounds.top, bounds.width, bounds.height);
            }
            else {
                ctx.beginPath();
                ctx.arc(bounds.left + bounds.width / 2, bounds.top + bounds.height / 2, bounds.width / 2, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.stroke();
            }
            var marker = void 0;
            for (var i = 0; i < this.markers.length; i++) {
                marker = this.markers[i];
                marker.draw(ctx);
            }
            this.center.draw(ctx);
        }
        else {
            ctx.fillStyle = 'rgba(192,192,192,1)';
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
    };
    ImageCropper.prototype.dragCenter = function (x, y, marker) {
        var bounds = this.getBounds();
        var left = x - (bounds.width / 2);
        var right = x + (bounds.width / 2);
        var top = y - (bounds.height / 2);
        var bottom = y + (bounds.height / 2);
        if (right >= this.maxXClamp) {
            x = this.maxXClamp - bounds.width / 2;
        }
        if (left <= this.minXClamp) {
            x = bounds.width / 2 + this.minXClamp;
        }
        if (top < this.minYClamp) {
            y = bounds.height / 2 + this.minYClamp;
        }
        if (bottom >= this.maxYClamp) {
            y = this.maxYClamp - bounds.height / 2;
        }
        this.tl.moveX(x - (bounds.width / 2));
        this.tl.moveY(y - (bounds.height / 2));
        this.tr.moveX(x + (bounds.width / 2));
        this.tr.moveY(y - (bounds.height / 2));
        this.bl.moveX(x - (bounds.width / 2));
        this.bl.moveY(y + (bounds.height / 2));
        this.br.moveX(x + (bounds.width / 2));
        this.br.moveY(y + (bounds.height / 2));
        marker.setPosition(x, y);
    };
    ImageCropper.prototype.enforceMinSize = function (x, y, marker) {
        var xLength = x - marker.getHorizontalNeighbour().position.x;
        var yLength = y - marker.getVerticalNeighbour().position.y;
        var xOver = this.minWidth - Math.abs(xLength);
        var yOver = this.minHeight - Math.abs(yLength);
        if (xLength === 0 || yLength === 0) {
            x = marker.position.x;
            y = marker.position.y;
            return _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(x, y);
        }
        if (this.keepAspect) {
            if (xOver > 0 && (yOver / this.aspectRatio) > 0) {
                if (xOver > (yOver / this.aspectRatio)) {
                    if (xLength < 0) {
                        x -= xOver;
                        if (yLength < 0) {
                            y -= xOver * this.aspectRatio;
                        }
                        else {
                            y += xOver * this.aspectRatio;
                        }
                    }
                    else {
                        x += xOver;
                        if (yLength < 0) {
                            y -= xOver * this.aspectRatio;
                        }
                        else {
                            y += xOver * this.aspectRatio;
                        }
                    }
                }
                else {
                    if (yLength < 0) {
                        y -= yOver;
                        if (xLength < 0) {
                            x -= yOver / this.aspectRatio;
                        }
                        else {
                            x += yOver / this.aspectRatio;
                        }
                    }
                    else {
                        y += yOver;
                        if (xLength < 0) {
                            x -= yOver / this.aspectRatio;
                        }
                        else {
                            x += yOver / this.aspectRatio;
                        }
                    }
                }
            }
            else {
                if (xOver > 0) {
                    if (xLength < 0) {
                        x -= xOver;
                        if (yLength < 0) {
                            y -= xOver * this.aspectRatio;
                        }
                        else {
                            y += xOver * this.aspectRatio;
                        }
                    }
                    else {
                        x += xOver;
                        if (yLength < 0) {
                            y -= xOver * this.aspectRatio;
                        }
                        else {
                            y += xOver * this.aspectRatio;
                        }
                    }
                }
                else {
                    if (yOver > 0) {
                        if (yLength < 0) {
                            y -= yOver;
                            if (xLength < 0) {
                                x -= yOver / this.aspectRatio;
                            }
                            else {
                                x += yOver / this.aspectRatio;
                            }
                        }
                        else {
                            y += yOver;
                            if (xLength < 0) {
                                x -= yOver / this.aspectRatio;
                            }
                            else {
                                x += yOver / this.aspectRatio;
                            }
                        }
                    }
                }
            }
        }
        else {
            if (xOver > 0) {
                if (xLength < 0) {
                    x -= xOver;
                }
                else {
                    x += xOver;
                }
            }
            if (yOver > 0) {
                if (yLength < 0) {
                    y -= yOver;
                }
                else {
                    y += yOver;
                }
            }
        }
        if (x < this.minXClamp || x > this.maxXClamp || y < this.minYClamp || y > this.maxYClamp) {
            x = marker.position.x;
            y = marker.position.y;
        }
        return _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(x, y);
    };
    ImageCropper.prototype.dragCorner = function (x, y, marker) {
        var iX = 0;
        var iY = 0;
        var ax = 0;
        var ay = 0;
        var newHeight = 0;
        var newWidth = 0;
        var newY = 0;
        var newX = 0;
        var anchorMarker;
        var fold = 0;
        if (this.keepAspect) {
            anchorMarker = marker.getHorizontalNeighbour().getVerticalNeighbour();
            ax = anchorMarker.position.x;
            ay = anchorMarker.position.y;
            if (x <= anchorMarker.position.x) {
                if (y <= anchorMarker.position.y) {
                    iX = ax - (100 / this.aspectRatio);
                    iY = ay - (100 / this.aspectRatio * this.aspectRatio);
                    fold = this.getSide(_model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(iX, iY), anchorMarker.position, _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(x, y));
                    if (fold > 0) {
                        newHeight = Math.abs(anchorMarker.position.y - y);
                        newWidth = newHeight / this.aspectRatio;
                        newY = anchorMarker.position.y - newHeight;
                        newX = anchorMarker.position.x - newWidth;
                        var min = this.enforceMinSize(newX, newY, marker);
                        marker.move(min.x, min.y);
                        _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(min);
                    }
                    else {
                        if (fold < 0) {
                            newWidth = Math.abs(anchorMarker.position.x - x);
                            newHeight = newWidth * this.aspectRatio;
                            newY = anchorMarker.position.y - newHeight;
                            newX = anchorMarker.position.x - newWidth;
                            var min = this.enforceMinSize(newX, newY, marker);
                            marker.move(min.x, min.y);
                            _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(min);
                        }
                    }
                }
                else {
                    iX = ax - (100 / this.aspectRatio);
                    iY = ay + (100 / this.aspectRatio * this.aspectRatio);
                    fold = this.getSide(_model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(iX, iY), anchorMarker.position, _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(x, y));
                    if (fold > 0) {
                        newWidth = Math.abs(anchorMarker.position.x - x);
                        newHeight = newWidth * this.aspectRatio;
                        newY = anchorMarker.position.y + newHeight;
                        newX = anchorMarker.position.x - newWidth;
                        var min = this.enforceMinSize(newX, newY, marker);
                        marker.move(min.x, min.y);
                        _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(min);
                    }
                    else {
                        if (fold < 0) {
                            newHeight = Math.abs(anchorMarker.position.y - y);
                            newWidth = newHeight / this.aspectRatio;
                            newY = anchorMarker.position.y + newHeight;
                            newX = anchorMarker.position.x - newWidth;
                            var min = this.enforceMinSize(newX, newY, marker);
                            marker.move(min.x, min.y);
                            _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(min);
                        }
                    }
                }
            }
            else {
                if (y <= anchorMarker.position.y) {
                    iX = ax + (100 / this.aspectRatio);
                    iY = ay - (100 / this.aspectRatio * this.aspectRatio);
                    fold = this.getSide(_model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(iX, iY), anchorMarker.position, _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(x, y));
                    if (fold < 0) {
                        newHeight = Math.abs(anchorMarker.position.y - y);
                        newWidth = newHeight / this.aspectRatio;
                        newY = anchorMarker.position.y - newHeight;
                        newX = anchorMarker.position.x + newWidth;
                        var min = this.enforceMinSize(newX, newY, marker);
                        marker.move(min.x, min.y);
                        _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(min);
                    }
                    else {
                        if (fold > 0) {
                            newWidth = Math.abs(anchorMarker.position.x - x);
                            newHeight = newWidth * this.aspectRatio;
                            newY = anchorMarker.position.y - newHeight;
                            newX = anchorMarker.position.x + newWidth;
                            var min = this.enforceMinSize(newX, newY, marker);
                            marker.move(min.x, min.y);
                            _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(min);
                        }
                    }
                }
                else {
                    iX = ax + (100 / this.aspectRatio);
                    iY = ay + (100 / this.aspectRatio * this.aspectRatio);
                    fold = this.getSide(_model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(iX, iY), anchorMarker.position, _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(x, y));
                    if (fold < 0) {
                        newWidth = Math.abs(anchorMarker.position.x - x);
                        newHeight = newWidth * this.aspectRatio;
                        newY = anchorMarker.position.y + newHeight;
                        newX = anchorMarker.position.x + newWidth;
                        var min = this.enforceMinSize(newX, newY, marker);
                        marker.move(min.x, min.y);
                        _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(min);
                    }
                    else {
                        if (fold > 0) {
                            newHeight = Math.abs(anchorMarker.position.y - y);
                            newWidth = newHeight / this.aspectRatio;
                            newY = anchorMarker.position.y + newHeight;
                            newX = anchorMarker.position.x + newWidth;
                            var min = this.enforceMinSize(newX, newY, marker);
                            marker.move(min.x, min.y);
                            _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(min);
                        }
                    }
                }
            }
        }
        else {
            var min = this.enforceMinSize(x, y, marker);
            marker.move(min.x, min.y);
            _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(min);
        }
        this.center.recalculatePosition(this.getBounds());
    };
    ImageCropper.prototype.getSide = function (a, b, c) {
        var n = ImageCropper.sign((b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x));
        // TODO move the return of the pools to outside of this function
        _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(a);
        _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(c);
        return n;
    };
    ImageCropper.prototype.handleRelease = function (newCropTouch) {
        if (newCropTouch == null) {
            return;
        }
        var index = 0;
        for (var k = 0; k < this.currentDragTouches.length; k++) {
            if (newCropTouch.id === this.currentDragTouches[k].id) {
                this.currentDragTouches[k].dragHandle.setDrag(false);
                index = k;
            }
        }
        this.currentDragTouches.splice(index, 1);
        this.draw(this.ctx);
    };
    ImageCropper.prototype.handleMove = function (newCropTouch) {
        var matched = false;
        for (var k = 0; k < this.currentDragTouches.length; k++) {
            if (newCropTouch.id === this.currentDragTouches[k].id && this.currentDragTouches[k].dragHandle != null) {
                var dragTouch = this.currentDragTouches[k];
                var clampedPositions = this.clampPosition(newCropTouch.x - dragTouch.dragHandle.offset.x, newCropTouch.y - dragTouch.dragHandle.offset.y);
                newCropTouch.x = clampedPositions.x;
                newCropTouch.y = clampedPositions.y;
                _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(clampedPositions);
                if (dragTouch.dragHandle instanceof _model_cornerMarker__WEBPACK_IMPORTED_MODULE_1__["CornerMarker"]) {
                    this.dragCorner(newCropTouch.x, newCropTouch.y, dragTouch.dragHandle);
                }
                else {
                    this.dragCenter(newCropTouch.x, newCropTouch.y, dragTouch.dragHandle);
                }
                this.currentlyInteracting = true;
                matched = true;
                _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setPressed(this.canvas);
                break;
            }
        }
        if (!matched) {
            for (var i = 0; i < this.markers.length; i++) {
                var marker = this.markers[i];
                if (marker.touchInBounds(newCropTouch.x, newCropTouch.y)) {
                    newCropTouch.dragHandle = marker;
                    this.currentDragTouches.push(newCropTouch);
                    marker.setDrag(true);
                    newCropTouch.dragHandle.offset.x = newCropTouch.x - newCropTouch.dragHandle.position.x;
                    newCropTouch.dragHandle.offset.y = newCropTouch.y - newCropTouch.dragHandle.position.y;
                    this.dragCorner(newCropTouch.x - newCropTouch.dragHandle.offset.x, newCropTouch.y - newCropTouch.dragHandle.offset.y, newCropTouch.dragHandle);
                    break;
                }
            }
            if (newCropTouch.dragHandle === null || typeof newCropTouch.dragHandle === 'undefined') {
                if (this.center.touchInBounds(newCropTouch.x, newCropTouch.y)) {
                    newCropTouch.dragHandle = this.center;
                    this.currentDragTouches.push(newCropTouch);
                    newCropTouch.dragHandle.setDrag(true);
                    newCropTouch.dragHandle.offset.x = newCropTouch.x - newCropTouch.dragHandle.position.x;
                    newCropTouch.dragHandle.offset.y = newCropTouch.y - newCropTouch.dragHandle.position.y;
                    this.dragCenter(newCropTouch.x - newCropTouch.dragHandle.offset.x, newCropTouch.y - newCropTouch.dragHandle.offset.y, newCropTouch.dragHandle);
                }
            }
        }
    };
    ImageCropper.prototype.updateClampBounds = function () {
        var sourceAspect = this.srcImage.height / this.srcImage.width;
        var canvasAspect = this.canvas.height / this.canvas.width;
        var w = this.canvas.width;
        var h = this.canvas.height;
        if (canvasAspect > sourceAspect) {
            w = this.canvas.width;
            h = this.canvas.width * sourceAspect;
        }
        else {
            h = this.canvas.height;
            w = this.canvas.height / sourceAspect;
        }
        this.minXClamp = this.canvas.width / 2 - w / 2;
        this.minYClamp = this.canvas.height / 2 - h / 2;
        this.maxXClamp = this.canvas.width / 2 + w / 2;
        this.maxYClamp = this.canvas.height / 2 + h / 2;
    };
    ImageCropper.prototype.getCropBounds = function () {
        var bounds = this.getBounds();
        bounds.top = Math.round((bounds.top - this.minYClamp) / this.ratioH);
        bounds.bottom = Math.round((bounds.bottom - this.minYClamp) / this.ratioH);
        bounds.left = Math.round((bounds.left - this.minXClamp) / this.ratioW);
        bounds.right = Math.round((bounds.right - this.minXClamp) / this.ratioW);
        return bounds;
    };
    ImageCropper.prototype.clampPosition = function (x, y) {
        if (x < this.minXClamp) {
            x = this.minXClamp;
        }
        if (x > this.maxXClamp) {
            x = this.maxXClamp;
        }
        if (y < this.minYClamp) {
            y = this.minYClamp;
        }
        if (y > this.maxYClamp) {
            y = this.maxYClamp;
        }
        return _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(x, y);
    };
    ImageCropper.prototype.isImageSet = function () {
        return this.imageSet;
    };
    ImageCropper.prototype.setImage = function (img) {
        this.srcImage = img;
        if (!img) {
            this.imageSet = false;
            this.draw(this.ctx);
        }
        else {
            this.imageSet = true;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            var bufferContext = this.buffer.getContext('2d');
            bufferContext.clearRect(0, 0, this.buffer.width, this.buffer.height);
            if (!this.cropperSettings.fileType)
                this.fileType = this.getDataUriMimeType(img.src);
            if (this.cropperSettings.minWithRelativeToResolution) {
                this.minWidth = (this.canvas.width * this.cropperSettings.minWidth / this.srcImage.width);
                this.minHeight = (this.canvas.height * this.cropperSettings.minHeight / this.srcImage.height);
            }
            this.updateClampBounds();
            this.canvasWidth = this.canvas.width;
            this.canvasHeight = this.canvas.height;
            var cropPosition = this.getCropPositionFromMarkers();
            this.setCropPosition(cropPosition);
        }
    };
    ImageCropper.prototype.updateCropPosition = function (cropBounds) {
        var cropPosition = this.getCropPositionFromBounds(cropBounds);
        this.setCropPosition(cropPosition);
    };
    ImageCropper.prototype.setCropPosition = function (cropPosition) {
        this.tl.setPosition(cropPosition[0].x, cropPosition[0].y);
        this.tr.setPosition(cropPosition[1].x, cropPosition[1].y);
        this.bl.setPosition(cropPosition[2].x, cropPosition[2].y);
        this.br.setPosition(cropPosition[3].x, cropPosition[3].y);
        this.center.setPosition(cropPosition[4].x, cropPosition[4].y);
        for (var _i = 0, cropPosition_1 = cropPosition; _i < cropPosition_1.length; _i++) {
            var position = cropPosition_1[_i];
            _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(position);
        }
        this.vertSquashRatio = ImageCropper.detectVerticalSquash(this.srcImage);
        this.draw(this.ctx);
        this.croppedImage = this.getCroppedImageHelper(false, this.cropWidth, this.cropHeight);
    };
    ImageCropper.prototype.getCropPositionFromMarkers = function () {
        var w = this.canvas.width;
        var h = this.canvas.height;
        var tlPos, trPos, blPos, brPos, center;
        var sourceAspect = this.srcImage.height / this.srcImage.width;
        var cropBounds = this.getBounds();
        var cropAspect = cropBounds.height / cropBounds.width;
        var cX = this.canvas.width / 2;
        var cY = this.canvas.height / 2;
        if (cropAspect > sourceAspect) {
            var imageH = Math.min(w * sourceAspect, h);
            var cropW = imageH / cropAspect;
            tlPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(cX - cropW / 2, cY + imageH / 2);
            trPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(cX + cropW / 2, cY + imageH / 2);
            blPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(cX - cropW / 2, cY - imageH / 2);
            brPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(cX + cropW / 2, cY - imageH / 2);
        }
        else {
            var imageW = Math.min(h / sourceAspect, w);
            var cropH = imageW * cropAspect;
            tlPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(cX - imageW / 2, cY + cropH / 2);
            trPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(cX + imageW / 2, cY + cropH / 2);
            blPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(cX - imageW / 2, cY - cropH / 2);
            brPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(cX + imageW / 2, cY - cropH / 2);
        }
        center = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(cX, cY);
        var positions = [tlPos, trPos, blPos, brPos, center];
        return positions;
    };
    ImageCropper.prototype.getCropPositionFromBounds = function (cropPosition) {
        var marginTop = 0;
        var marginLeft = 0;
        var canvasAspect = this.canvasHeight / this.canvasWidth;
        var sourceAspect = this.srcImage.height / this.srcImage.width;
        if (canvasAspect > sourceAspect) {
            marginTop = this.buffer.height / 2 - (this.canvasWidth * sourceAspect) / 2;
        }
        else {
            marginLeft = this.buffer.width / 2 - (this.canvasHeight / sourceAspect) / 2;
        }
        var ratioW = (this.canvasWidth - marginLeft * 2) / this.srcImage.width;
        var ratioH = (this.canvasHeight - marginTop * 2) / this.srcImage.height;
        var actualH = cropPosition.height * ratioH;
        var actualW = cropPosition.width * ratioW;
        var actualX = cropPosition.left * ratioW + marginLeft;
        var actualY = cropPosition.top * ratioH + marginTop;
        if (this.keepAspect) {
            var scaledW = actualH / this.aspectRatio;
            var scaledH = actualW * this.aspectRatio;
            if (this.getCropBounds().height === cropPosition.height) {
                actualH = scaledH;
            }
            else if (this.getCropBounds().width === cropPosition.width) {
                actualW = scaledW;
            }
            else {
                if (Math.abs(scaledH - actualH) < Math.abs(scaledW - actualW)) {
                    actualW = scaledW;
                }
                else {
                    actualH = scaledH;
                }
            }
        }
        var tlPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(actualX, actualY + actualH);
        var trPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(actualX + actualW, actualY + actualH);
        var blPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(actualX, actualY);
        var brPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(actualX + actualW, actualY);
        var center = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(actualX + actualW / 2, actualY + actualH / 2);
        var positions = [tlPos, trPos, blPos, brPos, center];
        return positions;
    };
    ImageCropper.prototype.getCroppedImageHelper = function (preserveSize, fillWidth, fillHeight) {
        if (this.cropperSettings.cropOnResize) {
            return this.getCroppedImage(preserveSize, fillWidth, fillHeight);
        }
        return this.croppedImage ? this.croppedImage : document.createElement('img');
    };
    // todo: Unused parameters?
    ImageCropper.prototype.getCroppedImage = function (preserveSize, fillWidth, fillHeight) {
        var bounds = this.getBounds();
        if (!this.srcImage) {
            return document.createElement('img');
        }
        else {
            var sourceAspect = this.srcImage.height / this.srcImage.width;
            var canvasAspect = this.canvas.height / this.canvas.width;
            var w = this.canvas.width;
            var h = this.canvas.height;
            if (canvasAspect > sourceAspect) {
                w = this.canvas.width;
                h = this.canvas.width * sourceAspect;
            }
            else {
                if (canvasAspect < sourceAspect) {
                    h = this.canvas.height;
                    w = this.canvas.height / sourceAspect;
                }
                else {
                    h = this.canvas.height;
                    w = this.canvas.width;
                }
            }
            this.ratioW = w / this.srcImage.width;
            this.ratioH = h / this.srcImage.height;
            var offsetH = (this.buffer.height - h) / 2 / this.ratioH;
            var offsetW = (this.buffer.width - w) / 2 / this.ratioW;
            var ctx = this.cropCanvas.getContext('2d');
            if (this.cropperSettings.preserveSize || preserveSize) {
                var width = Math.round(bounds.right / this.ratioW - bounds.left / this.ratioW);
                var height = Math.round(bounds.bottom / this.ratioH - bounds.top / this.ratioH);
                this.cropCanvas.width = width;
                this.cropCanvas.height = height;
                this.cropperSettings.croppedWidth = this.cropCanvas.width;
                this.cropperSettings.croppedHeight = this.cropCanvas.height;
            }
            else {
                this.cropCanvas.width = this.cropWidth;
                this.cropCanvas.height = this.cropHeight;
            }
            ctx.clearRect(0, 0, this.cropCanvas.width, this.cropCanvas.height);
            this.drawImageIOSFix(ctx, this.srcImage, Math.max(Math.round((bounds.left) / this.ratioW - offsetW), 0), Math.max(Math.round(bounds.top / this.ratioH - offsetH), 0), Math.max(Math.round(bounds.width / this.ratioW), 1), Math.max(Math.round(bounds.height / this.ratioH), 1), 0, 0, this.cropCanvas.width, this.cropCanvas.height);
            if (this.cropperSettings.resampleFn) {
                this.cropperSettings.resampleFn(this.cropCanvas);
            }
            this.croppedImage.width = this.cropCanvas.width;
            this.croppedImage.height = this.cropCanvas.height;
            this.croppedImage.src = this.cropCanvas.toDataURL(this.fileType, this.cropperSettings.compressRatio);
            return this.croppedImage;
        }
    };
    ImageCropper.prototype.getBounds = function () {
        var minX = Number.MAX_VALUE;
        var minY = Number.MAX_VALUE;
        var maxX = -Number.MAX_VALUE;
        var maxY = -Number.MAX_VALUE;
        for (var i = 0; i < this.markers.length; i++) {
            var marker = this.markers[i];
            if (marker.position.x < minX) {
                minX = marker.position.x;
            }
            if (marker.position.x > maxX) {
                maxX = marker.position.x;
            }
            if (marker.position.y < minY) {
                minY = marker.position.y;
            }
            if (marker.position.y > maxY) {
                maxY = marker.position.y;
            }
        }
        var bounds = new _model_bounds__WEBPACK_IMPORTED_MODULE_0__["Bounds"]();
        bounds.left = minX;
        bounds.right = maxX;
        bounds.top = minY;
        bounds.bottom = maxY;
        return bounds;
    };
    ImageCropper.prototype.setBounds = function (bounds) {
        var topLeft;
        var topRight;
        var bottomLeft;
        var bottomRight;
        var currentBounds = this.getBounds();
        for (var i = 0; i < this.markers.length; i++) {
            var marker = this.markers[i];
            if (marker.position.x === currentBounds.left) {
                if (marker.position.y === currentBounds.top) {
                    marker.setPosition(bounds.left, bounds.top);
                }
                else {
                    marker.setPosition(bounds.left, bounds.bottom);
                }
            }
            else {
                if (marker.position.y === currentBounds.top) {
                    marker.setPosition(bounds.right, bounds.top);
                }
                else {
                    marker.setPosition(bounds.right, bounds.bottom);
                }
            }
        }
        this.center.recalculatePosition(bounds);
        this.center.draw(this.ctx);
        this.draw(this.ctx); // we need to redraw all canvas if we have changed bounds
    };
    ImageCropper.prototype.onTouchMove = function (event) {
        if (this.crop.isImageSet()) {
            event.preventDefault();
            if (event.touches.length === 1) {
                for (var i = 0; i < event.touches.length; i++) {
                    var touch = event.touches[i];
                    var touchPosition = ImageCropper.getTouchPos(this.canvas, touch);
                    var cropTouch = new _model_cropTouch__WEBPACK_IMPORTED_MODULE_2__["CropTouch"](touchPosition.x, touchPosition.y, touch.identifier);
                    _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(touchPosition);
                    this.move(cropTouch);
                }
            }
            else {
                if (event.touches.length === 2) {
                    var distance = ((event.touches[0].clientX - event.touches[1].clientX) * (event.touches[0].clientX - event.touches[1].clientX)) + ((event.touches[0].clientY - event.touches[1].clientY) * (event.touches[0].clientY - event.touches[1].clientY));
                    if (this.previousDistance && this.previousDistance !== distance) {
                        var bounds = this.getBounds();
                        if (distance < this.previousDistance) {
                            bounds.top += 1;
                            bounds.left += 1;
                            bounds.right -= 1;
                            bounds.bottom -= 1;
                        }
                        if (distance > this.previousDistance) {
                            if (bounds.top !== this.minYClamp && bounds.bottom !== this.maxYClamp && bounds.left !== this.minXClamp && bounds.right !== this.maxXClamp) {
                                bounds.top -= 1;
                                bounds.left -= 1;
                                bounds.right += 1;
                                bounds.bottom += 1;
                            }
                            else if (bounds.top !== this.minYClamp && bounds.bottom !== this.maxYClamp && bounds.left === this.minXClamp && bounds.right !== this.maxXClamp) {
                                bounds.top -= 1;
                                bounds.right += 2;
                                bounds.bottom += 1;
                            }
                            else if (bounds.top !== this.minYClamp && bounds.bottom !== this.maxYClamp && bounds.left !== this.minXClamp && bounds.right === this.maxXClamp) {
                                bounds.top -= 1;
                                bounds.left -= 2;
                                bounds.bottom += 1;
                            }
                            else if (bounds.top === this.minYClamp && bounds.bottom !== this.maxYClamp && bounds.left !== this.minXClamp && bounds.right !== this.maxXClamp) {
                                bounds.left -= 1;
                                bounds.right += 1;
                                bounds.bottom += 2;
                            }
                            else if (bounds.top !== this.minYClamp && bounds.bottom === this.maxYClamp && bounds.left !== this.minXClamp && bounds.right !== this.maxXClamp) {
                                bounds.top -= 2;
                                bounds.left -= 1;
                                bounds.right += 1;
                            }
                            else if (bounds.top === this.minYClamp && bounds.bottom !== this.maxYClamp && bounds.left === this.minXClamp && bounds.right !== this.maxXClamp) {
                                bounds.right += 2;
                                bounds.bottom += 2;
                            }
                            else if (bounds.top === this.minYClamp && bounds.bottom !== this.maxYClamp && bounds.left !== this.minXClamp && bounds.right === this.maxXClamp) {
                                bounds.left -= 2;
                                bounds.bottom += 2;
                            }
                            else if (bounds.top !== this.minYClamp && bounds.bottom === this.maxYClamp && bounds.left === this.minXClamp && bounds.right !== this.maxXClamp) {
                                bounds.top -= 2;
                                bounds.right += 2;
                            }
                            else if (bounds.top !== this.minYClamp && bounds.bottom === this.maxYClamp && bounds.left !== this.minXClamp && bounds.right === this.maxXClamp) {
                                bounds.top -= 2;
                                bounds.left -= 2;
                            }
                        }
                        if (bounds.top < this.minYClamp)
                            bounds.top = this.minYClamp;
                        if (bounds.bottom > this.maxYClamp)
                            bounds.bottom = this.maxYClamp;
                        if (bounds.left < this.minXClamp)
                            bounds.left = this.minXClamp;
                        if (bounds.right > this.maxXClamp)
                            bounds.right = this.maxXClamp;
                        this.setBounds(bounds);
                    }
                    this.previousDistance = distance;
                }
            }
            this.draw(this.ctx);
        }
    };
    ImageCropper.prototype.onMouseMove = function (e) {
        if (this.crop.isImageSet() && this.isMouseDown) {
            var mousePosition = ImageCropper.getMousePos(this.canvas, e);
            this.move(new _model_cropTouch__WEBPACK_IMPORTED_MODULE_2__["CropTouch"](mousePosition.x, mousePosition.y, 0));
            var dragTouch = this.getDragTouchForID(0);
            if (dragTouch) {
                dragTouch.x = mousePosition.x;
                dragTouch.y = mousePosition.y;
            }
            else {
                dragTouch = new _model_cropTouch__WEBPACK_IMPORTED_MODULE_2__["CropTouch"](mousePosition.x, mousePosition.y, 0);
            }
            _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(mousePosition);
            this.drawCursors(dragTouch);
            this.draw(this.ctx);
        }
    };
    ImageCropper.prototype.move = function (cropTouch) {
        if (this.isMouseDown) {
            this.handleMove(cropTouch);
        }
    };
    ImageCropper.prototype.getDragTouchForID = function (id) {
        for (var i = 0; i < this.currentDragTouches.length; i++) {
            if (id === this.currentDragTouches[i].id) {
                return this.currentDragTouches[i];
            }
        }
        return undefined;
    };
    ImageCropper.prototype.drawCursors = function (cropTouch) {
        var cursorDrawn = false;
        if (cropTouch != null) {
            if (cropTouch.dragHandle === this.center) {
                _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setStyle(this.canvas, 'move');
                cursorDrawn = true;
            }
            if (cropTouch.dragHandle !== null && cropTouch.dragHandle instanceof _model_cornerMarker__WEBPACK_IMPORTED_MODULE_1__["CornerMarker"]) {
                this.drawCornerCursor(cropTouch.dragHandle, cropTouch.dragHandle.position.x, cropTouch.dragHandle.position.y);
                cursorDrawn = true;
            }
        }
        var didDraw = false;
        if (!cursorDrawn) {
            for (var i = 0; i < this.markers.length; i++) {
                didDraw = didDraw || this.drawCornerCursor(this.markers[i], cropTouch.x, cropTouch.y);
            }
            if (!didDraw) {
                _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setStyle(this.canvas, 'initial');
            }
        }
        if (!didDraw && !cursorDrawn && this.center.touchInBounds(cropTouch.x, cropTouch.y)) {
            this.center.setOver(true);
            _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setOver(this.canvas);
            _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setStyle(this.canvas, 'move');
        }
        else {
            this.center.setOver(false);
        }
    };
    ImageCropper.prototype.drawCornerCursor = function (marker, x, y) {
        if (marker.touchInBounds(x, y)) {
            marker.setOver(true);
            if (marker.getHorizontalNeighbour().position.x > marker.position.x) {
                if (marker.getVerticalNeighbour().position.y > marker.position.y) {
                    _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setOver(this.canvas);
                    _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setStyle(this.canvas, 'nwse-resize');
                }
                else {
                    _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setOver(this.canvas);
                    _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setStyle(this.canvas, 'nesw-resize');
                }
            }
            else {
                if (marker.getVerticalNeighbour().position.y > marker.position.y) {
                    _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setOver(this.canvas);
                    _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setStyle(this.canvas, 'nesw-resize');
                }
                else {
                    _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setOver(this.canvas);
                    _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setStyle(this.canvas, 'nwse-resize');
                }
            }
            return true;
        }
        marker.setOver(false);
        return false;
    };
    // todo: Unused param
    ImageCropper.prototype.onTouchStart = function (event) {
        if (this.crop.isImageSet()) {
            this.isMouseDown = true;
        }
    };
    ImageCropper.prototype.onTouchEnd = function (event) {
        if (this.crop.isImageSet()) {
            for (var i = 0; i < event.changedTouches.length; i++) {
                var touch = event.changedTouches[i];
                var dragTouch = this.getDragTouchForID(touch.identifier);
                if (dragTouch && dragTouch !== undefined) {
                    if (dragTouch.dragHandle instanceof _model_cornerMarker__WEBPACK_IMPORTED_MODULE_1__["CornerMarker"] || dragTouch.dragHandle instanceof _model_dragMarker__WEBPACK_IMPORTED_MODULE_3__["DragMarker"]) {
                        dragTouch.dragHandle.setOver(false);
                    }
                    this.handleRelease(dragTouch);
                }
            }
            if (this.currentDragTouches.length === 0) {
                this.isMouseDown = false;
                this.currentlyInteracting = false;
            }
        }
    };
    // http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
    ImageCropper.prototype.drawImageIOSFix = function (ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
        // Works only if whole image is displayed:
        // ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
        // The following works correct also when only a part of the image is displayed:
        // ctx.drawImage(img, sx * this.vertSquashRatio, sy * this.vertSquashRatio, sw * this.vertSquashRatio, sh *
        // this.vertSquashRatio, dx, dy, dw, dh);
        ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
    };
    ImageCropper.prototype.onMouseDown = function (event) {
        if (this.crop.isImageSet()) {
            this.isMouseDown = true;
        }
    };
    ImageCropper.prototype.onMouseUp = function (event) {
        if (this.crop.isImageSet()) {
            _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setReleased(this.canvas);
            this.isMouseDown = false;
            this.handleRelease(new _model_cropTouch__WEBPACK_IMPORTED_MODULE_2__["CropTouch"](0, 0, 0));
        }
    };
    return ImageCropper;
}(_model_imageCropperModel__WEBPACK_IMPORTED_MODULE_4__["ImageCropperModel"]));

//# sourceMappingURL=imageCropper.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/imageCropperComponent.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/imageCropperComponent.js ***!
  \*******************************************************************/
/*! exports provided: ImageCropperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperComponent", function() { return ImageCropperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _imageCropper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageCropper */ "./node_modules/ng2-img-cropper/src/imageCropper.js");
/* harmony import */ var _cropperSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cropperSettings */ "./node_modules/ng2-img-cropper/src/cropperSettings.js");
/* harmony import */ var _exif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exif */ "./node_modules/ng2-img-cropper/src/exif.js");
/* harmony import */ var _model_cropPosition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/cropPosition */ "./node_modules/ng2-img-cropper/src/model/cropPosition.js");





var ImageCropperComponent = (function () {
    function ImageCropperComponent(renderer) {
        this.cropPositionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.renderer = renderer;
    }
    ImageCropperComponent.prototype.ngAfterViewInit = function () {
        var canvas = this.cropcanvas.nativeElement;
        if (!this.settings) {
            this.settings = new _cropperSettings__WEBPACK_IMPORTED_MODULE_2__["CropperSettings"]();
        }
        this.renderer.setElementAttribute(canvas, 'class', this.settings.cropperClass);
        if (!this.settings.dynamicSizing) {
            this.renderer.setElementAttribute(canvas, 'width', this.settings.canvasWidth.toString());
            this.renderer.setElementAttribute(canvas, 'height', this.settings.canvasHeight.toString());
        }
        else {
            this.windowListener = this.resize.bind(this);
            window.addEventListener('resize', this.windowListener);
        }
        if (!this.cropper) {
            this.cropper = new _imageCropper__WEBPACK_IMPORTED_MODULE_1__["ImageCropper"](this.settings);
        }
        this.cropper.prepare(canvas);
    };
    ImageCropperComponent.prototype.ngOnChanges = function (changes) {
        if (this.isCropPositionChanged(changes)) {
            this.cropper.updateCropPosition(this.cropPosition.toBounds());
            if (this.cropper.isImageSet()) {
                var bounds = this.cropper.getCropBounds();
                this.image.image = this.cropper.getCroppedImageHelper().src;
                this.onCrop.emit(bounds);
            }
            this.updateCropBounds();
        }
        if (changes.inputImage) {
            this.setImage(changes.inputImage.currentValue);
        }
    };
    ImageCropperComponent.prototype.ngOnDestroy = function () {
        if (this.settings.dynamicSizing && this.windowListener) {
            window.removeEventListener('resize', this.windowListener);
        }
    };
    ImageCropperComponent.prototype.onTouchMove = function (event) {
        this.cropper.onTouchMove(event);
    };
    ImageCropperComponent.prototype.onTouchStart = function (event) {
        this.cropper.onTouchStart(event);
    };
    ImageCropperComponent.prototype.onTouchEnd = function (event) {
        this.cropper.onTouchEnd(event);
        if (this.cropper.isImageSet()) {
            this.image.image = this.cropper.getCroppedImageHelper().src;
            this.onCrop.emit(this.cropper.getCropBounds());
            this.updateCropBounds();
        }
    };
    ImageCropperComponent.prototype.onMouseDown = function (event) {
        this.cropper.onMouseDown(event);
    };
    ImageCropperComponent.prototype.onMouseUp = function (event) {
        if (this.cropper.isImageSet()) {
            this.cropper.onMouseUp(event);
            this.image.image = this.cropper.getCroppedImageHelper().src;
            this.onCrop.emit(this.cropper.getCropBounds());
            this.updateCropBounds();
        }
    };
    ImageCropperComponent.prototype.onMouseMove = function (event) {
        this.cropper.onMouseMove(event);
    };
    ImageCropperComponent.prototype.fileChangeListener = function ($event) {
        if ($event.target.files.length === 0)
            return;
        var file = $event.target.files[0];
        if (this.settings.allowedFilesRegex.test(file.name)) {
            var image_1 = new Image();
            var fileReader = new FileReader();
            var that_1 = this;
            fileReader.addEventListener('loadend', function (loadEvent) {
                image_1.addEventListener('load', function () {
                    that_1.setImage(image_1);
                });
                image_1.src = loadEvent.target.result;
            });
            fileReader.readAsDataURL(file);
        }
    };
    ImageCropperComponent.prototype.resize = function () {
        var canvas = this.cropcanvas.nativeElement;
        this.settings.canvasWidth = canvas.offsetWidth;
        this.settings.canvasHeight = canvas.offsetHeight;
        this.cropper.resizeCanvas(canvas.offsetWidth, canvas.offsetHeight, true);
    };
    ImageCropperComponent.prototype.reset = function () {
        this.cropper.reset();
        this.renderer.setElementAttribute(this.cropcanvas.nativeElement, 'class', this.settings.cropperClass);
        this.image.image = this.cropper.getCroppedImageHelper().src;
    };
    ImageCropperComponent.prototype.setImage = function (image, newBounds) {
        var _this = this;
        if (newBounds === void 0) { newBounds = null; }
        var self = this;
        this.renderer.setElementAttribute(this.cropcanvas.nativeElement, 'class', this.settings.cropperClass + " " + this.settings.croppingClass);
        this.raf = window.requestAnimationFrame(function () {
            if (self.raf) {
                window.cancelAnimationFrame(self.raf);
            }
            if (image.naturalHeight > 0 && image.naturalWidth > 0) {
                image.height = image.naturalHeight;
                image.width = image.naturalWidth;
                window.cancelAnimationFrame(self.raf);
                self.getOrientedImage(image, function (img) {
                    if (_this.settings.dynamicSizing) {
                        var canvas = _this.cropcanvas.nativeElement;
                        _this.settings.canvasWidth = canvas.offsetWidth;
                        _this.settings.canvasHeight = canvas.offsetHeight;
                        _this.cropper.resizeCanvas(canvas.offsetWidth, canvas.offsetHeight, false);
                    }
                    self.cropper.setImage(img);
                    if (self.cropPosition && self.cropPosition.isInitialized()) {
                        self.cropper.updateCropPosition(self.cropPosition.toBounds());
                    }
                    self.image.original = img;
                    var bounds = self.cropper.getCropBounds();
                    self.image.image = self.cropper.getCroppedImageHelper().src;
                    if (newBounds != null) {
                        bounds = newBounds;
                        self.cropper.setBounds(bounds);
                        _this.cropper.updateCropPosition(bounds);
                    }
                    self.onCrop.emit(bounds);
                });
            }
        });
    };
    ImageCropperComponent.prototype.isCropPositionChanged = function (changes) {
        if (this.cropper && changes['cropPosition'] && this.isCropPositionUpdateNeeded) {
            return true;
        }
        else {
            this.isCropPositionUpdateNeeded = true;
            return false;
        }
    };
    ImageCropperComponent.prototype.updateCropBounds = function () {
        var cropBound = this.cropper.getCropBounds();
        this.cropPositionChange.emit(new _model_cropPosition__WEBPACK_IMPORTED_MODULE_4__["CropPosition"](cropBound.left, cropBound.top, cropBound.width, cropBound.height));
        this.isCropPositionUpdateNeeded = false;
    };
    ImageCropperComponent.prototype.getOrientedImage = function (image, callback) {
        var img;
        _exif__WEBPACK_IMPORTED_MODULE_3__["Exif"].getData(image, function () {
            var orientation = _exif__WEBPACK_IMPORTED_MODULE_3__["Exif"].getTag(image, 'Orientation');
            if ([3, 6, 8].indexOf(orientation) > -1) {
                var canvas = document.createElement('canvas'), ctx = canvas.getContext('2d'), cw = image.width, ch = image.height, cx = 0, cy = 0, deg = 0;
                switch (orientation) {
                    case 3:
                        cx = -image.width;
                        cy = -image.height;
                        deg = 180;
                        break;
                    case 6:
                        cw = image.height;
                        ch = image.width;
                        cy = -image.height;
                        deg = 90;
                        break;
                    case 8:
                        cw = image.height;
                        ch = image.width;
                        cx = -image.width;
                        deg = 270;
                        break;
                    default:
                        break;
                }
                canvas.width = cw;
                canvas.height = ch;
                ctx.rotate(deg * Math.PI / 180);
                ctx.drawImage(image, cx, cy);
                img = document.createElement('img');
                img.width = cw;
                img.height = ch;
                img.addEventListener('load', function () {
                    callback(img);
                });
                img.src = canvas.toDataURL('image/png');
            }
            else {
                img = image;
                callback(img);
            }
        });
    };
    ImageCropperComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'img-cropper',
                    template: "\n        <span class=\"ng2-imgcrop\">\n          <input *ngIf=\"!settings.noFileInput\" type=\"file\" accept=\"image/*\" (change)=\"fileChangeListener($event)\">\n          <canvas #cropcanvas\n                  (mousedown)=\"onMouseDown($event)\"\n                  (mouseup)=\"onMouseUp($event)\"\n                  (mousemove)=\"onMouseMove($event)\"\n                  (mouseleave)=\"onMouseUp($event)\"\n                  (touchmove)=\"onTouchMove($event)\"\n                  (touchend)=\"onTouchEnd($event)\"\n                  (touchstart)=\"onTouchStart($event)\">\n          </canvas>\n        </span>\n      "
                },] },
    ];
    /** @nocollapse */
    ImageCropperComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], },
    ]; };
    ImageCropperComponent.propDecorators = {
        'cropcanvas': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['cropcanvas', undefined,] },],
        'settings': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['settings',] },],
        'image': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['image',] },],
        'inputImage': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['inputImage',] },],
        'cropper': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'cropPosition': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'cropPositionChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'onCrop': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ImageCropperComponent;
}());

//# sourceMappingURL=imageCropperComponent.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/imageCropperDataShare.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/imageCropperDataShare.js ***!
  \*******************************************************************/
/*! exports provided: ImageCropperDataShare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperDataShare", function() { return ImageCropperDataShare; });
var ImageCropperDataShare = (function () {
    function ImageCropperDataShare() {
    }
    ImageCropperDataShare.setPressed = function (canvas) {
        this.pressed = canvas;
    };
    ;
    ImageCropperDataShare.setReleased = function (canvas) {
        if (canvas === this.pressed) {
            //  this.pressed = undefined;
        }
    };
    ;
    ImageCropperDataShare.setOver = function (canvas) {
        this.over = canvas;
    };
    ;
    ImageCropperDataShare.setStyle = function (canvas, style) {
        if (this.pressed !== undefined) {
            if (this.pressed === canvas) {
                // TODO: check this
                // angular.element(document.documentElement).css('cursor', style);
            }
        }
        else {
            if (canvas === this.over) {
                // TODO: check this
                // angular.element(document.documentElement).css('cursor', style);
            }
        }
    };
    ;
    ImageCropperDataShare.share = {};
    return ImageCropperDataShare;
}());

//# sourceMappingURL=imageCropperDataShare.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/imageCropperModule.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/imageCropperModule.js ***!
  \****************************************************************/
/*! exports provided: ImageCropperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperModule", function() { return ImageCropperModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _imageCropperComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageCropperComponent */ "./node_modules/ng2-img-cropper/src/imageCropperComponent.js");



var ImageCropperModule = (function () {
    function ImageCropperModule() {
    }
    ImageCropperModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                    declarations: [_imageCropperComponent__WEBPACK_IMPORTED_MODULE_2__["ImageCropperComponent"]],
                    exports: [_imageCropperComponent__WEBPACK_IMPORTED_MODULE_2__["ImageCropperComponent"]]
                },] },
    ];
    /** @nocollapse */
    ImageCropperModule.ctorParameters = function () { return []; };
    return ImageCropperModule;
}());

//# sourceMappingURL=imageCropperModule.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/model/bounds.js":
/*!**********************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/model/bounds.js ***!
  \**********************************************************/
/*! exports provided: Bounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bounds", function() { return Bounds; });
/* harmony import */ var _pointPool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pointPool */ "./node_modules/ng2-img-cropper/src/model/pointPool.js");

var Bounds = (function () {
    function Bounds(x, y, width, height) {
        if (x === void 0) {
            x = 0;
        }
        if (y === void 0) {
            y = 0;
        }
        if (width === void 0) {
            width = 0;
        }
        if (height === void 0) {
            height = 0;
        }
        this.left = x;
        this.right = x + width;
        this.top = y;
        this.bottom = y + height;
    }
    Object.defineProperty(Bounds.prototype, "width", {
        get: function () {
            return this.right - this.left;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Bounds.prototype, "height", {
        get: function () {
            return this.bottom - this.top;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Bounds.prototype.getCentre = function () {
        var w = this.width;
        var h = this.height;
        return _pointPool__WEBPACK_IMPORTED_MODULE_0__["PointPool"].instance.borrow(this.left + (w / 2), this.top + (h / 2));
    };
    ;
    return Bounds;
}());

//# sourceMappingURL=bounds.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/model/cornerMarker.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/model/cornerMarker.js ***!
  \****************************************************************/
/*! exports provided: CornerMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerMarker", function() { return CornerMarker; });
/* harmony import */ var _handle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handle */ "./node_modules/ng2-img-cropper/src/model/handle.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CornerMarker = (function (_super) {
    __extends(CornerMarker, _super);
    function CornerMarker(x, y, radius, cropperSettings) {
        return _super.call(this, x, y, radius, cropperSettings) || this;
    }
    CornerMarker.prototype.drawCornerBorder = function (ctx) {
        var sideLength = 10;
        if (this.over || this.drag) {
            sideLength = 12;
        }
        var hDirection = 1;
        var vDirection = 1;
        if (this.horizontalNeighbour.position.x < this.position.x) {
            hDirection = -1;
        }
        if (this.verticalNeighbour.position.y < this.position.y) {
            vDirection = -1;
        }
        if (this.cropperSettings.rounded) {
            var width = this.position.x - this.horizontalNeighbour.position.x;
            var height = this.position.y - this.verticalNeighbour.position.y;
            var offX = Math.round(Math.sin(Math.PI / 2) * Math.abs(width / 2)) / 4;
            var offY = Math.round(Math.sin(Math.PI / 2) * Math.abs(height / 2)) / 4;
            this.offset.x = hDirection > 0 ? offX : -offX;
            this.offset.y = vDirection > 0 ? offY : -offY;
        }
        else {
            this.offset.x = 0;
            this.offset.y = 0;
        }
        ctx.beginPath();
        ctx.lineJoin = 'miter';
        ctx.moveTo(this.position.x + this.offset.x, this.position.y + this.offset.y);
        ctx.lineTo(this.position.x + this.offset.x + (sideLength * hDirection), this.position.y + this.offset.y);
        ctx.lineTo(this.position.x + this.offset.x + (sideLength * hDirection), this.position.y + this.offset.y +
            (sideLength * vDirection));
        ctx.lineTo(this.position.x + this.offset.x, this.position.y + this.offset.y + (sideLength * vDirection));
        ctx.lineTo(this.position.x + this.offset.x, this.position.y + this.offset.y);
        ctx.closePath();
        ctx.lineWidth = this.cropperSettings.cropperDrawSettings.strokeWidth;
        ctx.strokeStyle = this.cropperSettings.cropperDrawSettings.strokeColor;
        ctx.stroke();
    };
    CornerMarker.prototype.drawCornerFill = function (ctx) {
        var sideLength = 10;
        if (this.over || this.drag) {
            sideLength = 12;
        }
        var hDirection = 1;
        var vDirection = 1;
        if (this.horizontalNeighbour.position.x < this.position.x) {
            hDirection = -1;
        }
        if (this.verticalNeighbour.position.y < this.position.y) {
            vDirection = -1;
        }
        ctx.beginPath();
        ctx.moveTo(this.position.x + this.offset.x, this.position.y + this.offset.y);
        ctx.lineTo(this.position.x + this.offset.x + (sideLength * hDirection), this.position.y + this.offset.y);
        ctx.lineTo(this.position.x + this.offset.x + (sideLength * hDirection), this.position.y + this.offset.y +
            (sideLength * vDirection));
        ctx.lineTo(this.position.x + this.offset.x, this.position.y + this.offset.y + (sideLength * vDirection));
        ctx.lineTo(this.position.x + this.offset.x, this.position.y + this.offset.y);
        ctx.closePath();
        ctx.fillStyle = 'rgba(255,255,255,.7)';
        ctx.fill();
    };
    CornerMarker.prototype.moveX = function (x) {
        this.setPosition(x, this.position.y);
    };
    CornerMarker.prototype.moveY = function (y) {
        this.setPosition(this.position.x, y);
    };
    CornerMarker.prototype.move = function (x, y) {
        this.setPosition(x, y);
        this.verticalNeighbour.moveX(x);
        this.horizontalNeighbour.moveY(y);
    };
    CornerMarker.prototype.addHorizontalNeighbour = function (neighbour) {
        this.horizontalNeighbour = neighbour;
    };
    CornerMarker.prototype.addVerticalNeighbour = function (neighbour) {
        this.verticalNeighbour = neighbour;
    };
    CornerMarker.prototype.getHorizontalNeighbour = function () {
        return this.horizontalNeighbour;
    };
    CornerMarker.prototype.getVerticalNeighbour = function () {
        return this.verticalNeighbour;
    };
    CornerMarker.prototype.draw = function (ctx) {
        this.drawCornerFill(ctx);
        this.drawCornerBorder(ctx);
    };
    return CornerMarker;
}(_handle__WEBPACK_IMPORTED_MODULE_0__["Handle"]));

//# sourceMappingURL=cornerMarker.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/model/cropPosition.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/model/cropPosition.js ***!
  \****************************************************************/
/*! exports provided: CropPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropPosition", function() { return CropPosition; });
/* harmony import */ var _bounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bounds */ "./node_modules/ng2-img-cropper/src/model/bounds.js");

var CropPosition = (function () {
    function CropPosition(x, y, w, h) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (w === void 0) { w = 0; }
        if (h === void 0) { h = 0; }
        this.x = +x;
        this.y = +y;
        this.w = +w;
        this.h = +h;
    }
    CropPosition.prototype.toBounds = function () {
        return new _bounds__WEBPACK_IMPORTED_MODULE_0__["Bounds"](this.x, this.y, this.w, this.h);
    };
    CropPosition.prototype.isInitialized = function () {
        return this.x !== 0 && this.y !== 0 && this.w !== 0 && this.h !== 0;
    };
    return CropPosition;
}());

//# sourceMappingURL=cropPosition.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/model/cropTouch.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/model/cropTouch.js ***!
  \*************************************************************/
/*! exports provided: CropTouch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropTouch", function() { return CropTouch; });
var CropTouch = (function () {
    function CropTouch(x, y, id) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (id === void 0) { id = 0; }
        this.id = id;
        this.x = x;
        this.y = y;
    }
    return CropTouch;
}());

//# sourceMappingURL=cropTouch.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/model/dragMarker.js":
/*!**************************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/model/dragMarker.js ***!
  \**************************************************************/
/*! exports provided: DragMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragMarker", function() { return DragMarker; });
/* harmony import */ var _handle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handle */ "./node_modules/ng2-img-cropper/src/model/handle.js");
/* harmony import */ var _pointPool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pointPool */ "./node_modules/ng2-img-cropper/src/model/pointPool.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var DragMarker = (function (_super) {
    __extends(DragMarker, _super);
    function DragMarker(x, y, radius, cropperSettings) {
        var _this = _super.call(this, x, y, radius, cropperSettings) || this;
        _this.iconPoints = [];
        _this.scaledIconPoints = [];
        _this.getDragIconPoints(_this.iconPoints, 1);
        _this.getDragIconPoints(_this.scaledIconPoints, 1.2);
        return _this;
    }
    DragMarker.prototype.draw = function (ctx) {
        if (this.over || this.drag) {
            this.drawIcon(ctx, this.scaledIconPoints);
        }
        else {
            this.drawIcon(ctx, this.iconPoints);
        }
    };
    DragMarker.prototype.getDragIconPoints = function (arr, scale) {
        var maxLength = 17 * scale;
        var arrowWidth = 14 * scale;
        var arrowLength = 8 * scale;
        var connectorThroat = 4 * scale;
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-connectorThroat / 2, maxLength - arrowLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-arrowWidth / 2, maxLength - arrowLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(0, maxLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(arrowWidth / 2, maxLength - arrowLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(connectorThroat / 2, maxLength - arrowLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(connectorThroat / 2, connectorThroat / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(maxLength - arrowLength, connectorThroat / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(maxLength - arrowLength, arrowWidth / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(maxLength, 0));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(maxLength - arrowLength, -arrowWidth / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(maxLength - arrowLength, -connectorThroat / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(connectorThroat / 2, -connectorThroat / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(connectorThroat / 2, -maxLength + arrowLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(arrowWidth / 2, -maxLength + arrowLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(0, -maxLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-arrowWidth / 2, -maxLength + arrowLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-connectorThroat / 2, -maxLength + arrowLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-connectorThroat / 2, -connectorThroat / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-maxLength + arrowLength, -connectorThroat / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-maxLength + arrowLength, -arrowWidth / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-maxLength, 0));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-maxLength + arrowLength, arrowWidth / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-maxLength + arrowLength, connectorThroat / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-connectorThroat / 2, connectorThroat / 2));
    };
    DragMarker.prototype.drawIcon = function (ctx, points) {
        ctx.beginPath();
        ctx.moveTo(points[0].x + this.position.x, points[0].y + this.position.y);
        for (var k = 0; k < points.length; k++) {
            var p = points[k];
            ctx.lineTo(p.x + this.position.x, p.y + this.position.y);
        }
        ctx.closePath();
        ctx.fillStyle = this.cropperSettings.cropperDrawSettings.dragIconFillColor;
        ctx.fill();
        ctx.lineWidth = this.cropperSettings.cropperDrawSettings.dragIconStrokeWidth;
        ctx.strokeStyle = this.cropperSettings.cropperDrawSettings.dragIconStrokeColor;
        ctx.stroke();
    };
    DragMarker.prototype.recalculatePosition = function (bounds) {
        var c = bounds.getCentre();
        this.setPosition(c.x, c.y);
        _pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.returnPoint(c);
    };
    return DragMarker;
}(_handle__WEBPACK_IMPORTED_MODULE_0__["Handle"]));

//# sourceMappingURL=dragMarker.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/model/handle.js":
/*!**********************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/model/handle.js ***!
  \**********************************************************/
/*! exports provided: Handle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Handle", function() { return Handle; });
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ "./node_modules/ng2-img-cropper/src/model/point.js");
/* harmony import */ var _cropperSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cropperSettings */ "./node_modules/ng2-img-cropper/src/cropperSettings.js");


var Handle = (function () {
    function Handle(x, y, radius, settings) {
        this.cropperSettings = new _cropperSettings__WEBPACK_IMPORTED_MODULE_1__["CropperSettings"]();
        this.over = false;
        this.drag = false;
        this._position = new _point__WEBPACK_IMPORTED_MODULE_0__["Point"](x, y);
        this.offset = new _point__WEBPACK_IMPORTED_MODULE_0__["Point"](0, 0);
        this.radius = radius;
        this.cropperSettings = settings;
    }
    Handle.prototype.setDrag = function (value) {
        this.drag = value;
        this.setOver(value);
    };
    Handle.prototype.draw = function (ctx) {
        // this should't be empty
    };
    Handle.prototype.setOver = function (over) {
        this.over = over;
    };
    Handle.prototype.touchInBounds = function (x, y) {
        return (x > this.position.x - this.radius + this.offset.x) &&
            (x < this.position.x + this.radius + this.offset.x) &&
            (y > this.position.y - this.radius + this.offset.y) &&
            (y < this.position.y + this.radius + this.offset.y);
    };
    Object.defineProperty(Handle.prototype, "position", {
        get: function () {
            return this._position;
        },
        enumerable: true,
        configurable: true
    });
    Handle.prototype.setPosition = function (x, y) {
        this._position.x = x;
        this._position.y = y;
    };
    return Handle;
}());

//# sourceMappingURL=handle.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/model/imageCropperModel.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/model/imageCropperModel.js ***!
  \*********************************************************************/
/*! exports provided: ImageCropperModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperModel", function() { return ImageCropperModel; });
var ImageCropperModel = (function () {
    function ImageCropperModel() {
    }
    return ImageCropperModel;
}());

//# sourceMappingURL=imageCropperModel.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/model/point.js":
/*!*********************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/model/point.js ***!
  \*********************************************************/
/*! exports provided: Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
var Point = (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Point.prototype, "next", {
        get: function () {
            return this._next;
        },
        set: function (p) {
            this._next = p;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "prev", {
        get: function () {
            return this._prev;
        },
        set: function (p) {
            this._prev = p;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());

//# sourceMappingURL=point.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/model/pointPool.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/model/pointPool.js ***!
  \*************************************************************/
/*! exports provided: PointPool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointPool", function() { return PointPool; });
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ "./node_modules/ng2-img-cropper/src/model/point.js");

var PointPool = (function () {
    function PointPool(initialSize) {
        PointPool._instance = this;
        var prev = this.firstAvailable = new _point__WEBPACK_IMPORTED_MODULE_0__["Point"]();
        for (var i = 1; i < initialSize; i++) {
            var p = new _point__WEBPACK_IMPORTED_MODULE_0__["Point"]();
            prev.next = p;
            prev = p;
        }
    }
    Object.defineProperty(PointPool, "instance", {
        get: function () {
            return PointPool._instance;
        },
        enumerable: true,
        configurable: true
    });
    PointPool.prototype.borrow = function (x, y) {
        if (this.firstAvailable == null) {
            throw 'Pool exhausted';
        }
        this.borrowed++;
        var p = this.firstAvailable;
        this.firstAvailable = p.next;
        p.x = x;
        p.y = y;
        return p;
    };
    ;
    PointPool.prototype.returnPoint = function (p) {
        this.borrowed--;
        p.x = 0;
        p.y = 0;
        p.next = this.firstAvailable;
        this.firstAvailable = p;
    };
    ;
    return PointPool;
}());

//# sourceMappingURL=pointPool.js.map

/***/ }),

/***/ "./src/app/marketing/marketing.component.css":
/*!***************************************************!*\
  !*** ./src/app/marketing/marketing.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[nz-carousel-content] {\r\n    text-align: center;\r\n    height: 160px;\r\n    line-height: 160px;\r\n    background: #364d79;\r\n    color: #fff;\r\n    overflow: hidden;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFya2V0aW5nL21hcmtldGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9tYXJrZXRpbmcvbWFya2V0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJbbnotY2Fyb3VzZWwtY29udGVudF0ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNjBweDtcclxuICAgIGJhY2tncm91bmQ6ICMzNjRkNzk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/marketing/marketing.component.html":
/*!****************************************************!*\
  !*** ./src/app/marketing/marketing.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-tabset>\r\n  <nz-tab (nzClick)=\"ontabclicking(3)\" nzTitle=\"Big Banners\">\r\n\r\n  </nz-tab>\r\n  <nz-tab (nzClick)=\"ontabclicking(1)\" nzTitle=\"Small Banners\">\r\n\r\n  </nz-tab>\r\n  <nz-tab (nzClick)=\"ontabclicking(2)\" nzTitle=\"Small Icons\">\r\n\r\n  </nz-tab>\r\n</nz-tabset>\r\n<div nz-row class=\"row\" style=\"text-align: right\">\r\n  <button nz-button nzType=\"primary\" (click)=\"onAddImage()\">Add Image</button>\r\n</div>\r\n<!-- <div *ngIf=\"!isImageAdding\">\r\n  <div class=\"clearfix\">\r\n    <nz-upload nzListType=\"picture-card\"  [nzRemove]=\"onRemove\" class=\"upload-list-inline\" nzDisabled=\"false\" nzShowButton=\"true\"\r\n      [(nzFileList)]=\"bigBannersimages\">\r\n      <button nz-button>\r\n        <i nz-icon nzType=\"edit\" style=\"cursor: pointer;color: blue; font-size: 18px;\"\r\n        (click)=\"EditImage()\" nzTheme=\"outline\"></i>&nbsp;\r\n      </button>\r\n    </nz-upload>\r\n   \r\n  </div>\r\n</div>  -->\r\n\r\n<div nz-row *ngIf=\"!isImageAdding && !isImageEditing\" style=\"margin-top: 10px;\">\r\n  <nz-card>\r\n  <div nz-col >\r\n    <nz-table #basicTable  nzShowPagination=\"false\" [nzData]=\"marketingList\">\r\n      <thead>\r\n        <tr>\r\n          <th>SNo</th>\r\n          <th>Banner Image</th>\r\n          <th></th>\r\n          <!-- <th>Admin Permision</th> -->\r\n         \r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let data of marketingList\">\r\n          <td>{{ data.SNo }}</td>\r\n          <td>\r\n            <a target=\"_blank\"\r\n            [attr.href]=\"data.ImageData.ImageOriginal\">Clic To View</a>\r\n          </td>\r\n          <!-- <td>\r\n            <i nz-icon nzType=\"edit\" style=\"cursor: pointer;color: blue; font-size: 180px;\"\r\n              (click)=\"EditImage(data)\" nzTheme=\"outline\"></i>&nbsp;\r\n          </td> -->\r\n          <td>\r\n            <i nz-icon type=\"edit\" theme=\"outline\" (click)=\"EditImage(data)\"></i>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </nz-table>\r\n\r\n  </div>\r\n</nz-card>\r\n  <!-- <nz-pagination nzHideOnSinglePage=\"true\" (nzPageIndexChange)=\"onNextPage($event)\" [nzPageSize]=\"limit\" [nzPageIndex]=\"currentPage\"\r\n    [nzTotal]=\"TotalItems\"></nz-pagination> -->\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div *ngIf=\"isImageAdding\">\r\n  <!-- <div class=\"file-upload\">\r\n    <span class=\"text\">upload</span>\r\n    <input id=\"custom-input\" type=\"file\" (change)=\"fileChangeListener($event)\">\r\n  </div> -->\r\n  <div nz-row class=\"row\" style=\"margin-bottom: 10px;\">\r\n    <div nz-col nzSpan=\"6\">\r\n      <input type=\"text\" nz-input [(ngModel)]=\"serialNumber\"\r\n       placeholder=\"SNo\">\r\n    </div>\r\n  </div>\r\n  <div nz-row class=\"row\">\r\n    <div nz-col nzSpan=\"20\" *ngIf=\"ResourceType==1\">\r\n      <p><b>Image Size (Width X height) </b>:{{cropperSettings.croppedWidth}} X {{cropperSettings.croppedHeight}}</p>\r\n      <img-cropper #cropper [image]=\"data\" [settings]=\"cropperSettings\"></img-cropper>\r\n    </div>\r\n    <div nz-col nzSpan=\"20\" *ngIf=\"ResourceType==2\">\r\n        <p><b>Image Size (Width X height) </b>:{{SmalliconsImageSettings.croppedWidth}} X {{SmalliconsImageSettings.croppedHeight}}</p>\r\n        <img-cropper #cropperSmallIcons [image]=\"SmalliconsImageData\" [settings]=\"SmalliconsImageSettings\"></img-cropper>\r\n      </div>\r\n      <div nz-col nzSpan=\"20\" *ngIf=\"ResourceType==3\">\r\n          <p><b>Image Size (Width X height) </b>:{{BigBannersImageSettings.croppedWidth}} X {{BigBannersImageSettings.croppedHeight}}</p>\r\n          <img-cropper #cropperbigganner [image]=\"BigBannersData\" [settings]=\"BigBannersImageSettings\"></img-cropper>\r\n        </div>\r\n  </div>\r\n  <div nz-row  [nzGutter]=\"8\" class=\"row\">\r\n    <!-- <div nz-col nzSpan=\"20\" *ngIf=\"ResourceType==1\">\r\n      <span class=\"result rounded\" *ngIf=\"data.image\">\r\n        <img [src]=\"data.image\" [width]=\"cropperSettings.croppedWidth\" [height]=\"cropperSettings.croppedHeight\">\r\n      </span>\r\n    </div>\r\n    <div nz-col nzSpan=\"20\" *ngIf=\"ResourceType==2\">\r\n        <span class=\"result rounded\" *ngIf=\"SmalliconsImageData.image\">\r\n          <img [src]=\"SmalliconsImageData.image\" [width]=\"SmalliconsImageSettings.croppedWidth\" [height]=\"SmalliconsImageSettings.croppedHeight\">\r\n        </span>\r\n      </div>\r\n      <div nz-col nzSpan=\"20\" *ngIf=\"ResourceType==3\">\r\n          <span class=\"result rounded\" *ngIf=\"BigBannersData.image\">\r\n            <img [src]=\"BigBannersData.image\" [width]=\"BigBannersImageSettings.croppedWidth\" [height]=\"BigBannersImageSettings.croppedHeight\">\r\n          </span>\r\n        </div> -->\r\n    <div nz-col nzSpan=\"2\">\r\n      <button nz-button nzType=\"primary\"  *ngIf=\"data.image || SmalliconsImageData.image || BigBannersData.image\" (click)=\"getFIle()\">Submit</button>\r\n    </div>\r\n    <div nz-col nzSpan=\"2\">\r\n        <button nz-button nzType=\"primary\"  *ngIf=\"data.image || SmalliconsImageData.image || BigBannersData.image\" (click)=\"onViewImages()\">View Images</button>\r\n      </div>\r\n  </div>\r\n\r\n</div>\r\n<div *ngIf=\"isImageEditing\">\r\n  <!-- <div class=\"file-upload\">\r\n    <span class=\"text\">upload</span>\r\n    <input id=\"custom-input\" type=\"file\" (change)=\"fileChangeListener($event)\">\r\n  </div> -->\r\n  <div nz-row [nzGutter]=\"16\" class=\"row\" style=\"margin-bottom: 10px;\">\r\n    <div nz-col nzSpan=\"6\">\r\n      <input type=\"text\" nz-input [(ngModel)]=\"serialNumber\"\r\n       placeholder=\"SNo\">\r\n    </div>\r\n    <div nz-col nzSpan=\"6\">\r\n      <p></p>\r\n      <a target=\"_blank\" [attr.href]=\"this.selectedRecord.ImageData.ImageOriginal\">Click to View Existed Image</a>\r\n    </div>\r\n  </div>\r\n  <div nz-row class=\"row\">\r\n    <div nz-col nzSpan=\"20\" *ngIf=\"ResourceType==1\">\r\n      <p><b>Image Size (Width X height) </b>:{{cropperSettings.croppedWidth}} X {{cropperSettings.croppedHeight}}</p>\r\n      <img-cropper #cropper  [image]=\"data\" [settings]=\"cropperSettings\"></img-cropper>\r\n    </div>\r\n    <div nz-col nzSpan=\"20\" *ngIf=\"ResourceType==2\">\r\n        <p><b>Image Size (Width X height) </b>:{{SmalliconsImageSettings.croppedWidth}} X {{SmalliconsImageSettings.croppedHeight}}</p>\r\n        <img-cropper #cropperSmallIcons [image]=\"SmalliconsImageData\" [settings]=\"SmalliconsImageSettings\"></img-cropper>\r\n      </div>\r\n      <div nz-col nzSpan=\"20\" *ngIf=\"ResourceType==3\">\r\n          <p><b>Image Size (Width X height) </b>:{{BigBannersImageSettings.croppedWidth}} X {{BigBannersImageSettings.croppedHeight}}</p>\r\n          <img-cropper #cropperbigganner [image]=\"BigBannersData\" [settings]=\"BigBannersImageSettings\"></img-cropper>\r\n        </div>\r\n  </div>\r\n  <div nz-row  [nzGutter]=\"8\" class=\"row\">\r\n    <div nz-col nzSpan=\"20\" *ngIf=\"ResourceType==1\">\r\n      <span class=\"result rounded\" *ngIf=\"data.image\">\r\n        <img [src]=\"data.image\" [width]=\"cropperSettings.croppedWidth\" [height]=\"cropperSettings.croppedHeight\">\r\n      </span>\r\n    </div>\r\n    <div nz-col nzSpan=\"20\" *ngIf=\"ResourceType==2\">\r\n        <span class=\"result rounded\" *ngIf=\"SmalliconsImageData.image\">\r\n          <img [src]=\"SmalliconsImageData.image\" [width]=\"SmalliconsImageSettings.croppedWidth\" [height]=\"SmalliconsImageSettings.croppedHeight\">\r\n        </span>\r\n      </div>\r\n      <div nz-col nzSpan=\"20\" *ngIf=\"ResourceType==3\">\r\n          <span class=\"result rounded\" *ngIf=\"BigBannersData.image\">\r\n            <img [src]=\"BigBannersData.image\" [width]=\"BigBannersImageSettings.croppedWidth\" [height]=\"BigBannersImageSettings.croppedHeight\">\r\n          </span>\r\n        </div>\r\n    <div nz-col nzSpan=\"2\">\r\n      <button nz-button nzType=\"primary\"  (click)=\"getFIle()\">Submit</button>\r\n      <!-- <button nz-button nzType=\"primary\"  *ngIf=\"data.image || SmalliconsImageData.image || BigBannersData.image\" (click)=\"getFIle()\">Submit</button> -->\r\n    </div>\r\n    <div nz-col nzSpan=\"2\">\r\n        <!-- <button nz-button nzType=\"primary\"  *ngIf=\"data.image || SmalliconsImageData.image || BigBannersData.image\" (click)=\"onViewImages()\">View Images</button> -->\r\n      </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/marketing/marketing.component.ts":
/*!**************************************************!*\
  !*** ./src/app/marketing/marketing.component.ts ***!
  \**************************************************/
/*! exports provided: MarketingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingComponent", function() { return MarketingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_img_cropper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-img-cropper */ "./node_modules/ng2-img-cropper/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");







var MarketingComponent = /** @class */ (function () {
    function MarketingComponent(_appService, http, fb, nzMessageService) {
        var _this = this;
        this._appService = _appService;
        this.http = http;
        this.fb = fb;
        this.nzMessageService = nzMessageService;
        this.serialNumber = null;
        this.effect = 'scrollx';
        this.bigBannersimages = [];
        this.ResourceType = 3;
        this.isImageAdding = false;
        this.isImageEditing = false;
        this.selectedData = {};
        this.smallBanner = {
            width: 1125,
            height: 676
        };
        this.isMarketingListLoadin = false;
        this.marketingList = [];
        this.isrecentImageEditing = false;
        this.onRemove = function (item) {
            _this.ontabclicking(_this.ResourceType);
            console.log(item);
            var adminData = JSON.parse(localStorage.getItem('adminData'));
            var body = {
                AdminID: adminData.AdminID,
                SessionID: adminData.SessionID,
                ResourceID: item.ResourceID,
                ImageID: item.ImageID
            };
            try {
                _this._appService.postMethod('Remove_Resource_Image', body)
                    .subscribe(function (resp) {
                    if (resp.success) {
                        _this.ontabclicking(_this.ResourceType);
                    }
                    else {
                        _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                    }
                }, function (error) {
                });
            }
            catch (e) { }
        };
        this.cropperSettings = new ng2_img_cropper__WEBPACK_IMPORTED_MODULE_2__["CropperSettings"]();
        this.cropperSettings.croppedWidth = this.smallBanner.width;
        this.cropperSettings.croppedHeight = this.smallBanner.height;
        this.cropperSettings.canvasWidth = this.smallBanner.width;
        this.cropperSettings.canvasHeight = this.smallBanner.height;
        this.cropperSettings.minWidth = this.smallBanner.width;
        this.cropperSettings.minHeight = this.smallBanner.height;
        this.cropperSettings.width = this.smallBanner.width;
        this.cropperSettings.height = this.smallBanner.height;
        this.data = {};
        this.SmalliconsImageSettings = new ng2_img_cropper__WEBPACK_IMPORTED_MODULE_2__["CropperSettings"]();
        this.SmalliconsImageSettings.croppedWidth = this.smallBanner.width;
        this.SmalliconsImageSettings.croppedHeight = this.smallBanner.height;
        this.SmalliconsImageSettings.canvasWidth = this.smallBanner.width;
        this.SmalliconsImageSettings.canvasHeight = this.smallBanner.height;
        this.SmalliconsImageSettings.minWidth = this.smallBanner.width;
        this.SmalliconsImageSettings.minHeight = this.smallBanner.height;
        this.SmalliconsImageSettings.width = this.smallBanner.width;
        this.SmalliconsImageSettings.height = this.smallBanner.height;
        this.SmalliconsImageData = {};
        this.BigBannersImageSettings = new ng2_img_cropper__WEBPACK_IMPORTED_MODULE_2__["CropperSettings"]();
        this.BigBannersImageSettings.croppedWidth = this.smallBanner.width;
        this.BigBannersImageSettings.croppedHeight = this.smallBanner.height;
        this.BigBannersImageSettings.canvasWidth = this.smallBanner.width;
        this.BigBannersImageSettings.canvasHeight = this.smallBanner.height;
        this.BigBannersImageSettings.minWidth = this.smallBanner.width;
        this.BigBannersImageSettings.minHeight = this.smallBanner.height;
        this.BigBannersImageSettings.width = this.smallBanner.width;
        this.BigBannersImageSettings.height = this.smallBanner.height;
        this.BigBannersData = {};
    }
    MarketingComponent.prototype.ngOnInit = function () {
        this.ontabclicking(3);
    };
    MarketingComponent.prototype.fileChangeListener = function ($event) {
        console.log("whillll");
        var image = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            image.src = loadEvent.target.result;
            that.cropper.setImage(image);
        };
        myReader.readAsDataURL(file);
    };
    MarketingComponent.prototype.clear = function () {
        this.cropper.reset();
    };
    MarketingComponent.prototype.getFIle = function () {
        console.log("while adding");
        // if(this.isrecentImageEditing == false){
        var imag;
        if (this.ResourceType == 1) {
            imag = this.data.image;
        }
        else if (this.ResourceType == 2) {
            imag = this.SmalliconsImageData.image;
        }
        else if (this.ResourceType == 3) {
            imag = this.BigBannersData.image;
        }
        var str = imag;
        if (imag == undefined) {
            this.EditImagetoServer(this.selectedRecord.ImageData.ImageID);
        }
        else {
            var st4 = void 0;
            if (str.indexOf('data:image/jpeg;base64,') != -1) {
                st4 = str.replace('data:image/jpeg;base64,', '');
            }
            else {
                st4 = str.replace('data:image/png;base64,', '');
            }
            console.log(st4.length);
            var imageBlob = this.dataURItoBlob(st4);
            var imageFile = new File([imageBlob], 'imageName.jpeg', { type: 'image/jpeg' });
            if (this.isImageAdding) {
                this.send(imageFile, 1);
            }
            else {
                this.send(imageFile, 2);
            }
        }
        // }
    };
    MarketingComponent.prototype.onAddImage = function () {
        this.isImageAdding = true;
        this.serialNumber = null;
        this.isImageEditing = false;
    };
    MarketingComponent.prototype.dataURItoBlob = function (dataURI) {
        var byteString = window.atob(dataURI);
        var arrayBuffer = new ArrayBuffer(byteString.length);
        var int8Array = new Uint8Array(arrayBuffer);
        for (var i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        var blob = new Blob([int8Array], { type: 'image/jpeg' });
        return blob;
    };
    MarketingComponent.prototype.send = function (imageFile, type) {
        var _this = this;
        var formData = new FormData();
        formData.append('image', imageFile);
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('POST', this._appService.imageurl, formData, {
            reportProgress: true,
            withCredentials: false
        });
        return this.http.request(req).subscribe(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]) {
                var imageId = event.body.extras.ImageID;
                if (type == 1) {
                    _this.addImagetoServer(imageId);
                }
                else if (type == 2) {
                    _this.EditImagetoServer(imageId);
                }
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]) {
            }
        }, function (err) {
            //item.onError!(err, item.file!);
        });
    };
    MarketingComponent.prototype.addImagetoServer = function (ImageID) {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem('adminData'));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            SNo: this.serialNumber,
            ImageID: ImageID,
            ResourceType: this.ResourceType
        };
        try {
            this._appService.postMethod("Add_App_Image_Resource", body)
                .subscribe(function (resp) {
                if (resp.success) {
                    // this.bigBannersimages= 
                    _this.isImageAdding = false;
                    _this.serialNumber = null;
                    if (_this.ResourceType == 1) {
                        _this.cropper.reset();
                    }
                    else if (_this.ResourceType == 2) {
                        _this.cropperSmallIcons.reset();
                    }
                    else if (_this.ResourceType == 3) {
                        _this.cropperbigganner.reset();
                    }
                    _this.ontabclicking(_this.ResourceType);
                }
                else {
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                }
            });
        }
        catch (e) { }
    };
    MarketingComponent.prototype.oncliking = function () {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem('adminData'));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            skip: 0,
            limit: 10,
            ResourceType: this.ResourceType
        };
        try {
            this._appService.postMethod("List_All_App_Image_Resource", body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.marketingList = resp.extras.Data;
                    // for (let item of data) {
                    //   list.push({
                    //     uid: '1',
                    //     name: 'guideLines',
                    //     status: 'done',
                    //     url: item.ImageData.ImageOriginal,
                    //     thumbUrl: item.ImageData.ImageOriginal,
                    //     ResourceID: item.ResourceID,
                    //     ImageID: item.ImageData.ImageID
                    //   })
                    // }
                    // this.bigBannersimages = [...list];
                }
            }, function (error) {
            });
        }
        catch (e) { }
    };
    MarketingComponent.prototype.ontabclicking = function (tabNumber) {
        this.ResourceType = tabNumber;
        this.isImageAdding = false;
        this.isImageEditing = false;
        //this.clear()
        this.oncliking();
    };
    MarketingComponent.prototype.onViewImages = function () {
        this.isImageAdding = false;
        this.isImageEditing = false;
        // this.clear()
        if (this.ResourceType == 1) {
            this.cropper.reset();
        }
        else if (this.ResourceType == 2) {
            this.cropperSmallIcons.reset();
        }
        else if (this.ResourceType == 3) {
            this.cropperbigganner.reset();
        }
    };
    MarketingComponent.prototype.EditImage = function (data) {
        this.selectedRecord = data;
        this.isImageAdding = false;
        this.isImageEditing = true;
        this.serialNumber = data.SNo;
        this.resourceid = data.ResourceID;
        this.resourceType = data.ResourceType;
        // if (this.resourceType == 1) {
        //   this.data.image = data.ImageData.ImageOriginal
        // } else if (this.resourceType == 2) {
        //   this.SmalliconsImageData.image = data.ImageData.ImageOriginal
        // } else if (this.resourceType == 3) {
        // this.BigBannersData.image = data.ImageData.ImageOriginal
        // }
    };
    MarketingComponent.prototype.EditImagetoServer = function (ImageID) {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem('adminData'));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            SNo: this.serialNumber,
            ImageID: ImageID,
            ResourceID: this.resourceid,
            ResourceType: this.resourceType
        };
        try {
            this._appService.postMethod("Edit_App_Image_Resource", body)
                .subscribe(function (resp) {
                if (resp.success) {
                    // this.bigBannersimages= 
                    _this.isImageAdding = false;
                    _this.isImageEditing = false;
                    _this.serialNumber = null;
                    if (_this.ResourceType == 1) {
                        _this.cropper.reset();
                    }
                    else if (_this.ResourceType == 2) {
                        _this.cropperSmallIcons.reset();
                    }
                    else if (_this.ResourceType == 3) {
                        _this.cropperbigganner.reset();
                    }
                    _this.ontabclicking(_this.ResourceType);
                }
                else {
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                }
            });
        }
        catch (e) { }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cropper', undefined),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng2_img_cropper__WEBPACK_IMPORTED_MODULE_2__["ImageCropperComponent"])
    ], MarketingComponent.prototype, "cropper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cropperSmallIcons', undefined),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng2_img_cropper__WEBPACK_IMPORTED_MODULE_2__["ImageCropperComponent"])
    ], MarketingComponent.prototype, "cropperSmallIcons", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cropperbigganner', undefined),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng2_img_cropper__WEBPACK_IMPORTED_MODULE_2__["ImageCropperComponent"])
    ], MarketingComponent.prototype, "cropperbigganner", void 0);
    MarketingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marketing',
            template: __webpack_require__(/*! ./marketing.component.html */ "./src/app/marketing/marketing.component.html"),
            styles: [__webpack_require__(/*! ./marketing.component.css */ "./src/app/marketing/marketing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"]])
    ], MarketingComponent);
    return MarketingComponent;
}());



/***/ }),

/***/ "./src/app/marketing/marketing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/marketing/marketing.module.ts ***!
  \***********************************************/
/*! exports provided: MarketingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingModule", function() { return MarketingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _marketing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marketing.component */ "./src/app/marketing/marketing.component.ts");
/* harmony import */ var _shared_modue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _marketing_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./marketing.routing */ "./src/app/marketing/marketing.routing.ts");
/* harmony import */ var ng2_img_cropper___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-img-cropper/ */ "./node_modules/ng2-img-cropper/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var MarketingModule = /** @class */ (function () {
    function MarketingModule() {
    }
    MarketingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _marketing_routing__WEBPACK_IMPORTED_MODULE_5__["MarketingRoutes"],
                _shared_modue__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                ng2_img_cropper___WEBPACK_IMPORTED_MODULE_6__["ImageCropperModule"]
            ],
            declarations: [_marketing_component__WEBPACK_IMPORTED_MODULE_3__["MarketingComponent"]]
        })
    ], MarketingModule);
    return MarketingModule;
}());



/***/ }),

/***/ "./src/app/marketing/marketing.routing.ts":
/*!************************************************!*\
  !*** ./src/app/marketing/marketing.routing.ts ***!
  \************************************************/
/*! exports provided: MarketingRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingRoutes", function() { return MarketingRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _marketing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./marketing.component */ "./src/app/marketing/marketing.component.ts");


var routes = [
    { path: '', component: _marketing_component__WEBPACK_IMPORTED_MODULE_1__["MarketingComponent"] },
];
var MarketingRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=marketing-marketing-module.js.map