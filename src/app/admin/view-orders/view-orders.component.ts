import { Component, OnInit } from '@angular/core';
import { PreorderService } from 'src/app/user/service/preorder.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  preorders = [];
  constructor(private service: PreorderService) { }

  ngOnInit(): void {
    this.service.getAllPreOrders().subscribe(
      (data: any) => {
        this.preorders = data
      },
      (error) => {
        Swal.fire('error', 'internal server error', 'error')
      }
    );
  }
  public updateOrder(order) {

    Swal.fire({
      icon: 'info',
      title: "Are you Sure !!",
      confirmButtonText: 'Update',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        order.status = 'conform';
        this.service.updatePreOrders(order).subscribe(
          (data) => {
            Swal.fire("success", "order updated successfully", "success");

          },
          (error) => {
            Swal.fire("error", "Internal server error", "error");
          }
        );
      }
    });
  }

}
