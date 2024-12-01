import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "group-component",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./GroupComponent.component.html",
  styleUrls: ["./GroupComponent.component.css"],
})
export class GroupComponent {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() totalRevenues: string = "";
  @Input() k: string = "";
  @Input() group2: string = "";
  /** Style props */
  @Input() groupDivLeft: string | number = "";
  @Input() revenueLabelsWidth: string | number = "";
  @Input() unitLabelsJustifyContent: string | number = "";
  @Input() unitLabelsGap: string | number = "";
  @Input() unitLabelsAlignSelf: string | number = "";
  @Input() kMinWidth: string | number = "";

  get groupDivStyle() {
    return {
      left: this.groupDivLeft,
    };
  }

  get revenueLabelsStyle() {
    return {
      width: this.revenueLabelsWidth,
    };
  }

  get unitLabelsStyle() {
    return {
      "justify-content": this.unitLabelsJustifyContent,
      gap: this.unitLabelsGap,
      "align-self": this.unitLabelsAlignSelf,
    };
  }

  get kStyle() {
    return {
      "min-width": this.kMinWidth,
    };
  }
}
