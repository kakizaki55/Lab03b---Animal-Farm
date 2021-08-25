//cat 

const catSound = document.getElementById('cat');
const catPicture = document.getElementById('catpic');



catPicture.addEventListener('click', () => {
    catSound.play();
    catPicture.classList.add('selected');
    dogPicture.classList.remove('selected');
    horsePicture.classList.remove('selected');

});

//dog
const dogSound = document.getElementById('dog');
const dogPicture = document.getElementById('dogpic');



dogPicture.addEventListener('click', () => {
    dogSound.play();
    dogPicture.classList.add('selected');
    catPicture.classList.remove('selected');
    horsePicture.classList.remove('selected');
});

//horse 
const horseSound = document.getElementById('horse');
const horsePicture = document.getElementById('horsepic');



horsePicture.addEventListener('click', () => {
    horseSound.play();
    horsePicture.classList.add('selected');
    catPicture.classList.remove('selected');
    dogPicture.classList.remove('selected');
});

//key pres
document.addEventListener('keydown', event => {
    if(event.key === 'c') {
        catSound.play();
        
    
    }
});