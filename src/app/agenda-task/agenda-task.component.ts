import { Task } from './../services/models/task_model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda-task',
  templateUrl: './agenda-task.component.html',
  styleUrls: ['./agenda-task.component.css']
})
export class AgendaTaskComponent implements OnInit {
  @Input() tasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
