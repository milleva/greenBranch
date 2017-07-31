import {Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {NavController} from 'ionic-angular'; /*NavParams import might be useless*/

/*import checklistpage(s?) for specific checklists*/

@Component({
  selector: 'page-media-buying',
  templateUrl: 'mediaBuying.html'
})

export class MediaBuyingChecklistPage {
  form: FormGroup;

  constructor(public navCtrl: NavController){
  }


}
