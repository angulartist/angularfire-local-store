import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// shared
import { SharedModule } from './shared/shared.module';

// guards
import { NoAuthGuard } from './shared/guards/no-auth.guard';

// routes
export const ROUTES: Routes = [
    {
        path: 'auth',
        children: [
            {
                path: '', pathMatch: 'full', redirectTo: 'login'
            },
            {
                path: 'login', loadChildren: './login/login.module#LoginModule',
                canActivate: [NoAuthGuard]
            },
            {
                path: 'register', loadChildren: './register/register.module#RegisterModule',
                canActivate: [NoAuthGuard]
            }
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        SharedModule.forRoot()
    ]
})
export class AuthModule { }