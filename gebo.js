// Gebo
class Gebo extends Tile {
  constructor(x,y,width,height,tileID) {
    super(x,y,width,height,tileID);
    this.color = 'green';
    this.tileID = tileID;
    this.tileID = null;
    this.geboID = null;
    this.leftTileOccupied = false;
    this.rightTileOccupied = false;
    this.leftTile = null;
    this.rightTile = null;

    this.coalOreInventory = 0;


    this.velX = tileWidth;
    this.velY = tileHeight;
  }
  drawGebo() {
    super.drawTile();
  }
  moveGebo(direction) {
    var dir = direction;
    switch(dir) {
      case 'left':
      this.x -= this.velX;
      this.tileID -= GRID_ROWS;
//      geboTileHandling()
      break;
      case 'up':
      this.y -= this.velY;
      this.tileID -= 1;
//      geboTileHandling()
      break;
      case 'right':
      this.x += this.velX;
      this.tileID += GRID_ROWS;
//      geboTileHandling()
      break;
      case 'down':
      this.y += this.velY;
      this.tileID += 1;
//      geboTileHandling()
      break;
    }
  }
    mineCoal(tileID) {
      var harvestTileID = tileID
      for (i=0;i<coalList.length;i++) {
        var coal = coalList[i];
        if (harvestTileID == coal.tileID) {
          coal.ore -= 10;
        }
      }
    }
    searchForOre() {
      console.log('searchForOre');
        if (this.leftTileOccupied == false && this.rightTileOccupied == false) {
        this.moveGebo('left');
      }
      else {
        console.log('nah');
        console.log('leftTileOccupied: ' + this.leftTileOccupied + ' ' +', rightTileOccupied: '+ this.rightTileOccupied);
      }
    }
  updateGebo() {
    //
  }
}
/////////////////////////////////////////////////////////
function updateGebo() {
  for (i=0;i<geboList.length;i++) {
    geboList[i].drawGebo();
    geboList[i].updateGebo();
  }
}
function createGebo(tileID) {
  var tileX = tileList[tileID].x;
  var tileY = tileList[tileID].y;
  var gebo = new Gebo(tileX,tileY);
  geboList.push(gebo);
  gebo.geboID = geboList.indexOf(gebo);
  gebo.tileID = tileID;
}



function geboTileHandling() {
    checkTiles();
    checkCollide();
}
function checkCollide() {
  for (i=0;i<geboList.length;i++) {
    for (j=0;j<coalList.length;j++) {
      gebo = geboList[i];
      coal = coalList[j];
      if (gebo.tileID == coal.tileID) {
        var tileID = gebo.tileID;
        var tile = tileList[tileID];
      }
    }
  }
}
/* function checkLeftTile() {
  var leftTileID = gebo.tileID - GRID_ROWS;
  var leftTile = tileList[leftTileID];
} */
function checkTiles() {
  for (i=0;i<geboList.length;i++) {
      var gebo = geboList[i];
      var tile = tileList[i];
      //left
      var leftTileID = gebo.tileID - GRID_ROWS;
      var leftTile = tileList[leftTileID];
      gebo.leftTile = leftTile;

      if (gebo.leftTile.tileOccupant == 'coal') {
        gebo.mineCoal(leftTileID);
        gebo.leftTileOccupied = true;
        console.log('next to coal, left!');
      }
      if (gebo.leftTile.tileOccupant == null) {
        gebo.leftTileOccupied = false;
      }
      console.log("leftTileID: " + leftTileID);
      console.log("leftTile.tileOccupant: " + leftTile.tileOccupant);
      //Right
      var rightTileID = gebo.tileID + GRID_ROWS;
      var rightTile = tileList[rightTileID];
      gebo.rightTile = rightTile;

      if (gebo.rightTile.tileOccupant == 'coal') {
        gebo.mineCoal(rightTileID);
        gebo.rightTileOccupied = true;
      }
      console.log("rightTileID: " + leftTileID);
      console.log("rightTile.tileOccupant: " + rightTile.tileOccupant);
  }
}

function geboDetermineState() {
  for (i=0;i<geboList.length;i++) {
    var gebo = geboList[i];
    if (gebo.coalOreInventory <= 100) {
      gebo.searchForOre();
    }
  }
}



function geboTurnHandling() {
  geboTileHandling();
  geboDetermineState();
  console.log ('geboTurnHandling');
}
