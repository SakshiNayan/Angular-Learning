import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit() {

  }

  counter:number=0;
  i=0
  plus(){
    if(this.i !=20){
      this.i++;
      this.counter = this.i;
    }
  }

  minus(){
    if(this.i !=0){
      this.i--;
      this.counter = this.i
    }
  }
}