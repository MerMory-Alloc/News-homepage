# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl).

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
First thing that i did here is dividing the layout to a header, a main and a footer. the main itself it has been divided to three sections displayed as grid of 3*3 .
the first for the main article displayed also as grid of 2*2 to arrange the elements inside it in the intended way.
the second one is the "new" section that take up the last column and the first two rows of the main , which lefts the last row completely for the third section that used Flexbox to layout the article cards that also uses flex to layout its content.
In the mobile env, every element will be displayed in one column except the article cards content.


I used flex to arrange the header elements which are the logo and the navigation list that uses also flex to put its elements in one line.
but in mobile dev, the nav list will be hidden, and instead a menu icon will be shown that once is clicked, it will trigger a JS function that will  hide the menu icon again, shows an exit icon, will show also the nav list and display an layer that reduce some brightness to the body of the page that behind the nav list.

### What I learned
in this exercise, i created for the first time a responsive navigation menu and enforced my skills in dealing with layouts. I also learned that the style that applied to an element using JS has higher priority over the same style that applied using CSS which i didn't knew before.
