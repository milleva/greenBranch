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
  constructor(public navCtrl: NavController, private facebook: Facebook, public platform: Platform){
  }

  loginFacebook(){
    /*if (this.platform.is('cordova')) {
      this.facebook.login(["email"]).then((loginResponse)=>{

        let credential = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);
        firebase.auth().signInWithCredential(credential).then((info) => {
          alert(JSON.stringify(info));
        })
      })
    }else{
      alert('not native so no can do sugarcube');
    }*/

    let provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithRedirect(provider).then(()=>{
      firebase.auth().getRedirectResult().then((result)=>{
        alert(JSON.stringify(result));
      }).catch(function(error){
        alert(JSON.stringify(error))
      });
    })


  }
}
