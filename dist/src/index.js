"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doSomeStuff = void 0;
console.log('Try npm run check/fix!');
console.log('ou can leave tsc running in watch mode using tsc -w -p . ' +
    'and it will generate .js files for you in a live fashion, so you can run node foo.js like normal');
console.log("npx ts-node src/index.ts");
/***********************************************************************************/
console.log("Run the code commands and install the required package globally");
console.log("npm install -g ts-node");
console.log("npm install -g typescript");
console.log("ts-node index.ts");
var longString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';
var trailing = 'Semicolon';
var why = 'am I tabbed?';
function doSomeStuff(withThis, andThat, andThose) {
    //function on one line
    if (!andThose.length) {
        return false;
    }
    console.log(withThis);
    console.log(andThat);
    console.dir(andThose);
    return;
}
exports.doSomeStuff = doSomeStuff;
// TODO: more examples
//# sourceMappingURL=index.js.map