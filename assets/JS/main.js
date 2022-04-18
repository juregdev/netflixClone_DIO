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


const $nextAction = document.querySelector("#arrowRightAction")
const $prevAction = document.querySelector("#arrowLeftAction")
let carrosselAction = 0

$nextAction.addEventListener('click', () => {
  $prevAction.style.display = 'flex'

  if (carrosselDrama >= 52.5){
    carrosselDrama=0;
    $prevAction.style.display = 'none'
    $nextAction.nextElementSibling.nextElementSibling.style.transform = `translateX(-${carrosselDrama}%)`;
  } else {
    carrosselDrama+= 17.5
    $nextAction.nextElementSibling.nextElementSibling.style.transform = `translateX(-${carrosselDrama}%)`;
  }

})

$prevAction.addEventListener('click', () => {

  if (carrosselDrama <= 17.5){
    carrosselDrama=0;
    $prevAction.nextElementSibling.style.transform = `translateX(${carrosselDrama}%)`
    $prevAction.style.display = 'none'
    console.log(true)
  }
  else{
    carrosselDrama-= 17.5
    $prevAction.nextElementSibling.style.transform = `translateX(-${carrosselDrama}%)`;
  
  }
})

const apiPull = async () => {
  const API_KEY = '?api_key=abe9ef82fb72277046d8e71df76e2720';
  const BASE_URL = 'https://api.themoviedb.org/3/movie/changes';


 await axios.get(`${BASE_URL}${API_KEY}`).then(res =>{searchMovie(res.data.results)})
 
}


const searchMovie = async (data) => {
  const BASE_URLMovie = 'https://api.themoviedb.org/3/movie/';
  const API_KEY = '?api_key=abe9ef82fb72277046d8e71df76e2720';
  
  for (i in data) {

    if(i > 1000){return} else{

    try{
      let movie = await axios.get(`${BASE_URLMovie}${data[i].id}${API_KEY}`)
      card(movie.data)
      
    } catch(e){
      console.error("GET ERROR")
    }
  }}
}

let $element = ''
let c_rated = 0
let c_drama = 0
let c_action = 0



const card = async (data) => {


  if(document.querySelector('#inRated').children.length >= 23) {
    document.querySelectorAll('.moviesCarrossel')[0].style.display = 'block'
  }

  if(document.querySelector('#drama').children.length >= 23) {
    document.querySelectorAll('.moviesCarrossel')[1].style.display = 'block'
   
  }
  if(document.querySelector('#action').children.length >= 23) {
    document.querySelectorAll('.moviesCarrossel')[2].style.display = 'block'
  }

  if (document.querySelector('#inRated').children.length >= 23 && document.querySelector('#drama').children.length >= 23 && document.querySelector('#action').children.length >= 23) {
     return
  }

  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  let $class = ''

  if(data.backdrop_path == null) { return}
 
  for (i in data.genres) {
    switch (data.genres[i].name) {
      case 'Action':
        $class = 'action'
        c_action++
        break;
      case 'Drama': 
        $class = 'drama'
        c_drama++
        break;
      default :
        $class = 'inRated'
        c_rated++
        break;
    }
  }

   if(document.querySelector('#inRated').children.length >= 23 && $class == 'inRated') {
    return
  } else if($class == 'drama' && document.querySelector('#drama').children.length >= 23) {
    return
  } else if($class == 'action' && document.querySelector('#action').children.length >= 23){
    return
  } else {
  $card = `
  <div class="card">
  <img src="${IMG_URL}${data.backdrop_path}" alt="card">
  <h1 class="nameFilm">${data.title}</h1>
  <div class="btnCards">
    <button class="playCard"><img src="./assets/IMG/play.png" alt=""></button>
    <button class="moreBtn"><img src="./assets/IMG/morebtn.png" alt=""></button>
    <button class="likeBtn">
      <div>
        <img src="./assets/IMG/dislike.png" alt="">
        <img src="./assets/IMG/like.png" alt="">
        <img src="./assets/IMG/veryLike.png" alt="">
      </div>
    </button>
  </div>
</div>
  `
  document.querySelector(`#${$class}`).innerHTML += $card
  }
}

apiPull()

document.querySelectorAll('.moviesCarrossel')
