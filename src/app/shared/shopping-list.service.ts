import { Ingredient } from '../models/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{

    ingredientsChange = new EventEmitter<Ingredient[]>();

    ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes', 10)
      ];

      public getIngredients(){
          return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChange.emit(this.ingredients.slice());
      }

}