# Take-home mid-term

The second part of our mid-term exam is a take-home exam.

**It is due on Wednesday, August 2 at the end of class. Monday, Tuesday and Wednesday will be in-class workshops in which you can get help from me and your colleague. It is highly unlikely you will be able to finish the exam if you only work on it during these workshops. Plan to do significant out-of-class work.**

This project is designed to test your mastery of the concepts and skills you've learned in this class during the first few weeks, including:

* Principles of design.
* Building web pages that look good on a range of devices.
* Using HTML, CSS and basic Javascript.
* Finding stories using data.
* Using Excel for data analysis.
* Selecting the right technique to visualize data and telling compelling visual stories.
* Building interactive maps with Google Fusion Tables.
* Building interactive timelines with Timelines.js.
* Building interactive charts with Highcharts.
* The ability to debug problems using resources available on the web.

This exam will reinforce these skills, preparing you to complete your final project.

## 352/652 Goes to the Movies!

For the mid-term, you will be building a single page data story project that takes a closer look at our favorite movies -- as measured by IMDB ratings and ticket sales -- using a variety of data visualization techniques.

Your final product will look similar to your Germany 2014 World Cup page, but with a different layout and different content.

## The data

The Excel workbook mid-term-movies.xlsx contains four worksheets about movies, and a fifth ("About"), which links to the source for each sheet.

