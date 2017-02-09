/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TheprojectComponent } from './theproject.component';

describe('TheprojectComponent', () => {
  let component: TheprojectComponent;
  let fixture: ComponentFixture<TheprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
