import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'projects/app1/src/app/home/home.component';
import { FlightsComponent } from './flights.component';

const routes: Routes = [{ path: '', component: FlightsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightsRoutingModule {}
