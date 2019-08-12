import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastDiarioPage } from './gast-diario.page';

describe('GastDiarioPage', () => {
  let component: GastDiarioPage;
  let fixture: ComponentFixture<GastDiarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastDiarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastDiarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
