import Search from './Search';
import setError from '../common/setError';
/* eslint-disable no-undef */

export default class SearcherMicrophone extends Search {
  constructor(SearchWeather, SearchMicrophone) {
    super(SearchWeather);
    this.SearchMicrophone = SearchMicrophone;
    this.SearchMicrophone.addEventListener('click', this.SearchMicrophoneHendler.bind(this));
    this.initRecognition();
  }

  initRecognition() {
    if (window.SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.interimResults = true;
    } else if (window.webkitSpeechRecognition) {
      // eslint-disable-next-line new-cap
      this.recognition = new webkitSpeechRecognition();
      this.addRecognitionEvents();
    }
  }

  ActiveMicrophone() {
    this.SearchMicrophone.classList.add('active');
  }

  inactiveMicrophone() {
    this.SearchMicrophone.classList.remove('active');
  }

  resultOfSearch(event) {
    const BackgroundQuery = event.results[0][0].transcript;
    this.SearchWeather.querySelector('.input').value = BackgroundQuery;
    this.SearchWeather.onsubmit();
  }

  SearchMicrophoneHendler() {
    if (this.recognition) {
      if (!this.SearchMicrophone.classList.contains('active')) {
        this.recognition.start();
      } else {
        this.SearchMicrophone.classList.remove('active');
        this.recognition.abort();
      }
    } else {
      setError('Your browzer does not support speech recognition');
    }
  }

  addRecognitionEvents() {
    this.recognition.addEventListener('start', this.ActiveMicrophone.bind(this));
    this.recognition.addEventListener('end', this.inactiveMicrophone.bind(this));
    this.recognition.addEventListener('result', this.resultOfSearch.bind(this));
  }
}
