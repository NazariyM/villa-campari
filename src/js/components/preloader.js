import { $window, $scrolledElements, css } from '../modules/dev/_helpers';
import { TimelineMax } from 'gsap';

class Preloader {
  constructor() {
    this.$block = $('.preloader');
    this.$blockTop = this.$block.find('.preloader__box_top');
    this.$blockBot = this.$block.find('.preloader__box_bot');
    this.$blockLeft = this.$block.find('.preloader__box_left');
    this.$blockRight = this.$block.find('.preloader__box_right');

    this.init();
  }

  async init() {
    this.animate();

    $window.on('beforeunload', () => {
      $scrolledElements.scrollTop(0);
    });
  }

  wait() {
    return this.resolve;
  }

  animate() {
    this.resolve = new Promise(resolve => {

      const tl = new TimelineMax({
        onComplete() {
          resolve();
        }
      });

      tl
        .to(this.$blockTop, 0.75, {
          y: '-100%',
          ease: Power4.easeIn
        }, 0)
        .to(this.$blockBot, 0.75, {
          y: '100%',
          ease: Power4.easeIn
        }, 0)
        .addLabel('verticalEnd')
        .to(this.$blockLeft, 1, {
          x: '-100%',
          ease: Power4.easeInOut
        }, 'verticalEnd')
        .to(this.$blockRight, 1, {
          x: '100%',
          ease: Power4.easeInOut
        }, 'verticalEnd')
        .set(this.$block, { css: {
            display: 'none'
          } });
    });
  }
}

export const preloader = new Preloader();
