import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// components
import * as fromComponents from './components';

// services
import { AuthService } from './services/auth/auth.service';
import { FirestoreService } from '../../services/firestore/firestore.service';

// guards
import * as fromGuards from './guards';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        ...fromComponents.components
    ],
    exports: [
        ...fromComponents.components
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                AuthService,
                FirestoreService,
                ...fromGuards.guards
            ]
        }
    }
}