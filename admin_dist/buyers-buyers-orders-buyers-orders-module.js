(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buyers-buyers-orders-buyers-orders-module"],{

/***/ "./src/app/buyers/buyers-orders/buyers-orders.component.css":
/*!******************************************************************!*\
  !*** ./src/app/buyers/buyers-orders/buyers-orders.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".VendorOrderScetion{\r\n    padding: 25px;\r\n  \r\n    background: #f0f2f5;\r\n    border-radius: 10px;\r\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.08);\r\n   \r\n    background-color: #ffffff;\r\n}\r\ntbody{\r\n    background: white\r\n}\r\nul#horizontal-list {\r\n\tmin-width: 696px;\r\n\tlist-style: none;\r\n\tpadding-top: 20px;\r\n\t}\r\nul#horizontal-list li {\r\n\t\tdisplay: inline;\r\n\t}\r\n.footer {\r\n        position: absolute;\r\n        bottom: 0px;\r\n        width: 100%;\r\n        border-top: 1px solid rgb(232, 232, 232);\r\n        padding: 10px 16px;\r\n        text-align: right;\r\n        left: 0px;\r\n        background: #fff;\r\n      }\r\n[nz-radio] {\r\n        display: block;\r\n      }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV5ZXJzL2J1eWVycy1vcmRlcnMvYnV5ZXJzLW9yZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTs7SUFFYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDJDQUEyQzs7SUFFM0MseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQjtBQUNBO0VBQ0MsZUFBZTtDQUNoQjtBQUNBO1FBQ08sa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsd0NBQXdDO1FBQ3hDLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsU0FBUztRQUNULGdCQUFnQjtNQUNsQjtBQUNBO1FBQ0UsY0FBYztNQUNoQiIsImZpbGUiOiJzcmMvYXBwL2J1eWVycy9idXllcnMtb3JkZXJzL2J1eWVycy1vcmRlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5WZW5kb3JPcmRlclNjZXRpb257XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gIFxyXG4gICAgYmFja2dyb3VuZDogI2YwZjJmNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxudGJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZVxyXG59XHJcbnVsI2hvcml6b250YWwtbGlzdCB7XHJcblx0bWluLXdpZHRoOiA2OTZweDtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdHBhZGRpbmctdG9wOiAyMHB4O1xyXG5cdH1cclxuXHR1bCNob3Jpem9udGFsLWxpc3QgbGkge1xyXG5cdFx0ZGlzcGxheTogaW5saW5lO1xyXG5cdH1cclxuXHQuZm9vdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMzIsIDIzMiwgMjMyKTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgICAgW256LXJhZGlvXSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/buyers/buyers-orders/buyers-orders.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/buyers/buyers-orders/buyers-orders.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row class=\"VendorOrderScetion\">\r\n  <form class=\"vendorQForm\" nz-form [nzLayout]=\"'inline'\" [formGroup]=\"BuyersOrderForm\">\r\n    <div nz-col nzSpan=\"4\">\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n            <nz-date-picker nzPlaceHolder=\"From Date\" formControlName=\"Start_Date\"></nz-date-picker>\r\n            <nz-form-explain\r\n              *ngIf=\"BuyersOrderForm.get('Start_Date')?.dirty && BuyersOrderForm.get('Start_Date')?.errors\">\r\n              Please start select date!\r\n            </nz-form-explain>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n    </div>\r\n    <div nz-col nzSpan=\"4\">\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n\r\n          <nz-form-control>\r\n            <nz-date-picker formControlName=\"End_Date\"></nz-date-picker>\r\n            <nz-form-explain *ngIf=\"BuyersOrderForm.get('End_Date')?.dirty && BuyersOrderForm.get('End_Date')?.errors\">\r\n              Please Select End_Date!\r\n            </nz-form-explain>\r\n          </nz-form-control>\r\n\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n    </div>\r\n\r\n  </form>\r\n</div>\r\n\r\n<div nz-row style=\"margin-top: 25px;\">\r\n  <div nz-col nzSpan=\"24\">\r\n    <nz-table #basicTable nzShowPagination=\"false\" [nzLoading]=\"isloading\" nzLoadingDelay=\"1\" [nzData]=\"BuyersrderList\">\r\n      <thead>\r\n        <tr>\r\n          <th>More</th>\r\n          <th>Order Number</th>\r\n\r\n          <th>Payment Type</th>\r\n          <th>Payment Status</th>\r\n          <th>Cart Final Price</th>\r\n          <th>Delivery Type</th>\r\n          <th>Order Status</th>\r\n          <th>created at</th>\r\n          <th></th>\r\n          <th></th>\r\n          <th></th>\r\n          <th></th>\r\n\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <ng-container *ngFor=\"let data of BuyersrderList;let i=index\">\r\n          <tr>\r\n            <td>\r\n              <a (click)=\"onDetail_View(data,i)\">\r\n                <i class=\"fa fa-caret-down\" style=\"cursor: pointer;font-size: 18px\" *ngIf=\"isDetailsView!=i\"\r\n                  aria-hidden=\"true\"></i>\r\n                <i class=\"fa fa-caret-up\" style=\"cursor: pointer;font-size: 18px\" *ngIf=\"isDetailsView==i\"\r\n                  aria-hidden=\"true\"></i>\r\n              </a>\r\n            </td>\r\n            <td>{{data.Order_Number}}</td>\r\n\r\n            <td>\r\n              <span [ngSwitch]=\"data.Payment_Type\">\r\n                <p *ngSwitchCase=\"0\">NA</p>\r\n                <p *ngSwitchCase=\"1\">Wallet</p>\r\n                <p *ngSwitchCase=\"2\">Razor Pay</p>\r\n                <p *ngSwitchCase=\"3\">Both</p>\r\n                <p *ngSwitchCase=\"4\">Shop payment</p>\r\n                <p *ngSwitchDefault>No Payment Type</p>\r\n              </span>\r\n            </td>\r\n\r\n\r\n            <td>\r\n              <span [ngSwitch]=\"data.Payment_Status\">\r\n                <p *ngSwitchCase=\"0\">NA</p>\r\n                <p *ngSwitchCase=\"1\">Initial</p>\r\n                <p *ngSwitchCase=\"2\">Fail</p>\r\n                <p *ngSwitchCase=\"3\">Success</p>\r\n                <p *ngSwitchCase=\"4\">Shop payment</p>\r\n                <p *ngSwitchDefault>No Payment Status</p>\r\n              </span>\r\n            </td>\r\n\r\n            <!-- <td *ngIf=\"data.Payment_Status==0\">NA</td>\r\n            <td *ngIf=\"data.Payment_Status==1\">Initial</td>\r\n            <td *ngIf=\"data.Payment_Status==2\">Fail</td>\r\n            <td *ngIf=\"data.Payment_Status==3\">Success</td>\r\n            <td *ngIf=\"data.Payment_Status==4\">Shop payment</td> -->\r\n\r\n            <td>{{data.Cart_Final_Price}}</td>\r\n\r\n            <td>\r\n              <span [ngSwitch]=\"data.Delivery_Type\">\r\n                <p *ngSwitchCase=\"1\">Drop at your Home</p>\r\n                <p *ngSwitchCase=\"2\">Collect at Store</p>\r\n                <p *ngSwitchCase=\"3\">Pay & collect at store</p>\r\n                <p *ngSwitchDefault>No Delivery Type</p>\r\n              </span>\r\n            </td>\r\n\r\n            <!-- <td *ngIf=\"data.Delivery_Type==1\">Drop at your Home</td>\r\n            <td *ngIf=\"data.Delivery_Type==2\">Collect at Store</td>\r\n            <td *ngIf=\"data.Delivery_Type==3\">Pay & collect at store</td> -->\r\n\r\n\r\n            <td>\r\n              <span [ngSwitch]=\"data.Order_Status\">\r\n                <p *ngSwitchCase=\"0\">NA</p>\r\n                <p *ngSwitchCase=\"1\">Started</p>\r\n                <p *ngSwitchCase=\"2\">Cancelled</p>\r\n                <p *ngSwitchCase=\"3\">Completed</p>\r\n                <p *ngSwitchCase=\"4\">Cancelled by admin</p>\r\n                <p *ngSwitchDefault>No Order Status</p>\r\n              </span>\r\n            </td>\r\n            <td>{{data.created_at | date:'medium'}}</td>\r\n\r\n            <!-- <td *ngIf=\"data.Order_Status==0\">NA</td>\r\n            <td *ngIf=\"data.Order_Status==1\">Started</td>\r\n            <td *ngIf=\"data.Order_Status==2\">Cancelled</td>\r\n            <td *ngIf=\"data.Order_Status==3\">Completed</td>\r\n            <td *ngIf=\"data.Order_Status==4\">Cancelled by admin</td> -->\r\n\r\n            <td colspan=\"3\">\r\n              <span *ngIf=\"data.Order_Status!=3 && data.Delivery_Type==1;else nothing\">\r\n                <span style=\"color: #096bc5;\" (click)=\"openChange(data)\">Change Status</span>\r\n                <nz-divider nzType=\"vertical\"></nz-divider>\r\n                <a nz-popconfirm nzTitle=\"Are you sure Complete this task?\" nzPopconfirmPlacement=\"bottom\"\r\n                  nzPopconfirmPlacement=\"left\" (nzOnConfirm)=\"confirm(data,1)\"><span\r\n                    style=\"color: #08a21b;\">Complete</span></a>\r\n\r\n                <nz-divider nzType=\"vertical\"></nz-divider>\r\n                <a nz-popconfirm nzTitle=\"Are you sure delete this task?\" nzPopconfirmPlacement=\"bottom\"\r\n                  nzPopconfirmPlacement=\"left\" (nzOnConfirm)=\"confirm(data,2)\"><span\r\n                    style=\"color: #f32626;\">Delete</span></a>\r\n              </span>\r\n              <ng-template #nothing>\r\n                <span>NA</span>\r\n              </ng-template>\r\n            </td>\r\n            <td >\r\n              <a  (click)=\"onCreateShipRocketet(data,i)\" *ngIf=\"data.Shiprocket_Order_LogID==''\">Create ShipRocket</a>\r\n             \r\n              <a nz-popconfirm (nzOnConfirm)=\"onCancelShipRocketet(data)\"\r\n              nzTitle=\"Are you sure you want Cancel?\"   *ngIf=\"data.Shiprocket_Order_LogID!=''\">Cancel ShipRocket</a>\r\n            </td>\r\n          </tr>\r\n          <tr [nzExpand]=\"isDetailsView==i\">\r\n            <td colspan=\"12\">\r\n              <div nz-row style=\"margin-top: 25px;\">\r\n                <div nz-col nzSpan=\"24\">\r\n                  <ul nz-menu class=\"navigationMenu\" [nzMode]=\"'horizontal'\">\r\n                    <li nz-menu-item [class.ant-menu-item-selected]=\"IsVisible_data==1\" (click)=\"click_button(data,1)\">\r\n                      Basic Information\r\n                    </li>\r\n                    <li nz-menu-item  [class.ant-menu-item-selected]=\"IsVisible_data==2\" (click)=\"click_button(data,2)\">\r\n                      Product List\r\n\r\n                    </li>\r\n                    <li nz-menu-item [class.ant-menu-item-selected]=\"IsVisible_data==3\" (click)=\"click_button(data,3)\">\r\n                      Logs\r\n\r\n                    </li>\r\n                    <li *ngIf=\"data.Shiprocket_Order_LogID.length>0\"  [class.ant-menu-item-selected]=\"IsVisible_data==4\" nz-menu-item (click)=\"click_button(data,4)\">\r\n                      ShipRocket Order Info\r\n\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n              <div nz-row style=\"margin-top: 25px;\">\r\n\r\n                <div nz-col nzSpan=\"24\" *ngIf=\"IsVisible_data==1\">\r\n                  <div nz-row style=\"margin-top: 25px;\">\r\n                    <div nz-col nzSpan=\"8\">\r\n                      <div style=\"background: #fff;padding:30px;\">\r\n                        <nz-card style=\"width:300px;height: 215px;\" [nzBordered]=\"false\" nzTitle=\"Paid Amount\">\r\n                          <p>Amount Used From Wallet : {{data.Amount_Paid.Amount_Used_From_Wallet}}</p>\r\n                          <p>Amount Paid Online : {{data.Amount_Paid.Amount_Paid_Online}}</p>\r\n                          <p>Total Amount Paid : {{data.Amount_Paid.Total_Amount_Paid}}</p>\r\n                        </nz-card>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div nz-col nzSpan=\"16\">\r\n                      <div style=\"background: #fff;padding:30px;\">\r\n                        <nz-card style=\"width:600px;height: 215px;\" [nzBordered]=\"false\"\r\n                          nzTitle=\"Delivery Address Information\">\r\n                          <nz-table #basicTable nzShowPagination=\"false\" [nzLoading]=\"isloading\" nzLoadingDelay=\"1\"\r\n                            [nzData]=\"BuyersrderList\">\r\n      <tbody>\r\n        <tr>\r\n          <td>\r\n            <p>Name : {{data.Delivery_Address_Information.Name}}</p>\r\n            <p>Phone Number : {{data.Delivery_Address_Information.PhoneNumber}}</p>\r\n            <p>Flat No : {{data.Delivery_Address_Information.Flat_No}}</p>\r\n          </td>\r\n          <td>\r\n            <p>City : {{data.Delivery_Address_Information.City}}</p>\r\n            <p>Postal Code : {{data.Delivery_Address_Information.Postal_Code}}</p>\r\n            <p>State : {{data.Delivery_Address_Information.State}}</p>\r\n            <p>Address : {{data.Delivery_Address_Information.Address}}</p>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </nz-table>\r\n\r\n    </nz-card>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n<div nz-col nzSpan=\"24\" *ngIf=\"IsVisible_data==2\">\r\n  <nz-table #basicTable nzShowPagination=\"false\" [nzLoading]=\"isloading\" nzLoadingDelay=\"1\" [nzData]=\"BuyersrderList\">\r\n    <thead>\r\n      <tr>\r\n        <th>Product Name</th>\r\n        <th>Product Details\r\n          <i class=\"fa fa-info-circle\" nzTitle=\"Price X Quantity = Total\" nzPlacement=\"topLeft\" nz-tooltip\r\n            nzTrigger=\"hover\" style=\"font-size:15px\"></i>\r\n        </th>\r\n        <th nzWidth=\"100px\" nzRight=\"0px\"></th>\r\n\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let sub of data.Cart_Information;let i=index\">\r\n        <td>{{sub.Product_Name}}</td>\r\n        <td>{{sub.Product_Price}} X {{sub.Product_Quantity}} = {{sub.Product_Sub_Total}}</td>\r\n        <td nzRight=\"0px\"><a nz-popover nzTitle=\"Shares\" [nzContent]=\"contentTemplate\" nzPlacement=\"left\">shares</a>\r\n        </td>\r\n        <ng-template #contentTemplate>\r\n          <div>\r\n            <p>Introducer Share : {{sub.Product_Price_Divisions.Introducer_Share}}%</p>\r\n            <p>Buyer Share : {{sub.Product_Price_Divisions.Buyer_Share}}%</p>\r\n            <p> Shop Share : {{sub.Product_Price_Divisions.Shop_Share}}%</p>\r\n            <p>Company Share : {{sub.Product_Price_Divisions.Company_Share}}%</p>\r\n\r\n          </div>\r\n        </ng-template>\r\n      </tr>\r\n\r\n    <tbody>\r\n  </nz-table>\r\n</div>\r\n<div nz-col nzSpan=\"24\" *ngIf=\"IsVisible_data==3\">\r\n\r\n  <nz-table #basicTable nzShowPagination=\"false\" [nzLoading]=\"isloading\" nzLoadingDelay=\"1\" [nzData]=\"BuyersrderList\">\r\n    <thead>\r\n      <tr>\r\n        <th></th>\r\n        <th>Status</th>\r\n        <th>Description</th>\r\n        <th>Time</th>\r\n\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <ng-container *ngFor=\"let or of data.Order_Report;let i=index\">\r\n        <tr>\r\n          <td>{{skip+i+1}}</td>\r\n          <td>{{or.Title}}</td>\r\n          <td>{{or.Description}}</td>\r\n          <td>{{or.Time | date:'medium'}}</td>\r\n        </tr>\r\n      </ng-container>\r\n    </tbody>\r\n  </nz-table>\r\n</div>\r\n<div nz-col nzSpan=\"24\" *ngIf=\"IsVisible_data==4\">\r\n  <div *ngIf=\"singliShipRocketDetails.Shiprocket_Order_Number!=undefined\">\r\n    <h4>\r\n      <b> {{singliShipRocketDetails.Shiprocket_Order_Number}} </b>\r\n  \r\n    </h4>\r\n    <div nz-row [nzGutter]=\"8\">\r\n      <div nz-col nzSpan=\"8\">\r\n        <span>Courier Name </span>: <b> {{singliShipRocketDetails.Courier_Name}} </b>\r\n      </div>\r\n      <div nz-col nzSpan=\"8\">\r\n        <span>AWB </span>: <b> {{singliShipRocketDetails.AWB}} </b>\r\n      </div>\r\n      <div nz-col nzSpan=\"8\">\r\n        <span>Shipment Status </span>: <b> {{singliShipRocketDetails.Shipment_Status}} </b>\r\n      </div>\r\n    </div>\r\n    <nz-table #basicTable nzShowPagination=\"false\" *ngIf=\"singliShipRocketDetails.Scans.Length>0\" nzLoadingDelay=\"1\" [nzData]=\"singliShipRocketDetails.Scans\">\r\n      <thead>\r\n        <tr>\r\n          <th></th>\r\n          <th>date</th>\r\n          <th>activity</th>\r\n          <th>location</th>\r\n         \r\n  \r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <ng-container *ngFor=\"let or of singliShipRocketDetails.Scans;let i=index\">\r\n          <tr>\r\n            <td>{{skip+i+1}}</td>\r\n            <td>{{or.date | date:'medium'}}</td>\r\n            <td>{{or.activity}}</td>\r\n            <td>{{or.location}}</td>\r\n           \r\n          </tr>\r\n        </ng-container>\r\n      </tbody>\r\n    </nz-table>\r\n  </div>\r\n  \r\n</div>\r\n</div>\r\n</td>\r\n</tr>\r\n</ng-container>\r\n</tbody>\r\n</nz-table>\r\n</div>\r\n<nz-pagination (nzPageIndexChange)=\"onNextPage($event)\" [nzPageSize]=\"limit\" [nzPageIndex]=\"currentPage\"\r\n  [nzTotal]=\"TotalItems\"></nz-pagination>\r\n\r\n<nz-modal [(nzVisible)]=\"isVisible\" nzTitle=\"Change Status\" (nzOnCancel)=\"handleCancel()\" (nzOnOk)=\"handleOk()\">\r\n  <form class=\"vendorQForm\" nz-form [nzLayout]=\"'inline'\" [formGroup]=\"ChangeBuyerForm\">\r\n    <nz-form-item>\r\n      <nz-form-label [nzSpan]=\"4\" nzRequired>Title</nz-form-label>\r\n      <nz-form-control [nzSpan]=\"16\" style=\"width:300px\">\r\n        <input required type=\"text\" formControlName=\"Title\" placeholder=\"Title\" nz-input ngModel name=\"Title\">\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n    <nz-form-item>\r\n      <nz-form-label [nzSpan]=\"6\" nzRequired>Description</nz-form-label>\r\n      <nz-form-control [nzSpan]=\"16\" style=\"width:300px\">\r\n        <textarea formControlName=\"Description\" nz-input rows=\"2\" placeholder=\"write any thing\"></textarea>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n  </form>\r\n</nz-modal>\r\n</div>\r\n<nz-drawer\r\n[nzBodyStyle]=\"{ height: 'calc(100% - 55px)', overflow: 'auto', 'padding-bottom': '53px' }\"\r\n[nzMaskClosable]=\"false\"\r\n[nzWidth]=\"850\"\r\n[nzVisible]=\"isShipRocketModal\"\r\n[nzTitle]=\"cardTitle\"\r\n(nzOnClose)=\"onCancelShipRocketOrder()\"\r\n>\r\n\r\n <ng-template #cardTitle>\r\n    <h4 *ngIf=\"selectedOrder.Order_Number!=undefined\">\r\n      Create Ship Rocket Order For <b>{{selectedOrder.Order_Number}}</b>\r\n    </h4>\r\n  </ng-template>\r\n  <div nz-row>\r\n    <div nz-col nzSpan=\"10\">  <form nz-form [formGroup]=\"shipRocketOrderForm\">\r\n      <nz-form-item>\r\n        <nz-form-label [nzSpan]=\"9\" nzRequired>Length (in Cm)</nz-form-label>\r\n        <nz-form-control [nzSpan]=\"9\">\r\n          <input required type=\"text\" formControlName=\"Length\" placeholder=\"Length\" nz-input>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-label [nzSpan]=\"9\" nzRequired>Breadth (in Cm)</nz-form-label>\r\n        <nz-form-control [nzSpan]=\"9\">\r\n          <input required type=\"text\" formControlName=\"Breadth\" placeholder=\"Breadth\" nz-input>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-label [nzSpan]=\"9\" nzRequired>Height (in Cm)</nz-form-label>\r\n        <nz-form-control [nzSpan]=\"9\">\r\n          <input required type=\"text\" formControlName=\"Height\" placeholder=\"Height\" nz-input>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-label [nzSpan]=\"9\" nzRequired>Weight (in Cm)</nz-form-label>\r\n        <nz-form-control [nzSpan]=\"9\">\r\n          <input required type=\"text\" formControlName=\"Weight\" placeholder=\"Weight\" nz-input>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n    </form>\r\n    <button type=\"button\" style=\"margin-left: 20px; margin-bottom: 20px;\"nz-button (click)=\"onCreateShipRocketOrder()\" [nzLoading]=\"isPriceChecking\" class=\"ant-btn ant-btn-primary\"><span>Check For Price</span></button>\r\n\r\n  </div>\r\n\r\n\r\n    <div nz-col nzSpan=\"14\" *ngIf=\"ShipOrderPricingData.length>0\">\r\n      <!-- creation of table -->\r\n      <nz-table #basicTable  nzShowPagination=\"false\"\r\n       [nzData]=\"ShipOrderPricingData\"\r\n       [nzLoading]=\"isPriceChecking\">\r\n        <thead>\r\n          <tr>\r\n            <th></th>\r\n            <th>Courier Name</th>\r\n            <th>Rate</th>\r\n            <th>Rating</th>\r\n            <th>Mode</th>\r\n            <th>Etd</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          \r\n          <tr *ngFor=\"let data of ShipOrderPricingData;let i=index\">\r\n        <!-- radio buttons -->\r\n        <td>\r\n          <nz-radio-group [(ngModel)]=\"selectedOrders\">\r\n            <label nz-popconfirm (nzOnConfirm)=\"createShipRocketOrderToServer(data)\"\r\n              nzTitle=\"Are you sure ?\"  nz-radio [nzValue]=\"data\"></label>\r\n\r\n          </nz-radio-group>\r\n        </td>\r\n\r\n         <td>{{data.courier_name}}</td>\r\n         <td>{{data.rate}}</td>\r\n         <td>{{data.rating}}</td>\r\n         <td>{{data.etd}}</td>\r\n          <td>{{data.mode==0?'surface':'air' }}</td>\r\n        </tr>\r\n    </tbody>\r\n      </nz-table>\r\n\r\n\r\n\r\n   <!-- creation of table -->\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"footer\">\r\n    <button type=\"button\" (click)=\"onCancelShipRocketOrder()\" class=\"ant-btn\" style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n  </div>\r\n</nz-drawer>"

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