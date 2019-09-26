class Assets {
  static loadFoods() {
    const foods = [
      loadImage(require("../assets/img/food/caca.gif")),
      loadImage(require("../assets/img/food/corazon.gif")),
      loadImage(require("../assets/img/food/cupcake.png")),
      loadImage(require("../assets/img/food/destello.gif")),
      loadImage(require("../assets/img/food/donut.png")),
      loadImage(require("../assets/img/food/estrella.gif")),
      loadImage(require("../assets/img/food/helado.gif")),
      loadImage(require("../assets/img/food/flashh.gif")),
      loadImage(require("../assets/img/food/onigiri.png")),
      loadImage(require("../assets/img/food/platano.png"))
    ];

    return foods;
  }

  static getAssets() {
    return {
      logo: loadImage(require("../assets/img/logo.png")),
      font: loadFont(require("../assets/fonts/serpento.ttf")),
      foods: this.loadFoods()
    };
  }
}

export default Assets;
