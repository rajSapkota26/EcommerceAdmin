import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PreorderService } from '../service/preorder.service';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent implements OnInit {
  preOrders = [];

  constructor(private ordservice: PreorderService) { }

  ngOnInit(): void {
    this.getOrderList();
  }
  public getOrderList() {
    this.ordservice.getPreOrdersByUserId('FqzFgZyMGPTBe07ELY8xtmjRPA53').subscribe(
      (data: any) => {
        this.preOrders = data;
      },
      (error) => {
        Swal.fire('error', 'Internal server error', 'error')
      }
    );
  }

  public deleteOrder(id) {

    Swal.fire({
      icon: 'info',
      title: "Are you Sure !!",
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.ordservice.deletePreOrders(id).subscribe(
          (data) => {
            Swal.fire("success", "order deleted successfully", "success");
            this.getOrderList();
          },
          (error) => {
            Swal.fire("error", "Internal server error", "error");
          }
        );
      }
    });
  }

}
