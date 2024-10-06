import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import {FormGroup,FormControl,FormArray,FormBuilder, Validators} from '@angular/forms';
import { AlertifyService } from '../../../../admin/services/alertify.service';
import { AlertifyMethods } from '../../../../admin/enums/alertify-methods';
import { AlertifyPositions } from '../../../../admin/enums/alertify-positions';
import { ApplicantServiceService } from '../../../../general/componentServices/applicant-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  constructor(private alertify:AlertifyService,
              private service:ApplicantServiceService) {
  }

  @Output() dataInserted:EventEmitter<string>=new EventEmitter();

  applicantForm:FormGroup=new FormGroup(
    {
      name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
      surname:new FormControl(null),
      mail:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.email]),
      phone:new FormControl(null,[Validators.required,Validators.minLength(3)]),
      description:new FormControl(null,[Validators.required,Validators.minLength(3)]),
      companyName:new FormControl(null,[Validators.required,Validators.minLength(3)]),
      serviceId:new FormControl(null,[Validators.required]),
      applicantType:new FormControl(null,[Validators.required]),
      file:new FormControl(null)
    }
  );

  async onSubmit(){
     if(this.applicantForm.invalid)
        this.alertify.handle({
           Message:"Urun eklemede problem var. Z o validasyona diqqet edin!",
           Method:AlertifyMethods.Success,
           Position:AlertifyPositions.Top_center})
     else
     {
      debugger;

         const formData:FormData=new FormData();
         formData.append("file", this.applicantForm.get("file").value);
         formData.append("name",this.applicantForm.get("name").value);
         formData.append("surname",this.applicantForm.get("surname").value);
         formData.append("mail",this.applicantForm.get("mail").value);
         formData.append("phone",this.applicantForm.get("phone").value);
         formData.append("description",this.applicantForm.get("description").value);
         formData.append("companyName",this.applicantForm.get("companyName").value);
         formData.append("serviceId",this.applicantForm.get("serviceId").value);
         formData.append("applicantType",this.applicantForm.get("applicantType").value);
         var model = Object.assign({},formData);
         console.log(model);
         await this.service.add(formData,
         ()=>
          {
          this.alertify.handle({
            Message:"Urun eklendi!",
            Method:AlertifyMethods.Success,
            Position:AlertifyPositions.Top_center});
            this.dataInserted.emit("Data Eklendi");
         },
         (_errors)=>{
          this.alertify.handle(
            {
              Message:"eta bas verdi!",
              Method:AlertifyMethods.Error,
              Position:AlertifyPositions.Top_center} 
         );
         debugger;
         this.applicantForm.get('mail').setErrors({"custom":this.getMessage(_errors.Mail)});
         this.applicantForm.get('applicantType').setErrors({"custom":this.getMessage(_errors.ApplicantType)});
        })
     }
       
  }

  getMessage(array:Array<string>){
     
    var message:string="";
    if(array!=null){
      for (let index = 0; index < array.length; index++) {
          message+=array[index];
      }
    }
    return message;
  }

//#region FileUpload

    

    uploadFile(event){
      debugger;
      console.log(event);
      const _file:File=(event.target as HTMLInputElement).files[0];
      console.log(_file);

      this.applicantForm.patchValue({
        file:_file
      });

      this.applicantForm.get("file").updateValueAndValidity();
    }
//#endregion

}
