import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-adminSettings',
  templateUrl: './adminSettings.component.html',
  styleUrls: ['./adminSettings.component.css']
})
export class AdminSettingsComponent implements OnInit {
  limit=this._appService.limit
  currentPage=1
  validateForm: FormGroup;

  switchValue:boolean=false 
  adminUsers: any;
  totalItem: any;

  constructor(private fb: FormBuilder,
    private _appService:AppService,
    private nzMessageService:NzMessageService,
    ) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      userEmail: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      AdminPermistion: [ false ],
    });
  }
  oncreateAdmin_Tab(){
    this.validateForm.reset()
  }
  onViewAdmins_Tab(){
    this.viewAdmins(0)

  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    if(this.validateForm.valid){
      let adminData: any = JSON.parse(localStorage.getItem("adminData"))
      let body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        Name: this.validateForm.value.userName,
        Password:this.validateForm.value.password,
        Admin_Section_Permision:this.validateForm.value.AdminPermistion,
        EmailID: this.validateForm.value.userEmail
      }
      try {
  
        this._appService.postMethod('Create_Admin_User', body)
          .subscribe(resp => {
  
            if (resp.success) {
             this.nzMessageService.success('admin Added Sucessfully')
             this.validateForm.reset()
  
  
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
  viewAdmins(skip){
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
      let body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        skip:skip,
        limit:this._appService.limit
      }
      try {
  
        this._appService.postMethod('List_All_Admin_User', body)
          .subscribe(resp => {
  
            if (resp.success) {
              if(skip==0){
                this.currentPage=1
              }
              this.totalItem=resp.extras.Count
             this.adminUsers=resp.extras.Data
  
  
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
    this.viewAdmins(skip)
  }

}
