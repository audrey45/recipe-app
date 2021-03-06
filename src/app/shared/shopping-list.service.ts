import { Ingredient } from '../models/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {

    ingredientsChange = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    public getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChange.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChange.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChange.next(this.ingredients.slice());
    }

    deleteIngredients(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChange.next(this.ingredients.slice());
    }

}
