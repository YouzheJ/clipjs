var Clipping = function (config) {
  if (!config) config = {};
  this.url = config.url || '';
  this.base = new Base();
  this.bg = new BG();
  this.img = new Img(this.url);
}

Clipping.prototype.init = function () {
  this.base.init();
  this.img.draw(function () {
    this.base.drawLayer([this.bg.layer, this.img.layer]);
  }.bind(this));
}

var clip = new Clipping({
  url: './images/IMGP3122.jpg'
});

clip.init();