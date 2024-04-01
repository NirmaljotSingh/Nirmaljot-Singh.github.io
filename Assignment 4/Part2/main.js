const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];


/* Declaring the alternative text for each image file */
const alternativeTextArray = ['Closeshot of a human eye', 'A beautifull landscape', 'Purple and White Flowers', 'Egyptians', 'Butterfly'];



/* Looping through images */
for( let i = 0; i < imageArray.length; i++ )
{
const newImage = document.createElement('img');
newImage.setAttribute('src', 'images/' + imageArray[i]);
newImage.setAttribute('alt', alternativeTextArray[i]);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', (e) => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
});

}
/* Wiring up the Darken/Lighten button */
