
// ----------------------------------------------------------------
//  Gif Library
// ----------------------------------------------------------------

const GIF_URL_LIBRARIES = {
  snesMario: [
    'https://media.giphy.com/media/XIhPIFwsPxljcGRC5d/giphy.gif',
    'https://media.giphy.com/media/8YQnUVz4nGtVSPYBD0/giphy.gif',
    'https://media.giphy.com/media/wsUvl9KKYUyqsSIyuR/giphy.gif',
    'https://media.giphy.com/media/Em94upA57KaZO/giphy.gif',
    'https://media.giphy.com/media/JGxxK2YX1ro3e/giphy.gif',
    'https://media.giphy.com/media/qfBrXyuWoNXIQ/giphy.gif',
    'https://media.giphy.com/media/pLTkbqoB7TkQ0/giphy.gif',
    'https://media.giphy.com/media/l6KCu2QforUYG7g92A/giphy.gif',
    'https://media.giphy.com/media/ZVZbyfM3eYrLi/giphy.gif',
    'https://media.giphy.com/media/dCB3AqjZYHIZ82ph3q/giphy.gif',
    'https://media.giphy.com/media/1qiybA9UIc1NQ77yTe/giphy.gif',
    'https://media.giphy.com/media/FpLzrNVJ97uta/giphy.gif',
    'https://media.giphy.com/media/1wh06XT53tPGw/giphy.gif',
  ],
  donkeyKongCountry: [
    'https://media.giphy.com/media/XeqguPE3q88xsIeMgb/giphy.gif',
    'https://media.giphy.com/media/Tk1Kd0a22yEgLxQpv1/giphy.gif',
    'https://media.giphy.com/media/RkX1rXlzJwUSg188Og/giphy.gif',
    'https://media.giphy.com/media/dujd2ZIqm4TM3r5o2D/giphy.gif',
    'https://media.giphy.com/media/Ws4H5jCwjyKeCWcQNK/giphy.gif',
  ],
  horizon: [
    'https://media.giphy.com/media/FhfB8k1OXgEXrYPVWE/giphy.gif',
    'https://media.giphy.com/media/U9xo1nUWBsDRicvv4Z/giphy.gif',
    'https://media.giphy.com/media/MuoHtwzxgmDucBq6zi/giphy.gif',
    'https://media.giphy.com/media/XfYBBdhTqsNGxHu7xE/giphy.gif',
    'https://media.giphy.com/media/b17sdMXH7zXxlA48U2/giphy.gif',
    'https://media.giphy.com/media/fHOD1qOHf6NjOq4hzW/giphy.gif',
  ],
  cyberpunk: [
    'https://media.giphy.com/media/qWi6NKfkrt9TgXvIfg/giphy.gif',
    'https://media.giphy.com/media/e7fOboAZPMxGZKJCls/giphy.gif',
    'https://media.giphy.com/media/KmciaojrFEmAG5UUe8/giphy.gif',
    'https://media.giphy.com/media/uRgHKzY6LRhYPhF6fR/giphy.gif',
    'https://media.giphy.com/media/9rt05MSNSlWvbeqwOO/giphy.gif',
    'https://media.giphy.com/media/8lZok0eSvAYWISBPun/giphy.gif',
  ],
  stray: [
    'https://media.giphy.com/media/8lZok0eSvAYWISBPun/giphy.gif',
    'https://media.giphy.com/media/H4Oi4qsyDSBXdFTYkY/giphy.gif',
    'https://media.giphy.com/media/YkVckx2HB8qYLwZbOO/giphy.gif',
    'https://media.giphy.com/media/dkl9wgsdd7QYEFUNJi/giphy.gif',
    'https://media.giphy.com/media/Rya9QUDhgQUjjHOOtt/giphy.gif',
    'https://media.giphy.com/media/B8HksyRFSvJXlJx01j/giphy.gif',
    'https://media.giphy.com/media/vXmqQ4YRlB7ADU1kGC/giphy.gif',
  ],
  celesteAndTowerfall: [
    'https://media.giphy.com/media/1AeQVI46jGSw6cdTJy/giphy.gif',
    'https://media.giphy.com/media/1eExVXKUhfkBZWofo4/giphy.gif',
    'https://media.giphy.com/media/jl5cqQfD9D4s7F5OG3/giphy.gif',
    'https://media.giphy.com/media/DBPOfYpRmzzkRaTxE4/giphy.gif',
    'https://media.giphy.com/media/mJR5uqvcNAxCfXteDk/giphy.gif',
    'https://media.giphy.com/media/3dhiqcBhbfjkIXpsQG/giphy.gif',
  ],
  spiderMan: [
    'https://media.giphy.com/media/l46C5YyhNUlhFLlio/giphy.gif',
    'https://media.giphy.com/media/l46CnyoKhfS6RxaGA/giphy.gif',
    'https://media.giphy.com/media/26BRAe3L5Fk4jb3pe/giphy.gif',
    'https://media.giphy.com/media/26BRFTT1ZJGQOrkwE/giphy.gif',
    'https://media.giphy.com/media/xul7MlYTnChofrvKMX/giphy.gif',
    'https://media.giphy.com/media/l46Ckp2S7miHaIaek/giphy.gif',
  ],
  skyrim: [
    'https://media.giphy.com/media/U3n3hOE1mFVeulmpnf/giphy.gif',
    'https://media.giphy.com/media/Thp8bXXK2h3ANXAtOE/giphy.gif',
    'https://media.giphy.com/media/wTzYIM6Tjk0Ao/giphy.gif',
    'https://media.giphy.com/media/3o751WWy3RxPIkCcgw/giphy.gif',
  ]
  // GTAV
  // Super Smash Bros
  // Tony Hawk's Underground
  // SSX 3 and On Tour
  // Burnout Revenge
  // Kirby's Avalanche
};

