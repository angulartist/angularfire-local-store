import { NgModule, Optional, SkipSelf } from '@angular/core';

// services
import * as fromServices from './services';

// guards
import * as fromGuards from './guards';

@NgModule({
    imports: [],
    declarations: [],
    providers: [...fromServices.services, ...fromGuards.guards]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        // Import guard
        if (parentModule) {
            throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
        }
    }
}