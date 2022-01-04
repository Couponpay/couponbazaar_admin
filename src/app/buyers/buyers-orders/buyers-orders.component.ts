import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { NzMessageService } from 'ng-zorro-antd';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-buyers-orders',
  templateUrl: './buyers-orders.component.html',
  styleUrls: ['./buyers-orders.component.css']
})
export class BuyersOrdersComponent implements OnInit {
  allChecked = false;
  indeterminate = true;
  isVisible = false;
  visible = false;
  ShipOrderPricingData=[]
  BuyersOrderForm: FormGroup;
  shipRocketOrderForm: FormGroup;
  ChangeBuyerForm: FormGroup;
  isAllShops: boolean = true;
  skip = 0;
  selectedOrders
  limit = this._appService.limit
  currentPage = 1
  TotalItems: any;
  BuyersrderList: any = []
  isloading: boolean;
  isDetailsView: number;
  IsVisible_data: number = 1
  OrderID: any;
  radioValue = '';
  selectedOrder:any={};
  isShipRocketModal: boolean;
  isShipRocketOrderRequesting: boolean;
  singliShipRocketDetails: any={};
  selectedOrderList: any;
  isPriceChecking: boolean;
  constructor(private fb: FormBuilder,
    private _appService: AppService,
    private nzMessageService: NzMessageService
  ) {
  }

  ngOnInit() {
    let presentDate = new Date();
    let startDate = new Date(presentDate.setDate(presentDate.getDate() - 10))
    this.BuyersOrderForm = this.fb.group({
      Start_Date: [null, [Validators.required]],
      End_Date: [null, [Validators.required]],

    });

    this.ChangeBuyerForm = this.fb.group({
      Title: [null, [Validators.required]],
      Description: [null, [Validators.required]],

    });
    this.shipRocketOrderForm = this.fb.group({
      Length: [null, [Validators.required]],
      Breadth: [null, [Validators.required]],
      Height: [null, [Validators.required]],
      Weight: [null, [Validators.required]],

    });

    this.BuyersOrderForm.patchValue({
      Start_Date: startDate,
      End_Date: new Date()
    })
    this.BuyersOrderForm.valueChanges.subscribe((data: any) => {
      console.log('2')
      if (this.BuyersOrderForm.valid) {
        this.skip = 0
        this.AllBuyersOrdersList()

      }
    })
    this.AllBuyersOrdersList()

  }
  onDetail_View(data, i: number) {
    let index = i;
    if (this.isDetailsView == index) {
      this.isDetailsView = -1
    }
    else {
      this.isDetailsView = index
      this.click_button(data,1)
    }

  }

