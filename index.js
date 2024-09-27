for (let i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    switch (document.querySelectorAll("button")[i].innerHTML) {
      case "w":
        var audio = new Audio("./sounds/tom-" + i + ".mp3");
        audio.play();
        break;
      case "a":
        var audio = new Audio("./sounds/tom-" + i + ".mp3");
        audio.play();
        break;
      case "s":
        var audio = new Audio("./sounds/tom-" + i + ".mp3");
        audio.play();
        break;
      case "d":
        var audio = new Audio("./sounds/tom-" + i + ".mp3");
        audio.play();
        break;
      case "j":
        var audio = new Audio("./sounds/tom-" + i + ".mp3");
        audio.play();
        break;
      case "k":
        var audio = new Audio("./sounds/tom-" + i + ".mp3");
        audio.play();
        break;
      case "l":
        var audio = new Audio("./sounds/tom-" + i + ".mp3");
        audio.play();
        break;
      default:
        break;
    }
  });
  document.addEventListener("keypress", function (event) {
    switch (event.key) {
      case "w":
        var audio = new Audio("./sounds/tom-0.mp3");
        audio.play();

        break;
      case "a":
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();

        break;
      case "s":
        var audio = new Audio("./sounds/tom-2.mp3");
        audio.play();

        break;
      case "d":
        var audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
        break;
      case "j":
        var audio = new Audio("./sounds/tom-4.mp3");
        audio.play();
        break;
      case "k":
        var audio = new Audio("./sounds/tom-5.mp3");
        audio.play();
        break;
      case "l":
        var audio = new Audio("./sounds/tom-6.mp3");
        audio.play();
        break;
      default:
        break;
    }
  });
}
