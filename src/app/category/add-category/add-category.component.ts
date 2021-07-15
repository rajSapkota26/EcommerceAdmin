
import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/commonComponent/image.service';
import Swal from 'sweetalert2';
import { CategoryServiceService } from '../categoryService/category-service.service';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  selectedFile: File;
  uploadImage;
  categories =
    {
      name: '',
      description: '',
      image: '',
      tax: '',
      deliveryCharge: '',
    };
  imag = {
    name: '',
  }
  constructor(private imageService: ImageService, private service: CategoryServiceService) { }

  ngOnInit(): void {
  }
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
  public addCategory() {
    this.uploadImage = new FormData();
    this.uploadImage.append('file', this.selectedFile);


    this.imageService.uploadImage(this.uploadImage).subscribe(
      (data: any) => {
        this.imag = data
        this.categories.image = this.imag.name
        console.log(data)

        this.uploadCat(this.categories);
      }
    );
  }
  public uploadCat(categories1) {
    this.service.addCategories(categories1).subscribe(
      (data: any) => {
        Swal.fire("success", "category added successfully", "success")
      },
      (error) => {
        Swal.fire("error", "Internal server error", "error")
      }

    );
  }

}
