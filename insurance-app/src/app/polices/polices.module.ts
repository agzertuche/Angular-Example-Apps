import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicesListComponent } from './polices-list/polices-list.component';
import { PolicesRoutingModule } from './polices-routing.module';
import { PolicesComponent } from './polices.component';

@NgModule({
  imports: [CommonModule, PolicesRoutingModule],
  declarations: [PolicesListComponent, PolicesComponent],
})
export class PolicesModule {}
