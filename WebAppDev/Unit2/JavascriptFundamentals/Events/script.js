'use strict';


const fun = function() {
    // document.body.style.backgroundColor = `blue`
    // document.body.style.backgroundColor = 'blue';
    console.log("HI");
    console.log(10+"11");
    
    document.body.style.backgroundColor = `blue`;  
}

function changeColor () {
    document.body.style.color = `aqua`;
}

document.querySelector(".btn").addEventListener("click", fun);

document.querySelector(".heading").addEventListener("mouseover", changeColor)


console.log(document.querySelector('.btn').textContent);


console.log( document.querySelector('.darwin').textContent);
// console.log(elem);