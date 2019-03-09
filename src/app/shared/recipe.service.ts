import { EventEmitter } from '@angular/core';

import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../models/ingredient.model';


export class RecipeService{
    recipeSelect = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe("Test Name", "Test Description", "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1823,w_2731,x_0,y_485/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/SFS_Pinto_Bean_and_Swiss_Chard_Enchiladas_021_4__ioqi23.jpg",
        [new Ingredient('Meat',1),
         new Ingredient('French Fries',20)]),
        new Recipe("Test Name 2", "Test Description 2", "https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA",
        [new Ingredient('Buns',2),
        new Ingredient('Meat',3)]),
      ];

      getRecipes(){
          return this.recipes.slice();
      }
    

}