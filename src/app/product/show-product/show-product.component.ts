import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductServiceService } from '../productService/product-service.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  id;
  name;
  product = [
    {
      id: '1',
      name: 'karela',
      color: '',
      price: '250',
      description: 'local brand',
      brand: 'local',
      image: '',
      stock: '50',
      discount: '5',
      weight: '1',
      unit: 'KG',
      category: {
        id: '',
      }
    },
    {
      id: '1',
      name: 'karela',
      color: '',
      price: '250',
      description: 'local brand',
      brand: 'local',
      image: '',
      stock: '50',
      discount: '5',
      weight: '1',
      unit: 'KG',
      category: {
        id: '',
      }
    },
    {
      id: '1',
      name: 'karela',
      color: '',
      price: '250',
      description: 'local brand',
      brand: 'local',
      image: '',
      stock: '50',
      discount: '5',
      weight: '1',
      unit: 'KG',
      category: {
        id: '',
      }
    },
    {
      id: '1',
      name: 'karela',
      color: '',
      price: '250',
      description: 'local brand',
      brand: 'local',
      image: '',
      stock: '50',
      discount: '5',
      weight: '1',
      unit: 'KG',
      category: {
        id: '',
      }
    },
    {
      id: '1',
      name: 'karela',
      color: '',
      price: '250',
      description: 'local brand',
      brand: 'local',
      image: '',
      stock: '50',
      discount: '5',
      weight: '1',
      unit: 'KG',
      specification: 'all good',
      delivery: 'within 24hours',
      sewa: '24 hour /7 days',
      rating: '5*',
      category: {
        id: '',
      }
    },



  ];
  constructor(private route: ActivatedRoute, private service: ProductServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.name = this.route.snapshot.params.name
    this.service.getProductByCategory(this.id).subscribe(
      (data: any) => {
        this.product = data
      },
      (error) => {
        Swal.fire("error", "Internal server error", "error")
      }
    );
  }
  public delete(pid) {

    this.service.deleteProduct(pid).subscribe(
      (data) => {
        Swal.fire("success", "product deleted", "success")
        this.getData();
      },
      (error) => {
        Swal.fire("error", "Internal server error", "error")
      }
    );
  }
  public getData() {
    this.service.getProductByCategory(this.id).subscribe(
      (data: any) => {
        this.product = data
      },
      (error) => {
        Swal.fire("error", "Internal server error", "error")
      }
    );
  }

}
