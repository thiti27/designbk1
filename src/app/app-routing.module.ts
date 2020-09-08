import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { L1Component } from './l1/l1.component';
import { L3Component } from './l3/l3.component';
import { L4Component } from './l4/l4.component';
import { L5Component } from './l5/l5.component';
import { L6Component } from './l6/l6.component';
import { L7Component } from './l7/l7.component';
import { L8Component } from './l8/l8.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [ 
  { path: 'l1', component: L1Component },
  { path: 'l3', component: L3Component },
  { path: 'l4', component: L4Component},
  { path: 'l5', component: L5Component },
  { path: 'l6', component: L6Component },
  { path: 'l7', component: L7Component },
  { path: 'l8', component: L8Component},
  { path: 'main', component: MainComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
