import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  productslis = []
  singleOfferDetails = [];
  singleShopCartDetails = []
  //  ImageUpload_Url:string='https://api.dogemo.com/upload/'
  // ImageUpload_Url:string='https://apicb.mobilerechargeapp.net/upload/'
  ImageUpload_Url:string='https://xapi.buypay.co.in/upload/'
  dateFormat = 'dd/MM/yyyy hh:mm:ss a'


//   apiMessages=[
//     "",
//     "Server Error",
// "Database Error",
// "Enter All Tags",
// "Invalid Api Key",
// "Invalid User",
// "Session Expired",
// "User Account Inactivated",
// "Invalid Secret Code",
// "Invalid Device",
// "Invalid File",
// "Invalid Email Format",
// "Invalid Date",
// "Submit Date",
// "Invalid Gender",
// "Image Not Found",
// "Invalid Admin",
// "Shop Already Registered",
// "Invalid Introducer",
// "Invalid Shop",
// "Total Product Share Must Be  Percent",
// "Invalid Product",
// "Invalid Operation Type",
// "Phone Number Not Registered",
// "Vendor Shop Is Inactive",
// "Invalid Password",
// "Invalid Product Quantity",
// "Invalid Buyer",
// "Email Already Registered",
// "Email Not Registered",
// "Invalid Offer Type",
// "Invalid Expiry Date",
// "Deduction Amount Must Be Less than All Equal to Minimum Amount",
// "Message Size Exceeded",
// "Minimun Amount Must Be Less Maximum Amount",
// "No Buyers Available for This Offer",
// "Invalid Offer Code",
// "Offer Code Expired",
// "Offer Code Already Used",
// "Invalid Offer Message",
// "Invalid Payment Id",
// "Razorpay Error",
// "Invalid Capture Amount",
// "Razorpay Payment Failed",
// "Insufficient Balance",
// "Invalid Purchase Id",
// "Purchase Order Already Accepted",
// "Purchase Order Already Shipped",
// "Purchase Already Delivered",
// "Purchase Order Not Shipped",
// "Invalid Start Date or Invalid End Date",
// "Start Date Must Be Less than End Date",
// "Invalid Address",
// "Otp Request Exceed Try after Some Time",
// "Otp Tries Exceed Try after Some Time",
// "Invalid Otp",
// "Invalid Order",
// "Amount Exceed Wallet Available Balance",
// "Final Amount Missmatch",
// "Invalid Address Type",
// "Purchase Order Can Not Cancel",
// "Cart Empty",
// "Serial Number Exist",
// "Invalid Banner",
// "Invalid Pincode",
// "Invalid Delivery Type",
// "Referral Not Available",
// "Referral Phone Number and Self Phone Number Must Be Different",
// "Stock Not Available",
// "Category Exist",
// "Invalid Razorpay Request",
// "Account Not Active",
// "Cannot Remove Default Beneficiary Account",
// "Invalid Ifsc Code",
// "Invalid Beneficiary Account",
// "Amount Not Satisfy Minimum Maximum Transaction Amount",
// "Beneficiary Account Number Already Exist",
// "Invalid Shiprocket Request",
// "Invalid Shiprocket Orderid",
// "Product Weight Limit Excided Kg",
// "Cart Weight Limit Excided Kg",

// "News Title Characters Exceeded",
// "News Limit Exceeded",
// "Serial Number Already Exist",
// "Invalid News",
// "Request Size Exceeded",
// "Invalid Image",
// "Invalid Plot",
// "Maximum Images Exceeded",
// "Invalid Resource Type",
// "Invalid Resource",
// "Share Percent Mustbe Less than ",
// "Invalid Coupon Catagory",
// "Common App Settings Already Exists",
// "Share Percent Mustbe Equalto ",
// "No Data Found",
// "User Already Has Shop",
// "No User Shop Found",
// "No Request Found",
// "Invalid C Product",
// "Buyerid and Requestid Not Matched",

