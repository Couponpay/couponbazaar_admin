import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { AppService } from '../app.service';

@Component({
  selector: 'app-District',
  templateUrl: './District.component.html',
  styleUrls: ['./District.component.css']
})
export class DistrictComponent implements OnInit {

  DistrictListArray=[];
  
  skip = 0;
  limit = 10;
  addForm: FormGroup;
  isTableListLoadin = false

  Status: number;
  Count: number;

  currentPage: number = 1;
  onEditOpen = false
  viewForm= false;

  selectedData: any;
  StatesListArray=[]




  constructor(    public _appService: AppService,
    private nzMessageService: NzMessageService,
    private fb: FormBuilder,

    ) { }

  ngOnInit() {
    this.getTableList()
    this.onTabClick(1)
    this.addForm = this.fb.group({
      District_Name: [null, [Validators.required]],
      State_Name: [null, [Validators.required]],
         SNo: [null, [Validators.required]]
    });
  
  }
  OnclickProductAdd(){
    this.viewForm = true
    this.onEditOpen = false
  }
  onTabClick(tabNumber: number) {
    this.Status = tabNumber
    this.getDistrictListArray()
  }

  getDistrictListArray(){
    this.isTableListLoadin=true
    let adminData: any = JSON.parse(localStorage.getItem('adminData'))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      skip: this.skip,
      limit: this.limit,
      Status:this.Status,

    }
    try {

      this._appService.postMethod('List_Districts', body)
        .subscribe(resp => {
          if (resp.success) {
            this.isTableListLoadin = false
            if (this.skip == 0) {
              this.currentPage = 1
              this.Count = resp.extras.Count
            }
           
            this.DistrictListArray = resp.extras.Data
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


  onEdit(data){
    this.viewForm=true;
    this.selectedData =data,
    this.onEditOpen= true
    this.addForm.patchValue({
      District_Name:data.District_Name,
      SNo:data.SNo,
      State_Name:data.StateID
    })
   }

   onActionOnHelp(data){
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      DistrictID:data.DistrictID,
      }
      try {

        this._appService.postMethod('Activate_Inactivate_District', body)
          .subscribe(resp => {
            if (resp.success) {
              let msg;
              if (data.Status) {
                msg = 'Inactivated Successfully'
              } else {
                msg = 'Activated Successfully'
              }
              this.getDistrictListArray()
              this.nzMessageService.success(msg)
  
            } else {
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
      this.getDistrictListArray()
    }

    onClickSubmitForm(){
      let adminData: any = JSON.parse(localStorage.getItem('adminData'))
      let body = {}
      let url = ''
      if (this.onEditOpen == true) {
        url = 'Edit_District'
        body = {
          AdminID: adminData.AdminID,
          SessionID: adminData.SessionID,
          District_Name: this.addForm.value.District_Name,
          SNo: this.addForm.value.SNo,
          DistrictID: this.selectedData.DistrictID,
          StateID:this.addForm.value.State_Name
  
        }
      } else {
        url = 'Add_District'
        body = {
          AdminID: adminData.AdminID,
          SessionID: adminData.SessionID,
          District_Name: this.addForm.value.District_Name,
          SNo: this.addForm.value.SNo,
          StateID:this.addForm.value.State_Name

        }
      }
  
      try {
  
        this._appService.postMethod(url, body)
          .subscribe(resp => {
            if (resp.success) {
              if (this.onEditOpen == true) {
                this.nzMessageService.success('District Updated Sucessfully')
              } else {
                this.nzMessageService.success('District Created Sucessfully')
              }
              this.close()
              this.getDistrictListArray()
             
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

    getTableList() {
      let adminData: any = JSON.parse(localStorage.getItem('adminData'))
      let body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        skip:0,
        limit: 100000,
        Status:true
      }
      try {
  
        this._appService.postMethod('List_States', body)
          .subscribe(resp => {
            if (resp.success) {
          
             
              this.StatesListArray = resp.extras.Data
            
            } else {
              this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);
            }
          },
            error => {
  
            })
      } catch (e) { }
    }
    
  }



