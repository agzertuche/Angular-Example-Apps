import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'claims', loadChildren: './claims/claims.module#ClaimsModule' },
  // {
  //   path: 'invoices',
  //   loadChildren: './invoices/invoices.module#InvoicesModule',
  // },
  // { path: 'login', loadChildren: './login/login.module#LoginModule' },
  // {
  //   path: 'payments',
  //   loadChildren: './payments/payments.module#PaymentsModule',
  // },
  // { path: 'polices', loadChildren: './polices/polices.module#PolicesModule' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
