import { TimelineMax } from 'gsap';
import SplitText from '../../modules/dep/SplitText';
import ScrollAnim from '../../modules/dev/animation/scrollAnim';
import { preloader } from '../../components/preloader';

class AboutBlock {
  constructor () {
    this.block = document.querySelector('.about-block');
    this.title = this.block.querySelector('.about-block__title');
    this.descr = this.block.querySelector('.about-block__descr');
    this.img = this.block.querySelector('.about-block__img');
    this.imgMask = this.block.querySelector('.about-block__img-mask');
    this.tl = new TimelineMax();

    if (this.block) this.init();
  }

  async init () {
    const _this = this;

    this.prepareAnim();

    new ScrollAnim({
      el: this.block,
      hook: .85,
      onEnter: async () => {
        await _this.startAnim();
      }
    });
  }

  prepareAnim() {
    // title
    this.titleSplit = new SplitText(this.title, {
      position: 'absolute',
      type: 'chars, lines'
    });

    for (let line of this.titleSplit.lines) {
      const letters = line.querySelectorAll('div');

      this.tl
        .set(letters, {
          opacity: 0,
          transform: 'translateX(-40px) skew(-7deg)',
          filter: 'blur(2px)'
        });
    }

    // descr
    const descrPar = this.descr.querySelectorAll('p');
    this.descrSplit = new SplitText(descrPar, {
      type: 'lines'
    });
    const lines = this.descr.querySelectorAll('div');

    this.tl
      .set(lines, {
        opacity: 0,
        transform: 'translateX(-40px) skew(-7deg)',
        filter: 'blur(2px)'
      });
  }

  startAnim() {
    // title
    for (let line of this.titleSplit.lines) {
      const letters = line.querySelectorAll('div');

      this.tl
        .staggerTo(letters, .5, {
          opacity: 1,
          transform: 'translateX(0px) skew(0deg)',
          filter: 'blur(0px)'
        }, .02, .8);
    }

    // descr & img
    const lines = this.descr.querySelectorAll('div');
    this.tl
      .staggerTo(lines, .5, {
        opacity: 1,
        transform: 'translateX(0px) skew(0deg)',
        filter: 'blur(0px)'
      }, .02, .8)
      .add(() => {
        this.descrSplit.revert();
      })
      .to(this.imgMask, 1.2, { scaleX: 0, transformOrigin: '100% 100%' }, '-=.6');
  }

}

export const AboutBlockAPI = new AboutBlock();
