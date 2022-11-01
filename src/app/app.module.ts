import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductChangeComponent,
    RequestListComponent,
    RequestDetailComponent,
    RequestCreateComponent,
    RequestChangeComponent,
    RequestlineListComponent,
    RequestlineDetailComponent,
    RequestlineCreateComponent,
    RequestlineChangeComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserChangeComponent,
    UserLoginComponent,
    VendorListComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
