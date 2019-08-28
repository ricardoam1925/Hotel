import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaVentaPage } from './factura-venta.page';

describe('FacturaVentaPage', () => {
  let component: FacturaVentaPage;
  let fixture: ComponentFixture<FacturaVentaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaVentaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaVentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
