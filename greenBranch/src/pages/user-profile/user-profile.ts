import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {User} from '../../models/user';


@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html'
})
export class UserProfilePage{
  user: User;

  constructor(navParams: NavParams){
    this.user = navParams.get('testUser');
  }
}
