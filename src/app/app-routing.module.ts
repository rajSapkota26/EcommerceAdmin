import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPannelComponent } from './admin/admin-pannel/admin-pannel.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { ViewCategoryComponent } from './category/view-category/view-category.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './loginorsignup/login/login.component';
import { RegisterComponent } from './loginorsignup/register/register.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ShowProductComponent } from './product/show-product/show-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { AllProductListComponent } from './user/all-product-list/all-product-list.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { MycartComponent } from './user/mycart/mycart.component';
import { MyorderComponent } from './user/preorder/myorder.component';
import { PaymentComponent } from './user/payment/payment.component';
import { ProductDetailsComponent } from './user/product-details/product-details.component';
import { ShowOrderComponent } from './user/show-order/show-order.component';
import { ViewOrdersComponent } from './admin/view-orders/view-orders.component';
import { UpdateOrdersComponent } from './admin/update-orders/update-orders.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: RegisterComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminPannelComponent,
    children: [{
      path: 'viewCategory',
      component: ViewCategoryComponent,
    },
    {
      path: 'addCategory',
      component: AddCategoryComponent,

    },
    {
      path: 'updateCategory/:id',
      component: UpdateCategoryComponent,

    },
    {
      path: 'showProducts/:id/:name',
      component: ShowProductComponent,

    },
    {
      path: 'addProduct/:id/:name',
      component: AddProductComponent,

    },
    {
      path: 'updateProduct/:id',
      component: UpdateProductComponent,

    },
    {
      path: 'viewOrders',
      component: ViewOrdersComponent,

    },
    {
      path: 'viewOrders/:id',
      component: UpdateOrdersComponent,

    },
    ]

  },
  {
    path: 'user',
    component: DashboardComponent,
    children: [
      {
        path: 'allProduct/:id',
        component: AllProductListComponent
      },
      {
        path: 'productDetails/:id',
        component: ProductDetailsComponent
      },
      {
        path: 'mycart',
        component: MycartComponent
      },
      {
        path: 'myorder',
        component: ShowOrderComponent
      },

    ]
  },
  {
    path: 'creatingOrder/:id/:cid',
    component: MyorderComponent,
  },
  {
    path: 'proceedPayment/:id',
    component: PaymentComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
