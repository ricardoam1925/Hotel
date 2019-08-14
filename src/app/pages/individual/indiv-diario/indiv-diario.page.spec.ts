import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndivDiarioPage } from './indiv-diario.page';

describe('IndivDiarioPage', () => {
  let component: IndivDiarioPage;
  let fixture: ComponentFixture<IndivDiarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndivDiarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndivDiarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
