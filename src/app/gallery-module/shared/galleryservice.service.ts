import { result } from './../gallery/result';
import { Http, Headers, Response, RequestOptions} from '@angular/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GalleryserviceService
// tslint:disable-next-line:one-line
{
    headers: Headers;
    options: RequestOptions;
    private API_URL: string = environment.prismsTopschol;

  constructor(public http: Http)
  // tslint:disable-next-line:one-line
  {
      console.log('Data service connected...');
      this.headers = new Headers({ 'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'});
      this.options = new RequestOptions({ headers: this.headers });
  }

  createService(): Observable<any> {
    // let body = JSON.stringify(param);
    const body = {
           fun_name: 'GetGalleryImages',
           sid: 258
       };

    return this.http
        .post(this.API_URL, body, this.options)
        .map(res => res.json())
        .catch(this.handleError);
    }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg);
      return Observable.throw(errMsg);
  }

  getImages()
  // tslint:disable-next-line:one-line
  {
      console.log('getImages');

      // const headers = new Headers(
      // {
      //     'Content-Type': 'application/json'
      // });

      // const body = {
      //     fun_name: 'GetGalleryImages',
      //     sid:258
      // };

      // return this.http.post(this.API_URL, body,headers).map(res => res.json());
  }

}

