import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApplicantComponent } from './applicant/applicant.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { InputsModule } from '../inputs/inputs.module';
import { TextinputComponent } from '../inputs/textinput/textinput.component';
import { DeleteDirectiveDirective } from '../../../general/directives/delete-directive.directive';



@NgModule({
  declarations: [
    ApplicantComponent,
    ListComponent,
    AddComponent,
    DeleteDirectiveDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:ApplicantComponent}
    ]),
    MatTableModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    InputsModule
  ]
})
export class ApplicantsModule { }
