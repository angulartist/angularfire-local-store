import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent {

    error: string;

    constructor(
        private _authService: AuthService,
        private _router: Router
    ) {}

    async loginUser(event: FormGroup) {
        const { email, password } = event.value;

        try {
            await this._authService.loginUser(email, password);
            this._router.navigate(['/']);
        } catch (err) {
            this.error = err.message;
        }
    }
}