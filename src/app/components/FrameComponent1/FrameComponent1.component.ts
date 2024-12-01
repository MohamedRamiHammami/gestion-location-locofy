import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Router } from "@angular/router";
@Component({
  selector: "frame-component1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./FrameComponent1.component.html",
  styleUrls: ["./FrameComponent1.component.css"],
})
export class FrameComponent1 {
  @HostBinding("style.display") display = "contents";

  constructor(private router: Router) {}

  onActifContainerClick() {
    this.router.navigate(["/"]);
  }

  onFirstRowContainerClick() {
    // Please sync "Comptabilite" to the project
  }

  onContainerClick() {
    // Please sync "Financement" to the project
  }

  onContainerClick1() {
    // Please sync "DSN transaction" to the project
  }
}
