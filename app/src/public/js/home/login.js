"use strict";

const id=document.querySelector("#id"),
    password=document.querySelector("#pw"),
    button=document.querySelector("button");

button.addEventListener("click", login);

function login() {
    const req={
        id : id.value,
        password : password.value,
    };
}