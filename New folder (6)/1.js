const newyear ="06 may 2021";
console.log("hello world")
function countdown(){
    const newyeardate = new Date(newyear);
    const presentdate = new Date();
    const totalseconds = (newyeardate-presentdate)/1000;
    const days = Math.round(totalseconds / 3600/ 24 );
    const hours = Math.round((totalseconds / 3600)% 24);
    const minutes =  Math.round((totalseconds/60)%60);
    const seconds = Math.round(totalseconds%60);
   
    document.getElementById("d").innerHTML = `${days}`;
    document.getElementById("h").innerHTML = `${hours}`;
    document.getElementById("m").innerHTML = `${minutes}`;
    document.getElementById("s").innerHTML = `${seconds}`;
    console.log(days, hours, minutes,seconds);
}
countdown();
setInterval(countdown,800);