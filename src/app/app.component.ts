import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  val1: number;

  val2: number = 3;

  val3: number = 5;

  val4: number = 5;

  val5: number;

  msg: string;

  onRate() {
    console.log(this.val1);
  }
}
