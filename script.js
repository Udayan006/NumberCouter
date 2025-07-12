const dnx = document.querySelector("#btn1");
const set = document.querySelector("#btn2");
const inx = document.querySelector("#btn3");

const text = document.querySelector("#text");
let interval = 0;

dnx.addEventListener("click", function () {
  text.innerHTML = interval--;
  text.innerHTML = interval;
});

set.addEventListener("click", function () {
  text.innerHTML = 0;
});

inx.addEventListener("click", function () {
  text.innerHTML = interval++;
  text.innerHTML = interval;
});
