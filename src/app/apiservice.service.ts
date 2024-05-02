import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  private url = [{id:1, email: 'example@gmail.com', password: 'example12000', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkJ1bnlvZCIsImlhdCI6MTUxNjIzOTAyMn0.mtXxeCWqBgieKtmX8cxb5DkrYt3gqdjJ2MMPy6pzP08' }]
  constructor(private http: HttpClient) { }
  Urlapi(email: string, password: string): Observable<any> {
    const urlapi = this.url.find(u => u.email === email && u.password === password);
    if (urlapi) {
      return of({ succes: true, token: urlapi.token }).pipe(delay(1000))
    }
    else {
      return of({ succes: false }).pipe(delay(1000));
    }
  }
  RegisterUser(email: string, password: string): Observable<any> {
    return of({ succes: true }).pipe(delay(1000));
  }
}
