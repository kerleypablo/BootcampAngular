/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgifNgforComponent } from './ngif-ngfor.component';

describe('NgifNgforComponent', () => {
  let component: NgifNgforComponent;
  let fixture: ComponentFixture<NgifNgforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgifNgforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
