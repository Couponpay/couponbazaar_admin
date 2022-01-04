// import { Component, OnInit } from '@angular/core';
// import { AppService } from 'src/app/app.service';
// import { NzMessageService } from 'ng-zorro-antd';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-view-offers',
//   templateUrl: './view-offers.component.html',
//   styleUrls: ['./view-offers.component.css']
// })
// export class ViewOffersComponent implements OnInit {
//   offersList: any=[];
//   totalItem: any;
//   isbuyerModal: boolean;
//   MessageID: any;
//   buyersList_count: any;
//   buyersList: any;
//   currentPage_Offers=1
//   currentPage_Buyers=1
//   limit=this._appService.limit
//   constructor(
//     private _appService:AppService,
//     private router:Router,
//     private nzMessageService:NzMessageService
//   ) {
//   }  
//   ngOnInit() {
//     this.getOffers(0)
//   }
// getOffers(skip){
//   let adminData: any = JSON.parse(localStorage.getItem("adminData"))
//   let userdata={
//     AdminID: adminData.AdminID,
//     SessionID: adminData.SessionID,
//     skip:skip,
//     limit:this._appService.limit
//   }
//   try {
//     this._appService.postMethod('List_All_Offer_Messages', userdata)
//       .subscribe(resp => {
//         if (resp.success) {
//           this.totalItem=resp.extras.Count
//           if(skip==0){
//             this.currentPage_Offers=1
//           }
//           this.offersList = resp.extras.Data;
//         } else {
//           this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);
//         }
//       },
//         error => {

//         })
//   } catch (e) {

//   }
// }
// onNextPage_Offers(event:number){
//   this.currentPage_Offers=event
//   let skip=(event-1)*this._appService.limit
//   this.getOffers(skip)
// }
// handleCancel(){
// this.isbuyerModal=false
// }
// handleOk(){
//   this.isbuyerModal=false

// }
// OnBuyerLogs(item){
//   this._appService.singleOfferDetails=item
//   this.router.navigate(['/dashboard','offers','detailsofoffers',item.MessageID],{'skipLocationChange':true})
//   // this.buyersList=[]skipLocationChange="true" [routerLink]="['/dashboard','offers','detailsofoffers',item.MessageID]" 
//   // this.isbuyerModal=true
//   // this.MessageID=item.MessageID
//   // this.getbuyerList(0)
// }
// getbuyerList(skip){
//   let adminData: any = JSON.parse(localStorage.getItem("adminData"))
//   let userdata={
//     AdminID: adminData.AdminID,
//     SessionID: adminData.SessionID,
//     MessageID:this.MessageID,
//     skip:skip,
//     limit:this._appService.limit
//   }
//   try {
//     this._appService.postMethod('List_All_Buyer_Offer_Message_Logs', userdata)
//       .subscribe(resp => {
//         if (resp.success) {
//           this.buyersList_count=resp.extras.Count
//           if(skip==0){
//             this.currentPage_Buyers=1
//           }
//           this.buyersList = resp.extras.Data;
//         } else {
//           this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);
//         }
//       },
//         error => {

//         })
//   } catch (e) {

//   }
// }
// onNextPage_Buyers(event:number){
//   this.currentPage_Buyers=event
//   let skip=(event-1)*this._appService.limit
//   this.getbuyerList(skip)
// }
// }
