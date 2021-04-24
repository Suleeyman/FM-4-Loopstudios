# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Submited on FM](https://www.frontendmentor.io/solutions/loopstudios-with-basic-scss-and-display-grid-1aXYoPNF-)
- Live Site URL: [Github page](https://suleeyman.github.io/FM-4-Loopstudios/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Implement a background on images, a "`mask`".

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.mask {
  background: linear-gradient(270deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.601863) 100%);
}
```
Also learned how to make a bit more advanced hover effects with `clip-path` CSS property with ::after pseudo-element.

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.galerie .see-all::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  clip-path: circle(0% at 15% 50%);
  transition: 0.3s linear;
  z-index: -1;
}

.galerie .see-all:hover {
  color: white;
}

.galerie .see-all:hover::after {
  clip-path: circle(120% at 15% 50%);
}
```
Moreover, this challenge has involved me to use `display: grid;`, and I tried my best with.

## Author

- Frontend Mentor - [@Suleeyman](https://www.frontendmentor.io/profile/Suleeyman)