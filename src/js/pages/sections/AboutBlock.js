import { TimelineMax } from 'gsap';
import SplitText from '../../modules/dep/SplitText';
import ScrollAnim from '../../modules/dev/animation/scrollAnim';

class AboutBlock {
  constructor () {
    this.block = document.querySelector('.about-block');
    this.title = this.block.querySelector('.about-block__title');
    this.descr = this.block.querySelector('.about-block__descr');
    this.img = this.block.querySelector('.about-block__img');
    this.tl = new TimelineMax();

    this.init();
  }

  init() {
    this.textAnim();
  }

  textAnim() {
    const titleSplit = new SplitText(this.title, {
      position: 'absolute',
      type: 'chars, lines'
    });

    for (let line of titleSplit.lines) {
      const letters = line.querySelectorAll('div');
      this.tl.staggerFromTo(letters, .5, {
        opacity: 0,
        transform: 'translateX(-40px) skew(-7deg)',
        filter: 'blur(2px)'
      }, {
        opacity: 1,
        transform: 'translateX(0px) skew(0deg)',
        filter: 'blur(0px)'
      }, .02, .8);
    }

    const descrPar = this.descr.querySelectorAll('p');

    new SplitText(descrPar, {
      type: 'lines'
    });

    const lines = this.descr.querySelectorAll('div');

    this.tl.staggerFromTo(lines, .5, {
      opacity: 0,
      transform: 'translateX(-40px) skew(-7deg)',
      filter: 'blur(2px)'
    }, {
      opacity: 1,
      transform: 'translateX(0px) skew(0deg)',
      filter: 'blur(0px)'
    }, .02, .8);

    // this.tl.from(this.img, 1, { clip: 'rect(0px 200px 200px 200px)' });
  }

}

export const AboutBlockAPI = new AboutBlock();
