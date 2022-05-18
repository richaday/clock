const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = (`현재 시간 → ${hours}:${minutes}:${seconds}`);  // `` 사용하기
}

getClock(); // 웹사이트가 로드되자마자 즉시 실행 
setInterval(getClock, 1000);



//크리스마스까지 디데이 타이머

const xmasday = document.querySelector("#xmasday");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
red.style.color = "red";
green.style.color = "green";

function dDay(){
    const now = new Date();
    const xmas = new Date(2022,11,25,0,0,0);
    const time = xmas.getTime() - now.getTime();

    const dday = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(2, "0");
    const dh = String(Math.floor(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).padStart(2, "0");
    const dm = String(Math.floor(time % (1000 * 60 * 60) / (1000 * 60))).padStart(2, "0");
    const ds = String(Math.floor(time % (1000 * 60) / 1000)).padStart(2, "0");


    xmasday.innerText = `${dday}D ${dh}h ${dm}m ${ds}s`;
}

dDay();
setInterval(dDay, 1000);