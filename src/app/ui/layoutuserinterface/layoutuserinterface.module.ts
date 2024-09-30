import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderuiComponent } from './headerui/headerui.component';
import { FooteruiComponent } from './footerui/footerui.component';
import { LayoutuiComponent } from './layoutui/layoutui.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutuiComponent,
    HeaderuiComponent,
    FooteruiComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:"",component:LayoutuiComponent
    }])
  ]
})
export class LayoutuserinterfaceModule { }
