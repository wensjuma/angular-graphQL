import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  result = {}

  constructor(private data: DataService) {}


  read() {
    this.data.readData()
      .subscribe(
        res => this.result = res,
        err => console.log(err),
      )
  }

  load() {
    this.data.loadData()
      .subscribe(
        res => this.result = res,
        err => console.log(err),
      )
  }

  login() {
    this.data.login('beeman@beeman.nl', 'password')
      .subscribe(
        res => this.result = res,
        err => console.log(err),
      )
  }

}
