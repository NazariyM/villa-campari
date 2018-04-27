import ScrollAnim from '../../modules/dev/animation/scrollAnim';
import { TimelineMax } from 'gsap';
import $ from 'jquery';

class Restaurant {
  constructor () {
    this.$block = $('.restaurant');
    this.$title = this.$block.find('.restaurant__title');
    this.$bg = this.$block.find('.restaurant__bg');
    this.$item = this.$block.find('.restaurant__card').first();
    this.$itemMask = this.$block.find('.restaurant__card-mask');
    this.$itemCol1 = this.$item.find('.restaurant__card-col')[0];
    this.$itemCol2 = this.$item.find('.restaurant__card-col')[1];
    this.tl = new TimelineMax();

    if (this.$block.length) this.init();
  }

  init () {
    const _this = this;

    this.prepareAnim();

    new ScrollAnim({
      el: this.$block[0],
      hook: .7,
      onEnter: () => { _this.startAnim(); }
    });
  }

  startAnim() {

    this.tl
      .to(this.$bg, .5, { height: '100%', autoAlpha: 1 })
      .to(this.$title, .5, { y: 0, autoAlpha: 1 })
      .to(this.$itemMask, .8, { scaleX: 1 })
      .to(this.$itemCol1, .5, { x: 0, autoAlpha: 1 }, 'cols')
      .to(this.$itemCol2, .5, { x: 0, autoAlpha: 1 }, 'cols');

  }

  prepareAnim() {
    this.tl
      .set(this.$title, { y: -50, autoAlpha: 0 })
      .set(this.$bg, { height: 0, autoAlpha: 0 })
      .set(this.$itemMask, { scaleX: 0 })
      .set(this.$itemCol1, { x: -50, autoAlpha: 0 })
      .set(this.$itemCol2, { x: 50, autoAlpha: 0 });

  }
}

export const RestaurantAPI = new Restaurant();
