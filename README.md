## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#What-I-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](https://github.com/Just9krish/Interactive-rating-component/blob/d8e05b1592e8705a4bdf5f71dc11f79595f13d04/design/desktop-design.jpg)

### Links

- Solution URL: [Click here](https://www.frontendmentor.io/solutions/interactive-rating-component-Hyh1TMjVq)
- Live Site URL: [Click here](https://interactive-rating-component-by-just9krish.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- CSS animation
- Javascript
- Javascript ES6
### What I learned

Making the card to rotate in 180deg on click with transform to card.


```css
.card,
.card__back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.back__card {
    display: flex;
    align-items: center;
    transform: rotateY(180deg);
}
```

```JS
submit.addEventListener("click", () => {
  // console.log('heloow')
  if (selected) {
    inner.style.transform = `rotateY(180deg)`;
  } else {
    alert("Plese give rating first!");
  }
});
```

## Author

- Linkedin - [@rvamit2648](https://linkedin.com/in/amit-vishwakarma-bb54b222a)
- Instagram - [@Just9krish](https://www.instagram.com/just9krish/)
- Frontend Mentor - [@Just9krish](https://www.frontendmentor.io/profile/Just9krish)
