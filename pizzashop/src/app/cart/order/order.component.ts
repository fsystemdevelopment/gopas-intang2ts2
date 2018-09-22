import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild
} from "@angular/core";
import { OrderForm } from "./order-form.interface";

@Component({
  selector: "order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"]
})
export class OrderComponent implements OnInit {
  @ViewChild("f")
  f;

  orderForm: OrderForm = {
    meal: "",
    amount: null,
    pickupTime: ""
  };

  //emit data from component outside to parent or to sibling
  @Output()
  onOrder: EventEmitter<OrderForm> = new EventEmitter<OrderForm>();

  groceries: Array<string>;

  constructor() {}

  ngOnInit() {
    this.groceries = [];
    this.addItem("Pizza");
    this.addItem("Kebab");
  }

  addItem(item) {
    this.groceries = [...this.groceries, item];
  }

  removeItem(item) {
    this.groceries = this.groceries.filter(function(grocery) {
      return item !== grocery;
    });
  }

  private _reset() {
    this.f.resetForm();
  }

  onSubmit({ value, valid }: { value: OrderForm; valid: boolean }): void {
    if (valid) {
      console.log(value);
      this.onOrder.emit(value);
      this._reset();
    } else {
      console.log("Chyba");
    }
  }
}
