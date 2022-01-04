import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-state-module',
  templateUrl: './state-module.component.html',
  styleUrls: ['./state-module.component.css']
})
export class StateModuleComponent implements OnInit {

  skip = 0;
  limit = 10;
  Count: number;
  onEditOpen = false
  currentPage: number = 1;

  lablewidth = 8
  controlwidth = 10
  viewForm = false
  isTableListLoadin = false
  addForm: FormGroup;

  StatesListArray = [];
  selectedData: any;

  Status: number;
  constructor(
    private fb: FormBuilder,
    private nzMessageService: NzMessageService,
    public _appService: AppService
  ) { }

  ngOnInit() {
    this.addForm = this.fb.group({
      State_Name: [null, [Validators.required]],
      SNo: [null, [Validators.required]]
    });
    this.onTabClick(1)
   
  }
  onTabClick(tabNumber: number) {
    this.Status = tabNumber
    this.getTableList()
  }
  
  getTableList() {
    this.isTableListLoadin = true
    let adminData: any = JSON.parse(localStorage.getItem('adminData'))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      skip: this.skip,
      limit: this.limit,
      Status:this.Status
    }
    try {

      this._appService.postMethod('List_States', body)
        .subscribe(resp => {
          if (resp.success) {
            this.isTableListLoadin = false
            if (this.skip == 0) {
              this.currentPage = 1
              this.Count = resp.extras.Count
            }
           
            this.StatesListArray = resp.extras.Data
            this.Count = resp.extras.Count
          } else {
            this.isTableListLoadin = false
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);
          }
        },
          error => {

          })
    } catch (e) { }
  }
  
  onNextPage(event: number) {
    this.currentPage = event
    this.skip = (event - 1) * this.limit
    this.getTableList()
  }
  OnclickProductAdd(){
    this.viewForm = true
    this.onEditOpen = false
  }

  onClickSubmitForm(){
    let adminData: any = JSON.parse(localStorage.getItem('adminData'))
    let body = {}
    let url = ''
    if (this.onEditOpen == true) {
      url = 'Edit_State'
      body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        State_Name: this.addForm.value.State_Name,
        SNo: this.addForm.value.SNo,
        StateID: this.selectedData.StateID

      }
    } else {
      url = 'Add_State'
      body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        State_Name: this.addForm.value.State_Name,
        SNo: this.addForm.value.SNo,
      }
    }

    try {

      this._appService.postMethod(url, body)
        .subscribe(resp => {
          if (resp.success) {
            if (this.onEditOpen == true) {
              this.nzMessageService.success('State Updated Sucessfully')
            } else {
              this.nzMessageService.success('State Created Sucessfully')
            }
            this.close()
            this.getTableList()
           
          } else {
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);
          }
        },
          error => {

          })
    } catch (e) { }
  }
  
  close(){
    this.viewForm = false;
    this.onEditOpen = false
    this.addForm.reset()
  }
  onEdit(data){
    this.viewForm = true;
    this.selectedData = data,
    this.onEditOpen = true
    this.addForm.patchValue({
      State_Name: data.State_Name,
      SNo: data.SNo,

    })
   
  }

  
  onActionOnHelp(data) {
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      StateID: data.StateID
    }
    try {

      this._appService.postMethod('Activate_Inactivate_State', body)
        .subscribe(resp => {
          if (resp.success) {
            let msg;
            if (data.Status) {
              msg = 'Inactivated Successfully'
            } else {
              msg = 'Activated Successfully'
            }
            this.getTableList()
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
