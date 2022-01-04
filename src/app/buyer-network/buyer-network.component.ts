import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-buyer-network',
  templateUrl: './buyer-network.component.html',
  styleUrls: ['./buyer-network.component.css']
})
export class BuyerNetworkComponent implements OnInit {
  totalItem: any;
  NetworkData: any=[];
  childrenData: any;

  constructor(private _appService: AppService,
    private nzMessageService: NzMessageService) { }
  ngOnInit() {
    this.ViewBuyersList("")
  }
  ViewBuyersList(BuyerID){
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
      let body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        BuyerID:BuyerID,
       
      }
      try {
  
        this._appService.postMethod('Buyer_Network_Heirarchy', body)
          .subscribe(resp => {
  
            if (resp.success) {
             // this.totalItem=resp.extras.Count
              this.NetworkData=resp.extras.ParentData
              this.childrenData=resp.extras.ChildData
            } else {
              this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);
  
  
            }
          },
            error => {
  
            })
      } catch (e) {
  
      }
  }
onclickNetwork(data){
this.ViewBuyersList(data.BuyerID)
}
onBack(){
  this.ViewBuyersList("")
}
}
