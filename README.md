# Quiz

# Goal for this Project

This is a quiz application using HTML, CSS, and Javascript. This application emphasizes the use of Javascript to provide quiz questions and collect user data to determine whether the answers to a question are correct, this then generates a score and appends a final page of results from the user data.

This project has been deployed to GitHub Pages. To get this project up and running, you can follow the deployment link.

# Table of Contents
* [UX](#ux "UX")
    * [Summary](#summary "Summary")
    * [Following Features](#this-project-has-the-following-features "This project has the following features")
    * [Psuedo code](#pseudo-code)
    * [Script Features](#this-project-has-script-features-of)
    * [Design Choices](#design-choices)
        * [Fonts](#fonts)
        * [Icons](#icons)
        * [Colours](#colours)
    * [Languages](#languages)
    * [Tools](#tools)
    * [Libraries](#libraries)
    * [Media Queries](#media-Queries)
    * [Features](#features)
    * [Testing](#testing)
    * [Deplyment](#deployment)
    * [Credits](#credits)



        * [Unfixed Bugs](#unfixed-bugs)
    * [Deployment](#deployment)
# UX


## Summary
* HTML and CSS and Javascript documents create a quiz with multiple choice questions with Javascript trivia.
* This project emphasizes the use of using Javascript to make dynamic changes to an HMTL document.
* This project utilizes the use of appending HTML pages.

## This project has the following features:
* A Start Quiz button
* An appended HTML page that features questions, and multiple choice answers.
    + Answers are recording using an event listener, "click" and tracks correct answers.
    + Progressbar to keep track on how many questions left
* An appended HTML page that features:
    + Final score
    + A Summary of how many questions answered correctly
    + Input area to record initials
    + A Submit button
    + Submit buttom saves initials and score to local storage
* A Highscores HTML
    + This a list summary of intials and final top 5 scores
    + Go back button travels to the start of the quiz

## Psuedo code:
* When user selects the right answer, color purple shows on the tab
* When user selects the right answer, color red shows on the tab
* Final score will keep track of how many the user got right
* Final Score Appended page
* Captures local storage
* Travels to another HTML
* Retrieved highscores

## Script features:
* Questions contained in an array variable with objects
* Variable declaration area
* An event listener (onclick)
* A fetch api function to render the questions and choices on the page using a for loop
* An event listener on all list choices
* An appended page showing the final stats of the individual user with input area for initials, captures local storage
* Highscores retreived local storage

## Design Choices
* Fonts
    + I have used Google Fonts to find a text that best seems fun and enjoyable. Bowlby One SC was chosen.
    ![Responsive Displays](googlefont.png)
* Icons
    + I used some icons from the Font Awesome library. A star highlighting the highscores button. 
* Colours
    + I have used Coolors to help in the selection of my colour scheme.
    #f9dc5cff - This colour will be used as a background colour.
    #ed254eff - This colour will be used as the starting button on the landing page and also the progressbar during the quizgame.
    #000000 - This color will be used on all text.
    #FFFFFF -  This color will only be used to highlight the alternative buttons for the questions.
    #465362ff - This color will be used on the highscore button to separate from the play button.
    #2cd126 - This color will be used on the tabs form in the game.
    #5d0af8 - When clicked the right answer this color will be shown. 
    #fa0000 - When clicked the wrong answer this color will be shown. 
    ![Responsive Displays](coolers.png)

## This project has media Queries for:
* max-width: 786px
    + Adjusts body and container width
    + Adjusts buttons
* max-width: 640px
    + Adjusts body and container width
    + Adjusts buttons and text
* min-width: 600px
    + Adjusts body and container width
    + Adjusts buttons and text
* max-width: 530px
    + Adjusts body and container width
    + Adjusts buttons and text
* max-width: 480px
    + Adjusts body and container width
    + Adjusts buttons and text


## Features:
* Four HTML Pages
    + Index.html
        * Contains landing page to start timer
        * Highscores page
* Highscores 
    + Retreives local data from previous page
* Three CSS Page
    + Styles.css
        * Contains centering and styling for html list features
        * Contains media queries
    + Game CSS Page
        * Contains centering and styling for html list features
        * Contains media queries
    + Highscores CSS Page
        * Contains centering and styling for html list features
* Three Javascript Page 
    * Contains variables, including arrays with object 
    * Contains event listeners 
    * Contains if/else if statements 
    * Contains for Loops 
    * Contains fetching Trivia API
    * Contains functions 
    * Contains Local Storage set and get

## Languages
* [HTML](https://en.wikipedia.org/wiki/HTML "HTML")
* [CSS](https://en.wikipedia.org/wiki/CSS "CSS")
* [JS](https://sv.wikipedia.org/wiki/Javascript "JS")

## Libraries
* [Font Awesome library](https://fontawesome.com/ "Font Awesome")
* [Open Trivia DB](https://opentdb.com/ "Open Trivia DB")

## Tools
* [Gitpod](https://www.gitpod.io/ "Gitpod")
* [W3C HTML Validation Service](https://validator.w3.org/ "W3C HTML")
* [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/ "W3C CSS")
* [Font Awesome library](https://fontawesome.com/ "Font Awesome")
* [Google Fonts](https://fonts.google.com/ "Google Fonts")
* [Coolors](https://www.coolors.co/image-picker/ "Coolors")
* [W3Schools](https://www.w3schools.com/ "W3Schools")
* [Google](https://www.google.com/ "Google")

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

## Testing

I feel that the site has hit the goals required by all parties. The site responds nicely to different screen sizes.

I have encountered several issues during testing. 

* HTML (index.html) validator [results](/assets/pics/index_html_val.png) "W3C HTML"
* HTML (game.html) validator [results](/assets/pics/game_html_val.png) "W3C HTML"
* HTML (end.html) validator [results](/assets/pics/end_html.val.png) "W3C HTML"
* HTML (highscores.html) validator [results](/assets/pics/highscores_html_val.png) "W3C HTML"
* CSS (style.html) validator [results](/assets/pics/game_css_val.png) "W3C CSS"
* CSS (game.html) validator [results](/assets/pics/game_css_val.png) "W3C CSS"
* CSS (highscores.html) validator [results](/assets/pics/game_css_val.png) "W3C CSS"

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

## Deployment
Following writing the code then commiting and pushing to GitHub, this project was deployed using GitHub by the following steps.

* Navigate to the repository on github and click 'Settings'.
* Then select 'Pages' on the side navigation.
* Select the 'None' dropdown, and then click 'main'.
* Click on the 'Save' button.
* Now the website is now live on https://kingcrab84.github.io/full-template-asianfood/
* If any changes are required, they can be done, commited and pushed to GitHub and the changes will be updated.

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

## Credits
For code inspiration, help and advice:
* Simen Daehlin
* Che Long Tran
 
For content and style insperation:
* James Q Quick
https://www.youtube.com/watch?v=u98ROZjBWy8&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=1

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;


fetch