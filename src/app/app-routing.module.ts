import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { F1SidenavComponent } from './f1-sidenav/f1-sidenav.component';

// todo - build out the pages. 
const routes: Routes = [
  { path: '', component: F1SidenavComponent },
  { path: 'results', component: F1SidenavComponent },
  { path: 'driver', component: F1SidenavComponent },
  { path: 'constructor', component: F1SidenavComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
