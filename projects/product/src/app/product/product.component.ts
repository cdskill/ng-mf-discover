import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  display: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {this.display = !this.display}
}
