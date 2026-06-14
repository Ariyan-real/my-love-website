const startDate = new Date("2025-14-06");

const today = new Date();

const difference =
today - startDate;

const days =
Math.floor(
difference /
(1000*60*60*24)
);

document.getElementById(
"days"
).innerText = days;

function showMessage(){

document.getElementById(
"hiddenMessage"
).innerText =

"I choose you. Every day. Every time. ❤️";

}