import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";

import { Store } from "store";

import {
  AuthService,
  IUser
} from "./auth/shared/services/auth/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  user$: Observable<IUser>;

  subscription: Subscription;

  constructor(
    private _store: Store,
    private _router: Router,
    private _authService: AuthService
  ) {}

  ngOnInit() {
    this.subscription = this._authService.auth$.subscribe();
    this.user$ = this._store.select<IUser>("user");
    this.user$.subscribe(user => console.log(user));
  }

  async onLogout() {
    await this._authService.logoutUser();
    this._router.navigate(["/auth/login"]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
