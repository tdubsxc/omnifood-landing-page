'use strict';

class App {
  constructor() {
    this.body = document.querySelector('body');
    this.menu = document.querySelector('#hamburger-menu');
    this.links = document.querySelectorAll('a');
    this.siteHeader = document.querySelector('#site-header');
    this.heroSection = document.querySelector('#hero');
    this.navLinks = document.querySelectorAll('#navbar a');
  }

  init() {
    this.events();
    AOS.init({
      offset: 250,
      duration: 500,
      once: true,
    });
  }

  events() {
    window.addEventListener('DOMContentLoaded', () => this.pauseAnimationsOnPageLoad());

    this.menu.addEventListener('click', () => this.menuToggler());

    this.links.forEach((link) => {
      link.addEventListener('click', (e) => this.handleLinkClick(e, link));
    });

    this.navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        if (this.body.classList.contains('is-mobile') && this.menu.classList.contains('opened')) {
          this.body.classList.remove('is-mobile');
          this.menu.classList.remove('opened');
        }
      });
    });

    this.handleStickyHeader();
  }

  pauseAnimationsOnPageLoad() {
    this.body.classList.remove('preload');
  }

  menuToggler() {
    this.menu.classList.toggle('opened');
    this.body.classList.toggle('is-mobile');
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
      const sectionEl = document.querySelector(href).offsetTop;

      window.scrollTo({
        top: sectionEl - this.siteHeader.offsetHeight,
        behavior: 'smooth',
      });
    }
  }

  handleStickyHeader() {
    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry.isIntersecting) {
          this.body.classList.add('sticky-header');
        } else {
          this.body.classList.remove('sticky-header');
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: `-${this.siteHeader.offsetHeight}px`,
      },
    );

    obs.observe(this.heroSection);
  }
}

const app = new App();
app.init();
