const p = document.querySelectorAll('.paragrafos p ');
const styleBody = getComputedStyle(document.body);
const backgroundColorBody = styleBody.backgroundColor;

for(let i of p){
    i.style.backgroundColor = backgroundColorBody
    i.style.color = "white"
    console.log(i)
}

