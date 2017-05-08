import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ArticleService {

  public articles: Observable<string>;

  constructor(private http: Http) { }

  public getArticles(): Observable<string> {
    if (this.articles === undefined) {
      this.articles = this._makeXHRRequest();
    }

    return this.articles;
  }

  private _makeXHRRequest(): Observable<string> {
    return this.http.get('./assets/data/articles.json')
                    .map((res) => res.json());
  }

}
