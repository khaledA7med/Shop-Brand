import { Injectable } from "@angular/core";
import {
  NgbDateParserFormatter,
  NgbDateStruct,
} from "@ng-bootstrap/ng-bootstrap";

@Injectable({
  providedIn: "root",
})
export class CustomDateParserService extends NgbDateParserFormatter {
  parse(value: string): NgbDateStruct | null {
    if (value) {
      const parts = value.split(", ");
      if (parts.length === 3) {
        const [day, month, year] = parts;
        const monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];

        const parsedDay = parseInt(day);
        const parsedMonth = monthNames.indexOf(month);
        const parsedYear = parseInt(year);

        if (!isNaN(parsedDay) && parsedMonth !== -1 && !isNaN(parsedYear))
          return { day: parsedDay, month: parsedMonth + 1, year: parsedYear };
      }
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    if (date) {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const day = date.day || 1;
      const month = monthNames[date.month - 1] || "January";
      const year = date.year || new Date().getFullYear();
      const dayOfWeek = this.getDayOfWeek(date);
      return `${dayOfWeek}, ${month} ${day}, ${year}`;
    }
    return "";
  }

  private getDayOfWeek(date: NgbDateStruct): string {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dateObj = new Date(date.year, date.month - 1, date.day);
    return days[dateObj.getDay()];
  }
}
