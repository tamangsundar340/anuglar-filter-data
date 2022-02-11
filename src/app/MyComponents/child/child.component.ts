import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() object_list: any;
  @Input() object_type_fired: any;

  ngOnInit(): void {
    console.log("*************");
    console.log("Object receive in child ="+this.object_type_fired);
    console.log("*************");
  }

}
