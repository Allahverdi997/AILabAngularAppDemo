import { Inject, Injectable } from '@angular/core';
import { HttpClientModel } from '../models/httpClientModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private http:HttpClient,@Inject("BaseURL") private url:string) { }

  get<T>(model:Partial<HttpClientModel>):Observable<T>{

     var completeUrl=this.getUrl(model);

     if(model.headers!=null)
      return this.http.get<T>(completeUrl,{headers: model.headers});

    return this.http.get<T>(completeUrl);
  }

  post<T>(model:Partial<HttpClientModel>,body:Partial<T>):Observable<any>{
    var completeUrl=this.getUrl(model);

    if(model.headers!=null)
      return this.http.post(completeUrl,body,{headers: model.headers});

    return this.http.post(completeUrl,body,{headers : model.headers});
  }

  put<T>(model:Partial<HttpClientModel>,body:Partial<T>){
    var completeUrl=this.getUrl(model);

    this.http.put(completeUrl,body,{headers : model.headers});
  }

  delete<T>(model:Partial<HttpClientModel>):Observable<any>{
    var completeUrl=this.getUrl(model);

    if(model.headers!=null)
       return this.http.delete(completeUrl,{headers : model.headers});

    return this.http.delete(completeUrl);
  }

  private getUrl(model:HttpClientModel):string{
    var completeUrl="";

    if(model.otherFullEndpoint==null){
      completeUrl=this.url+model.controller
      +`${model.action ? `/${model.action}` : ``}`
      +`${model.parameter ? `/${model.parameter}` : ``}`;
    }
    else
       completeUrl=model.otherFullEndpoint;

    return completeUrl;
  }
}
