import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-companyLogs',
  templateUrl: './companyLogs.component.html',
  styleUrls: ['./companyLogs.component.css']
})
export class CompanyLogsComponent implements OnInit {
  companyLogs: any;
  totalItem: any;
  companyShareData: any=[];
  isLoadingLogs: boolean;
  limit=this._appService.limit
  currentPage=1
  constructor(private route: ActivatedRoute,
    private _appService: AppService,
    private nzMessageService: NzMessageService) {}
  ngOnInit() {
    this.getLogsBycompany(0)
  }

  getLogsBycompany( skip) {
    this.isLoadingLogs=true
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      skip: skip,
      limit: this._appService.limit
    }
    try {

      this._appService.postMethod('Company_Share_Information_and_Logs', body)
        .subscribe(resp => {

          if (resp.success) {
            this.isLoadingLogs=false

            this.totalItem = resp.extras.Count
            this.companyLogs = resp.extras.Data
            if(skip==0){
              this.currentPage=1
            }
            this.companyShareData=resp.extras.Company_Share_Data
            // this.shopName = this.productsOfshop[0].Shop_Name
           


          } else {
            this.isLoadingLogs=false

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
    this.getLogsBycompany(skip)
  }

}
