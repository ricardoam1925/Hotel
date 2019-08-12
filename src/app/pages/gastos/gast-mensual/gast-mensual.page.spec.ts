import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastMensualPage } from './gast-mensual.page';

describe('GastMensualPage', () => {
  let component: GastMensualPage;
  let fixture: ComponentFixture<GastMensualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastMensualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastMensualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