* **17-IMDB-TOP-250** -	The top 250 movies of all time, ranked by IMDB.com user ratings. Scraped on 7/27/2017.
* **17-BOM-TOP-200-Gross**	The top 200 movies of all time, ranked by inflation adjusted domestic gross ticket sales (in 2017 dollars, according to Box Office Mojo. Scraped on 7/27/2017.
* **17-ON-BOTH-LISTS**	A merged spreadsheet containing all movies on both the IMDB Top 250 and BOM Top 200.  Also contains information about directors, from IMDB.com.
* **16-INTERNATIONAL**	Top 20 international box office markets in 2016 (most recent data), in billions, from MPAA.

## Data analysis

You will need to sort, filter and write formulas to arrive at the answers needed to build the visualizations.

For each visualization detailed below, I want you to create a new spreadsheet in the workbook and copy in the data you'll need to work with for that visualization. Do NOT edit the original spreadsheets.

I want to see the data analysis work -- the formulas you've written -- to arrive at the answers. And for the Highcharts visualizations, I'll want to see the CONCATENATE column you've written to structure the data.

You should include your edited workbook in your final project folder so I can see your work.  Remember, you will be submitting a link to both the final project and the data.

## Data visualizations

You will build the following six elements and include them on the page.  With each, as with the Germany World Cup project, you'll have a title for the visualization and two to three sentences of context to help readers understand the visualization.

### 1. An interactive timeline

An interactive timeline, with the following attributes:

* Uses Timeline.js
* Has an introductory slide with a title of "Top Grossing Movies for Each Decade", a subtitle of "A look at the most popular movies -- by gross ticket sales, adjusted for inflation into current dollars -- for each of the last 10 decades. Source: Box Office Mojo." "Box Office Mojo" should link here:  http://www.boxofficemojo.com/alltime/adjusted.htm.
* One slide for each decade - 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010.
* Each slide should have a title with the name of the movie, and the following text:
  * Year: Four-Digit-Year
  * Inflation Adjusted Gross: $ Figure
  * Unadjusted Gross: $ Figure
* Each slide should have a picture from the movie (movie poster, still image) taken from Wikimedia Commons (Wikipedia's image service) or a movie clip from YouTube, with attribution that links back to the original source.
* The date for each slide should be Jan. 1 of the year the movie was released.
* The spreadsheet for this should show evidence of filtering, sorting and ranking.

### 2. An interactive map

An interactive map, with the following attributes:

* Built with Google Fusion tables.
* Displays ticket sales in the top 20 international box office market countries, adjusted for population (per 1,000 people). You should not show *total* ticket sales, you must adjust for population.
* Shades the 20 countries in five color buckets, using a smartly selected color scheme of your choice that works with rest of data visualizations on the page and the page itself.
* Shades all other countries not on the list a light gray.
* A pop-up window for each country, which displays the following information:
  * Country name
  * 2016 Spending on movies per 1,000 people: $ figure
  * 2016 Total Spending on movies: $ figure billion
  * 2016 Population: figure million.
* Includes a legend placed over the map, built using HTML and CSS, similar to the one we designed in class.
* Below the map, in HTML, include text and links to the source of the information.
* The spreadsheet for this should show evidence of population data you acquire, and the per 1,000 population calculation.

### 3. An interactive chart

An interactive chart, with the following attributes:

* Uses Highcharts.
* Shows the total number of movies in the IMDB top 250 by decade, with one data point for each decade.
* Uses an appropriate chart type for change over time.
* Uses data labels, indicating the number of movies.
* Has a separate line, called a plot line, indicating the median number for all decades.
* Uses tooltips formatter to make each tooltip say "There were X movies in the IMDB top 250 in the DECADEs".
* Uses X and Y axis titles.
* Uses ONE COLOR for the data points that works with the rest of the data visualizations on the page and the page itself, and ANOTHER COLOR for the plot line.
* The spreadsheet for this should show evidence of filtering, sorting, counting, median and should include a concatenate function.
* The credit should read "Analysis of IMDB Top 250 Movies", and link to the source of the data.

### 4. An interactive chart

An interactive chart, with the following attributes:

* Uses highcharts.
* For films in both the IMDB top 250 and Box Office Mojo Top Adjusted Gross of All Time, show how many movies by each director are on both lists. Only include directors with two or more movies. For Disney/Pixar cartoons, don't group by director, group by "Disney/Pixar." They should be listed in order from most to least.
* Uses an appropriate chart type for category comparison.
* Uses data labels, indicating the number of movies on both lists.
* Uses tooltips formatter to make each tooltip say "DIRECTOR had X movies on the IMDB Top 250 and Box Office Mojo Top 200 Adjusted Grossing Movies".
Uses X and Y axis titles.
* Uses ONE COLOR that works with the rest of the data visualizations on the page and the page itself.
* Include a credit of "IMDB Top 250 Movies and Box Office Mojo Top Adjusted Gross Income Films." Link to the source of each data set.
* The spreadsheet for this should show evidence of filtering, sorting and counting and should include a concatenate function.

### 5. An interactive chart

An interactive chart, with the following attributes:

* Uses highcharts.
* Compares the adjusted gross income of each of the eight Star Wars movies with the IMDB rating for each of the eight movies.
* Uses an appropriate chart type for comparison of two variables.
* Uses THREE COLORS, that work with the rest of the data visualizations on the page and the page itself. The three elements for the "original trilogy" (AWESOME) three movies should be one color, the "prequels" (TERRIBLE) movies should be another color and the "new generation" (EXCELLENT) a third color.
* Includes the name of each movie as a data label.
* Uses X and Y axis titles.
* Has a legend with "original trilogy", "prequels" and "new generation."
* Uses tooltips formatter to make each tooltip say (all caps is bold):
  * MOVIE TITLE: value
  * IMDB RANKING: value
  * GROSS INCOME (2017 dollars): $ value
* Has a credit of "IMDB Top 250 Movies and Box Office Mojo Top Adjusted Gross Income Films" with links to the data set.
* The spreadsheet for this should show evidence of a concatenate function.

### 6. An interactive chart

* Uses highcharts.
* Visualizes something interesting of your own analysis from the given data.  It should make a discreet editorial point that is newsworthy and/or surprising.
* Uses an appropriate chart type for the given point you are trying to make.
* Uses a color scheme that works with the rest of the data visualizations on the page and the page itself.
* Uses data labels.
* Has tooltips.
* Uses X and Y Axis Titles.
* Credits the source of the data.
* The spreadsheet should contain a concatenate function.

## Page Text

* The page should have a title of "A Visual Look at Our Favorite Movies"
* The page should have a subtitle of "There are movies we think are good and movies we all pay to go see. These movies are not always the same. This is a visual look at our favorite movies, using IMDB ratings and data of box office ticket sales (adjusted for inflation) from Box Office Mojo."
* The page should have your byline.
* Each visualization should have a title and a two or three sentence writeup putting the visual in the proper context.
* You should use proper AP style, spelling and grammar.

## Page Design and Coding

The page layout and design is up to you.

* Your final product should not be identical to the Germany World Cup page.  You can do a two column design, a three column design, a one column design.  Whatever you do, it should look good.
* Wireframe before starting to build.  You may find these sheets helpful.   
* Make smart use of design elements -- as described in the Lynda.com course on Design Aesthetics -- color, value, texture, shape, form, space, line and type.
* Adhere to design principles -- as described in the Lynda.com course on Web Design Aesthetics for Web Design -- Contrast, Emphasis, Balance, Unity, Pattern, Movement, Rhythm and Repetition, Proportion, Simplicity and Gradation.
* The design should feel smart, professional and modern.
* Color should be use sparingly, primarily as accents. When in doubt, use white.
* The color scheme and font scheme for all the data visualizations should work together. Do not design them independently, in this regard. For help selecting color palates that work well together, use Color Scheme Designer or Coolors. For help selecting Google Fonts that work together, try this page or this page.
* It should look good at the four breakpoints that are part of the Bootstrap framework  (Mobile phones, browser less than 768px; Tablets, 768px - 991px; Small desktops, 992px - 1199px; Large desktops, greater than 1200px).
* The page should WORK at all sizes, with appropriate margin and padding, things should line up correctly. It should not look BROKEN. You will lose a lot of points if it looks broken.

## Required Design Elements
* **Menu** Use a top menu similar to the one on your Germany World Cup Page. The title in the menu should read "Our Favorite Movies" with the word TOP and numbers after it, one number for each visualization. When you click on those numbers, the page should jump down to that section.
* **Footer** Use a footer with your name and copyright.
* **Bootstrap** Use the Boostrap web framework, meaning you must use rows and columns.
* **Fonts** Use a total of two font families, including at least one Google font.
* **Media Queries** A minimum of ten style changes as a result of media queries.

## Coding
* Make use of proper folder structure.
* Nest DIV tags as appropriate.
* Use proper indentation.
* At least five CSS comments.
* At least 10 html comments.
* Make sure all tags are closed.
* Used descriptively named IDs and Classes.

## Resources you can use

This exam is 100 percent open book. You may use anything you find on the web, information from previous assignments, code from previous assignments. You may ask questions on web forums and use the answers you are provided. You may ask other classmates for help or guidance. You may work together, side-by-side. You may ask me for help as well.

If you use code from someone else on the web, you should be sure to give them credit with an HTML comment or a CSS comment. There are lots of great Bootstrap Templates out there that might serve as a good starting point. Feel free to use one, though I'll expect you'll need to make a lot of custom modifications to it.

You should NOT simply copy code from another classmate. Feel free to work together, and if you arrive at the same answer, that's fine, but DO NOT SIMPLY COPY something someone has already done. If someone asks you for help, you should try to guide them to the answer, showing how you arrived at the answer (what you searched, what forum you found, what you tried), before just giving them the answer.

## Submission

On ELMS, you will submit a link to your project, which should live at yourname.github.io/favorite-movies/index.html. Also on ELMS, you will upload a link to Excel workbook with all of your work.

## Grading Rubric

* Writing: 5 percent
* Data analysis: 15 percent
* Design: 15 percent
* Coding: 20 percent
* Interactive elements: 45 percent
  * Timeline: 7.5 percent
  * Map: 7.5 percent
  * Chart 1: 7.5 percent  
  * Chart 2: 7.5 percent
  * Chart 3: 7.5 percent
  * Chart 4: 7.5 percent
