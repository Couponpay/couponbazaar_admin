import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'vendor', loadChildren: './../vendor/vendor.module#VendorModule' },
      { path: 'plots', loadChildren: './../plots/plots.module#PlotsModule' },
      { path: 'admin', loadChildren: './../adminSettings/adminSettings.module#AdminSettingsModule' },
      { path: 'product', loadChildren: './../products/products.module#ProductsModule' },
      { path: 'companyLogs', loadChildren: './../companyLogs/companyLogs.module#CompanyLogsModule' },
      { path: 'buyers', loadChildren: './../buyers/buyers.module#BuyersModule' },
      { path: 'Help', loadChildren: './../help/help.module#HelpModule' },
      { path: 'Banner', loadChildren: './../banner/banner.module#BannerModule' },
      { path: 'Deliverytype', loadChildren: './../delivery_type/delivery_type.module#Delivery_typeModule' },
      { path: 'category', loadChildren:'./../category/category.module#CategoryModule'},

      { path: 'NewsItems', 
      loadChildren:'./../NewsItems/NewsItems.module#NewsItemsModule'},
      { path: 'marketing', 
      loadChildren:'./../marketing/marketing.module#MarketingModule'},
      { path: 'BuyersOrders', loadChildren: './../buyers/buyers-orders/buyers-orders.module#BuyersOrdersModule' },

      {
        path: 'buyersLogs/:id/:name/:avilableAmount/:withdrwanAmount/:totalAmount',
        loadChildren: './../buyers/buyers-logs/buyers-logs.module#BuyersLogsModule'
      },
      // {path:'trendingBuyers',loadChildren:'./../buyers/trending-buyers/trending-buyers.module#TrendingBuyersModule'},

      { path: 'buyersNetwork', loadChildren: './../buyer-network/buyer-network.module#BuyerNetworkModule' },
      { path: 'buyersbills/:id/:name', loadChildren: './../buyers/buyer-bills/buyer-bills.module#BuyerBillsModule' },
      { path: 'trimmeshare', loadChildren: './../TrimmerShare/TrimmerShare.module#TrimmerShareModule' },
      { path: 'introducer', loadChildren: './../introducer/introducer.module#IntroducerModule' },
      { path: 'bonanza', loadChildren: './../bonanza/bonanza.module#BonanzaModule' },
      { path: 'couponCat', loadChildren: './../coupon-category/coupon-category.module#CouponCategoryModule' },
      { path: 'appSetting', loadChildren: './../common-app-settings/common-app-settings.module#CommonAppSettingsModule' },
      { path: 'userShops', loadChildren: './../user-shops/user-shops.module#UserShopsModule' },
      { path: 'couponProducts', loadChildren: './../coupon-products/coupon-products.module#CouponProductsModule' },
      { path: 'targetReferral', loadChildren: './../target-referrals/target-referrals.module#TargetReferralsModule' },
      { path: 'giftMeter', loadChildren: './../gift-meter/gift-meter.module#GiftMeterModule' },
      { path: 'WithdrawRequests', loadChildren: './../withdraw-gift-requests/withdraw-gift-requests.module#WithdrawGiftRequestsModule' },
      { path: 'productLogs', loadChildren: './../product-buyer-logs/product-buyer-logs.module#ProductBuyerLogsModule' },
      { path: 'boxAmountShares', loadChildren: './../box-amount-shares/box-amount-shares.module#BoxAmountSharesModule' },
      { path: 'states', loadChildren: './../state-module/state-module.module#StateModuleModule' },
      // { path: 'states', loadChildren: './../state-module/state-module.module#StateModuleModule' },
        {path:'District', loadChildren:'./../District/District.module#DistrictModule'},
        {path:'PinCode', loadChildren:'./../PinCode/PinCode.module#PinCodeModule'},
      {
        path: 'introducerlogs/:id/:name/:avilableAmount/:withdrwanAmount/:totalAmount',
        loadChildren: './../introducer/introducer-logs/introducer-logs.module#IntroducerLogsModule'
      },
      // {path:'offers',loadChildren:'./../offers/offers.module#OffersModule'},
      { path: '', redirectTo: 'vendor', pathMatch: 'full' }

    ],
  },

];

export const DashboardRoutes = RouterModule.forChild(routes);
