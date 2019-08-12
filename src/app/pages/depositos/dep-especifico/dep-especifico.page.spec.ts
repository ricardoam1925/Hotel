import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepEspecificoPage } from './dep-especifico.page';

describe('DepEspecificoPage', () => {
  let component: DepEspecificoPage;
  let fixture: ComponentFixture<DepEspecificoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepEspecificoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepEspecificoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
