import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-buyer-bills',
  templateUrl: './buyer-bills.component.html',
  styleUrls: ['./buyer-bills.component.css']
})
export class BuyerBillsComponent implements OnInit {
  sub: any;
  buyerId: any;
  buyerName: any;
  totalItem: any;
  buyerBills: any;
  isdetailsview: any;
  cartDetails: any;
  limit=this._appService.limit
  currentPage=1
  constructor(private route: ActivatedRoute,
    private _appService: AppService,
    private nzMessageService: NzMessageService) {}
    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
     
  this.buyerId=params.id
  this.buyerName=params.name
 this.getbuyerBills(0)
      });
    }
    getbuyerBills( skip) {
      let adminData: any = JSON.parse(localStorage.getItem("adminData"))
      let body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        BuyerID: this.buyerId,
        skip: skip,
        limit: this._appService.limit
      }
      try {
  
        this._appService.postMethod('Buyer_List_All_Shop_Bills', body)
          .subscribe(resp => {
  
            if (resp.success) {
              this.totalItem = resp.extras.Count
              if(skip==0){
                this.currentPage=1
              }
              this.buyerBills = resp.extras.Data
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
      this.currentPage = this.currentPage 
      let skip=(event-1)*this._appService.limit
      this.getbuyerBills(skip)
    }
    onViewCart(data,i){
      this.cartDetails=data.Cart_Information
      console.log(this.cartDetails)
      this.isdetailsview=i

    }
    // handleCancel(){
    //   this.iscartModal=false
    // }
    // handleOk(){
    //   this.iscartModal=false
    // }
}
