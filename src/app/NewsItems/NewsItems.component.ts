import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { CookieService } from 'ngx-cookie-service';
import { NzMessageService } from 'ng-zorro-antd';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-NewsItems',
  templateUrl: './NewsItems.component.html',
  styleUrls: ['./NewsItems.component.css']
})
export class NewsItemsComponent implements OnInit {
  newItemAddingForm: FormGroup;
  isnewsItemsListLoading: boolean;
  newsItemsList: any = [];
  currentPage: number = 1;
  TotalItems: any;
  limit = this._appService.limit
  addNewsModal: boolean;
  isNewsAddingbtn: boolean;
  NewsID: any;
  updateDetailsForm: FormGroup;
  isUpdateDetails: boolean;
  isUpdateLoading: boolean;
  skip: number = 0;
  Status: number=1;
  constructor( private _appService: AppService,
    private http: HttpClient,
    private fb: FormBuilder,
    // private cks: CookieService,
  

    
    private nzMessageService: NzMessageService) { }

  ngOnInit() {
    this.onTabClick(1)
    this.newItemAddingForm = this.fb.group({
      Description: [null, [Validators.required]],
      Title: [null, [Validators.required]],
      SNo: [null, [Validators.required]],
    });
    this.updateDetailsForm = this.fb.group({
      Title: [null, Validators.required],
      Description: [null, Validators.required],
      SNo: [null, Validators.required],


    })
    
  }
  onTabClick(tabNumber: number) {
    this.Status = tabNumber
    this.getNewsItems(0)
  }
  onAddNews() {
    this.addNewsModal = true
  }
  handleCanceladdNewsModal() {
    this.addNewsModal = false
  }
  onAddNewstoServer() {
    for (const i in this.newItemAddingForm.controls) {
      this.newItemAddingForm.controls[i].markAsDirty();
      this.newItemAddingForm.controls[i].updateValueAndValidity();
    }
    if (this.newItemAddingForm.valid) {
      this.isNewsAddingbtn = true
      let adminData: any = JSON.parse(localStorage.getItem('adminData'))

      let body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        Title: this.newItemAddingForm.value.Title,
        Description: this.newItemAddingForm.value.Description,
        SNo:this.newItemAddingForm.value.SNo,
      }
      try {

        this._appService.postMethod('Add_News', body)
          .subscribe(resp => {
            this.isNewsAddingbtn = false
            if (resp.success) {
              this.addNewsModal = false
              this.getNewsItems(0)
              this.newItemAddingForm.reset()
              this.nzMessageService.success('News  Added')
            } else {

              this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


            }
          },
            error => {

            })
      } catch (e) { }
    }
  }
  getNewsItems(skip) {
    this.isnewsItemsListLoading = true
    let adminData: any = JSON.parse(localStorage.getItem('adminData'))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      skip: this.skip,
      limit: this._appService.limit,
    }
    try {

      this._appService.postMethod('List_All_News', body)
        .subscribe(resp => {
          if (resp.success) {
            this.newsItemsList = resp.extras.Data
            if (skip == 0) {
              this.currentPage = 1
              this.TotalItems = resp.extras.Count
            } else {
              this.TotalItems = this.TotalItems
            }
            if (this.TotalItems == 0) {

            }
            this.isnewsItemsListLoading = false

            // console.log(this.guidelineslist[0].All_Images_Data.length)

          } else {
            this.isnewsItemsListLoading = false
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


          }
        },
          error => {

          })
    } catch (e) { }
  }
  onNextPage(event: number) {
    this.currentPage = event
    let skip = (event - 1) * this._appService.limit
    this.skip = skip
    this.getNewsItems(skip)
  }
  onEdit(data) {
    this.NewsID = data.NewsID
    this.updateDetailsForm.patchValue({ Title: data.Title, Description: data.Description,SNo:data.SNo })
    this.isUpdateDetails = true

  }
  handleCancelMiddle() {
    this.isUpdateDetails = false
  }
  onupdateDetails() {
    for (const i in this.updateDetailsForm.controls) {
      this.updateDetailsForm.controls[i].markAsDirty();
      this.updateDetailsForm.controls[i].updateValueAndValidity();
    }
    if (this.updateDetailsForm.valid) {
      console.log(this.updateDetailsForm.value)
      this.isUpdateLoading = true

      let adminData: any = JSON.parse(localStorage.getItem('adminData'))
      let body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        NewsID: this.NewsID,
Title: this.updateDetailsForm.value.Title,
        Description: this.updateDetailsForm.value.Description,
        SNo: this.updateDetailsForm.value.SNo
      }
      try {

        this._appService.postMethod("Update_News", body)
          .subscribe(resp => {
            if (resp.success) {
              this.isUpdateDetails = false
              this.isUpdateLoading = false
              // this.getAdminList(this.skip)
              this.getNewsItems(this.skip)
            } else {
              this.isUpdateLoading = false
              this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);

            }
          },
            error => {

            })
      } catch (e) { }
    }
  }
  onAction(data) {
    //this.reasonData = data
    let url;

    if (data.Status) {
      url = 'Activate_Inactivate_News'//"Inactivated_Customer_Cancellation_Reason"
    } else {
      url = "Activate_Inactivate_News"
    }
    try {
      let adminData: any = JSON.parse(localStorage.getItem('adminData'))
      let body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        NewsID: data.NewsID,

      }
      this._appService.postMethod(url, body)
        .subscribe(resp => {
          if (resp.success) {

            let msg;
            if (data.Status) {
              msg = 'Inactivated Successfully'
            } else {
              msg = 'Activated Successfully'
            }
            this.nzMessageService.success(msg)
            this.getNewsItems(this.skip)
          } else {
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);

          }
        },
          error => {

          })
    } catch (e) { }
  }
}
