import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-buyers-logs',
  templateUrl: './buyers-logs.component.html',
  styleUrls: ['./buyers-logs.component.css']
})
export class BuyersLogsComponent implements OnInit {
  totalItem: any;
  NodatTxt:string="   "
  buyersLogs: any=[];
  sub: any;
  id: number;
  buyerId: any;
  buyerName: any;
  avilableAmout: any;
  withdrwanAmount: any;
  totalAmount: any;
  isLoadingLogs: boolean;
  limit=this._appService.limit
  currentPage=1
  constructor(private route: ActivatedRoute,
    private _appService: AppService,
    private nzMessageService: NzMessageService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
this.buyerId=params.id
this.buyerName=params.name
this.avilableAmout=params.avilableAmount
this.withdrwanAmount=params.withdrwanAmount
this.totalAmount=params.totalAmount
this.getLogsByBuyers(this.buyerId,0)
    });
  }
  getLogsByBuyers(buyerId, skip) {
    this.isLoadingLogs=true
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      BuyerID: buyerId,
      skip: skip,
      limit: this._appService.limit
    }
    try {

      this._appService.postMethod('List_All_Buyers_Share_Logs', body)
        .subscribe(resp => {
          this.isLoadingLogs=false

          if (resp.success) {
            this.totalItem = resp.extras.Count
            if(skip==0){
              this.currentPage=1
            }
            this.buyersLogs = resp.extras.Data
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
    this.getLogsByBuyers(this.buyerId,skip)
  }

}
