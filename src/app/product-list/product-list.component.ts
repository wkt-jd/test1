import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [...products];

  share() {
    window.alert('U bought the thing');
  }

  onNotify() {
    window.alert('we finna tell u if your product goes on sale');
  }
}
