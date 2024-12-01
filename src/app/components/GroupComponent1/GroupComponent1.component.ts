import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "group-component1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./GroupComponent1.component.html",
  styleUrls: ["./GroupComponent1.component.css"],
})
export class GroupComponent1 {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
