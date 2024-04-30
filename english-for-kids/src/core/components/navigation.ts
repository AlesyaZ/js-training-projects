import { Links } from '../../data';
import Component from '../templates/components';

class Navigation extends Component {
  static hamburger = document.createElement('div');

  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  private createTemplateElement(tagName: string, ClassName: string): HTMLElement {
    const element = document.createElement(tagName);
    element.className = ClassName;
    return element;
  }

  renderNavigationLinks() {
    Navigation.hamburger.className = 'header__hamburger';
    const navigationContainer = this.createTemplateElement('div', 'navigation-container');
    const navigation = this.createTemplateElement('nav', 'navigation');
    navigationContainer.appendChild(navigation);
    const navigationList = this.createTemplateElement('ul', 'navigation__list');
    navigation.appendChild(navigationList);

    Links.map((links) => {
      const navigationElement = document.createElement('li');
      const linkButton = document.createElement('a');
      linkButton.href = `#${links.id}`;
      linkButton.innerText = links.text;
      navigationList.appendChild(navigationElement);
      navigationElement.appendChild(linkButton);

      linkButton.addEventListener('click', () => {
        Navigation.hamburger.classList.toggle('navigation-active');
        navigationContainer.classList.toggle('navigation-active');
      });
    });

    Navigation.hamburger.addEventListener('click', () => {
      Navigation.hamburger.classList.toggle('navigation-active');
      navigationContainer.classList.toggle('navigation-active');
    });

    this.container.appendChild(navigationContainer);
  }

  render() {
    this.renderNavigationLinks();
    return this.container;
  }
}

export default Navigation;
