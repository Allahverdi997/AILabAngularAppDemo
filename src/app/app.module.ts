import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AdminModule } from './admin/admin.module';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { HomeComponent } from './ui/components/home/home.component';
import { UiModule } from './ui/ui.module';
import { DeleteDirectiveDirective } from './general/directives/delete-directive.directive';
import { MatDialogModule} from '@angular/material/dialog';
import { DeleteDialogComponent } from './general/dialogs/delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    UiModule,
    AdminModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    {provide:"BaseURL",useValue:"http://localhost:5107/api/"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
