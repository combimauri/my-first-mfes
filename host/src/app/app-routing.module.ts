import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'feature-one',
    pathMatch: 'full',
  },
  {
    path: 'feature-one',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        exposedModule: './FeatureOneModule',
      }).then((mod) => mod.FeatureOneModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
