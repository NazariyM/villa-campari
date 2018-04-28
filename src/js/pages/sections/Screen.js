import { preloader } from '../../components/preloader';
import { TweenMax } from 'gsap';
import SplitText from '../../modules/dep/SplitText';

class Screen {
  constructor () {
    this.$container = $('.screen');
    this.title = this.$container.find('.screen__title');
    this.btn = this.$container.find('.screen__btn');
    this.imgWrap = this.$container.find('.screen__img-wrap');
    this.img = this.$container.find('.screen__img');
    this.decorX = this.$container.find('.screen__decor_x').children();
    this.decorY = this.$container.find('.screen__decor_y').children();
    this.tl = new TimelineMax();

    if (this.$container.length) this.init();

  }

  async init () {
    this.prepareAnim();
    await preloader.wait();
    await this.startAnim();
  }

  prepareAnim() {
    this.splitTitle = new SplitText(this.title, { type: 'words, chars' });
    const titleChars = this.splitTitle.chars;

    this.tl
      .set(titleChars, { opacity: 0, scale: 0, y: 50, transformOrigin: '0% 50%' })
      .set(this.decorX, { x: '100%' })
      .set(this.decorY, { y: '100%' });
  }

  startAnim() {

    const titleChars = this.splitTitle.chars;

    this.tl
      .staggerTo(titleChars, 0.8, { opacity: 1, scale: 1, y: 0, transformOrigin: '0% 50%',  ease: Back.easeOut }, 0.03, '+=0')
      .to(this.btn, .6, { x: 0, autoAlpha: 1, ease: Power0 }, '+.4')
      .to(this.decorX, .5, { x: '0%' }, 1, 'decor')
      .to(this.decorY, .5, { y: '0%', transformOrigin: '100% 100%' }, 1, 'decor');
  }
}

export default new Screen();