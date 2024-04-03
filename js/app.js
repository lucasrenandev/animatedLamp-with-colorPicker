"use strict";

const section = document.querySelector(".section");
const socket = section.querySelector(".socket");
const lamp = section.querySelector(".lamp");
const lampSpanOne = section.querySelector(".lamp span:nth-child(1)");
const lampSpanTwo = section.querySelector(".lamp span:nth-child(2)");
const button = section.querySelector(".button-box input");

let colorValue = "#fff";

const colorPicker = new iro.ColorPicker(".color-picker", {
    width: 150,
    color: this.colorValue
});

colorPicker.on("color:change", function(color) {
    if(button.checked) {
        colorValue = color.hexString;
        socket.style.backgroundColor = colorValue; 
        lamp.style.backgroundColor = colorValue; 
        lamp.style.boxShadow = `0 0 50px ${colorValue},
        0 0 100px ${colorValue},
        0 0 150px ${colorValue},
        0 0 200px ${colorValue},
        0 0 250px ${colorValue},
        0 0 300px ${colorValue},
        0 0 350px ${colorValue}`;
        lampSpanOne.style.boxShadow = `20px 20px 0 10px ${colorValue}`; 
        lampSpanTwo.style.boxShadow = `-20px 20px 0 10px ${colorValue}`; 
    }
});

function turnOnLamp() {
    if(button.checked) {
        this.classList.add("active");
        section.classList.add("active");
        socket.style.backgroundColor = colorPicker.color.hexString;
        lamp.style.backgroundColor = colorPicker.color.hexString;
        lamp.style.boxShadow = `0 0 50px ${colorPicker.color.hexString},
        0 0 100px ${colorPicker.color.hexString},
        0 0 150px ${colorPicker.color.hexString},
        0 0 200px ${colorPicker.color.hexString},
        0 0 250px ${colorPicker.color.hexString},
        0 0 300px ${colorPicker.color.hexString},
        0 0 350px ${colorPicker.color.hexString}`;
        lampSpanOne.style.boxShadow = `20px 20px 0 10px ${colorPicker.color.hexString}`; 
        lampSpanTwo.style.boxShadow = `-20px 20px 0 10px ${colorPicker.color.hexString}`;    
    }
    else {
        this.classList.remove("active");
        section.classList.remove("active");
        socket.style.backgroundColor = "#444";
        lamp.style.backgroundColor = "#444";
        lamp.style.boxShadow = "none";
        lampSpanOne.style.boxShadow = `20px 20px 0 10px #444`; 
        lampSpanTwo.style.boxShadow = `-20px 20px 0 10px #444`; 
    }
}

button.addEventListener("click", turnOnLamp);