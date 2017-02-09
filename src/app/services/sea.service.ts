import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { SeaData } from './sea-data';
import { Sea } from '../models/sea';

@Injectable()
export class SeaService {
  private seaUrl = 'app/sea';  // URL to web API

  constructor (private http: Http) {}

  getSea (): Observable<Sea[]> {
    return this.http.get(this.seaUrl)
                    .map(this.extractData)
                    
  }

  // updateService(url:string, param: any): Observable<any> {
  //   let body = JSON.stringify(param);
  //   return this.http
  //       .put('app/heroes'/*hero.id/count[i]+ param*/, body)
  //       .map(this.extractData);
  //   }   

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
}