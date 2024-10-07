import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AdminModule } from './admin/admin.module';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { HomeComponent } from './ui/components/home/home.component';
import { UiModule } from './ui/ui.module';
import { DeleteDirectiveDirective } from './general/directives/delete-directive.directive';
import { MatDialogModule} from '@angular/material/dialog';
import { DeleteDialogComponent } from './general/dialogs/delete-dialog/delete-dialog.component';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { InputsModule } from './ui/components/inputs/inputs.module';
import { ReactiveFormsModule } from '@angular/forms';
import {JwtModule} from '@auth0/angular-jwt';
import {GoogleLoginProvider, GoogleSigninButtonDirective, SocialAuthServiceConfig, SocialLoginModule} from '@abacritt/angularx-social-login';
import { HttpHandleErrorsService } from './general/interceptors/http-handle-errors.service';

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
    MatDialogModule,
    InputsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:()=>localStorage.getItem("Token"),
        allowedDomains:["http://localhost:5107/"]
      }
    }),
    SocialLoginModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    {provide:"BaseURL",useValue:"http://localhost:5107/api/"},
    {
      provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider("262920429946-tc0ngbgf5fo46bmi3u0efvu1932o2tbt.apps.googleusercontent.com")
          }
        ],
        onError: err => console.log(err)
      } as SocialAuthServiceConfig
    },
    {provide:HTTP_INTERCEPTORS,useClass:HttpHandleErrorsService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
