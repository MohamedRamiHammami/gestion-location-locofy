import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { ArtCategory } from "../../components/ArtCategory/ArtCategory.component";
@Component({
  selector: "connexion",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [ArtCategory],
  templateUrl: "./Connexion.component.html",
  styleUrls: ["./Connexion.component.css"],
})
export class Connexion {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
