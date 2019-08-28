import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraMensualPage } from './compra-mensual.page';

describe('CompraMensualPage', () => {
  let component: CompraMensualPage;
  let fixture: ComponentFixture<CompraMensualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraMensualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraMensualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
