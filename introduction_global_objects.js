console.log("Node js Tutorial");

setTimeout(function(){
    console.log("3 seconds have elapsed")
}, 3000);

var time = 0;

var timer = setInterval(function(){
    time += 2;
    console.log(time + " seconds have elapsed");
    if(time > 5) {
        clearInterval(timer);
    }
}, 2000);

console.log(__dirname);
console.log(__filename);




