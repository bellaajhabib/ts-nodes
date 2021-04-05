let i= 20;
let j= 20;

console.log(i+j);

function first(){
    console.log('Hello first');
}
function second(){
    first();
    console.log('Hello second');
}
second();
