import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./cart/cart.component"
import { PaymentComponent } from "./payment/payment.component";
import { NextStepGuard } from "./guards/next-step.guard";

const routes: Routes = [
    {
        path: "",
        redirectTo: '/cart',
        pathMatch: "full",
    },
    {
        path: "cart",
        pathMatch: "full",
        component: CartComponent,

    },
    {
        path: "payment",
        pathMatch: "full",
        component: PaymentComponent,
        canActivate: [NextStepGuard],

    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [NextStepGuard],

})
export class AppRoutingModule { }
