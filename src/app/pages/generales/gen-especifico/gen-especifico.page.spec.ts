import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenEspecificoPage } from './gen-especifico.page';

describe('GenEspecificoPage', () => {
  let component: GenEspecificoPage;
  let fixture: ComponentFixture<GenEspecificoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenEspecificoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenEspecificoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
