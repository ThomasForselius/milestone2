//----- Default displayed text when page is loaded ----- //
document.addEventListener('DOMContentLoaded', function(){ console.log('Game loaded'); });

// ----- Defining variabels used in game ----- //
var player = {name:"", age:"", genre:"", score:0}; // Declares an object to store player data in
// Gets and declares player name, color and genre id´s from the 'Create a player' page
const playerName = document.getElementById('name');
const playerAge = document.getElementById('age');
const playerGenre = document.getElementById('genre');
const questionPlaceHolder = document.getElementById('questionplaceholder');
var currentQuestion = 0; //keeps track of which question is active
var heading = document.getElementById('heading');
var questionheader = document.getElementById('questionheader');
var qTemp = "";
var quest = "";
var qGenre = [];
var play = "";

const musicQ = 
    [
        {
            q:"Who wrote Highway to Hell?",
            alt:['Led Zeplin', 'Metallica', 'AC/DC', 'Iron Maiden'],
            answer:"AC/DC",
            genre:"Music"
        },
        {
            q:"Who wrote Bohemian Rapsody?",
            alt:['Beetles', 'Queen', 'Billy Connolly', 'Hans Zimmer'],
            answer:"Queen",
            genre:"Music"
        },
        {
            q:"What the lead Singers name in Metallica?",
            alt:['Bobby', 'Randy', 'James', 'Hans'],
            answer:"James",
            genre:"Music"
        },
        {
            q:"What color was the beetles submarine?",
            alt:['Yellow', 'Red', 'Green', 'Black'],
            answer:"Yellow",
            genre:"Music"
        },
        {
            q:"How was this quiz?",
            alt:['Good', 'OK', 'Somewhat ok', 'Meh'],
            answer:"Somewhat ok",
            genre:"Music"
        }
    ];

const sportsQ = 
    [
        {
            q: "Zlatan comes from what country?",
            alt: ['Sweden', 'Finland', 'Belgium', 'France'],
            answer: "Sweden",
            genre: "Sports"
        },
        {
            q: "What country playes Football?",
            alt: ['Sweden', 'USA', 'Belgium', 'France'],
            answer: "USA",
            genre: "Sports"
        },
        {
            q: "Where was cricket invented?",
            alt: ['Great Brittain', 'France', 'Italy', 'China'],
            answer: "Great Brittain",
            genre: "Sports"
        },
        {
            q: "In what sport do you ride on waves with a board?",
            alt: ['Skateboarding', 'Sailing', 'Tennis', 'Surfing'],
            answer: "Surfing",
            genre: "Sports"
        },
        {
            q: "What colors are on a generic soccer ball?",
            alt: ['Plain white', 'Red and Blue', 'Black and White', 'Black and Blue'],
            answer: "Black and White",
            genre: "Sports"
        }
    ];

function startGame(){
    heading.innerHTML = 'Create a player:'; // Changes heading to 'Create a player'
    let rules = document.getElementById('rules').className = "rules_after"; // Rules fade & slide away to reveal 'Create a player' page, using class name 'rules_after'
    console.log('start game');
}

function updatePlayer(type){ //gets the type of input to update
    // Updates the name, age or genre in the player card when user types into the input box, depending on what input is being changed
    playerName.value = playerName.value.replace(/[^a-öA-Ö]*$/g, "");
    playerAge.value = playerAge.value.replace(/[^0-9]*$/g, "");
    if(type == "name"){ document.getElementById('playerName').innerHTML = 'Name: ' + playerName.value;}
    else if(type == "age"){ document.getElementById('playerAge').innerHTML = 'Age: ' + playerAge.value;}
    else if(type == "genre"){ document.getElementById('playerGenre').innerHTML = 'Genre: ' + playerGenre.value;}
    console.log(`update ${player.name}`);
}

// function checkName() {
//     
// }


