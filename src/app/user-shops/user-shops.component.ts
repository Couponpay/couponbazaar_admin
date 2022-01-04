import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
import { NzMessageService } from 'ng-zorro-antd';
@Component({
  selector: 'app-user-shops',
  templateUrl: './user-shops.component.html',
  styleUrls: ['./user-shops.component.css']
})
export class UserShopsComponent implements OnInit {
  selectedtab: any;
  isloading: boolean;
  skip = 0
  limit = this._appService.limit
  currentPage = 1
  totalItem: any;
  shopsData = [];

  constructor(
    private fb: FormBuilder,
    private _appService: AppService,
    private nzMessageService: NzMessageService
  ) { }

  ngOnInit() {
    this.onChangeTab(1)
  }
  onChangeTab(event) {
    this.selectedtab = event
    this.skip = 0
    this.getUserShops()
  }
  getUserShops() {
    this.isloading = true
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))

    let userdata = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      Status: this.selectedtab,
      skip: this.skip,
      limit: this.limit
    }
    try {

      this._appService.postMethod('List_All_User_Shops', userdata)
        .subscribe(resp => {
          this.isloading = false

          if (resp.success) {
            if (this.skip == 0) {
              this.currentPage = 1
            }
            this.totalItem = resp.extras.Count
            this.shopsData = resp.extras.Data
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
    this.getUserShops()
  }
  onActionOn(data,type) {
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))

    let userdata = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      Users_ShopsID: data.Users_ShopsID,
      Approve_Reject: type
    }
    try {

      this._appService.postMethod('Accept_Reject_User_Shop', userdata)
        .subscribe(resp => {

          if (resp.success) {
            this.nzMessageService.success(resp.extras.Status)
            this.getUserShops()
          } else {
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


          }
        },
          error => {

          })
    } catch (e) {

    }

  }
}
