import { HttpHeaders } from "@angular/common/http";

export class HttpClientModel{
    controller?:string;
    action?:string;
    parameter?:any;

    otherFullEndpoint?:string;
    headers?:HttpHeaders;
}