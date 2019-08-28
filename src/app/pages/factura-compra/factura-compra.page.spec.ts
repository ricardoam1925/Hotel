import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaCompraPage } from './factura-compra.page';

describe('FacturaCompraPage', () => {
  let component: FacturaCompraPage;
  let fixture: ComponentFixture<FacturaCompraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaCompraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaCompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
