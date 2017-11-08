import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyanthree',
  templateUrl: './supersaiyanthree.component.html',
  styleUrls: ['./supersaiyanthree.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class SupersaiyanthreeComponent implements OnInit {
  @Input() power;
  
    constructor() { }
  
    ngOnInit() {
      this.power = 0;
    }
  
    ngOnChanges() {
      this.power *= 250;
    }
  
  }