const pixelsTag = document.querySelector('.pixels');
const bodyTag = document.querySelector('body');
const progressTag = document.querySelector('.progress');

// when we scroll the page, update the pixels tags to be how far we've scrolled
const pageScroll = () => {
  const pixels = window.pageYOffset;
  pixelsTag.innerHTML = pixels;
};

document.addEventListener('scroll', pageScroll, false);

// when we scroll the page, make a progress bar that track of the distance
const progressBar = () => {
  const pixels = window.pageYOffset;
  const pageHeight = bodyTag.getBoundingClientRect().height;
  const totalScrollableDistance = pageHeight - window.innerHeight;

  const percentage = pixels / totalScrollableDistance;

  progressTag.style.width = `${100 * percentage}%`;
};

document.addEventListener('scroll', progressBar, false);
