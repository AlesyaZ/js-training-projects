import Page from './Page';

class MainPage extends Page {
  static TextObject = {
    MainTitle: 'English for kids',
  };

  constructor(id: string) {
    super(id);
  }

  private createTemplateElement(tagName: string, ClassName: string): HTMLElement {
    const element = document.createElement(tagName);
    element.className = ClassName;
    return element;
  }

  renderMainPAge() {
    let mainSection = this.createTemplateElement('main', 'cards-container');
    return mainSection;
  }

  render() {
    this.changeHeaderTitle(MainPage.TextObject.MainTitle);
    this.container.append(this.renderMainPAge());
    return this.container;
  }
}

export default MainPage;
