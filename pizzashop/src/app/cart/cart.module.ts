import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { OrderComponent } from './order/order.component';
import { SummaryComponent } from './summary/summary.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { IconizedButtonComponent } from '../custom-form-fields/iconized-button';
import { DateValidationDirective } from '../directives/date-validation.directive';
import { DateValidationMessagePipe } from '../pipes/date-validation-message.pipe';
import { DateDotDirective } from '../directives/date-dot.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    FlexLayoutModule,
    
  ],
  declarations: [CartComponent, OrderComponent, SummaryComponent, IconizedButtonComponent, DateValidationDirective, DateValidationMessagePipe, DateDotDirective],
  exports: [CartComponent]
})
export class CartModule {


  
 }
