import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaTaskComponent } from './agenda-task.component';

describe('AgendaTaskComponent', () => {
  let component: AgendaTaskComponent;
  let fixture: ComponentFixture<AgendaTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
