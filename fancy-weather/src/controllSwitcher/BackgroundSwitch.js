import getBackground from '../models/getBackground';

export default class BGSwitcher {
  constructor(switcher, backgroundCont) {
    this.switcher = switcher;
    this.backgroundCont = backgroundCont;
    this.lastQuery = ' ';
    this.lastURL = '';
    this.addEvents();
  }

  addEvents() {
    this.switcher.addEventListener('click', () => {
      this.updateBackground();
    });
  }

  async updateBackground(BackgroundQuery) {
    let imgURL = '';
    if (BackgroundQuery) {
      this.lastQuery = BackgroundQuery;
    }
    this.switcher.classList.add('load');
    try {
      imgURL = await getBackground(this.lastQuery);
    } finally {
      this.backgroundCont.classList.add('disappear');
      this.backgroundCont.addEventListener('transitionend', () => {
        if (this.backgroundCont.classList.contains('disappear')) {
          const BackgroundImage = new Image();
          BackgroundImage.onload = () => {
            if (BackgroundImage.src === this.lastURL) {
              return;
            }
            this.backgroundCont.style.backgroundImage = `url(${BackgroundImage.src})`;
            this.switcher.classList.remove('load');
            this.backgroundCont.classList.remove('disappear');
            this.lastURL = BackgroundImage.src;
          };
          BackgroundImage.src = imgURL;
        }
      });
      console.log(`Пора года, время суток: ${this.lastQuery}`);
    }
  }
}
