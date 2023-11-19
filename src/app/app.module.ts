import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppComponent } from './app.component';
import { Header1Component } from './header1/header1.component';
import { HomeComponent } from './home/home.component';
import { SwiperComponent } from './swiper/swiper.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent,
    Header1Component,
    HomeComponent,
    SwiperComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent,
    LeaveFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})




export class AppModule { 
  
}
