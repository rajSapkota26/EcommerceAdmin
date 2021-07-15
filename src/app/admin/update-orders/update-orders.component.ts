import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreorderService } from 'src/app/user/service/preorder.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-orders',
  templateUrl: './update-orders.component.html',
  styleUrls: ['./update-orders.component.css']
})
export class UpdateOrdersComponent implements OnInit {
  id;
  PreOrders = {
    id: '',
    status: '',
    date: '',
    productName: '',
    productId: '',
    price: '',
    quantities: '',
    productImage: '',
    userId: '',
    paymentAmount: '',
    paymentDate: '',
    paymentProductId: '',
    paymentStatus: '',
    paymentSuccessMessage: '',

  }
  constructor(
    private route: ActivatedRoute,
    private service: PreorderService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.service.getPreOrders(this.id).subscribe(
      (data: any) => {
        this.PreOrders = data;
      },
      (error) => {
        Swal.fire('error', 'internal server error', 'error')
      }
    );
  }

}
