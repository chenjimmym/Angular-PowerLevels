import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class SaiyanComponent implements OnInit {

  @Input() power;

  constructor() { }

  ngOnInit() {
    this.power=0;
  }

  ngOnChanges() {
    this.power *= 10;
  }

}
