import firebase from 'firebase';

export class Checklist{
  database = firebase.database();

  id: string;
  name: string; //needed?
  ownerId: string;
  checkboxes: Map<string, boolean>;
  radioGroups: Map<string, number>;
  numberInputs: Map<string, number>;
  textInputs: Map<string, string>;

  constructor(uid){
    this.ownerId = uid;
    this.checkboxes = new Map<string, boolean>();
    this.radioGroups = new Map<string, number>();
    this.numberInputs = new Map<string, number>();
    this.textInputs = new Map<string, string>();
  }

  save(){//save this checklist to db

  }
}
