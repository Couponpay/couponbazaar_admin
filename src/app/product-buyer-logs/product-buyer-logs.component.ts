import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-product-buyer-logs',
  templateUrl: './product-buyer-logs.component.html',
  styleUrls: ['./product-buyer-logs.component.css']
})
export class ProductBuyerLogsComponent implements OnInit {
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
    this.getBuyerLogs()
  }
  getBuyerLogs() {
    this.isloading = true
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))

    let userdata = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      skip: this.skip,
      limit: this.limit
    }
    try {

      this._appService.postMethod('Buyer_Purchase_Logs', userdata)
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
    this.getBuyerLogs()
  }
}
