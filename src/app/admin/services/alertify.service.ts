import { Injectable } from '@angular/core';
import { AlertifyOptionsModel } from '../models/alertify-options-model';
declare let alertify:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  handle(options:Partial<AlertifyOptionsModel>){
    
    alertify.set('notifier','delay',options.Delay);

    alertify.set('notifier','position',options.Position);
    
    alertify[options.Method](options.Message);
  }

  dismissAll(){
    alertify.dismissAll();
  }
}
