import objectFitImages from 'object-fit-images';
// import fancybox from '@fancyapps/fancybox';
import './NoTouch';

import './preloader';
import '../components/Anims';
import '../components/Popup';
import '../pages/sections/Screen';
import '../pages/sections/AboutBlock';
import '../pages/sections/Restaurant';
import '../pages/sections/ViewBlock';
import '../pages/sections/Sport';
import '../pages/sections/Excurs';
import './ContactMap';
import './Header';
import './c-tabs';
import './Slider';
import './Dot';
import './ContactMap';

export class Common {
  /**
   * Cache data, make preparations and initialize common scripts.
   */
  constructor() {
    this.init();
  }
  /**
   * Initialize common scripts.
   */
  init() {
    objectFitImages();
  }
}

/** Export initialized common scripts by default */
export default new Common();
