import {User} from './User.js';
export class Member extends User{
  constructor(username, email, password, memberPackage){
    super(password, email, password);
    this.memberPackage = memberPackage;
  }

  getPackage(){
    console.log(this.username + " is subscribed to "+this.memberPackage);
  }
}

let mike = Member('mike', 'mike@email.com', '21054', 'Standar');
mike.getPackage();
