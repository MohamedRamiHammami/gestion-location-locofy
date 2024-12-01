import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { FrameComponent1 } from "../../components/FrameComponent1/FrameComponent1.component";
import { BarItems } from "../../components/BarItems/BarItems.component";
import { InfosSci } from "../../components/InfosSci/InfosSci.component";
@Component({
  selector: "sgi-ametek",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [FrameComponent1, BarItems, InfosSci],
  templateUrl: "./SGIAmetek.component.html",
  styleUrls: ["./SGIAmetek.component.css"],
})
export class SGIAmetek {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
