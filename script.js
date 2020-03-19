const sliderWrap = document.querySelector('.slider__wrap');
const listDots = document.querySelectorAll('.pointer-dots__item');
const feedback = {
    width: document.querySelector('.testimonials__content').offsetWidth + 10, //ширина блока с отзывом
    count: 1, // видимые отзывы    
}
let currentPosition = 0;
let dotPink = 0;
console.log(feedback.width)

document.getElementById('arrow-next').addEventListener('click', () => {
    const listFeedbacks = document.querySelectorAll('.testimonials__content');
    let listDotsArr = [...listDots];
    //сдвиг вправо
    currentPosition -= feedback.width * feedback.count;

    currentPosition = Math.max(currentPosition, -feedback.width * (listFeedbacks.length - feedback.count));
    sliderWrap.style.left = currentPosition + 'px';

    dotPink < listDotsArr.length ? dotPink == 3 ? dotPink = 3 : ++dotPink : dotPink = 0;
    doDotPink(dotPink, listDotsArr);
    
});

document.getElementById('arrow-prev').addEventListener('click', () => {
    let listDotsArr = [...listDots];
    //сдвиг влево
    currentPosition += feedback.width * feedback.count;

    currentPosition = Math.min(currentPosition, 0);
    sliderWrap.style.left = currentPosition + 'px';

    dotPink < listDotsArr.length ? dotPink == 0 ? dotPink = 0 : --dotPink : dotPink = 3;
    doDotPink(dotPink, listDotsArr);
})

function doDotPink(dotPink, listDotsArr) {
    for (let i = 0; i < listDotsArr.length; ++i) {
        if (i === dotPink) {
            listDotsArr[i].classList.add('pointer-dots__item_selected');
        } else {
            listDotsArr[i].classList.remove('pointer-dots__item_selected');
        }
    } 
}

