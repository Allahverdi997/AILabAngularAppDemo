import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpStatusCode } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { AlertifyService } from '../../admin/services/alertify.service';
import { AlertifyMethods } from '../../admin/enums/alertify-methods';
import { SpinnerService } from '../services/spinner.service';
import { SpinnerSelections } from '../models/spinner-selections';
import { ApplicantServiceService } from '../componentServices/applicant-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpHandleErrorsService implements HttpInterceptor {

  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {

    const alertifyService=inject(AlertifyService);
    const spinner=inject(SpinnerService);
    const service=inject(ApplicantServiceService);

    return next.handle(req).pipe(catchError((error:HttpErrorResponse)=>{

debugger;

      switch (error.status) {
        case HttpStatusCode.BadRequest:
          alertifyService.handle({
             Message:"Kotu request",
             Method:AlertifyMethods.Error
          });
          spinner.hide(SpinnerSelections.ball_scale_multiple);
          break;
          case HttpStatusCode.NotFound:
            alertifyService.handle({
              Message:"Sayfa bulunamadi",
              Method:AlertifyMethods.Error
           });
           spinner.hide(SpinnerSelections.ball_scale_multiple);
          break;
          case HttpStatusCode.Unauthorized:
            console.log("refreshToken");   

             service.getToken();

            alertifyService.handle({
              Message:"Yetkiniz yok",
              Method:AlertifyMethods.Error
           });
           spinner.hide(SpinnerSelections.ball_scale_multiple);
          break;
          case HttpStatusCode.InternalServerError:
            alertifyService.handle({
              Message:"Server hatasi",
              Method:AlertifyMethods.Error
           });
           spinner.hide(SpinnerSelections.ball_scale_multiple);
          break;
        default:
          alertifyService.handle({
            Message:error.message,
            Method:AlertifyMethods.Error
         });
         spinner.hide(SpinnerSelections.ball_scale_multiple);
          break;
      }

       return of(error);
    }));
  }
}
