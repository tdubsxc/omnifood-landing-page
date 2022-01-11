'use strict';

class App {
  constructor() {
    this.body = document.querySelector('body');
    this.menu = document.querySelector('#hamburger-menu');
    this.links = document.querySelectorAll('a');
  }

  init() {
    this.events();
  }

  events() {
    window.addEventListener('DOMContentLoaded', () => this.stopAnimationsOnPageLoad());

    this.menu.addEventListener('click', () => this.menuToggler());

    this.links.forEach((link) => {
      link.addEventListener('click', (e) => this.handleLinkClick(e));
    });
  }

  stopAnimationsOnPageLoad() {
    this.body.classList.remove('preload');
  }

  menuToggler() {
    this.menu.classList.toggle('opened');
  }

  handleLinkClick(e) {
    e.preventDefault();
  }
}

const app = new App();
app.init();