// ----------------------------------------------------------------
//  Cabinet Class
// ----------------------------------------------------------------

// All of these GifLibraries will instead be cabinets with Game titles
// and a list of Gifs
// and a color pallette for the cabinet
class Cabinet {
  // string, Url[], Color[]
  constructor(name, gifLibrary, pallet) {
    this.name = name;
    this.library = [...gifLibrary];
    this.pallet = pallet;
  }

  // renders the cabinet on an element
  // starts the gif timeout
  render(element) {
    this.element = element;
    
    this.element.find('.logo-holder').css({
      background: this.pallet[0]
    });
    this.element.find('.button-row-face').css({
      background: this.pallet[0]
    });
    this.element.find('.button-1 .button-color').css({
      background: this.pallet[1]
    });
    this.element.find('.button-2 .button-color').css({
      background: this.pallet[1]
    });
    this.element.find('.ball').css({
      background: this.pallet[1]
    });
    this.element.find('.logo').text(this.name);

    // TODO: generate random animation offsets and cabinet sizings

    this.screen = this.element.find('.screen');
    this.setGifOnScreen(this.getRandomGifUrl());
  }
  
  destroy() {
    // clear the timeout
    clearTimeout(this.timeout);
    // remove from the screen
    $(this.element).remove();
  }
  
  // gif cycler

  setGifOnScreen(gifUrl) {
    $(this.screen).css({
      background: `url(${gifUrl})`
    });
    this.timeout = setTimeout(() => {
      const newGifUrl = this.exchangeForRandomGifUrl(gifUrl);
      this.setGifOnScreen(newGifUrl);
    }, Math.random() * 3000 + 1800);
  }

  // Gif Library helpers
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

// ----------------------------------------------------------------
//  Cabinets
// ----------------------------------------------------------------

const gifLibrary = new Cabinet('all', [
  ...GIF_URL_LIBRARIES.celesteAndTowerfall,
  ...GIF_URL_LIBRARIES.cyberpunk,
  ...GIF_URL_LIBRARIES.donkeyKongCountry,
  ...GIF_URL_LIBRARIES.horizon,
  ...GIF_URL_LIBRARIES.skyrim,
  ...GIF_URL_LIBRARIES.snesMario,
  ...GIF_URL_LIBRARIES.spiderMan,
  ...GIF_URL_LIBRARIES.stray,
]);

const CABINETS = [
  new Cabinet('Cyberpunk 2077', GIF_URL_LIBRARIES.cyberpunk, ['#f7ec13', '#56beca']),
  new Cabinet('Horizon', GIF_URL_LIBRARIES.horizon, ['#55aee4', '#7d1e13']),
  new Cabinet('Spider-Man', GIF_URL_LIBRARIES.spiderMan, ['#ce1612', '#fff'])
];

// ----------------------------------------------------------------
//  MAIN
// ----------------------------------------------------------------

(function() {
  const originalCabinet = $('.cabinet-holder');
  originalCabinet.remove();

  const newCabinet = originalCabinet.clone();
  CABINETS[0].render(newCabinet);
  $('.cabinets').append(newCabinet);

  // TODO: use this to add a new cabinet, at the start, add 7 cabinets that'll get scrolled
  const newCabinet2 = originalCabinet.clone();
  CABINETS[1].render(newCabinet2);
  $('.cabinets').append(newCabinet2);

  const newCabinet3 = originalCabinet.clone();
  CABINETS[2].render(newCabinet3);
  $('.cabinets').append(newCabinet3);
  // CABINETS[0].destroy();
})();

