// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Component, OnInit } from '@angular/core';
// import { AppService } from 'src/app/app.service';
// import { NzMessageService } from 'ng-zorro-antd';
// import { debounceTime } from 'rxjs/operators';
// @Component({
//   selector: 'app-create-offers',
//   templateUrl: './create-offers.component.html',
//   styleUrls: ['./create-offers.component.css'],
// })
// export class CreateOffersComponent implements OnInit {
//   validating_Status=''
//   buyersSearchValue=''
//   radioValue=''
//   GenericOfferForm:FormGroup;
//   ShopOfferForm:FormGroup;
//   BuyersOfferForm:FormGroup
//   date=new Date()
//   ShopList: any=[];
//   BuyersList:any=[]
//   selectedShop;
//   selectedBuyer
//   isBuyersLoading: boolean;
//   searchValue: any;
//   isVisible_buyersModal: boolean;
//   buyerId: any;
//   constructor(private fb: FormBuilder,
//     private _appService:AppService,
//     private nzMessageService:NzMessageService
//   ) {
//   }  
 
//   ngOnInit(): void {
//     this.GenericOfferForm = this.fb.group({
//       Buyer_Min_Amount: [ null, [ Validators.required ] ],
//       Buyer_Max_Amount: [ null, [ Validators.required ] ],
//       Message: [ null, [ Validators.required ] ],
//       Buyer_Deduction_Amount: [ null, [ Validators.required ] ],
//       Expiry_Date: [ new Date(), [ Validators.required ] ],
//     });
//     this.ShopOfferForm = this.fb.group({
//       ShopDetails: [ this.selectedShop, [ Validators.required ] ],
//       Buyer_Min_Amount: [ null, [ Validators.required ] ],
//       Buyer_Max_Amount: [ null, [ Validators.required ] ],
//       Message: [ null, [ Validators.required ] ],
//       Buyer_Deduction_Amount: [ null, [ Validators.required ] ],
//       Expiry_Date: [ new Date(), [ Validators.required ] ],
//     });
//     this.BuyersOfferForm = this.fb.group({
//       Buyeredetails: [ this.selectedBuyer, [ Validators.required ] ],
//       Message: [ null, [ Validators.required ] ],
//       Buyer_Deduction_Amount: [ null, [ Validators.required ] ],
//       Expiry_Date: [ new Date(), [ Validators.required ] ],
//     });
//   }
//   onSubmit_GenericOffersForm(): void {
//     for (const i in this.GenericOfferForm.controls) {
//       this.GenericOfferForm.controls[ i ].markAsDirty();
//       this.GenericOfferForm.controls[ i ].updateValueAndValidity();
//     }
//     if(this.GenericOfferForm.valid){
//       let adminData: any = JSON.parse(localStorage.getItem("adminData"))
//       let ExpirayDate:Date=this.GenericOfferForm.value.Expiry_Date
//       let userdata={
//         AdminID: adminData.AdminID,
//         SessionID: adminData.SessionID,
//         Buyer_Min_Amount:this.GenericOfferForm.value.Buyer_Min_Amount,
//         Buyer_Max_Amount:this.GenericOfferForm.value.Buyer_Max_Amount,
//         Message:this.GenericOfferForm.value.Message,
//         Buyer_Deduction_Amount:this.GenericOfferForm.value.Buyer_Deduction_Amount,
//         Expiry_Date:ExpirayDate.getDate()+'-'+(ExpirayDate.getMonth()+1)+'-'+ExpirayDate.getFullYear(),
//         Type:1,
//         ShopID:'',
//         BuyerID:''
//       }
//       try {
  
//         this._appService.postMethod('Create_Offer_Message', userdata)
//           .subscribe(resp => {
  
//             if (resp.success) {
//            this.GenericOfferForm.reset();
//            this.nzMessageService.success('Offer Created Sucessfully')

//             } else {
//               this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);
  
  
//             }
//           },
//             error => {
  
//             })
//       } catch (e) {
  
//       }
//     }
//   }
//   onclickOfferType(offerType:number){
//     if(offerType==1){
//       this.GenericOfferForm.reset();
//     }else if(offerType==2){
//       this.getShopsList();
//       this.ShopOfferForm.reset()
//     }else if(offerType==3){
//       this.BuyersOfferForm.reset()
//     }
//   }
// getShopsList(){
//   let adminData: any = JSON.parse(localStorage.getItem("adminData"))
//   let userdata={
//     AdminID: adminData.AdminID,
//     SessionID: adminData.SessionID,
//   }
//   try {
  
//     this._appService.postMethod('List_Only_Shops', userdata)
//       .subscribe(resp => {

//         if (resp.success) {
//        this.ShopList=resp.extras.Data

//         } else {
//           this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


//         }
//       },
//         error => {

//         })
//   } catch (e) {

