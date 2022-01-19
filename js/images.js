const myButton = document.querySelector('button');
const myBox = document.querySelector('.box');
const images = ["images/img1.jpg", "images/img2.jpg", "images/img4.jpg", "images/img5.jpg", "images/img6.jpg"];

let randomValues=[];

init();

function random_image(images) {
   var random = randomize(images);
   while (images[random] === document.getElementById("image").src) {
      random = randomize(images)
   }

   if(randomValues.length === 0){
    for(let i=0; i< images.length; i++){
        randomValues.push(i);
        console.log(`${i} add`);
    }
}

    let randomIndex = Math.floor(Math.random() * randomValues.length);
    let indexFromMyarray = randomValues[randomIndex];
    randomValues.splice(randomIndex, 1);
    document.getElementById("image").src = images[indexFromMyarray].toString();
}

function randomize(array) {
   return Math.floor((Math.random() * (array.length)));
}

function init() {
   document.getElementById("image").addEventListener("click", function() {
      random_image(images);
   });
   random_image(images);
}

