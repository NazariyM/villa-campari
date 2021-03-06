import { TweenMax } from 'gsap';
import { $header, css, Resp, $body } from '../modules/dev/_helpers';
import { preloader } from './preloader';

class Header {
  constructor() {
    this.$header = $header;
    this.$logo = this.$header.find('.header__logo');
    this.$contactCol1 = this.$header.find('.header__contact-col')[0];
    this.$contactCol2 = this.$header.find('.header__contact-col')[1];
    this.$nav = this.$header.find('nav');
    this.$scrollLink = this.$nav.find('.scroll-link');
    this.$navBtn = this.$header.find('.hamburger');
    this.$linesL = this.$header.find('.header__line_left');
    this.$linesR = this.$header.find('.header__line_right');
    this.tl = new TimelineMax();

    this.init();
  }

  async init () {
    await preloader.wait();
    await this.startAnim();

    this.bindEvents();
  }

  bindEvents() {
    if (!Resp.isMobiles) this.scrollTo();
    if (Resp.isMobile) this.toggleNav();
  }

  startAnim() {
    const $navLeft = $('nav > ul > li:lt(3)');
    const $navRight = Array.from($('nav > ul > li').slice(-3)).reverse();

    this.tl
     .to(this.$contactCol1, .5, { x: 0, autoAlpha: 1 }, 'contact')
     .to(this.$contactCol2, .5, { x: 0, autoAlpha: 1 }, 'contact')
     .to(this.$navBtn, .5, { x: 0, autoAlpha: 1 }, 'contact')
     .staggerTo($navLeft, .5, { x: 0, autoAlpha: 1 }, .2, 'nav')
     .staggerTo($navRight, .5, { x: 0, autoAlpha: 1 }, .2, 'nav')
     .to(this.$linesL, 1, { width: '45.5%' }, 'nav')
     .to(this.$linesR, 1, { width: '45.5%' }, 'nav')
     .to(this.$logo, .5, { autoAlpha: 1, ease: RoughEase.ease.config({ template:  Power4.easeNone, strength: 5, points: 25, taper: 'none', randomize: true, clamp: false }) }, 'nav -=.3');
  }

  toggleNav() {
    const _this = this;
    this.$navBtn.on('click tap', function () {
      $(this).toggleClass(css.active);
      _this.$nav.toggleClass(css.active);
      $body.toggleClass('is-locked');
    });
  }

  scrollTo() {
    this.$scrollLink.on('click', function (e) {
      e.preventDefault();
      const $el = $(this).data('scroll');
      $('html, body').animate({ scrollTop: $($el).offset().top }, 1000);
      return false;
    });

  }

}

export const HeaderAPI = new Header();
