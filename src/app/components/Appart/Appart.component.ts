import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "appart",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./Appart.component.html",
  styleUrls: ["./Appart.component.css"],
})
export class Appart {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() rectangle13: string = "";
  @Input() showCardLabel: boolean = false;
  @Input() appartement1: string = "";
  /** Style props */
  @Input() appart1Position: string | number = "";
  @Input() appart1Top: string | number = "";
  @Input() appart1Left: string | number = "";
  @Input() cardLabelHeight: string | number = "";
  @Input() cardLabelWidth: string | number = "";
  @Input() cardLabelMargin: string | number = "";
  @Input() cardLabelPosition: string | number = "";
  @Input() cardLabelTop: string | number = "";
  @Input() cardLabelLeft: string | number = "";
  @Input() appartement1Width: string | number = "";

  onAppart1ContainerClick() {
    // Please sync "SGI" to the project
  }
  get appart1Style() {
    return {
      position: this.appart1Position,
      top: this.appart1Top,
      left: this.appart1Left,
    };
  }

  get cardLabelStyle() {
    return {
      height: this.cardLabelHeight,
      width: this.cardLabelWidth,
      margin: this.cardLabelMargin,
      position: this.cardLabelPosition,
      top: this.cardLabelTop,
      left: this.cardLabelLeft,
    };
  }

  get appartement1Style() {
    return {
      width: this.appartement1Width,
    };
  }
}
