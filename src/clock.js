const clock = document.getElementById("clock");
const toDo = document.getElementById("toDoDiv");

function nowTime(){
    const Hours = String(new Date().getHours()).padStart(2, "0");
    const Minutes = String(new Date().getMinutes()).padStart(2, "0");
    const Seconds = String(new Date().getSeconds()).padStart(2, "0");
    clock.innerText = `${Hours} : ${Minutes} : ${Seconds}`;

    if(Hours >= 7 && Hours < 12){
        greeting.innerText = `Good morning, ${savedUsername}`;
    } else if(Hours >= 12 && Hours < 18){
        greeting.innerText = `Good afternoon, ${savedUsername}`;
    } else if(Hours >= 18 && Hours < 23) {
        greeting.innerText = `Good evening, ${savedUsername}`;
    } else if(Hours >= 24 && Hours < 2) {
        greeting.innerText = `Good midnight, ${savedUsername}`;
    } else {
        greeting.innerText = `Good daybreak, ${savedUsername}`;
    }
}

if(savedUsername !== null){
    clock.setAttribute('style', 'display: flex');
    toDo.setAttribute('style', 'display: flex');
    nowTime();
    setInterval(nowTime, 1000);
}