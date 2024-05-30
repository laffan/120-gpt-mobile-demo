import { Scene } from "phaser";
import useChatGPT from "./../helpers/useChatGPT";
import isMobile from "./../helpers/isMobile";
const onMobile = isMobile();

export class PlayScene extends Scene {
  constructor() {
    super("PlayScene");
    this.story = [];
    this.currentRoom = 0;
    this.buttons = [];
    this.sharedTextStyle = { fontFamily: "OldNewspaperTypes", fill: "#000000" };
  }

  async create() {
    this.titleText = this.add.text(50, 50, "...", {
      fontSize: "32px",
      ...this.sharedTextStyle,
    });

    this.narrativeText = this.add.text(50, 110, ` `, {
      fontSize: "22px",
      ...this.sharedTextStyle,
      wordWrap: {
        width: onMobile ? window.innerWidth - 100 : 500, // Set the maximum width for wrapping
        useAdvancedWrap: true,
      },
    });

    await this.ventureForth("The dungeon");
  }

  drawButtons() {
    this.titleText.setText("Where to go?");
    this.clearButtons();

    // Loop through the different options and create a button for each
    this.story[this.currentRoom].options.forEach((option, index) => {
      const yPos = onMobile
        ? window.innerHeight - (index * 40 + 100)
        : 400 + index * 40;
      const button = this.add
        .text(50, yPos, `${option.direction} : ${option.roomName}`, {
          fontSize: "22px",
          fontFamily: "OldNewspaperTypes",
          fill: "#ffffff",
          backgroundColor: "#000000",
          padding: {
            left: 10,
            right: 10,
            top: 3,
            bottom: 3,
          },
        })
        .setInteractive();

      button.on("pointerdown", () => {
        this.currentRoom++;
        this.ventureForth(option.roomName);
        this.clearUI();
      });

      // Save ref so btns can be cleared later.
      this.buttons.push(button);
    });
  }

  drawNarrative() {
    this.titleText.setText(`${this.story[this.currentRoom].roomName}`);
    this.narrativeText.setText(this.story[this.currentRoom].narrative);
  }

  async ventureForth(selection) {
    this.titleText.setText("And then ...");

    const roomData = await useChatGPT(selection);
    console.log(roomData);
    // Clean up the response
    const betweenCurlyBraces = /\{[\s\S]*\}/; // thanks ChatGPT!
    // ChatGPT will occasionally return markdown wrapper,
    // so we need to use regex to clean up the string.
    const cleanedRoomData = roomData.match(betweenCurlyBraces)[0];
    // Add to the string as a JS object, using JSON.parse()
    this.story.push(JSON.parse(cleanedRoomData));
    // Tell the UI about it.
    this.updateUI();
  }

  updateUI() {
    this.drawButtons();
    this.drawNarrative();
  }

  clearUI() {
    this.titleText.setText("Onward!");
    this.narrativeText.setText("...");
    this.clearButtons(); // Clear buttons when UI is cleared
  }

  clearButtons() {
    this.buttons.forEach((button) => button.destroy());
    this.buttons = []; // Reset the array after clearing
  }
}

export default PlayScene;
