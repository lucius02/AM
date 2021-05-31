import {Component} from '@angular/core';
import {ModelAfspraak} from '../model/model.afspraak';

@Component({
  selector: 'app-tab2',
  templateUrl: `tab2.page.html`,
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    allowTouchMove: false
  };

  consulent = [];
  date = [];
  naam = [];
  email = [];
  nummer = [];
  comment = [];

  model = new ModelAfspraak(this.consulent, this.date, this.naam, this.email, this.nummer, this.comment);

  submitted = false;

  onSubmit() { this.submitted = true; }
}
