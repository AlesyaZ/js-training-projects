import Page from './Page';

class GamePage extends Page {
  private text: string;

  constructor(id: string, text: string) {
    super(id);
    this.text = text;
  }

  render() {
    this.changeHeaderTitle(this.text);
    return this.container;
  }
}

export default GamePage;
