import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { AboutComponent } from './about/about.component';
import { DashboardService } from './services/dashboard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectComponent } from './project/project.component';
import { ProductsFormComponent } from './products/products-form/products-form.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CategoriesService } from '@bluebits/products';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ColorPickerModule } from 'primeng/colorpicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { EditorModule } from 'primeng/editor';
import { TagModule } from 'primeng/tag';
import { InputMaskModule } from 'primeng/inputmask';
import { FieldsetModule } from 'primeng/fieldset';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';
import { LoginComponent } from '../login/login.component';
import { ProjectIDUniqueValidatorDirective } from './services/project-idunique-validator.directive';
import { ClientLocationStatusValidatorDirective } from './services/client-location-status-validator.directive';
import { TeamSizeValidatorDirective } from './services/team-size-validator.directive';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { CanActivateGuardService } from './services/can-activate-guard.service';

const UX_MODULE = [
  CardModule,
  ToastModule,
  InputTextModule,
  TableModule,
  ToolbarModule,
  ButtonModule,
  ConfirmDialogModule,
  ColorPickerModule,
  InputNumberModule,
  DropdownModule,
  InputTextareaModule,
  InputSwitchModule,
  EditorModule,
  TagModule,
  InputMaskModule,
  FieldsetModule
];

/* const routes: Routes = [
  {path: "", redirectTo:"404", pathMatch:"full"},
  {path: "404", component: AboutComponent },
  {path: "login", component: LoginComponent },
  {path: "my-profile", component: MyProfileComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "projects", component: ProjectComponent, canActivate: [ CanActivateGuardService ], data: { expectedRole: "Employee"}  },
  {path: "categories/form", component: CategoriesFormComponent, canActivate: [ CanActivateGuardService ], data: { expectedRole: "Admin" }  },
  {path: "products/form", component: ProductsFormComponent, canActivate: [ CanActivateGuardService ], data: { expectedRole: "Admin" }  },
  {path: "categories/form/:id", component: CategoriesFormComponent, canActivate: [ CanActivateGuardService ], data: { expectedRole: "Admin" }  },
  {path: "products/form/:id", component: ProductsFormComponent, canActivate: [ CanActivateGuardService ], data: { expectedRole: "Admin" }  },
  {path: "categories", component: CategoriesListComponent, canActivate: [ CanActivateGuardService ], data: { expectedRole: "Admin" }  },
  {path: "products", component: ProductsListComponent, canActivate: [ CanActivateGuardService ], data: { expectedRole: "Admin" }  },
  {path: '**', redirectTo: '404'}
];

 */
@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    MyProfileComponent,
    AboutComponent,
    ProjectComponent,
    ProductsFormComponent,
    ProductsListComponent,
    CategoriesListComponent,
    CategoriesFormComponent,
    TeamSizeValidatorDirective,
    ClientLocationStatusValidatorDirective,
    ProjectIDUniqueValidatorDirective
  ],
  imports: [ 
    CommonModule, 
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    /* RouterModule.forRoot(routes, { initialNavigation: 'disabled' }), */
    ReactiveFormsModule,
    ...UX_MODULE
  ],
  exports: [ 
    DashboardComponent, 
    MyProfileComponent, 
    AboutComponent, 
    ProjectComponent,    
    ProductsFormComponent,
    ProductsListComponent,
    LoginComponent,
    TeamSizeValidatorDirective,
    ClientLocationStatusValidatorDirective,
    ProjectIDUniqueValidatorDirective 
   ],
  providers: [ 
    DashboardService,
    CategoriesService,
    MessageService,
    ConfirmationService,
   ]
})
export class AdminModule
{
}
