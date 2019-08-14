import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualDiarioPage } from './individual-diario.page';

describe('IndividualDiarioPage', () => {
  let component: IndividualDiarioPage;
  let fixture: ComponentFixture<IndividualDiarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualDiarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualDiarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
