import { NONE_TYPE } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { AccountAddComponent } from './components/account-add/account-add.component';
import { AccountUpdateComponent } from './components/account-update/account-update.component';
import { AccountComponent } from './components/account/account.component';
import { CreditComponent } from './components/credit/credit.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { LoginGuard } from './components/guards/login.guard';
import { LoginComponent } from './components/login/login.component';
import { NaviComponent } from './components/navi/navi.component';
import { RegisterComponent } from './components/register/register.component';
import { UserInformationComponent } from './components/user-information/user-information.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path:"accounts",component:AccountComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:LoginComponent},
  {path:"account/add",component:AccountAddComponent,canActivate:[LoginGuard]},
  {path:"account/update",component:AccountUpdateComponent,canActivate:[LoginGuard]},
  {path:"register",component:RegisterComponent},
  {path:"credits",component:CreditComponent},
  {path:"account/add/accounts",component:AccountComponent,canActivate:[LoginGuard]},
  {path:"user",component:UserComponent},
  {path:"customer/add",component:CustomerAddComponent,canActivate:[LoginGuard]},
  {path:"user/info",component:UserInformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
