# Quirky Quiz - project documentation

This is the README.md descriptive file of the project Quirky Quiz;
an original web project from Thomas Forselius, studying font-end webdevelopement at CodeInstitute. 

# Table of Contents

> [What is Quirky Quiz?](#what-is-it)
 >- [User story](#user-story)
> [UX Design and wireframe mockup](#ux-design)
  >- [Typography](#typography)
  >- [Color Scheme](#color-scheme)
> [Existing Features](#features)
> [Future Features](#future-features)
> [Technologies](#technologies)
> [Testing](#testing)
> [Deployment](#deployment)
> [Credits](#credits)


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
    - When entering a name, the game will only accept alphabetic characters A-Ö in capital and lower case
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

# Features



## Navigation

* This game has very simple navigation. Each navigation element is only shown by themselves, so you can't make a (navigational) wrong choice. 
    - A "Create Player" button that leads to the next page where the user creates their player profile.
    - A "Start Game" button that starts the quiz itself
    - One button for each possible answer on every question
    - Restart game. 

## _Desktop and tablet version_

![Nav Bar Desktop](https://thomasforselius.github.io/project-1/images/menu_desktop.png)

## _Mobile version_ 
  * When clicked on 'Menu' the pop-down menu will appear with blurred background
  * This menu has the attribute 'Sticky' , so it is always at thte top of the screen


![Nav Bar mobile - closed](https://thomasforselius.github.io/project-1/images/menu_mobile.png)

![Nav Bar mobile - open when clicked](https://thomasforselius.github.io/project-1/images/menu_mobile_active.png)


## Footer bar

* At the bottom of the page there is a sticky footer with three social media icons: 
  * Facebook
  * Instagram
  * Twitter

  _Note: these are not linked at the moment_


![Footer Bar](https://thomasforselius.github.io/project-1/images/footer.png)

## Links 

* These are the links to easily navigate around the website. 
  They are always available on all pages to increas the easy of use when moving around on the page. 

  * Home
      - This is the first page the user sees when visiting the page;
      It has a very short but informative description of what the game is and how it works.
      also has a call to action in the form of a button that takes the user to the page where they can register for the game. 
  * What is it? 
      - this page describes what the game is in more detail like rules and a brief history of how the game came about. 
  * Events
      - shows all the planned events throughout the year. Each event will have a card with the following information: 
        Date, type of activity, team event or solo, location and directions how to get there
  * Results 
      - Displays the current standings of the active game you are participating in. At the moment this feature is a work in progress since it will be utilizing javascript and a database, which are outside of my knowledge as of today. 
      There is a graphical mockup of what the leader board may look like when it launches
  * Sign up / Login _note 
      - This is a future feature due to the need for database and javascript knowledge which I do not have right now


## Pages

* The landing page / Home
  This is the first page the user sees when visiting the page;
  It has a very short but informative description of what the game is and how it works.
  also has a call to action in the form of a button that takes the user to the page where they can register for the game. 
  This section SHORTLY ( ca 5-10 seconds after entering page) describes what the game is about and how they sign up; this is where the call to action button is on the first page

  _Selling point - get their attention. by writing a small but intresting bit of info about the game you keep or increase people's attention to keep them on the page_

![Landing Page](https://thomasforselius.github.io/project-1/images/home_splash.png)

* What is it? ; this page describes in more detail what the game is about, how many players, what type of activities, how points are counted as well as rules and regulations

![What is it?](https://thomasforselius.github.io/project-1/images/what_splash.png)

* Events ; shows all the planned events throughout the year.
    Each event will have a card with the following information: 
      Date
      Type of activity
      Team event or solo
      Cost
      Location and directions how to get there

![Events page](https://thomasforselius.github.io/project-1/images/events_mockup.png)

* Results ; displays the current standings of the active game you are participating in. 
    At the moment this feature is a work in progress since it will be utilizing javascript and a database, which are outside of my knowledge as of today. 
    There is a graphical mockup of what the leader board may look like when it launches

![Results](https://thomasforselius.github.io/project-1/images/leaderboard_splash.png)

* Sign up / Login _note: this is a future feature due to the need for database and javascript knowledge which I do  
    not have right now
    A new user will sign up for an account to be able to join a game.
    Existing user/s can log in and either administrate(if they created a game), or edit an existing game they created

  _At the moment, when you fill out the register form_

    This page will allow the user to either register or log in to the webpage. 
    When they register they will have to provide the following information: 
      First name (required)
      Last name (Required)
      Email (required)
      Password (required)

    In the future, when they log in they can edit their email, password, name, upload an avatar and choose to delete their account from the site by entering password as a confirmation 
    _Required tech for full funcitonality: deeper CSS knowledge_

![Sign up](https://thomasforselius.github.io/project-1/images/signup_splash.png)


## Future features

* Sign up page; 
    There will be a register page where you sign up and apply to comepete in one of these games. 
    Anybody can register, and as soon as you have registered, you can create your own game of events. 
    * At the moment this is just a mockup since the I don't have the required knowledge
    >_Required tech for full funcitonality: Javascript and database knowledge_
* Log in as admin to CRUD(create, read, update, delete) an event and edit scores
    >_Required tech for full funcitonality: Javascript and database knowledge_
* User page - where users can upload profile picture that shows in the results list
    >_Required tech for full funcitonality: Javascript and database knowledge_
* Bonus feature: make events "mystery event", where only date, time and location are displayed
    >_Required tech for full funcitonality: Javascript and database knowledge_
* Live results - will display the current results of the current game you are a part of when logged in
    >_Required tech for full funcitonality: Javascript and database knowledge_
* Light / dark mode
    >_Required tech for full funcitonality: deeper CSS knowledge_

* Events page;
  * Design ideas for events page with cards
    * red thread swirling downward, left to right and vice versa with a card for each event
      * onClick : will pop up a larger version of that eventcard with more details
    * separate cards will display the top 3 scores of each individual event
      * onClick : will pop up more detailed info about that event i.e.  all contestants and their scores

  >_Required tech for full funcitonality: Javascript and database knowledge_



# Technologies


* Figma
  * Figma is a free web software for drawing design mockups easily. I used that as a visual kind of brainstorming when drawing up the wireframe
* HTML
  * This is the markup language that makes up the structure of the webpage
* CSS
  * This is the styling languange that gives the webpage it's visual design
* Google Fonts
  * There are two fonts imported from Google Fonts used on the whole page: 
    * Italiana
    * Manrope
* VS Code
  * the IDE (Integrated developer environment) that is used to code everything, commit and push to github with the git method
* Google Chrome
  * Web browser for viewing the webpage
* Google Chrome developer tools
  * Used for inspecting and bug testing the webpage and responsive design
* Git verison control via GitHub
  * Git is the version control software used to commit and push code to the GitHub repository 
* GitHub
  * this is where the source code and images is stored online - also called a repository.
    The live page uses the main branch in the Github repository. 
    >_All coming updates will each be using a separate branch for a function, to ensure easy updating and version control_

* Extra styling features
  * Drop down menu on mobile devices is a nice feature that uses pure css to accomplish a drop down menu
  * The background filter of the drop down menu is a blurry background effect - css
  * Fadein background color on Join-button - css
  * Fadein red input box border - css


  So, why did I want these extra functions and design elements?

  +10%. This is my mindset in most occasions when producing something. 
  If I always give 10% extra, this is a way to push myself and the quality of the service or goods I produce.
  
# Testing 

The whole building of a website is an ongoing test and coarse debugging process, which is very nice, since you get virtually immediate feedback when working with the visual part. 

Building this website I have used VS Code for the coding, while Google Chrome for the visual feedback on a local server extension. This lets me test the webpage out before commiting and pushing it to Github for live testing with online extensions and validators like Lighthouse, W3C html validator and W3C CSS validator. 

My testing procedure is conducted on the live Github repository using the following tech / apps / extensions / plugins / webpages: 

* Web browser
  * Google Chrome
  * Safari
* Visual 
  * Both HTML structure and CSS styling is tested on each web browser
* Functionality testing
  * Each link is tested on both browsers against all separate links on the page. 
    i.e.(home -> events; events -> results; results -> what is it? etc etc.)
    > No broken links found
  * Responsive design tested automatically with http://ami.responsivedesign.is
  * Responsive sizing tested manually with Chrome Dev tools Inspector
    * Desktop version on screen size larger than 850px 
    * Tablet version on screen size between 440px - 850px
    * Mobile version on screen size between 220px - 440px
      * No further testing required on smaller screen sizes since no current devices use such small resolutions. 
        _Well; that would be a smart watch, but that's just madness, if it's even possible._
    

* Last series of checks
  * Go through HTML code and clear commented out code, clear double empty lines so that no more than one empty line in a row is found. 
  * Check that all images appear in both the webpage and the readme.md file

### Validator Testing 

* HTML
  * No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fthomasforselius.github.io%2Fproject-1%2Findex.html)
* CSS
  * No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fthomasforselius.github.io%2Fproject-1%2Fcss%2Fstyle.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)
* Accessibility via Lighthouse extension
  [Lighthouse](https://thomasforselius.github.io/project-1/images/lighthouse_validator.png)
* Responsive validation was done by using the following website: [Am I responsive](http://ami.responsivedesign.is/)

### Unfixed Bugs

Known bugs: 
  * Drop down menu doesn't close on mobile screens when using Safari
  * www.kompiskampen.se is bought, but not yet linked to the github page
  * The register form doesn't send anything due to the lack of backend functionality - this is an upcoming feature
  * Footer icons are not linked

## Deployment

* The site was deployed to GitHub following these steps: 

  * In the GitHub repository, navigate to the Settings tab 
  * From the source section drop-down menu, select the Master Branch
  * Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

* Once the main branch has been deployed I commit and push from VS Code to the Github repo and main branch. 


The live github link can be found here - https://thomasforselius.github.io/project-1/
Also, the following domains have been bought: 
  * www.friendfeud.se (working domain name)
  * www.kompiskampen.se (not working at the moment)


## Credits 

* Credit for pop-down menu when on mobile device goes to https://isabelcastillo.com/pure-css-mobile-toggle-menu
* Big shout-out to Monster Energy for keeping me awake during the dark hours


## Media

* Background image is taken from www.pixabay.com - a page with royalty free images for commercial use without attribution
https://pixabay.com/photos/people-friends-together-happy-kid-4050698/


### Content 

- The readme file was copied from CodeInstitute's template for the first project in their 5p front-end dev course