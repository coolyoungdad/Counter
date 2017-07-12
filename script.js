//Modify the Quantity up 1 or down 1 ,,, can't go below 0
function modify_qty(val) {
    // initialize localStorage qty
    if(localStorage.qty === undefined){
      console.log('localStorage is not defined! settings .qty to 0.....');
      localStorage.qty = 0;
    }


    document.getElementById('qty').value = localStorage.qty;

    console.log(`localStorage.qty is currently: ${localStorage.qty}`)

    // grab markup, update values
    var qty = document.getElementById('qty').value;
    console.log(`modifying... val: ${val}`);
    var new_qty = parseInt(qty,10) + val;

    if (new_qty < 0) {
        new_qty = 0;
    }

    document.getElementById('qty').value = new_qty;
    // return new_qty;

    // read from localStorage
    console.log(`attempting to update val to: ${new_qty}...`)
    localStorage.qty = new_qty;
    play_audio();
    console.log(`reading localStorage.qty: ${localStorage.qty}...`)
}

//Clear the input back to 0
function clear_qty(){
    localStorage.qty = 0;
    document.getElementById('qty').value = localStorage.qty;
    return clear;
}

//Plays audio at 14 and 28 interactions
function play_audio(){

  if (localStorage.qty == 14) {
    console.log("Audio Played!");
    // var audio = document.getElementById("Sound").play();
    var audio = new Audio("trapsiren.wav");
    audio.play();
  }

  if (localStorage.qty == 28){
    console.log("Audio Played!");
    var audio = new Audio("trapsiren.wav");
    audio.play();
  }

}

// Start listening
document.addEventListener('DOMContentLoaded', readyForClicks);

//Run the modify_qty and clear_qty functions
function readyForClicks() {
  document.getElementById('qty').value = localStorage.qty;

  var upButton = document.getElementById('up');
  upButton.addEventListener('click', function() {modify_qty(+1);}, false);

  var downButton = document.getElementById('down');
  downButton.addEventListener('click', function() {modify_qty(-1);}, false);

  var clearButton = document.getElementById('clearButton');
  clearButton.addEventListener('click', function() {clear_qty(-1);}, false);
}
