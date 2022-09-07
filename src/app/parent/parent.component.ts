import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild(ChildComponent, {static: false})
  child: ChildComponent | undefined // พ่อเกิดลูกไม่เกิดทันที
  constructor() { }

  ngOnInit(): void {
  }

  update(){
    if(this.child){
      this.child.counter += 1;
    }
  }



}
