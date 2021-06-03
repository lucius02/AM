import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AfspraakService {
  constructor(private httpClient: HttpClient) { }

  getAfspraak() {
    return this.httpClient.get('http://31.14.96.253/recipes');
  }
}
