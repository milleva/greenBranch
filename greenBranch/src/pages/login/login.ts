import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';
import { Platform } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage{
  account = {
    email: 'emiller@gmail.com',
    password: 'tits'
  };
  user = {
    name: '',
    email: 'signup@gmail.com',
    company: '',
    title: '',
    password: '',
    password_again: ''
  };

  constructor(public navCtrl: NavController, private facebook: Facebook, public platform: Platform){
  }

  signupNative(){
    firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password).catch(function(error) {
        // Handle Errors here.
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
    });


  }

  loginNative(){
    alert(this.account.email + ' ' + this.account.password);
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
