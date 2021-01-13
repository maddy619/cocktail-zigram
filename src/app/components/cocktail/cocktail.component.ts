import { Component, OnInit } from '@angular/core';
import { CocktailService } from 'src/app/service/cocktail.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss'],
})
export class CocktailComponent implements OnInit {
  cocktailData;
  filterBy;
  inputText = '';
  FILTER_BY_CATEGORY = 'category';
  FILTER_BY_NAME = 'name';
  FILTER_BY_INGREDIENT = 'ingredient';
  constructor(private cocktailDataService: CocktailService) {}

  ngOnInit(): void {
    this.getDrinks();
  }

  getAllDrinks(searchText: string = '') {
    this.cocktailDataService
      .getCocktailsByName(searchText)
      .subscribe((response) => {
        this.cocktailData = response.drinks;
      });
  }

  getDrinks(): void {
    if (this.filterBy) {
      if (this.inputText.length > 0) {
        this.filterData();
      }
    } else {
      this.getAllDrinks('');
    }
  }

  filterData(): void {
    this.cocktailData = [];
    switch (this.filterBy) {
      case this.FILTER_BY_CATEGORY:
        this.cocktailDataService
          .getCocktailsByCategory(this.inputText)
          .subscribe((response) => {
            this.cocktailData = response.drinks;
          });
        break;
      case this.FILTER_BY_NAME:
        this.getAllDrinks(this.inputText);
        break;
      case this.FILTER_BY_INGREDIENT:
        this.cocktailDataService
          .getCocktailsByIngredient(this.inputText)
          .subscribe((response) => {
            this.cocktailData = response.ingredients;
          });
        break;
      default:
        this.getAllDrinks('');
        break;
    }
  }
}
