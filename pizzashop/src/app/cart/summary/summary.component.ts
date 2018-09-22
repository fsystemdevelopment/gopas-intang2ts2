import { Component, OnInit, Input, OnChanges } from "@angular/core";
import * as _ from "lodash";
import { Router } from "@angular/router";

@Component({
  selector: "summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.css"]
})
export class SummaryComponent implements OnInit, OnChanges {
  orderArray: any[];

  @Input("incomingOrder")
  orderData: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.orderArray = [];
  }

  private findOrderByMeal(item) {
    return _.find(this.orderArray, order => {
      if (order.meal == item) {
        return order;
      }
    });
  }

  private removeMealFromOrders(found) {
    return _.filter(this.orderArray, order => {
      if (order.meal != found.meal) {
        return order;
      }
    });
  }

  removeItem(item) {
    let found = this.findOrderByMeal(item);
    if (found.amount == 1) {
      this.orderArray = this.removeMealFromOrders(found);
    } else {
      found.amount = found.amount - 1;
    }
  }

  saveOrder(event) {
    console.log(event);
    this.router.navigate(['/payment'])
  }

  ngOnChanges(changes) {
    //see event emitted data of all @Input
    console.log("changes");

    if (!!changes.orderData.currentValue) {
      this.orderArray.push(changes.orderData.currentValue);
    }
  }
}
