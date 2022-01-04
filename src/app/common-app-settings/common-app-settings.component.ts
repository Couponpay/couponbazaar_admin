import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-common-app-settings',
  templateUrl: './common-app-settings.component.html',
  styleUrls: ['./common-app-settings.component.css']
})
export class CommonAppSettingsComponent implements OnInit {
  isloading: boolean;
  commonSettingData: any ={}
  selectedRecord: any;
  addCommonSettingForm: FormGroup
  isvisible: boolean;
  isAddButton: boolean;

  constructor(
    private fb: FormBuilder,
    private _appService: AppService,
    private nzMessageService: NzMessageService
  ) { }

  ngOnInit() {
    this.getCommonSetting()
    this.addCommonSettingForm = this.fb.group({
      Self_Purchase_ID: [null, [Validators.required]],
      Direct_Refer_ID: [null, [Validators.required]],
      Nine_Levels: [null, [Validators.required]],
      Trimming_For_IDs: [null, [Validators.required]],
      Shop_Keepers_Trimming: [null, [Validators.required]],
      Company: [null, [Validators.required]],
      GST_Service_Store_etc_Amount: [null, [Validators.required]],
      Box_One_Max_Amount: [null, [Validators.required]],
      Box_Two_Max_Amount: [null, [Validators.required]],
      Box_Three_Max_Amount: [null, [Validators.required]],



      District_Price: [null, [Validators.required]],
      State_Price : [null, [Validators.required]],
      Pincode_Price: [null, [Validators.required]],
      District_Share: [null, [Validators.required]],

      State_Share : [null, [Validators.required]],
      Pincode_Share : [null, [Validators.required]],
      User_Shop_Price: [null, [Validators.required]],


    });
  }
  getCommonSetting() {
    this.isloading = true
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))

    let userdata = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
    }
    try {

      this._appService.postMethod('List_Common_App_Setting', userdata)
        .subscribe(resp => {
          this.isloading = false

          if (resp.success) {
            this.commonSettingData = resp.extras.Data
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
  onUpdate(data){
    this.selectedRecord = data
    this.isvisible = true;
    this.addCommonSettingForm.patchValue(data)
  }
  onCancel(){
    this.isvisible = false;
    this.addCommonSettingForm.reset()
  }
  onAddCategory() {
    this.isAddButton = true
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {}
    let url = ''
      body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        Common_App_SettingsID: this.selectedRecord.Common_App_SettingsID,
        Self_Purchase_ID: this.addCommonSettingForm.value.Self_Purchase_ID,
        Direct_Refer_ID: this.addCommonSettingForm.value.Direct_Refer_ID,
        Nine_Levels: this.addCommonSettingForm.value.Nine_Levels,
        Trimming_For_IDs: this.addCommonSettingForm.value.Trimming_For_IDs,
        Shop_Keepers_Trimming: this.addCommonSettingForm.value.Shop_Keepers_Trimming,
        Company: this.addCommonSettingForm.value.Company,
        GST_Service_Store_etc_Amount: this.addCommonSettingForm.value.GST_Service_Store_etc_Amount,
        Box_One_Max_Amount: this.addCommonSettingForm.value.Box_One_Max_Amount,
        Box_Two_Max_Amount: this.addCommonSettingForm.value.Box_Two_Max_Amount,
        Box_Three_Max_Amount: this.addCommonSettingForm.value.Box_Three_Max_Amount,


      
        State_Price : this.addCommonSettingForm.value.State_Price,
        District_Price: this.addCommonSettingForm.value.District_Price,
        Pincode_Price: this.addCommonSettingForm.value.Pincode_Price,


        State_Share : this.addCommonSettingForm.value.State_Share,
        District_Share: this.addCommonSettingForm.value.District_Share,
        Pincode_Share : this.addCommonSettingForm.value.Pincode_Share,
        
        User_Shop_Price: this.addCommonSettingForm.value.User_Shop_Price,



      }
      url='Update_Common_App_Setting'
    
    try {
      this._appService.postMethod(url, body)
        .subscribe(resp => {
          if (resp.success) {
            this.isAddButton = false
            this.onCancel()
             this.getCommonSetting()
            this.nzMessageService.success(resp.extras.Status)
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
