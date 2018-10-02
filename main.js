document.getElementById('leftArrow').onclick = sliderLeft;
document.getElementById('rightArrow').onclick = sliderRight;
let left = -512;

function sliderLeft() {
    let main = document.getElementById('main');
    left += 256;
    if( left > 0)  {
        left = -1024;
    }
    main.style.left = left + 'px';
}
function sliderRight() {
    let main = document.getElementById('main');
    left -= 256;
    if( left < -1024) {
        left = 0;
    }
    main.style.left = left + 'px';
}

document.getElementById('main').onmouseenter = onMouse;
document.getElementById('all').onmouseleave = outMouse;
function onMouse() {
    document.getElementById('leftArrow').style = 'display: block';
    document.getElementById('rightArrow').style = 'display: block';
}
function outMouse() {
    document.getElementById('leftArrow').style = 'display: none';
    document.getElementById('rightArrow').style = 'display: none';
}
