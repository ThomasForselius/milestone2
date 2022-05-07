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

const question = 
    [
        {
            q:"What is my name?",
            alt:['Thomas', 'Johan', 'Anders', 'Stefan'],
            answer:"Thomas"
        },
        {
            q: "What language is this written in?",
            alt: ['html', 'css', 'pytohn', 'js'],
            answer: "js"
        }
    ]
        ;

console.log(question[currentQuestion].q);

function startGame() {
    heading.innerHTML = 'Create a player:'; // Changes heading to 'Create a player'
    let rules = document.getElementById('rules').className = "rules_after"; // Rules fade & slide away to reveal 'Create a player' page, using class name 'rules_after'
    console.log('start game');
    //return;
}

function updatePlayer(type){ //gets the type of input to update
    // Updates the name, age or genre in the player card when user types into the input box, depending on what input is being changed
    if(type == "name"){ document.getElementById('playerName').innerHTML = 'Name: ' + playerName.value;}
    else if(type == "age"){ document.getElementById('playerAge').innerHTML = 'Age: ' + playerAge.value;}
    else if(type == "genre"){ document.getElementById('playerGenre').innerHTML = 'Genre: ' + playerGenre.value;}
    console.log(`update ${player.name}`);
}

// function checkName() {
//     playerName.value = playerName.value.replace(/[^a-z]/g, "");
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
    var play = "";
    questionheader.innerHTML = "";
    if(currentQuestion == 0){
        play = "Get ready to play ";
    }
    else if(currentQuestion != 0){
        play = "Next question ";
    }
    setTimeout(function(){questionheader.innerHTML = `${play} in: 5`;}, 400);
    //setTimeout(function(){questionheader.innerHTML = `${play} in: 4`;}, 1000);
    //setTimeout(function(){questionheader.innerHTML = `${play} in: 3`;}, 2000);
    //setTimeout(function(){questionheader.innerHTML = `${play} in: 2`;}, 3000);
    //setTimeout(function(){questionheader.innerHTML = `${play} in: 1`;}, 4000);
    setTimeout(function(){newQuestion()},1000);
}

function newQuestion(){
    
    qTemp = ""; // clears the variable to fill with new code
    quest = ""; // clears the variable to fill with new code

    console.log(question[currentQuestion].q);
    questionheader.innerHTML = question[currentQuestion].q;
    for(let i = 0; i < question[currentQuestion].alt.length; i++){
        console.log("Alternative: " + question[currentQuestion].alt[i]);
        quest = `<button class="alt" value="${question[currentQuestion].alt[i]}" onclick="checkAnswer(${i},'${question[currentQuestion].alt[i]}')">${question[currentQuestion].alt[i]}</button><br>`;
        qTemp += quest;
    }
    questionPlaceHolder.innerHTML = `<article id="questionplaceholder">
     ${qTemp} </article>`;
}

function checkAnswer(i, choice){
    console.log(i);
    console.log(choice);
    console.log("correct answer: " + question[currentQuestion].answer);
    if(question[currentQuestion].answer === choice){
        alert("Correct answer!");  
        player.score++;
        currentQuestion++;
        setTimeout(function(){newQuestion(currentQuestion)},1000);
    }
    else{
        alert("Wrong, try again");
    }
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