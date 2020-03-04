import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project-list/project/project.component';


const routes: Routes = [
  {path: '', redirectTo: 'projectlist', pathMatch: 'full'},
  {path: 'projectlist', component: ProjectListComponent, children: [
    {path: 'project/:id',  component: ProjectComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
