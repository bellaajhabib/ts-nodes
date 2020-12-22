"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = exports.ConcreteStrategy3 = exports.ConcreteStrategy2 = exports.ConcreteStrategy1 = void 0;
var ConcreteStrategy1 = /** @class */ (function () {
    function ConcreteStrategy1() {
    }
    ConcreteStrategy1.prototype.execute = function () {
        console.log("`execute` method of ConcreteStrategy1 is being called");
        var oldArray = Array(100);
        console.log(oldArray);
        console.log(oldArray.length);
        var newArray = Array.of(100);
        console.log(newArray);
        console.log(newArray.length);
    };
    return ConcreteStrategy1;
}());
exports.ConcreteStrategy1 = ConcreteStrategy1;
var ConcreteStrategy2 = /** @class */ (function () {
    function ConcreteStrategy2() {
    }
    ConcreteStrategy2.prototype.execute = function () {
        console.log("`execute` method of ConcreteStrategy2 is being called");
        var myName = "Habib";
        var arrayofLetter = Array.from(myName);
        console.log(arrayofLetter);
    };
    return ConcreteStrategy2;
}());
exports.ConcreteStrategy2 = ConcreteStrategy2;
var ConcreteStrategy3 = /** @class */ (function () {
    function ConcreteStrategy3() {
    }
    ConcreteStrategy3.prototype.execute = function () {
        console.log("`execute` method of ConcreteStrategy3 is being called");
        var theNumbers = [100, 300, 500, 800];
        // Array.fille (Value To Fille, Start Default 0,End Default Array.Length)
        //TheNumbers.fill(100);// All Will be 1000
        theNumbers.fill(100, 2, 3);
        console.log(theNumbers);
    };
    return ConcreteStrategy3;
}());
exports.ConcreteStrategy3 = ConcreteStrategy3;
var Context = /** @class */ (function () {
    function Context(strategy) {
        this.strategy = strategy;
    }
    Context.prototype.executeStrategy = function () {
        this.strategy.execute();
    };
    return Context;
}());
exports.Context = Context;
//# sourceMappingURL=strategy.js.map