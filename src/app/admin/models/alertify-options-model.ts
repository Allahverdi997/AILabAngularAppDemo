import { AlertifyMethods } from "../enums/alertify-methods";
import { AlertifyPositions } from "../enums/alertify-positions";


export class AlertifyOptionsModel{
   Method:AlertifyMethods=AlertifyMethods.Notify;
   Message:string;
   Delay:number=10;
   Position:AlertifyPositions=AlertifyPositions.Bottom_center;
}
