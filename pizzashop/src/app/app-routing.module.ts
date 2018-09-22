import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./cart/cart.component"
import { PaymentComponent } from "./payment/payment.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: '/cart',
        pathMatch: "full",
        component: "CartComponent"
    },
    {
        path: "cart",
        pathMatch: "full",
        component: CartComponent,
    },
    {
        path: "payment",
        pathMatch: "full",
        component: PaymentComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [],

})
export class AppRoutingModule { }
