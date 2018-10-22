//EventListeners.js

////////////////////////////// EVENT LISTENERS

document.addEventListener('keydown',keydown);

function keydown(evt) {
  var key = evt.keyCode;
  switch(key) {
    case 49:
    console.log('1 pressed');
    createGebo(tileCount / 2);
    break;

    case 32:
    console.log('space');
    changeTurn();
    break;
  }
}
