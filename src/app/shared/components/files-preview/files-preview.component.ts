import { Component, Input, OnDestroy } from "@angular/core";
import { IDocumentList } from "../../app/models/App/IDocument";
import AppUtils from "../../app/util";
import { MasterMethodsService } from "../../services/master-methods.service";
import { Subscription } from "rxjs";
import { MessagesService } from "../../services/messages.service";
import { CommonModule, NgFor, NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpResponse } from "@angular/common/http";

@Component({
  selector: "app-files-preview",
  templateUrl: "./files-preview.component.html",
  styleUrls: ["./files-preview.component.scss"],
  imports: [CommonModule, NgIf, NgFor, FormsModule],
  standalone: true,
})
export class FilesPreviewComponent implements OnDestroy {
  @Input() files: IDocumentList[] = [];
  subscribes: Subscription[] = [];

  constructor(
    private message: MessagesService,
    public util: AppUtils,
    private masterMethod: MasterMethodsService
  ) {}

  downloadFile(path: string) {
    let sub = this.masterMethod.downloadFile(path).subscribe({
      next: (res: HttpResponse<any>) => {
        const fileName = res.headers
          .get("content-disposition")
          ?.split(";")[1]
          .split("=")[1]
          .replace(/"/g, "")!;
        const downloadedFile = new Blob([res.body as BlobPart]);
        const a = document.createElement("a");
        a.setAttribute("style", "display:none;");
        document.body.appendChild(a);
        a.download = fileName;
        a.href = URL.createObjectURL(downloadedFile);
        a.target = "_blank";
        a.click();
        document.body.removeChild(a);
      },
      error: (error) => {
        this.message.popup("Oops!", error.message, "error");
      },
    });
    this.subscribes.push(sub);
  }

  fileIcon(type: string): { cls: string; ico: string; file: string } {
    let cls = "",
      ico = "",
      file = "";
    switch (type) {
      case "msword":
      case "doc":
      case "docx":
      case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        cls = "bg-soft-secondary text-secondary";
        ico = "ri-file-word-2-fill";
        file = "docx";
        break;
      case "vnd.ms-powerpoint":
      case "ppt":
      case "pptx":
      case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
        cls = "bg-soft-danger text-danger";
        ico = "ri-file-ppt-fill";
        file = "pptx";
        break;
      case "text":
      case "txt":
        cls = "bg-soft-dark text-muted";
        ico = "ri-file-text-fill";
        file = "txt";
        break;
      case "pdf":
        cls = "bg-soft-danger text-danger";
        ico = "ri-file-pdf-fill";
        file = "pdf";
        break;
      case "zip":
        cls = "bg-soft-info text-info";
        ico = "ri-file-zip-fill";
        file = "zip";
        break;
      case "vnd.ms-excel":
      case "xls":
      case "xlsx":
      case "csv":
      case "text/csv":
      case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
        cls = "bg-soft-success text-success";
        ico = "ri-file-excel-2-fill";
        file = "xlsx";
        break;
      default:
        cls = "bg-soft-success text-success";
        ico = "ri-error-warning-fill";
        break;
    }
    return { cls: cls, ico: ico, file };
  }

  errorImages(event: Event) {
    let elem = event.target as HTMLImageElement;
    elem.src = "./../../../../../assets/images/placeholder.jpg";
  }

  ngOnDestroy(): void {
    this.subscribes && this.subscribes.forEach((s) => s.unsubscribe());
  }
}
// util.formatBytes(+item.size!)