document.getElementById('create').addEventListener('submit', (event) => {

        event.preventDefault();
    if(playerName.value == "" || playerName.value == null){
        playerName.style.border="1px solid red";
        playerName.focus();
        return;
    }
    if(playerAge.value == ""){
        playerAge.style.border="1px solid red";
        playerAge.focus();
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

    console.log('player created');
    player.name = playerName.value;
    player.age = playerAge.value;
    player.genre = playerGenre.value;
    
    console.log(player);
    
    document.getElementById('playerinfo').style.visibility = 'hidden';
    document.getElementById('question').style.visibility = 'visible';
    document.getElementById('createplayer').className = "createplayer_after";
    countDown();
    scoreboard();

}

function countDown(){
    questionheader.innerHTML = "";
    if(currentQuestion == 0){
        play = "Get ready to play ";
    }
    else if(currentQuestion > 0){
        play = "Next question ";
    }
    questionPlaceHolder.innerHTML = ""; // clear the question alternatives before loading new ones 
    setTimeout(function(){questionheader.innerHTML = `${play} in: 3`;}, 1000);
    setTimeout(function(){questionheader.innerHTML = `${play} in: 2`;}, 2000);
    setTimeout(function(){questionheader.innerHTML = `${play} in: 1`;}, 3000);
    setTimeout(function(){newQuestion()},4000);
}

function newQuestion(){
    
    qTemp = ""; // clears the variable to fill with new code
    quest = ""; // clears the variable to fill with new code
    
    console.log(player.genre);
    
    if(player.genre == 'Music'){
       qGenre = musicQ[currentQuestion];
       console.log("Music question: " + qGenre.q);
    }
    else if(player.genre == 'Sports'){
       qGenre = sportsQ[currentQuestion];
       console.log("Sports question: " + qGenre.q);
    }
    else{
        questionheader.innerHTML = "No genre chosen, please try again.";
    }

    questionheader.innerHTML = qGenre.q;
    for(let i = 0; i < qGenre.alt.length; i++){
        console.log("Alternative: " + qGenre.alt[i]);
        quest = `<button class="button" value="${qGenre.alt[i]}" onclick="checkAnswer(${i},'${qGenre.alt[i]}')">${qGenre.alt[i]}</button><br>`;
        qTemp += quest;
    }
    questionPlaceHolder.innerHTML = `<article id="questionplaceholder">
     ${qTemp} </article>`;
}

function checkAnswer(i, choice){

    console.log(i);
    console.log(choice);
    console.log("correct answer: " + qGenre.answer);
    if(qGenre.answer === choice){
        alert("Correct answer!");  
        player.score = player.score + 1; 
        scoreboard(); // Calles the scoreboard function to update current score
        alert(player.score);

        console.log(currentQuestion);

        if(currentQuestion == 4){ // Checks if it's the last question 
            questionPlaceHolder.innerHTML = `<article id="questionplaceholder"></article>`;
            finishGame(); // If it's the last question the game calles finishGame() function;
        }
        else{
            currentQuestion++;
            countDown();
        }
    }
    else{
        alert("Wrong, try again");
    }
}

function finishGame(){
    let html = ``; // declares a new value to fill when the game is over
    if(player.score == 5){html = `${player.name}, that is awesome! Well done! You got all questions correct!`;}
    else if(player.score == 4){html = `Hey, almost all the way! Just one wrong answer.<br> Better luck next try!`;}
    else if(player.score == 3){html = `Only 2 wrong answers.<br> Better luck next try!`;}
    else if(player.score == 2){html = `Well, at least you got two questions correct!`;}
    else if(player.score < 2 && player.age > 18){html = `No comment mate...<br>You need to brush up on some ${playerGenre} history.`;}
    else if(player.score < 2 && player.age < 15){html = `
        Don't worry!<br>Considering your age of ${playerAge}, this is ok! <br>You should stay in school and check out ${playerGenre} history.`;}


    questionheader.innerHTML = `You got <h1 style="font-size: 3em">${player.score}</h1> points!`;
    questionPlaceHolder.innerHTML = html;
}

function scoreboard(){

    let scores = document.getElementById('scores');
    let html = `
    
    <table id="scorestable">
        <thead>
            <tr>
                <td><b>Player Name: </td>
                <td><b>Age: </b></td>
                <td><b>Genre: </b></td>
                <td><b>Points: </b></td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${player.name}</td>
                <td>${player.age}</td>
                <td>${player.genre}</td>
                <td>${player.score}</td>
            </tr>
        </tbody>
    
    </table>

    `;
    document.getElementById('scores').innerHTML = html; 
    console.log('scores');
}