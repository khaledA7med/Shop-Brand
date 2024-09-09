import { ApplicationRef, Injectable, isDevMode } from "@angular/core";
import { SwUpdate, VersionEvent } from "@angular/service-worker";
import { Subscription, concat, fromEvent, interval, merge, of } from "rxjs";
import { first, map } from "rxjs/operators";
import { MessagesService } from "src/app/shared/services/messages.service";
import { ToastService } from "src/app/shared/services/toast.service";
import { SweetAlertResult } from "sweetalert2";

@Injectable({
  providedIn: "root",
})
export class StabilityService {
  networkStatus$: Subscription = Subscription.EMPTY;
  networkStatus: boolean = false;
  constructor(
    private toastService: ToastService,
    private appRef: ApplicationRef,
    private update: SwUpdate,
    private message: MessagesService
  ) {}

  // To check internet connection stability
  checkNetworkStatus() {
    this.networkStatus = navigator.onLine;
    this.networkStatus$ = merge(
      of(null),
      fromEvent(window, "online"),
      fromEvent(window, "offline")
    )
      .pipe(map(() => navigator.onLine))
      .subscribe((status) => {
        let network: string = "Network";
        this.toastService.toasts = this.toastService.toasts.filter(
          (toast) => toast.header !== network
        );
        if (status && !this.networkStatus)
          this.toastService.show(network, "Your are connected", {
            classname: "bg-success text-light",
            delay: 5000,
            icon: "ri-wifi-line",
          });
        else if (!status)
          this.toastService.show(network, "Check your internet connection", {
            classname: "bg-danger text-light",
            icon: "ri-wifi-off-line",
          });
        this.networkStatus = status;
      });
  }

  // Version Detection to append to application
  versionDetection() {
    if (!isDevMode()) {
      const appIsStable$ = this.appRef.isStable.pipe(
        first((isStable) => isStable === true)
      );
      const everyThirdSec$ = interval(300000);
      const everyThirdOnceAppIsStable = concat(appIsStable$, everyThirdSec$);
      everyThirdOnceAppIsStable.subscribe(async () => {
        try {
          const updateFound = await this.update.checkForUpdate();
          if (updateFound) {
            this.message
            .confirm(
              "Sure!",
              "A new version was detected. Would you like to apply ?!",
              "primary",
              "question"
            )
              .then((result: SweetAlertResult) => {
                if (result.isConfirmed) window.location.reload();
              });
          }
        } catch (err) {
          console.error("Faild", err);
        }
      });
    }
  }
}
