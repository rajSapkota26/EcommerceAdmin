import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/category/categoryService/category-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {
  category;
  constructor(private service: CategoryServiceService) { }

  ngOnInit(): void {
    this.service.getAllCategories().subscribe(
      (data) => {
        this.category = data;
      },
      (error) => {
        Swal.fire('error', 'Intrnalservererror', 'error')
      }
    );
  }

}
