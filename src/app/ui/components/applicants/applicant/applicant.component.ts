import { Component, OnInit, viewChild, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrl: './applicant.component.css'
})
export class ApplicantComponent  {

  constructor() {
  }

  @ViewChild(ListComponent) listComponent;

  refreshApplicants($event:any){
    debugger;
    this.listComponent.getApplicants();
  }

}
