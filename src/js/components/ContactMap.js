import { TimelineMax } from 'gsap';
import ScrollAnim from '../modules/dev/animation/scrollAnim';

class ContactMap {
  constructor() {
    this.$container = $('.contacts');
    this.$block = this.$container.find('.contacts__block');
    this.$blockItems = this.$block.children();
    this.tl = new TimelineMax();

    if (this.$container.length) this.init();
  }

  init() {
    this.createMap();

    const _this = this;

    new ScrollAnim({
      el: this.$container.get(0),
      hook: .75,
      onEnter: () => {
        _this.startAnim();
      }
    });
  }

  createMap() {

    const map = new google.maps.Map(document.querySelector('.contacts__map'), {
      center: new google.maps.LatLng(45.422593, 35.820794),
      zoom: 15,
      disableDefaultUI: true
    });
  }

  startAnim() {
    this.tl
      .to(this.$block, .6, { autoAlpha: 1, y: 0 })
      .staggerTo(this.$blockItems, .2, { autoAlpha: 1, y: 0 }, .15);
  }

}

export const ContactMapAPI = new ContactMap();
