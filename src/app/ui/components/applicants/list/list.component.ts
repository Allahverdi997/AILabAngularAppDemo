import { Component, OnInit, ViewChild } from '@angular/core';
import { ApplicantServiceService } from '../../../../general/componentServices/applicant-service.service';
import { SpinnerService } from '../../../../general/services/spinner.service';
import { AlertifyService } from '../../../../admin/services/alertify.service';
import { ApplicantModel } from '../../../../general/componentModels/ApplicantModel';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SpinnerSelections } from '../../../../general/models/spinner-selections';
import { AlertifyMethods } from '../../../../admin/enums/alertify-methods';
import { AlertifyPositions } from '../../../../admin/enums/alertify-positions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  constructor(private service:ApplicantServiceService,
    private spinner:SpinnerService,
    private alertify:AlertifyService
   ) {    
   }

   data:ApplicantModel[]=null;
   datas:Array<ApplicantModel>=null;

   displayedColumns: string[] = ['id', 'name', 'description', 'surname','delete'];
   dataSource: MatTableDataSource<ApplicantModel>=null;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  async ngOnInit() {
    this.spinner.show(SpinnerSelections.ball_scale_multiple);

    this.getApplicants();
  }

  async getApplicants(){
    this.spinner.show(SpinnerSelections.ball_scale_multiple);

    this.data=await this.service.getApplicantsWithPagination(
      this.paginator ? this.paginator.pageSize : 5,
      this.paginator ? this.paginator.pageIndex : 1,()=>{
      this.alertify.handle({
        Message:"Datalar yuklenir zehmet olmasa gozleyin",
        Method:AlertifyMethods.Success,
        Position:AlertifyPositions.Top_center
      }),
      this.spinner.hide(SpinnerSelections.ball_scale_multiple);
    });

    this.datas= await this.service.getApplicants();

    this.dataSource = new MatTableDataSource<ApplicantModel>(this.data);
    this.paginator.length=this.datas.length;
  }

  pagination(){
    this.getApplicants();
  }
}
