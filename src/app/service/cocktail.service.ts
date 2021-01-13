import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { drinksData } from '../models/mocktails';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';
  filterURL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php';

  constructor(private http: HttpClient) {}

  getCocktailsByName(searchText: string = ''): Observable<drinksData> {
    return this.http.get<drinksData>(this.baseURL, {
      params: { s: searchText },
    });
  }

  getCocktailsByIngredient(searchText: string = ''): Observable<drinksData> {
    return this.http.get<drinksData>(this.baseURL, {
      params: { i: searchText },
    });
  }

  getCocktailsByCategory(searchText: string = ''): Observable<drinksData> {
    return this.http.get<drinksData>(this.baseURL, {
      params: { c: searchText },
    });
  }
}
