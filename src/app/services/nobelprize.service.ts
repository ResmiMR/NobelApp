import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NobelprizeService {

  constructor(private http:HttpClient) { }

  getNobelData():Observable<any>{
    return this.http.get("http://localhost:4500/prizes");
  }

}
