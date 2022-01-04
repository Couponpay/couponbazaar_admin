import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-TrimmerShare',
  templateUrl: './TrimmerShare.component.html',
  styleUrls: ['./TrimmerShare.component.css']
})
export class TrimmerShareComponent implements OnInit {
  date = new Date();
  totalItem: any;
  trimmerData: any=[];
  trimmerShareData: any=[];
  isLoadingLogs: boolean;
  limit=this._appService.limit
  currentPage=1
  constructor(private route: ActivatedRoute,
    private _appService: AppService,
    private nzMessageService: NzMessageService) {}
  ngOnInit() {
    this.getrimmershare(0,this.date)
  }

  getrimmershare( skip,date:Date) {
    this.isLoadingLogs=true
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      Date:`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`,
      skip: skip,
      limit: this._appService.limit
    }
    try {

      this._appService.postMethod('Trimmer_Share_Information_and_Logs_By_Date', body)
        .subscribe(resp => {
          this.isLoadingLogs=false

          if (resp.success) {
            if(skip==0){
              this.currentPage=1
            }
            this.totalItem = resp.extras.Count
            this.trimmerData = resp.extras.Data
            this.trimmerShareData=resp.extras.Trimmer_Share_Data
           


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
    this.getrimmershare(skip,this.date)
  }
  onChange(date:Date){
    if(date!=undefined){
      this.getrimmershare(0,date)
    }else{
      this.nzMessageService.warning('please select Date')
    }
  }
}
