import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  getUserDetails(username, password) {
    // Post these to http
    return this.http.post('/api/auth.php', {
      username,
      password
    }).subscribe(data => {
      console.log(data, 'server')
    })
  }
}
