// queriSelector : imediatley dominate되는 첫번째 자식요소를 반환
// querySelectorAll : 해당하는 모든 것들을 배열로 반환.
const form = document.querySelector(".form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();