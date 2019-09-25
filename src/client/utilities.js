import config from "./config";

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