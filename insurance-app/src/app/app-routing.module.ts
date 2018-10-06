import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { NoNavLayoutComponent } from './core/layouts/no-nav-layout/no-nav-layout.component';
import { NavLayoutComponent } from './core/layouts/nav-layout/nav-layout.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'auth',
    component: NoNavLayoutComponent,
    loadChildren: './auth/auth.module#AuthModule',
  },
  {
    path: 'home',
    component: NavLayoutComponent,
    children: [{ path: '', component: HomeComponent, pathMatch: 'full' }],
  },
  {
    path: 'claims',
    component: NavLayoutComponent,
    loadChildren: './claims/claims.module#ClaimsModule',
  },
  {
    path: 'invoices',
    component: NavLayoutComponent,
    loadChildren: './invoices/invoices.module#InvoicesModule',
  },
  {
    path: 'payments',
    component: NavLayoutComponent,
    loadChildren: './payments/payments.module#PaymentsModule',
  },
  {
    path: 'polices',
    component: NavLayoutComponent,
    loadChildren: './polices/polices.module#PolicesModule',
  },
  // TODO: not found page
  // { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
