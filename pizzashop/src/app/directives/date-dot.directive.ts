import { Directive, Input, Output, EventEmitter } from "@angular/core";

@Directive({
  selector: "[datedot]",
  host: {
    "(input)": "onInputChange($event)",
  }
})
export class DateDotDirective {
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();
  value: any;

  onInputChange($event) {
    this.value = $event.target.value;

    if(this.value.length == 2 && this.value[1] != '.'){
      this.value = this.value + '.';
    }

    if((this.value.length == 4 && this.value[2] != '.')&&(this.value.length == 4 && this.value[3] != '.')){
      this.value = this.value + '.';
    }

    if((this.value.length == 5 && this.value[4] != '.')&&(this.value.length == 5 && this.value[3] != '.')){
      this.value = this.value + '.';
    }

    this.ngModelChange.emit(this.value);
  }
}
