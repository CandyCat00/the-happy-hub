let yasashi = {
  'image': 'https://cdn.glitch.com/9302465f-36ff-4dbd-8f13-95adddccdfd2%2F598C326D-4529-46CA-BC60-723AEBC36847.jpeg?v=1625601300615',
  'name' : 'Yasashi',
  'basic': 'Species: Corgi<br />Coat: Blue<br />Eye Color: Yellow<br />Weight: 25lb<br />',
  'background': 'Cheerful and upbeat, Yasashi’s first few years of her childhood was spent at “Puppy Pawz Orphange” after getting separated from her parents. Her blue fur made it hard for her to fit in, making her very self conscious about her look. However, when she is acquainted with others dear to her heart, she’s known to put their well being above her own. Her smile is quite contagious.',
  'gallery': []
}

let scarem = {
  'image': '',
  'name': 'Scarem',
  'basic': 'Species: Fruit Bat<br />Coat: Brown<br />Eye Color: Violet<br />',
  'background': '',
  'gallery': []
}

let ginji = {
  'image': '',
  'name' : 'Ginji',
  'basic': 'Species: Tanooki<br />Coat: Orange<br />Eye Color: Cyan<br />',
  'background': '',
  'gallery': ['https://cdn.glitch.com/9302465f-36ff-4dbd-8f13-95adddccdfd2%2FprettyBoi.jpeg?v=1624753111273',]
}

let mantis = {
  'image': '',
  'name' : 'Mantis',
  'basic': 'Species: Unknown<br />Coat: White<br />Eye Color: Purple<br />',
  'background': '',
  'gallery': []
}

let displayYasashi = () => {
  document.querySelector('#image').src = yasashi.image;
  document.querySelector('#name').innerHTML = yasashi.name;
  document.querySelector('#basic').innerHTML = yasashi.basic;
  document.querySelector('#background').innerHTML = yasashi.background;
  fillGallery(yasashi.gallery);
}

document.querySelector('#yasashi').addEventListener('click', displayYasashi);

let displayScarem = () => {
  document.querySelector('#image').src = scarem.image;
  document.querySelector('#name').innerHTML = scarem.name;
  document.querySelector('#basic').innerHTML = scarem.basic;
  document.querySelector('#background').innerHTML = scarem.background;
  fillGallery(scarem.gallery);
}

document.querySelector('#scarem').addEventListener('click', displayScarem);

let displayGinji = () => {
  document.querySelector('#image').src = ginji.image;
  document.querySelector('#name').innerHTML = ginji.name;
  document.querySelector('#basic').innerHTML = ginji.basic;
  document.querySelector('#background').innerHTML = ginji.background;
  fillGallery(ginji.gallery);
}

document.querySelector('#ginji').addEventListener('click', displayGinji);

let displayMantis = () => {
  document.querySelector('#image').src = mantis.image;
  document.querySelector('#name').innerHTML = mantis.name;
  document.querySelector('#basic').innerHTML = mantis.basic;
  document.querySelector('#background').innerHTML = mantis.background;
  fillGallery(mantis.gallery);
}

document.querySelector('#mantis').addEventListener('click', displayMantis);


function fillGallery(gallery) {
  let listItem;
  let image;
  for (let i = 0; i < gallery.length; i++) {
    //create the new list item
    listItem = document.createElement('li');
    image = document.createElement('img');
    //assign each gallery image to new li
    image.src = gallery[i];
    //add the new li to the gallery ul
    document.querySelector('#gallery').appendChild(listItem);
    listItem = document.createElement()
  }
}