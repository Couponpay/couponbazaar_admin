// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { AppService } from 'src/app/app.service';
// import { NzMessageService } from 'ng-zorro-antd';

// @Component({
//   selector: 'app-offers-details-by-buyers',
//   templateUrl: './offers-details-by-buyers.component.html',
//   styleUrls: ['./offers-details-by-buyers.component.css']
// })
// export class OffersDetailsByBuyersComponent implements OnInit {
//   sub: any;
//   singleOrderDetails: any=[];
//   buyersList_count: any;
//   buyersList: any;

  
//   constructor(private route: ActivatedRoute,
//     private _appService: AppService,
//     private nzMessageService: NzMessageService) {
//       this.singleOrderDetails=this._appService.singleOfferDetails
//     }

//   ngOnInit() {
//     this.getbuyerList(0)
//   }

//   getbuyerList(skip){
//     let adminData: any = JSON.parse(localStorage.getItem("adminData"))
//     let userdata={
//       AdminID: adminData.AdminID,
//       SessionID: adminData.SessionID,
//       MessageID:this.singleOrderDetails.MessageID,
//       skip:skip,
//       limit:this._appService.limit
//     }
//     try {
//       this._appService.postMethod('List_All_Buyer_Offer_Message_Logs', userdata)
//         .subscribe(resp => {
//           if (resp.success) {
//             this.buyersList_count=resp.extras.Count
//             this.buyersList = resp.extras.Data;
//           } else {
//             this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);
//           }
//         },
//           error => {
  
//           })
//     } catch (e) {
  
//     }
//   }
//   onNextPage_Buyers(event:number){
//     let skip=(event-1)*this._appService.limit
//     this.getbuyerList(skip)
//   }
  
// }
