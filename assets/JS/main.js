changePoster = () => {
  const moviesPoster = [
    {
      name: 'THE BATMAN',
      url: './assets/IMG/moviesPoster/batman.png',
      age:'./assets/IMG/age/fourten.png'
    },
    {
      name: 'AWAKE',
      url: './assets/IMG/moviesPoster/awake.jpg',
      age:'./assets/IMG/age/sixten.png'
    },
    {
      name: 'NÃO OLHE PRA CIMA',
      url: './assets/IMG/moviesPoster/naoOlhe.jpg',
      age:'./assets/IMG/age/sixten.png'
    },
    {
      name: 'ARMY OF DEAD',
      url: './assets/IMG/moviesPoster/armyOfDead.jpg',
      age:'./assets/IMG/age/eighten.png'
    }
  ];
 
  i = getRandomIntInclusive(0,3)
  document.querySelector('#titlePoster').textContent  = moviesPoster[i].name;
  document.querySelector('#posterIMG').src = moviesPoster[i].url;
  document.querySelector('#age').src = moviesPoster[i].age;
}

function getRandomIntInclusive (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

changePoster()

document.querySelector('#headerMenu').style.background = 'transparent';

window.addEventListener('scroll', () => {
  let topWindow = window.scrollY;
  if (topWindow == 0){
    document.querySelector('#headerMenu').style.background = 'transparent';
  } else {
    document.querySelector('#headerMenu').style.background = ''
  }
})


const $next = document.querySelector(".arrowRight")
const $prev = document.querySelector(".arrowLeft")
let carrosselRated =0
$next.addEventListener('click', () => {
  $prev.style.display = 'flex'

  if (carrosselRated >= 52.5){
    carrosselRated=0;
    $prev.style.display = 'none'
    $next.nextElementSibling.nextElementSibling.style.transform = `translateX(-${carrosselRated}%)`;
  } else {
    carrosselRated+= 17.5
    $next.nextElementSibling.nextElementSibling.style.transform = `translateX(-${carrosselRated}%)`;

  }
})

$prev.addEventListener('click', () => {

  if (carrosselRated <= 17.5){
    carrosselRated=0;
    $prev.nextElementSibling.style.transform = `translateX(${carrosselRated}%)`
    $prev.style.display = 'none'
    console.log(true)
  }
  else{
    carrosselRated-= 17.5
  $prev.nextElementSibling.style.transform = `translateX(-${carrosselRated}%)`;
  
  }
})


const $carrosselDrama = document.querySelector('.drama');
const $nextDrama = document.querySelector("#arrowRightDrama")
const $prevDrama = document.querySelector("#arrowLeftDrama")
let carrosselDrama = 0

$nextDrama.addEventListener('click', () => {
  $prevDrama.style.display = 'flex'

  if (carrosselDrama >= 52.5){
    carrosselDrama=0;
    $prevDrama.style.display = 'none'
    $nextDrama.nextElementSibling.nextElementSibling.style.transform = `translateX(-${carrosselDrama}%)`;
  } else {
    carrosselDrama+= 17.5
    $nextDrama.nextElementSibling.nextElementSibling.style.transform = `translateX(-${carrosselDrama}%)`;
  }

})

$prevDrama.addEventListener('click', () => {

  if (carrosselDrama <= 17.5){
    carrosselDrama=0;
    $prevDrama.nextElementSibling.style.transform = `translateX(${carrosselDrama}%)`
    $prevDrama.style.display = 'none'
    console.log(true)
  }
  else{
    carrosselDrama-= 17.5
    $prevDrama.nextElementSibling.style.transform = `translateX(-${carrosselDrama}%)`;
  
  }
})