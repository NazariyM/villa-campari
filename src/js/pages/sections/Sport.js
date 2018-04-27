import { TimelineMax } from 'gsap';
import ScrollAnim from '../../modules/dev/animation/scrollAnim';

class Sport {
  constructor (el) {
    this.$block = $(el);
    this.$items = this.$block.find('.sport__item');
    this.$itemL = this.$items.eq(0);
    this.$itemR = this.$items.eq(1);
    this.$imgL = this.$itemL.find('.sport__item-img');
    this.$imgR = this.$itemR.find('.sport__item-img');
    this.$itemsChildrensL = this.$itemL.find('.sport__item-inner').children();
    this.$itemsChildrensR = this.$itemR.find('.sport__item-inner').children();
    this.$decorImg = this.$block.find('.sport__decor-img');
    this.tl = new TimelineMax();

    if (this.$block.length) this.init();
  }

  init() {
    const _this = this;

    this.prepareAnim();

    new ScrollAnim({
      el: this.$block.get(0),
      hook: .85,
      onEnter: () => {
        _this.startAnim();
      }
    });
  }

  prepareAnim() {
    this.tl
      .set(this.$imgL, { scaleX: 0, autoAlpha: 0 })
      .set(this.$imgR, { scaleX: 0, autoAlpha: 0 })
      .set(this.$itemsChildrensL, { x: -60, autoAlpha: 0 })
      .set(this.$itemsChildrensR, { x: 60, autoAlpha: 0 });
  }

  startAnim() {
    this.tl
      .to(this.$imgL, 1, { scaleX: 1, autoAlpha: 1, transformOrigin: '0 0' }, 'images')
      .to(this.$imgR, 1, { scaleX: 1, autoAlpha: 1, transformOrigin: '100% 100%' }, 'images')
      .staggerTo(this.$itemsChildrensL, .3, { x: 0, autoAlpha: 1 }, .15, 'content')
      .staggerTo(this.$itemsChildrensR, .3, { x: 0, autoAlpha: 1 }, .15, 'content')
      .to(this.$decorImg, .4, { scale: 1, autoAlpha: 1 }, '-=.15');
  }
}

$('.sport').each((i, el) => {
  new Sport(el);
});
