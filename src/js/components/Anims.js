import { TimelineMax, TweenMax } from 'gsap';
import ScrollAnim from '../modules/dev/animation/scrollAnim';
import SplitText from '../modules/dep/SplitText';
import { preloader } from './preloader'

class Anims {
  constructor () {
    this.fadeYitem = [...document.querySelectorAll('[data-anim="fade-y"]')];
    this.fadeXitem = [...document.querySelectorAll('[data-anim="fade-x"]')];
    this.staggerY = [...document.querySelectorAll('[data-anim-stagger="fade-y"]')];
    this.staggerX = [...document.querySelectorAll('[data-anim-stagger="fade-x"]')];
    this.decorTitles = [...document.querySelectorAll('.title-decor')];

    this.init();
  }

  async init() {
    await preloader.wait();
    this.prepareDecorTitlesAnim();
    await this.scrollAnim();
  }

  scrollAnim() {
    const _this = this;

    for (const item of this.fadeYitem) {
      new ScrollAnim({
        el: item,
        onEnter() {
          _this.fadeYAnim(item);
        }
      });
    }

    for (const item of this.fadeXitem) {
      new ScrollAnim({
        el: item,
        onEnter() {
          _this.fadeXAnim(item);
        }
      });
    }

    for (const item of this.staggerY) {
      new ScrollAnim({
        el: item,
        hook: .75,
        onEnter() {
          _this.staggerYAnim(item);
        }
      });
    }

    for (const item of this.staggerX) {
      new ScrollAnim({
        el: item,
        hook: .75,
        onEnter() {
          _this.staggerXAnim(item);
        }
      });
    }

    for (const title of this.decorTitles) {
      new ScrollAnim({
        el: title,
        onEnter() {
          _this.decorTitlesAnim(title);
        }
      });
    }
  }

  fadeYAnim(item) {
    const duration = item.getAttribute('data-anim-duration') || 0.5;
    const delay = item.getAttribute('data-anim-delay') || 0;

    TweenMax.to(item, duration, { autoAlpha: 1, y: 0, ease: Power2.easeOut, delay: delay });
  }

  fadeXAnim(item) {
    const duration = item.getAttribute('data-anim-duration') || 0.5;
    const delay = item.getAttribute('data-anim-delay') || 0;

    TweenMax.to(item, duration, { autoAlpha: 1, x: 0, ease: Power2.easeOut, delay: delay });
  }

  staggerYAnim(item) {
    const tl = new TimelineMax();
    const animItems = item.children;
    const duration = item.getAttribute('data-anim-duration') || 0.5;
    const staggerDelay = item.getAttribute('data-stagger-delay') || 0.3;

    tl.staggerTo(animItems, duration, { autoAlpha: 1, y: 0, ease: Power2.easeOut }, staggerDelay);
  }

  staggerXAnim(item) {
    const tl = new TimelineMax();
    const animItems = item.children;
    const duration = item.getAttribute('data-anim-duration') || 0.5;
    const staggerDelay = item.getAttribute('data-stagger-delay') || 0.3;

    tl.staggerTo(animItems, duration, { autoAlpha: 1, x: 0, ease: Power2.easeOut }, staggerDelay);
  }

  decorTitlesAnim(title) {
    const chars = [...title.querySelectorAll('div')];
    const titleL = title.querySelector('.title-decor__line_l');
    const titleR = title.querySelector('.title-decor__line_r');
    const speed = title.dataset.speed || 0.1;

    chars.sort(() => { return 0.5 - Math.random(); });

    const tl = new TimelineMax();

    tl
      .staggerTo(chars, 0.5, {
      autoAlpha: 1,
      ease: Quad.easeInOut
    }, speed)
      .to(titleL, .5, { autoAlpha: 1, width: 124 }, 'lines')
      .to(titleR, .5, { autoAlpha: 1, width: 124 }, 'lines');
  }

  prepareDecorTitlesAnim() {
    for (const title of this.decorTitles) {
      const titleText = title.querySelector('h2');
      const splitText = new SplitText(titleText, { type: 'chars' });
      let chars = splitText.chars;

      TweenMax.set(chars, { autoAlpha: 0 });
    }
  }
}

export const AnimsAPI = new Anims();
