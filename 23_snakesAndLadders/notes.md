********************************NOTES********************************

OUTLINE
  1. [#]  Create a player class w ID and POSITION

  2. [#]  Instantiate SnakesLadders with two players at 0
      - [#]   Also with a gameOver binary

  3. [#]  Create a Player instance method that moves player's position

  4. [#]  Map out snakes and ladders into boardKey object

  5. [#]  Create Game instance method PLAY which takes two dice values and moves the intended Player Instance according to the total value as well as the boardKey
      - [#]   Alternates player
           - [#]  except if last roll was a double
      - [#]   Moves player position total value of dice
      - [#]   If player position is represented on boardKey, remaps character to corresponding modified position
  6. [0]  At the completion of each player's turn, assess player position.
      - [#]   If no player's position has exceeded or met 100, Return `Player ${player[id].name} is on square ${player[id].position}`
      - [0]   If player has exceeded 100, modify player position to equal 100 - (position % 100)
      - [#]   If player lands on 100, set gameOver = true and RETURN `Player ${plater[id]} Wins`
      - [0]   If player tries to play another round, RETURN 'Game over!'
----------------------------------------------------------------------
GAME CLASS CONSTRUCTION
  1.  Instantiate two players
      -   id: 0 & id: 1
      -   Each is constructed with a default position of 0
      -   Give each a turn binary
          -   instantiate id: 0 as TRUE & id: 1 as FALSE
  2.  Instantiate GameOver; set to false

GAME CLASS FUNCTIONS
  -   GET player position
  -   SET player position
----------------------------------------------------------------------
PLAYER CLASS
----------------------------------------------------------------------
PLAY FUNCTION
  -   
