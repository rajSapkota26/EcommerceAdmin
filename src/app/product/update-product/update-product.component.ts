import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from 'src/app/commonComponent/image.service';
import Swal from 'sweetalert2';
import { ProductServiceService } from '../productService/product-service.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id;
  public Editor = ClassicEditor;
  product;
  selectedFile;
  uploadImage;
  imag = {
    name: '',
  }
  constructor(
    private route: ActivatedRoute,
    private Service: ProductServiceService,
    private location: Location,
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.Service.getProduct(this.id).subscribe(
      (data: any) => {
        this.product = data
      },
      (error) => { Swal.fire("error", "Internal server error", "error") }
    );
  }
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
  public updateProduct() {
    if (!this.selectedFile) {
      this.uploadData(this.product);
    }
    if (this.selectedFile) {
      this.uploadImage = new FormData();
      this.uploadImage.append('file', this.selectedFile);
      this.imageService.uploadImage(this.uploadImage).subscribe(
        (data: any) => {
          this.imag = data
          this.product.image = this.imag.name
          this.uploadData(this.product);
        }
      );
    }
  }

  public uploadData(pro) {
    this.Service.updateProduct(pro).subscribe(
      (data: any) => {
        Swal.fire("success", "product Updated successfully", "success")
        this.location.back();
      },
      (error) => { Swal.fire("error", "Internal server error", "error") }
    );
  }

}
