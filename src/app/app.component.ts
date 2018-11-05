import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { extend } from 'webdriver-js-extender';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public constructor(private titleSv: Title){
  }
  public setTitle(newTitle: string){
    this.titleSv.setTitle(newTitle);
  }

  ngOnInit(){
    this.setTitle('HomePage');
  }
}
