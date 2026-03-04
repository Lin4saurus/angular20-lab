import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  factoryName = 'Fábrica Central';
  isActive = true;
  widthSize = 200;
//---------------------------------------------------------
  counter = 0;

  increase() {
    this.counter++;
  }
//---------------------------------------------------------

}