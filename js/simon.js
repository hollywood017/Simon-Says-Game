function SimonGame () {
  this.colors = ['red', 'green', 'blue', 'yellow'];

  //Our current sequence
  this.sequence = [];

  //Where the user is in the sequence
  this.userClickCount = 0;

  //what the player's score is
  this.round = 1;
}

SimonGame.prototype.startGame = function () {
  console.log('Starting the game...');

  this.addColor();
  this.showSequence();
};

// Chooses on of the 4 colors at radnom and adds it to the sequence
SimonGame.prototype.addColor = function () {
  var randomColors = Math.floor(Math.random() * 4);
  this.sequence.push( this.colors[randomColors] );
};

SimonGame.prototype.showSequence = function () {
  var ourSequence = this.sequence;
  var i = 0;
  $('#buttons-container').addClass('blocked');
  var intervalId = setInterval(function () {
  //Stops the repition of the interval when there are no more lights to blink
    if (i >= ourSequence.length) {
      clearInterval(intervalId);
      $('#buttons-container').removeClass('blocked');
      return;
    }
  //Turns on the light by adding class="lighton"
  $('#' + ourSequence[i]).addClass('lighton');
  // $('#red').addClass('lighton')

  //after 700ms...
  setTimeout(function () {
    //turns off the light by remove the class
    $('button').removeClass('lighton');
  }, 700);
    i+=1;
}, 1250);
};
//adds additional rounds to the game
SimonGame.prototype.nextRound = function () {
  this.addColor();
  this.showSequence();
  this.userClickCount = 0;

  $('#counter').html(this.round);
  this.round += 1;
};
SimonGame.prototype.gameOver = function (){
  this.sequence = [];
  this.userClickCount = 0;
  this.round = 1;
  $('#counter').html(0);
};
