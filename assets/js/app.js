'use strict';

class App {
  constructor() {
    this.body = document.querySelector('body');
  }

  init() {
    this.events();
  }

  events() {
    window.addEventListener('DOMContentLoaded', (e) => {
      this.body.classList.remove('preload');
    });
  }
}

const app = new App();
app.init();
