import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';
import { Platform } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import {User} from '../../models/user';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage{
  database = firebase.database();
  account = {
    email: 'signup@gmail.com',
    password: '123456'
  };
  user = {
    name: 'signer',
    email: 'signup@gmail.com',
    company: 'smth',
    title: 'smth else',
    password: '123456',
    password_again: '123456'
  };

  constructor(public navCtrl: NavController, private facebook: Facebook, public platform: Platform){
  }

  signupNative(){
    if(this.user.password != this.user.password_again){
      alert("passwords don't match");
      return;
    }

    var name = this.user.name;
    var email = this.user.email;
    var title = this.user.title;//from form
    var company = this.user.company;
    var uid;

    firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password).then(function(user){
        uid = user.uid;
        var dbUserInstance = new User(uid, name, email, title, company);
        dbUserInstance.save();

        user.updateProfile({
          displayName: name,
          photoURL: ''
        });
    }).catch(function(error) {
        // Handle Errors here.
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
    });

    /*firebase.auth().onAuthStateChanged(function(user){
      if(user) {
        uid = user.uid;
        var dbUserInstance = new User(uid, name, email, title, company);
        dbUserInstance.save();

        user.updateProfile({
          displayName: name,
          photoURL: ''
        });
      }
    });*/


  }

  loginNative(){
    firebase.auth().signInWithEmailAndPassword(this.account.email, this.account.password).then(function(user){
      alert(user.displayName + ' has logged in');
    }).catch(function(error){
      var errorMessage = error.message;
      alert(errorMessage);
    });

    /*firebase.auth().onAuthStateChanged(function(user){
      if(user) {
        alert(user.displayName + ' has logged in')
      }
    });*/
  }

  loginFacebook(){
    if (this.platform.is('cordova')) {
      this.facebook.login(["email"]).then((loginResponse)=>{
        let credential = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);
        firebase.auth().signInWithCredential(credential).then((info) => {
          alert(JSON.stringify(info));
        })
      })
    }else{

      let provider = new firebase.auth.FacebookAuthProvider();

      firebase.auth().signInWithRedirect(provider).then(()=>{
        firebase.auth().getRedirectResult().then((result)=>{
          alert(JSON.stringify(result));
        }).catch(function(error){
          alert(JSON.stringify(error))
        });
      })

    }

    /**/


  }
}
