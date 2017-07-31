import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-knowledge-base-list',
  templateUrl: 'knowledge-base-list.html'
})

export class KnowledgeBaseListPage{
  articles: Array<{title: string}>;

  constructor(public NavCtrl: NavController){
   this.articles = [];
   for(let i = 1; i < 11; i++){
     this.articles.push({title : 'Article ' + i});
   }
  }
}
