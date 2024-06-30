const body = document.body;

let bgPosI = 0

setInterval(() => {
    bgPosI += 1;
    body.style.backgroundPosition = bgPosI + "px " + bgPosI + "px";
}, 50);