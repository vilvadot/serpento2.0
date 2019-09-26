require("dotenv").config();

let { SCREEN_SIZE } = process.env;

const config = {
  debug: true,
  screen: {
    height: 192,
    width: 142,
    size: 3,
    heightOffset: 100,
    widthOffset: 100,
  },
  food: {
    countdown: '3'
  },
  snake: {
    weight: 20,
    segments: 5,
    segmentLength: 20,
  },
  teams: {
    red: ["#FE04FE", "#FF0001", "#FF5A01", "#FFFE01"],
    blue: ["#2EFE02", "#00FFFF", "#008EFE", "#002EFF"]
  }
};

export default config;
