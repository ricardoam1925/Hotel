import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastoEspecificoPage } from './gasto-especifico.page';

describe('GastoEspecificoPage', () => {
  let component: GastoEspecificoPage;
  let fixture: ComponentFixture<GastoEspecificoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastoEspecificoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastoEspecificoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
