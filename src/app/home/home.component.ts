import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  stagger, keyframes, query,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({opacity:0}),
        animate('2s ease-out', style({opacity:1}))
      ])
    ])
  ],
})

export class HomeComponent implements OnInit  {
  constructor() { }

  ngOnInit() {

  }
}
