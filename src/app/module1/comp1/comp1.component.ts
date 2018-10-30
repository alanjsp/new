import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor() { }
x=2;
y=true;
b;
  ngOnInit() {
console.log("cdsa")
if (this.x)
this.y=!this.y 
else
console.log(this.y)
    
console.log(this.y)
console.log("cdssssssssssssssssssssssssssssssa")
  }

}
