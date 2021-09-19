import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  providers: [RecipeService]
})

export class LandingPageComponent implements OnInit {

  @Input() recipeList: Array<Recipe> = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.listRecipes();
    
  }

  listRecipes() {
    this.recipeService.getRecipes().subscribe((data: Array<Recipe>) => {
      this.recipeList.push(...data);
    })
  }
}