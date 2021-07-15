import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/product/productService/product-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-product-list',
  templateUrl: './all-product-list.component.html',
  styleUrls: ['./all-product-list.component.css']
})
export class AllProductListComponent implements OnInit {
  product = [];
  id;
  constructor(private service: ProductServiceService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.route.params.subscribe(
      (params) => {
        this.id = params.id

        if (this.id == 0) {
          this.getAllProduct();
        } else {
          this.getAllProductByCat(this.id)
        }
      }
    );
  }
  public getAllProduct() {
    this.service.getAllProduct().subscribe(
      (data: any) => {
        this.product = data
        console.log(this.product)
      },
      (error) => {
        Swal.fire('error', 'Internal server error', 'error')
      }
    );
  }

  public getAllProductByCat(id) {
    this.service.getProductByCategory(id).subscribe(
      (data: any) => {
        this.product = data
        console.log(this.product)
      },
      (error) => {
        Swal.fire('error', 'Internal server error', 'error')
      }
    );
  }
}
