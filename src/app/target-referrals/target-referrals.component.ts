import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-target-referrals',
  templateUrl: './target-referrals.component.html',
  styleUrls: ['./target-referrals.component.css']
})
export class TargetReferralsComponent implements OnInit {
  isloading: boolean;
  targetReferrals = [];
  skip = 0
  limit = this._appService.limit
  currentPage = 1
  totalItem: any;
  selectedtab: any;
  visible: boolean;
  addForm: FormGroup
  isEditing: boolean;
  selectedData: any;
  ValidatingStatus: string;
  isAddButton: boolean;

  constructor(
    private fb: FormBuilder,
    private _appService: AppService,
    private nzMessageService: NzMessageService
  ) { }

  ngOnInit() {
    this.onChangeTab(1)
    this.addForm = this.fb.group({
      SNo: [null, [Validators.required]],
      Target_Referal: [null, [Validators.required]],
      Wallet_Limit: [null, [Validators.required]],
    });
    this.addForm.get('SNo').valueChanges.subscribe((data: any) => {
      if (this.addForm.get('SNo').valid) {
        this.checkSerialNumber(data)
      } else {
        this.ValidatingStatus = ''
      }

    })
  }
  onChangeTab(event) {
    this.selectedtab = event
    this.skip = 0
    this.getTargetReferrals()
  }
  getTargetReferrals() {
    this.isloading = true
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))

    let userdata = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      Active_Inactive_Status: this.selectedtab == 1 ? true : false,
      skip: this.skip,
      limit: this.limit
    }
    try {

      this._appService.postMethod('List_Target_Referals', userdata)
        .subscribe(resp => {
          this.isloading = false

          if (resp.success) {
            if (this.skip == 0) {
              this.currentPage = 1
            }
            this.totalItem = resp.extras.Count
            this.targetReferrals = resp.extras.Data
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
    this.getTargetReferrals()
  }
  checkSerialNumber(serialNumber: string) {
    if (serialNumber.length > 0) {
      this.ValidatingStatus = "validating"
      let adminData: any = JSON.parse(localStorage.getItem("adminData"))
      let body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        SNo: serialNumber,
        Target_ReferalID: this.isEditing ? this.selectedData.Target_ReferalID : ''
      }
      try {
        this._appService.postMethod('Check_For_Target_Referal_SNo_Available', body)

          .subscribe(resp => {
            if (resp.success) {
              this.ValidatingStatus = 'success'
            } else {
              this.ValidatingStatus = 'error'
            }
          },
            error => {
              this.ValidatingStatus = 'error'
            })
      } catch (e) { }
    } else {
      // this.ValidatingStatus = 'null'
    }


  }
  onAction(data) {
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      Target_ReferalID: data.Target_ReferalID
    }
    try {

      this._appService.postMethod('Activate_Inactivate_Target_Referal', body)
        .subscribe(resp => {
          if (resp.success) {
            let msg;
            if (data.Status) {
              msg = 'Inactivated Successfully'
            } else {
              msg = 'Activated Successfully'
            }
            this.getTargetReferrals()
            this.nzMessageService.success(msg)

          } else {
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);

          }
        },
          error => {

          })
    } catch (e) { }
  }
  open() {
    this.visible = true;
    this.isEditing = false
  }
  close() {
    this.visible = false;
    this.isEditing = false
    this.addForm.reset()
  }
  onEdit(data) {
    this.visible = true;
    this.isEditing = true
    this.selectedData = data
    this.addForm.patchValue(data)
  }
  onSubmit() {
    this.isAddButton = true
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {}
    let url = ''
    if (this.isEditing) {
      body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        Target_ReferalID: this.selectedData.Target_ReferalID,
        SNo: this.addForm.value.SNo,
        Target_Referal: this.addForm.value.Target_Referal,
        Wallet_Limit: this.addForm.value.Wallet_Limit,
      }
      url = 'Update_Target_Referal'
    } else {
      body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        SNo: this.addForm.value.SNo,
        Target_Referal: this.addForm.value.Target_Referal,
        Wallet_Limit: this.addForm.value.Wallet_Limit,
      }
      url = 'Add_Target_Referal'
    }

    try {
      this._appService.postMethod(url, body)
        .subscribe(resp => {
          if (resp.success) {
            this.isAddButton = false
            this.close()
            this.getTargetReferrals()
            this.nzMessageService.success(resp.extras.status)
          } else {
            this.isAddButton = false
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);
          }
        },
          error => {

          })
    } catch (e) {
    }
  }
}
