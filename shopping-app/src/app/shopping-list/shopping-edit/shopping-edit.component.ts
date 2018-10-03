import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list-actions';
import { AppState } from '../store/shopping-list-reducers';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f')
  form: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItem: Ingredient;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.subscription = this.store.select('shoppingList').subscribe(data => {
      if (data.editedIngredientIndex === -1) {
        this.editMode = false;
        return;
      }

      this.editMode = true;
      this.editedItem = data.editedIngredient;
      this.form.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount,
      });
    });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.store.dispatch(
        new ShoppingListActions.UpdateIngredient({
          updatedIngredient: newIngredient,
        }),
      );
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }
    this.editMode = false;
    form.reset();
  }

  onDelete() {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.form.reset();
  }

  ngOnDestroy() {
    this.store.dispatch(new ShoppingListActions.StopEdit());
    this.subscription.unsubscribe();
  }
}
