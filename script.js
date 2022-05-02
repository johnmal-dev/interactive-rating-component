const submitButton = document.querySelector('.submit-btn')
const cardContent1 = document.querySelector('.card-content-1')
const cardContent2 = document.querySelector('.card-content-2')
const ratingButtons = document.querySelectorAll('.rating-btn')
const ratingSpan = document.querySelector('span')

submitButton.addEventListener('click', onSubmit);
ratingButtons.forEach(btn => btn.addEventListener('click', clickRating))

function onSubmit() {
  console.log('submit click');
  cardContent1.classList.add('hidden')
  cardContent2.classList.remove('hidden')
  ratingSpan.innerText = rating
}

function clickRating(e) {
  rating = e.target.innerText;
  ratingButtons.forEach(btn => {
    btn.classList.remove('active')
  });

  if (e.target.classList.contains('rating-btn')) {
    e.target.classList.add('active')
  } else {
    e.target.parentElement.classList.add('active');
  }
}