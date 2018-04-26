import { TimelineMax } from 'gsap';
import ScrollAnim from '../../modules/dev/animation/scrollAnim';

class ViewBlock {
  constructor () {
    this.block = document.querySelector('.view-block');
    this.title = this.block.querySelector('.view-block__title');
    this.sutTitle = this.block.querySelector('.view-block__sub-title');
    this.items = this.block.querySelectorAll('.view-block__item');

    if (this.block) this.init();
  }

  init() {
    this.startAnim();
  }

  startAnim() {
    let tl,
      bgColor = '#ffc446',
      easing = Power0.easeNone,
      duration = 0.3;

    tl = new TimelineMax({
      paused: true,
      yoyo: true
    });

    for (const [index, item] of this.items.entries()) {
      this.itemSquareL = item.querySelector('.view-block__item-square-l');
      this.itemSquareR = item.querySelector('.view-block__item-square-r');
      this.itemSquareT = item.querySelector('.view-block__item-square-t');
      this.itemSquareB = item.querySelector('.view-block__item-square-b');

      item.onmouseover = item.onmouseout = handler;

      function handler(event) {

        if (event.type === 'mouseover') {
          // event.target.style.background = 'red';

          tl.play();
        }

        if (event.type === 'mouseout') {
          // event.target.style.background = '';
          tl.reverse();
        }
      }

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

      // tl
      //   .progress(1).progress(0);
      //   // .play();
    }
  }
}

// export default new ViewBlock();
