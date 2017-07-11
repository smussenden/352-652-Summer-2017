1. HTML and CSS are kept in separate files in order to keep code maintainable and readable, as well as keep structure separate from styling.

2. The <style> element allows you to write CSS code within an HTML file.

3. A CSS stylesheet can be linked to an HTML file using the <link> element, which requires three attributes:

href - set equal to the path of the CSS file.
type - set equal to text/css.
rel - set equal to stylesheet.
In this lesson, you learned about the two different places in which you can write CSS code, but you didn't write any CSS code at all.

In the next lesson, you'll learn about the basic structure and syntax of CSS so that you can start using CSS on your own.


# Guide to Homework-1.2

This guide reviews some core concepts covered in [CodeAcademy Learn HTML & CSS: Part 1](https://www.codecademy.com/learn/learn-html-css), Section 2 "CSS Fundamentals" and Section 4 "Styling with CSS".

Additionally, you may find the following reference materials useful:

* [HTML Dog Tag List](http://www.htmldog.com/reference/htmltags/)
* [W3Schools Tag List](http://www.w3schools.com/tags/default.asp)
* [HTML Dog HTML Tutorial](http://www.htmldog.com/guides/html/beginner/)
* [W3Schools HTML Tutorial](http://www.w3schools.com/html/)
* [HTML Dog CSS Reference](http://www.htmldog.com/references/css)
* [W3Schools CSS Reference](https://www.w3schools.com/cssref/default.asp)

When building web pages, we generally keep the structure of the page in one file (the HTML, .html) and styling information in a second file (the Stylesheet, .css).  These are both text files, but they contain different kinds of information.

To connect the two files, we put a line of code within the `<head></head>` tag of the HTML page we want to style, giving directions where to find the stylesheet:

```html
<link href="style.css" type="text/css" rel="stylesheet">
```

or, let's say the stylesheet is in a folder called "styling", then our code would look like this:  

```html
<link href="styling/style.css" type="text/css" rel="stylesheet">
```

The code we write in our stylesheet looks different than HTML, but it's designed to work together. Here's an example, which tells the browser to make all text within `<h1>` tags have a font size of 24 pixels.

```css
h1 {
  font-size: 24px;
}
```

In the above example, the *h1* is called a "selector". Inside of the two curly brackets, the *font-size* is called a "property", and a colon separates it from the *42px*, which is called the value. The line ends with a semi-colon.  There are hundreds of properties that affect styling.

Our aim is always to write as little code as possible.  So if two different elements on a page are supposed to have the same styling (or some of the same styling), we can put them together in our stylesheet.  This bit of code tells the browser to make all text in `<h1>` and `<p>` tags 12 pixels.  

```css
h1, p {
  font-size: 24px;
}
```

We can apply the same styling to every element on the page using a wild-card selector, like so:

```css
\* {
  font-size: 24px;
}
```

When writing CSS code, neatness is important.  This is what your code should look like, in terms of spacing.

```css
h2 {
  font-size: 12px;
}

p {
  font-size: 6px;
}
```

Comments help keep your code readable, without breaking it.  The format for comments is different than html. This is an HTML comment.


<!-this is an html comment-->


And this is a CSS comment:
```css
/*This is a CSS comment*/
