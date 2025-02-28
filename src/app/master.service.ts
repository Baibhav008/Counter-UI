import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http : HttpClient) { }

  getSingletonCounts():Observable<any>
  {
    return this.http.get('https://localhost:7148/api/Count/singleton');
  }
  getScopedCounts():Observable<any>
  {
    return this.http.get('https://localhost:7148/api/Count/scoped');
  }
  getTransientCounts():Observable<any>
  {
    return this.http.get('https://localhost:7148/api/Count/transient');
  }
}

