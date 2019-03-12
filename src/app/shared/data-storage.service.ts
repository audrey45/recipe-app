import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { RecipeService } from './recipe.service';
import { Observable } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService) {

    }
    storeRecipes(): Observable<any> {
        return this.http.put('https://ng-recipe-book-8fdd2.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getToken();

        this.http.get<Recipe[]>('https://ng-recipe-book-8fdd2.firebaseio.com/recipes.json?auth=' + token).subscribe(
            (response) => {
                this.recipeService.setRecipes(response);
            });
    }
}
