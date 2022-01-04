import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.css']
})
export class BuyersComponent implements OnInit {

  totalItem: any;
  buyersList: any=[];
  limit=this._appService.limit
  currentPage=1
  constructor(private _appService: AppService,
    private router:Router,
    private nzMessageService: NzMessageService) { }
  ngOnInit() {
    this.ViewBuyersList(0)
  }
  ViewBuyersList(skip){
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
      let body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        skip:skip,
        limit:this._appService.limit
      }
      try {
  
        this._appService.postMethod('List_All_Buyers', body)
          .subscribe(resp => {
  
            if (resp.success) {
              this.totalItem=resp.extras.Count
              if(skip==0){
                this.currentPage=1
              }
              this.buyersList=resp.extras.Data
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
    this.currentPage=this.currentPage
    let skip=(event-1)*this._appService.limit
    this.ViewBuyersList(skip)
  }

}
