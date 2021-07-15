import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './commonComponent/sidebar/sidebar.component';
import { NavbarComponent } from './commonComponent/navbar/navbar.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { ViewCategoryComponent } from './category/view-category/view-category.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { ShowProductComponent } from './product/show-product/show-product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './home/home.component';
import { MatInputModule } from '@angular/material/input';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AdminPannelComponent } from './admin/admin-pannel/admin-pannel.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { SellerDashboardComponent } from './seller/seller-dashboard/seller-dashboard.component';
import { DeliveryboyDashboardComponent } from './deliveryboy/deliveryboy-dashboard/deliveryboy-dashboard.component';
import { LoginComponent } from './loginorsignup/login/login.component';
import { RegisterComponent } from './loginorsignup/register/register.component';
import { UserSidebarComponent } from './user/user-sidebar/user-sidebar.component';
import { AllProductListComponent } from './user/all-product-list/all-product-list.component';
import { ProductDetailsComponent } from './user/product-details/product-details.component';
import { MycartComponent } from './user/mycart/mycart.component';
import { MyorderComponent } from './user/preorder/myorder.component';
import { PaymentComponent } from './user/payment/payment.component';
import { DeliveryStatusComponent } from './user/delivery-status/delivery-status.component';
import { ShowOrderComponent } from './user/show-order/show-order.component';
import { ViewOrdersComponent } from './admin/view-orders/view-orders.component';
import { UpdateOrdersComponent } from './admin/update-orders/update-orders.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    UpdateCategoryComponent,
    ShowProductComponent,
    AddProductComponent,
    UpdateProductComponent,
    HomeComponent,
    AdminPannelComponent,
    DashboardComponent,
    SellerDashboardComponent,
    DeliveryboyDashboardComponent,
    LoginComponent,
    RegisterComponent,
    UserSidebarComponent,
    AllProductListComponent,
    ProductDetailsComponent,
    MycartComponent,
    MyorderComponent,
    PaymentComponent,
    DeliveryStatusComponent,
    ShowOrderComponent,
    ViewOrdersComponent,
    UpdateOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatInputModule,
    CKEditorModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
