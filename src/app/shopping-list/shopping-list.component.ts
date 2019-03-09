import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shoppingListSerivce: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListSerivce.getIngredients();
    this.shoppingListSerivce.ingredientsChange.subscribe(
      (ingredients: Ingredient[])=>{
         this.ingredients = ingredients;
      });
  }


}
