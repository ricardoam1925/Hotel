import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaccDiarioPage } from './facc-diario.page';

describe('FaccDiarioPage', () => {
  let component: FaccDiarioPage;
  let fixture: ComponentFixture<FaccDiarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaccDiarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaccDiarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
