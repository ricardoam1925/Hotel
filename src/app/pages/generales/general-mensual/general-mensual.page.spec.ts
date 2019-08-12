import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralMensualPage } from './general-mensual.page';

describe('GeneralMensualPage', () => {
  let component: GeneralMensualPage;
  let fixture: ComponentFixture<GeneralMensualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralMensualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralMensualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
