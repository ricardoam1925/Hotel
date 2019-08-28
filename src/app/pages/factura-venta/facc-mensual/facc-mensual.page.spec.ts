import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaccMensualPage } from './facc-mensual.page';

describe('FaccMensualPage', () => {
  let component: FaccMensualPage;
  let fixture: ComponentFixture<FaccMensualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaccMensualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaccMensualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
