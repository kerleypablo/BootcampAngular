import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Task } from './models/task_model';

@Injectable({providedIn: 'root'})
export class TaskService {
private Updatetask$ = new Subject<void>();

  constructor( private http: HttpClient) { }

public onUpdatetask(): Observable<void>{
  return this.Updatetask$;
}

  /**
   *  CreateTask
   */
  public  CreateTask(task: Task): Observable<void>{
    return this.http.post<void>('localhost:4200/tasks', task).pipe(
     
    );
  }

}



