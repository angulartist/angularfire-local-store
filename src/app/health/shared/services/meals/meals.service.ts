import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap, filter, map } from "rxjs/operators";

import { Store } from "store";

import { FirestoreService } from "../../../../core/services/firestore/firestore.service";
import { AuthService } from "../../../../core/auth/shared/services/auth/auth.service";

export interface IMeal {
  uid: string;
  name: "string";
  ingredients: string[];
  timestamp: number;
  $exists: () => boolean;
}

@Injectable()
export class MealsService {
  meals$: Observable<any[]> = this.db
    .col$(`meals`)
    .pipe(tap(next => this.store.set("meals", next)));

  constructor(
    private store: Store,
    private db: FirestoreService,
    private authService: AuthService
  ) {}

  get uid(): string {
    return this.authService.user.uid;
  }

  getMeal(key: string) {
    if (!key) return of({});
    return this.store.select<IMeal[]>("meals").pipe(
      filter(Boolean),
      map(meals => meals.find((meal: IMeal) => meal.uid === key))
    );
  }

  addMeal(meal: IMeal): Promise<firebase.firestore.DocumentReference> {
    return this.db.add(`meals`, meal);
  }

  removeMeal(key: string): Promise<void> {
    return this.db.delete(`meals/${key}`);
  }
}
