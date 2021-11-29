import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {loadRemoteModule} from "@angular-architects/module-federation";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'products',
    loadChildren: () => loadRemoteModule({
      exposedModule: './Module',
      remoteName: 'product'
    }).then(m => m.ProductModule)
  },
  // {
  //   path: 'flights',
  //   loadChildren: () => loadRemoteModule({
  //     exposedModule: 'FlightsModule',
  //     remoteName: 'mfAlone'
  //   }).then(m => m.FlightsModule)
  // },
  {
    path: 'flights',
    loadChildren: () => import('mfAlone/FlightsModule').then(m => m.FlightsModule)
  },
  // {
  //   path: 'customer',
  //   loadChildren: () => loadRemoteModule({
  //     exposedModule: './Module',
  //     remoteName: 'customer'
  //   }).then(m => m.CustomerModule)
  // },

  {
    path: 'customer',
    loadChildren: () => import('customer/Module').then(m => m.CustomerModule)
  },

  {
    path: 'order',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:6006/orderEntry.js',
      exposedModule: './Module',
      remoteName: 'order'
    }).then(m => m.OrderModule)
  },
  {
    path: 'tracking',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:7007/trackingEntry.js',
      exposedModule: './Module',
      remoteName: 'tracking'
    }).then(m => m.TrackingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
