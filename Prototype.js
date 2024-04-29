function User(name){
   this.name=name;
}

User.prototype.greet = function(){
    return `Hello ${this.name}`;
}
const user = new User('JavaScript');
console.log(user.greet());
"###############################################################################################################################################################"

var a = {
    name:"name"
}

var b = Object.create(a);//var b = Object.create(a);: Creates a new object b with prototype a. The properties of a is stored in prototype of b
console.log(b); //{} When you log b, it shows an empty object because the properties of a are inherited by b, but it doesn't have its own properties.
console.log(b.prototype);//undefined becuase b doesn't have its own property instead inherits from  "a" so b will not have explicit protoype , but implicity a is b's prototype
delete b.name; //will delete name from b object prototype if exists but a prototype remains unchanged
console.log(b.name);//name searches value within b object if it do not find , it searches with a prototype and returns value name

b.name = "bname";
console.log(b.name);
delete b.name;
console.log(b.name);