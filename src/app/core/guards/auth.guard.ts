import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { map } from "rxjs/operators";

// services
import { AuthService } from "../../auth/shared/services/auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _router: Router, private _authService: AuthService) {}

  canActivate() {
    return this._authService.authState.pipe(
      map(user => {
        if (!user) {
          this._router.navigate(["/auth/login"]);
        }
        return !!user;
      })
    );
  }
}
