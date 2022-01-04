import { Component, OnInit,NgZone } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Route, Router } from '@angular/router';
// import { FormGroup } from '@angular/forms';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
declare var google: any

@Component({
  selector: 'app-view-vendor',
  templateUrl: './view-vendor.component.html',
  styleUrls: ['./view-vendor.component.css']
})
export class ViewVendorComponent implements OnInit {
  editAddress :FormGroup
  VendorList: any=[];
  totalItem: any;
  detailview: number;
  limit=this._appService.limit
  currentPage=1
  prodcutsList: any;
  ShopID: any;
  visible: boolean;
  GstVisible:boolean;
  shopNameEdit: any;
  shopGstEdit: any;
  isEditShopName: boolean=false;
  isEditGstNumber: boolean=false;
  isEditIndex: any;
  isEditGst: any;
  isLevelsDrawer: boolean;
  map: any;
  updateBranchAddress: any;
  zoom : number
  latitude: number;
  longitude: number;
  shopId: any;
  constructor(private _appService: AppService,
    private router:Router,
    private nzMessageService: NzMessageService,
    private ngZone: NgZone,
    private fb: FormBuilder,
    ) { }
  ngOnInit() {
    this.ViewVendors(0)
    this.editAddress = this.fb.group({
      Address: [null, [Validators.required]],
    });
  }
ViewVendors(skip){
  let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      skip:skip,
      limit:this._appService.limit
    }
    try {

      this._appService.postMethod('List_All_Shops', body)
        .subscribe(resp => {

          if (resp.success) {
            this.totalItem=resp.extras.Count
            if(skip==0){
              this.currentPage=1
            }
            this.VendorList=resp.extras.Data
          } else {
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


          }
        },
          error => {

          })
    } catch (e) {

    }
}
onNextPage(event:number){
  this.currentPage=event
  let skip=(event-1)*this._appService.limit
  this.ViewVendors(skip)
}
onShopNameChage(data,i){
  this.isEditShopName=true
  this.isEditIndex=i
  this.shopNameEdit=data.Shop_Name
  this.visible=true
 this.ShopID=data.ShopID
}
onCancel(){
  this.isEditIndex=-1
}
onUpdate(shopname){
  console.log(shopname)
  let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      ShopID:this.ShopID,
      Shop_Name:shopname
    }
    try {

      this._appService.postMethod('Edit_Shop_Name', body)
        .subscribe(resp => {

          if (resp.success) {
            this.isEditIndex=-1
            this.nzMessageService.success('Shop Name updated Sucessfully')
            
          this.ViewVendors(0)
          } else {
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


          }
        },
          error => {

          })
    } catch (e) {

    }

}
onClickAddresDrawer(data) {
  this.isLevelsDrawer = true
  this.shopId=data.ShopID
  console.log("id"+JSON.stringify(this.shopId))
  this.map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 17.4471, lng: 78.454 },
    zoom: 14,
    fullscreenControl: true
  });
  this.addresChange()
  this.editAddress.patchValue({
    Address: data.Address,
  })
}
OnCloseAddressDrawer() {
  this.isLevelsDrawer = false
  // this.editAddress.reset()
}
addresChange() {
  console.log('enter to ')
  var autocomplete: any;
  var options = { componentRestrictions: { country: "IN" } };
  let updateBranchAddress = <HTMLInputElement>document.getElementById('addressEdit');
  autocomplete = new google.maps.places.Autocomplete(updateBranchAddress, options)
  google.maps.event.addListener(autocomplete, 'place_changed', () => {
    this.ngZone.run(() => {
      this.zoom = 17;
      var place = autocomplete.getPlace();
      console.log(place)
      if (place.geometry === undefined || place.geometry === null) {
        return;
      }
      this.updateBranchAddress = place.formatted_address
      this.latitude = place.geometry.location.lat();
      this.longitude = place.geometry.location.lng();
      console.log("lat"+JSON.stringify(this.latitude))
      console.log("lon"+JSON.stringify(this.longitude))
    });
  });
}
submitupdateAddress() {
  let adminData: any = JSON.parse(localStorage.getItem("adminData"))
  let body = {
    AdminID: adminData.AdminID,
    SessionID: adminData.SessionID,
    ShopID:this.shopId,
    Latitude :this.latitude,
    Longitude: this.longitude,
    Address: this.updateBranchAddress,
  }
  try {
    this._appService.postMethod('Edit_Shop', body)
      .subscribe(resp => {

        if (resp.success) {
          this.nzMessageService.success('product Details Updated Sucessfully')
          this.isLevelsDrawer = false
          this.ViewVendors(0)

        } else {
          this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


        }
      },
        error => {

        })
  } catch (e) {

  }
}
onShopGstChage(data,i){
  this.isEditGstNumber=true
  this.isEditGst=i
  this.shopGstEdit=data.GST_Number
  this.GstVisible=true
 this.ShopID=data.ShopID
}
onCancelGst(){
  this.isEditGst=-1
}
onUpdateGst(gstnumber){
  console.log(gstnumber)
  let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      ShopID:this.ShopID,
      GST_Number:gstnumber
    }
    try {

      this._appService.postMethod('Edit_Shop_GST', body)
        .subscribe(resp => {

          if (resp.success) {
            this.isEditGst=-1
            this.nzMessageService.success('Gst Number updated Sucessfully')
            
          this.ViewVendors(0)
          } else {
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


          }
        },
          error => {

          })
    } catch (e) {

    }

}


}
