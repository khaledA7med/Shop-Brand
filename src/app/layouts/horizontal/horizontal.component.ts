import {
  animate,
  AnimationEvent,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-horizontal",
  templateUrl: "./horizontal.component.html",
  styleUrls: ["./horizontal.component.scss"],
  animations: [
    trigger("rightSecState", [
      state(
        "out",
        style({
          transform: "translateX(100%)", // Off-screen to the right
        })
      ),
      // End state (in view, fully visible)
      state(
        "in",
        style({
          transform: "translateX(0)", // In place, on-screen
        })
      ),
      // Transition from out to in (with easing for smooth motion)
      transition("out => in", animate("3s ease-in-out")),
    ]),
    trigger("leftSecState", [
      state(
        "out",
        style({
          transform: "translateX(100%)", // Off-screen to the right
        })
      ),
      // End state (in view, fully visible)
      state(
        "in",
        style({
          transform: "translateX(0)", // In place, on-screen
        })
      ),
      // Transition from out to in (with easing for smooth motion)
      transition("out => in", animate("3s ease-in-out")),
    ]),
  ],
})

/**
 * Horizontal Component
 */
export class HorizontalComponent implements OnInit {
  startRouting: boolean = false;
  orientation: string = "out";

  constructor(private router: Router) {}

  ngOnInit(): void {
    document.documentElement.setAttribute("data-layout", "horizontal");
    document.documentElement.setAttribute("data-topbar", "light");
    document.documentElement.setAttribute("data-sidebar", "dark");
    document.documentElement.setAttribute("data-sidebar-size", "lg");
    document.documentElement.setAttribute("data-layout-style", "default");
    document.documentElement.setAttribute("data-layout-mode", "light");
    document.documentElement.setAttribute("data-layout-width", "fluid");
    document.documentElement.setAttribute("data-layout-position", "fixed");
    this.updateRoutingState(this.router.url);

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd) // We only care about the end of navigation
      )
      .subscribe((event: any) => {
        // If the user is on the homepage or any specific route (e.g., '/'), show the hero section
        if (event.url !== "/") {
          this.startRouting = true;
        } else {
          this.startRouting = false;
        }
      });
    this.changeOrientation("out");
  }

  changeOrientation(newOrientation: string) {
    this.orientation = newOrientation;
  }

  onAnimationDone(event: AnimationEvent) {
    if (event.toState === "out") {
      this.changeOrientation("in");
    }
  }

  updateRoutingState(url: string) {
    // If the user is on the homepage or any specific route (e.g., '/'), show the hero section
    if (url !== "/") {
      this.startRouting = true;
    } else {
      this.startRouting = false;
    }
  }
  /**
   * on settings button clicked from topbar
   */
  onSettingsButtonClicked() {
    document.body.classList.toggle("right-bar-enabled");
    const rightBar = document.getElementById("theme-settings-offcanvas");
    if (rightBar != null) {
      rightBar.classList.toggle("show");
      rightBar.setAttribute("style", "visibility: visible;");
    }
  }

  /**
   * On mobile toggle button clicked
   */
  onToggleMobileMenu() {
    if (document.documentElement.clientWidth <= 1024) {
      document.body.classList.toggle("menu");
    }
  }
}
