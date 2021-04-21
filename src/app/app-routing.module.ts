import { AgendaComponent } from './Agenda/Agenda.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgifNgforComponent } from './ngif-ngfor/ngif-ngfor.component';

const routes: Routes = [
  {path: 'primeiro-componente', component: DataBindingComponent},
  {path: 'teste', component: NgifNgforComponent},
  {path: 'agenda', component: AgendaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

