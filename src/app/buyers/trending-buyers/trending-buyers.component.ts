// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { AppService } from 'src/app/app.service';
// import { NzMessageService } from 'ng-zorro-antd';

// @Component({
//   selector: 'app-trending-buyers',
//   templateUrl: './trending-buyers.component.html',
//   styleUrls: ['./trending-buyers.component.css']
// })
// export class TrendingBuyersComponent implements OnInit {
//   trendingBuyersForm: FormGroup;
//   limit = this._appService.limit
//   currentPage = 1
//   TotalItems: any;
//   ShopList: any = [];
//   isAllShops: boolean = true;
//   trendingBuyersList: any = [];
//   isloading: boolean;
//   constructor(private fb: FormBuilder,
//     private _appService: AppService,
//     private nzMessageService: NzMessageService
//   ) {
//   }
//   ngOnInit() {
//     let presentDate = new Date();
//     let startDate = new Date(presentDate.setDate(presentDate.getDate() - 30))
//     this.getShopsList()
//     this.trendingBuyersForm = this.fb.group({
//       Start_Date: [startDate, [Validators.required]],
//       End_Date: [ new Date(), [Validators.required]],
//       Whether_All_Shops: [this.isAllShops, [Validators.required]],
//       selectedShop: [null],
//     });
//     this.getTrendingBuyers(0,0)
//   }

//   getShopsList() {
//     let adminData: any = JSON.parse(localStorage.getItem("adminData"))
//     let userdata = {
//       AdminID: adminData.AdminID,
//       SessionID: adminData.SessionID,
//     }
//     try {

//       this._appService.postMethod('List_Only_Shops', userdata)
//         .subscribe(resp => {

//           if (resp.success) {
//             this.ShopList = resp.extras.Data
//             this.trendingBuyersForm.patchValue({ selectedShop: this.ShopList[0] })

//           } else {
//             this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


//           }
//         },
//           error => {

//           })
//     } catch (e) {

//     }
//   }
//   getTrendingBuyers(skip, ascType) {
    
//     let adminData: any = JSON.parse(localStorage.getItem("adminData"))
//     let EndDate: Date = this.trendingBuyersForm.value.End_Date
//     let startDate: Date = this.trendingBuyersForm.value.Start_Date
//     let shopId;
//     if(this.trendingBuyersForm.value.selectedShop==null){
//       shopId=''
//     }else{
//       shopId=this.trendingBuyersForm.value.selectedShop.ShopID
//     }
//     if(this.trendingBuyersForm.value.Whether_All_Shops==false&&this.trendingBuyersForm.value.selectedShop==null){
//      this.trendingBuyersForm.controls['selectedShop'].setErrors({'incorrect': true});
//     }
//     if(this.trendingBuyersForm.value.Whether_All_Shops==true){
//       this.trendingBuyersForm.controls['selectedShop'].markAsUntouched()
//      }
// if(this.trendingBuyersForm.valid){
//   this.isloading=true
//   let userdata = {
//     AdminID: adminData.AdminID,
//     SessionID: adminData.SessionID,
//     Whether_All_Shops: this.trendingBuyersForm.value.Whether_All_Shops,
//     ShopID: shopId,
//     End_Date: EndDate.getDate() + '-' + (EndDate.getMonth() + 1) + '-' + EndDate.getFullYear(),
//     Start_Date: startDate.getDate() + '-' + (startDate.getMonth() + 1) + '-' + startDate.getFullYear(),
//     skip: skip,
//     limit: this._appService.limit,
//     sortOptions: {
//       Sum_of_Total_Amount: ascType
//     }
//   }
//   try {

//     this._appService.postMethod('List_All_Trending_Buyers', userdata)
//       .subscribe(resp => {
//         this.isloading=false

//         if (resp.success) {
//           // this.ShopList = resp.extras.Data
//           this.TotalItems = resp.extras.Count
//           if(skip==0){
//             this.currentPage=1
           
//           }
//           this.trendingBuyersList = resp.extras.Data
//         } else {
//           this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


//         }
//       },
//         error => {

//         })
//   } catch (e) {

//   }
// }
    
//   }
  
//   onSubmitTrendingBuyersForm() {
//     for (const i in this.trendingBuyersForm.controls) {
//       this.trendingBuyersForm.controls[i].markAsDirty();
//       this.trendingBuyersForm.controls[i].updateValueAndValidity();
//   }
//     this.getTrendingBuyers(0, 0)
//   }
//   onNextPage(event: number) {
//     // this.sortkey='TotalAmount';
//     this.currentPage = event
//     let skip = (event - 1) * this._appService.limit
//     this.getTrendingBuyers(skip, -1)
//   }
//   sort(event) {
//     if(event.value=="descend"){
//       this.getTrendingBuyers(0, -1)
//     }if(event.value=="ascend"){
//       this.getTrendingBuyers(0, 1)
//     }if(event.value==null){
//       this.getTrendingBuyers(0, 0)
//     }
//   }
// }
