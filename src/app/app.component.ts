import { Component } from '@angular/core';
import { NewsService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listNews:any[]=[];

  constructor(private newsService:NewsService){

  }

  title = 'noticias';
  SearchNews(params:any){
    console.log(params)
    this.newsService.getNews(params).subscribe(data=>{
      console.log(data.articles)
      this.listNews=data.articles
    },error=>{console.log(error)})
  }
}
