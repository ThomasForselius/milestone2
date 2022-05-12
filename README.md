# Quirky Quiz - project documentation

This is the README.md descriptive file of the project Quirky Quiz;
an original web project from Thomas Forselius, studying font-end webdevelopement at CodeInstitute. 

# Table of Contents

> 1. [What is Quirky Quiz?](#what-is-it)
 >- [User story](#user-story) 
> 2. [UX Design](#ux-design)
  >- [Typography](#typography)
  >- [Color Scheme](#color-scheme)
> 3. [Navigation](#navigation)
> 4. [Pages](#pages)
> 5. [Technologies](#technologies)
> 6. [Testing](#testing)
> 7. [Deployment](#deployment)
> 8. [Credits](#credits)


# What is it?

* Quirky Quiz is a simple broswer based quiz game
* The game consists of a page where the user creates a player by entering name, age and choosing a genre of questions
* The player then gets 5 quetions based on what genre they chose when creating a player
* Each question will provide 4 possible answers, but only one is correct. 
* Each correct answer will provide the player with 1 point. 

## User story
* When the user loads the page, they are presented with the starting page of the game. The game and page design are made very simple to accomodate all ages and people , even those who are not used to computers or electronic devices
* On the first page, the user can read the very simple rules for the game
* The next step is to create a player, and they do this by clicking the button "Create a player"
    - The transition from one page to another is done by sliding in each page from the bottom and out to the top to create a more dynamic effect for the user
* This takes the player to the next page where they enter their a name, age and choose a genre of questions
    - When entering a name, the game will only accept alphabetic characters A-Ö in capital and lower case, using the _reject method_
    - When entering age, the lowest age accepted is 5, and if the player enters a number lower than 5, there will be a popup alert saying that they must enter an age 5 or larger
    - Then they have to choose a genre for the questions. This is done by a drop down menu with 2 alternatives; 
        - Music
        - Sports
    - If the user doesn't write a name, age or choose a genre, the respctive option will be highlighted red, and focused to they know that they have to enter a value
    - Beneath the user input fields, there is a section that says "This is your player information:"
        - This is a dynamic field that updates as soon as the user enters their name(after each character), age and genre
    - When the user is done entering their information, they click the button "Create player". This stores their values into a variable that tracks their points through out the game. 
    - The next step is where the game starts
* Game start - now the user is presented with a countdown timer of 3 seconds before each question
* When the timer has reached 0, a question will appear and under that, the 4 possible answers. 
    - They can now choose an answer, but only one is correct. 
    - Upon choosing the correct answer, they will receive a point and at the bottom of the page it will display "Correct answer!", and move on to the next question(preceeded by a 3 second countdown timer)
    - However, if they make a wrong choice, the page will display "Wrong answer" in red at the bottom of the page.
* Upon making the final choice the game is completed and the user is presented with a large text saying "Game complete!"
* After a 1,5second delay they will be shown how many points they received
    - Bonus feature: if the user entered an age of less than 15, the end text will read "Considering your age of (chosen age), this is ok! You should stay in school and check out (chosen genre) history."
    - Also, if the user is less than 18, the page will read "No comment mate...You need to brush up on some (chosen genre) history.
* At this point, there is only one button presented, and that button is for restarting the game. Upon clicking this the page will reload and the user can play the game once more. 



# UX Design

## Responsive mockup of the webpage

![Responsive Mockup](https://thomasforselius.github.io/milestone2/img/responsive.png)

* On of the most important features of webpages today is being responsive, since the largest amount of people view webpages on their mobile devices. Responsive websites are a must, if your goal is the keep the interest of the visitor
* My idea when creating this page is that I wanted to simple and esthetically pleasing design without too much flashy functions and design elements that draw attention away from the original idea and purpose. 
* Colors used are simple - I wanted to keep it simple with a high contrast for maximum accessibility; 
    - Black text on white background - for main text 
* The background I chose is a fun and colorful but too distracting image that fits the theme of the game.
* The background image works well as a full page background that isn't too distracting, but also very well on responsive media
* THe design is done from 'Mobile first' mindset, but adapted to work on larger screens as well

## Typography

There is only one font used, to keep it simple and clean.  
  * Roboto Flex - a serif font used for Hero text and navigation
  ![Roboto Flex](https://thomasforselius.github.io/milestone2/img/roboto.png)
    > Link to Google fonts https://fonts.google.com/specimen/Roboto+Flex?query=robot
  
## Color Scheme

The main idea behind the whole concept is keeping it simple. Therefor I chose black text on white background for the main container with some colors for the main background. 
The only part of the game that doesn't have a white background are the buttons.

  * Buttons color
    - All the buttons are light pink when displayed
    - When the user hovers over the buttons with a mouse - they change background color to teal
    - Call to action button on first page - Create Player


## Navigation

* This game has very simple navigation. Each navigation element is only shown by themselves, so you can't make a (navigational) wrong choice. 
    - A "Create Player" button that leads to the next page where the user creates their player profile.
    - A "Start Game" button that starts the quiz itself
    - One button for each possible answer on every question
    - Restart game. 

## Pages

* The landing page / Initial game page
  This is the first page the user sees when visiting;
  It has a very short but informative description of what the game is and how it works.
  also has a call to action in the form of a button that takes the user to the page where they can create a player for the game. 

![Landing Page](https://thomasforselius.github.io/milestone2/img/home_splash.png)

* Create a player
  - This is the first interactive page where the user gets to enter his/her name, age and choose a genre for the questions
  - In this page, when a pl

![Create a player](https://thomasforselius.github.io/milestone2/img/create_splash.png)

* Countdown timer
This is a countdown timer preceeding every question so the user gets 3 seconds to get ready before the next question is displayed

![Countdown](https://thomasforselius.github.io/milestone2/img/countdown_splash.png)

* Question
This is what the page looks like when the question is showed along with the 4 alternative answers

![Question](https://thomasforselius.github.io/milestone2/img/question_splash.png)

* Game Finished
- This is the final page, when the user has played through all the 5 questions. 
- Here the user is presented with how many total points they got
- At the bottom they are presented with a call-to-action button that resets the game so they can play again

![Finished](https://thomasforselius.github.io/milestone2/img/finished_splash.png)


## Future features / Features I wanted

* Google Sheets API
    The idea from the beginning was to have all the questions read into the quiz from a Google Sheets document with questions
    >_Required tech for full funcitonality: Further Javascript knowledge and time_
* Multiplayer possibility; 
    I wanted to make the possibility to add multiple players, but due to time constraint I didn't feel that it was viable to chance the whole project with this feature.
    >_Required tech for full funcitonality: Time_
* Reset game 
    When the player pushed the reset button I wanted the player to return to the countdown timer and be presented with a new question, while the game still displayed their chosen name and age. 
    >_Required tech for full funcitonality: Further Javascript knowledge and time_

# Technologies

* Javascript
    * This project is coded using Javascript
* HTML
    * This is the markup language that makes up the structure of the webpage
* CSS
    * This is the styling languange that gives the webpage it's visual design
* Google Fonts
    * Roboto Flex
* VS Code
    * the IDE (Integrated developer environment) that is used to code everything, commit and push to github with the git method
* Google Chrome
    * Web browser for viewing the webpage
* Safari 
    * Web browser used for checking design and functions on another broswer
* Google Chrome developer tools
    * Used for inspecting and bug testing the webpage and responsive design
* Git verison control via GitHub
    * Git is the version control software used to commit and push code to the GitHub repository 
* GitHub
    * this is where the source code and images is stored online - also called a repository.
    The live page uses the main branch in the Github repository. 

* Extra styling features
  * Fade-in and -out background-color on buttons for some dynamic styling feeling - css

  So, why did I want this extra function and design element?

  +10%. This is my mindset in most occasions when producing something. 
  If I always give 10% extra, this is a way to push myself and the quality of the service or goods I produce.
  
# Testing 

The whole building of a website is an ongoing test and coarse debugging process, which is very nice, since you get virtually immediate feedback when working with coding.

When programming with Javascript, the most useful debugging function is to console.log(); on any and every part of the code so I can follow along in the console while I un the script in the browser. 
A very useful function of the console of Chrome Dev Tools is the ability to enter commands in the console in real time and see the immediate change on the page.
This way I don't have to go back to VS Code, change the code, save and update the page in the browser. 

* Local live server

Building this website I have used VS Code for the coding, while Google Chrome for the visual feedback on a local server extension. This lets me test the webpage out before commiting and pushing it to Github for live testing with online extensions and validators like Lighthouse, W3C html validator and W3C CSS validator as well as Javascipt Validator CodeBeautify. 

* Push to gitHub

Once I feel that the homepage is as good as finished, I commit and push the changes to my gitHub repository with comments on any and all changes to the code. 

The following techs are used for testing: 

* Web browser
  * Google Chrome
  * Safari
* Visual 
  * Both HTML structure and CSS styling is tested on each web browser
* Functionality testing
  * Each button is tested
  * Responsive design tested automatically with http://ami.responsivedesign.is
  * Responsive sizing tested manually with Chrome Dev tools Inspector
    * Tablet and desktop version on screen size above 400px wide;
    * Mobile version on screen size below 400px
      * No further testing required on smaller screen sizes since no current devices use such small resolutions. 
        _Well; that would be a smart watch, but that's just madness, if it's even possible._
    

* Last series of checks
  * Go through HTML code and clear commented out code, clear double empty lines so that no more than one empty line in a row is found. 
  * Check that all images appear in both the webpage and the readme.md file

### Validator Testing 

* HTML
  * Some errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fthomasforselius.github.io%2Fmilestone2%2Findex.html)
    These errors are functionally not relevant since I inject content into these through DOM manipulation via the Javacsript code.
* CSS
  * Only one error was found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fthomasforselius.github.io%2Fproject-1%2Fcss%2Fstyle.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)
  This is referred to the height property of the button class.
* Accessibility via Lighthouse extension
  [Lighthouse](https://thomasforselius.github.io/milestone2/img/lighthouse.png)
* Responsive validation was done by using the following website: [Am I responsive](http://ami.responsivedesign.is/)

### Unfixed Bugs

Known bugs: 
  * According to the Jigsaw CSS validator, there is a parsing error for the .button class regaring the height property. 
    I have tried to fix this but cannot understand what the problem might be.  

## Deployment

* The site was deployed to GitHub following these steps: 

  * In the GitHub repository, navigate to the Settings tab 
  * From the source section drop-down menu, select the Master Branch
  * Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

* Once the main branch has been deployed I commit and push from VS Code to the Github repo and main branch. 


The live github link can be found here - https://thomasforselius.github.io/milestone2/


## Credits 

* Big shout-out to Monster Energy for keeping me awake during the dark hours


## Media

* Background image is taken from www.pexels.com - a page with royalty free images for commercial use without attribution
https://www.pexels.com/sv-se/foto/konst-monster-abstrakt-fargrik-310452/


### Content 

- The readme file was copied from my first readme I made for the first project in my 5p front-end dev course at CodeInstitute