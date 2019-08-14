import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCreatePage } from './recipe-create.page';

describe('RecipeCreatePage', () => {
  let component: RecipeCreatePage;
  let fixture: ComponentFixture<RecipeCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
