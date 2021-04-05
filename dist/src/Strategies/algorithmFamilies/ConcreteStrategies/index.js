"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
var Context = /** @class */ (function () {
    /**
     * Usually, the Context accepts a strategy through the constructor, but also
     * provides a setter to change it at runtime.
     */
    function Context(strategy) {
        this.strategy = strategy;
    }
    /**
     * Usually, the Context allows replacing a Strategy object at runtime.
     */
    Context.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    /**
     * The Context delegates some work to the Strategy object instead of
     * implementing multiple versions of the algorithm on its own.
     */
    Context.prototype.doSomeBusinessLogic = function () {
        var _a;
        var result = (_a = this.strategy) === null || _a === void 0 ? void 0 : _a.doAlgorithm(['A', 'B', 'C']);
        console.log(result === null || result === void 0 ? void 0 : result.join(','));
    };
    return Context;
}());
exports.Context = Context;
//# sourceMappingURL=index.js.map