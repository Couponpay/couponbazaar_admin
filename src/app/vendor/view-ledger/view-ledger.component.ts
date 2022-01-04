import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-view-ledger',
  templateUrl: './view-ledger.component.html',
  styleUrls: ['./view-ledger.component.css']
})
export class ViewLedgerComponent implements OnInit {
  totalItem: any;
  shopLogs: any;
  sub: any;
  id: number;
  shopId: any;
  shopName: any;
  shopPhoneNumber: any;
  Total_Amount: any;
  withdrwanAmount: any;
  avilableAmount: any;
  isLoadingLogs: boolean;
  isVisibleshopCart: boolean;
  cartInformation: any=[];
  limit=this._appService.limit
  currentPage=1
  constructor(private route: ActivatedRoute,
    private _appService: AppService,
    private nzMessageService: NzMessageService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
this.shopId=params.id
this.shopName=params.name
this.Total_Amount=params.totalAmount
this.withdrwanAmount=params.withdrwanAmount
this.avilableAmount=params.avilableAmount
this.shopPhoneNumber=params.phone
this.getLogsByshop(this.shopId,0)
    });
  }
  getLogsByshop(shopid, skip) {
    this.isLoadingLogs=true
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      ShopID: shopid,
      skip: skip,
      limit: this._appService.limit
    }
    try {

      this._appService.postMethod('List_All_Shop_Share_Logs', body)
        .subscribe(resp => {
this.isLoadingLogs=false
if(skip==0){
  this.currentPage=1
}
          if (resp.success) {
            this.totalItem = resp.extras.Count
            this.shopLogs = resp.extras.Data


          } else {
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


          }
        },
          error => {

          })
    } catch (e) {

    }
  }
  onNextPage(event:number){
    this.currentPage=event
    let skip=(event-1)*this._appService.limit
    this.getLogsByshop(this.shopId,skip)
  }
   percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
 } 
 OnshowStock(item){
this.cartInformation=item.Data.Cart_Information
   this.isVisibleshopCart=true
 }
 handleCancel(){
   this.isVisibleshopCart=false
 }
 handleOk(){
   this.isVisibleshopCart=false
 }
}
