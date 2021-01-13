import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CocktailComponent } from './cocktail.component';
import { CocktailService } from 'src/app/service/cocktail.service';
import { of } from 'rxjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CocktailComponent', () => {
  let component: CocktailComponent;
  let fixture: ComponentFixture<CocktailComponent>;

  const cocktailServiceStub = {
    getCocktailsByName: () => of({ drinks: 'gin' }),
    getCocktailsByIngredient: () => of({ ingredients: 'vodka' }),
    getCocktailsByCategory: () => of({ drinks: 'alcoholic' }),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CocktailComponent],
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        FormsModule,
        FlexLayoutModule,
        MatCardModule,
        MatDividerModule,
        ScrollingModule,
        MatSelectModule,
        MatInputModule,
        MatInputModule,
      ],
      providers: [{ provide: CocktailService, useValue: cocktailServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter data', () => {
    component.filterBy = component.FILTER_BY_NAME;
    component.filterData();
    expect(component.cocktailData).toBe('gin');

    component.filterBy = component.FILTER_BY_CATEGORY;
    component.filterData();
    expect(component.cocktailData).toBe('alcoholic');

    component.filterBy = component.FILTER_BY_INGREDIENT;
    component.filterData();
    expect(component.cocktailData).toBe('vodka');

    component.filterBy = '';
    component.filterData();
    expect(component.cocktailData).toBe('gin');
  });

  it('should get drinks', () => {
    component.filterBy = component.FILTER_BY_NAME;
    component.inputText = ''
    component.getDrinks();

    component.inputText = 'gin'
    component.getDrinks();
    expect(component.cocktailData).toBe('gin');
  });

  it('should all drinks with no parameter', () => {
    component.getAllDrinks();
    expect(component.cocktailData).toBe('gin');
  });
});
