import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { KnowledgeBaseListPage } from '../knowledge-base/knowledge-base-list/knowledge-base-list';
import { ChecklistListPage } from '../checklists/checklist-list/checklist-list';
import { LoginPage } from '../login/login';

import {User} from '../../models/user';

import firebase from 'firebase';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  database = firebase.database();

  constructor(public NavCtrl: NavController){

  }

  toKnowledgeBase(){
    this.NavCtrl.push(KnowledgeBaseListPage);
  }

  toChecklists(){
    this.NavCtrl.push(ChecklistListPage);
  }

  toLogin(){
    this.NavCtrl.push(LoginPage);
  }

  testDB(){
    this.database.ref('users/2').remove();
    /*let testUser: User = new User(2, 'Janos', 'Manager', 'greenbranch studios', null,
                                  'email.com', 'somepassword');
    testUser.save();*/
  }
}

