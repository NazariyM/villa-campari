import { css } from '../modules/dev/_helpers';
import ScrollAnim from '../modules/dev/animation/scrollAnim';
import { TweenMax, TimelineMax } from 'gsap';
import $ from 'jquery';
import 'slick-carousel';

class Slider {

  constructor () {
    this.$slider = $('.slider');
    this.$viewSlider = $('.view-slider');
    this.$sportSlider = $('.sport__slider');

    this.arrow = `<svg class="slider__btn-arrow" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 109.9 15.5" style="enable-background:new 0 0 109.9 15.5;" xml:space="preserve">
<g>
	<g>
		<g>
			<path d="M0.3,15.4C0.1,15.3,0,15.1,0,14.9c0-0.2-0.2-3.8,2-6.1c0.3-0.3,0.7-0.6,1-0.9C2.7,7.7,2.3,7.4,2,7.1
				C-0.2,4.8,0,1,0,0.9C0,0.4,0.4,0,0.9,0h13.4c2.1,0,4.1,0.8,5.6,2.3s2.3,3.5,2.3,5.6l0,0l0,0c0,2.1-0.8,4.1-2.3,5.6
				c-1.5,1.5-3.5,2.3-5.6,2.3H0.9C0.7,15.7,0.4,15.6,0.3,15.4z M7,7.3c0.2,0.2,0.3,0.4,0.3,0.6c0,0.5-0.4,0.9-0.9,0.9
				C5,8.8,4,9.2,3.3,10c-1.1,1.1-1.4,2.9-1.5,3.9h12.5c1.6,0,3.1-0.6,4.3-1.8c1.1-1.1,1.8-2.7,1.8-4.3l0,0c0-1.6-0.6-3.1-1.8-4.3
				c-1.1-1.1-2.7-1.8-4.3-1.8H1.8c0.1,1.1,0.4,2.9,1.5,4C4.1,6.6,5.1,7,6.3,7C6.6,7,6.8,7.1,7,7.3z"/>
		</g>
	</g>
	<g>
		<g>
			<path d="M5.7,8.5C5.5,8.3,5.4,8.1,5.4,7.9C5.4,7.4,5.8,7,6.3,7h66.8C73.6,7,74,7.4,74,7.9c0,0.5-0.4,0.9-0.9,0.9H6.3
				C6,8.8,5.8,8.7,5.7,8.5z"/>
		</g>
	</g>
	<g>
		<g>
			<path d="M16.3,8.3C16.2,8.2,16.2,8.2,16.3,8.3l-5-6.5c-0.3-0.4-0.2-1,0.2-1.3s1-0.2,1.3,0.2l4.9,6.4
				c0.3,0.4,0.2,1-0.2,1.3C17.1,8.6,16.6,8.6,16.3,8.3z"/>
		</g>
	</g>
	<g>
		<g>
			<path d="M9.7,8.5C9.7,8.5,9.7,8.4,9.7,8.5L4.7,2C4.4,1.6,4.5,1,4.9,0.7c0.4-0.3,1-0.2,1.3,0.2l4.9,6.4
				c0.3,0.4,0.2,1-0.2,1.3C10.6,8.8,10,8.8,9.7,8.5z"/>
		</g>
	</g>
	<g>
		<g>
			<path d="M11.3,15.3C11,15,11,14.4,11.2,14.1l4.9-6.4c0.3-0.4,0.9-0.5,1.3-0.2c0.4,0.3,0.5,0.9,0.2,1.3l-4.9,6.4
				C12.4,15.6,11.8,15.6,11.3,15.3C11.4,15.3,11.3,15.3,11.3,15.3z"/>
		</g>
	</g>
	<g>
		<g>
			<path d="M4.8,15.1c-0.3-0.3-0.4-0.8-0.1-1.2l4.9-6.4C10,7.1,10.5,7,10.9,7.3c0.4,0.3,0.5,0.9,0.2,1.3L6.1,15
				C5.8,15.4,5.3,15.4,4.8,15.1C4.8,15.1,4.8,15.1,4.8,15.1z"/>
		</g>
	</g>
</g>
<g>
	<g>
		<g>
			<g>
				<path d="M78.9,15.3c-4.1,0-7.4-3.3-7.4-7.4s3.3-7.4,7.4-7.4c3.7,0,26.8,6.3,27.8,6.6l3.2,0.9l-3.2,0.9
					C105.7,9,82.5,15.3,78.9,15.3z M78.9,2.2c-3.1,0-5.6,2.5-5.6,5.6s2.5,5.6,5.6,5.6c2.5,0,16.2-3.5,24.1-5.6
					C95,5.7,81.3,2.2,78.9,2.2z"/>
			</g>
		</g>
		<g>
			<g>
				<path d="M106.1,8.7H72.3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h33.8c0.5,0,0.9,0.4,0.9,0.9S106.6,8.7,106.1,8.7z"
					/>
			</g>
		</g>
		<g>
			<g>
				<path d="M88.8,8.7c-0.3,0-0.6-0.2-0.8-0.5l-2.6-5.1c-0.1-0.1-0.1-0.3-0.1-0.4c0-0.3,0.2-0.6,0.5-0.8
					c0.4-0.2,1,0,1.2,0.4l2.6,5.1c0.1,0.1,0.1,0.3,0.1,0.4c0,0.3-0.2,0.6-0.5,0.8C89,8.6,88.9,8.7,88.8,8.7z M94.6,8.7
					c-0.3,0-0.6-0.2-0.8-0.5L92,4.7c-0.1-0.1-0.1-0.3-0.1-0.4c0-0.3,0.2-0.6,0.5-0.8c0.4-0.2,1,0,1.2,0.4l1.8,3.5
					c0.1,0.1,0.1,0.3,0.1,0.4c0,0.3-0.2,0.6-0.5,0.8C94.8,8.6,94.7,8.7,94.6,8.7z M77.2,8.7c-0.3,0-0.6-0.2-0.8-0.5l-2.5-4.9
					c-0.1-0.1-0.1-0.3-0.1-0.4c0-0.3,0.2-0.6,0.5-0.8c0.4-0.2,1,0,1.2,0.4L78,7.4c0.1,0.1,0.1,0.3,0.1,0.4c0,0.3-0.2,0.6-0.5,0.8
					C77.5,8.6,77.3,8.7,77.2,8.7z M83,8.7c-0.3,0-0.6-0.2-0.8-0.5l-3.4-6.4c-0.1-0.1-0.1-0.3-0.1-0.4c0-0.3,0.2-0.6,0.5-0.8
					c0.4-0.2,1-0.1,1.2,0.4l3.4,6.4c0.1,0.1,0.1,0.3,0.1,0.4c0,0.3-0.2,0.6-0.5,0.8C83.3,8.6,83.1,8.7,83,8.7z"/>
			</g>
		</g>
	</g>
</g>
</svg>`;

    this.init();
  }

