import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-introducer',
  templateUrl: './introducer.component.html',
  styleUrls: ['./introducer.component.css']
})
export class IntroducerComponent implements OnInit {
  totalItem: any;
  IntoducersList: any=[];
  limit=this._appService.limit
  currentPage=1
  constructor(private _appService: AppService,
    private router:Router,
    private nzMessageService: NzMessageService) { }
  ngOnInit() {
    this.ViewIntroducers(0)
  }
  ViewIntroducers(skip){
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
      let body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        skip:skip,
        limit:this._appService.limit
      }
      try {
  
        this._appService.postMethod('List_All_Introducers', body)
          .subscribe(resp => {
  
            if (resp.success) {
              this.totalItem=resp.extras.Count
              if(skip==0){
                this.currentPage=1
              }
              this.IntoducersList=resp.extras.Data
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
    this.currentPage = event
    let skip=(event-1)*this._appService.limit
    this.ViewIntroducers(skip)
  }
}
