import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-coupon-category',
  templateUrl: './coupon-category.component.html',
  styleUrls: ['./coupon-category.component.css']
})
export class CouponCategoryComponent implements OnInit {
  isloading: boolean;
  skip = 0
  limit = this._appService.limit
  currentPage = 1
  totalItem: any;
  CategoryData = [];
  isvisible: boolean;
  isEditing: boolean;
  selectedRecord: any;
  addCategoryForm: FormGroup
  isAddButton: boolean;
  ValidatingStatus : string;
  selectedtab: any;
  constructor(
    private fb: FormBuilder,
    private _appService: AppService,
    private nzMessageService: NzMessageService
  ) { }

  ngOnInit() {
    this.onChangeTab(1)
    this.addCategoryForm = this.fb.group({
      SNo: [null, [Validators.required]],
      Coupons_Category_Name: [null, [Validators.required]],
      CC_Admin_Share_Percent: [null, [Validators.required]],
    });
    this.addCategoryForm.get('SNo').valueChanges.subscribe((data: any) => {
      console.log(data)
      if(this.addCategoryForm.get('SNo').valid){
            this.checkSerialNumber(data)
      }else{
        this.ValidatingStatus = ''
      }
      
    })
  }
  onChangeTab(event) {
    this.selectedtab = event
    this.skip = 0
    this.getCouponCategoryList()
  }
  getCouponCategoryList() {
    this.isloading = true
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))

    let userdata = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      Active_Inactive_Status: this.selectedtab == 1? true :false ,
      skip: this.skip,
      limit: this.limit
    }
    try {

      this._appService.postMethod('List_Coupons_Category', userdata)
        .subscribe(resp => {
          this.isloading = false

          if (resp.success) {
            if (this.skip == 0) {
              this.currentPage = 1
            }
            this.totalItem = resp.extras.Count
            this.CategoryData = resp.extras.Data
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
    this.getCouponCategoryList()
  }

  onAction(data) {
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      Coupons_CategoryID: data.Coupons_CategoryID
    }
    try {

      this._appService.postMethod('Activate_Inactivate_Coupons_Category', body)
        .subscribe(resp => {
          if (resp.success) {
            let msg;
            if (data.Status) {
              msg = 'Inactivated Successfully'
            } else {
              msg = 'Activated Successfully'
            }
            this.getCouponCategoryList()
            this.nzMessageService.success(msg)

          } else {
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);

          }
        },
          error => {

          })
    } catch (e) { }
  }

  onAdd() {
    this.isvisible = true;
    this.isEditing = false
  }
  onCancel() {
    this.isvisible = false;
    this.isEditing = false
    this.addCategoryForm.reset()
  }
  onEdit(data){
    this.isvisible = true;
    this.isEditing = true

    this.selectedRecord = data
    this.addCategoryForm.patchValue(data)
  }

  onAddCategory() {
    this.isAddButton = true
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {}
    let url = ''
    if(this.isEditing){
      body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        Coupons_CategoryID: this.selectedRecord.Coupons_CategoryID,
        SNo: this.addCategoryForm.value.SNo,
        Coupons_Category_Name: this.addCategoryForm.value.Coupons_Category_Name,
        CC_Admin_Share_Percent: this.addCategoryForm.value.CC_Admin_Share_Percent,
      }
      url='Update_Coupons_Category'
    }else {
      body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        SNo: this.addCategoryForm.value.SNo,
        Coupons_Category_Name: this.addCategoryForm.value.Coupons_Category_Name,
        CC_Admin_Share_Percent: this.addCategoryForm.value.CC_Admin_Share_Percent,
      }
      url='Add_Coupons_Category'
    }
    
    try {
      this._appService.postMethod(url, body)
        .subscribe(resp => {
          if (resp.success) {
            this.isAddButton = false
            this.onCancel()
             this.getCouponCategoryList()
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
  checkSerialNumber(serialNumber : string){
    if (serialNumber.length > 0) {
      this.ValidatingStatus = "validating"
      let adminData: any = JSON.parse(localStorage.getItem("adminData"))
      let body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        SNo: serialNumber,
        Coupons_CategoryID: this.isEditing?this.selectedRecord.Coupons_CategoryID:''
           }
    try {
      this._appService.postMethod('Check_For_Coupons_Category_SNo_Available', body)
     
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
  }else {
    // this.ValidatingStatus = 'null'
  }

   
}
}
