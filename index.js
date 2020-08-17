'use_strict';

//need submit listener
//fetch action to api
//render function

function renderResults(jsonData) {
  let html = `${jsonData.message}`;
  $('.results').html(`<img src="${html}" alt="random dog image">`);
}

function getDogPics(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random/1`)
    .then(response => response.json())
    .then(responseJson => renderResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function handleDogFormSubmit() {
  $('.dog-images-form').submit(function(event) {
    event.preventDefault();
    const breedOfDog = $('.js-dog-images-val').val().toLowerCase();
    $('.js-dog-images-val').val('');
    getDogPics(breedOfDog);
  });
}

$(handleDogFormSubmit);