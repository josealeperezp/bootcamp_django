var player1Name = prompt("First player:");
var player2Name = prompt("Second player");

var player1 = {
  img: 'blue.png',
  name: player1Name,
  color: 'blue'
}

var player2 = {
  img: 'red.png',
  name: player2Name,
  color: 'red'
}

var players = [player1, player2];
var turn = 0;
var gameOver = false;

changeTurn();

function changeTurn() {
  if(turn == 0) {
    turn = 1;
  } else {
    turn = 0;
  }
  var turnMessage = $('h3');
  turnMessage.text(players[turn].name+' : it is your turn, plase pick a column to drop your '+players[turn].color+' chip');
}

function playOnClick() {
  if(!gameOver) {
    var chipPos = placeChip(players[turn],  this.id, this.parentElement.id);
    if(chipPos) {
      if(checkIfWin(players[turn],  chipPos[0], chipPos[1])) {
        finishGame(players[turn]);
      } else {
        changeTurn();
      }
    } else {
      alert('You can\'t put chip there');
    }
  }
}

function finishGame(player) {
  var turnMessage = $('h3');
  turnMessage.text(player.name+' Win!');
  gameOver = true;
}

function placeChip(player, currentX, currentY) {
  XIndex = '#'+currentX;
  var i = 0;
  for (i = 5; i >= 0; i--) {
    YIndex = '#r'+i;
    chip = $(YIndex).find(XIndex).find('img');
    if(chip.attr('src') == 'grey.png') {
      chip.attr('src',player.img);
      return [currentX,'r'+i];
    }
  }

  if(i < 0) {
    return undefined;
  }
}

function checkIfWin(player, currentX, currentY) {
  for(var i = -1; i <= 1; i++){
    for(var j = -1; j <= 1; j++){
      if(!(i == 0 && j == 0)){
        if(checkRow(player, currentX, currentY, i, j)) {
          return true;
        }
      }
    }
  }
  return false;
}

function checkRow(player, currentX, currentY, factorX, factorY) {
  var count = 1;
  while(true) {
    var nextX = 'c'+(parseInt(currentX[1])+factorX);
    var nextY = 'r'+(parseInt(currentY[1])+factorY);
    var nextChip = $('#'+nextY).find('#'+nextX);
    if(nextChip) {
      nextChipColorImg = nextChip.find('img').attr('src');
      if(nextChipColorImg != player.img) {
        return false;
      } else {
        currentX = nextX;
        currentY = nextY;
        count++;
      }
    } else {
      return false;
    }

    if(count == 4) {
      return true;
    }
  }
}

function buildPosition(currentPos, factor) {
  var currentPosSplit = currentPos[1];

}

var chipSlots = $('td');
chipSlots.click(playOnClick);
