import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Dynamic Add Fields';
  values = [];
  ngOnInit() {
    console.log(this.values)
  }

  removevalue(i){
    this.values.splice(i,1);
  }
public c=0;
  addvalue(){
    this.values.push({});
    this.c++;
    console.log(this.values)
  }
}
