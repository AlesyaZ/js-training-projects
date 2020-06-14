import { changeCtoF, changeFtoC } from './unitChangeDegrees';

export default class DegreeChange {
  constructor(element, startUnit) {
    this.element = element;
    this.currentUnit = startUnit;
    this.switchUnit(startUnit);
    this.addEvents();
  }

  addEvents() {
    this.element.addEventListener('click', (event) => {
      if (event.target.classList.contains('button') && !event.target.classList.contains('degreesСhange')) {
        this.switchUnit(event.target.dataset.unit);
        this.updateUnits();
      }
    });
  }

  switchUnit(newDegree) {
    this.element.querySelectorAll('.button').forEach((button) => {
      button.classList.remove('degreesСhange');
    });
    const newButton = this.element.querySelector(`[data-unit="${newDegree}"]`);
    newButton.classList.add('degreesСhange');
    this.currentUnit = newDegree;
  }

  updateUnits() {
    let degree = [];
    const elements = document.querySelectorAll('[data-measure="temp"]');
    elements.forEach((element) => {
      degree.push(Number(element.innerText));
    });
    if (this.currentUnit === 'I') {
      degree = degree.map((value) => Math.round(changeCtoF(value)));
    } else {
      degree = degree.map((value) => Math.round(changeFtoC(value)));
    }
    elements.forEach((element, i) => {
      const elem = element;
      elem.innerText = degree[i];
    });
  }
}
