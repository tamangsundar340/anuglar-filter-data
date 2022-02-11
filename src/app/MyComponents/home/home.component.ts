import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  

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
