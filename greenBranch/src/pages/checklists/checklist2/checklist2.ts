import {Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {NavController} from 'ionic-angular'; /*NavParams import might be useless*/

/*import checklistpage(s?) for specific checklists*/

@Component({
  selector: 'page-checklist-2',
  templateUrl: 'checklist2.html'
})

export class Checklist2Page {
  form: FormGroup;

  constructor(public navCtrl: NavController){
  }

  updateSliderInput(val){

  var slider1 = (<HTMLInputElement>document.getElementById('slider1')).value;

  alert(val);

    if(val<50){
    (<HTMLInputElement>document.getElementById('output')).value='less than';
    }else{
    (<HTMLInputElement>document.getElementById('output')).value=val;
    }
  }

}
