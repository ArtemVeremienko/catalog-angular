import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'
import { AutoListComponent } from './auto-list/auto-list.component'
import { AddAutoComponent } from './add-auto/add-auto.component'
import { AutoInfoComponent } from './auto-info/auto-info.component'

const routes: Routes = [
  { path: 'cars', component: AutoListComponent },
  { path: 'cars/:id', component: AutoInfoComponent },
  { path: 'add', component: AddAutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
