import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then(m => m.HomePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./list/list.module').then(m => m.ListPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'record',
    loadChildren: './record/record.module#RecordPageModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'refund',
    loadChildren: './refund/refund.module#RefundPageModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'newcustomer',
    loadChildren: './newcustomer/newcustomer.module#NewcustomerPageModule',
    canLoad: [AuthGuard]
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
