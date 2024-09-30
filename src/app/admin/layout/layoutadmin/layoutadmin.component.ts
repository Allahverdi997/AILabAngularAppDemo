import { Component, OnInit } from '@angular/core';
import { SpinnerSelections } from '../../../general/models/spinner-selections';
import { SpinnerService } from '../../../general/services/spinner.service';

@Component({
  selector: 'app-layoutadmin',
  templateUrl: './layoutadmin.component.html',
  styleUrl: './layoutadmin.component.css'
})
export class LayoutadminComponent implements OnInit {
  
  constructor(private spinner:SpinnerService) {
  }
  
  ngOnInit() {
    this.spinner.show(SpinnerSelections.ball_scale_multiple);

    this.spinner.hideWithTime(SpinnerSelections.ball_scale_multiple,4000);
  }
}
