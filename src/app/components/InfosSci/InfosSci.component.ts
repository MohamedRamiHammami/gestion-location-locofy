import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "infos-sci",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./InfosSci.component.html",
  styleUrls: ["./InfosSci.component.css"],
})
export class InfosSci {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
