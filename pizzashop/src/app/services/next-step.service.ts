import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class NextStepService {
  serviceState: boolean;

  constructor(private router: Router) {}

  getState(state, navigation) {
    this.serviceState = state;
    this.router.navigateByUrl(navigation);
  }

  isCurrentStateValid() {
    if (this.serviceState == true) {
      return true;
    }
    return false;
  }
}
