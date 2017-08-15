import firebase from 'firebase';

export class User {//represents DB instance for storing title, company, checklists...
  database = firebase.database();

  id: string;
  title: string;
  company: string;

  constructor(id, title, company){
    this.id = id;
    this.title = title;
    this.company = company;
  }

  static allUsers(){ //function that fetches and returns all users from db

  }

  static findByEmail(email: string){ //fetches and returns user with matching email

  }

  save(){ //saves this user to database
    let userRef = this.database.ref().child('users');

    userRef.child(this.id).set({
      title: this.title,
      company: this.company
    });

  }

}



