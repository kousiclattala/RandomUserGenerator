import { Injectable } from '@angular/core';

// *Importing HttpClient to make web request
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'https://randomuser.me/api';

  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get(this.url);
  }
}
