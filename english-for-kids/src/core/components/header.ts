import Component from '../templates/components';
import Navigation from './navigation';

class Header extends Component {
  static pageTitle: HTMLSpanElement;

  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  private createTemplateElement(tagName: string, className: string): HTMLElement {
    const element = document.createElement(tagName);
    element.className = className;
    return element;
  }

  renderHeaderButtons() {
    const humbergerLine = this.createTemplateElement('span', 'hamburger__line');
    Header.pageTitle = this.createTemplateElement('span', 'header__title');
    const switcher = this.createTemplateElement('label', 'switcher');
    const switcherInput = <HTMLInputElement>(
      this.createTemplateElement('input', 'switcher__input')
    );
    switcherInput.type = 'checkbox';
    const switcherSlider = this.createTemplateElement('span', 'slider round');
    Navigation.hamburger.append(humbergerLine);
    this.container.append(Navigation.hamburger);
    this.container.append(Header.pageTitle);
    this.container.append(switcher);
    switcher.append(switcherInput);
    switcher.append(switcherSlider);
  }

  render() {
    this.renderHeaderButtons();
    return this.container;
  }
}

export default Header;
