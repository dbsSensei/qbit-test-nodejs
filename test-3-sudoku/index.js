const data =
  "105802000090076405200400819019007306762083090000061050007600030430020501600308900005030081902850060600004050007402830349760005008300490150087002090000600026049503105802000090076405200400819019007306762083090000061050007600030430020501600308900005030081902850060600004050007402830349760005008300490150087002090000600026049503290500007700000400004738012902003064800050070500067200309004005000080700087005109080020000040500320020309046600090004000640501134050700360004002407230600000700450608730000200000460000064820080005701900618004031000080860200039050000100100456200370000001000700005408061090000010000050090460086002030000000000694005203800149500000689100800000029150000008403000050200005000090240801084700910500000060060410000030500804504200010008009000790806103000005400050000007800000702000704600610300500096040001100060004504810390007950043030080000405023018010630059059070830003590007000075400000000008080190000300001060000000034000068170204000603900000020530200000300000000050703008000028070700000043000000000003904105400300800100040000968000200302609005500730000000000900000940000000000109000057060008500006000000003019082040";
const splitData = data.match(/.{9}/g);
const splitDataToArray = splitData.map((data) => data.split("")).slice(0, 9);
const board = [];

splitDataToArray.map((element) => {
  board.push(element.map((x) => +x));
});

function nextEmptySpot(board) {
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (board[i][j] === 0) return [i, j];
    }
  }
  return [-1, -1];
}

function checkRow(board, row, value) {
  for (var i = 0; i < board[row].length; i++) {
    if (board[row][i] === value) {
      return false;
    }
  }

  return true;
}

function checkColumn(board, column, value) {
  for (var i = 0; i < board.length; i++) {
    if (board[i][column] === value) {
      return false;
    }
  }

  return true;
}

function checkSquare(board, row, column, value) {
  boxRow = Math.floor(row / 3) * 3;
  boxCol = Math.floor(column / 3) * 3;

  for (var r = 0; r < 3; r++) {
    for (var c = 0; c < 3; c++) {
      if (board[boxRow + r][boxCol + c] === value) return false;
    }
  }

  return true;
}

function checkValue(board, row, column, value) {
  if (
    checkRow(board, row, value) &&
    checkColumn(board, column, value) &&
    checkSquare(board, row, column, value)
  ) {
    return true;
  }

  return false;
}

function solve(board) {
  let emptySpot = nextEmptySpot(board);
  let row = emptySpot[0];
  let col = emptySpot[1];

  // there is no more empty spots
  if (row === -1) {
    return board;
  }

  for (let num = 1; num <= 9; num++) {
    if (checkValue(board, row, col, num)) {
      board[row][col] = num;
      solve(board);
    }
  }

  if (nextEmptySpot(board)[0] !== -1) board[row][col] = 0;

  return board;
}

console.log(solve(board));
