export class Page {
  constructor(params) {
    this.params = params;
  }

  getRoot() {
    throw new Error('Metod "getRoot" should be implemented');
  }

  afterRender() {

  }

  destroy() {

  }
}
