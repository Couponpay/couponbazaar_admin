(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buyers-buyers-orders-buyers-orders-module"],{

/***/ "./src/app/buyers/buyers-orders/buyers-orders.component.css":
/*!******************************************************************!*\
  !*** ./src/app/buyers/buyers-orders/buyers-orders.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".VendorOrderScetion{\n    padding: 25px;\n  \n    background: #f0f2f5;\n    border-radius: 10px;\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.08);\n   \n    background-color: #ffffff;\n}\ntbody{\n    background: white\n}\nul#horizontal-list {\n\tmin-width: 696px;\n\tlist-style: none;\n\tpadding-top: 20px;\n\t}\nul#horizontal-list li {\n\t\tdisplay: inline;\n\t}\n.footer {\n        position: absolute;\n        bottom: 0px;\n        width: 100%;\n        border-top: 1px solid rgb(232, 232, 232);\n        padding: 10px 16px;\n        text-align: right;\n        left: 0px;\n        background: #fff;\n      }\n[nz-radio] {\n        display: block;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV5ZXJzL2J1eWVycy1vcmRlcnMvYnV5ZXJzLW9yZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTs7SUFFYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDJDQUEyQzs7SUFFM0MseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQjtBQUNBO0VBQ0MsZUFBZTtDQUNoQjtBQUNBO1FBQ08sa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsd0NBQXdDO1FBQ3hDLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsU0FBUztRQUNULGdCQUFnQjtNQUNsQjtBQUNBO1FBQ0UsY0FBYztNQUNoQiIsImZpbGUiOiJzcmMvYXBwL2J1eWVycy9idXllcnMtb3JkZXJzL2J1eWVycy1vcmRlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5WZW5kb3JPcmRlclNjZXRpb257XG4gICAgcGFkZGluZzogMjVweDtcbiAgXG4gICAgYmFja2dyb3VuZDogI2YwZjJmNTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxudGJvZHl7XG4gICAgYmFja2dyb3VuZDogd2hpdGVcbn1cbnVsI2hvcml6b250YWwtbGlzdCB7XG5cdG1pbi13aWR0aDogNjk2cHg7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdHBhZGRpbmctdG9wOiAyMHB4O1xuXHR9XG5cdHVsI2hvcml6b250YWwtbGlzdCBsaSB7XG5cdFx0ZGlzcGxheTogaW5saW5lO1xuXHR9XG5cdC5mb290ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMzIsIDIzMiwgMjMyKTtcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgfVxuICAgICAgW256LXJhZGlvXSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/buyers/buyers-orders/buyers-orders.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/buyers/buyers-orders/buyers-orders.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row class=\"VendorOrderScetion\">\n  <form class=\"vendorQForm\" nz-form [nzLayout]=\"'inline'\" [formGroup]=\"BuyersOrderForm\">\n    <div nz-col nzSpan=\"4\">\n      <nz-form-item>\n        <nz-form-control>\n            <nz-date-picker nzPlaceHolder=\"From Date\" formControlName=\"Start_Date\"></nz-date-picker>\n            <nz-form-explain\n              *ngIf=\"BuyersOrderForm.get('Start_Date')?.dirty && BuyersOrderForm.get('Start_Date')?.errors\">\n              Please start select date!\n            </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n    </div>\n    <div nz-col nzSpan=\"4\">\n      <nz-form-item>\n        <nz-form-control>\n\n          <nz-form-control>\n            <nz-date-picker formControlName=\"End_Date\"></nz-date-picker>\n            <nz-form-explain *ngIf=\"BuyersOrderForm.get('End_Date')?.dirty && BuyersOrderForm.get('End_Date')?.errors\">\n              Please Select End_Date!\n            </nz-form-explain>\n          </nz-form-control>\n\n        </nz-form-control>\n      </nz-form-item>\n    </div>\n\n  </form>\n</div>\n\n<div nz-row style=\"margin-top: 25px;\">\n  <div nz-col nzSpan=\"24\">\n    <nz-table #basicTable nzShowPagination=\"false\" [nzLoading]=\"isloading\" nzLoadingDelay=\"1\" [nzData]=\"BuyersrderList\">\n      <thead>\n        <tr>\n          <th>More</th>\n          <th>Order Number</th>\n\n          <th>Payment Type</th>\n          <th>Payment Status</th>\n          <th>Cart Final Price</th>\n          <th>Delivery Type</th>\n          <th>Order Status</th>\n          <th>created at</th>\n          <th></th>\n          <th></th>\n          <th></th>\n          <th></th>\n\n        </tr>\n      </thead>\n      <tbody>\n        <ng-container *ngFor=\"let data of BuyersrderList;let i=index\">\n          <tr>\n            <td>\n              <a (click)=\"onDetail_View(data,i)\">\n                <i class=\"fa fa-caret-down\" style=\"cursor: pointer;font-size: 18px\" *ngIf=\"isDetailsView!=i\"\n                  aria-hidden=\"true\"></i>\n                <i class=\"fa fa-caret-up\" style=\"cursor: pointer;font-size: 18px\" *ngIf=\"isDetailsView==i\"\n                  aria-hidden=\"true\"></i>\n              </a>\n            </td>\n            <td>{{data.Order_Number}}</td>\n\n            <td>\n              <span [ngSwitch]=\"data.Payment_Type\">\n                <p *ngSwitchCase=\"0\">NA</p>\n                <p *ngSwitchCase=\"1\">Wallet</p>\n                <p *ngSwitchCase=\"2\">Razor Pay</p>\n                <p *ngSwitchCase=\"3\">Both</p>\n                <p *ngSwitchCase=\"4\">Shop payment</p>\n                <p *ngSwitchDefault>No Payment Type</p>\n              </span>\n            </td>\n\n\n            <td>\n              <span [ngSwitch]=\"data.Payment_Status\">\n                <p *ngSwitchCase=\"0\">NA</p>\n                <p *ngSwitchCase=\"1\">Initial</p>\n                <p *ngSwitchCase=\"2\">Fail</p>\n                <p *ngSwitchCase=\"3\">Success</p>\n                <p *ngSwitchCase=\"4\">Shop payment</p>\n                <p *ngSwitchDefault>No Payment Status</p>\n              </span>\n            </td>\n\n            <!-- <td *ngIf=\"data.Payment_Status==0\">NA</td>\n            <td *ngIf=\"data.Payment_Status==1\">Initial</td>\n            <td *ngIf=\"data.Payment_Status==2\">Fail</td>\n            <td *ngIf=\"data.Payment_Status==3\">Success</td>\n            <td *ngIf=\"data.Payment_Status==4\">Shop payment</td> -->\n\n            <td>{{data.Cart_Final_Price}}</td>\n\n            <td>\n              <span [ngSwitch]=\"data.Delivery_Type\">\n                <p *ngSwitchCase=\"1\">Drop at your Home</p>\n                <p *ngSwitchCase=\"2\">Collect at Store</p>\n                <p *ngSwitchCase=\"3\">Pay & collect at store</p>\n                <p *ngSwitchDefault>No Delivery Type</p>\n              </span>\n            </td>\n\n            <!-- <td *ngIf=\"data.Delivery_Type==1\">Drop at your Home</td>\n            <td *ngIf=\"data.Delivery_Type==2\">Collect at Store</td>\n            <td *ngIf=\"data.Delivery_Type==3\">Pay & collect at store</td> -->\n\n\n            <td>\n              <span [ngSwitch]=\"data.Order_Status\">\n                <p *ngSwitchCase=\"0\">NA</p>\n                <p *ngSwitchCase=\"1\">Started</p>\n                <p *ngSwitchCase=\"2\">Cancelled</p>\n                <p *ngSwitchCase=\"3\">Completed</p>\n                <p *ngSwitchCase=\"4\">Cancelled by admin</p>\n                <p *ngSwitchDefault>No Order Status</p>\n              </span>\n            </td>\n            <td>{{data.created_at | date:'medium'}}</td>\n\n            <!-- <td *ngIf=\"data.Order_Status==0\">NA</td>\n            <td *ngIf=\"data.Order_Status==1\">Started</td>\n            <td *ngIf=\"data.Order_Status==2\">Cancelled</td>\n            <td *ngIf=\"data.Order_Status==3\">Completed</td>\n            <td *ngIf=\"data.Order_Status==4\">Cancelled by admin</td> -->\n\n            <td colspan=\"3\">\n              <span *ngIf=\"data.Order_Status!=3 && data.Delivery_Type==1;else nothing\">\n                <span style=\"color: #096bc5;\" (click)=\"openChange(data)\">Change Status</span>\n                <nz-divider nzType=\"vertical\"></nz-divider>\n                <a nz-popconfirm nzTitle=\"Are you sure Complete this task?\" nzPopconfirmPlacement=\"bottom\"\n                  nzPopconfirmPlacement=\"left\" (nzOnConfirm)=\"confirm(data,1)\"><span\n                    style=\"color: #08a21b;\">Complete</span></a>\n\n                <nz-divider nzType=\"vertical\"></nz-divider>\n                <a nz-popconfirm nzTitle=\"Are you sure delete this task?\" nzPopconfirmPlacement=\"bottom\"\n                  nzPopconfirmPlacement=\"left\" (nzOnConfirm)=\"confirm(data,2)\"><span\n                    style=\"color: #f32626;\">Delete</span></a>\n              </span>\n              <ng-template #nothing>\n                <span>NA</span>\n              </ng-template>\n            </td>\n            <td >\n              <a  (click)=\"onCreateShipRocketet(data,i)\" *ngIf=\"data.Shiprocket_Order_LogID==''\">Create ShipRocket</a>\n             \n              <a nz-popconfirm (nzOnConfirm)=\"onCancelShipRocketet(data)\"\n              nzTitle=\"Are you sure you want Cancel?\"   *ngIf=\"data.Shiprocket_Order_LogID!=''\">Cancel ShipRocket</a>\n            </td>\n          </tr>\n          <tr [nzExpand]=\"isDetailsView==i\">\n            <td colspan=\"12\">\n              <div nz-row style=\"margin-top: 25px;\">\n                <div nz-col nzSpan=\"24\">\n                  <ul nz-menu class=\"navigationMenu\" [nzMode]=\"'horizontal'\">\n                    <li nz-menu-item [class.ant-menu-item-selected]=\"IsVisible_data==1\" (click)=\"click_button(data,1)\">\n                      Basic Information\n                    </li>\n                    <li nz-menu-item  [class.ant-menu-item-selected]=\"IsVisible_data==2\" (click)=\"click_button(data,2)\">\n                      Product List\n\n                    </li>\n                    <li nz-menu-item [class.ant-menu-item-selected]=\"IsVisible_data==3\" (click)=\"click_button(data,3)\">\n                      Logs\n\n                    </li>\n                    <li *ngIf=\"data.Shiprocket_Order_LogID.length>0\"  [class.ant-menu-item-selected]=\"IsVisible_data==4\" nz-menu-item (click)=\"click_button(data,4)\">\n                      ShipRocket Order Info\n\n                    </li>\n                  </ul>\n                </div>\n              </div>\n              <div nz-row style=\"margin-top: 25px;\">\n\n                <div nz-col nzSpan=\"24\" *ngIf=\"IsVisible_data==1\">\n                  <div nz-row style=\"margin-top: 25px;\">\n                    <div nz-col nzSpan=\"8\">\n                      <div style=\"background: #fff;padding:30px;\">\n                        <nz-card style=\"width:300px;height: 215px;\" [nzBordered]=\"false\" nzTitle=\"Paid Amount\">\n                          <p>Amount Used From Wallet : {{data.Amount_Paid.Amount_Used_From_Wallet}}</p>\n                          <p>Amount Paid Online : {{data.Amount_Paid.Amount_Paid_Online}}</p>\n                          <p>Total Amount Paid : {{data.Amount_Paid.Total_Amount_Paid}}</p>\n                        </nz-card>\n                      </div>\n                    </div>\n\n                    <div nz-col nzSpan=\"16\">\n                      <div style=\"background: #fff;padding:30px;\">\n                        <nz-card style=\"width:600px;height: 215px;\" [nzBordered]=\"false\"\n                          nzTitle=\"Delivery Address Information\">\n                          <nz-table #basicTable nzShowPagination=\"false\" [nzLoading]=\"isloading\" nzLoadingDelay=\"1\"\n                            [nzData]=\"BuyersrderList\">\n      <tbody>\n        <tr>\n          <td>\n            <p>Name : {{data.Delivery_Address_Information.Name}}</p>\n            <p>Phone Number : {{data.Delivery_Address_Information.PhoneNumber}}</p>\n            <p>Flat No : {{data.Delivery_Address_Information.Flat_No}}</p>\n          </td>\n          <td>\n            <p>City : {{data.Delivery_Address_Information.City}}</p>\n            <p>Postal Code : {{data.Delivery_Address_Information.Postal_Code}}</p>\n            <p>State : {{data.Delivery_Address_Information.State}}</p>\n            <p>Address : {{data.Delivery_Address_Information.Address}}</p>\n          </td>\n        </tr>\n      </tbody>\n    </nz-table>\n\n    </nz-card>\n  </div>\n</div>\n</div>\n</div>\n<div nz-col nzSpan=\"24\" *ngIf=\"IsVisible_data==2\">\n  <nz-table #basicTable nzShowPagination=\"false\" [nzLoading]=\"isloading\" nzLoadingDelay=\"1\" [nzData]=\"BuyersrderList\">\n    <thead>\n      <tr>\n        <th>Product Name</th>\n        <th>Product Details\n          <i class=\"fa fa-info-circle\" nzTitle=\"Price X Quantity = Total\" nzPlacement=\"topLeft\" nz-tooltip\n            nzTrigger=\"hover\" style=\"font-size:15px\"></i>\n        </th>\n        <th nzWidth=\"100px\" nzRight=\"0px\"></th>\n\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let sub of data.Cart_Information;let i=index\">\n        <td>{{sub.Product_Name}}</td>\n        <td>{{sub.Product_Price}} X {{sub.Product_Quantity}} = {{sub.Product_Sub_Total}}</td>\n        <td nzRight=\"0px\"><a nz-popover nzTitle=\"Shares\" [nzContent]=\"contentTemplate\" nzPlacement=\"left\">shares</a>\n        </td>\n        <ng-template #contentTemplate>\n          <div>\n            <p>Introducer Share : {{sub.Product_Price_Divisions.Introducer_Share}}%</p>\n            <p>Buyer Share : {{sub.Product_Price_Divisions.Buyer_Share}}%</p>\n            <p> Shop Share : {{sub.Product_Price_Divisions.Shop_Share}}%</p>\n            <p>Company Share : {{sub.Product_Price_Divisions.Company_Share}}%</p>\n\n          </div>\n        </ng-template>\n      </tr>\n\n    <tbody>\n  </nz-table>\n</div>\n<div nz-col nzSpan=\"24\" *ngIf=\"IsVisible_data==3\">\n\n  <nz-table #basicTable nzShowPagination=\"false\" [nzLoading]=\"isloading\" nzLoadingDelay=\"1\" [nzData]=\"BuyersrderList\">\n    <thead>\n      <tr>\n        <th></th>\n        <th>Status</th>\n        <th>Description</th>\n        <th>Time</th>\n\n      </tr>\n    </thead>\n    <tbody>\n      <ng-container *ngFor=\"let or of data.Order_Report;let i=index\">\n        <tr>\n          <td>{{skip+i+1}}</td>\n          <td>{{or.Title}}</td>\n          <td>{{or.Description}}</td>\n          <td>{{or.Time | date:'medium'}}</td>\n        </tr>\n      </ng-container>\n    </tbody>\n  </nz-table>\n</div>\n<div nz-col nzSpan=\"24\" *ngIf=\"IsVisible_data==4\">\n  <div *ngIf=\"singliShipRocketDetails.Shiprocket_Order_Number!=undefined\">\n    <h4>\n      <b> {{singliShipRocketDetails.Shiprocket_Order_Number}} </b>\n  \n    </h4>\n    <div nz-row [nzGutter]=\"8\">\n      <div nz-col nzSpan=\"8\">\n        <span>Courier Name </span>: <b> {{singliShipRocketDetails.Courier_Name}} </b>\n      </div>\n      <div nz-col nzSpan=\"8\">\n        <span>AWB </span>: <b> {{singliShipRocketDetails.AWB}} </b>\n      </div>\n      <div nz-col nzSpan=\"8\">\n        <span>Shipment Status </span>: <b> {{singliShipRocketDetails.Shipment_Status}} </b>\n      </div>\n    </div>\n    <nz-table #basicTable nzShowPagination=\"false\" *ngIf=\"singliShipRocketDetails.Scans.Length>0\" nzLoadingDelay=\"1\" [nzData]=\"singliShipRocketDetails.Scans\">\n      <thead>\n        <tr>\n          <th></th>\n          <th>date</th>\n          <th>activity</th>\n          <th>location</th>\n         \n  \n        </tr>\n      </thead>\n      <tbody>\n        <ng-container *ngFor=\"let or of singliShipRocketDetails.Scans;let i=index\">\n          <tr>\n            <td>{{skip+i+1}}</td>\n            <td>{{or.date | date:'medium'}}</td>\n            <td>{{or.activity}}</td>\n            <td>{{or.location}}</td>\n           \n          </tr>\n        </ng-container>\n      </tbody>\n    </nz-table>\n  </div>\n  \n</div>\n</div>\n</td>\n</tr>\n</ng-container>\n</tbody>\n</nz-table>\n</div>\n<nz-pagination (nzPageIndexChange)=\"onNextPage($event)\" [nzPageSize]=\"limit\" [nzPageIndex]=\"currentPage\"\n  [nzTotal]=\"TotalItems\"></nz-pagination>\n\n<nz-modal [(nzVisible)]=\"isVisible\" nzTitle=\"Change Status\" (nzOnCancel)=\"handleCancel()\" (nzOnOk)=\"handleOk()\">\n  <form class=\"vendorQForm\" nz-form [nzLayout]=\"'inline'\" [formGroup]=\"ChangeBuyerForm\">\n    <nz-form-item>\n      <nz-form-label [nzSpan]=\"4\" nzRequired>Title</nz-form-label>\n      <nz-form-control [nzSpan]=\"16\" style=\"width:300px\">\n        <input required type=\"text\" formControlName=\"Title\" placeholder=\"Title\" nz-input ngModel name=\"Title\">\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSpan]=\"6\" nzRequired>Description</nz-form-label>\n      <nz-form-control [nzSpan]=\"16\" style=\"width:300px\">\n        <textarea formControlName=\"Description\" nz-input rows=\"2\" placeholder=\"write any thing\"></textarea>\n      </nz-form-control>\n    </nz-form-item>\n  </form>\n</nz-modal>\n</div>\n<nz-drawer\n[nzBodyStyle]=\"{ height: 'calc(100% - 55px)', overflow: 'auto', 'padding-bottom': '53px' }\"\n[nzMaskClosable]=\"false\"\n[nzWidth]=\"850\"\n[nzVisible]=\"isShipRocketModal\"\n[nzTitle]=\"cardTitle\"\n(nzOnClose)=\"onCancelShipRocketOrder()\"\n>\n\n <ng-template #cardTitle>\n    <h4 *ngIf=\"selectedOrder.Order_Number!=undefined\">\n      Create Ship Rocket Order For <b>{{selectedOrder.Order_Number}}</b>\n    </h4>\n  </ng-template>\n  <div nz-row>\n    <div nz-col nzSpan=\"10\">  <form nz-form [formGroup]=\"shipRocketOrderForm\">\n      <nz-form-item>\n        <nz-form-label [nzSpan]=\"9\" nzRequired>Length (in Cm)</nz-form-label>\n        <nz-form-control [nzSpan]=\"9\">\n          <input required type=\"text\" formControlName=\"Length\" placeholder=\"Length\" nz-input>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSpan]=\"9\" nzRequired>Breadth (in Cm)</nz-form-label>\n        <nz-form-control [nzSpan]=\"9\">\n          <input required type=\"text\" formControlName=\"Breadth\" placeholder=\"Breadth\" nz-input>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSpan]=\"9\" nzRequired>Height (in Cm)</nz-form-label>\n        <nz-form-control [nzSpan]=\"9\">\n          <input required type=\"text\" formControlName=\"Height\" placeholder=\"Height\" nz-input>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSpan]=\"9\" nzRequired>Weight (in Cm)</nz-form-label>\n        <nz-form-control [nzSpan]=\"9\">\n          <input required type=\"text\" formControlName=\"Weight\" placeholder=\"Weight\" nz-input>\n        </nz-form-control>\n      </nz-form-item>\n    </form>\n    <button type=\"button\" style=\"margin-left: 20px; margin-bottom: 20px;\"nz-button (click)=\"onCreateShipRocketOrder()\" [nzLoading]=\"isPriceChecking\" class=\"ant-btn ant-btn-primary\"><span>Check For Price</span></button>\n\n  </div>\n\n\n    <div nz-col nzSpan=\"14\" *ngIf=\"ShipOrderPricingData.length>0\">\n      <!-- creation of table -->\n      <nz-table #basicTable  nzShowPagination=\"false\"\n       [nzData]=\"ShipOrderPricingData\"\n       [nzLoading]=\"isPriceChecking\">\n        <thead>\n          <tr>\n            <th></th>\n            <th>Courier Name</th>\n            <th>Rate</th>\n            <th>Rating</th>\n            <th>Mode</th>\n            <th>Etd</th>\n          </tr>\n        </thead>\n        <tbody>\n          \n          <tr *ngFor=\"let data of ShipOrderPricingData;let i=index\">\n        <!-- radio buttons -->\n        <td>\n          <nz-radio-group [(ngModel)]=\"selectedOrders\">\n            <label nz-popconfirm (nzOnConfirm)=\"createShipRocketOrderToServer(data)\"\n              nzTitle=\"Are you sure ?\"  nz-radio [nzValue]=\"data\"></label>\n\n          </nz-radio-group>\n        </td>\n\n         <td>{{data.courier_name}}</td>\n         <td>{{data.rate}}</td>\n         <td>{{data.rating}}</td>\n         <td>{{data.etd}}</td>\n          <td>{{data.mode==0?'surface':'air' }}</td>\n        </tr>\n    </tbody>\n      </nz-table>\n\n\n\n   <!-- creation of table -->\n\n    </div>\n  </div>\n\n  <div class=\"footer\">\n    <button type=\"button\" (click)=\"onCancelShipRocketOrder()\" class=\"ant-btn\" style=\"margin-right: 8px;\"><span>Cancel</span></button>\n  </div>\n</nz-drawer>"

/***/ }),

