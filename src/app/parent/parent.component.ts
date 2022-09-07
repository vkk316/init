import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  p_counter = 0
  constructor() { }

  ngOnInit(): void {
  }

  update(){
    this.p_counter += 1
  }



}
