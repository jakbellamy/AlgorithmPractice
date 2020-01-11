//  PLAYER CLASS
function Player(id, name, position = 0) {
  this.id = id;
  this.name = name;
  this.position = position;
};

//  GET PLAYER POSITION
Player.prototype.find = function() {
  return this.position;
}

//  SET PLAYER POSITION
Player.prototype.move = function(num) {
  this.position += num;
}

//  GAME CLASS
function SnakesLadders() {
  this.players = [
    new Player(0, 'Player 1'),
    new Player(1, 'Player 2')
  ];
  this.turnSwitch = true;
  this.gameOver = false;
};

SnakesLadders.prototype.boardKey = {
  "16": 6, "46": 25, "49": 11, "62": 19, "64": 60, "74": 53, "89": 68, "92": 88, "95": 75, "99": 80, "2": 38, "7": 14, "8": 31, "15": 26, "21": 42, "28": 84, "36": 44, "51": 67, "71": 91, "78": 98, "87": 94
};

//  SHOW PLAYERS (for debugging)
SnakesLadders.prototype.showPlayers = function(){
  console.log(this.players)
}

//  ROLL DICE
SnakesLadders.prototype.play = function(die1, die2) {
  if(this.gameOver === true) { return 'Game Over!' }

  let currentPlayer = this.players[this.turnSwitch === true ? 0 : 1];
  currentPlayer.move(die1 + die2);

  if(this.boardKey[`${currentPlayer.position}`]){
    currentPlayer.position = this.boardKey[`${currentPlayer.position}`];
  };
  if(die1 != die2){
    this.turnSwitch = !this.turnSwitch
  };

  switch(true){
    case currentPlayer.position < 100:
      return `Player ${currentPlayer.name} is on square ${currentPlayer.position}`
      break;
    case currentPlayer.position > 100:
      currentPlayer.position = 100 - (currentPlayer.position % 100)
      return `Player ${currentPlayer.name} is on square ${currentPlayer.position}`
      break;
    case currentPlayer.position === 100:
      this.gameOver = true
      return `${currentPlayer.name} Wins!`
      break;
  }
}
