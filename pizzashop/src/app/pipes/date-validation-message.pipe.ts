import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "dateValidationMessage" })
export class DateValidationMessagePipe implements PipeTransform {
  transform(value: string): string {
    let renamedValue: string;
    switch (value) {
      case "invalid-maxdate": {
        renamedValue = "Toto datum není v platném formátu dd.mm.yyyy";
        break;
      }
      case "maxdate-before-today": {
        renamedValue = "Vrátit se v čase zatím neumíme";
        break;
      }
      default: {
        renamedValue = value;
        break;
      }
    }
    return renamedValue;
  }
}
