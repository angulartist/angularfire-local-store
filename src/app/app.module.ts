import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

// 3rd party
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// store
import { Store } from "store";

// core module
import { CoreModule } from "./core/core.module";

// shared modules
import { SharedModule, AppHeaderComponent, AppNavComponent } from './shared';

// feature modules
import { AuthModule } from "./auth/auth.module";
import { HealthModule } from "./health/health.module";

// components
import { AppComponent } from "./app.component";


//config
export const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyAJCNeREdEEE6WLxvFNpNavv6NTXOmdpGk",
  authDomain: "toto-e2e69.firebaseapp.com",
  databaseURL: "https://toto-e2e69.firebaseio.com",
  projectId: "toto-e2e69",
  storageBucket: "toto-e2e69.appspot.com",
  messagingSenderId: "666341637840"
};

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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    CoreModule,
    SharedModule,
    AuthModule,
    HealthModule
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
