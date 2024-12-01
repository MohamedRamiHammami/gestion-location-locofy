import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "fond",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Fond.component.html",
  styleUrls: ["./Fond.component.css"],
})
export class Fond {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
