import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import * as RecipeActions from './recipe.actions';
import { AppState } from '../../shopping-list/store/shopping-list-reducers';

export interface FeatureState extends AppState {
  recipes: State;
}

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [
    new Recipe(
      'Recipe 1',
      'This is a text description',
      'https://source.unsplash.com/featured/?recipe',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)],
    ),
    new Recipe(
      'Another Recipe two',
      'description recipe two',
      'https://source.unsplash.com/featured/?recipes',
      [new Ingredient('Bread', 1)],
    ),
  ],
};

export function recipeReducer(
  state = initialState,
  action: RecipeActions.Actions,
) {
  switch (action.type) {
    case RecipeActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload],
      };
    case RecipeActions.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
      };
    case RecipeActions.UPDATE_RECIPE:
      const recipe = state.recipes[action.payload.index];
      const recipes = [...state.recipes];
      recipes[action.payload.index] = {
        ...recipe,
        ...action.payload.updatedRecipe,
      };
      return {
        ...state,
        recipes,
      };
    case RecipeActions.DELETE_RECIPE:
      const restOfRecipes = [...state.recipes];
      restOfRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: restOfRecipes,
      };
    default:
      return state;
  }
}
