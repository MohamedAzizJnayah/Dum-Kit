//Click Event
for (let i = 0; i < document.querySelectorAll("button").length; i++) {
  document
    .querySelectorAll("button")
    [i].addEventListener("click", function (event) {
      son(document.querySelectorAll("button")[i].innerHTML);
      makeShadow(document.querySelectorAll("button")[i].innerHTML);
    });
  //Key Press Event
  document.addEventListener("keypress", function (event) {
    son(event.key.toLowerCase());
    makeShadow(event.key);
  });
  function son(key) {
    switch (key) {
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
  }
  function makeShadow(classeName) {
    if (classeName in ["w", "a", "s", "d", "j", "k", "l"]) {
      var button = document.querySelector("." + classeName);
      button.classList.add("pressed");
      setTimeout(() => {
        button.classList.remove("pressed");
      }, 100);
    }
  }
}
