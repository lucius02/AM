import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {AfspraakService} from '../Services/afspraak.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  afspraak: Observable<any>;


  constructor(private afspraakService: AfspraakService) {}

  ngOnInit() {
    this.afspraak = this.afspraakService.getAfspraak();
  }
}
