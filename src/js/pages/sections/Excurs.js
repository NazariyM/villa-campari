import { TimelineMax } from 'gsap';
import ScrollAnim from '../../modules/dev/animation/scrollAnim';

class Excurs {
  constructor (el) {
    this.$block = $(el);
    this.$items = this.$block.find('.excurs__item');
    this.$item1 = this.$items.eq(0);
    this.$item2 = this.$items.eq(1);
    this.$item3 = this.$items.eq(2);
    this.$item4 = this.$items.eq(3);
    this.$item5 = this.$items.eq(4);
    this.$item6 = this.$items.eq(5);
    this.$decorL = this.$block.find('.excurs__decor-img_l');
    this.$decorR = this.$block.find('.excurs__decor-img_r');
    this.tl = new TimelineMax();

    if (this.$block.length) this.init();
  }

  init() {
    const _this = this;

    this.prepareAnim();

    new ScrollAnim({
      el: this.$block.get(0),
      hook: .5,
      onEnter: () => {
        _this.startAnim();
      }
    });
  }

  prepareAnim() {
    this.tl
      .set(this.$item1, { x: -100, autoAlpha: 0 })
      .set(this.$item2, { x: 100, autoAlpha: 0 })
      .set(this.$item3, { x: -100, autoAlpha: 0 })
      .set(this.$item5, { y: 100, autoAlpha: 0 })
      .set(this.$item6, { x: -100, autoAlpha: 0 })
      .set(this.$item4, { scale: 1.5, autoAlpha: 0 });
  }

  startAnim() {
    this.tl
      .to(this.$item1, .8, { x: 0, autoAlpha: 1 }, 'img')
      .to(this.$item2, .8, { x: 0, autoAlpha: 1 }, 'img')
      .to(this.$item3, .8, { x: 0, autoAlpha: 1 }, 'img')
      .to(this.$item5, .8, { y: 0, autoAlpha: 1 }, 'img')
      .to(this.$item6, .8, { x: 0, autoAlpha: 1 }, 'img')
      .to(this.$item4, .8, { scale: 1, autoAlpha: 1 }, 'img')
      .to(this.$decorL, .8, { scale: 1 }, 'decor')
      .to(this.$decorR, .8, { scale: 1 }, 'decor');
  }
}

$('.excurs').each((i, el) => {
  new Excurs(el);
});
