$(document).ready(function() {
  var $spot = [];
  var turns = 0;

  $('.board li').each(function(i) {
    $spot.push($(this));
  });

  $("#reset").click(function() {
    reset();
  });

  $('.board li').on('click', function(event) {
    if ($(this).hasClass('disable')) {
      $('h1').html('This spot is already filled');
    } else {
      turns = addClassAddTurnAddSign(turns, this);
      theMainfunction();
      if (turns === 9) {
        reset();
        $('h1').html("The Game Is Draw")
      }
    }
  });

  var theMainfunction = function() {
    var noughts = [];
    var crosses = [];
    for (var i = 0; i < $spot.length; i++) {
      if ($spot[i].hasClass('nought')) {
        noughts.push(i);
        checkWin(noughts);
      } else if ($spot[i].hasClass('cross')) {
        crosses.push(i);
        checkWin(crosses);
      }
    }
  };

  var addClassAddTurnAddSign = function(turn, that) {
    if (turn % 2 === 0) {
      $(that).addClass('disable nought')
      $(that).text(' O');
      $('h1').html("Player Two's Turn")
    } else {
      $(that).addClass('disable cross')
      $(that).text(' X');
      $('h1').html("Player One's Turn")
    }
    turn++;
    return turn;
  };

  var checkWin = function(array) {
    var winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (var i = 0; i < winPatterns.length; i++) {
      var isSuperset = winPatterns[i].every(function(val) {
        return array.indexOf(val) >= 0;
      });
      if (isSuperset && turns % 2 === 0) {
        $('h1').html("Player One Won");
        reset();
      } else if (isSuperset && turns % 2 !== 0) {
        $('h1').html("Player Two Won");
        reset();
      }
    }
  };

  var reset = function() {
    $(".board li").text("");
    $(".board li").removeClass('disable');
    $(".board li").removeClass('nought');
    $(".board li").removeClass('cross');
    turns = 0;
  }
});
