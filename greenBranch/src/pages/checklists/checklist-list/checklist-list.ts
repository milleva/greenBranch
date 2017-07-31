import {Component} from '@angular/core';
import { Checklist1Page } from '../checklist1/checklist1';
import { Checklist2Page } from '../checklist2/checklist2';
import { MediaBuyingChecklistPage } from '../mediaBuying/mediaBuying';

import {NavController, NavParams} from 'ionic-angular'; /*NavParams import might be useless*/

/*import checklistpage(s?) for specific checklists*/

@Component({
  selector: 'page-checklist-list',
  templateUrl: 'checklist-list.html'
})

export class ChecklistListPage {
  constructor(public navCtrl: NavController){

  }
  goToChecklist1(){
    this.navCtrl.push(Checklist1Page);
  }

  goToChecklist2(){
    this.navCtrl.push(Checklist2Page);
  }

  goToMediaBuyingChecklist(){
    this.navCtrl.push(MediaBuyingChecklistPage);
  }
}
