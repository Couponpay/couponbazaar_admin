import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  addCategory:FormGroup
  isloading: boolean;
  currentPage = 1
  TotalItems: any;
  ListAllcategoryData: any = []
  visible:boolean

  constructor(private fb: FormBuilder,
    private _appService: AppService,
    private nzMessageService: NzMessageService) { }

  ngOnInit() {
    this.addCategory = this.fb.group({
      Category_Name: [null, [Validators.required]],
    });
    this.categoryList()
  }
  categoryList() {
    this.isloading = true
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
  
    let userdata = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
    }
    try {

      this._appService.postMethod('List_All_Category', userdata)
        .subscribe(resp => {
          this.isloading = false

          if (resp.success) {
            this.ListAllcategoryData = resp.extras.Data
            console.log(this.ListAllcategoryData)
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
  open(): void {
    this.visible = true;
    this.addCategory.reset()
  }
  close(): void {
    this.visible = false;
  }

  categoryForm() {
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      Category_Name: this.addCategory.value.Category_Name,
    }
    try {
      this._appService.postMethod('Add_Category', body)
        .subscribe(resp => {
          if (resp.success) {
             this.addCategory.reset()
             this.visible = false;
             this.categoryList()
            this.nzMessageService.success('Category Added sucessfully')
          } else {
            this.nzMessageService.create('error', 'Category Exists');
          }
        },
          error => {

          })
    } catch (e) {
    }
  }
}
