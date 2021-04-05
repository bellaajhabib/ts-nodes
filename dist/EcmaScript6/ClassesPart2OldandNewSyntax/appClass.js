"use strict";
var appClass = /** @class */ (function () {
    function appClass(name, age) {
        this.names = name;
        this.ages = age;
    }
    appClass.prototype.getInfo = function () {
        console.log("Hello " + this.names);
    };
    return appClass;
}());
var firstUser = new appClass('Habib', 4);
console.log(firstUser.getInfo());
//# sourceMappingURL=appClass.js.map