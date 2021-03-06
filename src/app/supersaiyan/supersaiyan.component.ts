import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyan',
  templateUrl: './supersaiyan.component.html',
  styleUrls: ['./supersaiyan.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class SupersaiyanComponent implements OnInit {

  @Input() power;

  constructor() { }

  ngOnInit() {
    this.power = 0;
  }

  ngOnChanges() {
    this.power *= 90;
  }

}
