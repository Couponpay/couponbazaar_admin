import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop_purchases',
  templateUrl: './shop_purchases.component.html',
  styleUrls: ['./shop_purchases.component.css']
})
export class Shop_purchasesComponent implements OnInit {
  purchaseListCount: any;
  shopPurchasesList: any;
  cartInformation: any;
  isCartVisible: boolean;
  shopName: any;
  limit=this._appService.limit
  currentPage=1
  constructor(private _appService: AppService,
    private router:Router,
    private nzMessageService: NzMessageService) { }
  ngOnInit() {

    this.getShopPurchases(0)
  }


  getShopPurchases(skip) {
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      skip: skip,
      limit: this._appService.limit


    }
    try {

      this._appService.postMethod('List_All_Shop_Purchases', body)
        .subscribe(resp => {

          if (resp.success) {
            if(skip==0){
              this.currentPage=1
            }
            this.purchaseListCount = resp.extras.Count
            this.shopPurchasesList = resp.extras.Data


          } else {
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


          }
        },
          error => {

          })
    } catch (e) {

    }
  }
  onNextPage_purchaseList(event: number) {
    this.currentPage=event
    let skip = (event - 1) * this._appService.limit
    this.getShopPurchases(skip)
  }
  onViewCart(item){
    this._appService.singleShopCartDetails=item

    this.router.navigate(['/dashboard','vendor','cartdetails',item.Shop_Name],{skipLocationChange:true})
    // this.shopName=item.Shop_Name
    // this.cartInformation=item.Cart_Information
    // this.isCartVisible=true;
  }
  handleCancel(){
    this.isCartVisible=false
  }
  handleOk(){
    this.isCartVisible=false
  }
}