//   }
// }
// onSubmit_ShopOffersForm(){
//   for (const i in this.ShopOfferForm.controls) {
//     this.ShopOfferForm.controls[ i ].markAsDirty();
//     this.ShopOfferForm.controls[ i ].updateValueAndValidity();
//   }
//   if(this.ShopOfferForm.valid){
//     let adminData: any = JSON.parse(localStorage.getItem("adminData"))
//     let ExpirayDate:Date=this.ShopOfferForm.value.Expiry_Date
//     let userdata={
//       AdminID: adminData.AdminID,
//       SessionID: adminData.SessionID,
//       Buyer_Min_Amount:this.ShopOfferForm.value.Buyer_Min_Amount,
//       Buyer_Max_Amount:this.ShopOfferForm.value.Buyer_Max_Amount,
//       Message:this.ShopOfferForm.value.Message,
//       Buyer_Deduction_Amount:this.ShopOfferForm.value.Buyer_Deduction_Amount,
//       Expiry_Date:ExpirayDate.getDate()+'-'+(ExpirayDate.getMonth()+1)+'-'+ExpirayDate.getFullYear(),
//       Type:2,
//       ShopID:this.ShopOfferForm.value.ShopDetails.ShopID,
//       BuyerID:''
//     }
//     try {

//       this._appService.postMethod('Create_Offer_Message', userdata)
//         .subscribe(resp => {

//           if (resp.success) {
//          this.ShopOfferForm.reset();
//          this.nzMessageService.success('Offer Created Sucessfully')

//           } else {
//             this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


//           }
//         },
//           error => {

//           })
//     } catch (e) {

//     }
//   }
// }
// OnSearchBuyers(value:string){
//   this.BuyersList=[]
//   if(value.length>2){
//     this.validating_Status='validating'
//     this.isBuyersLoading=true
//     this.searchValue=value
//     this.onBuyersSearch()
//   }
  

// }
// onBuyersSearch(){
//   let adminData: any = JSON.parse(localStorage.getItem("adminData"))
//   let userdata={
//     AdminID: adminData.AdminID,
//     SessionID: adminData.SessionID,
//     SearchValue:this.searchValue
//   }
//   try {
//     this._appService.postMethod('Search_Buyers', userdata)
//     .pipe(debounceTime(500))
//       .subscribe(resp => {
//         if (resp.success) {
//           this.validating_Status=''
//           this.isBuyersLoading=false
//           this.BuyersList = resp.extras.Data;
//         } else {
//           this.validating_Status='error'
//           this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);
//         }
//       },
//         error => {

//         })
//   } catch (e) {

//   }
// }
// onSubmit_BuyersOffersForm(){
//   for (const i in this.BuyersOfferForm.controls) {
//     this.BuyersOfferForm.controls[ i ].markAsDirty();
//     this.BuyersOfferForm.controls[ i ].updateValueAndValidity();
//   }
//   if(this.BuyersOfferForm.valid){
//     let adminData: any = JSON.parse(localStorage.getItem("adminData"))
//     let ExpirayDate:Date=this.BuyersOfferForm.value.Expiry_Date
//     let userdata={
//       AdminID: adminData.AdminID,
//       SessionID: adminData.SessionID,
//       Buyer_Min_Amount:this.BuyersOfferForm.value.Buyer_Deduction_Amount,
//       Buyer_Max_Amount:this.BuyersOfferForm.value.Buyer_Deduction_Amount+1,
//       Message:this.BuyersOfferForm.value.Message,
//       Buyer_Deduction_Amount:this.BuyersOfferForm.value.Buyer_Deduction_Amount,
//       Expiry_Date:ExpirayDate.getDate()+'-'+(ExpirayDate.getMonth()+1)+'-'+ExpirayDate.getFullYear(),
//       Type:3,
//       ShopID:"",
//       BuyerID:this.buyerId
//     }
//     try {

//       this._appService.postMethod('Create_Offer_Message', userdata)
//         .subscribe(resp => {

//           if (resp.success) {
//          this.BuyersOfferForm.reset();
//          this.nzMessageService.success('Offer Created Sucessfully')

//           } else {
//             this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


//           }
//         },
//           error => {

//           })
//     } catch (e) {

//     }
//   }
// }
// onbuyersModal(){
//   this.isVisible_buyersModal=true
// }
// handleCancel(){
//   this.buyersSearchValue=''
//   this.BuyersList=[]
//   this.isVisible_buyersModal=false
// }
// handleOk(){
//   this.buyersSearchValue=''
//   this.BuyersList=[]
//   this.isVisible_buyersModal=false
// }
// onSelectBuyer(data){
//   this.buyersSearchValue=''
//   this.BuyersList=[]
//   this.isVisible_buyersModal=false
//   this.buyerId=data.BuyerID
//   this.BuyersOfferForm.patchValue({Buyeredetails:data.Buyer_Name+'-'+data.Buyer_PhoneNumber})
// }
// }
