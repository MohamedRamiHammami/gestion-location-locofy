import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { EllipseComponent } from "../EllipseComponent/EllipseComponent.component";
import { Router } from "@angular/router";
@Component({
  selector: "art-category",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [EllipseComponent],
  templateUrl: "./ArtCategory.component.html",
  styleUrls: ["./ArtCategory.component.css"],
})
export class ArtCategory {
  @HostBinding("style.display") display = "contents";

  constructor(private router: Router) {}

  onBtnClick() {
    this.router.navigate(["/"]);
  }
}