  AllBuyersOrdersList() {
    this.isloading = true
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let EndDate: Date = this.BuyersOrderForm.value.End_Date
    let startDate: Date = this.BuyersOrderForm.value.Start_Date

    let userdata = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      End_Date: EndDate,
      Start_Date: startDate,
      // End_Date: EndDate.getDate() + '-' + (EndDate.getMonth() + 1) + '-' + EndDate.getFullYear(),
      // Start_Date: startDate.getDate() + '-' + (startDate.getMonth() + 1) + '-' + startDate.getFullYear(),
      skip: this.skip,
      limit: this._appService.limit,
      Status: true
    }
    try {

      this._appService.postMethod('List_All_Buyers_Orders', userdata)
        .subscribe(resp => {
          this.isloading = false

          if (resp.success) {
            this.TotalItems = resp.extras.Count
            if (this.skip == 0) {
              this.currentPage = 1

            }
            this.BuyersrderList = resp.extras.Data
            console.log(this.BuyersrderList)
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
    this.AllBuyersOrdersList()
  }
  click_button(data, type: number) {
    this.selectedOrder = data
    this.IsVisible_data = type
    if (this.IsVisible_data == 4) {
      this.getSingleShipRocketDetails()
    }

  }


  confirm(data, type: number): void {
    console.log(type)
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let url = ''
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      OrderID: data.OrderID
    }
    if (type == 1) {
      url = "Complete_Buyer_Order"
    } else if (type == 2) {
      url = "Delete_Buyer_Order"
    }
    try {

      this._appService.postMethod(url, body)
        .subscribe(resp => {

          if (resp.success) {
            this.nzMessageService.success(resp.extras.Status)
            this.AllBuyersOrdersList()
          } else {
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);
            this.AllBuyersOrdersList()

          }
        },
          error => {

          })
    } catch (e) {

    }
  }
  openChange(data) {
    this.OrderID = data.OrderID
    this.isVisible = true;
  }
  handleOk(): void {

    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      OrderID: this.OrderID,
      Title: this.ChangeBuyerForm.value.Title,
      Description: this.ChangeBuyerForm.value.Description

    }

    try {

      this._appService.postMethod('Change_Buyer_Order_Status', body)
        .subscribe(resp => {
          if (resp.success) {
            this.nzMessageService.success(resp.extras.Status)
            this.isVisible = false;
            this.ChangeBuyerForm.reset()
          } else {
            this.isloading = false
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);
            this.isVisible = false;
          }
        },
          error => {

          })
    } catch (e) {

    }


  }

  handleCancel(): void {
    this.isVisible = false;
  }
  onCreateShipRocketet(data, index) {
    this.selectedOrder = data
     this.isShipRocketModal = true
    this.isShipRocketOrderRequesting = false
    this.shipRocketOrderForm.reset()
  }
  onCancelShipRocketOrder() {
    this.isShipRocketOrderRequesting = false
    this.shipRocketOrderForm.reset()
    this.isShipRocketModal = false
    this.visible = false
    this.ShipOrderPricingData = []

  }
  onCreateShipRocketOrder() {
    this.isPriceChecking = true
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      OrderID: this.selectedOrder.OrderID,
      Length: this.shipRocketOrderForm.value.Length,
      Breadth: this.shipRocketOrderForm.value.Breadth,
      Height: this.shipRocketOrderForm.value.Height,
      Weight: this.shipRocketOrderForm.value.Weight,

    }

    try {

      this._appService.postMethod('Get_Shiprocket_Order_Pricing', body)
        .subscribe(resp => {
          if (resp.success) {
            this.isPriceChecking=false
          //  this.shipRocketOrderForm.reset()
            this.ShipOrderPricingData = resp.extras.Data

          } else {
            this.isPriceChecking=false
            if(resp.extras.Data!=undefined){
              this.nzMessageService.create('error', resp.extras.Data.message);

            } else{
              this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);
  
            }

          }
        },
          error => {

          })
    } catch (e) {

    }
  }
  getSingleShipRocketDetails() {
    this.isShipRocketOrderRequesting = true
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      Shiprocket_Order_LogID: this.selectedOrder.Shiprocket_Order_LogID,
}

    try {

      this._appService.postMethod('Get_Single_Shiprocket_Order', body)
        .subscribe(resp => {
          if (resp.success) {
            this.singliShipRocketDetails = resp.extras.Data

          } else {



            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);

          }
        },
          error => {

          })
    } catch (e) {

    }
  }

  createShipRocketOrderToServer(data) {
  this.selectedOrderList=data
  this.isPriceChecking = true
  let adminData: any = JSON.parse(localStorage.getItem("adminData"))
  let body = {
    AdminID: adminData.AdminID,
    SessionID: adminData.SessionID,
    OrderID: this.selectedOrder.OrderID,
    Length: (+this.shipRocketOrderForm.value.Length),
    Breadth: +this.shipRocketOrderForm.value.Breadth,
    Height: +this.shipRocketOrderForm.value.Height,
    Weight:+this.shipRocketOrderForm.value.Weight,
    courier_company_id:data.courier_company_id

  }

  try {

    this._appService.postMethod('Shiprocket_Order_Create', body)
      .subscribe(resp => {
        if (resp.success) {
         this.isShipRocketModal=false
         this.ShipOrderPricingData=[]
         this.shipRocketOrderForm.reset()
         this.AllBuyersOrdersList()
         this.isPriceChecking=false
       

        } else {
         this.isPriceChecking=false

          if(resp.extras.Data!=undefined){
            this.nzMessageService.create('error', resp.extras.Data.message);

          }
          else{
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);

          }
        }
      },
        error => {

        })
  } catch (e) {

  }
   
  }
  onCancelShipRocketet(data,i){
    this.isloading=true
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      Shiprocket_Order_LogID:data.Shiprocket_Order_LogID
  
    }
  
    try {
  
      this._appService.postMethod('Cancel_Shiprocket_Order', body)
        .subscribe(resp => {
          if (resp.success) {
           this.AllBuyersOrdersList()
  
         
  
          } else {
    this.isloading=false

  this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);
  
          }
        },
          error => {
  
          })
    } catch (e) {
  
    }
     
  }
}
