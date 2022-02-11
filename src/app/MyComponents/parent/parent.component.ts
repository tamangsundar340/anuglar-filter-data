import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  object_list = [
    {"name": "Green", "type": "Color"},
    {"name": "Dog", "type": "Animal"},
    {"name": "Apple", "type": "Fruit"},
    {"name": "Mango", "type": "Fruit"},
    {"name": "Yellow", "type": "Color"},
    {"name": "Cat", "type": "Animal"},
    {"name": "Blue", "type": "Color"},
    {"name": "Red", "type": "Color"},
    {"name": "Cow","type": "Animal"},
    {"name": "Goat","type": "Animal"},
    {"name": "Black", "type": "Color"},
    {"name": "Banana","type": "Fruit"},
    {"name": "Cherry","type": "Fruit"}
  ]

  object_type_fired = "default"
  constructor() { }

  ngOnInit(): void {
  }
  
  obSubmit(object_type:string){
    this.object_type_fired= object_type;
    console.log("Object type receive = "+object_type)
    console.log("Object type after click => "+this.object_type_fired)
  }

}
