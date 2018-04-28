import Popup from 'vintage-popup';

class Popups {
  constructor() {
    this.$popup = $('[data-popup-target]');

    this.init();
  }

  init() {
    this.$popup.on('click tap', function (e) {
      e.preventDefault();
    });

    this.$popup.popup({
      closeOnEsc: true,
      lockScreenEl: 'body, header'
    });
  }
}

export default new Popups();
