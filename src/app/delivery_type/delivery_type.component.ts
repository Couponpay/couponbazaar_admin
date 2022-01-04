import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-delivery_type',
  templateUrl: './delivery_type.component.html',
  styleUrls: ['./delivery_type.component.css']
})
export class Delivery_typeComponent implements OnInit {
  isloading: boolean;
  DeliveyTypeList = [];

  constructor(
    private _appService: AppService,
    private nzMessageService: NzMessageService
  ) {
  }

  ngOnInit() {
    this.getDeliveryType()
  }
getDeliveryType(){
  this.isloading = true
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))

    let userdata = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
          }
    try {

      this._appService.postMethod('List_All_Delivery_Type', userdata)
        .subscribe(resp => {
          this.isloading = false

          if (resp.success) {
            
            this.DeliveyTypeList = resp.extras.Data
            console.log(this.DeliveyTypeList)
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
onAction(data,i) {
  let adminData: any = JSON.parse(localStorage.getItem("adminData"))
  let body = {
    AdminID: adminData.AdminID,
    SessionID: adminData.SessionID,
    Delivery_TypeID: data.Delivery_TypeID
  }
  try {

    this._appService.postMethod('Active_Inactive_Delivery_Type', body)
      .subscribe(resp => {
        if (resp.success) {
          let msg;
          if (data.Status) {
            msg = 'Inactivated Successfully'
          } else {
            msg = 'Activated Successfully'
          }
          this.getDeliveryType()
          this.nzMessageService.success(msg)

        } else {
          this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);

        }
      },
        error => {

        })
  } catch (e) { }
}
}
