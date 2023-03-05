// 배경화면 이미지 리스트
const img = [
    "Background/1.jpg", 
    "Background/2.jpg", 
    "Background/3.jpg", 
    "Background/4.jpg", 
    "Background/5.jpg"
];
const clock = document.querySelector("#clock");
const helloMessage = document.querySelector("#hello");
const momentumMain = document.querySelector("#momentum-main");
const loginMain = document.querySelector("#login-main");
const loginform = document.querySelector("#loginform");
const user = loginform.username.value;
const date = document.querySelector("#date");
let userID = localStorage.getItem("username");
// 배경화면 랜덤화
const randomizeImage = Math.floor(Math.random() * img.length);

// 배경화면 설정
const bgImage = document.querySelector("#mainBackground");
const logImage = document.querySelector("#getmainBackground");
bgImage.src = `${img[randomizeImage]}`;
logImage.src = `${img[randomizeImage]}`;
function login(event) {
        event.preventDefault();
        const user = loginform.username.value;
        const usernamelength = loginform.username.value.length;
        if(usernamelength === 0) {
            alert("Please write your username");
        } else {
            localStorage.setItem("username", user);
            userID = localStorage.getItem("username");
            loginMain.classList.add("hidden");
            momentumMain.classList.remove("hidden");
        }
    }

// 현재 시간 불러오기
function updateClock() {
    const today = new Date();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();
    const todayWeek = today.getDay();
    const hourDisplay = String(hour).padStart(2, "0");
    const minuteDisplay = String(minute).padStart(2, "0");
    const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    
    if (hour > 6 && hour < 12) {
        helloMessage.textContent = `Good morning, ${userID}`;        
    } else if (hour > 12 && hour < 18) {
        helloMessage.textContent = `Good afternoon, ${userID}`;
    } else if(hour > 18 && hour < 24) {
        helloMessage.textContent = `Good evening, ${userID}`;
    } else {
        helloMessage.textContent = `Good night, ${userID}`;
    }
    date.textContent = `${todayYear}.${todayMonth}.${todayDate} ${week[todayWeek]}`
    clock.textContent = `${hourDisplay}:${minuteDisplay}`;
}

const savedusername = localStorage.getItem("user");
if(userID === null){
    momentumMain.classList.add("hidden");
    loginform.addEventListener("submit", login);
    updateClock();
    setInterval(updateClock, 1000);
} else {
    loginMain.classList.add("hidden");
    userID = localStorage.getItem("username");
    updateClock();
    setInterval(updateClock, 1000);
}



