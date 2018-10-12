import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { NavLayoutComponent } from './layouts/nav-layout/nav-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout/simple-layout.component';
import { NoNavLayoutComponent } from './layouts/no-nav-layout/no-nav-layout.component';
import { throwIfAlredyLoaded } from './guards/module-import.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { ErrorPageComponent } from './containers/error-page/error-page.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CoreService } from './services/core.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

export const COMPONENTS = [
  NavLayoutComponent,
  SimpleLayoutComponent,
  NoNavLayoutComponent,
  NotFoundPageComponent,
  ErrorPageComponent,
  HomePageComponent,
  HeaderComponent,
  NavComponent,
  FooterComponent,
  NavItemComponent,
  ToolbarComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
  ],
  declarations: [COMPONENTS],
  exports: [AppRoutingModule, MaterialModule, COMPONENTS],
  providers: [CoreService],
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
