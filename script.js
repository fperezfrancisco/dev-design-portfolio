/* selecting necessary items */

const firstBlock = document.getElementById("firstBlock");
const mainBlock = document.getElementById("mainBlock");
const thirdBlock = document.getElementById("thirdBlock");

const heroImgList = [
  "screenshots/ecommerce-website-thumbnail.png",
  "screenshots/lynx-home.png",
  "screenshots/wordle-game-cover.png",
  "screenshots/fitness-hero-1.png",
  "screenshots/fitness-hero-2.png",
  "screenshots/hero-design-3.png",
];

/* set up background imgs for hero section */
firstBlock.style.backgroundImage = `url(${heroImgList[0]})`;
mainBlock.style.backgroundImage = `url(${heroImgList[1]})`;
thirdBlock.style.backgroundImage = `url(${heroImgList[2]})`;

let mainBlockIndex = 0;
let lastBlockIndex = 1;
let nextImgIndex = heroImgList.length - 1;

/** dealing with the hero transition section */

setInterval(shiftImgs, 3500);

function shiftImgs() {
  firstBlock.style.backgroundImage = `url(${heroImgList[nextImgIndex]})`;
  mainBlock.style.backgroundImage = `url(${heroImgList[mainBlockIndex]})`;
  thirdBlock.style.backgroundImage = `url(${heroImgList[lastBlockIndex]})`;

  lastBlockIndex = mainBlockIndex;
  mainBlockIndex = nextImgIndex;
  if (nextImgIndex === 0) {
    nextImgIndex = heroImgList.length - 1;
  } else {
    nextImgIndex -= 1;
  }
}
