const pixelsTag = document.querySelector('.pixels');
const bodyTag = document.querySelector('body');
const progressTag = document.querySelector('.progress');
const sections = document.querySelectorAll('section');
const clientTag = document.querySelector('.client');
const pageTag = document.querySelector('.page');
const headerTag = document.querySelector('header');

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

// when we scroll the page, see how far down the page we've scrolled
// then for each section, check whether we've passed ot and if we have....
// then updated the text in the header

const sectionScroll = () => {
  const pixels = window.pageYOffset;

  sections.forEach((section) => {
    if (section.offsetTop - 60 <= pixels) {
      clientTag.innerHTML = section.getAttribute('data-client');
      pageTag.innerHTML = section.getAttribute('data-page');

      if (section.hasAttribute('data-is-dark')) {
        headerTag.classList.add('white');
        progressTag.classList.add('white');
      } else {
        headerTag.classList.remove('white');
        progressTag.classList.remove('white');
      }
    }
  });
};

document.addEventListener('scroll', sectionScroll, false);

// when we scroll the page, make things parallax
// we want to move to certain tags, based on how far they are from an anchor point
// what is the anchor? well its the middle of the section
// how far should we parallax? well, it's a ratio of the distance scrolled to the middle point
const parallaxScroll = () => {
  const topViewport = window.pageYOffset;
  const midViewport = topViewport + window.innerHeight / 2;

  sections.forEach((section) => {
    const topSection = section.offsetTop;
    const midSection = topSection + section.offsetHeight / 2;

    const distanceToSection = midViewport - midSection;

    const parallaxTags = section.querySelectorAll(`[data-parallax]`);

    // loop over each parallax tag
    parallaxTags.forEach((tag) => {
      const speed = parseFloat(tag.getAttribute('data-parallax'));
      tag.style.transform = `translate(0, ${distanceToSection * speed}px)`;
    });
  });
};

document.addEventListener('scroll', parallaxScroll, false);
