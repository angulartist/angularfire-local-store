import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

// 3rd modules
import { AngularFirestoreModule } from "angularfire2/firestore";

// components
import { ListItemComponent } from './components/list-item/list-item.component';

// services
import { MealsService } from "./services/meals/meals.service";

@NgModule({
  imports: [CommonModule, RouterModule, AngularFirestoreModule],
  declarations: [ListItemComponent],
  exports: [ListItemComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [MealsService]
    };
  }
}
