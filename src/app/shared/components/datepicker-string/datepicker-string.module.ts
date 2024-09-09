import { NgModule } from "@angular/core";
import { CommonModule, JsonPipe } from "@angular/common";
import { DatepickerStringComponent } from "./datepicker-string.component";
import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [DatepickerStringComponent],
  imports: [CommonModule, NgbDatepickerModule, FormsModule, JsonPipe],
  exports: [DatepickerStringComponent],
})
export class DatepickerStringModule {}
