//----- Default displayed text when page is loaded ----- //

document.addEventListener('DOMContentLoaded', function(){ 
    console.log('Game loaded');
    
});

function startGame() {
    // Changes heading to 'Create a player'
    let heading = document.getElementById('heading').innerHTML = 'Create a player:';
    // Rules fade and slide away to reveal 'Create a player' page, using class name 'rules_after'
    let rules = document.getElementById('rules').className = "rules_after";
    return;
}


var player = {name:"", age:"", genre:"", score:0}; // Declares an object to store player data in
// Gets and declares player name, color and genre id´s from the 'Create a player' page
var playerName = document.getElementById('name');
var playerAge = document.getElementById('age');
var playerGenre = document.getElementById('genre');
var currentQuestion = 0;
var question = 0;


function updatePlayer(type){


    // Updates the name, age or genre in the player card when user types into the input box
    if(type == "name"){
            document.getElementById('playerName').innerHTML = 'Name: ' + playerName.value;
    }
    else if(type == "age"){
        document.getElementById('playerAge').innerHTML = 'Age: ' + playerAge.value;
    }
    else if(type == "genre"){
        document.getElementById('playerGenre').innerHTML = 'Genre: ' + playerGenre.value;
    }
}


// function checkName() {
//     playerName.value = playerName.value.replace(/[^a-z]/g, "");
// }

function createPlayer() {
    document.getElementById('submit').addEventListener('submit', scoreboard());
    player.name = playerName.value;
    player.age = playerAge.value;
    player.genre = playerGenre.value;
    console.log(player);
    scoreboard();
    return;
}

function countDown(){

}

function newQuestion(question){
    
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
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${player.name}</td>
                <td>${player.age}</td>
                <td>${player.genre}</td>
            </tr>
        </tbody>
    
    </table>

    `;

    scores.innerHTML = html; 
    
}