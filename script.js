var correctColor = "";
var colorOptions = [];


function gameStart() {
  // Reset Instruction header
  $(".result").text("Click A Box To Guess");

  // Set unique colors for each box, and store the colors in an array
  let boxes = $(".box").toArray();
  for (let i = 1; i < boxes.length + 1; i++) {
    let red = randNum();
    let green = randNum();
    let blue = randNum();
    let rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
    $("#box" + i).css("background-color", rgb);
    colorOptions.push(rgb);
  }
  // Randomly select one color as the color to guess
  correctColor = colorOptions[Math.floor(Math.random() * 3)];
  $(".rgb-code").text(correctColor);
}


function randNum() {
  let num = Math.floor(Math.random() * 256);
  return num;
}

function checkSelection(rgb) {
  if (rgb === correctColor) {
    $(".result").text("Correct!");
  } else {
    $(".result").text("Incorrect. Try Again.");
  }
}


$(document).ready(function() {
  gameStart();

  $(".box").click(function() {
    let bg = $(this).css("background-color");
    checkSelection(bg);
  });

  /*$(".").click(function() {
    gameStart();
  });*/
});
