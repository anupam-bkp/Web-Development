import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared-models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[]; 
  private igChangedSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    
    this.igChangedSubscription =  
        this.shoppingListService.ingredientsChanged
        .subscribe(
            (ingredients: Ingredient[]) => {
            this.ingredients = ingredients;
          }
        );
  }

  ngOnDestroy(): void{
    this.igChangedSubscription.unsubscribe();
  }

  onEditItem(index: number){
    this.shoppingListService.startedEditing.next(index);
  }

  // onIngrdientAdded(ingredient:Ingredient){
  //   this.ingredients.push(ingredient);   
  // }

}
