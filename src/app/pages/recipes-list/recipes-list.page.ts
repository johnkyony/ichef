import { Component, OnInit } from '@angular/core';
import {RecipesService , Recipe} from 'src/app/services/recipes.service'
import {Observable} from 'rxjs'
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.page.html',
  styleUrls: ['./recipes-list.page.scss'],
})
export class RecipesListPage implements OnInit {

  private recipes: Observable<Recipe[]>
  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes()
  }

}
