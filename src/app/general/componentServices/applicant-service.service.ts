import { inject, Injectable } from '@angular/core';
import { HttpclientService } from '../services/httpclient.service';
import { ArticleModel } from '../componentModels/ArticleModel';
import { firstValueFrom, lastValueFrom, Observable } from 'rxjs';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ApplicantModel } from '../componentModels/ApplicantModel';
import { ApplicantInsertModel } from '../componentModels/ApplicantInsertModel';
import { AlertifyService } from '../../admin/services/alertify.service';
import { ApplicantErrorsModel } from '../componentModels/ApplicantErrorsModel';
import { LoginModel } from '../models/loginModel';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApplicantServiceService {

  constructor(private httpClient:HttpclientService,private router:Router) { }

  async getApplicantsWithPagination(datasize:number,page:number,successCallback?:()=>void):Promise<ApplicantModel[]>
  {
    const subscribe$ =this.httpClient.get<ApplicantModel[]>({
      controller:`Applicant${'/pagination?dataSize='+datasize+`&page=`+page}`,
    });

    const promiseData=lastValueFrom(subscribe$);
    
    promiseData
    .then(values=>{
      successCallback();
    })
    .catch((errorResponse:HttpErrorResponse)=>{
        console.log(errorResponse);
    })  

    return await promiseData;
  }

  async getApplicants():Promise<ApplicantModel[]>
  {
    const subscribe$ =this.httpClient.get<ApplicantModel[]>({
      controller:'Applicant',
    });

    const promiseData=lastValueFrom(subscribe$);
    
    promiseData
    .then(values=>{
    })
    .catch((errorResponse:HttpErrorResponse)=>{
        console.log(errorResponse);
    })  

    return await promiseData;
  }

  async add(model:FormData,successCallback?:()=>void,failedCallBack?:(errorsModel:ApplicantErrorsModel)=>void):Promise<void>
  {
    const subscribe$=this.httpClient.post<any>({
      controller:"Applicant",
      headers:new HttpHeaders({"responseType":"blob"})
    },model);
    debugger;

    subscribe$.subscribe(d=>{
      successCallback();
    },
  (error:HttpErrorResponse)=>{
    var _error:ApplicantErrorsModel =error.error.errors;

    var message="";

    console.log(message);
    failedCallBack(_error);
  })
  }

  async delete(id:number,successCallBack:()=>void){
    this.httpClient.delete({
      controller:`Applicant?id=${id}`
    }).subscribe(response=>{
        successCallBack();
    },
      (errorResponse:HttpErrorResponse)=>{
        console.log(errorResponse);
      }
    );
  }

  async logIn(model:LoginModel){
     const obs$=this.httpClient.post({
      controller:"User",
      action:"login"
     },model);
     debugger;

     obs$.subscribe(
      (response)=>{
        localStorage.setItem("Token",response.data.accessToken);
        localStorage.setItem("RefreshToken",response.data.refreshToken);
        this.returnUrl();
      },
      (error:HttpErrorResponse)=>{
        console.log(error);
      }
    );
  }

  getToken(){
      debugger;
      const accessToken:string = localStorage.getItem("Token");
      const refreshToken:string = localStorage.getItem("RefreshToken");
      
      const model={accessToken:accessToken,refreshToken:refreshToken};

      const obs$=this.httpClient.post({
        controller:"User",
        action:"getToken"
      },model);

      obs$.subscribe(
        (response)=>{
          localStorage.setItem("Token",response.accessToken);
          localStorage.setItem("RefreshToken",response.refreshToken);
          this.returnUrl();
        },
        (error:HttpErrorResponse)=>{
          console.log(error);
        }
      );

  }

  url:string;
  activatedRoute:ActivatedRoute=inject(ActivatedRoute);

  returnUrl(){
    
    this.url=this.activatedRoute.snapshot.queryParams["returnUrl"];

    if(this.url!=null && this.url!="")
    {
      this.url=this.url.replace("/","")

      this.router.navigate([this.url]);
    }

  }
}
