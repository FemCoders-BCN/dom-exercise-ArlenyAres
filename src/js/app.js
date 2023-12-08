
const redColor = document.querySelector('.red');
const grayColor = document.querySelector('.gray');
const blackColor = document.querySelector('.black');
const carButton = document.getElementById('button');
const tagName = document.querySelector('h3');
const imageCard = document.querySelector ('.product-image');

redColor.addEventListener('click', () => {
    carButton.style.backgroundColor = 'red';
    tagName.style.backgroundColor = 'red';
    imageCard.style.backgroundImage = 'url("../../public/img/redcar.jpg")';
});

blackColor.addEventListener('click', () => {
    carButton.style.backgroundColor = 'black';
    tagName.style.backgroundColor = 'black';
    imageCard.style.backgroundImage = 'url("../../public/img/blackcar.jpg")';
});

grayColor.addEventListener('click', () => {
    carButton.style.backgroundColor = 'gray';
    tagName.style.backgroundColor = 'gray';
    imageCard.style.backgroundImage = 'url("../../public/img/graycar.jpg")';
});
