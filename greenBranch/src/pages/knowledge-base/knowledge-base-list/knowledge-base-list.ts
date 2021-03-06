
import { Component } from '@angular/core';
import {PostDetail} from '../post-detail/post-detail';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-knowledge-base-list',
  templateUrl: 'knowledge-base-list.html'
})
export class KnowledgeBaseListPage {
	url: string = 'http://test.greenbranch.studio/wp-json/wp/v2/posts';
	items: any;

	constructor( public navCtrl: NavController, private http: Http, private nav: NavController ) {}

	ionViewDidEnter() {
		this.http.get( this.url )
	    .map(res => res.json())
	    .subscribe(data => {
	      // we've got back the raw data, now generate the core schedule data
	      // and save the data for later reference
	      this.items = data;
	    });
	}

  itemTapped(event, item) {
		this.nav.push(PostDetail, {
		  item: item
		});
	}
}
