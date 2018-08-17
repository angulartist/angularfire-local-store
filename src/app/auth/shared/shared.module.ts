import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// services
import * as fromServices from './services';

// guards
import * as fromGuards from './guards';

// components
import * as fromComponents from './components';


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
            providers: [...fromServices.services, ...fromGuards.guards]
        }
    }
}