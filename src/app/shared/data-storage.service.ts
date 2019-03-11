import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { RecipeService } from './recipe.service';
import { Observable } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';


@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient,
        private recipeService: RecipeService) {

    }
    storeRecipes(): Observable<any> {
        return this.http.put('https://ng-recipe-book-8fdd2.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes() {
        this.http.get<Recipe[]>('https://ng-recipe-book-8fdd2.firebaseio.com/recipes.json').subscribe(
            (response) => {
               this.recipeService.setRecipes(response);
            });
    }
}
