import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {dataFake} from '../../data/dataFake';

@Component({
  selector: 'app-content',
  imports: [
    RouterLink
  ],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content {
  private id:string|null="";
  contentPicture:string="";
  contentTitle:string="";
  contentText:string="";

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(value => this.id= value.get("id"));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string|null){
    const result = dataFake.filter(article=>
      article.id==id)[0]
    this.contentTitle = result.title;
    this.contentText=result.text;
    this.contentPicture=result.photo;

  }


}
