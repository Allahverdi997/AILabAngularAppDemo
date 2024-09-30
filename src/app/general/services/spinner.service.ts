import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerSelections } from '../models/spinner-selections';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(private spinner:NgxSpinnerService) { }

  show(selection:SpinnerSelections){
    this.spinner.show(selection);
  }

  hideWithTime(selection:SpinnerSelections,time:number){

    setTimeout(() => {
      this.spinner.hide(selection);
    }, time);
  }

  hide(selection:SpinnerSelections){
      this.spinner.hide(selection);
  }
}
