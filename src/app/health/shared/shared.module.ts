import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

// 3rd modules
import { AngularFirestoreModule } from "angularfire2/firestore";

// components
import * as fromComponents from './components';

// services
import * as fromServices from './services';

@NgModule({
  imports: [CommonModule, RouterModule, AngularFirestoreModule],
  declarations: [...fromComponents.components],
  exports: [...fromComponents.components]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [...fromServices.services]
    };
  }
}
