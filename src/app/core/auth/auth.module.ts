import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// 3rd party
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// shared
import { SharedModule } from './shared/shared.module';
import { FirestoreService } from '../firestore/firestore.service';

export const ROUTES: Routes = [
    {
        path: 'auth',
        children: [
            {
                path: '', pathMatch: 'full', redirectTo: 'login'
            },
            {
                path: 'login', loadChildren: './login/login.module#LoginModule'
            },
            {
                path: 'register', loadChildren: './register/register.module#RegisterModule'
            }
        ]
    }
]

export const firebaseConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyAJCNeREdEEE6WLxvFNpNavv6NTXOmdpGk",
    authDomain: "toto-e2e69.firebaseapp.com",
    databaseURL: "https://toto-e2e69.firebaseio.com",
    projectId: "toto-e2e69",
    storageBucket: "toto-e2e69.appspot.com",
    messagingSenderId: "666341637840"
};

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFirestoreModule,
        SharedModule.forRoot()
    ]
})
export class AuthModule { }