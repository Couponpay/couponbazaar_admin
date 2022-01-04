import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { AppService } from '../app.service';

@Component({
  selector: 'app-PinCode',
  templateUrl: './PinCode.component.html',
  styleUrls: ['./PinCode.component.css']
})
export class PinCodeComponent implements OnInit {

  PincodeList=[]

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
  DistrictListArray=[]
  
  DistrictList=[]

  // DistrictID = new FormControl(null)
  // StateID= new FormControl(null)
  


  constructor(    public _appService: AppService,
    private nzMessageService: NzMessageService,
    private fb: FormBuilder,) { }

  ngOnInit() {


    // this.getDistrictListArray()
    this.getTableList()
    // this.StateID.valueChanges.subscribe((data)=>{
    //   this.getDistrictList()
    // })
    // this.DistrictID.valueChanges.subscribe((data)=>{
    //   this.skip=0;
    //   this.getPincodeList()
    // })
    this.onTabClick(1)
    this.addForm = this.fb.group({
      District_Name: [null, [Validators.required]],
      State_Name: [null, [Validators.required]],
         SNo: [null, [Validators.required]],
         Pincode_id:[null, [Validators.required]],
    });
    this.addForm.get('State_Name').valueChanges.subscribe((data)=>{
      if(data!=null){
        this.addForm.get('District_Name').reset()
        this.getDistrictListArray()
      }else {
        this.addForm.get('District_Name').reset()
      }
      
    });
    this.addForm.get('Pincode_id').valueChanges.subscribe((data)=>{
      if(data!=null){
      this.checkPincode(data)
      }else {
      }
      
    })

  }

  OnclickProductAdd(){
    this.viewForm = true
    this.onEditOpen = false
  }
  onTabClick(tabNumber: number) {
    this.Status = tabNumber
    this.getPincodeList()
  }

  getPincodeList(){
    
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

      this._appService.postMethod('List_Pincodes', body)
        .subscribe(resp => {
          if (resp.success) {
            this.isTableListLoadin = false
            if (this.skip == 0) {
              this.currentPage = 1
              this.Count = resp.extras.Count
            }
           
            this.PincodeList = resp.extras.Data
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
      Pincode_id:data.PincodeID 

    })
  }
  

  onActionOnHelp(data){
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      PincodeID:data.PincodeID,
      }
      try {

        this._appService.postMethod('Activate_Inactivate_Pincode', body)
          .subscribe(resp => {
            if (resp.success) {
              let msg;
              if (data.Status) {
                msg = 'Inactivated Successfully'
              } else {
                msg = 'Activated Successfully'
              }
              this.getPincodeList()
              this.nzMessageService.success(msg)
  
            } else {
              this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);
  
            }
          },
            error => {
  
            })
      } catch (e) { }
    }


    onClickSubmitForm(){
      let adminData: any = JSON.parse(localStorage.getItem('adminData'))
      let body = {}
      let url = ''
      if (this.onEditOpen == true) {
        url = 'Edit_Pincode'
        body = {
          AdminID: adminData.AdminID,
          SessionID: adminData.SessionID,
          Pincode: this.addForm.value.Pincode_id,
          SNo: this.addForm.value.SNo,
          DistrictID: this.addForm.value.District_Name,
          StateID:this.addForm.value.State_Name,
          PincodeID :this.selectedData.PincodeID
        }
      } else {
        url = 'Add_Pincode'
        body = {
          AdminID: adminData.AdminID,
          SessionID: adminData.SessionID,
          Pincode: this.addForm.value.Pincode_id,
          SNo: this.addForm.value.SNo,
          DistrictID: this.addForm.value.District_Name,
          StateID:this.addForm.value.State_Name,
        }
      }
  
      try {
  
        this._appService.postMethod(url, body)
          .subscribe(resp => {
            if (resp.success) {
              if (this.onEditOpen == true) {
                this.nzMessageService.success('Pincode Updated Sucessfully')
              } else {
                this.nzMessageService.success('Pincode Created Sucessfully')
              }
              this.close()
              this.getPincodeList()
             
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

    getDistrictListArray(){
      let adminData: any = JSON.parse(localStorage.getItem('adminData'))
      let body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,

        skip:0,
        limit: 100000,
        Status:true,
        StateID:this.addForm.get('State_Name').value
      }
      try {
  
        this._appService.postMethod('List_Districts', body)
          .subscribe(resp => {
            if (resp.success) {
           
             
              this.DistrictListArray = resp.extras.Data
              // if(this.DistrictListArray.length>0){
              //   this.DistrictID.patchValue(this.DistrictListArray[0].DistrictID)
              //   this.onTabClick(1)
              // }
          
            } else {
              this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);
            }
          },
            error => {
  
            })
      } catch (e) { }
    }


    // getDistrictList(){
    //   let adminData: any = JSON.parse(localStorage.getItem('adminData'))
    //   let body = {
    //     AdminID: adminData.AdminID,
    //     SessionID: adminData.SessionID,

    //     skip:0,
    //     limit: 100000,
    //     Status:true,
    //     StateID:this.StateID.value
    //   }
    //   try {
  
    //     this._appService.postMethod('List_Districts', body)
    //       .subscribe(resp => {
    //         if (resp.success) {
           
             
    //           this.DistrictListArray = resp.extras.Data
    //           if(this.DistrictListArray.length>0){
    //             this.DistrictID.patchValue(this.DistrictListArray[0].DistrictID)
               
    //           }
          
    //         } else {
    //           this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);
    //         }
    //       },
    //         error => {
  
    //         })
    //   } catch (e) { }
    // }

    
    checkPincode(data:any){
       let adminData: any = JSON.parse(localStorage.getItem('adminData'))
      let body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        Pincode:+data,
        PincodeID:this.onEditOpen?this.selectedData.PincodeID:"" 

      }
      try {
  
        this._appService.postMethod('Pincode', body)
          .subscribe(resp => {
            if (resp.success) {
              console.log(resp);
              
             
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
      this.getPincodeList()
    }

}
