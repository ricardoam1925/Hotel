import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenDiarioPage } from './gen-diario.page';

describe('GenDiarioPage', () => {
  let component: GenDiarioPage;
  let fixture: ComponentFixture<GenDiarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenDiarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenDiarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
