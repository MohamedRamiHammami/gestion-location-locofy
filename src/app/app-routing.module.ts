import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Home } from "./pages/Home/Home.component";
import { Connexion } from "./pages/Connexion/Connexion.component";
import { SGIAmetek } from "./pages/SGIAmetek/SGIAmetek.component";
const routes: Routes = [
  {
    path: "",
    component: Home,
  },
  {
    path: "connexion",
    component: Connexion,
  },
  {
    path: "sgi-ametek",
    component: SGIAmetek,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
