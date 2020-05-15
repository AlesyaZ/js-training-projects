import {
  Navigation, Pagination, Scrollbar, Swiper,
} from '../node_modules/swiper/js/swiper.esm';
import getMovies from './models/MovieApi';
import getRate from './models/MovieRate';
import getTranslation from './models/MovieTranslate';
import './style.css';

Swiper.use([Navigation, Pagination, Scrollbar]);
