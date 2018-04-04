import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Basmati Rice', 1,'cup'),
    new Ingredient('Split Mung Dal',1,'cup'),
    new Ingredient('Split Yellow Dal',0.25,'cup'),
    new Ingredient('Ghee',1.5,'tsp'),
    new Ingredient('Turmeric',1.5,'tsp'),
    new Ingredient('Fresh Ginger',1.5,'tsp'),
    new Ingredient('Cilantro',0.25,'cup'),
    new Ingredient('Water',4,'cups')
  ];

  constructor() { }

  ngOnInit() {
  }

}
