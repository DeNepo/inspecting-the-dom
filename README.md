# Inspecting The DOM

"_Inspecting the DOM with your browser's Developer Tools_" is a sentence with quite a few new words.  But have no fear, this repo makes it clear!

This repository containes a collection of live web pages designed to help you understand the lifecycle of an HTML web page (__HTML+CSS source code -> the DOM -> rendered content__) and how you can use your browser's Developer Tools to inspect and modify __the DOM__.

You'll know you have mastered this repo when you understand (and can explain to someone else!) the 3 stages in an HTML page's life-cycle using your DevTools and any simple website:
1. __HTML & CSS Source Code__: This is the text that you write in a .html file and open with your browser.  HTML is a _mark up language_, meaning it describes to a computer how you want the content on your web page to be organized behind the scenes. CSS is a language to describe how your web page should be rendered on the screen. You can't edit the source code from the browser, only from your text editor. Any changes you make in the browser will disappear when you refresh the page.
2. __The DOM Tree__: When you open an HTML file in your browser, it _parses_ the code you wrote and builds the __DOM Tree__.  The DOM Tree is very similar to your HTML but will not be exactly the same, \<table> tags are helpful for understanding this.
3. __Rendered Content__: The DOM is an _abstract representation_ of the content in your website, it is NOT exactly what you see on the screen. This is easiest to understand when you think of CSS: it is possible to write one div below anther in your .html file, have them in that order in the DOM (dev tools), then switch them on screen in the final rendering using CSS. Why is this? Because (aproximately) HTML is used to describe the DOM, and CSS is used to describe how the DOM is rendered.  (don't worry if that doesn't make sense right away, it'll take some practice to wrap your head around the idea).

"Great!" you say  "This is a very well written explanation. But why does this matter, can't I just make pretty things?".  Yes, you could just hack together some HTML & CSS to make pretty pages, but without learning to use the Developer Tools and without understanding the HTML lifecycle (_HTML+CSS source code -> the DOM -> rendered content_), you'll never leave the minor leagues.

Not only is it very difficult to catch your mistakes in HTML & CSS without mastering the DevTools, but mastering the DevTools _before_ moving on to JavaScript is one of the single most helpful things you can do to prepare.

### index
* [learning objectives](#learning-objectives)
* [the exercises](#the-exercises)
* [study links](#study-links)

---

## Learning Objectives

* See the source code for any web page directly from the browser (ctr-u in FireFox)
* Inspect the DOM using your browser's Developer Tools
* Modify a live website from your browser's Developer Tools (not the source code!)


[TOP](#inspecting-the-dom)

---

## The Exercises

All exercises in this repository consist of an example meant to be studied as in a live web page, how else do expect to practice inspecting webistes!

Here they are:
1. [basic example without CSS](https://hackyourfuturebelgium.github.io/inspecting-the-dom/examples-to-study/without-css.html)
1. [basic example with CSS](https://hackyourfuturebelgium.github.io/inspecting-the-dom/examples-to-study/with-css.html)
1. [rearrange with CSS](https://hackyourfuturebelgium.github.io/inspecting-the-dom/examples-to-study/rearrange-with-css.html)
1. [tables are not as they appear!](https://hackyourfuturebelgium.github.io/inspecting-the-dom/examples-to-study/tables.html)
1. HTMl bugs:
    * [no ```<tr>```](https://hackyourfuturebelgium.github.io/inspecting-the-dom/examples-to-study/html-bugs-no-tr.html)
    * [unclosed tags](https://hackyourfuturebelgium.github.io/inspecting-the-dom/examples-to-study/html-bugs-unclosed-tags.html)
    * [attributes vs. innerHTML](https://hackyourfuturebelgium.github.io/inspecting-the-dom/examples-to-study/html-bugs-attributes-vs-innerHTML.html)
1. Ways of including CSS:
    * [inline css](https://hackyourfuturebelgium.github.io/inspecting-the-dom/examples-to-study/inline-css.html)
    * [internal css](https://hackyourfuturebelgium.github.io/inspecting-the-dom/examples-to-study/internal-css.html)
    * [external css](https://hackyourfuturebelgium.github.io/inspecting-the-dom/examples-to-study/external-css.html)
1. CSS bugs:
    * [exercise 1](https://hackyourfuturebelgium.github.io/inspecting-the-dom/examples-to-study/css-bugs-1.html)
    * [exercise 2](https://hackyourfuturebelgium.github.io/inspecting-the-dom/examples-to-study/css-bugs-2.html)
    * [exercise 3](https://hackyourfuturebelgium.github.io/inspecting-the-dom/examples-to-study/css-bugs-3.html)
    * [exercise 4](https://hackyourfuturebelgium.github.io/inspecting-the-dom/examples-to-study/css-bugs-4.html)


[TOP](#inspecting-the-dom)

---

## Study Links


What is the DOM?
* articles: [w3schools.com](https://www.w3schools.com/js/js_htmldom.asp), [css-tricks.com](https://css-tricks.com/dom/)
* videos: [freecodecamp](https://www.youtube.com/watch?v=80Mr2Z6Qikc), [udacity](https://www.youtube.com/watch?v=tSv2KIF7uE4)

visualizing the HTML life-cycle:
* [Hixie's Live DOM Viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/)

HTML -> DOM, CSS -> Rendering:
* [stack overflow](https://stackoverflow.com/questions/4800538/client-side-html-dom-and-css)
* [frontend babel](http://frontendbabel.info/articles/webpage-rendering-101/)

Dev Tools:
* FireFox: [what are the devtools?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools), [how to open them](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Open_the_Inspector), [editing live sites](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML)
* Chrome, Chromium, Brave: [Getting Started Inspecting](https://developers.google.com/web/tools/chrome-devtools/dom/)

HTML:
* [30 good things to do](https://code.tutsplus.com/tutorials/30-html-best-practices-for-beginners--net-4957)
* [10 bad things to avoid](https://www.tipsandtricks-hq.com/10-common-html-mistakes-to-avoid-1980)

CSS:
* [3 ways of styling](https://www.w3schools.com/CSS/css_howto.asp)
* [good and bad practices](https://speckyboy.com/good-bad-css-practices/)

Looking for more like this?
* [appspot: dom-tutorials](https://dom-tutorials.appspot.com/static/index.html)

[TOP](#inspecting-the-dom)

___
___
### <a href="https://hackyourfuture.be" target="_blank"><img src="https://pbs.twimg.com/profile_images/984474625009741824/Bs_qKx6-_400x400.jpg" width="100" height="100" alt="Hack Your Future: Belgium" /></a>
