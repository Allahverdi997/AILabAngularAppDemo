import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-textinput',
  templateUrl: './textinput.component.html',
  styleUrl: './textinput.component.css'
})
export class TextinputComponent implements OnInit {
  
  @Input() control:FormControl;
  @Input() controlName:string;
  
  ngOnInit(): void {
  }
  


}
