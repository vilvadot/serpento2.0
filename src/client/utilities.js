import config from "./config";

export const randomHexColor = () => '#'+Math.floor(Math.random()*16777215).toString(16);

export default randomHexColor;


export const random = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const translateX = x => {
  return Math.floor(x * config.width * config.screenSize + config.widthOffset);
};

export const translateY = y => {
  return Math.floor(
    y * config.height * config.screenSize + config.heightOffset
  );
};