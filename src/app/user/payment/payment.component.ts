import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/product/productService/product-service.service';
import Swal from 'sweetalert2';
import { PreorderService } from '../service/preorder.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  orderId;
  totalPrice;
  shippingFee;
  PreOrders;
  Product = {
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
    specification: '',
    delivery: '',
    sewa: '',
    rating: '5*',
    category: {
      id: '',
      name: '',
      description: '',
      image: '',
      tax: '',
      deliveryCharge: '',
    }
  };
  params = {
    pid: '',
    txAmt: '',
    amt: '',
    psc: '',
    pdc: '',
    tAmt: '',
    scd: '',
    su: '',
    fu: ''
  }
  constructor(private route: ActivatedRoute,
    private router: Router,
    private ordservice: PreorderService,
    private proservice: ProductServiceService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.orderId = this.route.snapshot.params.id
    this.getOrderdetail();
    this.totalPrice = (Number(this.Product.price) * this.PreOrders.quantities) -
      (Number(this.Product.discount) * this.PreOrders.quantities);
    this.shippingFee = Number(this.Product.category.deliveryCharge) + Number(this.Product.category.tax)
  }


  public getOrderdetail() {
    this.ordservice.getPreOrders(this.orderId).subscribe(
      (data: any) => {
        this.PreOrders = data;
        console.log(data);
        this.getproductdetail(this.PreOrders.productId);

      },
      (error) => {
        Swal.fire('error', 'Internal server error', 'error')
      }
    );
  }
  public getproductdetail(id) {
    this.proservice.getProduct(this.PreOrders.productId).subscribe(
      (data: any) => {
        this.Product = data;
        console.log(data);

      },
      (error) => {
        Swal.fire('error', 'Internal server error', 'error')
      }
    );
  }

  public sendEsewaTransaction() {

    this.PreOrders.status = 'conformed'
    this.ordservice.updatePreOrders(this.PreOrders).subscribe(
      (data: any) => {
        Swal.fire('success', 'payment done', 'success')
        this.router.navigate(['/user/myorder'])

      },
      (error) => {
        Swal.fire('error', 'Internal server error', 'error')
      }
    );

  }

}
