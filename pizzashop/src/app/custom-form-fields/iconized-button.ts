import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef
} from "@angular/core";
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  FormControl
} from "@angular/forms";

export function validateIconizedButton(control: FormControl) {
  let val = control.value;
  if (val) {
    return null;
  } else {
    return {
      errorObj: {
        val: { isNotClicked: false }
      }
    };
  }
}

export const noop = () => {};

@Component({
  selector: "iconized-button",
  template: `
        <button
        class="clicable-image-btn" 
        (click)="onClick('pizza', $event)"
        (blur)="onTouched()"
        [ngClass]="{'active': isActivePizza === true}"
        ><img src='../../../assets/images/pizza_item.svg' alt="chorvatsko" width="46" height="46"><div class="icon-description">
        Pizza</div></button>

        <button
        class="clicable-image-btn" 
        (click)="onClick('burger', $event)"
        (blur)="onTouched()"
        [ngClass]="{'active': isActiveBurger === true}"
        ><img src='../../../assets/images/burger_item.svg' alt="chorvatsko" width="46" height="46"><div class="icon-description">
        Burger</div></button>
        `,
  styles: [
    `
      button {
        outline: none !important;
        background-color: #fff;
      }

      .icon-description {
        font-weight: 400;
        font-family: "Roboto", sans-serif;
        font-size: 14px;
      }

      .clicable-image-btn {
        padding: 9px 40px;
        border: 4px solid #f5f5f5;
        margin: 4px 2px;
        cursor: pointer;
      }

      .clicable-image-btn.active {
        border: 4px solid #65b046;
      }

      .clicable-image-btn:hover {
        box-shadow: 3px 5px 5px #cccccc;
      }

      .clicable-image-btn.active:hover {
        box-shadow: 3px 5px 5px #fff;
      }

      @media only screen and (max-width: 360px) {
        .clicable-image-btn {
          margin: 4px 4px;
          width: 100%;
        }
      }
    `
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IconizedButtonComponent),
      multi: true
    },
    { provide: NG_VALIDATORS, useValue: validateIconizedButton, multi: true }
  ]
})
export class IconizedButtonComponent implements ControlValueAccessor {
  isActivePizza: boolean;
  isActiveBurger: boolean;

  private _onTouchedCallback: (_: any) => void = noop;

  private _onChangeCallback: (_: any) => void = noop;

  propagateChange = (_: any) => {};

  validateFn: any = () => {};

  _clickedValue: string;

  writeValue(value: any) {
    this.initChecking(value);
  }

  onTouched() {
    this._onTouchedCallback(null);
  }

  registerOnTouched(fn: any) {
    this._onTouchedCallback = fn;
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  initChecking(initValue) {
    switch (initValue) {
      case "pizza":
        this.isActivePizza = true;
        this.isActiveBurger = false;
        break;
      case "burger":
        this.isActivePizza = false;
        this.isActiveBurger = true;
        break;
      default:
        this.isActiveBurger = false;
        this.isActivePizza = false;
    }
  }

  onClick(value, event) {
    event.preventDefault();
    this._clickedValue = value;
    switch (this._clickedValue) {
      case "pizza":
        this.isActivePizza = true;
        this.isActiveBurger = false;
        break;
      case "burger":
        this.isActivePizza = false;
        this.isActiveBurger = true;
        break;
    }
    this.propagateChange(this._clickedValue);
  }
}
