import firebase from 'firebase';

export class Checklist{
  database = firebase.database();

  id: string;
  name: string; //needed?
  ownerId: string;
  titles: Map<number, string>;
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

  //4 functions for adding pairs to the maps. Use them when saving checklist

  save(){//save this checklist to db
    let userRef = this.database.ref().child('users/' + this.ownerId);
    let checklistRef = userRef.child('checkLists/' + this.id);

    //for each key in a map, store key and value to that maps ref
    let checkboxKeys = Array.from(this.checkboxes.keys());
    for(let key of checkboxKeys){
      checklistRef.child('checkboxes').set({
        key: this.checkboxes.get(key)
      });
    }

    let radioGroupKeys = Array.from(this.radioGroups.keys());
    for(let key of checkboxKeys){
      checklistRef.child('radioGroups').set({
        key: this.radioGroups.get(key)
      });
    }

    let numberInputKeys = Array.from(this.numberInputs.keys());
    for(let key of checkboxKeys){
      checklistRef.child('numberInputs').set({
        key: this.numberInputs.get(key)
      });
    }

    let textInputKeys = Array.from(this.textInputs.keys());
    for(let key of checkboxKeys){
      checklistRef.child('textInputs').set({
        key: this.textInputs.get(key)
      });
    }


  }
}
