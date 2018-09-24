import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
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
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientes(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }
}
