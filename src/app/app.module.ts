import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

// store
import { Store } from "store";

// feature modules
import { AuthModule } from "./core/auth/auth.module";
import { HealthModule } from "./health/health.module";

// components
import { AppComponent } from "./app.component";
import { AppHeaderComponent } from "./ui/components/app-header/app-header.component";
import { AppNavComponent } from "./ui/components/app-nav/app-nav.component";

export const ROUTES: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "meals"
  }
];

@NgModule({
  declarations: [AppComponent, AppHeaderComponent, AppNavComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule,
    HealthModule
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule {}
