import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-introducer-logs',
  templateUrl: './introducer-logs.component.html',
  styleUrls: ['./introducer-logs.component.css']
})
export class IntroducerLogsComponent implements OnInit {

  totalItem: any;
  intoroducerLogs: any=[];
  sub: any;
  id: number;
  introducerId: any;
  introducerName: any;
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
this.introducerId=params.id
this.introducerName=params.name
this.avilableAmout=params.avilableAmount
this.withdrwanAmount=params.withdrwanAmount
this.totalAmount=params.totalAmount
this.getLogsByintroducer(this.introducerId,0)
    });
  }
  getLogsByintroducer(IntroducerID, skip) {
    this.isLoadingLogs=true
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      IntroducerID: IntroducerID,
      skip: skip,
      limit: this._appService.limit
    }
    try {

      this._appService.postMethod('List_All_Introducer_Share_Logs', body)
        .subscribe(resp => {
          this.isLoadingLogs=false

          if (resp.success) {
            this.totalItem = resp.extras.Count
            if(skip==0){
              this.currentPage=1
            }
            this.intoroducerLogs = resp.extras.Data
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
    this.getLogsByintroducer(this.introducerId,skip)
  }

}
