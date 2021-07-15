import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/product/productService/product-service.service';
import Swal from 'sweetalert2';
import { MycartService } from '../service/mycart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id;
  product;
  quantities;
  mycart = {
    id: '',
    userId: '',
    productName: '',
    productId: '',
    productPrice: '',
    quantities: '',
    productImage: '',
    productDiscount: '',
  }
  constructor(
    private service: ProductServiceService,
    private route: ActivatedRoute,
    private cartService: MycartService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.route.params.subscribe(
      (params) => {
        this.id = params.id
        this.getProduct(this.id)

      }
    );
    // this.cartService.getAllCartByUserId("123").subscribe(
    //   (data: any) => {
    //     console.log(data);

    //   },
    //   (error) => {
    //     Swal.fire('error', 'Internal server error', 'error')
    //   }
    // );
  }

  public getProduct(id) {
    this.service.getProduct(id).subscribe(
      (data: any) => {
        this.product = data
        console.log(this.product);
      },
      (error) => {
        Swal.fire('error', 'Internal server error', 'error')
      }
    );
  }
  public AddtoCart(p: any) {

    this.mycart.productName = p.name;
    this.mycart.productId = p.id;
    this.mycart.productPrice = p.price;
    this.mycart.quantities = this.quantities;
    this.mycart.productImage = p.image;
    this.mycart.productDiscount = p.discount;
    this.mycart.userId = '123';

    this.add(this.mycart);
    console.log(this.mycart);

  }

  public add(cart) {
    this.cartService.saveCart(cart).subscribe(
      (data) => {
        Swal.fire('success', 'cart added', 'success')
      },
      (error) => {
        Swal.fire('error', 'Internal server error', 'error')
      }
    );
  }

}
