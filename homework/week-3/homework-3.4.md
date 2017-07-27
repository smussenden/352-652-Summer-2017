# Homework 3.4

Building off of the Highcharts tutorial in class 3.4, I want you to build a highchart at the bottom of your [Germany World Cup page that looks exactly like mine](http://smussenden.github.io/germany-world-cup).

## Getting started

Copy the `.graphiccontainer` with an ID of four and paste it below, changing the ID to 4. Put a div with an ID of "passeschart" inside of the `.graphiccontent` div.  Then, follow the instructions in the step-by-step tutorial from in-class assignment 3.4 to get the population highchart to load in the "passeschart" div.

Remember:
* Build the car frame (you've already done this, it's the HTML structure of the page)
* Drop in the engine (put the link to your highcharts library in the right spot)
* Give it a final destination (put the div with an ID of passes chart in the right spot).
* Give the car directions on the specific route to take to the final destination (with a pre-existing highcharts function).

## Making changes to the pre-written function

It doesn't make a lot of sense to have a population chart on this page.  So you're going to customize it to match the one I've made showing average number of passes per game. Specifically, you should:

* Change the 16 cities to 8 countries listed in my chart (the World Cup quarterfinalists).
* Change the number values to the average number of passes per game for each country (get from your spreadsheet submitted for Class 11 In-Class Assignment).
* Make sure the countries are ordered from most PPG to least (Germany should be at top)
* Change the rotation of the country names from 45 degrees to perfectly horizontal.
* Turn off the "tooltip" that appears when you mouseover a bar.
* Get rid of the credit that says highcharts.com (make it disappear).
* Change the Y-Axis title to average number of passes per game.
* Change the chart title to Average Number of Passes Per Game by World Cup Quarterfinalists.
* Change the subtitle to Source: FIFA.com

## Title and text

Use this title and text

```
A Passing Machine

Germany moved the ball around the field at a rapid clip throughout the tournament, passing the ball an average of 726 times per game -- well above the median of 513 passes for all 32 teams.
```


## Submission

Commit the changes to your GitHub repo, and post the link to ELMS.
