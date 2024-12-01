import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Appart } from "../Appart/Appart.component";
@Component({
  selector: "bar-items",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [Appart],
  templateUrl: "./BarItems.component.html",
  styleUrls: ["./BarItems.component.css"],
})
export class BarItems {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
