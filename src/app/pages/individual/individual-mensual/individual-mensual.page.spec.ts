import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualMensualPage } from './individual-mensual.page';

describe('IndividualMensualPage', () => {
  let component: IndividualMensualPage;
  let fixture: ComponentFixture<IndividualMensualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualMensualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualMensualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
