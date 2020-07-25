import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared-models/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{

    // recipeSelected = new EventEmitter<Recipe>();
    // recipeSelected = new Subject<Recipe>();

    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('First Recipe', 'This is test recipe.', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMNXam9wEe5sW6QXQvq7T0uA_-RvBGddwtXA&usqp=CAU://www.flickr.com/photos/soniagoyal/31479301445/in/photostream/',
        [new Ingredient('Tomato', 3), new Ingredient('Potato', 5)]
        )
                     
        ,

        new Recipe('Second Recipe', 'This is test recipe.', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMNXam9wEe5sW6QXQvq7T0uA_-RvBGddwtXA&usqp=CAU://www.flickr.com/photos/soniagoyal/31479301445/in/photostream/',
        [new Ingredient('Bread', 10), new Ingredient('Butter', 10)]
        )
    ];
      
    constructor(private shoppingListService: ShoppingListService){

    }

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes(): Recipe[]{
        return this.recipes.slice();
    }

    getRecipe(index: number): Recipe {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe): void{
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe): void{
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number): void{
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

}