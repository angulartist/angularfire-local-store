import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

// models
import { IMeal, MealsService } from '../../../shared/services/meals/meals.service';


@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit, OnDestroy {

  meal$: Observable<IMeal>;
  subscription: Subscription;

  constructor(
    private _mealsService: MealsService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this._mealsService.meals$.subscribe();
    this.meal$ = this._route.params
      .pipe(
        switchMap(param => {
          return this._mealsService.getMeal(param.id);
        })
      );
  }

  async addMeal(event: IMeal): Promise<void> {
    await this._mealsService.addMeal(event);
    this.backToMeals();
  }

  backToMeals() {
    this._router.navigate(['meals']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
