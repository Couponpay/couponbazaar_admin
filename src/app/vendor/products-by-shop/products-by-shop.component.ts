import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { NzMessageService } from 'ng-zorro-antd';
import { NgForm } from '@angular/forms';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-products-by-shop',
  templateUrl: './products-by-shop.component.html',
  styleUrls: ['./products-by-shop.component.css']
})
export class ProductsByShopComponent implements OnInit {
  stackPrice: number;
  selectedproduct;
  id: number;
  private sub: any;
  totalItem: any;
  prodcutsList: any = [];
  ProductDetails: any;
  shopName: any;
  isProductModal: boolean;
  productsOfshop = [];
  shopid: any;
  isaddStack: any;
  limit = this._appService.limit
  currentPage = 1
  constructor(private route: ActivatedRoute,
    private _appService: AppService,
    private nzMessageService: NzMessageService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.shopid = params.id
      this.getProductsByShop(params.id, 0)
      this.shopName = params['Shop_Name'];
      // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  onNextPage_ProductsByShop(event) {
    this.currentPage = event
    let skip = (event - 1) * this._appService.limit
    this.getProductsByShop(this.shopid, skip)
  }
  getProductsByShop(shopid, skip) {
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      ShopID: shopid,
      skip: skip,
      limit: this._appService.limit
    }
    try {

      this._appService.postMethod('List_All_Shop_Product_Stocks', body)
        .subscribe(resp => {

          if (resp.success) {
            if (skip == 0) {
              this.currentPage = 1
            }
            this.totalItem = resp.extras.Count
            this.productsOfshop = resp.extras.Data
            if (this.productsOfshop.length == 0) {
              this.nzMessageService.warning('No Products')
            }


          } else {
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


          }
        },
          error => {

          })
    } catch (e) {

    }
  }
  onaddProduct() {
    this.isProductModal = true
    this.isaddStack = -1
    this.viewProducts()
  }
  handleCancel() {
    this.isProductModal = false
  }

  viewProducts() {
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      skip: 0,
      limit: 1000
    }
    try {

      this._appService.postMethod('List_All_Products', body)
        .subscribe(resp => {

          if (resp.success) {
            this.prodcutsList = resp.extras.Data

          } else {
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


          }
        },
          error => {

          })
    } catch (e) {

    }
  }
  onlinkingProduct() {


  }
  onAddStack(data, i) {
    this.stackPrice = null
    this.isaddStack = i
  }
  onSaveStock(data, stockPrice) {
    if(stockPrice>0){
      let adminData: any = JSON.parse(localStorage.getItem("adminData"))
      let body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        ShopID: this.shopid,
        ProductID: data.ProductID,
        OperationInput: stockPrice,
        OperationType: 1
  
      }
      try {
        this._appService.postMethod('Update_Shop_Product_Stock', body)
          .subscribe(resp => {
  
            if (resp.success) {
              this.isProductModal = false
              this.getProductsByShop(this.shopid, 0)
              this.nzMessageService.success('product added to shop Sucessfully')
  
            } else {
              this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);
  
  
            }
          },
            error => {
  
            })
      } catch (e) {
  
      }
    }else{
      this.nzMessageService.warning('Invalid Stock')
    }
  
  }
  confirm() {
    this.stackPrice = null;
    this.isaddStack = -1;
  }
  cancel() {
  }

}
