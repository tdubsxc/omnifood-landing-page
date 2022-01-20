'use strict';

class App {
  constructor() {
    this.body = document.querySelector('body');
    this.menu = document.querySelector('#hamburger-menu');
    this.links = document.querySelectorAll('a');
  }

  init() {
    this.events();
    AOS.init({
      offset: 250,
      duration: 500,
      easing: 'ease',
    });
  }

  events() {
    window.addEventListener('DOMContentLoaded', () => this.stopAnimationsOnPageLoad());

    this.menu.addEventListener('click', () => this.menuToggler());

    this.links.forEach((link) => {
      link.addEventListener('click', (e) => this.handleLinkClick(e, link));
    });
  }

  stopAnimationsOnPageLoad() {
    this.body.classList.remove('preload');
  }

  menuToggler() {
    this.menu.classList.toggle('opened');
  }

  handleLinkClick(e, link) {
    e.preventDefault();

    const href = link.getAttribute('href');

    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    if (href !== '#' && href.startsWith('#')) {
      window.scrollTo({
        top: document.querySelector(href).offsetTop,
        behavior: 'smooth',
      });
    }
  }
}

const app = new App();
app.init();
