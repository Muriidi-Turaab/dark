
const light = document.querySelector("#light");
const on = document.querySelector("#on");
const off = document.querySelector("#off");

on.addEventListener("click", function () {
    light.style.backgroundColor = 'yellow'
});

off.addEventListener("click", function () {
    light.style.backgroundColor = 'black'
});