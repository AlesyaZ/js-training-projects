import {
  Navigation, Pagination, Scrollbar, Swiper,
} from '../node_modules/swiper/js/swiper.esm';
import getMovies from './models/MovieApi';
import getRate from './models/MovieRate';
import getTranslation from './models/MovieTranslate';
import './style.css';

Swiper.use([Navigation, Pagination, Scrollbar]);

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

const next = document.querySelector('.swiper-button-next');
next.onclick = () => { mySwiper.slideNext(); };
const prev = document.querySelector('.swiper-button-prev');
prev.onclick = () => { mySwiper.slidePrev(); };
