    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var alosses = 0;

    document.onkeyup = function(event) {

      var userGuess = event.key;

      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      
      if (userGuess === event.key) {
        // conduct the game
          if (userGuess === computerGuess) {
            wins++;
            guesses= 9;
            losses= 0;
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