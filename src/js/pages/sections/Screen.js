import { TweenMax } from 'gsap';
import SplitText from '../../modules/dep/SplitText';

class Screen {
  constructor () {
    this.container = document.querySelector('.screen');
    this.title = this.container.querySelector('.screen__title');
    this.btn = this.container.querySelector('.screen__btn');
    this.imgWrap = this.container.querySelector('.screen__img-wrap');
    this.img = this.container.querySelector('.screen__img');
    this.decorX = this.container.querySelector('.screen__decor_x').children;
    this.decorY = this.container.querySelector('.screen__decor_y').children;
    this.tl = new TimelineMax();

    this.init();
  }

  init () {
    this.startAnim();
  }

  startAnim() {
    const splitTitle = new SplitText(this.title, { type: 'words, chars' });
    const titleChars = splitTitle.chars;

    this.tl

      .from(this.img, 1.2, { transformOrigin: '0% 50%', rotation: 6, height: 100 })
      .staggerFrom(titleChars, 0.8, { opacity: 0, scale: 0, y: 50, transformOrigin: '0% 50%',  ease: Back.easeOut }, 0.03, '+=0')
      .to(this.btn, .6, { x: 0, autoAlpha: 1, ease: Power0 }, '+.4')
      .from(this.decorX, .5, { x: '100%' }, 2, 'decor')
      .from(this.decorY, .5, { y: '100%', transformOrigin: '100% 100%' }, 2, 'decor');
  }

}

export default new Screen();
