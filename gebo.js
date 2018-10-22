//gebo

class Gebo extends Tile {
  constructor(x,y,width,height,tileID) {
    super(x,y,width,height,tileID);
    this.color = 'green';
    this.geboID = null;

    this.leftNeighborTileID = null;
    this.rightNeighborTileID = null;

    this.leftNeighborTile = null;
    this.rightNeighborTile = null;
  }
  drawGebo() {
    super.drawTile();
  }
  moveGebo(direction) {
    var dir = direction;
    switch(dir) {
      case 'left':
      this.x -= tileWidth;
      break;

      case 'up':
      this.y -= tileHeight;
      break;

      case 'right':
      this.x += tileWidth;
      break;

      case 'down':
      this.y += tileHeight;
      break;

      default:
      console.log('default');
    }
  }
}

function updateGebos() {
  for (i=0;i<geboList.length;i++) {
    geboList[i].drawGebo();
  }
}
function drawGebos() {
  for (i=0;i<geboList.length;i++) {
    geboList[i].drawGebo();
  }
}

function geboHandling() {
//  updateGebos();
  geboTurnHandling();
  drawGebos();
}

function createGebo(tileID) {
  var tile = tileList[tileID];
  var tileX = tile.x;
  var tileY = tile.y;
  var gebo = new Gebo(tileX,tileY);
  geboList.push(gebo);
  gebo.tileID = tileID;
  gebo.geboID = geboList.indexOf(gebo);
  gebo.drawGebo();
}

//////////////////////////////////////////////////////////

function geboTurnHandling() {
  for (i=0;i<geboList.length;i++) {
    var gebo = geboList[i];
    var geboID = gebo.geboID;
    declareNeighbors(geboID);
  }
}

function declareNeighbors(geboID) {
    var gebo = geboList[geboID];
    var leftNeighborTileID = gebo.tileID - GRID_COLS;
    var rightNeighborTileID = gebo.tileID + GRID_COLS;
    gebo.leftNeighborTileID = leftNeighborTileID;
    gebo.rightNeighborTileID = rightNeighborTileID;
    var leftNeighborTile = tileList[leftNeighborTileID];
    var rightNeighborTile = tileList[rightNeighborTileID];
    gebo.leftNeighborTile = leftNeighborTile;
    gebo.rightNeighborTile = rightNeighborTile;
    console.log(leftNeighborTileID + ' ' + rightNeighborTileID);
}

function searchNeighbors(geboID) {
  var gebo = geboList[geboID];
  //check left

}


















//
