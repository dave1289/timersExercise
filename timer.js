function countDown(num) {
    let time = setInterval(function(){
        num--;
        if(num <= 0){
            clearInterval(time);
            console.log('DONE!');
        }
        else {
            console.log(num);
        }
    },1000)
}





function randomNum() {
    let tries = 0;
    let elapse = setInterval(function(){
        random = Math.random();
        tries++;
        if (random > .75) {
            clearInterval(elapse);
            console.log(`Congratulations! it took ${tries} tries!!`)
        }
    },1000)
}


// I am 99% sure that the course material never mentioned intervals (basically)operate as loops
