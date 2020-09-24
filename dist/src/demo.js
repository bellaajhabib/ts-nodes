"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.show = void 0;
var strategy_1 = require("./strategy");
function show() {
    var context = new strategy_1.Context(new strategy_1.ConcreteStrategy1());
    context.executeStrategy();
    context = new strategy_1.Context(new strategy_1.ConcreteStrategy2());
    context.executeStrategy();
    context = new strategy_1.Context(new strategy_1.ConcreteStrategy3());
    context.executeStrategy();
}
exports.show = show;
show();
//# sourceMappingURL=demo.js.map