import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FxapiService {

  url = 'https://api.exchangerate-api.com/v4/latest/GBP'

  constructor(private http: HttpClient) {}

  getFxData():  Observable<any>  {
     return this.http.get<any>(this.url  )
  }

}

