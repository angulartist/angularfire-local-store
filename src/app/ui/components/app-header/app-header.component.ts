import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';

import { IUser } from '../../../core/auth/shared/services/auth/auth.service';

@Component({
    selector: 'app-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['app-header.component.scss'],
    templateUrl: 'app-header.component.html'
})
export class AppHeaderComponent {

    @Input()
    user: IUser;

    @Output()
    logout = new EventEmitter<any>();

    logoutUser() {
        this.logout.emit();
    }
}