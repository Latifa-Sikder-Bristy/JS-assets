function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }
}

const firstServer = kitchen();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());


//run in browser
/* function stopwatch(params) {
    let count = 0;
    return function() {
        counter++;
        return counter;
    }
} */
