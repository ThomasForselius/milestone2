//----- Default displayed text in console when page is loaded ----- // 

document.addEventListener('DOMContentLoaded', function(){ console.log('Game loaded'); });

// ----- Defining variabels used in game ----- //
var player = {name:"", age:"", genre:"", score:0}; // Declares an object to store player data in
// Gets and declares player name, color and genre id´s from the 'Create a player' page
const playerName = document.getElementById('name');
const playerAge = document.getElementById('age');
const playerGenre = document.getElementById('genre');
const questionPlaceHolder = document.getElementById('questionplaceholder');
const info = document.getElementById('info');
var currentQuestion = 0; //keeps track of which question is active
var heading = document.getElementById('heading');
var questionheader = document.getElementById('questionheader');
var qTemp = "";
var quest = "";
var qGenre = [];
var play = "";

const musicQ =  //Questions and answers for Music genre
    [
        {
            q:"Who wrote Highway to Hell?",
            alt:['Led Zeplin', 'Metallica', 'AC/DC', 'Iron Maiden'],
            answer:"AC/DC"
        },
        {
            q:"Who wrote Bohemian Rapsody?",
            alt:['Beetles', 'Queen', 'Billy Connolly', 'Hans Zimmer'],
            answer:"Queen"
        },
        {
            q:"What the lead Singers name in Metallica?",
            alt:['Bobby', 'Randy', 'James', 'Hans'],
            answer:"James"
        },
        {
            q:"What color was the beetles submarine?",
            alt:['Yellow', 'Red', 'Green', 'Black'],
            answer:"Yellow"
        },
        {
            q:"What color was the rain?",
            alt:['White', 'Transparent', 'Black', 'Purple'],
            answer:"Purple"
        }
    ];

const sportsQ = //Questions and answers for Sports genre
    [
        {
            q: "Zlatan comes from what country?",
            alt: ['Sweden', 'Finland', 'Belgium', 'France'],
            answer: "Sweden",
        },
        {
            q: "What country playes Football?",
            alt: ['Sweden', 'USA', 'Belgium', 'France'],
            answer: "USA",
        },
        {
            q: "Where was cricket invented?",
            alt: ['Great Brittain', 'France', 'Italy', 'China'],
            answer: "Great Brittain",
        },
        {
            q: "In what sport do you ride on waves with a board?",
            alt: ['Skateboarding', 'Sailing', 'Tennis', 'Surfing'],
            answer: "Surfing",
        },
        {
            q: "What colors are on a generic soccer ball?",
            alt: ['Plain white', 'Red and Blue', 'Black and White', 'Black and Blue'],
            answer: "Black and White",
        }
    ];

function startGame(){
    heading.innerHTML = 'Create a player:'; // Changes heading to 'Create a player'
    let rules = document.getElementById('rules').className = "rules_after"; // Rules fade & slide away to reveal 'Create a player' page, using class name 'rules_after'
}

function updatePlayer(type){ //gets the type of input to update
    // Updates the name, age or genre in the player card when user types into the input box, depending on what input is being changed
    playerName.value = playerName.value.replace(/[^a-öA-Ö]*$/g, ""); // Checks name for only alphabet characters A-Ö and a-ö, and replaces anything else
    playerAge.value = playerAge.value.replace(/[^0-9]*$/g, ""); // Checks age characters and rejects anything that isn't a number
    if(type == "name"){ document.getElementById('playerName').innerHTML = 'Name: ' + playerName.value;}
    else if(type == "age"){ document.getElementById('playerAge').innerHTML = 'Age: ' + playerAge.value;}
    else if(type == "genre"){ document.getElementById('playerGenre').innerHTML = 'Genre: ' + playerGenre.value;}
}

document.getElementById('create').addEventListener('submit', (event) => {

    event.preventDefault();
    if(playerName.value == "" || playerName.value == null){
        playerName.style.border="1px solid red";
        playerName.focus();
        return;
    }
    if(playerAge.value == "" || playerAge.value < 5){
        playerAge.style.border="1px solid red";
        playerAge.focus();
        alert("You must enter an age - 5 or higher to play!")
        return;
    }
    if(playerGenre.value == ""){
        playerGenre.style.border="1px solid red";
        playerGenre.focus();
        return;
    }
    else{
        document.getElementById('createplayerbtn').style.display = 'none';
        createPlayer(); // Call function to fill the variables into the player object
    }
})

function createPlayer() {

    player.name = playerName.value; // fills player name with value from form
    player.age = playerAge.value; // fills player age with value from form
    player.genre = playerGenre.value; // fills player genre with value from form
    document.getElementById('playerinfo').style.visibility = 'hidden'; // hides player info 
    document.getElementById('question').style.visibility = 'visible';
    document.getElementById('createplayer').className = "createplayer_after"; // fades away create a player page
    countDown();
    scoreboard();
    document.getElementById('scores').style.visibility =  "visible"; // shows scoreboard at the bottom of page
}

