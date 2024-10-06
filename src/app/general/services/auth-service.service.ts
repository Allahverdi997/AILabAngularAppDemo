import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private jwtService:JwtHelperService) { }

  checkUser():boolean{

    let token:string=localStorage.getItem("Token");

    let isAllowed:boolean=false;

    try {

      let isExpired=this.jwtService.isTokenExpired(token);

      if((token!=null || token != "") && !isExpired)
      {
        isAllowed=true;
      }
    
    } catch (error) {
      isAllowed=false;
    } 
    
    return isAllowed;

  }
}
