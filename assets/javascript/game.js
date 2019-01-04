
    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var alosses = 0;

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      // Alerts the key the user pressed (userGuess).
      //alert("User guess: " + userGuess);

      // Alerts the Computer's guess.
      //alert("Computer guess: " + computerGuess);
      
      if (userGuess === event.key) {
        // conduct the game
          if (userGuess === computerGuess) {
            wins++;
          } else if (userGuess !== computerGuess) {
            losses++;
          }
          guesses--;

          if(losses > 8){
            alosses ++;
            losses= 0;
          }
          
          if (losses === 0) {
            guesses= 9;
            losses= 0;
          }

          var htmlResponse = "<p>Guesses Remaining: " + guesses + "</p>"+
          "<p>You guessed: " + userGuess + "</p>" +
          "<p>Computer guess: " + computerGuess + "</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + alosses + "</p>" +
          "<p>Wrong: " + losses + "</p>" ;
          

          var gameArea = document.getElementById('game');
          gameArea.innerHTML = htmlResponse;

      }

    };