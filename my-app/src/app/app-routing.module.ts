import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectComponent } from './project/project.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  { path : '', redirectTo: '/home', pathMatch: 'full'},
  { path : 'home', component:HomeComponent},
  { path : 'blog', component:BlogComponent},
  { path : 'project', component:ProjectComponent},
  { path : 'work', component:WorkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
