import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositoDiarioPage } from './deposito-diario.page';

describe('DepositoDiarioPage', () => {
  let component: DepositoDiarioPage;
  let fixture: ComponentFixture<DepositoDiarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositoDiarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositoDiarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
