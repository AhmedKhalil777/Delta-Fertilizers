import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
  ]
})
export class NavbarComponent implements OnInit {
  scroll:boolean=false;
  constructor() { }
  element ;
  ngOnInit() {
    window.addEventListener('scroll', this.scrolling, true)
  }
  ServiceScroller = () => {
    let sc = this.element.target.scrollingElement.scrollTop;
    if (sc >= 700 && sc <= 1200) {
      return true;
    }
    return false;
  }
  ContactScroller = () => {
    let sc = this.element.target.scrollingElement.scrollTop;
    if (sc >= 1960 ) {
      return true;
    }
    return false;
  }
  HomeScroller = () => {
    let sc = this.element.target.scrollingElement.scrollTop;
    if (sc <= 700) {
      return true;
    }
    return false;
  }

  AboutScroller = () => {
    let sc = this.element.target.scrollingElement.scrollTop;
    if (sc >= 1200 && sc<=1960) {
      return true;
    }
    return false;
  }
  scrolling = (s) => {
    this.element = s;
    
    let sc = s.target.scrollingElement.scrollTop;
    console.log(sc);
    if (sc >= 1000) {
      console.log("Scrollingn 100");
      this.scroll = true
    }
    else{this.scroll=false}
  }


}
