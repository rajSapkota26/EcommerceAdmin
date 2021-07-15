import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/product/productService/product-service.service';
import Swal from 'sweetalert2';
import { MycartService } from '../service/mycart.service';
import { PreorderService } from '../service/preorder.service';
import { UserprofileService } from '../service/userprofile.service';


@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit {
  profile;
  userprofile = {
    id: '',
    userId: '',
    email: '',
    phone: '',
    fullName: '',
    region: '',
    city: '',
    area: '',
    address: '',
  };
  pId;
  cId;
  MyCart;
  orderId;
  totaPrice;
  shippingFee;
  product = {
    id: '',
    name: '',
    color: '',
    price: '',
    description: ' ',
    brand: '',
    image: '',
    stock: '',
    discount: '',
    weight: '',
    unit: '',
    category: {
      id: '',
      name: '',
      description: '',
      image: '',
      tax: '',
      deliveryCharge: '',
    }
  };
  PreOrders = {
    id: '',
    status: '',
    date: '',
    productName: '',
    productId: '',
    price: '',
    quantities: '',
    productImage: '',
    userId: '',
    paymentAmount: '',
    paymentDate: '',
    paymentProductId: '',
    paymentStatus: '',
    paymentSuccessMessage: '',

  }
  constructor(
    private proService: ProductServiceService,
    private ppservice: UserprofileService,
    private ordservice: PreorderService,
    private cartservice: MycartService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.pId = this.route.snapshot.params.id
    this.cId = this.route.snapshot.params.cid

    this.getPP();
    this.getProduct();
    this.getmycart();

    this.totaPrice = ((Number(this.product.price) * this.MyCart.quantities) - (Number(this.product.discount) * this.MyCart.quantities));
    this.shippingFee = Number(this.product.category.deliveryCharge) + Number(this.product.category.tax)
  }
  public getmycart() {
    this.cartservice.getAllCartById(this.cId).subscribe(
      (data: any) => {
        if (data != null) {
          this.MyCart = data
          console.log(data)
        }
      },
      (error) => {
        Swal.fire('error', 'Internal server error', 'error');
      }
    );
  }
  public getPP() {
    this.ppservice.getUserProfileByUserId("123").subscribe(
      (data: any) => {
        if (data != null) {
          this.profile = data
        }
      },
      (error) => {
        Swal.fire('error', 'Internal server error', 'error');
      }
    );
  }
  public getProduct() {
    this.proService.getProduct(this.pId).subscribe(
      (data: any) => {
        if (data != null) {
          this.product = data
        }
      },
      (error) => {
        Swal.fire('error', 'Internal server error', 'error');
      }
    );
  }
  public savePP() {
    this.userprofile.userId = '123';
    this.ppservice.saveUserProfile(this.userprofile).subscribe(
      (data: any) => {
        Swal.fire('success', 'Profile updated...', 'success');
      },
      (error) => {
        Swal.fire('error', 'Internal server error', 'error');
      }
    );

  }
  public proceedPay() {
    this.totaPrice = (Number(this.product.price) * this.MyCart.quantities) - (Number(this.product.discount) * this.MyCart.quantities);
    this.PreOrders.productId = this.pId;
    this.PreOrders.productName = this.product.name;
    this.PreOrders.price = this.totaPrice;
    console.log(this.totaPrice);
    this.PreOrders.quantities = this.MyCart.quantities;
    this.PreOrders.productImage = this.product.image;

    this.PreOrders.userId = '123';
    this.PreOrders.status = 'pending';

    this.ordservice.savePreOrders(this.PreOrders).subscribe(
      (data: any) => {
        this.orderId = data.id;
        this.router.navigate(['proceedPayment/', this.orderId]);
      },
      (error) => {
        Swal.fire('error', 'Internal server error', 'error');
      }
    );
  }


}
