"use strict";
var Person = /** @class */ (function () {
    function Person(message) {
        this.greeting = message;
    }
    Object.defineProperty(Person.prototype, "addFriends", {
        get: function () {
            return this._addFriends;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setFriends", {
        set: function (value) {
            this._addFriends = value;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.Man = function (nick, age, sex, parent, work, friends) {
        this.nick = nick;
        this.age = age;
        this.sex = sex;
        this.parent = parent;
        this.work = work;
        this.friends = friends;
        this._addFriends = function (nick, age, sex, parent, work, friends) {
            var friends1 = [];
            friends1 === null || friends1 === void 0 ? void 0 : friends1.push(this.Man(nick, age, sex, parent, work, friends));
            return friends1;
        };
        return this;
    };
    Person.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Person;
}());
var greeter = new Person("world");
var seb = greeter.Man("h", 23, 'm', 'aîné', 'JavaScripteur', []);
//# sourceMappingURL=person.js.map