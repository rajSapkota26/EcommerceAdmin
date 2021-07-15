import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MycartService } from '../service/mycart.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
  totalPrice;
  mycart = [{
    id: '',
    userId: '',
    productName: '',
    productId: '',
    productPrice: '',
    quantities: '',
    productImage: '',
    productDiscount: '',
  }]
  constructor(private service: MycartService) { }

  ngOnInit(): void {
    this.getAllCart();
  }
  public removeCart(id) {
    this.service.deleteCart(id).subscribe(
      (data) => {
        Swal.fire('success', 'removed', 'success')
        this.getAllCart();
      },
      (error) => {
        Swal.fire('error', 'Internal server error', 'error')
      }
    );
  }
  public getAllCart() {
    this.service.getAllCartByUserId("123").subscribe(
      (data: any) => {
        this.mycart = data
        console.log(data);

      },
      (error) => {
        Swal.fire('error', 'Internal server error', 'error')
      }
    );
  }

}
