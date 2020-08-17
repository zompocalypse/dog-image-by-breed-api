'use_strict';

//need submit listener
//fetch action to api
//render function

function renderResults(jsonData) {
  let htmlTemplate = [];
  console.log(jsonData);
  console.log(jsonData.message.length);
  for(let i = 0; i < jsonData.message.length; i++) {
    console.log(jsonData.message[i]);
    htmlTemplate.push(`
    <img src="${jsonData.message[i]}" alt="random dog image">
    `);
  }
  $('.results').html(htmlTemplate.join());
}

function getDogPics(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => renderResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function handleDogFormSubmit() {
  $('.dog-images-form').submit(function(event) {
    event.preventDefault();
    const requestNumDogs = $('.js-dog-images-val').val();
    $('.js-dog-images-val').val('');
    getDogPics(requestNumDogs);
  });
}

$(handleDogFormSubmit);