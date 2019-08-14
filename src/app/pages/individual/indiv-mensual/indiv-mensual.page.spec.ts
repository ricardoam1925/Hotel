import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndivMensualPage } from './indiv-mensual.page';

describe('IndivMensualPage', () => {
  let component: IndivMensualPage;
  let fixture: ComponentFixture<IndivMensualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndivMensualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndivMensualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
