import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Kitchari', 
               'Ayurvedic', 
               'Rice & Mung Bean Porridge',
               'http://www.emmafrisch.com/wp-content/uploads/2015/02/IMG_5168-1024x726.jpg' ),
    new Recipe('Kitchari', 
               'Ayurvedic', 
               'Rice & Mung Bean Porridge',
               'http://www.emmafrisch.com/wp-content/uploads/2015/02/IMG_5168-1024x726.jpg' )
  ];
  constructor() { }

  ngOnInit() {
  }

}
