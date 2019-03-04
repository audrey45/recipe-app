import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
public recipes: Recipe[] =[
  new Recipe("Test Name","Test Description", "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1823,w_2731,x_0,y_485/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/SFS_Pinto_Bean_and_Swiss_Chard_Enchiladas_021_4__ioqi23.jpg"),
  new Recipe("Test Name","Test Description", "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1823,w_2731,x_0,y_485/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/SFS_Pinto_Bean_and_Swiss_Chard_Enchiladas_021_4__ioqi23.jpg"),
];


  constructor() { }

  ngOnInit() {
  }

}
