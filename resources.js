//resource

class Coal extends Tile {
  constructor(x,y,width,height,tileID) {
    super (x,y,width,height,tileID);
    this.tileID = tileID;
    this.tileID = null;
    this.tile = tileList[this.tileID];
    this.coalID = null;
    this.color = 'grey';
    this.type = 'coal';

    this.ore = 100;
  }
  drawCoal() {
    super.drawTile();
    ctx.fillText('coalID: ' + this.coalID, this.x+3,this.y+tileHeight/2 +7);
    ctx.fillText('occ: ' + this.type, this.x+3, this.y+tileHeight/2+17);
    ctx.fillText('ore: ' + this.ore, this.x + 3, this.y + tileHeight/2 + 25);
  }
  getID() {
    this.coalID = coalList.indexOf(this);
  }
  killMe() {
    coalList.splice(this.coalID, 1);
    var tile = tileList[this.tileID];
    tile.tileOccupant = null;
  }
  checkOreLevel() {
    if (this.ore <= 0) {
      this.killMe();
    }
  }
  updateCoal() {
    this.getID();
    this.checkOreLevel();
  }
}

function updateCoal() {
  for (i=0;i<coalList.length;i++) {
    coalList[i].drawCoal();
    coalList[i].updateCoal();
  }
}
function createCoal(tileID) {
  var tile = tileList[tileID];
  var tileX = tileList[tileID].x;
  var tileY = tileList[tileID].y;
  var coal = new Coal (tileX,tileY);
  coalList.push(coal);
  coal.coalID = coalList.indexOf(coal);
  coal.tileID = tileID;
  tile.tileOccupant = 'coal';

}
function createCoalMap() {
  for (i=23;i<28;i++) {
    createCoal(i);
  }
  createCoal(33);
  createCoal(34);
  createCoal(35);
}
createCoalMap();
