import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  powerLevel: number;
  power;
  calPower(){
    this.power = this.powerLevel;
    console.log(this.powerLevel);
  }
}
