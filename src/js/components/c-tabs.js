import { TimelineMax } from 'gsap'
import { css } from '../modules/dev/_helpers';
import ScrollAnim from '../modules/dev/animation/scrollAnim'

class CTabs {
  constructor(el) {
    this.$block = $('.c-tabs');
    this.$tabNav = el.find('.c-tabs__tabs-nav').find('.c-tabs__tabs-el');
    this.$tabItemContainer = el.find('.c-tabs__tabs-for');
    this.$tabItem = this.$tabItemContainer.find('.c-tabs__tab');
    this.$img = this.$tabItemContainer.find('.c-tabs__img');
    this.$offersBlock = this.$block.find('.offers__block');
    this.$offersBlockItems = this.$offersBlock.children();
  }

  init() {
    const _this = this;

    this.bindEvents();

    new ScrollAnim({
      el: this.$block[0],
      hook: .85,
      onEnter: async () => {
        await _this.startAnim();
      }
    });
  }

  bindEvents() {
    if (!this.$tabNav.hasClass('js-disabled') && this.getActiveIndex() !== 0) {
      this.$tabItem.hide()
        .eq(this.getActiveIndex()).show();
    }

    this.$tabNav.on('click', (ev) => {
      const currentIndex = this.getActiveIndex();
      const targetIndex = $(ev.currentTarget).index();

      this.changeTab(currentIndex, targetIndex);
    });
  }

  getActiveIndex() {
    let activeIndex = 0;

    this.$tabNav.each(function() {
      if ($(this).hasClass(css.active)) {
        activeIndex = $(this).index();
      }
    });

    return activeIndex;
  }

  changeTab(currentIndex, nextIndex) {
    const _this = this;
    const speed = 0.5;
    const $currentTabNav = this.$tabNav.eq(currentIndex);
    const $nextTabNav = this.$tabNav.eq(nextIndex);
    const $currentTab = this.$tabItem.eq(currentIndex);
    const $nextTab = this.$tabItem.eq(nextIndex);

    $currentTabNav.removeClass(css.active);
    $nextTabNav.removeClass(css.disabled).addClass(css.active);
    TweenMax.to($currentTab, speed, {
      autoAlpha: 0,
      y: 30,
      clearProps: 'transform',
      onComplete() {
        const currentHeight = _this.$tabItemContainer.outerHeight();
        TweenMax.set(_this.$tabItemContainer, { height: currentHeight });
        $(this.target).hide();
        TweenMax.set($nextTab, { autoAlpha: 1 });
        $nextTab.show();
        TweenMax.staggerFromTo(_this.$offersBlockItems, speed, {
          autoAlpha: 0,
          y: 50
        }, {
          autoAlpha: 1,
          y: 0
        }, speed / 5);

        TweenMax.staggerFromTo($nextTab.children(), speed, {
          autoAlpha: 0,
          y: 50
        }, {
          autoAlpha: 1,
          y: 0
        }, speed / 2);
        TweenMax.set(_this.$tabItemContainer, { height: 'auto' });
        TweenMax.from(_this.$tabItemContainer, speed, { height: currentHeight });
      }
    });
  }

  startAnim() {
    const tl = new TimelineMax();

    tl
      .staggerTo(this.$tabNav, .4, { autoAlpha: 1, y: 0 }, .1)
      .to(this.$img, 1, { width: '100%' })
      .to(this.$offersBlock, .6, { y: 0, autoAlpha: 1 })
      .staggerTo(this.$offersBlockItems, .6, { y: 0, autoAlpha: 1 });

  }
}

/** tabs init */
const $tabs = $('.c-tabs');
$tabs.each((index, el) => {
  const tab = new CTabs($(el));
  tab.init();
});
