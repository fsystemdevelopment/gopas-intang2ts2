import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  declarations: [PaymentComponent],
  exports: [PaymentComponent]
})
export class PaymentModule { }
