// alert("working");

//detecting onscreen button press
var upperLimit = document.querySelectorAll(".drum").length;
for (let index = 0; index < upperLimit; index++) {
  document
    .querySelectorAll("button")
    [index].addEventListener("click", function () {
      var buttonName = this.innerHTML;
      handleclick(buttonName);
      buttonAnimation(buttonName);
    });
}

//detecting keyboard button press
document.addEventListener("keydown", function (e) {
  var key = e.key;
  handleclick(key);
  buttonAnimation(key);
});

//making the sound
function handleclick(key) {
  switch (key) {
    case "w":
      var a1 = new Audio("./sounds/crash.mp3");
      a1.play();
      break;

    case "a":
      var a2 = new Audio("./sounds/kick-bass.mp3");
      a2.play();
      break;

    case "s":
      var a1 = new Audio("./sounds/snare.mp3");
      a1.play();
      break;

    case "d":
      var a1 = new Audio("./sounds/tom-1.mp3");
      a1.play();
      break;

    case "j":
      var a1 = new Audio("./sounds/tom-2.mp3");
      a1.play();
      break;

    case "k":
      var a1 = new Audio("./sounds/tom-3.mp3");
      a1.play();
      break;

    case "l":
      var a1 = new Audio("./sounds/tom-4.mp3");
      a1.play();
      break;

    default:
      console.log(key);
      break;
  }
}

function buttonAnimation(key) {
  var buttonSelector = document.querySelector("." + key);
  buttonSelector.classList.add("pressed");

  setTimeout(() => {
    buttonSelector.classList.remove("pressed");
  }, 100);
}
