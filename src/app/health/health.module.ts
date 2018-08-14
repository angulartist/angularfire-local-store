import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// shared module
import { SharedModule } from "./shared/shared.module";

// guards
import { AuthGuard } from "../core/auth/shared/guards/auth.guard";

// routing
export const ROUTES: Routes = [
  {
    path: "meals",
    loadChildren: "./meals/meals.module#MealsModule",
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES), SharedModule.forRoot()]
})
export class HealthModule {}
