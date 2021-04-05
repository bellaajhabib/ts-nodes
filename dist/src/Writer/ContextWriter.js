"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextWriter = void 0;
var ContextWriter = /** @class */ (function () {
    function ContextWriter() {
    }
    ContextWriter.prototype.setWriter = function (writer) {
        this.wirter = writer;
    };
    ContextWriter.prototype.write = function (datas) {
        var _a;
        console.log((_a = this.wirter) === null || _a === void 0 ? void 0 : _a.write(datas));
    };
    return ContextWriter;
}());
exports.ContextWriter = ContextWriter;
//# sourceMappingURL=ContextWriter.js.map