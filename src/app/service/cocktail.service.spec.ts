import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { drinksData } from '../models/mocktails';

import { CocktailService } from './cocktail.service';

describe('CocktailService', () => {
  let service: CocktailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(CocktailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getCocktailsByName', () => {
    const testData: drinksData = { drinks : [{foo: 'bar'}]};
    service.getCocktailsByName()
    .subscribe(data =>
      expect(data).toEqual(testData)
    );
  });

  it('should test getCocktailsByIngredient', () => {
    const testData: drinksData = { ingredients : [{foo: 'bar'}]};
    service.getCocktailsByIngredient()
    .subscribe(data =>
      expect(data).toEqual(testData)
    );
  });

  it('should test getCocktailsByCategory', () => {
    const testData: drinksData = { drinks : [{foo: 'bar'}]};
    service.getCocktailsByCategory()
    .subscribe(data =>
      expect(data).toEqual(testData)
    );
  });
});
