import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './models/product/product-list/product-list.component';
import { ProductDetailComponent } from './models/product/product-detail/product-detail.component';
import { ProductCreateComponent } from './models/product/product-create/product-create.component';
import { ProductChangeComponent } from './models/product/product-change/product-change.component';
import { RequestListComponent } from './models/request/request-list/request-list.component';
import { RequestDetailComponent } from './models/request/request-detail/request-detail.component';
import { RequestCreateComponent } from './models/request/request-create/request-create.component';
import { RequestChangeComponent } from './models/request/request-change/request-change.component';
import { RequestlineListComponent } from './models/requestline/requestline-list/requestline-list.component';
import { RequestlineDetailComponent } from './models/requestline/requestline-detail/requestline-detail.component';
import { RequestlineCreateComponent } from './models/requestline/requestline-create/requestline-create.component';
import { RequestlineChangeComponent } from './models/requestline/requestline-change/requestline-change.component';
import { UserListComponent } from './models/user/user-list/user-list.component';
import { UserDetailComponent } from './models/user/user-detail/user-detail.component';
import { UserCreateComponent } from './models/user/user-create/user-create.component';
import { UserChangeComponent } from './models/user/user-change/user-change.component';
import { UserLoginComponent } from './models/user/user-login/user-login.component';
import { VendorListComponent } from './models/vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './models/vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './models/vendor/vendor-create/vendor-create.component';
import { VendorChangeComponent } from './models/vendor/vendor-change/vendor-change.component';
import { HomeComponent } from './models/misc/home/home.component';
import { AboutComponent } from './models/misc/about/about.component';
import { E404Component } from './models/misc/e404/e404.component';
import { RequestReviewComponent } from './models/request/request-review/request-review.component';
import { MenuComponent } from './models/misc/menu/menu.component';

const routes: Routes = [
  {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"home",component: HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"Products",component:ProductListComponent},
  {path:"Products/change/:id",component:ProductChangeComponent},
  {path:"Products/create",component:ProductCreateComponent},
  {path:"Products/detail/:id",component:ProductDetailComponent},


  {path:"Users",component:UserListComponent},
  {path:"Users/change/:id",component:UserChangeComponent},
  {path:"Users/create",component:UserCreateComponent},
  {path:"Users/detail/:id",component:UserDetailComponent},
  {path:"login", component:UserLoginComponent},


  {path:"Vendors",component:VendorListComponent},
  {path:"Vendors/change/:id",component:VendorChangeComponent},
  {path:"Vendors/create",component:VendorCreateComponent},
  {path:"Vendors/detail/:id",component:VendorDetailComponent},


  {path:"Requests",component:RequestListComponent},
  {path:"Requests/change/:id",component:RequestChangeComponent},
  {path:"Requests/create",component:RequestCreateComponent},
  {path:"Requests/detail/:id",component:RequestDetailComponent},
  {path:"review",component:RequestReviewComponent},


  {path:"Requests/lines/:id",component:RequestlineListComponent},
  {path:"Requestlines/change/:id",component:RequestlineChangeComponent},
  {path:"Requests/lines/create/:id",component:RequestlineCreateComponent},
  {path:"Requestlines/detail/:id",component:RequestlineDetailComponent},
  


  {path:"**", component:E404Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
