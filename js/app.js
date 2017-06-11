
var myGame = new SimonGame ();
 console.log( myGame );
$(document).ready(function () {
  myGame.startGame();
});

$(document).ready(function () {
  $('button').click(function () {
    //to get the id of the color just clicked
    var colorJustClicked = $(this).prop('id');
    // to get which color in the sequence user clicked
    var currentSequenceColor = myGame.sequence[myGame.userClickCount];

    if (currentSequenceColor === colorJustClicked){
      //sequence is correct so far
      //changes currentSequenceColor to the next one to click
      myGame.userClickCount +=1;
      if(myGame.userClickCount === myGame.sequence.length){
        $('body').addClass('correct');

        setTimeout(function () {
          $('body').removeClass('correct');
        }, 1000);
        //next round
        myGame.nextRound();
      }
    }
    else{
      //GAME OVER
      $('body').addClass('youLose');
      setTimeout(function () {
        $('body').removeClass('youLose');
      }, 5000);
    }
  });
});
