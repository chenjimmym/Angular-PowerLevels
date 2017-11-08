import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyanfour',
  templateUrl: './supersaiyanfour.component.html',
  styleUrls: ['./supersaiyanfour.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class SupersaiyanfourComponent implements OnInit {
  @Input() power;
  
    constructor() { }
  
    ngOnInit() {
      this.power = 0;
    }
  
    ngOnChanges() {
      this.power *= 500;
    }
  
  }