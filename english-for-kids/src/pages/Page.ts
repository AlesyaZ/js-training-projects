import Header from '../core/components/header';

abstract class Page {
  protected container: HTMLElement;

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  protected changeHeaderTitle(text: string) {
    Header.pageTitle.innerText = text;
    return Header.pageTitle;
  }

  render() {
    return this.container;
  }
}

export default Page;
