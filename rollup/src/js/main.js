import generateJoke from "./generateJoke";
import "./../scss/main.scss";
import laughing from "./../img/laughing.svg";

const laughtImg = document.getElementById("laughtImg");
laughtImg.src = laughing;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);

generateJoke();

module.exports = function () {
  import("./greetingsHelper").then(({ sayHelloTo }) =>
    console.log(sayHelloTo("Lukas"))
  );
};
