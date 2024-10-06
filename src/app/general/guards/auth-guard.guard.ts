import { ActivatedRoute, CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { inject, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const authGuardGuard: CanActivateFn = (route, state) => {

  debugger;
  const service:AuthServiceService=inject(AuthServiceService);
  const router:Router = inject(Router);
  const toastr:ToastrService = inject(ToastrService);

  let result=service.checkUser();

  if(!result)
  {
    debugger;
    router.navigate(["login"],{queryParams:{returnUrl:state.url}})
    toastr.error("Giris basarisiz","Giris");
    return false;
  }

  toastr.show("Giris basarili","Giris");

  return true;
};
