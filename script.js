let dayBox = document.querySelector(".day-box");
let hrBox = document.querySelector(".hour-box");
let minBox = document.querySelector(".min-box");
let secBox = document.querySelector(".sec-box");

let endDate = new Date(2023,3,1,16,30);

let endTime = endDate.getTime();

function countdown(){
    let todayDate = new Date();

    let todayTime = todayDate.getTime();
    
    let remainingTime = endTime - todayTime;

    let oneMin = 60 * 1000;

    let oneHr = 60 * oneMin;

    let oneDay = 24 * oneHr;

    let addZeroes = num => num < 10 ? `0${num}` : num;

    // if end date is before today date
    if(endTime < todayTime){
        clearInterval(i);
        document.querySelector(".countdown").innerHTML = "The countdown has ended";
    } 
    //if end date is not before today date
    else {
        // calculate remaining days, hours, minutes and seconds
        let daysLeft = Math.floor(remainingTime / oneDay);
        let hoursLeft = Math.floor((remainingTime % oneDay) / oneHr);
        let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
        let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

        dayBox.textContent = addZeroes(daysLeft);
        hrBox.textContent = addZeroes(hoursLeft);
        minBox.textContent = addZeroes(minsLeft);
        secBox.textContent= addZeroes(secsLeft);
    }
}
let i = setInterval(countdown, 1000);
countdown();
