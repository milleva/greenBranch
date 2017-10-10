import {Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {NavController} from 'ionic-angular'; /*NavParams import might be useless*/

/*import checklistpage(s?) for specific checklists*/
import firebase from 'firebase';
import {Checklist} from '../../../models/checklist';

@Component({
  selector: 'page-media-buying',
  templateUrl: 'mediaBuying.html'
})

export class MediaBuyingChecklistPage {
  form: FormGroup;


  checkboxes = {
    iOS: false,
    android: false,
    windows: false,
    fbPlatform: false,
    other1: false,
    appsFlyer: false,
    fbMediaSDK: false,
    chartboost: false,
    keyArt: false,
    videoFootage: false,
    playableBuild: false,
    other2: false,
    uponConsumption: false,
    phone: false,
    tablet: false,
    both: false,
    preferredDevices: false,
    social: false,
    video: false,
    display: false,
    crossPromotion: false,
    burst: false
  };
  radioGroups = {
    campaignType: ''
  };
  numberInputs = {
    dailyInstalls: 0,
    totalInstalls: 0,
    targetCPI: 0,
    maxCPI: 0,
    totalBudget: 0,
    DailyBudget: 0

  };
  textInputs = {
    other1: '',
    other2: '',
    other3: '',
    campaignStart: '',
    campaignEnd: '',
    minimumOS: '',
    preferredDevices: '',
    t1: '',
    t2: '',
    t3: '',
    gender: '',
    age: '',
    other4: ''

  };
  constructor(public navCtrl: NavController){
  }

  save(){
    var user = firebase.auth().currentUser;
    if(!user){
      alert('user not logged in');
      return;
    }
    var dbChecklistInstance = new Checklist(user.uid);
    dbChecklistInstance.setId('01_');
    for(var checkbox in this.checkboxes){
      dbChecklistInstance.addCheckbox(checkbox, this.checkboxes[checkbox]);
    }
    for(var textInput in this.textInputs){
      dbChecklistInstance.addTextInput(textInput, this.textInputs[textInput]);
    }

    for(var radioButton in this.radioGroups){
      dbChecklistInstance.addRadioButtonValue(radioButton, this.radioGroups[radioButton]);
    }
    dbChecklistInstance.save();

  }


}
