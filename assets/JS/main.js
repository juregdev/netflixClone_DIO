changePoster = () => {
  const moviesPoster = [
    {
      name: 'THE BATMAN',
      url: './assets/IMG/moviesPoster/batman.png',
      age: './assets/IMG/age/fourten.png'
    },
    {
      name: 'AWAKE',
      url: './assets/IMG/moviesPoster/awake.jpg',
      age: './assets/IMG/age/sixten.png'
    },
    {
      name: 'NÃO OLHE PRA CIMA',
      url: './assets/IMG/moviesPoster/naoOlhe.jpg',
      age: './assets/IMG/age/sixten.png'
    },
    {
      name: 'ARMY OF DEAD',
      url: './assets/IMG/moviesPoster/armyOfDead.jpg',
      age: './assets/IMG/age/eighten.png'
    }
  ]

  i = getRandomIntInclusive(0, 3)
  document.querySelector('#titlePoster').textContent = moviesPoster[i].name
  document.querySelector('#posterIMG').src = moviesPoster[i].url
  document.querySelector('#age').src = moviesPoster[i].age
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

changePoster()

let $arrowRight = document.querySelectorAll('.arrowRight')
i = [0, 0, 0, 0]

$arrowRight.forEach(arrow => {
  arrow.addEventListener('click', () => {
    let arrowPosition = 0
    switch (arrow.id) {
      case '':
        arrowPosition = 0
        break
      case 'arrowRightDrama':
        arrowPosition = 1
        break
      case 'arrowRightAction':
        arrowPosition = 2
        break
      case 'arrowRightHorror':
        arrowPosition = 3
        break
    }
    i[arrowPosition] += valueWidth()

    let $lastEl = arrow.nextElementSibling.nextElementSibling.lastElementChild

    if ($lastEl.getBoundingClientRect().x < window.innerWidth) {
      arrow.nextElementSibling.style.display = 'none'
      i[arrowPosition] = 0
    } else {
      arrow.nextElementSibling.style.display = 'flex'
    }

    arrow.nextElementSibling.nextElementSibling.style.transform = `translateX(-${i[arrowPosition]}px)`
  })
})

let $arrowLeft = document.querySelectorAll('.arrowLeft')

$arrowLeft.forEach(arrow => {
  arrow.addEventListener('click', () => {
    let arrowPosition = 0
    switch (arrow.id) {
      case '':
        arrowPosition = 0
        break
      case 'arrowLeftDrama':
        arrowPosition = 1
        break
      case 'arrowLeftAction':
        arrowPosition = 2
        break
      case 'arrowLeftHorror':
        arrowPosition = 3
        break
    }
    i[arrowPosition] -= valueWidth()
    if (i[arrowPosition] == 0) arrow.style.display = 'none'
    arrow.nextElementSibling.style.transform = `translateX(-${i[arrowPosition]}px`
  })
})

const valueWidth = () => {
  if (window.innerWidth < 1100) {
    return window.innerWidth / 3
  } else {
    return document.querySelector('.carrossel').scrollWidth / 5 - 60
  }
}

const $menu = document.querySelector('.dropMenu')

$menu.addEventListener('click', () => {
  if (document.querySelector('#menu').style.transform == 'translateY(0px)') {
    if (window.scrollY == 0) {
      document.querySelector('#headerMenu').style = 'background:transparent;'
    } else {
      document.querySelector('#headerMenu').style = ''
    }

    document.querySelector('#menu').style.transform = ''
    document.querySelector('.accountInfo').style.transform = ''
  } else {
    document.querySelector('#headerMenu').style =
      'height:100vh; background:#141414'
    document.querySelector('#menu').style.transform = 'translateY(0px)'
    document.querySelector('.accountInfo').style.transform = 'translateY(0px)'
  }
})

document.querySelector('#headerMenu').style.background = 'transparent'

window.addEventListener('scroll', () => {
  let topWindow = window.scrollY

  if (topWindow == 0) {
    document.querySelector('#headerMenu').style.background = 'transparent'
  } else {
    document.querySelector('#headerMenu').style.background = ''
  }
})

const apiRequest = async page => {
  const urlInRanted = `https://api.themoviedb.org/3/discover/movie?api_key=abe9ef82fb72277046d8e71df76e2720&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`

  const urlAction = `https://api.themoviedb.org/3/discover/movie?api_key=abe9ef82fb72277046d8e71df76e2720&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=28&with_watch_monetization_types=flatrate`

  const urlDrama = `https://api.themoviedb.org/3/discover/movie?api_key=abe9ef82fb72277046d8e71df76e2720&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=18&with_watch_monetization_types=flatrate`

  const urlHorror = `https://api.themoviedb.org/3/discover/movie?api_key=abe9ef82fb72277046d8e71df76e2720&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=27&with_watch_monetization_types=flatrate`

  try {
    let inRanted = await axios.get(urlInRanted)
    let action = await axios.get(urlAction)
    let drama = await axios.get(urlDrama)
    let horror = await axios.get(urlHorror)

    console.log(inRanted.data)
    console.log(action.data)
    console.log(drama.data)
    console.log(horror.data)

    createElement(inRanted.data.results, 'inRated')
    createElement(action.data.results, 'action')
    createElement(drama.data.results, 'drama')
    createElement(horror.data.results, 'horror')
  } catch (e) {}
}

const createElement = (data, genre) => {
  data.forEach(data => {
    let urlimg = `https://image.tmdb.org/t/p/w500${data.backdrop_path}`
    console.log(data)
    document.querySelector(`#${genre}`).innerHTML += ` 
    <div class="card">
      <img src="${urlimg}" alt="Backdrop ${data.title}" />
      <h1 class="nameFilm">${data.title}</h1>
      <div class="btnCards">
        <button class="playCard"><img src="./assets/IMG/play.png" alt=""></button>
        <button class="moreBtn"><img src="./assets/IMG/morebtn.png" alt=""></button>
        <button class="likeBtn"><img src="./assets/IMG/like.png" alt=""></button>
      </div>
    </div>`
  })
  setTimeout(
    () =>
      (document.querySelector(`#${genre}`).parentNode.parentNode.style.display =
        'block'),
    100
  )
}

apiRequest(getRandomIntInclusive(1, 100))
setTimeout(apiRequest(getRandomIntInclusive(4, 100)), 1000)
