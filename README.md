# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  <!-- - [Screenshot](#screenshot) -->
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  <!-- - [Useful resources](#useful-resources) -->
- [Author](#author)

<!-- **Note: Delete this note and update the table of contents based on what sections you keep.** -->

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

<!-- ### Screenshot -->

<!-- ![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above. -->

<!-- **Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.** -->

### Links

<!-- - Solution URL: [Add solution URL here](https://your-solution-url.com) -->

- Live Site URL: [Shortly](https://mctursh.github.io/url-shortnening-api/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Google fonts](https://fonts.google.com/) - For fonts
- [Animate.css](https://animate.style/) - For navbar animation

<!-- **Note: These are just examples. Delete this note and replace the list above with your own choices** -->

### What I learned

working on this task I learnt how to the concept of how to integrating an External API with Hooks. Also learnt a few things about svg,resizing them and setting a hover state.finally I learnt a thing a few things about psuedo classes/Elements

```css
.query-form::after {
  content: attr(data-no-link-input);
  font-size: 0.5em;
  color: red;
  position: absolute;
  bottom: 16px;
  font-style: italic;
}
```

```js
async function shortenLink() {
  if (Clicked) {
    setIsPresent(false);
    const raw = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${LinkValue}`
    );
    const res = await raw.json();
    const {
      result: { code, short_link, original_link },
    } = res;
    setShortened((prev) => {
      const newList = [...prev];
      newList.unshift({ code, short_link, original_link });
      setCookie(
        "short",
        { history: [...newList] },
        { path: "/", maxAge: 2592000 }
      );
      return newList;
    });
  } else {
    setIsPresent(true);
  }
}
```

<!-- If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more. -->

<!-- **Note: Delete this note and the content within this section and replace with your own learnings.** -->

### Continued development

I would continue to work on a better way of dynamically resizing svg.

<!-- Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect. -->

<!-- **Note: Delete this note and the content within this section and replace with your own plans for continued development.** -->

<!-- ### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.** -->

## Author

- Frontend Mentor - [@Mctursh](https://www.frontendmentor.io/profile/mctursh)
- Twitter - [@mctursh](https://www.twitter.com/mctursh)

<!-- **Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.** -->
