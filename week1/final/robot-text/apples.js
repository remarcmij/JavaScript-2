(function () {
  'use strict';

  const board = [
    ['.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.'],
    ['R', '.', '.', '.', 'F'],
    ['.', 'A', 'A', 'A', '.'],
    ['.', '.', '.', '.', '.']
  ];

  const robot = {
    x: 0,
    y: 2,
    dir: 'right',
  };

  let flagReached = false;
  let appleEaten = false;
  let applesEaten = 0;
  let moves = 0;

  board.reverse();

  const trailIndicators = {
    left: '←',
    right: '→',
    up: '↑',
    down: '↓'
  };

  function render() {
    console.log('\n ' + moves + ':');
    for (let row = board.length - 1; row >= 0; row--) {
      const cells = board[row];
      let line = '';
      for (let col = 0; col < cells.length; col++) {
        line += ' ' + cells[col] + ' ';
      }
      console.log(line);
    }
    if (appleEaten) {
      console.log('\nYUM!\n');
    }
    if (flagReached) {
      console.log('\nHurray! Flag reached in ' + moves + ' steps!');
      console.log('Apples eaten: ' + applesEaten);
    }
  }

  function move() {
    let x = robot.x;
    let y = robot.y;
    appleEaten = false;

    switch (robot.dir) {
      case 'up':
        y = y < board.length - 1 ? y + 1 : y;
        break;
      case 'down':
        y = y > 0 ? y - 1 : y;
        break;
      case 'left':
        x = x > 0 ? x - 1 : x;
        break;
      case 'right':
        x = x < board[y].length - 1 ? x + 1 : x;
        break;
    }

    const cellContents = board[y][x];

    if (cellContents === '.' || cellContents === 'F' || cellContents === 'A') {
      board[robot.y][robot.x] = trailIndicators[robot.dir];
      robot.x = x;
      robot.y = y;
      board[y][x] = 'R';
      if (cellContents === 'F') {
        flagReached = true;
      } else if (cellContents === 'A') {
        appleEaten = true;
        applesEaten += 1;
      }
    }

    moves += 1;
    render();
  }

  function turn(turnDirection) {
    if (turnDirection !== 'left' && turnDirection !== 'right') {
      console.log('ignoring invalid turn', turnDirection);
    }
    switch (robot.dir) {
      case 'up':
        robot.dir = turnDirection === 'left' ? 'left' : 'right';
        break;
      case 'down':
        robot.dir = turnDirection === 'left' ? 'right' : 'left';
        break;
      case 'left':
        robot.dir = turnDirection === 'left' ? 'down' : 'up';
        break;
      case 'right':
        robot.dir = turnDirection === 'left' ? 'up' : 'down';
        break;
    }
  }

  // Render of initial state
  render();

  // Start of robot instructions
  move();
  turn('right');
  move();
  turn('left');
  move();
  move();
  turn('left');
  move();
  turn('right');
  move();
  // End of robot instructions

})();
