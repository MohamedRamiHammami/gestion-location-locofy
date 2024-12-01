import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Router } from "@angular/router";
@Component({
  selector: "frame-component",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./FrameComponent.component.html",
  styleUrls: ["./FrameComponent.component.css"],
})
export class FrameComponent {
  @HostBinding("style.display") display = "contents";

  constructor(private router: Router) {}

  onSubMenuItemClick() {
    this.router.navigate(["/sgi-ametek"]);
  }

  onContainerClick() {
    // Please sync "Comptabilite" to the project
  }

  onContainerClick1() {
    // Please sync "Financement" to the project
  }

  onContainerClick2() {
    // Please sync "DSN transaction" to the project
  }

  onContainerClick3() {
    // Please sync "Location" to the project
  }
}
