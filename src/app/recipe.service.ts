import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "./models/recipe";

@Injectable()
export class RecipeService {

    recipeListUrl: string = "http://localhost:8080/recipes" as const;

  constructor(private http: HttpClient) { }

    getRecipes() {
        return this.http.get<Array<Recipe>>(this.recipeListUrl);  
    }

}