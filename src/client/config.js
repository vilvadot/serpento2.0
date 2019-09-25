require("dotenv").config();

let { SCREEN_SIZE } = process.env;

const config = {
  height: 192,
  width: 141,
  heightOffset: 100,
  widthOffset: 100,
  screenSize: SCREEN_SIZE,
  foodCountdown: 3,
  debug: false,
  teams: {
    red: ["#FE04FE", "#FF0001", "#FF5A01", "#FFFE01"],
    blue: ["#2EFE02", "#00FFFF", "#008EFE", "#002EFF"]
  }
};

export default config;
