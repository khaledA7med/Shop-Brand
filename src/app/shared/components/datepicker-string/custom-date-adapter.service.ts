import { Injectable } from "@angular/core";
import { NgbDateAdapter, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

@Injectable()
export class CustomDateAdapter extends NgbDateAdapter<string> {
  readonly DELIMITER = "-";
  fromModel(value: string | Date | null): NgbDateStruct | null {
    if (value) {
      if (value instanceof Date) {
        value =
          value.getFullYear() +
          this.DELIMITER +
          (+value.getMonth() + 1) +
          this.DELIMITER +
          value.getDate();
      }
      const date = (value as string).split(this.DELIMITER);
      return {
        day: parseInt(date[2], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[0], 10),
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date
      ? date.year + this.DELIMITER + date.month + this.DELIMITER + date.day
      : null;
  }
}
