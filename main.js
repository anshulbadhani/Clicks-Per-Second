let clicks = 0;
let clickss = String(clicks);
clickcounter = document.querySelectorAll(".clickCount")[0]
let time = 0;

numberval = document.querySelectorAll(".num")[0]

setClickAndIncreaseCount = ()=>{
    // console.log(clicks);
    clicks++;
    document.querySelectorAll(".num")[0].innerText = String(clicks);
    // console.log(clicks);
}

increaseTime = ()=>{
    time ++;
    console.log(time);
    if (time==10) {
        cps = clicks;
        cps/=10;
        document.write("Your score : ", cps, "CPS")
        clearInterval(incTime);
    }
}

incTime = setInterval(increaseTime, 1000)
// setTimeout(increaseTime(), 1000);
