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