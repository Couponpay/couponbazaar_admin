import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  createHelp: FormGroup;
  currentPage = 1
  TotalItems: any;
  isloading: boolean;
  skip = 0;
  limit = this._appService.limit
  ListAllHellData: any = []
  HelpDataID: any;
  ind: any;
  onEditOpen = false
  visible = false;


  constructor(private fb: FormBuilder,
    private _appService: AppService,
    private nzMessageService: NzMessageService
  ) {
  }

  ngOnInit() {
    this.createHelp = this.fb.group({
      Title: [null, [Validators.required]],
      Description: [null, [Validators.required]],
    });
    this.OnHelpDataList()
  }
 OnHelpDataList() {
    this.isloading = true
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
  
    let userdata = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      skip: this.skip,
      limit: this._appService.limit,
    }
    try {

      this._appService.postMethod('List_All_Help_Data', userdata)
        .subscribe(resp => {
          this.isloading = false

          if (resp.success) {
            this.TotalItems = resp.extras.Count
            if (this.skip == 0) {
              this.currentPage = 1

            }
            this.ListAllHellData = resp.extras.Data
            console.log(this.ListAllHellData)
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

    this.currentPage = event
    this.skip = (event - 1) * this._appService.limit
    this.OnHelpDataList()
  }


  onActionOnHelp(data,i) {
    this.HelpDataID = data.HelpDataID
    this.ind = i
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      HelpDataID: this.HelpDataID
    }
    try {

      this._appService.postMethod('Active_Inactive_Help', body)
        .subscribe(resp => {
          if (resp.success) {
            let msg;
            if (data.Status) {
              msg = 'Inactivated Successfully'
            } else {
              msg = 'Activated Successfully'
            }
            this.OnHelpDataList()
            this.nzMessageService.success(msg)

          } else {
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);

          }
        },
          error => {

          })
    } catch (e) { }
  }

  open(): void {
    this.visible = true;
    this.onEditOpen = false
    this.createHelp.reset()
  }

  close(): void {
    this.visible = false;
  }

  HelpForm() {
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {}
    let url = ''
    if (this.onEditOpen == true) {
      url = 'Edit_Help'
      console.log("text")
      body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        Title: this.createHelp.value.Title,
        Description: this.createHelp.value.Description,
        HelpDataID: this.HelpDataID
        
      }
    } else {
      url = 'Create_Help'
      console.log("text1")
      body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        Title: this.createHelp.value.Title,
        Description: this.createHelp.value.Description
      
      }
      console.log(body)
    }



    try {

      this._appService.postMethod(url, body)
        .subscribe(resp => {
          if (resp.success) {
            this.createHelp.reset()
            if(this.onEditOpen == true)
            {
              this.visible = false;
              this.nzMessageService.success('')
              this.OnHelpDataList()
             
              
            }else{
              this.visible = false;
              this.nzMessageService.success('Help Created Sucessfully')
              this.OnHelpDataList()
            }

          }
          else {
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


          }
        },
          error => {

          })
    } catch (e) { }
  }
  onEdit(data,i) {
    this.HelpDataID = data.HelpDataID
    
    this.visible = true;
    this.createHelp.patchValue({
      Title: data.Title,
      Description: data.Description,
      HelpDataID : this.HelpDataID
      
    })
   
    this.HelpDataID = this.HelpDataID
    this.onEditOpen = true
    
  }

}
