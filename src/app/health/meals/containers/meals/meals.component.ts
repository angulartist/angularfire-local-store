import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";

// services
import {
  MealsService,
  IMeal
} from "../../../shared/services/meals/meals.service";

// store
import { Store } from "store";

@Component({
  selector: "app-meals",
  templateUrl: "./meals.component.html",
  styleUrls: ["./meals.component.scss"]
})
export class MealsComponent implements OnInit, OnDestroy {
  meals$: Observable<IMeal[]>;
  subscription: Subscription;

  constructor(private _store: Store, private _mealsService: MealsService) {}

  ngOnInit() {
    this.meals$ = this._store.select<IMeal[]>("meals");
    this.subscription = this._mealsService.meals$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  removeMeal(event: IMeal) {
    this._mealsService.removeMeal(event.uid);
  }
}
