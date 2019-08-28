import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaCompraDiarioPage } from './factura-compra-diario.page';

describe('FacturaCompraDiarioPage', () => {
  let component: FacturaCompraDiarioPage;
  let fixture: ComponentFixture<FacturaCompraDiarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaCompraDiarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaCompraDiarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
