import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from "@angular/core";
import {
  NgbCalendar,
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbDateStruct,
} from "@ng-bootstrap/ng-bootstrap";
import { CustomDateAdapter } from "./custom-date-adapter.service";
import { CustomDateParserService } from "./custom-date-parser.service";

@Component({
  selector: "app-datepicker-string",
  template: `
    <div class="input-group input-group-sm">
      <input
        type="text"
        ngbDatepicker
        #d="ngbDatepicker"
        container="body"
        [(ngModel)]="date"
        #dates="ngModel"
        [disabled]="disabled"
        [required]="required"
        placeholder="yyyy-mm-dd"
        class="form-control"
        [minDate]="minDateStruct"
        [maxDate]="maxDateStruct"
        [footerTemplate]="footerTemplate"
        [ngClass]="{
          'is-invalid':
            required &&
            ((dates.touched && dates.invalid) || (submitted && dates.invalid))
        }"
        (dateSelect)="onDateSelect($event)"
        readonly
        (click)="!readonly && d.toggle()"
      />
      <button
        class="btn btn-outline-secondary ri-calendar-2-line dateTogglerBtn"
        type="button"
        (click)="!readonly && d.toggle()"
        [disabled]="disabled"
      ></button>
      <div
        class="invalid-feedback fw-bold"
        *ngIf="
          required &&
          ((dates.touched && dates.invalid) || (submitted && dates.invalid))
        "
      >
        Required
      </div>
    </div>
    <ng-template #footerTemplate>
      <hr class="my-0" />
      <button
        class="btn btn-outline-primary btn-sm m-2 float-start"
        [disabled]="disabled"
        (click)="date = today(); d.close()"
      >
        Today
      </button>
      <button
        class="btn btn-ghost-secondary btn-sm m-2 float-end"
        (click)="d.close()"
      >
        Close
      </button>
    </ng-template>
  `,
  providers: [
    { provide: NgbDateAdapter, useClass: CustomDateAdapter },
    {
      provide: NgbDateParserFormatter,
      useClass: CustomDateParserService,
    },
  ],
})
export class DatepickerStringComponent implements OnChanges {
  date!: any;
  @Input() model!: any;
  @Input() readonly: boolean = false;
  @Input() submitted: boolean = false;
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Output() dateChange: EventEmitter<any> = new EventEmitter();

  @Input() minDate: Date = new Date();
  @Input() maxDate: Date = new Date();

  minDateStruct: NgbDateStruct = { year: 2000, month: 1, day: 1 };
  maxDateStruct: NgbDateStruct = { year: 2050, month: 12, day: 31 };

  constructor(
    private calendar: NgbCalendar,
    private dateAdapter: NgbDateAdapter<string>
  ) {
    this.date = this.dateAdapter.toModel(this.calendar.getToday());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.model) this.date = this.model;
    else this.date = this.dateAdapter.toModel(this.calendar.getToday());
    if (changes["minDate"]?.currentValue)
      this.minDateStruct = this.minMaxDate(changes["minDate"].currentValue);
    if (changes["maxDate"]?.currentValue)
      this.maxDateStruct = this.minMaxDate(changes["maxDate"].currentValue);
  }

  today() {
    this.onDateSelect(this.calendar.getToday());
    return this.dateAdapter.toModel(this.calendar.getToday());
  }

  minMaxDate(date: Date): NgbDateStruct {
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
    };
  }

  onDateSelect(e: any) {
    // let hijri = this.changeDate.fromGregorian(
    //   new Date(`${e.year}-${e.month}-${e.day}`)
    // );
    let obj = {
      gon: e,
      // hijri,
    };

    this.dateChange.emit(obj);
  }
}
