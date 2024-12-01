import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "ellipse-component",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./EllipseComponent.component.html",
  styleUrls: ["./EllipseComponent.component.css"],
})
export class EllipseComponent {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
