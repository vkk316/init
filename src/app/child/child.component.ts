import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() counter = 0;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      let c = changes
      console.log(c['counter'])
  }

  // @Input()
  // set counter(newValue: number){
  //   console.log('old, newValue', this._counter, newValue)
  //   this._counter = newValue
  // }

  // get counter(){
  //   return this._counter;
  // }

}
