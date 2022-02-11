import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numbers(i){
    return new Array(i)
  }
  thisnumber  = 0;
  isApplied = false

  divide(thisnumber:number){
    this.thisnumber = thisnumber;
    this.isApplied = true;
  }

  clear(){
    this.isApplied=false
    this.thisnumber=0
  }

}
