import * as ShoppingList from '../shopping-list/store/shopping-list-reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  shoppingList: ShoppingList.State;
}

export const reducers: ActionReducerMap<AppState> = {
  shoppingList: ShoppingList.shoppingListReducer,
};
