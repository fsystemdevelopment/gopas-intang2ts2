import { Component, OnInit } from "@angular/core";

@Component({
  selector: "cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  incomingOrder: any;

  constructor() {}

  ngOnInit() {}

  orderChange(event) {
    this.incomingOrder = event;
  }
}
