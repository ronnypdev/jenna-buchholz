const pixelsTag = document.querySelector('.pixels');

// when we scroll the page, update the pixels tags to be how far we've scrolled
const pageScroll = () => {
  const pixels = window.pageYOffset;
  pixelsTag.innerHTML = pixels;
};

document.addEventListener('scroll', pageScroll, false);
