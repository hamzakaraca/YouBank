import { LOCALE_ID, NgModule } from '@angular/core';
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
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ShowWillPayCreditPipe } from './components/pipes/show-will-pay-credit.pipe';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';




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
    UserInformationComponent,
    AdminComponent,
    HomeComponent,
    ShowWillPayCreditPipe,
    UserDeleteComponent,
    ChangePasswordComponent,
    
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
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
