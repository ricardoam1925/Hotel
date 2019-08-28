import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacMensualPage } from './fac-mensual.page';

describe('FacMensualPage', () => {
  let component: FacMensualPage;
  let fixture: ComponentFixture<FacMensualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacMensualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacMensualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
