import { Injectable } from '@angular/core';
import { HttpclientService } from '../services/httpclient.service';
import { ArticleModel } from '../componentModels/ArticleModel';
import { firstValueFrom, lastValueFrom, Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ApplicantModel } from '../componentModels/ApplicantModel';
import { ApplicantInsertModel } from '../componentModels/ApplicantInsertModel';
import { AlertifyService } from '../../admin/services/alertify.service';
import { ApplicantErrorsModel } from '../componentModels/ApplicantErrorsModel';

@Injectable({
  providedIn: 'root'
})
export class ApplicantServiceService {

  constructor(private httpClient:HttpclientService) { }

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

  async add(model:ApplicantInsertModel,successCallback?:()=>void,failedCallBack?:(errorsModel:ApplicantErrorsModel)=>void):Promise<void>
  {
    const subscribe$=this.httpClient.post<ApplicantInsertModel>({
      controller:"Applicant"
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
}
