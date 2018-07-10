import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'Brigadeiro',
            'Brigadeiro de chocolate',
            'https://www.receitadevovo.com.br/gbau/sistema/receitas/img/brigadeiro-tradicional_18052017053849.jpg',
            [
                new Ingredient('Leite Condensado', 5),
                new Ingredient('Chocolate em pó', 400)
            ]
        ),
        new Recipe(
            'Red Velvet',
            'Bolo Red Velvet',
            'http://s2.glbimg.com/c-JZ7Rco02MLoZDbdjsxZoc5DXI=/s.glbimg.com/et/gs/f/original/2016/02/22/bolo_red_velvet.jpg',
            [
                new Ingredient('Leite', 2),
                new Ingredient('Ovos', 5)
            ]
        )
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
