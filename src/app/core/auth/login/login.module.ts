import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// shared module
import { SharedModule } from '../shared/shared.module';

// containers
import * as fromContainers from './containers';

export const ROUTES: Routes = [
    {
        path: '', component: fromContainers.LoginComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        SharedModule
    ],
    declarations: [
        ...fromContainers.containers
    ]
})
export class LoginModule { }