import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse  } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieBanner } from './models/cookie-banner.model';
import { CookieCategory } from './models/cookie-category.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {}

  getCookieBanner(): Observable<CookieCategory[]> {
    const uri = `/api/common/getBanner`;
    return this.http.request('get', uri)
    .pipe(
      map(
        (res: CookieBanner): CookieCategory[] => {
          return res.accordian as CookieCategory[];
        }
      )
    );
  }
}
