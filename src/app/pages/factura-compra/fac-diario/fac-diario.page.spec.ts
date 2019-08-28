import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacDiarioPage } from './fac-diario.page';

describe('FacDiarioPage', () => {
  let component: FacDiarioPage;
  let fixture: ComponentFixture<FacDiarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacDiarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacDiarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
