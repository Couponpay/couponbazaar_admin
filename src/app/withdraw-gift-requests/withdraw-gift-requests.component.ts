import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-withdraw-gift-requests',
  templateUrl: './withdraw-gift-requests.component.html',
  styleUrls: ['./withdraw-gift-requests.component.css']
})
export class WithdrawGiftRequestsComponent implements OnInit {
  isloading: boolean;
  skip = 0
  limit = this._appService.limit
  currentPage = 1
  totalItem: any;
  totalLogs = [];
  constructor(
    private _appService: AppService,
    private nzMessageService: NzMessageService
  ) { }

  ngOnInit() {
    this.getTotalRequests()
  }
  getTotalRequests() {
    this.isloading = true
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))

    let userdata = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      skip: this.skip,
      limit: this.limit
    }
    try {

      this._appService.postMethod('List_With_Draw_Gift_Amount_Requests', userdata)
        .subscribe(resp => {
          this.isloading = false

          if (resp.success) {
            if (this.skip == 0) {
              this.currentPage = 1
            }
            this.totalItem = resp.extras.Count
            this.totalLogs = resp.extras.Data
          } else {
            this.isloading = false
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


          }
        },
          error => {

          })
    } catch (e) {

    }

  }
  onNextPage(event: number) {
    this.currentPage = this.currentPage
    this.skip = (event - 1) * this.limit
    this.getTotalRequests()
  }
}
