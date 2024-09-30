import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutadminComponent } from './layoutadmin/layoutadmin.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutadminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:LayoutadminComponent}
    ])
  ]
})
export class LayoutModule { }
