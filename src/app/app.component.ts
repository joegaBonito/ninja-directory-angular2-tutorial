import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app';
  name = 'Joe';
  ninja = {
    name: "Yoshi",
    belt: "Black"
  };
  yell(e) {
    alert("I am yelling");
    console.log(e);
  }
}
