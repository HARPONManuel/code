import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/admin/about/about.component';
import { AdminModule } from './component/admin/admin.module';
import { CategoriesFormComponent } from './component/admin/categories/categories-form/categories-form.component';
import { CategoriesListComponent } from './component/admin/categories/categories-list/categories-list.component';
import { DashboardComponent } from './component/admin/dashboard/dashboard.component';
import { ProductsFormComponent } from './component/admin/products/products-form/products-form.component';
import { ProductsListComponent } from './component/admin/products/products-list/products-list.component';
import { ProjectComponent } from './component/admin/project/project.component';
import { JwtInterceptorService } from './component/admin/services/jwt-interceptor.service';
import { JwtUnAuthorizedInterceptorService } from './component/admin/services/jwt-un-authorized-interceptor.service';
import { LoginComponent } from './component/login/login.component';
import { MyProfileComponent } from './component/my-profile/my-profile.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AdminModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () =>
        {
          return (sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser") as any).token : null)
        }
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtUnAuthorizedInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
