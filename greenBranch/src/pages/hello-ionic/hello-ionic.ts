import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { KnowledgeBaseListPage } from '../knowledge-base/knowledge-base-list/knowledge-base-list';
import { ChecklistListPage } from '../checklists/checklist-list/checklist-list';
import { LoginPage } from '../login/login';
import { UserProfilePage } from '../user-profile/user-profile'

import {User} from '../../models/user';

import firebase from 'firebase';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  database = firebase.database();// DB FOR TESTING

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

  doLogout(){
    firebase.auth().signOut().then(function(){
      alert('Logged out');
    }, function(error){
      alert(error.message);
    })
  }

  testDB(){
    let testUser: User = new User(2, 'Manager', 'greenbranch studios');
    testUser.save();
  }

  testUserProfile(){
    /*let testUser: User = new User(2, 'Janos', 'Manager', 'greenbranch studios', null,
                                  'email.com', 'somepassword');
    this.NavCtrl.push(UserProfilePage, { testUser });*/
  }
}

