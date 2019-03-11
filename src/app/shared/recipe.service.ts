import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

    recipesChange = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        // tslint:disable-next-line: max-line-length
        new Recipe('Test Name', 'Test Description', 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1823,w_2731,x_0,y_485/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/SFS_Pinto_Bean_and_Swiss_Chard_Enchiladas_021_4__ioqi23.jpg',
            [new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)]),
        // tslint:disable-next-line: max-line-length
        new Recipe('Test Name 2', 'Test Description 2', 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA',
            [new Ingredient('Buns', 2),
            new Ingredient('Meat', 3)]),
    ];

    constructor(private shoppingListService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppintList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    getRecipe(index: number) {

        return this.recipes[index];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChange.next(this.recipes.slice());
    }
    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChange.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChange.next(this.recipes.slice());
    }

        setRecipes(recipes: Recipe[]){
            this.recipes = recipes;
            this.recipesChange.next(this.recipes.slice());
        }


}
