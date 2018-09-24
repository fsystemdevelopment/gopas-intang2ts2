import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { SharedMaterialModule } from "./shared-material/shared-material.module";
import { CartModule } from "./cart/cart.module";
import { PaymentModule } from "./payment/payment.module";
import { AppRoutingModule } from "./app-routing.module";

//Services
import { DataService } from "./services/data.service";
import { NextStepService } from "./services/next-step.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    CartModule,
    PaymentModule,
    AppRoutingModule
  ],
  providers: [DataService, NextStepService],
  bootstrap: [AppComponent]
})
export class AppModule {}
