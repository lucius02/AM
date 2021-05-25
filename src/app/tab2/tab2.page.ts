import {Component} from '@angular/core';
import { Slides } from 'ionic-angular/umd';

@Component({
  selector: 'app-tab2',
  templateUrl: `tab2.page.html`,
  styleUrls: ['tab2.page.scss']
})

export class SlideExample {
  // Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    allowTouchMove: false
  };
  constructor() {}
}
