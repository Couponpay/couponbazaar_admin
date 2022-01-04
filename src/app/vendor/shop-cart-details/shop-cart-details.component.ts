import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { NzMessageService } from 'ng-zorro-antd';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-shop-cart-details',
  templateUrl: './shop-cart-details.component.html',
  styleUrls: ['./shop-cart-details.component.css']
})
export class ShopCartDetailsComponent implements OnInit {
  cartDetails: any[];
  singleShopDetails: any = [];
  PurchaseLogs: any = [];
  validateForm: FormGroup;
  changestatus: string;
  chagnelogUrl: string;
  PurchaseID: any;
  shopName: any[];

  constructor(private _appService: AppService,
    private fb: FormBuilder,
    private nzMessageService: NzMessageService) { }
  ngOnInit() {
    let singleOrdertails: any = this._appService.singleShopCartDetails
    this.shopName = singleOrdertails.Shop_Name
    this.PurchaseID = singleOrdertails.PurchaseID
    this.getPurchasedetails()


    this.validateForm = this.fb.group({
      changestatus: [null, [Validators.required]],
      comment: [null, [Validators.required]],

    });
  }
  getPurchasedetails() {
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      PurchaseID: this.PurchaseID
    }
    try {

      this._appService.postMethod('Get_Purchase_Details', body)
        .subscribe(resp => {

          if (resp.success) {
            this.singleShopDetails = resp.extras.Data
            this.cartDetails = this.singleShopDetails.Cart_Information
            this.PurchaseLogs = this.singleShopDetails.PurchaseLogs

            switch (this.singleShopDetails.PurchaseStatus) {
              case 1:
                this.chagnelogUrl = 'Accept_Shop_Purchase'
                this.changestatus = 'Order Accepted'
                break;
              case 2:
                this.chagnelogUrl = 'Shipping_Shop_Purchase'
                this.changestatus = 'Order Shipped'
                break;
              case 3:
                this.chagnelogUrl = 'Shipping_Notification_Shop_Purchase'
                this.changestatus = 'Shippment Notifications '
                break;
              case 4:
                this.chagnelogUrl = 'Shipping_Notification_Shop_Purchase'
                this.changestatus = 'Shippment Notifications '
                break;


              default:
                break;
            }

          } else {
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


          }
        },
          error => {

          })
    } catch (e) {

    }

  }
  submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      let adminData: any = JSON.parse(localStorage.getItem("adminData"))
      let body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        PurchaseID: this.singleShopDetails.PurchaseID,
        Description: this.validateForm.value.comment
      }
      try {

        this._appService.postMethod(this.chagnelogUrl, body)
          .subscribe(resp => {

            if (resp.success) {
              this.validateForm.reset()

              this.nzMessageService.success('update sucessfully')
              this.getPurchasedetails()

            } else {
              this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


            }
          },
            error => {

            })
      } catch (e) {

      }



    }

  }

}