//   ]
 apiMessages = [
   "",
   "Server Error",
"Database Error",
"Enter All Tags",
"Invalid Api Key",
"Invalid User",
"Session Expired",
"User Account Inactivated",
"Invalid Secret Code",
"Invalid Device",
"Invalid File",
"Invalid Email Format",
"Invalid Date",
"Submit Date",
"Invalid Gender",
"Image Not Found",
"Invalid Admin",
"Shop Already Registered",
"Invalid Introducer",
"Invalid Shop",
"Total Product Share Must Be Hundred Percent",
"Invalid Product",
"Invalid Operation Type",
"Phone Number Not Registered",
"Vendor Shop Is Inactive",
"Invalid Password",
"Invalid Product Quantity",
"Invalid Buyer",
"Email Already Registered",
"Email Not Registered",
"Invalid Offer Type",
"Invalid Expiry Date",
"Deduction Amount Must Be Less than All Equal to Minimum Amount",
"Message Size Exceeded",
"Minimun Amount Must Be Less Maximum Amount",
"No Buyers Available for This Offer",
"Invalid Offer Code",
"Offer Code Expired",
"Offer Code Already Used",
"Invalid Offer Message",
"Invalid Payment Id",
"Razorpay Error",
"Invalid Capture Amount",
"Razorpay Payment Failed",
"Insufficient Balance",
"Invalid Purchase Id",
"Purchase Order Already Accepted",
"Purchase Order Already Shipped",
"Purchase Already Delivered",
"Purchase Order Not Shipped",
"Invalid Start Date or Invalid End Date",
"Start Date Must Be Less than End Date",
"Invalid Address",
"Otp Request Exceed Try after Some Time",
"Otp Tries Exceed Try after Some Time",
"Invalid Otp",
"Invalid Order",
"Amount Exceed Wallet Available Balance",
"Final Amount Missmatch",
"Invalid Address Type",
"Purchase Order Can Not Cancel",
"Cart Empty",
"Serial Number Exist",
"Invalid Banner",
"Invalid Pincode",
"Invalid Delivery Type",
"Referral Not Available",
"Referral Phone Number and Self Phone Number Must Be Different",
"Stock Not Available",
"Category Exist",
"Invalid Razorpay Request",
"Account Not Active",
"Cannot Remove Default Beneficiary Account",
"Invalid Ifsc Code",
"Invalid Beneficiary Account",
"Amount Not Satisfy Minimum Maximum Transaction Amount",
"Beneficiary Account Number Already Exist",
"Invalid Shiprocket Request",
"Invalid Shiprocket Orderid",
"Product Weight Limit Excided Kg",
"Cart Weight Limit Excided Kg",
"Invalid Matrix",
"Invalid Bonanza Type",
"Bonanza Already Available In Selected Dates",
"Invalid Bonanza",
"News Title Characters Exceeded",
"News Limit Exceeded",
"Serial Number Already Exist",
"Invalid News",
"Request Size Exceeded",
"Invalid Image",
"Invalid Plot",
"Maximum Images Exceeded",
"Invalid Resource Type",
"Invalid Resource",
"Share Percent Mustbe Less than ",
"Invalid Coupon Catagory",
"Common App Settings Already Exists",
"Share Percent Must be Equal To 100",
"No Data Found",
"User Already Has Shop",
"No User Shop Found",
"No Request Found",
"Invalid C Product",
"Buyerid and Requestid Not Matched",

 ]


  public readonly Url = `https://xapi.buypay.co.in/admin/`
  //  public readonly Url = `https://api.dogemo.com/admin/`;
  public readonly fileUrl ='https://xapi.buypay.co.in/upload/Upload_File'
  FindHost() {
    if (window.location.hostname == "admin.mycoffeeshope.online") {
      return `https://xapi.buypay.co.in/admin/`;
    } else {
      return `https://xapi.buypay.co.in/admin/`;
    }
  }
  AdminData = {};
  limit = 10
  constructor(private httpService: HttpClient) {
    this.getAdminData()
  }
  getAdminData() {
    //  this.AdminData = {
    //      "AdminID": "ADMIN--ADMIN",
    //      "SessionID": "SESSION--SESSION"
    //  }
    //  localStorage.setItem('adminData',JSON.stringify(this.AdminData))
    //  return this.AdminData;
  }
  getMethod(url): any {
    return this.httpService.get(url)
  }
  postMethod(posturl: string, body: any): any {
    return this.httpService.post(this.Url + posturl, body)
  }
  onImageUpload(req):Observable<any>{
   return this.httpService.request(req)
  }
  public readonly imageurl = 'https://xapi.buypay.co.in/upload/Upload_Image'
  // public readonly imageurl = 'https://apicb.mobilerechargeapp.net/upload/Upload_Image'
  // public readonly imageurl = this.getURL(2)

  getURL(Type) {
   
    if(Type==1){
      // return 'https://xapidh.mobilerechargeapp.net/admin/';
      return 'https://xapi.buypay.co.in/admin/'
      // return 'https://apicb.mobilerechargeapp.net/admin/'
      // if (this.document.location.hostname == "https://admindh.mobilerechargeapp.net") {
      //   return 'https://apidh.mobilerechargeapp.net/admin/';
      // } else {
      //   return 'https://xapidh.mobilerechargeapp.net/admin/';
  
      // }
    }
    else if(Type==2){
      return 'https://xapi.buypay.co.in/upload/Upload_Image'
      // return 'https://apicb.mobilerechargeapp.net/upload/Upload_Image'
      // return 'https://rapidh.mobilerechargeapp.net/upload/Upload_Image';
      // if (this.document.location.hostname == "https://admindh.mobilerechargeapp.net") {
      //   return 'https://apidh.mobilerechargeapp.net/upload/Upload_Image';
      // } else {
      //   return 'https://xapidh.mobilerechargeapp.net/upload/Upload_Image';
  
      // }
    }
    else if(Type==3){
    return  'https://xapi.buypay.co.in/upload/Upload_File'
    // return  'https://apicb.mobilerechargeapp.net/upload/Upload_File'
      // if (this.document.location.hostname == "https://admindh.mobilerechargeapp.net") {
      //   'https://apidh.mobilerechargeapp.net/upload/Upload_File'
      // } else {
      //   'https://xapidh.mobilerechargeapp.net/upload/Upload_File'
  
      // }
    } 
  


}
}