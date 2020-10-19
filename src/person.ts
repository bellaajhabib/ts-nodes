class Person {
    get addFriends(): object | undefined {
        return this._addFriends;
    }

    set setFriends(value: object | undefined) {
        this._addFriends = value;
    }
    greeting: string;
    private nick: string | undefined;
    private age: Number | undefined;
    private sex: string | undefined;
    private parent: any;
    private work: any;
    private friends: any[] | undefined ;
    protected _addFriends: object | undefined;

    constructor(message: string) {
        this.greeting = message;
    }

     Man(nick:string, age: Number, sex:string, parent:any, work:any, friends:[]) {
        this.nick = nick;
        this.age = age;
        this.sex = sex;
        this.parent = parent;
        this.work = work;
        this.friends = friends;
         this._addFriends = function(nick: string, age: any, sex: any, parent: any, work: any, friends: any) {
             const friends1 = [];
             friends1?.push( this.Man(nick,age,sex,parent,work,friends))
             return friends1;
         };
         return   this ;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Person("world");
var seb = greeter.Man("h", 23, 'm', 'aîné', 'JavaScripteur', []);

