"use strict";
var app = /** @class */ (function () {
    function app(name, age) {
        this.names = name;
        this.ages = age;
    }
    app.prototype.getInfo = function () {
        console.log("Hello " + this.names);
    };
    return app;
}());
var firstUser = new app('Habib', 4);
console.log(firstUser.getInfo());
//# sourceMappingURL=app.js.map