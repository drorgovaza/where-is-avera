const dotClock = document.querySelector(".dot");

gsap.fromTo(".dot" , {opacity:0 ,y:-10 } , {opacity :1 , duration:1, delay:1,repeat:-1})


const CountUp = () => {
    const countDate = new Date("September 7, 2014 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = now - countDate;


    const sec = 1000;
    const min = 60 * sec;
    const hours = 60 * min;
    const day = 24 * hours;
    const years = 365 * day;
 

    const textyear = Math.floor(gap / years);
    const textDay = Math.floor((gap % years) / day );
    const textHours = Math.floor((gap % day) / hours);
    const textmin = Math.floor((gap % hours) / min);
    const textsec = Math.floor((gap % min) / sec);

    document.querySelector(".year").innerHTML = `<div class="description"><span>Years</span> ${textyear}</div>`;
    document.querySelector(".days").innerHTML =  `<div class="description"><span>Day</span> ${textDay}</div>`;
    document.querySelector(".hours").innerHTML = `<div class="description"><span>Hours</span> ${textHours}</div>`;
    document.querySelector(".minute").innerHTML =  `<div class="description"><span>Minute</span> ${textmin}</div>`;
    document.querySelector(".second").innerHTML = `<div class="description"><span>Second</span> ${textsec}</div>`;
}
setInterval(CountUp, 1000);
