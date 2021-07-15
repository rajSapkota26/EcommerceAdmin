import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from 'src/app/commonComponent/image.service';
import Swal from 'sweetalert2';
import { CategoryServiceService } from '../categoryService/category-service.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  id;
  categories;
  selectedFile;
  uploadImage;
  imag = {
    name: '',
  }

  constructor(private route: ActivatedRoute,
    private Service: CategoryServiceService,
    private location: Location,
    private imageService: ImageService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.Service.getCategories(this.id).subscribe(
      (data: any) => {
        this.categories = data
        console.log(this.categories)
      },
      (error) => { Swal.fire("error", "Internal server error", "error") }
    );
  }
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
  public updateCategory() {
    if (!this.selectedFile) {
      this.uploadData(this.categories);
    }
    if (this.selectedFile) {
      this.uploadImage = new FormData();
      this.uploadImage.append('file', this.selectedFile);
      this.imageService.uploadImage(this.uploadImage).subscribe(
        (data: any) => {
          this.imag = data
          this.categories.image = this.imag.name
          console.log(data)

          this.uploadData(this.categories);
        }
      );
    }



  }

  public uploadData(categori) {
    this.Service.updateCategories(categori).subscribe(
      (data: any) => {
        Swal.fire("success", "category Updated successfully", "success")
        this.location.back();
      },
      (error) => { Swal.fire("error", "Internal server error", "error") }
    );
  }
}
