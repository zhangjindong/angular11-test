import { loadRemoteModule } from '@angular-architects/module-federation/src/utils/dynamic-federation';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'flights',
    loadChildren: () =>
      loadRemoteModule({
        // remoteEntry: 'http://localhost:3000/remoteEntry.js',
        remoteName: 'mfe1',
        exposedModule: './Module',
      }).then((m) => m.FlightsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
