import { TaskService } from './../services/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../services/models/task_model';

@Component({
  selector: 'app-dialog-add-task',
  templateUrl: './dialog-add-task.component.html',
  styleUrls: ['./dialog-add-task.component.css']
})
export class DialogAddTaskComponent implements OnInit {

  titulo: string ="";
  notas: string = "";
  meLembreEm: Date = new Date();


  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  addTask(){
    const tarefa = new Task(this.titulo,this.notas,this.meLembreEm)
    this.taskService
    .CreateTask(tarefa)
    .subscribe();
  };

}
