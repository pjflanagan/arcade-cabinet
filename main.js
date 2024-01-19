
const ALL_GIF_URLS = [
  'https://media.giphy.com/media/XIhPIFwsPxljcGRC5d/giphy.gif',
  'https://media.giphy.com/media/8YQnUVz4nGtVSPYBD0/giphy.gif',
  'https://media.giphy.com/media/wsUvl9KKYUyqsSIyuR/giphy.gif',
  'https://media.giphy.com/media/Em94upA57KaZO/giphy.gif',
  'https://media.giphy.com/media/JGxxK2YX1ro3e/giphy.gif',
  'https://media.giphy.com/media/qfBrXyuWoNXIQ/giphy.gif',
  'https://media.giphy.com/media/pLTkbqoB7TkQ0/giphy.gif',
];

class GifLibrary {
  constructor() {
    this.library = [...ALL_GIF_URLS];
  }

  getRandomGifUrl() {
    const randomIndex = Math.floor(Math.random() * this.library.length);
    const randomGifUrl = this.library[randomIndex];
    this.library.splice(randomIndex, 1);
    return randomGifUrl;
  }

  returnGifUrl(oldUrl) {
    this.library.push(oldUrl);
  }

  exchangeForRandomGifUrl(oldUrl) {
    const newUrl = this.getRandomGifUrl();
    this.returnGifUrl(oldUrl);
    return newUrl;
  }
}

const gifLibrary = new GifLibrary();

function setGifOnScreen(screen, gifUrl) {
  $(screen).css({
    background: `url(${gifUrl})`
  });
  setTimeoutForScreen(screen, gifUrl);
}

function setTimeoutForScreen(screen, gifUrl) {
  setTimeout(() => {
    const newGifUrl = gifLibrary.exchangeForRandomGifUrl(gifUrl);
    setGifOnScreen(screen, newGifUrl);
  }, Math.random() * 3000 + 1800);
}

(function() {
  $('.screen').each(function() {
    setGifOnScreen(this, gifLibrary.getRandomGifUrl());
  })
})();

