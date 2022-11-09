import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

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
import { HomeComponent } from './models/misc/home/home.component';
import { AboutComponent } from './models/misc/about/about.component';
import { E404Component } from './models/misc/e404/e404.component';
import { MenuComponent } from './models/misc/menu/menu.component';
import { RequestReviewComponent } from './models/request/request-review/request-review.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { BoolDisplayPipe } from './common/bool-display.pipe';
import { ReviewListComponent } from './models/requestline/review-list/review-list.component';
import { ReviewItemComponent } from './models/requestline/review-item/review-item.component';

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
    VendorChangeComponent,
    HomeComponent,
    AboutComponent,
    E404Component,
    MenuComponent,
    RequestReviewComponent,
    HeaderComponent,
    FooterComponent,
    BoolDisplayPipe,
    ReviewListComponent,
    ReviewItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
