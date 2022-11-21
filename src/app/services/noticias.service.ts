import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient){ }

  getNews(params:any) : Observable<any> {
    const URL ='https://newsapi.org/v2/top-headlines?country='+params.country+'&category='+params.category+'&apiKey=e1588a3990ee400995d32937093accc9'
    return this.http.get(URL)
  }
}
