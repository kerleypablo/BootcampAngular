import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgifNgforComponent } from './ngif-ngfor/ngif-ngfor.component';
import { AgendaComponent } from './Agenda/Agenda.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AgendaTaskComponent } from './agenda-task/agenda-task.component';
import { DialogAddTaskComponent } from './dialog-add-task/dialog-add-task.component';
import { TaskService } from './services/task.service';


@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
      NgifNgforComponent,
      AgendaComponent,
      AgendaTaskComponent,
      DialogAddTaskComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
      TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
