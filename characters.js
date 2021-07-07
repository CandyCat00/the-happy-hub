let yasashi = {
  'image': 'https://cdn.glitch.com/9302465f-36ff-4dbd-8f13-95adddccdfd2%2F598C326D-4529-46CA-BC60-723AEBC36847.jpeg?v=1625601300615',
  'name' : 'Yasashi',
  'basic': 'Species: Corgi<br />Coat: Blue<br />Eye Color: Yellow<br />Weight: 25lb<br />',
  'background': 'Cheerful and upbeat, Yasashi’s first few years of her childhood was spent at “Puppy Pawz Orphange” after getting separated from her parents. Her blue fur made it hard for her to fit in, making her very self conscious about her look. However, when she is acquainted with others dear to her heart, she’s known to put their well being above her own. Her smile is quite contagious.',
  'gallery': []
}

let scarem = {
  'image': 'https://cdn.glitch.com/9302465f-36ff-4dbd-8f13-95adddccdfd2%2F56363E1B-4B15-43D7-8B63-88CA477685C2.jpeg?v=1625696961218',
  'name': 'Scarem',
  'basic': 'Species: Fruit Bat<br />Coat: Brown<br />Eye Color: Violet<br />',
  'background': 'Lilinoe is the princess born into Kōmori Kingdom. When she was young she encountered a spirit that paired with her, causing her eyes to appear soulless, like she was possessed. This brought fear to her parents and hid her away in her room so the kingdom wouldn’t find out. Eventually this isolation brought her to the decision to runaway; giving herself the undercover name “Scarem.”',
  'gallery': []
}

let ginji = {
  'image': 'https://cdn.glitch.com/9302465f-36ff-4dbd-8f13-95adddccdfd2%2FA68B84A6-9C74-496F-B9DD-F7B51B7944DE.jpeg?v=1625696949249',
  'name' : 'Ginji',
  'basic': 'Species: Tanooki<br />Coat: Orange<br />Eye Color: Cyan<br />',
  'background': '',
  'gallery': ['https://cdn.glitch.com/9302465f-36ff-4dbd-8f13-95adddccdfd2%2FprettyBoi.jpeg?v=1624753111273',]
}

let mantis = {
  'image': 'https://cdn.glitch.com/9302465f-36ff-4dbd-8f13-95adddccdfd2%2F44CFA87B-5253-4B70-B9CE-7D87A31DF3E1.jpeg?v=1625696945860',
  'name' : 'Mantis',
  'basic': 'Species: Unknown<br />Coat: White<br />Eye Color: Purple<br />',
  'background': 'Mantis is an alien who fell down to Earth. Unable to speak the local language or understand Earth’s customs, she was naturally quite oblivious and naïve to most things. Luckily she had Genji to teach her what she didn’t know— and to keep her from accidentally floating away.',
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
  //first, make sure there are no other list items
  document.querySelector('#gallery').innerHTML = '';
  
  //create a li and an img element for each gallery image in the given array
  let listItem, image;
  for (let i = 0; i < gallery.length; i++) {
    listItem = document.createElement('li');
    image = document.createElement('img');
    
    //assign gallery image to the src of a new img
    image.src = gallery[i];
    
    //put the image in the new li and then add the li to the gallery ul
    listItem.appendChild(image);
    document.querySelector('#gallery').appendChild(listItem);
  }
}