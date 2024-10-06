import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../admin/components/components.module';
import { LayoutModule } from '../admin/layout/layout.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LayoutuserinterfaceModule } from './layoutuserinterface/layoutuserinterface.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { AddComponent } from './components/applicants/add/add.component';
import { InputsModule } from './components/inputs/inputs.module';
import { TextinputComponent } from './components/inputs/textinput/textinput.component';
import { LoginComponent } from './components/login/login.component';
import {  GoogleSigninButtonModule } from '@abacritt/angularx-social-login';



@NgModule({
  declarations: [
  
    LoginComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    LayoutModule,
    LayoutuserinterfaceModule,
    RouterModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    InputsModule,
    GoogleSigninButtonModule
  ]
})
export class UiModule { }
