import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Fond } from "../../components/Fond/Fond.component";
import { FrameComponent } from "../../components/FrameComponent/FrameComponent.component";
import { GroupComponent } from "../../components/GroupComponent/GroupComponent.component";
import { GroupComponent1 } from "../../components/GroupComponent1/GroupComponent1.component";
@Component({
  selector: "home",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [Fond, FrameComponent, GroupComponent, GroupComponent1],
  templateUrl: "./Home.component.html",
  styleUrls: ["./Home.component.css"],
})
export class Home {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
