let names ='Habib', ages = 20;

function User(name, age){
    names = name;
    ages = age;
}
User.prototype.getInfo = function (){
    console.log(`Hello${this.names} Your Age Is ${this.age}`)
}
User.prototype.getDay = function (){
    console.log(`Hello${this.name} have a nice day ${this.age}`)
}
const firstUser = User('Habib',4);

console.log(firstUser.getInfo());
