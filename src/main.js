// src/main.js
import Phaser from "phaser";
import isMobile from "./helpers/isMobile";
import { LoadScene } from "./scenes/Load";
import { PlayScene } from "./scenes/Play";

const gameParent = "game";

// Remove "loading" string
document.getElementById("loading").style.display = "none";

// Check to see if on a mobile browser
const onMobile = isMobile();

const gameConfig = {
  parent: gameParent,
  type: Phaser.AUTO,
  backgroundColor: "#cfcfcf",
  width: onMobile ? window.innerWidth : 600,
  height: onMobile ? window.innerHeight : 600,
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        x: 0,
        y: 0,
      },
    },
  },
  scene: [LoadScene, PlayScene],
};

new Phaser.Game(gameConfig);
