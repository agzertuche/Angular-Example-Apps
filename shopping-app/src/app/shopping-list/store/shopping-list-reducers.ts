import * as ShoppingListActions from './shopping-list-actions';
import { Ingredient } from '../../shared/ingredient.model';

const initialState = {
  ingredients: [
    new Ingredient('Apple', 5),
    new Ingredient('Avocado', 2),
    new Ingredient('Tomato', 1),
  ],
};

export function shoppingListReducer(
  state,
  action: ShoppingListActions.Actions,
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action],
      };
    default:
      return state;
  }
}
