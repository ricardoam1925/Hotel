import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepMensualPage } from './dep-mensual.page';

describe('DepMensualPage', () => {
  let component: DepMensualPage;
  let fixture: ComponentFixture<DepMensualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepMensualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepMensualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
