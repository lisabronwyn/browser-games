var board = [];
for (var row = 0; row < 20; row++) {
	board[row] = [];
	for (var tile = 0; tile < 10; tile++) {
		board[row][tile] = false;
	}
}

var board = [];
board[0] = [];
board[0][0] = false;
board[0][1] = false;
...
board[0][8] = false;
board[0][9] = false;
board[1] = [];
board[1][0] = false;
board[1][1] = false;
...
board[19][8] = false;
board[19][9] = false;

var canvas = document.getElementById("board");
var ctx = canvas.getContext("2d");

var width = 10;
var height = 20;
var tilesz = 24;

canvas.width = width * tilesz;
canvas.height = height * tilesz;

function drawSquare(x, y) {
	ctx.fillRect(x * tilesz, y * tilesz, tilesz, tilesz);
	ss = ctx.strokeStyle;
	ctx.strokeStyle = "#555";
	ctx.strokeRect(x * tilesz, y * tilesz, tilesz, tilesz);
	ctx.strokeStyle = "#888";
	ctx.strokeRect(x * tilesz + 3*tilesz/8, y * tilesz + 3*tilesz/8, tilesz/4, tilesz/4);
	ctx.strokeStyle = ss;
}

function drawBoard() {
	fs = ctx.fillStyle;
	for (var y = 0; y < height; y++) {
		for (var x = 0; x < width; x++) {
			ctx.fillStyle = board[y][x] ? 'red' : 'white';
			drawSquare(x, y, tilesz, tilesz);
		}
	}
	ctx.fillStyle = fs;

ctx.fillStyle = board[y][x] == true ? 'red' : 'white';
