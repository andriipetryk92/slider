let next, previous, slides, slides1, currentSlide,
preSlide, neSlide, little,showing, nextShowing, previousShowing,
widthPx, r, u, x, shadow, nextSlide, previousSlide, goToSlide,
leave, leave1, leave6, change, onMouse, outMouse, modalWindow, closeModal;

next = document.getElementById('next');
previous = document.getElementById('previous');

next.onclick = () => { nextSlide() };
previous.onclick = () => { previousSlide() };
nextSlide = () => { goToSlide(currentSlide+1) };
previousSlide = () => { goToSlide(currentSlide-1) };
slides = document.getElementsByClassName('slide');
currentSlide = 3;
preSlide = 2;
neSlide = 4;
goToSlide = (i) => {
    slides[currentSlide].className = 'slide';
    currentSlide = (i+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
    slides[preSlide].className = 'slide';
    preSlide = currentSlide - 1;
    if(preSlide < 0){
        preSlide = 6;
        slides[preSlide].className = 'slide previousShowing';
    } else {
        slides[preSlide].className = 'slide previousShowing';
    };
    slides[neSlide].className = 'slide';
    neSlide = currentSlide + 1;
    if( neSlide > 6 ){
        neSlide = 0;
        slides[neSlide].className = 'slide nextShowing';
    } else {
        slides[neSlide].className = 'slide nextShowing';
    };
    slides[currentSlide].className = 'slide showing';
    showing = document.getElementsByClassName('showing')[0];
    nextShowing = document.getElementsByClassName('nextShowing')[0];
    previousShowing = document.getElementsByClassName('previousShowing')[0];
    nextShowing.style.display = 'none';
    previousShowing.style.display = 'none';
    for( let g = 0; g < slides.length; g++){
        document.getElementsByClassName('slide')[g].style.display = 'none';
    };
    showing.style.display = 'flex';
    showing.style.left = '0px';
};
little = [];
slides1 = document.getElementsByClassName('slide1');
for( let i = 0; i < slides1.length; i++) {
    little.push(slides1[i]);
};
for( let i = 0; i < little.length; i++) {
    little[i].onmouseover = change.bind(this,i);
    function change(i) {
        goToSlide(i);
    };
};
leave = () => {
    showing.style = 'display:flex; left: -256px';
    previousShowing.style.left = '-256px';
    nextShowing.style.left = '-256px';
};
leave1 = () => {
    document.getElementsByClassName('slide')[0].style.left = '0px';
    showing.style.display = 'flex';
    previousShowing.style.display = 'none';
    nextShowing.style.display = 'none';
};
leave6 = () => {
    document.getElementsByClassName('slide')[6].style.left = '0px';
    showing.style.display = 'flex';
    previousShowing.style.display = 'none';
    nextShowing.style.display = 'none';
};
change = (u) => { goToSlide(u) };

let  showImg = (event) => {
    x = event.offsetX;
    if (x > 50) {
        widthPx = -x * 2.56 + 128;
    } else if (x < 50) {
        widthPx = -(x * 2.56 - 128);
    } else {
        widthPx = 0;
    };
    for (let j = 0; j < little.length; j++) {
        document.getElementsByClassName('slide')[j].style.display = 'none';
    };
    showing.style.display = 'flex';
    previousShowing.style.display = 'flex';
    nextShowing.style.display = 'flex';
    if (document.getElementsByClassName('slide')[0] == showing ){
        showing.style.left = widthPx + 'px';
        previousShowing.style.left = widthPx + 'px';
        nextShowing.style.left = widthPx + 'px';
    } else if (document.getElementsByClassName('slide')[6] == showing ) {
        showing.style.left = -512 + widthPx + 'px';
        previousShowing.style.left = -512 + widthPx + 'px';
        nextShowing.style.left = 456 + widthPx + 'px';
    } else {
        showing.style.left = -256 + widthPx + 'px';
        previousShowing.style.left = -256 + widthPx + 'px';
        nextShowing.style.left = -256 + widthPx + 'px';
    };
};

for( u = 0; u < little.length; ++u) {
    little[u].onmouseover = change.bind(this, u);
    little[u].onmousemove = showImg;
    little[u].onmouseleave = leave;
    little[0].onmouseleave = leave1;
    little[6].onmouseleave = leave6;
};

onMouse = () => {
    document.getElementById('previous').style = 'display: block';
    document.getElementById('next').style = 'display: block';
};
outMouse = () => {
    document.getElementById('previous').style = 'display: none';
    document.getElementById('next').style = 'display: none';
};
modalWindow = () => {
    document.getElementById('slider').style = 'display: flex; justify-content: center; width: 1000px';
    showing.style = 'width: 1000px; height: 500px';
    previousShowing.style.display = 'none';
    nextShowing.style.display = 'none';
    shadow.style = 'display: block';
};
closeModal = () => {
    document.getElementById('slider').style = 'display: flex';
    showing.style = 'width: 256px; height: 256px';
    shadow.style = 'display: none';
};
document.getElementById('main').onmouseenter = onMouse;
document.getElementById('main').onmouseleave = outMouse;

for( let i = 0; i < slides.length; i++ ) {
    slides[i].onclick = modalWindow;
};
shadow = document.getElementById('shadow');
shadow.onclick = closeModal;









