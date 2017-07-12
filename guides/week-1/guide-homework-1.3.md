# Guide to Homework-1.2

This guide reviews some core concepts covered in [CodeAcademy Learn HTML & CSS: Part 1](https://www.codecademy.com/learn/learn-html-css), Section 3 "CSS Fundamentals" and Section 4 "Styling with CSS".

Additionally, you may find the following reference materials useful:

* [HTML Dog Tag List](http://www.htmldog.com/reference/htmltags/)
* [W3Schools Tag List](http://www.w3schools.com/tags/default.asp)
* [HTML Dog HTML Tutorial](http://www.htmldog.com/guides/html/beginner/)
* [W3Schools HTML Tutorial](http://www.w3schools.com/html/)
* [HTML Dog CSS Reference](http://www.htmldog.com/references/css)
* [W3Schools CSS Reference](https://www.w3schools.com/cssref/default.asp)

### IDs

IDs and classes allow us to label specific elements, so that we can apply style to them.  Consider the following code:

```html
<h1 id="header">Header name</h1>
<h1>Another tag</h1>
<h1>And another</h1>
```
If we put this in our stylesheet...

```css
#header {
  color: #FFFFFF;
}
```
...then only the text in the first h1 will turn white.  

### Classes

IDs are designed to be used only once per page, whereas classes are designed to be used multiple times.  And instead of a #, they start with a . when used in a stylesheet.

```html
<h2 class="sectiontitle">First section</h2>
<h2 class="sectiontitle">Second section</h2>
<h2 class="nonsectiontitle">First non-section</h2>
<h2 class="nonsectiontitle">Second non-section</h2>
```

If we put this in our stylesheet...

```css
.sectiontitle {
  color: #FFFFFF;
}

.nonsectiontitle {
  color: #BADA55;
}
```

...the first two h2 tags will turn white, and the second two will turn green.

### Classes with elements
We can also target specific elements that have a given class by combining classes and elements.  For example:

```html
<h2 class="bodytext">First section</h2>
<p class="bodytext">Opening paragraph</h2>
```

If we put this in our stylesheet...

```css
p.bodytext {
  color: #FFFFFF;
}

```

...then the words "Opening paragraph" will turn green, but not the words "First section".

### Targeting multiple classes

The following bit of code...

```css
.one, .two {
  font-size: 24px;
}
```

...will make elements with either class (one or two) 24px.

Similarly, we can also apply two classes to a single element...

```html
<h2 class="one two">three</h2>
<h2 class="one">one</h2>
```

...and apply style from different parts of the stylesheet, like so:

```css
.one {
  font-size: 24px;
}

.two {
  color: #CCCCCC;
}
```

The words "three" and "one" will both be 24px, but only "three" will be turned grey.

### Divs

DIVs are the most commonly used HTML tags, forming the structure of most web pages. They are essentially empty containers to which styling can be applied, generally through the use of IDs and classes. They are also used to group together related elements.

```html
<div class="top">
  <h1>My Name</h1>
  <h2>my title</h2>
</div>
```

### The Box Model

All HTML elements are really invisible boxes, in which we can put text and images. And through CSS, we can control the size of the boxes, how close they sit to other boxes on a page, and where the content we place inside them sits.

![courtesy W3.org box model](../../../img/w3-box-model.png)


--Width
--height
--borders
--padding vs margin
--Display inline block

* {
  box-sizing: border-box;
}
