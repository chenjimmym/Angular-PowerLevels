import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyantwo',
  templateUrl: './supersaiyantwo.component.html',
  styleUrls: ['./supersaiyantwo.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class SupersaiyantwoComponent implements OnInit {
  @Input() power;
  
    constructor() { }
  
    ngOnInit() {
      this.power = 0;
    }
  
    ngOnChanges() {
      this.power *= 150;
    }
  
  }