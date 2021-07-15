import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CategoryServiceService } from '../categoryService/category-service.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  categories = []
  constructor(private service: CategoryServiceService) { }

  ngOnInit(): void {
    this.getAllCat();
  }
  public delete(id) {
    this.service.deleteCategories(id).subscribe(
      (data) => {
        Swal.fire("success", "category deleted", "success")
        this.getAllCat();
      },
      (error) => {
        Swal.fire("error", "Internal server error", "error")
      }
    );

  }

  public getAllCat() {
    this.service.getAllCategories().subscribe(
      (data: any) => {
        this.categories = data;
      },
      (error) => {
        Swal.fire("error", "Internal server error", "error")
      }
    );
  }
}
