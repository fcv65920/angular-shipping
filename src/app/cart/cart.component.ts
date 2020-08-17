import { Component, OnInit } from '@angular/core';
import{ CartService } from './cart.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public items;
  public checkoutForm;

  constructor(
    private cartService: CartService,
    private forBuilder: FormBuilder,
  ) { 
      this.checkoutForm = this.forBuilder.group({
        name: '',
        address: ''
      });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData){
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    console.warn('Your order has been submitted',customerData);
  }
}