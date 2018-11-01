import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
  animations: [
    trigger('sidebartrigger',[
      state('open', style({left: '0',})),
      state('close',style({left: '-13em',})),
      transition('open=> close',[animate('0.5s ease-in' )]),
      transition('close=>open',[animate('0.5s ease-out' )]),
    ]),
  ],
})
export class MenubarComponent implements OnInit {
  isOpen: boolean=false;

  constructor() { }

  ngOnInit() {
  }
  menuClicked(){
    this.isOpen = !this.isOpen;
  }
}
