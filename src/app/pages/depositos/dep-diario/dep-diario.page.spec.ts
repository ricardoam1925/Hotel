import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepDiarioPage } from './dep-diario.page';

describe('DepDiarioPage', () => {
  let component: DepDiarioPage;
  let fixture: ComponentFixture<DepDiarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepDiarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepDiarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
