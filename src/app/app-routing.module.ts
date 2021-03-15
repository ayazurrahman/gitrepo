import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RepoComponent} from './repo/repo.component';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
  {path:'', component:UsersComponent},
  {path:'repo', component:RepoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
