import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  count = 0;
  constructor() { }

  ngOnInit(): void {
  }
  increment() {
    this.count++
  }
  decrement() {
    this.count--
  }

}
