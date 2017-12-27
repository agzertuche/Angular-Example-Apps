import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Recipe name",
      "description recipe",
      "https://images.unsplash.com/photo-1504387828636-abeb50778c0c?auto=format&fit=crop&w=1534&q=80"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
