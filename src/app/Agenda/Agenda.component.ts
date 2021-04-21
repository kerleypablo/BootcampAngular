import { Task } from './../services/models/task_model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-Agenda',
  templateUrl: './Agenda.component.html',
  styleUrls: ['./Agenda.component.css']
})
export class AgendaComponent implements OnInit {
  panelOpenState = false;

  tarefas: Task[] = [
    new Task('Tarefa 1',''),
    new Task('Tarefa 2',''),
    new Task('Tarefa 3',''),
    new Task('Tarefa 4',''),
  ]
  constructor() { }

  ngOnInit() {
  }

}
