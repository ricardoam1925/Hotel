import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastoDiarioPage } from './gasto-diario.page';

describe('GastoDiarioPage', () => {
  let component: GastoDiarioPage;
  let fixture: ComponentFixture<GastoDiarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastoDiarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastoDiarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
