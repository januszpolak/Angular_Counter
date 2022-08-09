import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Counter';

  // set counter to 0
  counterNumber = 0;

  // reset counter
  reset(){
    this.counterNumber = 0;
  }

  // increse counter add 1
  increse(){
    this.counterNumber = this.counterNumber + 1;
  }

  // decrese counter subtract 1
  decrese(){
    this.counterNumber = this.counterNumber - 1;
  }
}
