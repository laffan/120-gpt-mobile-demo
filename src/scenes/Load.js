import { Scene } from "phaser";
import { loadFonts } from "../helpers/loadFonts";
import useChatGPT from "../helpers/useChatGPT";

export class LoadScene extends Scene {

  constructor(){
    super("LoadScene");
    this.fontsLoaded = false;
    this.assetsLoaded = false;
  }

  preload() {
    const { centerX, centerY } = this.cameras.main;
    const { width, height } = this.game.config;
    this.loadingBar = this.add.graphics();

    this.load.on("progress", (value) => {
      this.loadingBar.clear(); // reset fill/line style
      this.loadingBar.fillStyle(0xffffff, 1); // (color, alpha)
      this.loadingBar.fillRect(0, centerY, value, 5); // (x, y, w, h)
    });

    loadFonts(
      [
        { name: "OldNewspaperTypes", url: "./fonts/OldNewspaperTypes.ttf" },
      ],
      this
    );

    this.load.on("complete", () => {
      this.assetsLoaded = true;
    });

    this.events.once(`fontsLoaded_${this.scene.key}`, () => {
      this.fontsLoaded = true;
    });
  }

  update() {
    if (this.assetsLoaded && this.fontsLoaded) {
      this.loadingBar.destroy();
      this.scene.start("PlayScene");
    }
  }
}
