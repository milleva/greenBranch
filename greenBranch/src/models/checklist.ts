import firebase from 'firebase';

export class Checklist{
  database = firebase.database();

  id: string;
  name: string;
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

  setId(id){
    this.id = id;
  }

  addCheckbox(key, value){
    this.checkboxes.set(key, value);
  }

  addTextInput(key, value){
    this.textInputs.set(key, value);
  }

  addRadioButtonValue(key, value){
    this.radioGroups.set(key, value);
  }

  //4 functions for adding pairs to the maps. Use them when saving checklist

  save(){//save this checklist to db
    let userRef = this.database.ref().child('users/' + this.ownerId);
    let checklistRef = userRef.child('checkLists/' + this.id);

    //checklistRef.set({'name': this.name});

    //for each key in a map, store key and value to that maps ref
    let checkboxKeys = Array.from(this.checkboxes.keys());
    for(let key of checkboxKeys){
      let path = 'checkboxes/' + key;
      checklistRef.child(path).set(
        this.checkboxes.get(key)
      );
    }

    let textInputKeys = Array.from(this.textInputs.keys());
    for(let key of textInputKeys){
      let path = 'textInputs/' + key;
      checklistRef.child(path).set(
        this.textInputs.get(key)
      );
    }

    let radioGroupKeys = Array.from(this.radioGroups.keys());
    for(let key of radioGroupKeys){
      let path = 'radioGroups/' + key;
      alert(this.radioGroups.get(key));
      checklistRef.child(path).set({
        key: this.radioGroups.get(key)
      });
    }

    /*
        let numberInputKeys = Array.from(this.numberInputs.keys());
        for(let key of checkboxKeys){
          checklistRef.child('numberInputs').set({
            key: this.numberInputs.get(key)
          });
        }*/




  }
}
