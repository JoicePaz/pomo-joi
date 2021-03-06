import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoundComponent } from './round/round.component';

const routes: Routes = [
  { path: '', pathMatch: 'full' , component: HomeComponent},
  { path: 'start/:trabalho/:pausa/:sessoes', component: RoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }