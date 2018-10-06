import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PolicesComponent } from './polices.component';
import { PolicesListComponent } from './polices-list/polices-list.component';

const routes: Routes = [
  { path: '', component: PolicesComponent },
  { path: 'list', component: PolicesListComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicesRoutingModule {}
