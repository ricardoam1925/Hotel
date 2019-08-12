import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastEspecificoPage } from './gast-especifico.page';

describe('GastEspecificoPage', () => {
  let component: GastEspecificoPage;
  let fixture: ComponentFixture<GastEspecificoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastEspecificoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastEspecificoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
