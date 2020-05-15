import {
  Navigation, Pagination, Scrollbar, Swiper,
} from '../node_modules/swiper/js/swiper.esm';
import getMovies from './models/MovieApi';
import getRate from './models/MovieRate';
import getTranslation from './models/MovieTranslate';
import './style.css';

Swiper.use([Navigation, Pagination, Scrollbar]);

const swiperWrapper = document.querySelector('.swiper-wrapper');

const mySwiper = new Swiper('.swiper-container', {
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

const next = document.querySelector('.swiper-button-next');
next.onclick = () => { mySwiper.slideNext(); };
const prev = document.querySelector('.swiper-button-prev');
prev.onclick = () => { mySwiper.slidePrev(); };
