import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApplicantServiceService } from '../../../general/componentServices/applicant-service.service';
import { AuthServiceService } from '../../../general/services/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private service:ApplicantServiceService
  ) {
    
  }

  Token:string;
  
  applicantForm:FormGroup=new FormGroup(
    {
      name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
      password:new FormControl(null)
    }
  );

  async onSubmit(){
    this.service.logIn(this.applicantForm.value);
    this.Token=localStorage.getItem("Token");
 }
}
