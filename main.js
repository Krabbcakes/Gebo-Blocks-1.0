var cvsW = canvas.width;
var cvsH = canvas.height;

var tileWidth = 60;
var tileHeight = 60;

const GRID_ROWS = 10;
const GRID_COLS = 10;

var tileCount = GRID_ROWS * GRID_COLS;

var tileList = [];
var geboList = [];
var coalList = [];
var ladderList = [];
var depotList = [];

var turn = 0;
function init() {
  createGrid();
  updateGrid();
  coalCreateNodes();
  drawCoal();
}
init();
function updateAll() {
  ctx.clearRect(0,0,cvsW,cvsH);
  updateGrid();
  geboHandling();
  coalHandling();
}

/////////////////////////////////

function changeTurn() {
  turn += 1;
  updateAll();
  showInfo();
}

function showInfo() {
  console.log('-- turn: '+turn + ' --');
}
