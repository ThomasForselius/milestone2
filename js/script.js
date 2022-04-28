//----- Default displayed text when page is loaded ----- //
document.addEventListener('DOMContentLoaded', function(){ console.log('Game loaded'); });

// ----- Defining variabels used in game ----- //
var player = {name:"", age:"", genre:"", score:0}; // Declares an object to store player data in
// Gets and declares player name, color and genre id´s from the 'Create a player' page
var playerName = document.getElementById('name');
var playerAge = document.getElementById('age');
var playerGenre = document.getElementById('genre');
var currentQuestion = 0; //keeps track of which question is active
var heading = document.getElementById('heading');
const question = [
    ['What is my name', 'Thomas', 'Johan', 'Anders', 'Stefan', 1],
    ['What language is this written in?', 'html', 'css', 'pytohn', 'js', 2]];

console.log(question[0][0]);

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

function createPlayer() {
    event.preventDefault();
    console.log('create');
    player.name = playerName.value;
    player.age = playerAge.value;
    player.genre = playerGenre.value;
    console.log(player);
    
    document.getElementById('playerinfo').style.visibility = 'hidden';
    document.getElementById('question').style.visibility = 'visible';
    document.getElementById('createplayerbtn').style.visibility = 'hidden';
    document.getElementById('questionheader').innerHTML = question[0][0];
    newQuestion();
    scoreboard();
}

function countDown(){
    
}

function newQuestion(){
    event.preventDefault();
    console.log(question[1]);
}

function checkAnswer(){

}

function updateScore(){

}

function scoreboard(){

    let scores = document.getElementById('scores');
    let html = `
    
    <table>
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