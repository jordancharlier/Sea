/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TheteamComponent } from './theteam.component';

describe('TheteamComponent', () => {
  let component: TheteamComponent;
  let fixture: ComponentFixture<TheteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
