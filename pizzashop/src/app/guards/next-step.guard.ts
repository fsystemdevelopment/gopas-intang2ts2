import { Injectable } from "@angular/core";
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from "@angular/router";
import { Observable } from "rxjs";
import { NextStepService } from "../services/next-step.service";

@Injectable()
export class NextStepGuard implements CanActivate {
    constructor(private router: Router, private nextStep: NextStepService) { }

    canActivate() {
        if (this.nextStep.isCurrentStateValid()) {
            console.log('guard is valid');
            return true;
        } else {
            console.log('guard is invalid');

            this.router.navigate(["/"]);
            return false;
        }
    }
}