  init () {
    this.createSlider();
  }

  createSlider () {

    const defaultOptions = {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      arrows: true,
      speed: 800,
      cssEase: 'cubic-bezier(0.74, 0.1, 0.32, 0.98)',
      useTransform: true,
      adaptiveHeight: true,
      accessibility: false,
      swipe: true,
      rows: 0,
      prevArrow: `<button type="button" class="slider__btn slider__btn_prev">${this.arrow}</button>`,
      nextArrow: `<button type="button" class="slider__btn slider__btn_next">${this.arrow}</button>`
    };

    this.$slider.slick($.extend({}, defaultOptions));

    this.$sportSlider.slick($.extend({}, defaultOptions, {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: false,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    }));

    this.$viewSlider.each(function (i, slider) {
      const $slider = $(slider);
      const $sldFor = $slider.find('.view-slider__for');
      const $sldNav = $slider.find('.view-slider__nav');

      $sldFor.slick($.extend({}, defaultOptions, {
        asNavFor: '.view-slider__nav',
        arrows: false
      }));

      $sldNav.slick($.extend({}, defaultOptions, {
        asNavFor: '.view-slider__for',
        slidesToShow: 4,
        swipe: false,
        arrows: false,
        focusOnSelect: true,
        vertical: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              vertical: false
            }
          }
        ]
      }));
    });
  }
}

export const sliderAPI = new Slider();
