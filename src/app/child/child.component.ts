import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  _counter = 0;
  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  set counter(newValue: number){
    console.log('old, newValue', this._counter, newValue)
    this._counter = newValue
  }

  get counter(){
    return this._counter;
  }

}
