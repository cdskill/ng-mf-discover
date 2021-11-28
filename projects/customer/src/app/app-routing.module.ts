import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EagerComponent} from "./eager/eager.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'customer'},
  {path: 'eager', component: EagerComponent},
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then((m) => m.CustomerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
