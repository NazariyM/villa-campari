import { TweenMax } from 'gsap';
import { $header, $window, throttle, css, Resp } from '../modules/dev/_helpers';

class Header {
  constructor() {
    this.$header = $header;
    this.$logo = this.$header.find('.header__logo');
    this.$contactCol1 = this.$header.find('.header__contact-col')[0];
    this.$contactCol2 = this.$header.find('.header__contact-col')[1];
    this.$nav = this.$header.find('nav');
    this.$navBtn = this.$header.find('.nav-btn');
    this.$linesL = this.$header.find('.header__line_left');
    this.$linesR = this.$header.find('.header__line_right');
    this.tl = new TimelineMax();

    this.init();
  }

  init() {
    this.bindEvents();

    if (!Resp.isDesk) {
      this.toggleNav();
    }
  }

  bindEvents() {
    this.startAnim();
    this.initFix();

    if (Resp.isMobiles) this.toggleDropDown();
  }

  startAnim() {
    const $navLeft = this.$nav.find('li:lt(3)');

    // const $navRight = this.$nav.find('li:gt(-4)');
    const $navRight = this.$nav.find('li').slice(-3);
    // const $navRight = this.$nav.find('li:lt(6):not(:lt(3))');

    this.tl
     .to(this.$contactCol1, .5, { x: 0, autoAlpha: 1 }, 'contact')
     .to(this.$contactCol2, .5, { x: 0, autoAlpha: 1 }, 'contact')
     .staggerTo($navLeft, .5, { x: 0, autoAlpha: 1 }, .2, 'nav')
     .staggerTo($navRight, .5, { x: 0, autoAlpha: 1 }, .2, 'nav')
     .to(this.$linesL, 1, { width: '45.5%' }, 'nav')
     .to(this.$linesR, 1, { width: '45.5%' }, 'nav')
     .to(this.$logo, .5, { autoAlpha: 1, ease: RoughEase.ease.config({ template:  Power4.easeNone, strength: 4, points: 20, taper: 'none', randomize: true, clamp: false }) }, 'nav -=.3');
  }

  initFix() {
    const toggleHeaderScroll = throttle(() => {
      toggleHeader();
    }, 0, this);

    function toggleHeader() {
      if (window.pageYOffset > 0) {
        $header.addClass(css.fixed);
      } else {
        $header.removeClass(css.fixed);
      }
    }

    window.addEventListener('scroll', toggleHeaderScroll);
  }

  toggleNav() {
    const _this = this;
    this.$navBtn.on('click tap', function () {
      $(this).toggleClass(css.active);
      _this.$nav.slideToggle();
    });
  }

  toggleDropDown() {
    const $btn = this.$nav.find('.has-dropdown');

    $btn.on('click tap', function (e) {

      $(this).next().slideToggle(0);
    });
  }

}

export const HeaderAPI = new Header();
