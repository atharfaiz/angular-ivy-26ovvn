import { Component, VERSION } from '@angular/core';
import { Candidate } from './candidate';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

 
  constructor() {
   
  
  }
}
