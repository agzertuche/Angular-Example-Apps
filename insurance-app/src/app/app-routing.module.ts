import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NoNavLayoutComponent } from './core/layouts/no-nav-layout/no-nav-layout.component';
import { NavLayoutComponent } from './core/layouts/nav-layout/nav-layout.component';
import { NotFoundPageComponent } from './core/containers/not-found-page/not-found-page.component';
import { HomePageComponent } from './core/containers/home-page/home-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'auth',
    component: NoNavLayoutComponent,
    loadChildren: './auth/auth.module#AuthModule',
  },
  {
    path: 'home',
    component: NavLayoutComponent,
    children: [{ path: '', component: HomePageComponent, pathMatch: 'full' }],
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
    path: 'policies',
    component: NavLayoutComponent,
    loadChildren: './policies/policies.module#PoliciesModule',
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
