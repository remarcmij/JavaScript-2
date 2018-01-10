(function () {
  'use strict';

  const board = [
    ['T', 'T', '.', 'F'],
    ['T', '.', '.', '.'],
    ['.', '.', '.', '.'],
    ['R', '.', '.', 'W']
  ];

  const robot = {
    x: 0,
    y: 0,
    dir: 'up',
  };

  const trailIndicators = {
    left: '←',
    right: '→',
    up: '↑',
    down: '↓'
  };

  let flagReached = false;

  const imageMap = {
    T: '<img src="img/tree.png"',
    W: '<img src="img/water.png"',
    F: '<img src="img/goal.png"',
    R: '<img src="img/robot.png"'
  };

  function render() {
    const target = document.getElementById('target');
    target.innerHTML = '';
    renderBoard(target);
    renderButtons(target);
  }

  function renderButtons(target) {
    const div = document.createElement('div');
    target.appendChild(div);

    const turnLeftButton = document.createElement('button');
    turnLeftButton.innerHTML = 'turn left';
    turnLeftButton.addEventListener('click', function () {
      turn('left');
    });
    div.appendChild(turnLeftButton);

    const moveButton = document.createElement('button');
    moveButton.innerHTML = 'move';
    moveButton.addEventListener('click', function () {
      move();
    });
    div.appendChild(moveButton);

    const turnRightButton = document.createElement('button');
    turnRightButton.innerHTML = 'turn right';
    turnRightButton.addEventListener('click', function () {
      turn('right');
    });
    div.appendChild(turnRightButton);
  }

  function renderBoard(target) {
    const table = document.createElement('table');
    target.appendChild(table);
    for (let row = board.length - 1; row >= 0; row--) {
      const cells = board[row];
      const tr = document.createElement('tr');
      table.appendChild(tr);
      let rowHtml = '';
      for (let col = 0; col < cells.length; col++) {
        const cell = cells[col];
        const img = imageMap[cell] || '';
        if (cell === 'R') {
          let classString = robot.dir;
          if (flagReached) {
            classString += ' at-flag';
          }
          rowHtml += `<td class="${classString}">${img}</td>`;
        } else {
          rowHtml += `<td>${img}</td>`;
        }
      }
      tr.innerHTML = rowHtml;
    }
  }

  function move() {
    let x = robot.x;
    let y = robot.y;

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
        x = x < board[0].length - 1 ? x + 1 : x;
        break;
    }

    const cellContents = board[y][x];

    if (cellContents === '.' || cellContents === 'F') {
      board[robot.y][robot.x] = trailIndicators[robot.dir];
      robot.x = x;
      robot.y = y;
      board[y][x] = 'R';
      if (cellContents === 'F') {
        flagReached = true;
      }
    }

    render();
  }

  function turn(turnDirection) {
    if (turnDirection !== 'left' && turnDirection !== 'right') {
      console.log('ignoring invalid turn', turnDirection);
      return;
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

    render();
  }

  board.reverse();
  render();
})();
