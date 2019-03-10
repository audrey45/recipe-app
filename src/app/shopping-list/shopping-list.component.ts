import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppingListSerivce: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListSerivce.getIngredients();
    this.subscription = this.shoppingListSerivce.ingredientsChange.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  editItem(index: number) {
    this.shoppingListSerivce.startedEditing.next(index);
  }
}
