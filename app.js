const container = document.querySelector('.container');
let content = "";
let balloons = [
    'pink', 'black', 'red', 'purple', 'green', 'yellow', null, 'cyan',
    'pink', 'black', 'red', 'purple', 'green', 'yellow', 'white', 'cyan',
    'pink', 'black', null, 'purple', 'green', 'yellow', 'white', 'cyan',
    'pink', 'black', 'red', 'purple',  'yellow', null, 'cyan',
    null, 'black', 'red', 'purple', 'green', 'yellow', 'white', 'cyan',
];

function popBalloon(pops){
  console.log("pops", pops)
    balloons[pops] = null;
    renderBalloons();
}

function renderBalloons(){
    let content = "";
    balloons.forEach(function(color, position){
        console.log("loop "+position+" "+color, content);
        let balloonVisibility = "visibled";
        if(color === null){
            balloonVisibility = "popped";
        }

        content = content + `<div
            class='balloon ${balloonVisibility}'
            style= 'background: ${color}'
            onclick='popBalloon(${position})'
            ></div>`;
    });
    container.innerHTML = content;
}

renderBalloons();
console.log("Hello World");



