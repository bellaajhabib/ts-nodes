const myPromise = new Promise(function (resolve, reject) {

    let thePosts = ["A",'B',"D","D","E"];
    resolve(thePosts);
});

myPromise
    .then((result) => {
        console.log(`Totle Number Of Posts Is ${result.length} post`);
        return result;
    })
    .then((result) => {
        console.log("#".repeat(1));
        return result;
    })
    .then((result) => {
        console.log(`Totle Number Of Posts Is ${result} post`);
        return result;
    })


;