/***/ "./src/app/buyers/buyers-orders/buyers-orders.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/buyers/buyers-orders/buyers-orders.component.ts ***!
  \*****************************************************************/
/*! exports provided: BuyersOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyersOrdersComponent", function() { return BuyersOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var BuyersOrdersComponent = /** @class */ (function () {
    function BuyersOrdersComponent(fb, _appService, nzMessageService) {
        this.fb = fb;
        this._appService = _appService;
        this.nzMessageService = nzMessageService;
        this.allChecked = false;
        this.indeterminate = true;
        this.isVisible = false;
        this.visible = false;
        this.ShipOrderPricingData = [];
        this.isAllShops = true;
        this.skip = 0;
        this.limit = this._appService.limit;
        this.currentPage = 1;
        this.BuyersrderList = [];
        this.IsVisible_data = 1;
        this.radioValue = '';
        this.selectedOrder = {};
        this.singliShipRocketDetails = {};
    }
    BuyersOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var presentDate = new Date();
        var startDate = new Date(presentDate.setDate(presentDate.getDate() - 10));
        this.BuyersOrderForm = this.fb.group({
            Start_Date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            End_Date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
        this.ChangeBuyerForm = this.fb.group({
            Title: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Description: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
        this.shipRocketOrderForm = this.fb.group({
            Length: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Breadth: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Height: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Weight: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
        this.BuyersOrderForm.patchValue({
            Start_Date: startDate,
            End_Date: new Date()
        });
        this.BuyersOrderForm.valueChanges.subscribe(function (data) {
            console.log('2');
            if (_this.BuyersOrderForm.valid) {
                _this.skip = 0;
                _this.AllBuyersOrdersList();
            }
        });
        this.AllBuyersOrdersList();
    };
    BuyersOrdersComponent.prototype.onDetail_View = function (data, i) {
        var index = i;
        if (this.isDetailsView == index) {
            this.isDetailsView = -1;
        }
        else {
            this.isDetailsView = index;
            this.click_button(data, 1);
        }
    };
    BuyersOrdersComponent.prototype.AllBuyersOrdersList = function () {
        var _this = this;
        this.isloading = true;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var EndDate = this.BuyersOrderForm.value.End_Date;
        var startDate = this.BuyersOrderForm.value.Start_Date;
        var userdata = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            End_Date: EndDate,
            Start_Date: startDate,
            // End_Date: EndDate.getDate() + '-' + (EndDate.getMonth() + 1) + '-' + EndDate.getFullYear(),
            // Start_Date: startDate.getDate() + '-' + (startDate.getMonth() + 1) + '-' + startDate.getFullYear(),
            skip: this.skip,
            limit: this._appService.limit,
            Status: true
        };
        try {
            this._appService.postMethod('List_All_Buyers_Orders', userdata)
                .subscribe(function (resp) {
                _this.isloading = false;
                if (resp.success) {
                    _this.TotalItems = resp.extras.Count;
                    if (_this.skip == 0) {
                        _this.currentPage = 1;
                    }
                    _this.BuyersrderList = resp.extras.Data;
                    console.log(_this.BuyersrderList);
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
    BuyersOrdersComponent.prototype.onNextPage = function (event) {
        this.currentPage = event;
        this.skip = (event - 1) * this._appService.limit;
        this.AllBuyersOrdersList();
    };
    BuyersOrdersComponent.prototype.click_button = function (data, type) {
        this.selectedOrder = data;
        this.IsVisible_data = type;
        if (this.IsVisible_data == 4) {
            this.getSingleShipRocketDetails();
        }
    };
    BuyersOrdersComponent.prototype.confirm = function (data, type) {
        var _this = this;
        console.log(type);
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var url = '';
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            OrderID: data.OrderID
        };
        if (type == 1) {
            url = "Complete_Buyer_Order";
        }
        else if (type == 2) {
            url = "Delete_Buyer_Order";
        }
        try {
            this._appService.postMethod(url, body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.nzMessageService.success(resp.extras.Status);
                    _this.AllBuyersOrdersList();
                }
                else {
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                    _this.AllBuyersOrdersList();
                }
            }, function (error) {
            });
        }
        catch (e) {
        }
    };
    BuyersOrdersComponent.prototype.openChange = function (data) {
        this.OrderID = data.OrderID;
        this.isVisible = true;
    };
    BuyersOrdersComponent.prototype.handleOk = function () {
        var _this = this;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            OrderID: this.OrderID,
            Title: this.ChangeBuyerForm.value.Title,
            Description: this.ChangeBuyerForm.value.Description
        };
        try {
            this._appService.postMethod('Change_Buyer_Order_Status', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.nzMessageService.success(resp.extras.Status);
                    _this.isVisible = false;
                    _this.ChangeBuyerForm.reset();
                }
                else {
                    _this.isloading = false;
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                    _this.isVisible = false;
                }
            }, function (error) {
            });
        }
        catch (e) {
        }
    };
    BuyersOrdersComponent.prototype.handleCancel = function () {
        this.isVisible = false;
    };
    BuyersOrdersComponent.prototype.onCreateShipRocketet = function (data, index) {
        this.selectedOrder = data;
        this.isShipRocketModal = true;
        this.isShipRocketOrderRequesting = false;
        this.shipRocketOrderForm.reset();
    };
    BuyersOrdersComponent.prototype.onCancelShipRocketOrder = function () {
        this.isShipRocketOrderRequesting = false;
        this.shipRocketOrderForm.reset();
        this.isShipRocketModal = false;
        this.visible = false;
        this.ShipOrderPricingData = [];
    };
    BuyersOrdersComponent.prototype.onCreateShipRocketOrder = function () {
        var _this = this;
        this.isPriceChecking = true;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            OrderID: this.selectedOrder.OrderID,
            Length: this.shipRocketOrderForm.value.Length,
            Breadth: this.shipRocketOrderForm.value.Breadth,
            Height: this.shipRocketOrderForm.value.Height,
            Weight: this.shipRocketOrderForm.value.Weight,
        };
        try {
            this._appService.postMethod('Get_Shiprocket_Order_Pricing', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.isPriceChecking = false;
                    //  this.shipRocketOrderForm.reset()
                    _this.ShipOrderPricingData = resp.extras.Data;
                }
                else {
                    _this.isPriceChecking = false;
                    if (resp.extras.Data != undefined) {
                        _this.nzMessageService.create('error', resp.extras.Data.message);
                    }
                    else {
                        _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                    }
                }
            }, function (error) {
            });
        }
        catch (e) {
        }
    };
    BuyersOrdersComponent.prototype.getSingleShipRocketDetails = function () {
        var _this = this;
        this.isShipRocketOrderRequesting = true;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            Shiprocket_Order_LogID: this.selectedOrder.Shiprocket_Order_LogID,
        };
        try {
            this._appService.postMethod('Get_Single_Shiprocket_Order', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.singliShipRocketDetails = resp.extras.Data;
                }
                else {
                    _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                }
            }, function (error) {
            });
        }
        catch (e) {
        }
    };
    BuyersOrdersComponent.prototype.createShipRocketOrderToServer = function (data) {
        var _this = this;
        this.selectedOrderList = data;
        this.isPriceChecking = true;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            OrderID: this.selectedOrder.OrderID,
            Length: (+this.shipRocketOrderForm.value.Length),
            Breadth: +this.shipRocketOrderForm.value.Breadth,
            Height: +this.shipRocketOrderForm.value.Height,
            Weight: +this.shipRocketOrderForm.value.Weight,
            courier_company_id: data.courier_company_id
        };
        try {
            this._appService.postMethod('Shiprocket_Order_Create', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.isShipRocketModal = false;
                    _this.ShipOrderPricingData = [];
                    _this.shipRocketOrderForm.reset();
                    _this.AllBuyersOrdersList();
                    _this.isPriceChecking = false;
                }
                else {
                    _this.isPriceChecking = false;
                    if (resp.extras.Data != undefined) {
                        _this.nzMessageService.create('error', resp.extras.Data.message);
                    }
                    else {
                        _this.nzMessageService.create('error', _this._appService.apiMessages[resp.extras.msg]);
                    }
                }
            }, function (error) {
            });
        }
        catch (e) {
        }
    };
    BuyersOrdersComponent.prototype.onCancelShipRocketet = function (data, i) {
        var _this = this;
        this.isloading = true;
        var adminData = JSON.parse(localStorage.getItem("adminData"));
        var body = {
            AdminID: adminData.AdminID,
            SessionID: adminData.SessionID,
            Shiprocket_Order_LogID: data.Shiprocket_Order_LogID
        };
        try {
            this._appService.postMethod('Cancel_Shiprocket_Order', body)
                .subscribe(function (resp) {
                if (resp.success) {
                    _this.AllBuyersOrdersList();
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
    BuyersOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buyers-orders',
            template: __webpack_require__(/*! ./buyers-orders.component.html */ "./src/app/buyers/buyers-orders/buyers-orders.component.html"),
            styles: [__webpack_require__(/*! ./buyers-orders.component.css */ "./src/app/buyers/buyers-orders/buyers-orders.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]])
    ], BuyersOrdersComponent);
    return BuyersOrdersComponent;
}());



/***/ }),

/***/ "./src/app/buyers/buyers-orders/buyers-orders.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/buyers/buyers-orders/buyers-orders.module.ts ***!
  \**************************************************************/
/*! exports provided: BuyersOrdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyersOrdersModule", function() { return BuyersOrdersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _buyers_orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buyers-orders.component */ "./src/app/buyers/buyers-orders/buyers-orders.component.ts");
/* harmony import */ var _buyers_orders_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buyers-orders.routing */ "./src/app/buyers/buyers-orders/buyers-orders.routing.ts");
/* harmony import */ var src_app_shared_modue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared.modue */ "./src/app/shared.modue.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");








var BuyersOrdersModule = /** @class */ (function () {
    function BuyersOrdersModule() {
    }
    BuyersOrdersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _buyers_orders_routing__WEBPACK_IMPORTED_MODULE_4__["BuyersOrdersRoutes"],
                src_app_shared_modue__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
            ],
            declarations: [_buyers_orders_component__WEBPACK_IMPORTED_MODULE_3__["BuyersOrdersComponent"]]
        })
    ], BuyersOrdersModule);
    return BuyersOrdersModule;
}());



/***/ }),

/***/ "./src/app/buyers/buyers-orders/buyers-orders.routing.ts":
/*!***************************************************************!*\
  !*** ./src/app/buyers/buyers-orders/buyers-orders.routing.ts ***!
  \***************************************************************/
/*! exports provided: BuyersOrdersRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyersOrdersRoutes", function() { return BuyersOrdersRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _buyers_orders_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buyers-orders.component */ "./src/app/buyers/buyers-orders/buyers-orders.component.ts");


var routes = [
    { path: '', component: _buyers_orders_component__WEBPACK_IMPORTED_MODULE_1__["BuyersOrdersComponent"] },
];
var BuyersOrdersRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=buyers-buyers-orders-buyers-orders-module.js.map