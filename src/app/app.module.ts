import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { Store } from 'store';

// feature module
import { AuthModule } from './core/auth/auth.module';

// components
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './ui/components/app-header/app-header.component';
import { AppNavComponent } from './ui/components/app-nav/app-nav.component';

export const ROUTES: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
