import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { IMeal } from '../../../shared/services/meals/meals.service';

@Component({
  selector: 'meal-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.scss']
})
export class MealFormComponent {

  @Output()
  create = new EventEmitter<IMeal>();

  form = this._fb.group({
    name: ['', Validators.required],
    ingredients: this._fb.array([''])
  })

  constructor(
    private _fb: FormBuilder
  ) { }

  get ingredients(): FormArray {
    return this.form.get('ingredients') as FormArray;
  }

  addIngredients(): void {
    this.ingredients.push(new FormControl(''));
  }

  removeIngredients(index: number): void {
    this.ingredients.removeAt(index);
  }

  createMeal(): void {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }

}
