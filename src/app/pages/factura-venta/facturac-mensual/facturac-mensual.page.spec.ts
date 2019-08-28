import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturacMensualPage } from './facturac-mensual.page';

describe('FacturacMensualPage', () => {
  let component: FacturacMensualPage;
  let fixture: ComponentFixture<FacturacMensualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturacMensualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturacMensualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
