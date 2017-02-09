// Observable Version
import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Form } from './forms';

@Injectable()
export class FormsService {
  private formsUrl = 'app/forms'; 

  constructor (private http: Http) {}

  getForms (): Observable<Form[]> {
    return this.http.get(this.formsUrl)
                    .map(this.extractData)
                    
  }

addForm (text: string): Observable<Form> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.formsUrl, { text }, options)
                    .map(this.extractData);
  }


  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
}