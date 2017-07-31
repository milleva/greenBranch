import {Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {NavController} from 'ionic-angular'; /*NavParams import might be useless*/

/*import checklistpage(s?) for specific checklists*/

@Component({
  selector: 'page-checklist-1',
  templateUrl: 'checklist1.html'
})

export class Checklist1Page {
  form: FormGroup;
  constructor(public navCtrl: NavController){

  }

}
