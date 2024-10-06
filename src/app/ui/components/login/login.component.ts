import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApplicantServiceService } from '../../../general/componentServices/applicant-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialAuthService, SocialUser, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private service:ApplicantServiceService,
    private router:Router,
    private socialAuthService: SocialAuthService,
    private httpClient:HttpClient
  ) {
    this.socialAuthService.authState.subscribe((user: SocialUser) => {
      console.log(user);
      httpClient.post<any>("http://localhost:5107/api/User/googleLogin", user)
      .subscribe(response =>{
        debugger;
        localStorage.setItem("Token",response.data);
        this.service.returnUrl();
      },
    (error:HttpErrorResponse)=>{
      console.log(error);
    })
    });
  }

  Token:string;
  
  
   activatedRoute:ActivatedRoute=inject(ActivatedRoute);
  
  applicantForm:FormGroup=new FormGroup(
    {
      name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
      password:new FormControl(null)
    }
  );

  async onSubmit(){
    debugger;
    this.service.logIn(this.applicantForm.value);
  }

  
}
