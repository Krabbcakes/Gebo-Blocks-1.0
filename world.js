//world

/////////////////////////  TILES
function updateGrid() {
  tileHandling();
}
function tileHandling() {
  updateTiles();
}

class Tile {
  constructor (x,y,width,height,tileID) {
    this.x = x;
    this.y = y;
    this.width = tileWidth;
    this.height = tileHeight;
    this.tileID = null;
    this.color = 'white';

    this.type = null;
  }
  drawTile() {
    drawRect(this.x,this.y,this.width,this.height,this.color);
    ctx.save();
    ctx.fillStyle = 'black';
    ctx.font = '10px Arial';
    ctx.fillText('tileID: '+this.tileID, this.x+3,this.y+10);
    ctx.fillText('type: ' + this.type, this.x+3, this.y+20);
    ctx.restore();
  }
}

function updateTiles() {
  for(i=0;i<tileList.length;i++) {
    tileList[i].drawTile();
  }
}

function createTile(tileX,tileY) {
  var tile = new Tile (tileX,tileY);
  tileList.push(tile);
  tile.tileID = tileList.indexOf(tile);
}
function createGrid() {
  for (i=0;i<GRID_COLS;i++) {
    for (j=0;j<GRID_ROWS;j++) {
      tileX = i*tileWidth;
      tileY = j*tileHeight;
      createTile(tileX,tileY);
    }
  }
}


///////////////

class Coal extends Tile {
  constructor(x,y,width,height,tileID) {
    super(x,y,width,height,tileID);
    this.color = 'grey';
    this.tileID = tileID;
    this.coalID = null;
  }
  drawCoal() {
    super.drawTile();
    var tile = tileList[this.tileID];
    if (tile.type == 'coal') {
      ctx.fillText('coal', this.x+3,this.y+30)
    }
    console.log ('drawCoal');
  }
}
function drawCoal() {
  for(i=0;i<coalList.length;i++) {
    coalList[i].drawCoal();
  }
}
function coalHandling() {
  drawCoal();
  for (i=0;i<coalList.length;i++) {
    var coal = coalList[i];
    var coalID = coalList.indexOf(coal);
    declareType(coalID);
}
}
function createCoal(tileID) {
  var tile = tileList[tileID];
  var tileID = tileID;
  var tileX = tile.x;
  var tileY = tile.y;
  var coal = new Coal (tileX,tileY);
  coalList.push(coal);
  coal.tileID = tileID;
  coal.coalID = coalList.indexOf(coal);
}

function coalCreateNodes() {
  for (i=20;i<24;i++) {
    createCoal(i);
  }
}

function declareType(coalID) {
  var coal = coalList[coalID];
  var tileID = coal.tileID;
  var tile = tileList[tileID];
  tile.type = 'coal';
  console.log('coal');
}













//
