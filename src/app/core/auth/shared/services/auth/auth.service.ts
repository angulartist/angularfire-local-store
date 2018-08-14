import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { Store } from "store";

import { User } from "firebase";
import { AngularFireAuth } from "angularfire2/auth";

// services
import { FirestoreService } from "../../../../firestore/firestore.service";

export interface IUser {
  uid: string;
  email: string;
  displayName: string;
  avatar: string;
  authenticated: boolean;
  creationTime: string;
  lastSignInTime: string;
}

@Injectable()
export class AuthService {
  auth$: Observable<User> = this._af.authState.pipe(
    tap(next => {
      if (!next) {
        this._store.set("user", null);
        return;
      }
      const user: IUser = {
        uid: next.uid,
        email: next.email,
        displayName: next.displayName,
        avatar: next.photoURL,
        authenticated: true,
        creationTime: next.metadata.creationTime,
        lastSignInTime: next.metadata.lastSignInTime
      };
      this._store.set("user", user);
    })
  );

  constructor(
    private _store: Store,
    private _af: AngularFireAuth,
    private _db: FirestoreService
  ) {}

  get user(): User {
    return this._af.auth.currentUser;
  }

  get authState(): Observable<User> {
    return this._af.authState;
  }

  createUser(email: string, password: string): Promise<void> {
    return this._af.auth
      .createUserWithEmailAndPassword(email, password)
      .then(data => {
        this.setUser(data.user);
      })
      .catch(err => console.log("ERROR: ", err));
  }

  loginUser(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return this._af.auth.signInWithEmailAndPassword(email, password);
  }

  setUser(data: User): Promise<void> {
    const user: IUser = {
      uid: data.uid,
      email: data.email,
      displayName: data.displayName || "Anonyme",
      avatar: data.photoURL || `https://api.adorable.io/avatars/${data.uid}`,
      authenticated: false,
      creationTime: data.metadata.creationTime,
      lastSignInTime: data.metadata.lastSignInTime
    };

    return this._db.set(`users/${data.uid}`, user);
  }

  logoutUser(): Promise<void> {
    return this._af.auth.signOut();
  }
}
