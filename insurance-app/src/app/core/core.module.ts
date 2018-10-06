import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { NavLayoutComponent } from './layouts/nav-layout/nav-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout/simple-layout.component';
import { NoNavLayoutComponent } from './layouts/no-nav-layout/no-nav-layout.component';
import { throwIfAlredyLoaded } from './module-import-guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    NavLayoutComponent,
    SimpleLayoutComponent,
    NoNavLayoutComponent,
    NavigationComponent,
    DashboardComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
  ],
  exports: [AppRoutingModule, MaterialModule, HeaderComponent],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
  ) {
    throwIfAlredyLoaded(parentModule, 'CoreModule');
  }
}
