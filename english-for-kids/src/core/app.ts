import MainPage from '../pages/MainPage';
import Error404, { ErrorTypes } from '../pages/Error404';
import Page from '../pages/Page';
import GamePage from '../pages/Game';
import { Links, PageId } from '../data';
import Header from './components/header';
import Navigation from './components/navigation';

class App {
  private static container: HTMLElement = document.body;
  private static header: HTMLElement = document.querySelector('.header');
  private static defaultPageId: string = 'current-page';
  private initialPage: MainPage;
  private headerRender: Header;
  private navigation: Navigation;

  static renderNewPage(idPage: string) {
    const curretPageHTML = document.querySelector(`#${App.defaultPageId}`);
    if (curretPageHTML) {
      curretPageHTML.remove();
    }

    let page: Page | null = null;
    const valuePageID = Object.values(PageId) as string[];

    if (idPage === PageId.MainPage) {
      page = new MainPage(idPage);
    } else if (valuePageID.includes(idPage)) {
      let pagetext = Links.find((pageFind) => pageFind.id === idPage).text;

      page = new GamePage(idPage, pagetext);
    } else {
      page = new Error404(idPage, ErrorTypes.Error_404);
    }

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageId;
      App.container.appendChild(pageHTML);
    }
  }

  private enableRouteChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  }

  constructor() {
    this.initialPage = new MainPage('main');
    this.headerRender = new Header('div', 'header__wrapper wrapper');
    this.navigation = new Navigation('div', 'navigation__wrapper');
  }

  run() {
    App.header.appendChild(this.headerRender.render());
    App.container.append(this.navigation.render());
    App.renderNewPage('main');
    this.enableRouteChange();
  }
}

export default App;
