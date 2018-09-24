import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"]
})
export class PaymentComponent implements OnInit {
  orderArray: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.orderArray = this.dataService.currentData;

    //without async
    /*
    this.dataService.currentData.subscribe(res => this.orderArray = res);
    */
  }

  ngOnDestroy() {}
}
