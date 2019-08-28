import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturacDiarioPage } from './facturac-diario.page';

describe('FacturacDiarioPage', () => {
  let component: FacturacDiarioPage;
  let fixture: ComponentFixture<FacturacDiarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturacDiarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturacDiarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
