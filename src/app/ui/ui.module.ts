import { NgModule } from '@angular/core';
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



@NgModule({
  declarations: [
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
    MatButtonModule
  ]
})
export class UiModule { }
