import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';



import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ChecklistListPage } from '../pages/checklists/checklist-list/checklist-list';
import { Checklist1Page } from '../pages/checklists/checklist1/checklist1';
import { Checklist2Page } from '../pages/checklists/checklist2/checklist2';
import { MediaBuyingChecklistPage } from '../pages/checklists/mediaBuying/mediaBuying';
import { UserProfilePage } from '../pages/user-profile/user-profile'

import { KnowledgeBaseListPage } from '../pages/knowledge-base/knowledge-base-list/knowledge-base-list';
import { PostDetail } from '../pages/knowledge-base/post-detail/post-detail';

import { LoginPage } from '../pages/login/login';

//login modules
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyD6v2mcjnPFlXuHQAXI6NeP3qfg7eIygKI",
    authDomain: "greenbranch-2fc77.firebaseapp.com",
    databaseURL: "https://greenbranch-2fc77.firebaseio.com",
    projectId: "greenbranch-2fc77",
    storageBucket: "greenbranch-2fc77.appspot.com",
    messagingSenderId: "35879563489"
  });

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'e3ee7ae1'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ChecklistListPage,
    Checklist1Page,
    Checklist2Page,
    KnowledgeBaseListPage,
    PostDetail,
    LoginPage,
    MediaBuyingChecklistPage,
    UserProfilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ChecklistListPage,
    Checklist1Page,
    Checklist2Page,
    KnowledgeBaseListPage,
    PostDetail,
    LoginPage,
    MediaBuyingChecklistPage,
    UserProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
