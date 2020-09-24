console.log('Try npm run check/fix!');
console.log('ou can leave tsc running in watch mode using tsc -w -p . ' +
    'and it will generate .js files for you in a live fashion, so you can run node foo.js like normal');
console.log("npx ts-node src/index.ts");
/***********************************************************************************/
console.log("Run the code commands and install the required package globally");
console.log("npm install -g ts-node");
console.log("npm install -g typescript");
console.log("ts-node index.ts");

const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';

const trailing = 'Semicolon';

const why = 'am I tabbed?';

export function doSomeStuff(
  withThis: string,
  andThat: string,
  andThose: string[]
) {
  //function on one line
  if (!andThose.length) {
    return false;
  }
  console.log(withThis);
  console.log(andThat);
  console.dir(andThose);
  return;
}
// TODO: more examples
