import { Component } from "@angular/core";
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from "@angular/router";
import { reserved } from "./core/models/reservedWord";
import { EventService } from "./core/services/event.service";
import { StabilityService } from "./core/services/stability.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "EaseShop";

  constructor(
    private router: Router,
    private eventService: EventService,
    private app: StabilityService
  ) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart:
          this.eventService.broadcast(reserved.isLoading, true);
          break;

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError:
          this.eventService.broadcast(reserved.isLoading, false);
          break;

        default:
          break;
      }
    });
  }

  ngOnInit(): void {
    this.app.checkNetworkStatus();
    this.app.versionDetection();
  }
}
