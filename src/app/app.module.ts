import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/account/account.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountAddComponent } from './components/account-add/account-add.component';
import { AccountUpdateComponent } from './components/account-update/account-update.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthInterceptor } from './components/interceptor/auth.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CreditComponent } from './components/credit/credit.component';
import { UserComponent } from './components/user/user.component';
import { CreditUpdateComponent } from './components/credit-update/credit-update.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { UserInformationComponent } from './components/user-information/user-information.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    LoginComponent,
    AccountComponent,
    AccountAddComponent,
    AccountUpdateComponent,
    RegisterComponent,
    CreditComponent,
    UserComponent,
    CreditUpdateComponent,
    CustomerAddComponent,
    UserInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      
      positionClass: 'toast-bottom-right',
      
    }),
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
