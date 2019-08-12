import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralEspecificoPage } from './general-especifico.page';

describe('GeneralEspecificoPage', () => {
  let component: GeneralEspecificoPage;
  let fixture: ComponentFixture<GeneralEspecificoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralEspecificoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralEspecificoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
