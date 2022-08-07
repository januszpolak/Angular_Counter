import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Counter';

  counterNumber = 0;

  reset(){
    this.counterNumber = 0;
  }

  increse(){
    this.counterNumber = this.counterNumber + 1;
  }

  decrese(){
    this.counterNumber = this.counterNumber - 1;
  }
}
