function User(name){
   this.name=name;
}

User.prototype.greet = function(){
    return `Hello ${this.name}`;
}

const user = new User('JavaScript');
console.log(user.greet());