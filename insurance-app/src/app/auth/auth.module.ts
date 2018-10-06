import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [CommonModule, AuthRoutingModule],
  declarations: [LoginComponent, SignupComponent, AuthComponent],
})
export class AuthModule {}
