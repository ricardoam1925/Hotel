import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositosPage } from './depositos.page';

describe('DepositosPage', () => {
  let component: DepositosPage;
  let fixture: ComponentFixture<DepositosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
