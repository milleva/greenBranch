import firebase from 'firebase';

export class User {
  database = firebase.database();

  id: string;
  name: string;
  email: string;
  title: string;
  company: string;
  avatarImageUrl: string;
  password: string;

  constructor(id, name, title, company, avatarUrl, email, password){
    this.id = id;
    this.name = name;
    this.title = title;
    this.company = company;
    this.avatarImageUrl = avatarUrl;
    this.email = email;
    this.password = password;
  }

  static allUsers(){ //function that fetches and returns all users from db

  }

  static findByEmail(email: string){ //fetches and returns user with matching email

  }

  save(){ //saves this user to database
    let userRef = this.database.ref().child('users');
    userRef.child(this.id).set({
      name: this.name,
      email: this.email,
      title: this.title,
      company: this.company,
      avatarImageUrl: this.avatarImageUrl,
      password: this.password
    });

  }

}



