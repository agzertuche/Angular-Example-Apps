import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [AppRoutingModule, HeaderComponent],
})
export class CoreModule {}
