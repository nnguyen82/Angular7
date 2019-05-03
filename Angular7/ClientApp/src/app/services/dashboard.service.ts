import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DashBoardService {
  private Url = 'api/dashboard/';

  constructor(private http: HttpClient) {
  }

  GetDashBoard(): Observable<any> {
    return this.http.get<any>(this.Url + 'GetDashBoard');
  }

}


