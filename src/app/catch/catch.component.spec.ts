/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CatchComponent } from './catch.component';

describe('CatchComponent', () => {
  let component: CatchComponent;
  let fixture: ComponentFixture<CatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
