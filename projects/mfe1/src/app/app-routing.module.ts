import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'projects/app1/src/app/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'flights',
    loadChildren: () =>
      import('./flights/flights.module').then((m) => m.FlightsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