function countDown(){ // num is a boolean to check if the game needs to restart
    info.innerHTML = "";
    questionheader.innerHTML = "";

    if(currentQuestion === 0){play = "Get ready to play ";}
    else if(currentQuestion > 0){play = "Next question ";}
    else if(currentQuestion === 5){finishGame();}
    questionPlaceHolder.innerHTML = ""; // clear the question alternatives before loading new ones 
    setTimeout(function(){questionheader.innerHTML = `${play} in: 3`;}, 500);
    setTimeout(function(){questionheader.innerHTML = `${play} in: 2`;}, 1500);
    setTimeout(function(){questionheader.innerHTML = `${play} in: 1`;}, 2500);
    setTimeout(function(){newQuestion()},3500);
}

function newQuestion(){
    
    if(currentQuestion == 5){finishGame();} // Checks if it's the last question and runs finishGame if true
    else{
        info.innerHTML = ""; // Clears info placeholder text
        qTemp = ""; // clears the variable to fill with new code
        quest = ""; // clears the variable to fill with new code
        
        if(player.genre == 'Music'){qGenre = musicQ[currentQuestion];}
        else if(player.genre == 'Sports'){qGenre = sportsQ[currentQuestion];}
        else{questionheader.innerHTML = "No genre chosen, please try again.";}

        questionheader.innerHTML = qGenre.q;
        for(let i = 0; i < qGenre.alt.length; i++){
            quest = `<button class="button" value="${qGenre.alt[i]}" onclick="checkAnswer('${qGenre.alt[i]}')" id="btn${i}">${qGenre.alt[i]}</button><br>`;
            qTemp += quest;
        }
        questionPlaceHolder.innerHTML = `<article id="questionplaceholder">
        ${qTemp} </article>`;
    }
}

function checkAnswer(choice){
    
    //After a button is clicked, all buttons are diabled to prevent cheating
    document.getElementById('btn1').disabled = true;
    document.getElementById('btn2').disabled = true;
    document.getElementById('btn3').disabled = true;
    document.getElementById('btn0').disabled = true;
    
    if(qGenre.answer === choice){
        info.innerHTML = "Correct answer!";  
        player.score = player.score + 1; 
        scoreboard(); // Calles the scoreboard function to update current score
        currentQuestion++;
        setTimeout(function(){countDown()}, 1000);
    }
    else if(currentQuestion < 4){
        info.innerHTML = `<font color="red"><b>Wrong answer!</b></font>`;
        currentQuestion++;
        setTimeout(function(){countDown()}, 1000);
    }
    else{ // If it's the last question, it calls finishGame function
        questionheader.innerHTML = "<h2>Game complete!</h2>";
        questionPlaceHolder.innerHTML = "";
        setTimeout(function(){finishGame()}, 1500);
     }
}

function finishGame(){
    info.innerHTML = "";
    questionPlaceHolder.innerHTML = "";
    info.innerHTML =`<button class="button" onclick="window.location.reload()">Play again!</button>`;
    let html = ``; // declares a new value to fill when the game is over
    if(player.score == 5){html = `${player.name}, that is awesome! Well done!<br> You got all questions correct!`;}
    else if(player.score == 4){html = `Hey ${player.name}, almost all the way! Just one wrong answer.<br> Better luck next try!`;}
    else if(player.score == 3){html = `Only 2 wrong answers, ${player.name}.<br> Better luck next try!`;}
    else if(player.score == 2){html = `Well ${player.name}, at least you got two questions correct!`;}
    else if(player.score < 2 && player.age > 18){html = `No comment mate...<br>You need to brush up on some ${player.genre} history.`;}
    else if(player.score < 2 && player.age < 15){html = `
        Don't worry ${player.name}!<br>Considering your age of ${player.age}, this is ok! <br>You should stay in school and check out ${player.genre} history.`;}

    questionheader.innerHTML = `You got <h1>${player.score}</h1> points!`;
    questionPlaceHolder.innerHTML = html;
}

function scoreboard(){

    let scores = document.getElementById('scores');
    let html = `    
    <table id="scorestable">
        <thead>
            <tr>
                <td><b><u>Name: </b></u></td>
                <td><b><u>Genre: </b></u></td>
                <td><b><u>Points: </b></u></td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${player.name}</td>
                <td>${player.genre}</td>
                <td>${player.score}</td>
            </tr>
        </tbody>
    </table>
    `;
    document.getElementById('scores').innerHTML = html; 
}