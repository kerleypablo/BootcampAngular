
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from '../services/models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-todos-tasks',
  templateUrl: './todos-tasks.component.html',
  styleUrls: ['./todos-tasks.component.scss']
})
export class TodosTasksComponent implements OnInit {
  tarefasParaHoje: Task[] = [];
  tarefasParaAmanha: Task[] = [];
  tarefasParaOsProximosDias: Task[] = [];
  ListarTodas: Task[] = [];


  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.onUpdateTasks()
    .subscribe(
      () => {
        this.init();
      }
    );

    this.init();
  }

  private init() {
    this.listAllTask();
  }



  
  private listAllTask() {
    this.taskService
    .listAllTask()
    .subscribe(
      (tarefas: Task[]) => {
        this.ListarTodas = tarefas;
      }
    );
  }

}
