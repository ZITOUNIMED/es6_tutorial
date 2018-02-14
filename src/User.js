
export class User{
  constructor(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
  }

  register(){
    console.log(this.username + ' is registered...');
  }

  static countUsers(){
    console.log('There are 50 users');
  }
}

let bob = new User('Bob', 'bob@email.com', '123456');
bob.register();
User.countUsers();
