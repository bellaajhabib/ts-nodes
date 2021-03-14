"use strict";
var appClass2 = /** @class */ (function () {
    function appClass2(name, age) {
        this.names = name;
        this.ages = age;
    }
    appClass2.prototype.getInfo = function () {
        console.log("Hello " + this.names);
    };
    return appClass2;
}());
var firstUser = new appClass2('Habib', 4);
console.log(firstUser.getInfo());
//# sourceMappingURL=appClass2.js.map