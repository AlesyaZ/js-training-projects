import {
  Navigation, Pagination, Scrollbar, Swiper,
} from '../node_modules/swiper/js/swiper.esm';
import getMovies from './models/MovieApi';
import getRate from './models/MovieRate';
import getTranslation from './models/MovieTranslate';
import './style.css';
import './views/Loader/loader.css';

Swiper.use([Navigation, Pagination, Scrollbar]);

const key = '7906e35e';
let name = 'dream';
let pageNumber = 1;

const SearchMovie = document.querySelector('.searchMovie_input');
const result = document.querySelector('.search-results');
const searchBtn = document.querySelector('.search_btn');
const totalResult = document.querySelector('.total-results');
const swiperWrapper = document.querySelector('.swiper-wrapper');
const loaderMovies = document.getElementById('loader');

let mySwiper = new Swiper('.swiper-container', {
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    // when window width is >= 1020px
    1020: {
      slidesPerView: 4,
      spaceBetween: 100,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function CreateMovieCard(title, poster, year, imdbID, rate) {
  const cards = document.createElement('div');
  cards.classList.add('swiper-slide');

  const titleElem = document.createElement('p');
  titleElem.classList.add('card-title');
  titleElem.innerHTML = title;

  const titleLink = document.createElement('a');
  titleLink.href = `https://www.imdb.com/title/${imdbID}/videogallery/`;
  titleLink.appendChild(titleElem);

  const posterELem = document.createElement('div');
  posterELem.classList.add('poster');
  posterELem.innerHTML = `<img src = ${poster === 'N/A' ? '../src/images/not_img.png' : poster} onerror="this.src='../src/images/not_img.png'">`;

  const yearElem = document.createElement('p');
  yearElem.classList.add('movie-year');
  yearElem.innerHTML = year;

  const rateElem = document.createElement('span');
  rateElem.classList.add('rate');
  rateElem.innerHTML = `<img class='star' src='../src/images/star.png'> ${rate}`;

  cards.appendChild(titleLink);
  cards.appendChild(posterELem);
  cards.appendChild(yearElem);
  cards.appendChild(rateElem);
  swiperWrapper.appendChild(cards);
  mySwiper.appendSlide(cards);
}
CreateMovieCard();

function movieRequest() {
  loaderMovies.style.display = 'block';
  getTranslation(name).then((data) => data.text[0]).then((data) => {
    if (/[а-яА-Я]/i.test(name)) {
      name = data;
    }
    getMovies(name, pageNumber, key).then((movies) => {
      result.innerHTML = `Showing results for "${name}"`;
      totalResult.innerHTML = `found ${movies.totalResults} results`;
      if (pageNumber === 1 && movies.Search) swiperWrapper.innerHTML = '';
      movies.Search.forEach((movie) => {
        getRate(movie.imdbID, key).then((rate) => {
          CreateMovieCard(movie.Title, movie.Poster, movie.Year, rate.imdbID, rate.imdbRating);
        });
      });
      loaderMovies.style.display = 'none';
    }).catch(() => {
      loaderMovies.style.display = 'none';
      if (pageNumber === 1) {
        result.innerHTML = `No results for "${name}"`;
        loaderMovies.style.display = 'none';
        totalResult.innerHTML = 'no results';
      }
    });
  });
}
movieRequest();

const findMovie = () => {
  result.innerHTML = '';
  pageNumber = 1;
  name = SearchMovie.value;
  if (name.length !== 0) movieRequest();
};

searchBtn.onclick = (event) => {
  findMovie();
  event.preventDefault();
};

mySwiper = document.querySelector('.swiper-container').swiper;
mySwiper.on('reachEnd', () => {
  pageNumber += 1;
  movieRequest();
});

const next = document.querySelector('.swiper-button-next');
next.onclick = () => { mySwiper.slideNext(); };
const prev = document.querySelector('.swiper-button-prev');
prev.onclick = () => { mySwiper.slidePrev(); };
