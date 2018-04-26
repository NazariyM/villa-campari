import { TimelineMax } from 'gsap';
import ScrollAnim from '../../modules/dev/animation/scrollAnim';

class ViewBlock {
  constructor () {
    this.$block = $('.view-block');
    this.$title = this.$block.find('.view-block__title');
    this.$sutTitle = this.$block.find('.view-block__sub-title');
    this.$item = this.$block.find('.view-block__item');

    // if (this.$block.length) this.init();
  }

  init() {
    this.startAnim();
  }

  startAnim() {
    let
      bgColor = '#ffc446',
      easing = Power0.easeNone,
      duration = 0.3;

    const tl = new TimelineMax({
      paused: true,
      yoyo: true
    });

    this.itemSquareL = this.$item.find('.view-block__item-square-l');
    this.itemSquareR = this.$item.find('.view-block__item-square-r');
    this.itemSquareT = this.$item.find('.view-block__item-square-t');
    this.itemSquareB = this.$item.find('.view-block__item-square-b');

    tl.fromTo(this.itemSquareT, duration,
      {
        width: 0,
        background: bgColor,
        immediateRender: false,
        autoRound: false,
        ease: easing
      },
      {
        width: '100%',
        background: bgColor
      }
    );

    tl.fromTo(this.itemSquareR, duration,
      {
        height: 0,
        background: bgColor,
        immediateRender: false,
        autoRound: false,
        ease: easing
      },
      {
        height: '100%',
        background: bgColor
      }
    );

    tl.fromTo(this.itemSquareB, duration,
      {
        width: 0,
        background: '#000',
        immediateRender: false,
        autoRound: false,
        ease: easing
      },
      {
        width: '100%',
        background: bgColor
      }
    );

    tl.fromTo(this.itemSquareL, duration,
      {
        height: 0,
        background: bgColor,
        immediateRender: false,
        autoRound: false,
        ease: easing
      },
      {
        height: '100%',
        background: bgColor
      }
    );

    tl
      .progress(1).progress(0)
      .play();
  }
}

export default new ViewBlock();
