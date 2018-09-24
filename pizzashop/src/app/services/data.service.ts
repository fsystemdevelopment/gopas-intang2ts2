import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private dataSource = new BehaviorSubject("");
  currentData = this.dataSource.asObservable();

  constructor() {}

  changeData(currentData: any): void {
    this.dataSource.next(currentData);
  }
}
