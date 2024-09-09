import { NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { NgbToastModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastService } from "../../services/toast.service";

@Component({
  selector: "app-toasts-container",
  standalone: true,
  imports: [NgbToastModule, NgFor],
  template: `<ngb-toast
    *ngFor="let toast of toastService.toasts"
    [class]="toast.classname"
    [autohide]="true"
    [delay]="toast.delay || 30000"
    (hidden)="toastService.remove(toast)"
  >
    <ng-template ngbToastHeader>
      <div class="me-auto d-flex justify-content-center align-items-center">
        <i [class]="toast.icon"></i>
        <strong class="mx-1">{{ toast.header }}</strong>
      </div>
    </ng-template>
    {{ toast.message }}
  </ngb-toast>`,
  host: {
    class:
      "toast-container position-fixed bottom-0 start-50 translate-middle-x p-3",
    style: "z-index: 1200",
  },
})
export class ToastsContainerComponent {
  constructor(public toastService: ToastService) {}
}
