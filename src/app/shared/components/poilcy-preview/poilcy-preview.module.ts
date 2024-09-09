import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PoilcyPreviewComponent } from "./poilcy-preview.component";
import { SharedModule } from "../../shared.module";
import { AgGridModule } from "ag-grid-angular";
import { DatepickerStringModule } from "../datepicker-string/datepicker-string.module";
import { DropzoneModule } from "../dropzone/dropzone.module";

@NgModule({
  declarations: [PoilcyPreviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    AgGridModule,
    DatepickerStringModule,
    DropzoneModule,
  ],
})
export class PoilcyPreviewModule {}
