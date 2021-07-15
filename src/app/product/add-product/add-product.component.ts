import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from 'src/app/commonComponent/image.service';
import { ProductServiceService } from '../productService/product-service.service';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  public Editor = ClassicEditor;
  id;
  name;
  selectedFile;
  uploadImage;
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
    specification: '',
    delivery: '',
    sewa: '',
    rating: '5*',
    category: {
      id: '',
    }
  };
  imag = {
    name: '',
  }
  constructor(
    private imageService: ImageService,
    private service: ProductServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.name = this.route.snapshot.params.name
    this.product.category.id = this.id
  }
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
  public addProduct() {
    this.uploadImage = new FormData();
    this.uploadImage.append('file', this.selectedFile);


    this.imageService.uploadImage(this.uploadImage).subscribe(
      (data: any) => {
        this.imag = data
        this.product.image = this.imag.name
        console.log(data)

        this.uploadProduct(this.product);
      },
      (error) => {
        Swal.fire("error", "Internal server error", "error")
      }
    );
  }
  public uploadProduct(pro) {
    this.service.addProduct(pro).subscribe(
      (data: any) => {
        Swal.fire("success", "product added successfully", "success")
      },
      (error) => {
        Swal.fire("error", "Internal server error", "error")
      }
    );
  }

}
