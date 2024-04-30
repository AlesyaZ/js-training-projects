import Page from './Page';

export const enum ErrorTypes {
  Error_404 = 404,
}

class Error404 extends Page {
  private errorType: ErrorTypes | string;

  static TextObject: { [prop: string]: string } = {
    '404': 'Error!',
  };

  constructor(id: string, errorType: ErrorTypes | string) {
    super(id);
    this.errorType = errorType;
  }

  render() {
    this.changeHeaderTitle(Error404.TextObject[this.errorType]);
    return this.container;
  }
}

export default Error404;
