# Inspecting The DOM

"_Inspecting the DOM with your browser's Developer Tools_" is a sentence quite a few new concepts.  But have no fear, this repo will make it clear!

This repository containes a collection of live web pages designed  to help you understand the lifecycle of an HTML web page (__HTML source code -> the DOM -> rendered content__) and how you can use oyur browser's Developer Tools to inspect and modify the __live DOM__.

You'll know you have mastered this material when you understand (and can explain to someone else!) the 3 stages in an HTML page's life-cycle:
1. __HTML Source Code__: This is the text that you write in a .html file and open with your browser.  HTML is a _mark up language_, meaning it describes to a computer how you want the content on your web page to be organized behind the scenes.
2. __The DOM Tree__: When you open an HTML file in your browser, it _parses_ the code you wrote and builds the __DOM Tree__.  The DOM Tree is very similar to your HTML but will not be exactly the same, \<table> tags are helpful for understanding this. 
3. __Rendered Content__: The DOM is an _abstract representation_ of the content in your website, it is NOT exactly what you see on the screen. This is easiest to understand when you think of CSS: it is possible to write one div below anther in your .html file, have them appear like that order in the DOM Tree, then switch them in the final rendering using CSS.


### index
* [learning objectives](#learning-objectives)
* [the exercises](#the-exercises)
* [resources](#resources)

---

## Learning Objectives

* See the source code for any web page directly from the browser (ctr-u in FireFox)
* Inspect the live DOM Tree using your browser's Developer Tools
* Modify a live website from your browser's Developer Tools (not the source code!)


[TOP](#inspecting-the-dom)

---

## The Exercises

All exercises in this repository consist of an example meant to be studied as in a live web page, how else do expect to practice inspecting webistes!  

Here they are:
1. [basic example without CSS](https://hackyourfuturebelgium.github.io/inspecting-the-dom/examples-to-study/without-css.html)
1. [basic example with CSS](https://hackyourfuturebelgium.github.io/inspecting-the-dom/examples-to-study/with-css.html)
1. [rearranging with CSS](https://hackyourfuturebelgium.github.io/inspecting-the-dom/examples-to-study/rearrange-with-css.html)
1. [tables are not as they appear!](https://hackyourfuturebelgium.github.io/inspecting-the-dom/examples-to-study/tables.html)
1. [inline style vs. separate CSS]()
1. [HTMl bugs 1]()
1. [HTMl bugs 2]()
1. [CSS bugs 1]()
1. [CSS bugs 2]()

[TOP](#inspecting-the-dom)

---

## Resources

visualizing the HTML life-cycle:
* [Hixie's Live DOM Viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/)

FireFox Dev Tools:
* [what are the devtools?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools)
* [how to open them](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Open_the_Inspector)
* [editing live sites](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML)


[TOP](#inspecting-the-dom)

___
___
### <a href="https://hackyourfuture.be" target="_blank"><img src="https://pbs.twimg.com/profile_images/984474625009741824/Bs_qKx6-_400x400.jpg" width="100" height="100"></img></a>
