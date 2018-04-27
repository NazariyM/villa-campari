import { TimelineMax } from 'gsap';
import ScrollAnim from '../../modules/dev/animation/scrollAnim';

class ViewBlock {
  constructor (el) {
    this.$block = $(el);
    this.$sutTitle = this.$block.find('.view-block__sub-title');
    this.$items = this.$block.find('.view-block__item');
    this.tl = new TimelineMax();

    if (this.$block.length) this.init();
  }

  init() {
    const _this = this;

    new ScrollAnim({
      el: this.$block.get(0),
      hook: .85,
      onEnter: () => {
        _this.startAnim();
      }
    });
  }

  startAnim() {
    this.tl
      .to(this.$sutTitle, .7, { autoAlpha: 1, y: 0 })
      .add(() => {
        const img = this.$items.find('.view-block__item-img');
        const contentItems = this.$items.find('.view-block__item-content').children().not('.view-block__item-btn');

        this.tl
          .staggerTo(img, .5, { autoAlpha: 1, y: 0 }, .15)
          .staggerTo(contentItems, .3, { autoAlpha: 1, y: 0 }, .15, '-=.8');
      });
  }
}

$('.view-block').each((i, el) => {
  new ViewBlock(el);
});
