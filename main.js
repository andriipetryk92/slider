let next = document.getElementById('next');
let previous = document.getElementById('previous');

next.onclick = function(){
    nextSlide();
};
previous.onclick = function(){
    previousSlide();
};
function nextSlide(){
    goToSlide(currentSlide+1);
}

function previousSlide(){
    goToSlide(currentSlide-1);
}
let slides = document.getElementsByClassName('slide');
let currentSlide = 0;

function goToSlide(i){
    slides[currentSlide].className = 'slide';
    currentSlide = (i+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

let big = [];
for( let i = 0; i < slides.length; i++) {
    big.push(slides[i]);
}
console.log(big);

let little = [];
let slides1 = document.getElementsByClassName('slide1');
for( let i = 0; i < slides1.length; i++) {
    little.push(slides1[i]);
}
console.log(little);

for( let i =0; i < little.length; i++) {
    little[i].onmouseover = change.bind(this,i);

    function change(i) {
        goToSlide(i);
    }
}

document.getElementById('all').onmouseenter = onMouse;
document.getElementById('all').onmouseleave = outMouse;
function onMouse() {
    document.getElementById('previous').style = 'display: block';
    document.getElementById('next').style = 'display: block';
};
function outMouse() {
    document.getElementById('previous').style = 'display: none';
    document.getElementById('next').style = 'display: none';
};

let modal = document.getElementsByClassName('slide');
for( let i = 0; i < modal.length; i++ ) {
    modal[i].onclick = modalWindow;
}
let shadow = document.getElementById('shadow');

function modalWindow() {
    document.getElementById('slider').style = 'display: flex; justify-content: center';
    document.getElementsByClassName('showing')[0].style = 'width: 700px; height: 650px';
    shadow.style = 'display: block';
}

shadow.onclick = closeModal;
    function closeModal() {
        document.getElementById('slider').style = 'display: flex; justify-content: center';
        document.getElementsByClassName('showing')[0].style = 'width: 300px; height: 300px';
        shadow.style = 'display: none';
    }

