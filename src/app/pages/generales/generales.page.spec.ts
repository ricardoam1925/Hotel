import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralesPage } from './generales.page';

describe('GeneralesPage', () => {
  let component: GeneralesPage;
  let fixture: ComponentFixture<GeneralesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
