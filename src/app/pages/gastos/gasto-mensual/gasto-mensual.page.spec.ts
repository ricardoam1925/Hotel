import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastoMensualPage } from './gasto-mensual.page';

describe('GastoMensualPage', () => {
  let component: GastoMensualPage;
  let fixture: ComponentFixture<GastoMensualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastoMensualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastoMensualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
