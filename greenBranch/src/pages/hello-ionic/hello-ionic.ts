import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { KnowledgeBaseListPage } from '../knowledge-base/knowledge-base-list/knowledge-base-list';
import { ChecklistListPage } from '../checklists/checklist-list/checklist-list';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
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
}

