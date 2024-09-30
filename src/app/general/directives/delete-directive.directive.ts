import { Directive, ElementRef, EventEmitter, HostListener, inject, Input, model, OnInit, Output, Renderer2, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ApplicantServiceService } from '../componentServices/applicant-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent, DeleteState } from '../dialogs/delete-dialog/delete-dialog.component';
declare var $:any;

@Directive({
  selector: '[appDeleteDirective]'
})
export class DeleteDirectiveDirective implements OnInit{

  @Input() id:number;
  @Output() getApplicantsCallBack:EventEmitter<any>=new EventEmitter<any>();

  constructor(private elementRef:ElementRef,
              private render:Renderer2,
              private service:ApplicantServiceService
  ) {
    var img=this.render.createElement("img");
    img.setAttribute("src","https://img.icons8.com/?size=100&id=102350&format=png&color=000000");
    img.setAttribute("width","25px");
    img.setAttribute("height","25px");

    this.render.appendChild(this.elementRef.nativeElement,img);

    
  }
  ngOnInit(): void {
  }

  @HostListener("click")
  async delete(){
    debugger;
    this.openDialog(()=>{
      var elemnt:HTMLTableCellElement=this.elementRef.nativeElement;
      $(elemnt.parentElement).fadeOut(2000);
      var subscribe$=this.service.delete(this.id,()=>{this.getApplicantsCallBack.emit()})
    });
  }

  readonly dialog = inject(MatDialog);

  openDialog(deleteCallback?:()=>void): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: DeleteState.Yes,
    });

    dialogRef.afterClosed()
    .subscribe((result:DeleteState) => {
      
      console.log(result);
      if (result == DeleteState.Yes) {
        deleteCallback();
      }
    },
  (error:any)=>{console.log(error)});
  }
}
